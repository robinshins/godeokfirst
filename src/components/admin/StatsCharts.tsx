'use client';

import { useEffect, useState, useRef } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from 'chart.js';
import { Line, Bar, Pie } from 'react-chartjs-2';
import { getReferrerSourceLabel } from '@/lib/referrer-tracker';
import { ConsultationLog } from '@/lib/types';
import { PatientIntakeData, ConsultationType } from '@/lib/patient-intake-types';

// Chart.js 등록
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

interface StatsChartsProps {
  logs: ConsultationLog[];
  stats: { source: string; count: number }[];
  dateRange: 'all' | 'today' | 'week' | 'month' | 'thisMonth' | 'lastMonth' | 'custom';
  startDate: string;
  endDate: string;
}

export default function StatsCharts({ logs, stats, dateRange, startDate, endDate }: StatsChartsProps) {
  const [pageViews, setPageViews] = useState<{ date: string; count: number }[]>([]);
  const [pageViewSources, setPageViewSources] = useState<{ source: string; count: number }[]>([]);
  const [totalPageViews, setTotalPageViews] = useState<number>(0);
  const [consultationDailyStats, setConsultationDailyStats] = useState<{ date: string; count: number }[]>([]);
  const [consultationSourceStats, setConsultationSourceStats] = useState<{ source: string; count: number }[]>([]);
  const [intakes, setIntakes] = useState<PatientIntakeData[]>([]);
  const [loading, setLoading] = useState(true);
  const [intakeDateFilter, setIntakeDateFilter] = useState<'all' | 'today' | 'week' | 'month' | 'thisMonth' | 'lastMonth' | 'custom'>('all');
  const [intakeStartDate, setIntakeStartDate] = useState<string>('');
  const [intakeEndDate, setIntakeEndDate] = useState<string>('');
  const [otherDetailsModal, setOtherDetailsModal] = useState<{
    type: 'howDidYouKnow' | 'whyVisit' | null;
    title: string;
    data: { name: string; value: string; date: string }[];
  }>({ type: null, title: '', data: [] });
  const [selectedConsultationType, setSelectedConsultationType] = useState<ConsultationType | 'all'>('all');

  // 기간 범위 계산 함수
  const getDateRangeParams = (): string => {
    const now = new Date();
    const start = new Date();

    switch (dateRange) {
      case 'today':
        start.setHours(0, 0, 0, 0);
        return `startDate=${start.toISOString()}&endDate=${now.toISOString()}`;
      case 'week':
        start.setDate(now.getDate() - 7);
        start.setHours(0, 0, 0, 0);
        return `startDate=${start.toISOString()}&endDate=${now.toISOString()}`;
      case 'month':
        start.setDate(now.getDate() - 30);
        start.setHours(0, 0, 0, 0);
        return `startDate=${start.toISOString()}&endDate=${now.toISOString()}`;
      case 'thisMonth':
        const thisMonthStart = new Date(now.getFullYear(), now.getMonth(), 1);
        return `startDate=${thisMonthStart.toISOString()}&endDate=${now.toISOString()}`;
      case 'lastMonth':
        const lastMonthStart = new Date(now.getFullYear(), now.getMonth() - 1, 1);
        const lastMonthEnd = new Date(now.getFullYear(), now.getMonth(), 0, 23, 59, 59, 999);
        return `startDate=${lastMonthStart.toISOString()}&endDate=${lastMonthEnd.toISOString()}`;
      case 'custom':
        if (startDate || endDate) {
          const params = [];
          if (startDate) {
            // 한국 시간 00:00:00 기준
            const startDateTime = new Date(startDate + 'T00:00:00+09:00');
            params.push(`startDate=${startDateTime.toISOString()}`);
          }
          if (endDate) {
            // 한국 시간 23:59:59 기준
            const endDateTime = new Date(endDate + 'T23:59:59.999+09:00');
            params.push(`endDate=${endDateTime.toISOString()}`);
          }
          return params.join('&');
        }
        return '';
      case 'all':
      default:
        return '';
    }
  };

  // 캐시 저장소
  const cacheRef = useRef<{
    pageViews: { [key: string]: { data: typeof pageViews; sources: typeof pageViewSources; total: number; timestamp: number } };
    consultationStats: { [key: string]: { daily: typeof consultationDailyStats; sources: typeof consultationSourceStats; timestamp: number } };
    intakes: { data: PatientIntakeData[]; timestamp: number } | null;
  }>({ pageViews: {}, consultationStats: {}, intakes: null });

  const CACHE_TTL = 5 * 60 * 1000; // 5분 캐시

  // 상위 기간 필터와 문진표 기간 필터 동기화
  useEffect(() => {
    setIntakeDateFilter(dateRange);
    setIntakeStartDate(startDate);
    setIntakeEndDate(endDate);
  }, [dateRange, startDate, endDate]);

  useEffect(() => {
    const fetchData = async () => {
      const rangeParams = getDateRangeParams();
      const cacheKey = rangeParams || 'all';
      const now = Date.now();

      // 캐시 확인
      const cachedPageViews = cacheRef.current.pageViews[cacheKey];
      const cachedConsultationStats = cacheRef.current.consultationStats[cacheKey];
      const cachedIntakes = cacheRef.current.intakes;

      const needFetchPageViews = !cachedPageViews || (now - cachedPageViews.timestamp) > CACHE_TTL;
      const needFetchConsultationStats = !cachedConsultationStats || (now - cachedConsultationStats.timestamp) > CACHE_TTL;
      const needFetchIntakes = !cachedIntakes || (now - cachedIntakes.timestamp) > CACHE_TTL;

      // 캐시가 유효하면 바로 사용
      if (!needFetchPageViews && cachedPageViews) {
        setPageViews(cachedPageViews.data);
        setPageViewSources(cachedPageViews.sources);
        setTotalPageViews(cachedPageViews.total);
      }
      if (!needFetchConsultationStats && cachedConsultationStats) {
        setConsultationDailyStats(cachedConsultationStats.daily);
        setConsultationSourceStats(cachedConsultationStats.sources);
      }
      if (!needFetchIntakes && cachedIntakes) {
        setIntakes(cachedIntakes.data);
      }

      // 모두 캐시 있으면 로딩 끝
      if (!needFetchPageViews && !needFetchConsultationStats && !needFetchIntakes) {
        setLoading(false);
        return;
      }

      // 병렬로 필요한 데이터만 fetch
      const promises: Promise<void>[] = [];

      if (needFetchPageViews) {
        promises.push(
          (async () => {
            try {
              const url = rangeParams
                ? `/api/page-views?${rangeParams}`
                : '/api/page-views?days=9999';
              const response = await fetch(url);
              const data = await response.json();
              if (data.success) {
                setPageViews(data.data);
                setPageViewSources(data.referrerSources || []);
                setTotalPageViews(data.total || 0);
                cacheRef.current.pageViews[cacheKey] = {
                  data: data.data,
                  sources: data.referrerSources || [],
                  total: data.total || 0,
                  timestamp: now,
                };
              }
            } catch (error) {
              console.error('Failed to fetch page views:', error);
            }
          })()
        );
      }

      // 상담 통계 (RPC 사용 - egress 절약)
      if (needFetchConsultationStats) {
        promises.push(
          (async () => {
            try {
              const url = rangeParams
                ? `/api/consultation-stats?${rangeParams}`
                : '/api/consultation-stats';
              const response = await fetch(url);
              const data = await response.json();
              if (data.success) {
                setConsultationDailyStats(data.dailyStats || []);
                setConsultationSourceStats(data.sourceStats || []);
                cacheRef.current.consultationStats[cacheKey] = {
                  daily: data.dailyStats || [],
                  sources: data.sourceStats || [],
                  timestamp: now,
                };
              }
            } catch (error) {
              console.error('Failed to fetch consultation stats:', error);
            }
          })()
        );
      }

      if (needFetchIntakes) {
        promises.push(
          (async () => {
            try {
              const response = await fetch('/api/patient-intake');
              const data = await response.json();
              if (data.success) {
                setIntakes(data.data);
                cacheRef.current.intakes = {
                  data: data.data,
                  timestamp: now,
                };
              }
            } catch (error) {
              console.error('Failed to fetch intakes:', error);
            }
          })()
        );
      }

      await Promise.all(promises);
      setLoading(false);
    };

    fetchData();
  }, [dateRange, startDate, endDate]);

  // 일별 상담 수 데이터 (RPC에서 가져온 데이터 사용, fallback으로 logs 사용)
  const dailyCounts = consultationDailyStats.length > 0
    ? consultationDailyStats.reduce((acc, item) => {
        acc[item.date] = item.count;
        return acc;
      }, {} as Record<string, number>)
    : logs.reduce((acc, log) => {
        const date = new Date(log.created_at!).toISOString().split('T')[0];
        acc[date] = (acc[date] || 0) + 1;
        return acc;
      }, {} as Record<string, number>);

  // 페이지 방문 수와 상담 수를 합친 데이터
  const allDates = new Set([
    ...Object.keys(dailyCounts),
    ...pageViews.map(pv => pv.date),
  ]);

  // 기간 필터에 따라 표시할 날짜 수 결정
  const getMaxDays = () => {
    switch (dateRange) {
      case 'today':
        return 1;
      case 'week':
        return 7;
      case 'month':
        return 30;
      case 'thisMonth':
      case 'lastMonth':
        return 31; // 한 달 전체
      case 'custom':
      case 'all':
        return 90; // 최대 90일까지 표시 (너무 많으면 차트가 안보임)
      default:
        return 14;
    }
  };

  const sortedDates = Array.from(allDates).sort().slice(-getMaxDays());

  const combinedChartData = {
    labels: sortedDates.map(date => {
      const d = new Date(date);
      return `${d.getMonth() + 1}/${d.getDate()}`;
    }),
    datasets: [
      {
        label: '페이지 방문',
        data: sortedDates.map(date => {
          const pv = pageViews.find(p => p.date === date);
          return pv ? pv.count : 0;
        }),
        borderColor: 'rgb(59, 130, 246)', // blue-500
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        tension: 0.4,
        fill: true,
      },
      {
        label: '상담 신청',
        data: sortedDates.map(date => dailyCounts[date] || 0),
        borderColor: 'rgb(16, 185, 129)', // green-500
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const lineOptions: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      tooltip: {
        mode: 'index' as const,
        intersect: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1,
        },
      },
    },
  };

  // 유입 경로별 상담 수 (RPC에서 가져온 데이터 사용, fallback으로 stats props 사용)
  const consultationSources = consultationSourceStats.length > 0 ? consultationSourceStats : stats;
  const sourceChartData = {
    labels: consultationSources.map(stat => getReferrerSourceLabel(stat.source)),
    datasets: [
      {
        label: '상담 수',
        data: consultationSources.map(stat => stat.count),
        backgroundColor: [
          'rgba(59, 130, 246, 0.8)',   // blue
          'rgba(16, 185, 129, 0.8)',   // green
          'rgba(245, 158, 11, 0.8)',   // amber
          'rgba(239, 68, 68, 0.8)',    // red
          'rgba(139, 92, 246, 0.8)',   // violet
          'rgba(236, 72, 153, 0.8)',   // pink
          'rgba(20, 184, 166, 0.8)',   // teal
          'rgba(249, 115, 22, 0.8)',   // orange
        ],
        borderWidth: 0,
      },
    ],
  };

  // 유입 경로별 방문자 수
  const pageViewSourceChartData = {
    labels: pageViewSources.map(stat => getReferrerSourceLabel(stat.source)),
    datasets: [
      {
        label: '방문자 수',
        data: pageViewSources.map(stat => stat.count),
        backgroundColor: [
          'rgba(59, 130, 246, 0.8)',   // blue
          'rgba(16, 185, 129, 0.8)',   // green
          'rgba(245, 158, 11, 0.8)',   // amber
          'rgba(239, 68, 68, 0.8)',    // red
          'rgba(139, 92, 246, 0.8)',   // violet
          'rgba(236, 72, 153, 0.8)',   // pink
          'rgba(20, 184, 166, 0.8)',   // teal
          'rgba(249, 115, 22, 0.8)',   // orange
        ],
        borderWidth: 0,
      },
    ],
  };

  const barOptions: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1,
        },
      },
    },
  };

  // 상태별 분포
  const statusCounts = logs.reduce((acc, log) => {
    acc[log.status] = (acc[log.status] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  // 상태별 색상 매핑 (확실히 구분되는 색상)
  const statusColorMap: Record<string, string> = {
    '대기중': 'rgba(156, 163, 175, 0.85)',        // 회색
    '1차 리콜': 'rgba(251, 191, 36, 0.85)',       // 노랑
    '2차 리콜': 'rgba(249, 115, 22, 0.85)',       // 주황
    '3차 리콜': 'rgba(239, 68, 68, 0.85)',        // 빨강
    '4차 리콜': 'rgba(190, 24, 93, 0.85)',        // 마젠타
    '내원 전 미동의': 'rgba(107, 114, 128, 0.85)', // 진회색
    '내원 예약 완료': 'rgba(34, 197, 94, 0.85)',  // 초록
    '치료 진행': 'rgba(37, 99, 235, 0.85)',       // 파랑
    '상담 미동의': 'rgba(147, 51, 234, 0.85)',    // 보라
  };

  const statusChartData = {
    labels: Object.keys(statusCounts),
    datasets: [
      {
        data: Object.values(statusCounts),
        backgroundColor: Object.keys(statusCounts).map(
          status => statusColorMap[status] || 'rgba(156, 163, 175, 0.85)'
        ),
        borderWidth: 0,
      },
    ],
  };

  const pieOptions: ChartOptions<'pie'> = {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: {
        right: 10,
      },
    },
    plugins: {
      legend: {
        position: 'right' as const,
        labels: {
          boxWidth: 12,
          padding: 8,
          font: {
            size: 11,
          },
          generateLabels: (chart) => {
            const data = chart.data;
            if (data.labels && data.datasets.length) {
              const dataset = data.datasets[0];
              const total = (dataset.data as number[]).reduce((acc, val) => acc + val, 0);
              return data.labels.map((label, i) => {
                const value = dataset.data[i] as number;
                const percentage = total > 0 ? ((value / total) * 100).toFixed(1) : '0.0';
                return {
                  text: `${label} (${percentage}%)`,
                  fillStyle: Array.isArray(dataset.backgroundColor)
                    ? dataset.backgroundColor[i] as string
                    : dataset.backgroundColor as string,
                  hidden: false,
                  index: i,
                };
              });
            }
            return [];
          },
        },
      },
    },
  };

  // 문진표 데이터 필터링
  const filteredIntakes = intakes.filter((intake) => {
    if (!intake.created_at) return false;
    const intakeDate = new Date(intake.created_at);
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    switch (intakeDateFilter) {
      case 'today':
        return intakeDate >= today;
      case 'week':
        const weekAgo = new Date(today);
        weekAgo.setDate(weekAgo.getDate() - 7);
        return intakeDate >= weekAgo;
      case 'month':
        const monthAgo = new Date(today);
        monthAgo.setMonth(monthAgo.getMonth() - 1);
        return intakeDate >= monthAgo;
      case 'thisMonth':
        const thisMonthStart = new Date(now.getFullYear(), now.getMonth(), 1);
        return intakeDate >= thisMonthStart;
      case 'lastMonth':
        const lastMonthStart = new Date(now.getFullYear(), now.getMonth() - 1, 1);
        const lastMonthEnd = new Date(now.getFullYear(), now.getMonth(), 0, 23, 59, 59, 999);
        return intakeDate >= lastMonthStart && intakeDate <= lastMonthEnd;
      case 'custom':
        let matchesCustom = true;
        if (intakeStartDate) {
          const start = new Date(intakeStartDate);
          start.setHours(0, 0, 0, 0);
          matchesCustom = matchesCustom && intakeDate >= start;
        }
        if (intakeEndDate) {
          const end = new Date(intakeEndDate);
          end.setHours(23, 59, 59, 999);
          matchesCustom = matchesCustom && intakeDate <= end;
        }
        return matchesCustom;
      case 'all':
      default:
        return true;
    }
  });

  // 상담과목별 통계
  const consultationTypeCounts = filteredIntakes.reduce((acc, intake) => {
    intake.consultationTypes?.forEach(type => {
      acc[type] = (acc[type] || 0) + 1;
    });
    return acc;
  }, {} as Record<string, number>);

  // 모든 상담과목 목록 (필터용)
  const allConsultationTypes = Object.keys(consultationTypeCounts).sort() as ConsultationType[];

  const consultationTypeChartData = {
    labels: Object.keys(consultationTypeCounts),
    datasets: [
      {
        label: '인원 수',
        data: Object.values(consultationTypeCounts),
        backgroundColor: [
          'rgba(59, 130, 246, 0.8)',
          'rgba(16, 185, 129, 0.8)',
          'rgba(245, 158, 11, 0.8)',
          'rgba(239, 68, 68, 0.8)',
          'rgba(139, 92, 246, 0.8)',
          'rgba(236, 72, 153, 0.8)',
          'rgba(20, 184, 166, 0.8)',
          'rgba(249, 115, 22, 0.8)',
        ],
        borderWidth: 0,
      },
    ],
  };

  // 상담과목 필터가 적용된 데이터
  const filteredByConsultationType = selectedConsultationType === 'all'
    ? filteredIntakes
    : filteredIntakes.filter(intake =>
        intake.consultationTypes?.includes(selectedConsultationType)
      );

  // 내원경로 통계 (어떻게 알게 되었는지) - 상담과목 필터 적용
  const howDidYouKnowCounts = filteredByConsultationType.reduce((acc, intake) => {
    if (intake.howDidYouKnow) {
      acc[intake.howDidYouKnow] = (acc[intake.howDidYouKnow] || 0) + 1;
    }
    return acc;
  }, {} as Record<string, number>);

  // 기타 사유 상세 데이터 (어떻게 알게 되었는지) - 상담과목 필터 적용
  const howDidYouKnowOtherDetails = filteredByConsultationType
    .filter(intake => intake.howDidYouKnow === '기타' && intake.howDidYouKnowOther)
    .map(intake => ({
      name: intake.name || '익명',
      value: intake.howDidYouKnowOther || '',
      date: intake.created_at ? new Date(intake.created_at).toLocaleDateString('ko-KR') : '',
    }));

  // 파이 차트용 색상 팔레트 (확실히 구분되는 색상들)
  const pieChartColors = [
    'rgba(37, 99, 235, 0.85)',    // 파랑
    'rgba(220, 38, 38, 0.85)',    // 빨강
    'rgba(22, 163, 74, 0.85)',    // 초록
    'rgba(234, 179, 8, 0.85)',    // 노랑
    'rgba(147, 51, 234, 0.85)',   // 보라
    'rgba(249, 115, 22, 0.85)',   // 주황
    'rgba(6, 182, 212, 0.85)',    // 청록
    'rgba(219, 39, 119, 0.85)',   // 핑크
    'rgba(101, 163, 13, 0.85)',   // 라임
    'rgba(79, 70, 229, 0.85)',    // 인디고
    'rgba(245, 158, 11, 0.85)',   // 호박
    'rgba(20, 184, 166, 0.85)',   // 민트
    'rgba(190, 24, 93, 0.85)',    // 마젠타
    'rgba(30, 64, 175, 0.85)',    // 네이비
    'rgba(134, 25, 143, 0.85)',   // 자주
  ];

  const howDidYouKnowChartData = {
    labels: Object.keys(howDidYouKnowCounts),
    datasets: [
      {
        data: Object.values(howDidYouKnowCounts),
        backgroundColor: pieChartColors.slice(0, Object.keys(howDidYouKnowCounts).length),
        borderWidth: 0,
      },
    ],
  };

  // 결정 이유 통계 - 상담과목 필터 적용
  const whyVisitCounts = filteredByConsultationType.reduce((acc, intake) => {
    if (intake.whyVisit) {
      acc[intake.whyVisit] = (acc[intake.whyVisit] || 0) + 1;
    }
    return acc;
  }, {} as Record<string, number>);

  // 기타 사유 상세 데이터 (내원 결정 이유) - 상담과목 필터 적용
  const whyVisitOtherDetails = filteredByConsultationType
    .filter(intake => intake.whyVisit === '기타' && intake.whyVisitOther)
    .map(intake => ({
      name: intake.name || '익명',
      value: intake.whyVisitOther || '',
      date: intake.created_at ? new Date(intake.created_at).toLocaleDateString('ko-KR') : '',
    }));

  const whyVisitChartData = {
    labels: Object.keys(whyVisitCounts),
    datasets: [
      {
        data: Object.values(whyVisitCounts),
        backgroundColor: pieChartColors.slice(0, Object.keys(whyVisitCounts).length),
        borderWidth: 0,
      },
    ],
  };

  // 기타 상세보기 팝업 열기
  const openOtherDetailsModal = (type: 'howDidYouKnow' | 'whyVisit') => {
    const suffix = selectedConsultationType !== 'all' ? ` (${selectedConsultationType})` : '';
    if (type === 'howDidYouKnow') {
      setOtherDetailsModal({
        type: 'howDidYouKnow',
        title: `어떻게 알게 되었는지 - 기타 상세${suffix}`,
        data: howDidYouKnowOtherDetails,
      });
    } else {
      setOtherDetailsModal({
        type: 'whyVisit',
        title: `내원 결정 이유 - 기타 상세${suffix}`,
        data: whyVisitOtherDetails,
      });
    }
  };

  // 나이대별 통계 (10대, 20대, 30대...)
  const ageCounts = filteredIntakes.reduce((acc, intake) => {
    if (intake.age) {
      const ageGroup = `${Math.floor(intake.age / 10) * 10}대`;
      acc[ageGroup] = (acc[ageGroup] || 0) + 1;
    }
    return acc;
  }, {} as Record<string, number>);

  const ageChartData = {
    labels: Object.keys(ageCounts).sort(),
    datasets: [
      {
        label: '인원 수',
        data: Object.keys(ageCounts).sort().map(age => ageCounts[age]),
        backgroundColor: 'rgba(59, 130, 246, 0.8)',
        borderWidth: 0,
      },
    ],
  };

  // 성별 통계
  const genderCounts = filteredIntakes.reduce((acc, intake) => {
    if (intake.gender) {
      acc[intake.gender] = (acc[intake.gender] || 0) + 1;
    }
    return acc;
  }, {} as Record<string, number>);

  const genderChartData = {
    labels: Object.keys(genderCounts),
    datasets: [
      {
        data: Object.values(genderCounts),
        backgroundColor: [
          'rgba(59, 130, 246, 0.8)',  // 남
          'rgba(236, 72, 153, 0.8)',  // 여
        ],
        borderWidth: 0,
      },
    ],
  };

  // 상담 대비 방문 비율 계산 (당일 중복 전화번호는 1건으로 처리)
  const uniqueConsultations = (() => {
    const seen = new Set<string>();
    return logs.filter(log => {
      const phone = log.phone?.replace(/\D/g, '');
      const date = new Date(log.created_at!).toISOString().split('T')[0];
      const key = `${phone}_${date}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  })();

  // 문진표 전화번호 → 작성일 배열 Map (상담 신청일 이후 방문 여부 확인용)
  const intakePhoneMap = new Map<string, string[]>();
  intakes.forEach(intake => {
    if (intake.phoneNumber && intake.created_at) {
      const normalizedPhone = intake.phoneNumber.replace(/\D/g, '');
      const existing = intakePhoneMap.get(normalizedPhone) || [];
      existing.push(intake.created_at);
      intakePhoneMap.set(normalizedPhone, existing);
    }
  });

  // 상담 후 방문한 고유 고객 수 (전화번호 기준)
  const uniqueConsultationPhones = new Set(
    uniqueConsultations.map(log => log.phone?.replace(/\D/g, '')).filter(Boolean)
  );

  // 전화번호별 가장 빠른 상담 신청일 Map
  const phoneFirstConsultationMap = new Map<string, string>();
  uniqueConsultations.forEach(log => {
    const normalizedPhone = log.phone?.replace(/\D/g, '');
    if (!normalizedPhone || !log.created_at) return;
    const existing = phoneFirstConsultationMap.get(normalizedPhone);
    if (!existing || new Date(log.created_at) < new Date(existing)) {
      phoneFirstConsultationMap.set(normalizedPhone, log.created_at);
    }
  });

  // 방문한 상태로 인정되는 상태 목록
  const visitedStatuses = ['상담 미동의', '치료 진행'];

  // 상태가 방문으로 인정되는 전화번호 Set
  const visitedByStatusPhones = new Set(
    logs
      .filter(log => visitedStatuses.includes(log.status || ''))
      .map(log => log.phone?.replace(/\D/g, ''))
      .filter(Boolean)
  );

  // 방문 카운트: 문진표 작성 OR 상태가 방문으로 인정되는 경우
  const visitedCount = Array.from(uniqueConsultationPhones).filter(phone => {
    // 1. 상태가 방문으로 인정되는 경우
    if (visitedByStatusPhones.has(phone as string)) {
      return true;
    }

    // 2. 문진표 작성한 경우 (상담 신청일 이후)
    const intakeDates = intakePhoneMap.get(phone as string);
    if (!intakeDates) return false;
    const firstConsultationDate = phoneFirstConsultationMap.get(phone as string);
    if (!firstConsultationDate) return false;
    return intakeDates.some(intakeDate => new Date(intakeDate) >= new Date(firstConsultationDate));
  }).length;

  const visitRate = uniqueConsultationPhones.size > 0
    ? (visitedCount / uniqueConsultationPhones.size) * 100
    : 0;

  // 치료 진행 비율 계산 (상담 신청자 중 "치료 진행" 상태인 사람)
  const treatmentPhones = new Set(
    logs
      .filter(log => log.status === '치료 진행')
      .map(log => log.phone?.replace(/\D/g, ''))
      .filter(Boolean)
  );
  const treatmentCount = Array.from(uniqueConsultationPhones).filter(phone =>
    treatmentPhones.has(phone)
  ).length;
  const treatmentRate = uniqueConsultationPhones.size > 0
    ? (treatmentCount / uniqueConsultationPhones.size) * 100
    : 0;

  // 전화연결 비율 계산 (한 번이라도 연결됐으면 연결로 처리)
  const notConnectedStatuses = ['대기중', '1차 리콜', '2차 리콜', '3차 리콜', '4차 리콜'];
  const connectedPhones = new Set(
    logs
      .filter(log => !notConnectedStatuses.includes(log.status || '대기중'))
      .map(log => log.phone?.replace(/\D/g, ''))
      .filter(Boolean)
  );
  const connectedCount = Array.from(uniqueConsultationPhones).filter(phone =>
    connectedPhones.has(phone)
  ).length;
  const connectedRate = uniqueConsultationPhones.size > 0
    ? (connectedCount / uniqueConsultationPhones.size) * 100
    : 0;

  if (loading) {
    return (
      <div className="text-center py-8 text-gray-500">
        통계 로딩 중...
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-7 gap-3 sm:gap-4">
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow">
          <p className="text-xs sm:text-sm text-gray-600 mb-1">총 방문자</p>
          <p className="text-2xl sm:text-3xl font-bold text-blue-600">
            {totalPageViews.toLocaleString()}
            <span className="text-base sm:text-lg ml-1">명</span>
          </p>
        </div>

        <div className="bg-white p-4 sm:p-6 rounded-lg shadow">
          <p className="text-xs sm:text-sm text-gray-600 mb-1">상담 수 (중복제외)</p>
          <p className="text-2xl sm:text-3xl font-bold text-green-600">
            {uniqueConsultationPhones.size}
            <span className="text-base sm:text-lg ml-1">건</span>
          </p>
          <p className="text-[10px] sm:text-xs text-gray-400 mt-1">
            전체 {logs.length}건 중
          </p>
        </div>

        <div className="bg-white p-4 sm:p-6 rounded-lg shadow">
          <p className="text-xs sm:text-sm text-gray-600 mb-1">전환율</p>
          <p className="text-2xl sm:text-3xl font-bold text-purple-600">
            {totalPageViews > 0
              ? ((uniqueConsultationPhones.size / totalPageViews) * 100).toFixed(1)
              : '0.0'}
            <span className="text-base sm:text-lg ml-1">%</span>
          </p>
        </div>

        <div className="bg-white p-4 sm:p-6 rounded-lg shadow border-2 border-teal-200">
          <p className="text-xs sm:text-sm text-gray-600 mb-1">전화연결 비율</p>
          <p className="text-2xl sm:text-3xl font-bold text-teal-600">
            {connectedRate.toFixed(1)}
            <span className="text-base sm:text-lg ml-1">%</span>
          </p>
          <p className="text-[10px] sm:text-xs text-gray-400 mt-1">
            {connectedCount}명 / {uniqueConsultationPhones.size}명
          </p>
        </div>

        <div className="bg-white p-4 sm:p-6 rounded-lg shadow border-2 border-orange-200">
          <p className="text-xs sm:text-sm text-gray-600 mb-1">상담→방문 비율</p>
          <p className="text-2xl sm:text-3xl font-bold text-orange-600">
            {visitRate.toFixed(1)}
            <span className="text-base sm:text-lg ml-1">%</span>
          </p>
          <p className="text-[10px] sm:text-xs text-gray-400 mt-1">
            {visitedCount}명 / {uniqueConsultationPhones.size}명
          </p>
        </div>

        <div className="bg-white p-4 sm:p-6 rounded-lg shadow border-2 border-red-200">
          <p className="text-xs sm:text-sm text-gray-600 mb-1">상담→치료 비율</p>
          <p className="text-2xl sm:text-3xl font-bold text-red-600">
            {treatmentRate.toFixed(1)}
            <span className="text-base sm:text-lg ml-1">%</span>
          </p>
          <p className="text-[10px] sm:text-xs text-gray-400 mt-1">
            {treatmentCount}명 / {uniqueConsultationPhones.size}명
          </p>
        </div>

        <div className="bg-white p-4 sm:p-6 rounded-lg shadow">
          <p className="text-xs sm:text-sm text-gray-600 mb-1">최다 유입 경로</p>
          <p className="text-sm sm:text-base font-bold text-gray-900 truncate">
            {pageViewSources.length > 0
              ? getReferrerSourceLabel(pageViewSources[0].source)
              : '-'}
          </p>
          <p className="text-lg sm:text-xl font-bold text-gray-600 mt-1">
            {pageViewSources.length > 0 ? pageViewSources[0].count : 0}
            <span className="text-sm sm:text-base ml-1">명</span>
          </p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* 일별 방문 & 상담 추이 */}
        <div className="bg-white p-6 rounded-lg shadow lg:col-span-2">
          <h3 className="text-lg font-bold mb-4">
            일별 방문 & 상담 추이
            <span className="text-sm font-normal text-gray-500 ml-2">
              {dateRange === 'today' && '(오늘)'}
              {dateRange === 'week' && '(최근 7일)'}
              {dateRange === 'month' && '(최근 30일)'}
              {dateRange === 'thisMonth' && '(이번달)'}
              {dateRange === 'lastMonth' && '(저번달)'}
              {dateRange === 'custom' && '(직접 선택)'}
              {dateRange === 'all' && '(전체)'}
            </span>
          </h3>
          <div style={{ height: '300px' }}>
            <Line data={combinedChartData} options={lineOptions} />
          </div>
        </div>

        {/* 유입 경로별 방문자 수 */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-bold mb-4">유입 경로별 방문자 수</h3>
          <div style={{ height: '300px' }}>
            <Bar data={pageViewSourceChartData} options={barOptions} />
          </div>
        </div>

        {/* 유입 경로별 상담 수 */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-bold mb-4">유입 경로별 상담 수</h3>
          <div style={{ height: '300px' }}>
            <Bar data={sourceChartData} options={barOptions} />
          </div>
        </div>

        {/* 상태별 분포 */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-bold mb-4">상태별 분포</h3>
          <div style={{ height: '300px' }}>
            <Pie data={statusChartData} options={pieOptions} />
          </div>
        </div>
      </div>

      {/* 문진표 통계 섹션 */}
      <div className="mt-8 pt-8 border-t-4 border-gray-200">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">문진표 통계</h2>

          {/* 기간 필터 버튼 */}
          <div className="flex flex-wrap gap-2 mb-4">
            {(['all', 'today', 'week', 'thisMonth', 'lastMonth', 'month', 'custom'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setIntakeDateFilter(filter)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors text-sm ${
                  intakeDateFilter === filter
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filter === 'all' && '전체'}
                {filter === 'today' && '오늘'}
                {filter === 'week' && '최근 7일'}
                {filter === 'thisMonth' && '이번달'}
                {filter === 'lastMonth' && '저번달'}
                {filter === 'month' && '최근 30일'}
                {filter === 'custom' && '직접 선택'}
              </button>
            ))}
          </div>

          {/* 직접 선택 날짜 입력 */}
          {intakeDateFilter === 'custom' && (
            <div className="flex flex-col sm:flex-row gap-4 bg-gray-50 p-4 rounded-lg">
              <div className="flex-1">
                <label className="block text-sm text-gray-600 mb-1">시작일</label>
                <input
                  type="date"
                  value={intakeStartDate}
                  onChange={(e) => setIntakeStartDate(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm text-gray-600 mb-1">종료일</label>
                <input
                  type="date"
                  value={intakeEndDate}
                  onChange={(e) => setIntakeEndDate(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
          )}
        </div>

        {/* 문진표 요약 카드 */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6">
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow">
            <p className="text-xs sm:text-sm text-gray-600 mb-1">총 문진표 수</p>
            <p className="text-2xl sm:text-3xl font-bold text-blue-600">
              {filteredIntakes.length}
              <span className="text-base sm:text-lg ml-1">건</span>
            </p>
          </div>

          <div className="bg-white p-4 sm:p-6 rounded-lg shadow">
            <p className="text-xs sm:text-sm text-gray-600 mb-1">평균 나이</p>
            <p className="text-2xl sm:text-3xl font-bold text-green-600">
              {filteredIntakes.length > 0
                ? Math.round(filteredIntakes.reduce((sum, i) => sum + (i.age || 0), 0) / filteredIntakes.length)
                : 0}
              <span className="text-base sm:text-lg ml-1">세</span>
            </p>
          </div>

          <div className="bg-white p-4 sm:p-6 rounded-lg shadow">
            <p className="text-xs sm:text-sm text-gray-600 mb-1">최다 상담과목</p>
            <p className="text-sm sm:text-base font-bold text-gray-900 truncate">
              {Object.keys(consultationTypeCounts).length > 0
                ? Object.entries(consultationTypeCounts).sort((a, b) => b[1] - a[1])[0][0]
                : '-'}
            </p>
            <p className="text-lg sm:text-xl font-bold text-gray-600 mt-1">
              {Object.keys(consultationTypeCounts).length > 0
                ? Object.entries(consultationTypeCounts).sort((a, b) => b[1] - a[1])[0][1]
                : 0}
              <span className="text-sm sm:text-base ml-1">명</span>
            </p>
          </div>

          <div className="bg-white p-4 sm:p-6 rounded-lg shadow">
            <p className="text-xs sm:text-sm text-gray-600 mb-1">최다 내원경로</p>
            <p className="text-sm sm:text-base font-bold text-gray-900 truncate">
              {Object.keys(howDidYouKnowCounts).length > 0
                ? Object.entries(howDidYouKnowCounts).sort((a, b) => b[1] - a[1])[0][0]
                : '-'}
            </p>
            <p className="text-lg sm:text-xl font-bold text-gray-600 mt-1">
              {Object.keys(howDidYouKnowCounts).length > 0
                ? Object.entries(howDidYouKnowCounts).sort((a, b) => b[1] - a[1])[0][1]
                : 0}
              <span className="text-sm sm:text-base ml-1">명</span>
            </p>
          </div>
        </div>

        {/* 문진표 차트 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* 상담과목별 */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-bold mb-4">상담과목별 분포</h3>
            <div style={{ height: '300px' }}>
              {Object.keys(consultationTypeCounts).length > 0 ? (
                <Bar data={consultationTypeChartData} options={barOptions} />
              ) : (
                <div className="flex items-center justify-center h-full text-gray-400">
                  데이터가 없습니다
                </div>
              )}
            </div>
          </div>

          {/* 상담과목별 필터 */}
          <div className="col-span-2 bg-white p-4 rounded-lg shadow">
            <div className="flex items-center gap-4">
              <label className="text-sm font-medium text-gray-700 whitespace-nowrap">상담과목별 필터:</label>
              <select
                value={selectedConsultationType}
                onChange={(e) => setSelectedConsultationType(e.target.value as ConsultationType | 'all')}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="all">전체 ({filteredIntakes.length}명)</option>
                {allConsultationTypes.map(type => (
                  <option key={type} value={type}>
                    {type} ({consultationTypeCounts[type]}명)
                  </option>
                ))}
              </select>
              {selectedConsultationType !== 'all' && (
                <span className="text-sm text-gray-500">
                  선택된 과목: <span className="font-medium text-blue-600">{filteredByConsultationType.length}명</span>
                </span>
              )}
            </div>
          </div>

          {/* 어떻게 알게 되었는지 */}
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold">
                어떻게 알게 되었는지
                {selectedConsultationType !== 'all' && (
                  <span className="ml-2 text-sm font-normal text-blue-600">({selectedConsultationType}, {filteredByConsultationType.length}명)</span>
                )}
              </h3>
              {howDidYouKnowOtherDetails.length > 0 && (
                <button
                  onClick={() => openOtherDetailsModal('howDidYouKnow')}
                  className="text-sm px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
                >
                  기타 상세 ({howDidYouKnowOtherDetails.length}건)
                </button>
              )}
            </div>
            <div style={{ height: '300px' }}>
              {Object.keys(howDidYouKnowCounts).length > 0 ? (
                <Pie data={howDidYouKnowChartData} options={pieOptions} />
              ) : (
                <div className="flex items-center justify-center h-full text-gray-400">
                  데이터가 없습니다
                </div>
              )}
            </div>
          </div>

          {/* 결정 이유 */}
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold">
                내원 결정 이유
                {selectedConsultationType !== 'all' && (
                  <span className="ml-2 text-sm font-normal text-blue-600">({selectedConsultationType}, {filteredByConsultationType.length}명)</span>
                )}
              </h3>
              {whyVisitOtherDetails.length > 0 && (
                <button
                  onClick={() => openOtherDetailsModal('whyVisit')}
                  className="text-sm px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
                >
                  기타 상세 ({whyVisitOtherDetails.length}건)
                </button>
              )}
            </div>
            <div style={{ height: '300px' }}>
              {Object.keys(whyVisitCounts).length > 0 ? (
                <Pie data={whyVisitChartData} options={pieOptions} />
              ) : (
                <div className="flex items-center justify-center h-full text-gray-400">
                  데이터가 없습니다
                </div>
              )}
            </div>
          </div>

          {/* 나이대별 */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-bold mb-4">나이대별 분포</h3>
            <div style={{ height: '300px' }}>
              {Object.keys(ageCounts).length > 0 ? (
                <Bar data={ageChartData} options={barOptions} />
              ) : (
                <div className="flex items-center justify-center h-full text-gray-400">
                  데이터가 없습니다
                </div>
              )}
            </div>
          </div>

          {/* 성별 분포 */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-bold mb-4">성별 분포</h3>
            <div style={{ height: '300px' }}>
              {Object.keys(genderCounts).length > 0 ? (
                <Pie data={genderChartData} options={pieOptions} />
              ) : (
                <div className="flex items-center justify-center h-full text-gray-400">
                  데이터가 없습니다
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 기타 상세 모달 */}
      {otherDetailsModal.type && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setOtherDetailsModal({ type: null, title: '', data: [] })}
        >
          <div
            className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center">
              <h3 className="text-lg font-bold text-gray-900">{otherDetailsModal.title}</h3>
              <button
                onClick={() => setOtherDetailsModal({ type: null, title: '', data: [] })}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6 overflow-y-auto max-h-[calc(80vh-80px)]">
              {otherDetailsModal.data.length > 0 ? (
                <div className="space-y-3">
                  {otherDetailsModal.data.map((item, index) => (
                    <div
                      key={index}
                      className="p-4 bg-gray-50 rounded-lg border border-gray-200"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <span className="font-medium text-gray-900">{item.name}</span>
                        <span className="text-xs text-gray-500">{item.date}</span>
                      </div>
                      <p className="text-sm text-gray-700">{item.value}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center text-gray-500 py-8">
                  기타 사유 데이터가 없습니다.
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
