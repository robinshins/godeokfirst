'use client';

import { useState, useEffect, useRef } from 'react';
import { PatientIntakeData } from '@/lib/patient-intake-types';
import { CostWarningCard as CostWarningCardType } from '@/lib/types';
import CostWarningCard from '@/components/CostWarningCard';
import html2canvas from 'html2canvas-pro';

export default function PatientIntakeList() {
  const [intakes, setIntakes] = useState<PatientIntakeData[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedIntake, setSelectedIntake] = useState<PatientIntakeData | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [dateFilter, setDateFilter] = useState<'all' | 'today' | 'week' | 'month'>('all');
  const [editedMemo, setEditedMemo] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [expandedChatId, setExpandedChatId] = useState<string | null>(null);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadTarget, setDownloadTarget] = useState<PatientIntakeData | null>(null);
  const [printTarget, setPrintTarget] = useState<PatientIntakeData | null>(null);
  const modalContentRef = useRef<HTMLDivElement>(null);
  const hiddenModalRef = useRef<HTMLDivElement>(null);
  const printModalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetchIntakes();
  }, []);

  // 5초마다 문진표 목록 자동 업데이트 (탭 활성화 시에만)
  useEffect(() => {
    let pollingInterval: NodeJS.Timeout;

    const startPolling = () => {
      pollingInterval = setInterval(() => {
        if (document.visibilityState === 'visible') {
          console.log('🔄 5초 주기 문진표 목록 업데이트...');
          fetchIntakes();
        }
      }, 5000); // 5초
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        console.log('👁️ 탭 활성화 - 문진표 즉시 업데이트');
        fetchIntakes();
        if (pollingInterval) clearInterval(pollingInterval);
        startPolling();
      } else {
        console.log('🔕 탭 비활성화 - 문진표 폴링 중지');
        if (pollingInterval) clearInterval(pollingInterval);
      }
    };

    // 초기 폴링 시작
    startPolling();

    // visibility 변경 감지
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      if (pollingInterval) clearInterval(pollingInterval);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  useEffect(() => {
    if (selectedIntake) {
      setEditedMemo(selectedIntake.memo || '');
    }
  }, [selectedIntake]);

  const fetchIntakes = async () => {
    try {
      const response = await fetch('/api/patient-intake');
      if (!response.ok) throw new Error('Failed to fetch patient intakes');
      const result = await response.json();
      setIntakes(result.data || []);
    } catch (error) {
      console.error('Error fetching patient intakes:', error);
    } finally {
      setLoading(false);
    }
  };

  const saveMemo = async () => {
    if (!selectedIntake?.id) return;

    setIsSaving(true);
    try {
      const response = await fetch(`/api/patient-intake/${selectedIntake.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ memo: editedMemo }),
      });

      if (!response.ok) throw new Error('Failed to save memo');

      // Update local state
      setIntakes(intakes.map(intake =>
        intake.id === selectedIntake.id
          ? { ...intake, memo: editedMemo }
          : intake
      ));

      setSelectedIntake({ ...selectedIntake, memo: editedMemo });
      alert('메모가 저장되었습니다.');
    } catch (error) {
      console.error('Error saving memo:', error);
      alert('메모 저장에 실패했습니다.');
    } finally {
      setIsSaving(false);
    }
  };

  const downloadAsJPG = async (targetIntake?: PatientIntakeData) => {
    const intake = targetIntake || selectedIntake;
    const targetRef = targetIntake ? hiddenModalRef : modalContentRef;

    if (!targetRef.current || !intake) return;

    setIsDownloading(true);
    try {
      // Get the modal content element
      const element = targetRef.current;

      // Scroll to top to capture from beginning
      element.scrollTop = 0;

      // Wait for any pending renders
      await new Promise(resolve => setTimeout(resolve, 100));

      // Use html2canvas-pro (supports oklch colors)
      const canvas = await html2canvas(element, {
        backgroundColor: '#ffffff',
        scale: 2, // High quality
        logging: false,
        useCORS: true,
        allowTaint: true,
        windowHeight: element.scrollHeight,
        height: element.scrollHeight,
      });

      // Convert canvas to JPG and download
      canvas.toBlob((blob) => {
        if (!blob) {
          alert('이미지 생성에 실패했습니다.');
          return;
        }

        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        const fileName = `문진표_${intake.name}_${new Date().toISOString().split('T')[0]}.jpg`;
        link.href = url;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      }, 'image/jpeg', 0.95);

    } catch (error) {
      console.error('Error downloading JPG:', error);
      alert('다운로드 중 오류가 발생했습니다: ' + (error as Error).message);
    } finally {
      setIsDownloading(false);
    }
  };

  const printIntake = async (targetIntake?: PatientIntakeData) => {
    const intake = targetIntake || selectedIntake;
    if (!intake) return;

    // Set print target if printing from list
    if (targetIntake) {
      setPrintTarget(targetIntake);
      // Wait for DOM to update
      await new Promise(resolve => setTimeout(resolve, 300));
    }

    // Add print class to body to trigger print-specific styles
    document.body.classList.add('printing-intake');

    // Trigger browser print dialog
    window.print();

    // Remove print class and clear print target after printing
    setTimeout(() => {
      document.body.classList.remove('printing-intake');
      if (targetIntake) {
        setPrintTarget(null);
      }
    }, 100);
  };

  // Filter intakes based on search and date
  const filteredIntakes = intakes.filter((intake) => {
    // Name search filter
    const matchesSearch = intake.name?.toLowerCase().includes(searchTerm.toLowerCase());

    // Date filter
    let matchesDate = true;
    if (dateFilter !== 'all' && intake.created_at) {
      const intakeDate = new Date(intake.created_at);
      const now = new Date();
      const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

      switch (dateFilter) {
        case 'today':
          matchesDate = intakeDate >= today;
          break;
        case 'week':
          const weekAgo = new Date(today);
          weekAgo.setDate(weekAgo.getDate() - 7);
          matchesDate = intakeDate >= weekAgo;
          break;
        case 'month':
          const monthAgo = new Date(today);
          monthAgo.setMonth(monthAgo.getMonth() - 1);
          matchesDate = intakeDate >= monthAgo;
          break;
      }
    }

    return matchesSearch && matchesDate;
  });

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <>
      <style jsx global>{`
        @media print {
          /* A4 page setup - remove browser headers/footers */
          @page {
            size: A4 portrait;
            margin: 0;
          }

          /* Add margin to body instead to remove headers/footers */
          body.printing-intake {
            margin: 10mm 8mm 10mm 20mm !important;
          }

          /* Hide everything first */
          body.printing-intake * {
            visibility: hidden !important;
          }

          /* Remove height from non-modal elements to prevent blank pages */
          body.printing-intake *:not(.patient-intake-print-root):not(.patient-intake-print-root *) {
            height: 0 !important;
            max-height: 0 !important;
            min-height: 0 !important;
            overflow: hidden !important;
            margin: 0 !important;
            padding: 0 !important;
          }

          /* Show only the print modal */
          body.printing-intake .patient-intake-print-root,
          body.printing-intake .patient-intake-print-root * {
            visibility: visible !important;
          }

          body.printing-intake .patient-intake-print-root {
            height: auto !important;
            max-height: none !important;
          }

          /* Show patient name at top when printing */
          body.printing-intake .print-patient-name {
            display: block !important;
            visibility: visible !important;
          }

          /* Add extra left padding to print content */
          body.printing-intake .patient-intake-print-root .print-content {
            padding-left: 60px !important;
            padding-right: 60px !important;
            padding-top: 24px !important;
            padding-bottom: 24px !important;
          }

          /* Reset modal positioning for print */
          body.printing-intake .patient-intake-print-root {
            position: absolute !important;
            left: 0 !important;
            top: 0 !important;
            width: 100% !important;
            height: auto !important;
            background: white !important;
            padding: 0 !important;
            margin: 0 !important;
          }

          /* Hide buttons in print */
          body.printing-intake button {
            display: none !important;
            visibility: hidden !important;
            height: 0 !important;
            padding: 0 !important;
            margin: 0 !important;
            overflow: hidden !important;
          }

          /* Reset modal inner container */
          body.printing-intake .patient-intake-print-root > div {
            max-width: 100% !important;
            max-height: none !important;
            min-height: 0 !important;
            height: auto !important;
            overflow: visible !important;
            box-shadow: none !important;
            border-radius: 0 !important;
            background: white !important;
            padding: 0 !important;
            margin: 0 !important;
          }

          /* Remove all height constraints */
          body.printing-intake * {
            min-height: 0 !important;
          }

          /* Remove all padding from content wrapper */
          body.printing-intake .p-6 {
            padding: 0.3rem !important;
          }

          /* Remove bottom padding that creates blank pages */
          body.printing-intake .patient-intake-print-root > div:last-child {
            padding-bottom: 0 !important;
            margin-bottom: 0 !important;
          }

          /* Ensure no min-height on any container */
          body.printing-intake div,
          body.printing-intake section {
            min-height: 0 !important;
          }

          /* Content styling - maximum compact for first page */
          body.printing-intake section {
            page-break-inside: avoid;
            margin-bottom: 0.2rem;
          }

          body.printing-intake h3,
          body.printing-intake h4 {
            font-size: 8.5pt;
            font-weight: bold;
            margin-bottom: 0.12rem;
            border-bottom: 0.5px solid #000;
            padding-bottom: 0.03rem;
          }

          body.printing-intake dt {
            font-size: 6pt;
            font-weight: 600;
            margin-bottom: 0.02rem;
          }

          body.printing-intake dd {
            font-size: 7pt;
            margin-bottom: 0.12rem;
            line-height: 1.1;
          }

          /* Maximum compact grid layout */
          body.printing-intake dl.grid {
            gap: 0.1rem !important;
          }

          body.printing-intake .space-y-3 > * + * {
            margin-top: 0.2rem !important;
          }

          body.printing-intake .space-y-6 > * + * {
            margin-top: 0.25rem !important;
          }

          /* Add page break after consent section ONLY if NOT the last section */
          body.printing-intake .consent-section:not(.last-actual-section) {
            page-break-after: always !important;
          }

          /* Explicitly prevent page break on last actual section */
          body.printing-intake .consent-section.last-actual-section {
            page-break-after: avoid !important;
          }

          /* Chat consultation section - no forced page break */
          body.printing-intake .border-l-4.border-blue-500 {
            page-break-inside: auto !important;
            font-size: 5.5pt;
            padding: 0.2rem !important;
            margin-bottom: 0 !important;
            page-break-after: avoid !important;
          }

          /* Extremely compact chat consultation styling */
          body.printing-intake .border-l-4.border-blue-500 h4 {
            font-size: 8.5pt;
            margin-bottom: 0.15rem;
          }

          body.printing-intake .border-l-4.border-blue-500 .text-sm {
            font-size: 5.5pt !important;
            line-height: 1.1 !important;
          }

          body.printing-intake .border-l-4.border-blue-500 .text-xs {
            font-size: 4.5pt !important;
            line-height: 1.1 !important;
          }

          body.printing-intake .border-l-4.border-blue-500 .p-3 {
            padding: 0.25rem !important;
          }

          body.printing-intake .border-l-4.border-blue-500 .mb-2 {
            margin-bottom: 0.1rem !important;
          }

          body.printing-intake .border-l-4.border-blue-500 .mb-4 {
            margin-bottom: 0.15rem !important;
          }

          body.printing-intake .border-l-4.border-blue-500 .space-y-2 > * + * {
            margin-top: 0.15rem !important;
          }

          body.printing-intake .border-l-4.border-blue-500 .space-y-4 > * + * {
            margin-top: 0.2rem !important;
          }

          /* Show all chat details when printing */
          body.printing-intake .chat-details {
            display: block !important;
          }

          /* Remove max-height limit on chat history for print */
          body.printing-intake .max-h-96 {
            max-height: none !important;
          }

          /* Try to keep individual chat items together, but allow breaks if needed */
          body.printing-intake .border-blue-200 {
            page-break-inside: auto;
            margin-bottom: 0.3rem;
          }
        }
      `}</style>
      <div className="space-y-4 patient-intake-screen">
        {/* Search and Filter */}
        <div className="bg-white p-4 rounded-lg shadow space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Search */}
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">이름 검색</label>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="환자 이름으로 검색..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Date Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">기간</label>
            <div className="flex gap-2">
              {(['all', 'today', 'week', 'month'] as const).map((filter) => (
                <button
                  key={filter}
                  onClick={() => setDateFilter(filter)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    dateFilter === filter
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {filter === 'all' && '전체'}
                  {filter === 'today' && '오늘'}
                  {filter === 'week' && '1주일'}
                  {filter === 'month' && '1개월'}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="pt-2 border-t">
          <p className="text-sm text-gray-600">
            전체 {intakes.length}개 중 {filteredIntakes.length}개 표시
          </p>
        </div>
      </div>

      {/* List */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        {filteredIntakes.length === 0 ? (
          <div className="p-8 text-center text-gray-500">
            {intakes.length === 0 ? '아직 제출된 문진표가 없습니다.' : '검색 결과가 없습니다.'}
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    제출일시
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    이름/성별/나이
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    상담과목
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    증상 (통증)
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    약물 알레르기
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    주요 질환
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    내원 경로
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    상세
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    다운로드
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    인쇄
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredIntakes.map((intake) => (
                  <tr key={intake.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {new Date(intake.created_at || '').toLocaleDateString('ko-KR')}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <div className="flex items-center gap-2">
                        <div>
                          <div className="font-medium text-gray-900">{intake.name}</div>
                          <div className="text-gray-500">{intake.gender} / {intake.age}세</div>
                        </div>
                        {intake.hasChatConsultation && (
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
                            💬 상담
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      <div className="max-w-xs truncate">
                        {intake.consultationTypes?.slice(0, 2).join(', ') || '-'}
                        {(intake.consultationTypes?.length || 0) > 2 && ' 외'}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      <div className="max-w-xs truncate">{intake.symptoms || '-'}</div>
                      <div className="text-xs text-gray-500">통증: {intake.painLevel}/10</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      {intake.drugAllergy ? (
                        <span className="text-red-600 font-medium">
                          ⚠️ 있음
                        </span>
                      ) : (
                        <span className="text-gray-500">없음</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      <div className="max-w-xs truncate">
                        {intake.medicalConditions?.filter((c: string) => c !== '없음').slice(0, 2).join(', ') || '없음'}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      <div>
                        {intake.howDidYouKnow || '-'}
                        {intake.howDidYouKnowSearch && (
                          <div className="text-xs text-purple-600 mt-1">
                            검색어: {intake.howDidYouKnowSearch}
                          </div>
                        )}
                        {intake.howDidYouKnowPartner && (
                          <div className="text-xs text-green-600 mt-1">
                            제휴: {intake.howDidYouKnowPartner}
                          </div>
                        )}
                        {intake.howDidYouKnow === '지인 추천 (직원, 원장님 포함)' && intake.referrerName && (
                          <div className="text-xs text-blue-600 mt-1">
                            ({intake.referrerName})
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <button
                        onClick={() => setSelectedIntake(intake)}
                        className="text-blue-600 hover:text-blue-800 font-medium"
                      >
                        상세보기
                      </button>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <button
                        onClick={async () => {
                          setDownloadTarget(intake);
                          // DOM 업데이트 대기
                          await new Promise(resolve => setTimeout(resolve, 200));
                          await downloadAsJPG(intake);
                          setDownloadTarget(null);
                        }}
                        disabled={isDownloading}
                        className={`flex items-center gap-1 font-medium ${
                          isDownloading
                            ? 'text-gray-400 cursor-not-allowed'
                            : 'text-green-600 hover:text-green-800'
                        }`}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        {isDownloading ? '...' : 'JPG'}
                      </button>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <button
                        onClick={() => printIntake(intake)}
                        className="flex items-center gap-1 text-blue-600 hover:text-blue-800 font-medium"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                        </svg>
                        인쇄
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Detail Modal */}
      {(selectedIntake || downloadTarget || printTarget) && (() => {
        const currentIntake = (selectedIntake || downloadTarget || printTarget)!;
        const targetRef = downloadTarget ? hiddenModalRef : (printTarget ? printModalRef : modalContentRef);
        const isHidden = downloadTarget || printTarget;
        return (
        <div className={`fixed inset-0 patient-intake-print-root ${isHidden ? 'left-[-9999px]' : 'bg-black bg-opacity-50 flex items-center justify-center p-4 z-50'}`}>
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {selectedIntake && (
              <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center z-10">
                <h3 className="text-xl font-bold text-gray-900">문진표 상세정보</h3>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => downloadAsJPG()}
                    disabled={isDownloading}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                      isDownloading
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : 'bg-green-600 text-white hover:bg-green-700'
                    }`}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    {isDownloading ? '다운로드 중...' : 'JPG 다운로드'}
                  </button>
                  <button
                    onClick={() => printIntake()}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                    </svg>
                    인쇄
                  </button>
                  <button
                    onClick={() => setSelectedIntake(null)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
            )}

            <div ref={targetRef} className="p-6 bg-white print-content" style={{ minWidth: '700px', maxWidth: '100%' }}>
              {/* 환자 이름 - 인쇄 시에만 최상단에 크게 표시 */}
              <div className="hidden print-patient-name mb-6 pb-4 border-b-2 border-gray-900">
                <h2 className="text-3xl font-bold text-gray-900">{currentIntake.name}님</h2>
              </div>

              {/* Basic Info */}
              <section className="mb-4">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">기본정보</h4>
                <dl className="grid grid-cols-2 gap-4">
                  <div>
                    <dt className="text-sm font-medium text-gray-500">이름</dt>
                    <dd className="mt-1 text-sm text-gray-900">{currentIntake.name}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">성별</dt>
                    <dd className="mt-1 text-sm text-gray-900">{currentIntake.gender}</dd>
                  </div>
                  {currentIntake.residentNumber && (
                    <div>
                      <dt className="text-sm font-medium text-gray-500">주민등록번호</dt>
                      <dd className="mt-1 text-sm text-gray-900">{currentIntake.residentNumber}</dd>
                    </div>
                  )}
                  {currentIntake.passportNumber && (
                    <div>
                      <dt className="text-sm font-medium text-gray-500">여권번호</dt>
                      <dd className="mt-1 text-sm text-gray-900">{currentIntake.passportNumber}</dd>
                    </div>
                  )}
                  {currentIntake.birthdate && (
                    <div>
                      <dt className="text-sm font-medium text-gray-500">생년월일</dt>
                      <dd className="mt-1 text-sm text-gray-900">{currentIntake.birthdate}</dd>
                    </div>
                  )}
                  <div>
                    <dt className="text-sm font-medium text-gray-500">나이</dt>
                    <dd className="mt-1 text-sm text-gray-900">{currentIntake.age}세</dd>
                  </div>
                  <div className="col-span-2">
                    <dt className="text-sm font-medium text-gray-500">주소</dt>
                    <dd className="mt-1 text-sm text-gray-900">{currentIntake.address}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">연락처</dt>
                    <dd className="mt-1 text-sm text-gray-900">{currentIntake.phoneNumber}</dd>
                  </div>
                  {currentIntake.guardianPhoneNumber && (
                    <div>
                      <dt className="text-sm font-medium text-gray-500">보호자 연락처</dt>
                      <dd className="mt-1 text-sm text-gray-900">{currentIntake.guardianPhoneNumber}</dd>
                    </div>
                  )}
                </dl>
              </section>

              {/* Referral Info */}
              <section className="mb-4">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">내원 경로</h4>
                <dl className="space-y-3">
                  <div>
                    <dt className="text-sm font-medium text-gray-500">어떻게 알게 되셨나요?</dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {currentIntake.howDidYouKnow}
                      {currentIntake.howDidYouKnowOther && ` (${currentIntake.howDidYouKnowOther})`}
                      {currentIntake.howDidYouKnowSearch && (
                        <span className="block text-purple-600 mt-1">
                          검색어: {currentIntake.howDidYouKnowSearch}
                        </span>
                      )}
                      {currentIntake.howDidYouKnowPartner && (
                        <span className="block text-green-600 mt-1">
                          제휴업체: {currentIntake.howDidYouKnowPartner}
                        </span>
                      )}
                      {currentIntake.referrerName && (
                        <span className="block text-blue-600 mt-1">
                          추천인: {currentIntake.referrerName}
                        </span>
                      )}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">내원 결정 이유</dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {currentIntake.whyVisit}
                      {currentIntake.whyVisitOther && ` (${currentIntake.whyVisitOther})`}
                    </dd>
                  </div>
                </dl>
              </section>

              {/* Consultation Info */}
              <section className="mb-4">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">상담 정보</h4>
                <dl className="space-y-3">
                  <div>
                    <dt className="text-sm font-medium text-gray-500">상담과목</dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {currentIntake.consultationTypes?.join(', ') || '-'}
                      {currentIntake.otherConsultation && ` (기타: ${currentIntake.otherConsultation})`}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">마지막 치과 방문</dt>
                    <dd className="mt-1 text-sm text-gray-900">{currentIntake.lastDentalVisit}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">치과 보험</dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {currentIntake.hasDentalInsurance === '있다' ? (
                        <>
                          가입
                          {currentIntake.insuranceCompany && ` (${currentIntake.insuranceCompany})`}
                          {currentIntake.insuranceYear && ` - ${currentIntake.insuranceYear}년`}
                        </>
                      ) : currentIntake.hasDentalInsurance === '모른다' ? '모름' : '미가입'}
                    </dd>
                  </div>
                </dl>
              </section>

              {/* Health Info */}
              <section>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">건강 정보</h4>
                <dl className="space-y-3">
                  <div>
                    <dt className="text-sm font-medium text-gray-500">약물 알레르기</dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {currentIntake.drugAllergy ? `있음 (${currentIntake.drugAllergyDetails})` : '없음'}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">질환/복용약</dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {currentIntake.medicalConditions?.join(', ') || '-'}
                      {currentIntake.otherCondition && ` (기타: ${currentIntake.otherCondition})`}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">치과 진료 이력</dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {currentIntake.hasDentalHistory ? `있음 (${currentIntake.dentalHistoryDetails})` : '없음'}
                    </dd>
                  </div>
                  {!currentIntake.noSmokingDrinking && (
                    <>
                      {currentIntake.smokingAmount !== undefined && (
                        <div>
                          <dt className="text-sm font-medium text-gray-500">흡연량</dt>
                          <dd className="mt-1 text-sm text-gray-900">하루 {currentIntake.smokingAmount}갑</dd>
                        </div>
                      )}
                      {currentIntake.drinkingFrequency !== undefined && (
                        <div>
                          <dt className="text-sm font-medium text-gray-500">음주 횟수</dt>
                          <dd className="mt-1 text-sm text-gray-900">주 {currentIntake.drinkingFrequency}회</dd>
                        </div>
                      )}
                    </>
                  )}
                </dl>
              </section>

              {/* Symptoms */}
              <section>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">증상</h4>
                <dl className="space-y-3">
                  <div>
                    <dt className="text-sm font-medium text-gray-500">증상 설명</dt>
                    <dd className="mt-1 text-sm text-gray-900 whitespace-pre-wrap">{currentIntake.symptoms}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">통증 정도</dt>
                    <dd className="mt-1 text-sm text-gray-900">{currentIntake.painLevel}/10</dd>
                  </div>
                </dl>
              </section>

              {/* Consent */}
              <section className={`consent-section ${!currentIntake.hasChatConsultation ? 'last-actual-section' : ''}`}>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">동의 정보</h4>
                <dl className="space-y-3">
                  <div>
                    <dt className="text-sm font-medium text-gray-500">개인정보 동의</dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {currentIntake.privacyConsent ? '동의함' : '동의 안함'}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">동의일자</dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {new Date(currentIntake.consentDate).toLocaleString('ko-KR')}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">서명</dt>
                    <dd className="mt-1 text-sm text-gray-900">{currentIntake.signature}</dd>
                  </div>
                  {currentIntake.guardianName && (
                    <>
                      <div>
                        <dt className="text-sm font-medium text-gray-500">법정대리인</dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          {currentIntake.guardianName} ({currentIntake.guardianRelationship})
                        </dd>
                      </div>
                      <div>
                        <dt className="text-sm font-medium text-gray-500">법정대리인 서명</dt>
                        <dd className="mt-1 text-sm text-gray-900">{currentIntake.guardianSignature}</dd>
                      </div>
                    </>
                  )}
                </dl>
              </section>

              {/* Chat Consultation Info */}
              {currentIntake.hasChatConsultation && (
                <section className="border-l-4 border-blue-500 pl-4 bg-blue-50 p-4 rounded">
                  <h4 className="text-lg font-semibold text-blue-900 mb-3">💬 채팅 상담 이력</h4>
                  <div className="space-y-4">
                    {currentIntake.chatConsultations?.map((chat, index: number) => {
                      const isExpanded = expandedChatId === chat.id;
                      const chatHistory = chat.chatHistory as Array<{role: string; content: string; costWarningCard?: CostWarningCardType}> | undefined;

                      return (
                        <div key={chat.id} className="bg-white rounded border border-blue-200 overflow-hidden">
                          <div
                            className="p-3 cursor-pointer hover:bg-gray-50"
                            onClick={() => setExpandedChatId(isExpanded ? null : chat.id)}
                          >
                            <div className="flex justify-between items-start mb-2">
                              <div className="flex items-center gap-2">
                                <span className="text-sm font-medium text-blue-900">
                                  상담 #{index + 1}
                                </span>
                                <svg
                                  className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                              </div>
                              <span className="text-xs text-gray-500">
                                {new Date(chat.createdAt).toLocaleString('ko-KR')}
                              </span>
                            </div>
                            {chat.referrerSource && (
                              <div className="text-xs text-gray-600 mb-2">
                                유입: {chat.referrerSource}
                              </div>
                            )}
                            {chat.consultationContent && !isExpanded && (
                              <div className="text-sm text-gray-700 line-clamp-2">
                                {chat.consultationContent}
                              </div>
                            )}
                          </div>

                          <div className={`border-t border-blue-200 p-3 bg-gray-50 chat-details ${isExpanded ? '' : 'hidden'}`}>
                              {chat.consultationContent && (
                                <div className="mb-4">
                                  <div className="text-xs font-semibold text-gray-700 mb-2">상담 요약</div>
                                  <div className="text-sm text-gray-700 whitespace-pre-wrap bg-white p-3 rounded">
                                    {chat.consultationContent}
                                  </div>
                                </div>
                              )}

                              {chatHistory && chatHistory.length > 0 && (
                                <div>
                                  <div className="text-xs font-semibold text-gray-700 mb-2">채팅 내역</div>
                                  <div className="space-y-2 max-h-96 overflow-y-auto">
                                    {chatHistory.map((message, msgIndex) => (
                                      <div
                                        key={msgIndex}
                                        className={`p-3 rounded ${
                                          message.role === 'user'
                                            ? 'bg-blue-100 ml-8'
                                            : 'bg-white mr-8'
                                        }`}
                                      >
                                        <div className="text-xs font-medium text-gray-600 mb-1">
                                          {message.role === 'user' ? '👤 환자' : '🤖 AI'}
                                        </div>
                                        <div className="text-sm text-gray-800 whitespace-pre-wrap">
                                          {message.content}
                                        </div>
                                        {/* 비용 경고 카드 표시 */}
                                        {message.costWarningCard?.show && (
                                          <div className="mt-2">
                                            <CostWarningCard costWarningCard={message.costWarningCard} />
                                          </div>
                                        )}
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                        </div>
                      );
                    })}
                  </div>
                </section>
              )}

              {/* Memo Section - Only render when viewing in modal, not when printing */}
              {selectedIntake && (
                <section className="border-t pt-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">원장님 메모</h4>
                  <textarea
                    value={editedMemo}
                    onChange={(e) => setEditedMemo(e.target.value)}
                    placeholder="환자에 대한 메모를 작성하세요..."
                    className="w-full min-h-[120px] px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
                  />
                  <div className="mt-3 flex justify-end">
                    <button
                      onClick={saveMemo}
                      disabled={isSaving}
                      className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                        isSaving
                          ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                          : 'bg-blue-600 text-white hover:bg-blue-700'
                      }`}
                    >
                      {isSaving ? '저장 중...' : '메모 저장'}
                    </button>
                  </div>
                </section>
              )}
            </div>

            {/* Close button - Only render when viewing in modal, not when printing */}
            {selectedIntake && (
              <div className="sticky bottom-0 bg-gray-50 px-6 py-4 border-t">
                <button
                  onClick={() => setSelectedIntake(null)}
                  className="w-full py-2 px-4 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                >
                  닫기
                </button>
              </div>
            )}
          </div>
        </div>
        );
      })()}
      </div>
    </>
  );
}
