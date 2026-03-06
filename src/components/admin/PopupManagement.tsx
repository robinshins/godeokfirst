'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Popup } from '@/app/api/popups/route';

export default function PopupManagement() {
  const [popups, setPopups] = useState<Popup[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingPopup, setEditingPopup] = useState<Popup | null>(null);
  const [uploading, setUploading] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    title: '',
    image_url: '',
    aspect_ratio: '',
    popup_type: 'modal' as 'fixed_sidebar' | 'modal',
    display_order: 0,
    start_date: '',
    end_date: '',
    is_active: true,
  });

  useEffect(() => {
    fetchPopups();
  }, []);

  const fetchPopups = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/popups?admin=true');
      const data = await response.json();
      if (data.success) {
        setPopups(data.data);
      }
    } catch (error) {
      console.error('Failed to fetch popups:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    console.log('1. 파일 선택됨:', file.name);
    setUploading(true);

    try {
      console.log('2. 이미지 비율 계산 시작');
      // 이미지 비율 계산
      const img = document.createElement('img');
      const imageUrl = URL.createObjectURL(file);

      await new Promise((resolve, reject) => {
        img.onload = () => {
          console.log('3. 이미지 로드 완료:', img.width, 'x', img.height);
          const aspectRatio = `${img.width}/${img.height}`;

          setFormData(prev => ({
            ...prev,
            aspect_ratio: aspectRatio
          }));
          resolve(null);
        };
        img.onerror = (err) => {
          console.error('3. 이미지 로드 실패:', err);
          reject(err);
        };
        img.src = imageUrl;
      });

      URL.revokeObjectURL(imageUrl);

      console.log('4. 서버 업로드 시작');
      // 이미지 업로드
      const uploadFormData = new FormData();
      uploadFormData.append('file', file);

      const response = await fetch('/api/popups/upload', {
        method: 'POST',
        body: uploadFormData,
      });

      console.log('5. 서버 응답 받음:', response.status);
      const data = await response.json();
      console.log('6. 응답 데이터:', data);

      if (data.success) {
        setFormData(prev => ({ ...prev, image_url: data.imageUrl }));
        console.log('7. 업로드 성공:', data.imageUrl);
      } else {
        console.error('7. 업로드 실패:', data.error);
        alert(data.error || '이미지 업로드에 실패했습니다.');
      }
    } catch (error) {
      console.error('업로드 중 에러:', error);
      alert('이미지 업로드 중 오류가 발생했습니다.');
    } finally {
      console.log('8. 업로드 프로세스 종료');
      setUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.title || !formData.image_url || !formData.start_date || !formData.end_date) {
      alert('모든 필수 정보를 입력해주세요.');
      return;
    }

    try {
      // 한국 시간을 UTC로 변환
      const startDate = new Date(formData.start_date + 'T00:00:00+09:00');
      const endDate = new Date(formData.end_date + 'T23:59:59+09:00');

      // alt_text를 제목으로 자동 생성
      const submitData = {
        ...formData,
        alt_text: formData.title,
        start_date: startDate.toISOString(),
        end_date: endDate.toISOString(),
      };

      const url = editingPopup ? '/api/popups' : '/api/popups';
      const method = editingPopup ? 'PATCH' : 'POST';
      const body = editingPopup ? { id: editingPopup.id, ...submitData } : submitData;

      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      const data = await response.json();
      if (data.success) {
        alert(data.message);
        setShowForm(false);
        setEditingPopup(null);
        resetForm();
        fetchPopups();
      } else {
        alert(data.error || '작업에 실패했습니다.');
      }
    } catch (error) {
      console.error('Failed to save popup:', error);
      alert('팝업 저장 중 오류가 발생했습니다.');
    }
  };

  const handleEdit = (popup: Popup) => {
    setEditingPopup(popup);

    // UTC를 한국 시간으로 변환하여 표시
    const startDate = new Date(popup.start_date);
    const endDate = new Date(popup.end_date);

    // 한국 시간대로 변환 (UTC+9)
    const kstStart = new Date(startDate.getTime() + (9 * 60 * 60 * 1000));
    const kstEnd = new Date(endDate.getTime() + (9 * 60 * 60 * 1000));

    setFormData({
      title: popup.title,
      image_url: popup.image_url,
      aspect_ratio: popup.aspect_ratio,
      popup_type: popup.popup_type,
      display_order: popup.display_order,
      start_date: kstStart.toISOString().split('T')[0],
      end_date: kstEnd.toISOString().split('T')[0],
      is_active: popup.is_active,
    });
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('정말 삭제하시겠습니까?')) return;

    try {
      const response = await fetch(`/api/popups?id=${id}`, {
        method: 'DELETE',
      });

      const data = await response.json();
      if (data.success) {
        alert(data.message);
        fetchPopups();
      } else {
        alert(data.error || '삭제에 실패했습니다.');
      }
    } catch (error) {
      console.error('Failed to delete popup:', error);
      alert('팝업 삭제 중 오류가 발생했습니다.');
    }
  };

  const toggleActive = async (popup: Popup) => {
    try {
      const response = await fetch('/api/popups', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: popup.id, is_active: !popup.is_active }),
      });

      const data = await response.json();
      if (data.success) {
        fetchPopups();
      } else {
        alert(data.error || '상태 변경에 실패했습니다.');
      }
    } catch (error) {
      console.error('Failed to toggle active:', error);
      alert('상태 변경 중 오류가 발생했습니다.');
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      image_url: '',
      aspect_ratio: '',
      popup_type: 'modal',
      display_order: 0,
      start_date: '',
      end_date: '',
      is_active: true,
    });
  };

  const formatDate = (dateString: string) => {
    // UTC를 한국 시간으로 변환
    const date = new Date(dateString);
    const kstDate = new Date(date.getTime() + (9 * 60 * 60 * 1000));
    return kstDate.toLocaleDateString('ko-KR');
  };

  const getTypeLabel = (type: string) => {
    return type === 'fixed_sidebar' ? '고정 사이드바 (PC 전용)' : '일반 팝업';
  };

  const activeSidebarCount = popups.filter(p => p.popup_type === 'fixed_sidebar' && p.is_active).length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold text-gray-900">팝업 관리</h2>
          <p className="text-sm text-gray-600 mt-1">
            고정 사이드바는 1개만 활성화 가능합니다 (현재: {activeSidebarCount}/1)
          </p>
        </div>
        <button
          onClick={() => {
            setShowForm(true);
            setEditingPopup(null);
            resetForm();
          }}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          + 새 팝업 추가
        </button>
      </div>

      {/* Popup List */}
      {loading ? (
        <div className="text-center py-8 text-gray-500">로딩 중...</div>
      ) : popups.length === 0 ? (
        <div className="text-center py-8 text-gray-500">등록된 팝업이 없습니다.</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popups.map((popup) => (
            <div key={popup.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              {/* Image */}
              <div className="relative w-full" style={{ aspectRatio: popup.aspect_ratio }}>
                <Image
                  src={popup.image_url}
                  alt={popup.alt_text}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Info */}
              <div className="p-4 space-y-3">
                <div className="flex justify-between items-start">
                  <h3 className="font-bold text-lg">{popup.title}</h3>
                  <button
                    onClick={() => toggleActive(popup)}
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      popup.is_active
                        ? 'bg-green-100 text-green-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {popup.is_active ? '활성' : '비활성'}
                  </button>
                </div>

                <div className="space-y-1 text-sm text-gray-600">
                  <p>
                    <span className="font-medium">타입:</span> {getTypeLabel(popup.popup_type)}
                  </p>
                  {popup.popup_type === 'modal' && (
                    <p>
                      <span className="font-medium">순서:</span> {popup.display_order}
                    </p>
                  )}
                  <p>
                    <span className="font-medium">기간:</span> {formatDate(popup.start_date)} ~ {formatDate(popup.end_date)}
                  </p>
                </div>

                {/* Actions */}
                <div className="flex gap-2 pt-2 border-t">
                  <button
                    onClick={() => handleEdit(popup)}
                    className="flex-1 px-3 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors font-medium text-sm"
                  >
                    수정
                  </button>
                  <button
                    onClick={() => handleDelete(popup.id!)}
                    className="flex-1 px-3 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors font-medium text-sm"
                  >
                    삭제
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setShowForm(false)}>
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center">
              <h2 className="text-xl font-bold">{editingPopup ? '팝업 수정' : '새 팝업 추가'}</h2>
              <button
                onClick={() => {
                  setShowForm(false);
                  setEditingPopup(null);
                  resetForm();
                }}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              {/* Title */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  제목 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              {/* Image Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  이미지 <span className="text-red-500">*</span>
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  disabled={uploading}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                />
                {uploading && (
                  <div className="mt-2 flex items-center gap-2">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full animate-pulse" style={{ width: '100%' }}></div>
                    </div>
                    <span className="text-sm text-blue-600 font-medium whitespace-nowrap">업로드 중...</span>
                  </div>
                )}
                {formData.image_url && !uploading && (
                  <div className="mt-2">
                    <div className="relative w-32 h-32 border rounded-lg overflow-hidden">
                      <Image
                        src={formData.image_url}
                        alt="Preview"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <p className="text-xs text-green-600 mt-1">✓ 업로드 완료</p>
                  </div>
                )}
              </div>

              {/* Aspect Ratio (auto-calculated, read-only) */}
              {formData.aspect_ratio && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">비율 (자동 계산됨)</label>
                  <input
                    type="text"
                    value={formData.aspect_ratio}
                    readOnly
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-600"
                  />
                </div>
              )}

              {/* Popup Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  팝업 타입 <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.popup_type}
                  onChange={(e) => setFormData({ ...formData, popup_type: e.target.value as 'fixed_sidebar' | 'modal' })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                >
                  <option value="modal">일반 팝업</option>
                  <option value="fixed_sidebar" disabled={activeSidebarCount >= 1 && !editingPopup}>
                    고정 사이드바 (PC 전용) {activeSidebarCount >= 1 && !editingPopup && '- 이미 활성화됨'}
                  </option>
                </select>
                <p className="text-xs text-gray-500 mt-1">
                  고정 사이드바는 데스크탑에서 화면 오른쪽에 고정 표시되며, 1개만 활성화 가능합니다.
                </p>
              </div>

              {/* Display Order (only for modal type) */}
              {formData.popup_type === 'modal' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">표시 순서</label>
                  <input
                    type="number"
                    value={formData.display_order}
                    onChange={(e) => setFormData({ ...formData, display_order: parseInt(e.target.value) })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <p className="text-xs text-gray-500 mt-1">낮은 숫자가 먼저 표시됩니다.</p>
                </div>
              )}

              {/* Date Range */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    시작일 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    value={formData.start_date}
                    onChange={(e) => setFormData({ ...formData, start_date: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    종료일 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    value={formData.end_date}
                    onChange={(e) => setFormData({ ...formData, end_date: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              </div>

              {/* Active Status */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="is_active"
                  checked={formData.is_active}
                  onChange={(e) => setFormData({ ...formData, is_active: e.target.checked })}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="is_active" className="ml-2 text-sm font-medium text-gray-700">
                  활성화
                </label>
              </div>

              {/* Submit Button */}
              <div className="flex gap-3 pt-4 border-t">
                <button
                  type="button"
                  onClick={() => {
                    setShowForm(false);
                    setEditingPopup(null);
                    resetForm();
                  }}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                >
                  취소
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  {editingPopup ? '수정' : '추가'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
