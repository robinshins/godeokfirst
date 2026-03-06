'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { snapdom } from '@zumer/snapdom';
import { ConsultationLog, ConsultationStatus } from '@/lib/types';
import { PatientIntakeData } from '@/lib/patient-intake-types';
import { getReferrerSourceLabel } from '@/lib/referrer-tracker';
import PopupManagement from '@/components/admin/PopupManagement';
import StatsCharts from '@/components/admin/StatsCharts';
import PatientIntakeList from '@/components/admin/PatientIntakeList';
import RankTracker from '@/components/admin/RankTracker';
import BlogTracker from '@/components/admin/BlogTracker';
import SedationAppealCard from '@/components/SedationAppealCard';

// 알람 옵션 컴포넌트
function AlarmOption({ id, icon, title, description, defaultChecked }: {
  id: string;
  icon: string;
  title: string;
  description: string;
  defaultChecked: boolean;
}) {
  return (
    <label htmlFor={id} className="flex items-start gap-3 p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-blue-300 hover:bg-blue-50 transition-all">
      <input
        type="checkbox"
        id={id}
        defaultChecked={defaultChecked}
        className="mt-1 w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
      />
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xl">{icon}</span>
          <span className="font-semibold text-gray-900">{title}</span>
        </div>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </label>
  );
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLimitedAccess, setIsLimitedAccess] = useState(false); // 외부 업체용 제한된 접근
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');
  const [logs, setLogs] = useState<ConsultationLog[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedSource, setSelectedSource] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [selectedLog, setSelectedLog] = useState<ConsultationLog | null>(null);
  const [stats, setStats] = useState<{ source: string; count: number }[]>([]);
  const [updatingStatus, setUpdatingStatus] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'stats' | 'list' | 'popup' | 'intake' | 'rank' | 'blog'>('list');
  const [dateRange, setDateRange] = useState<'all' | 'today' | 'week' | 'month' | 'thisMonth' | 'lastMonth' | 'custom'>('thisMonth');
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');
  const [tooltipPosition, setTooltipPosition] = useState<{ top: number; left: number } | null>(null);
  const [lastLogCount, setLastLogCount] = useState<number>(0);
  const [audioInitialized, setAudioInitialized] = useState(false);
  const [showAlarmDialog, setShowAlarmDialog] = useState(false);
  const [alarmEnabled, setAlarmEnabled] = useState(false);
  const [browserNotificationEnabled, setBrowserNotificationEnabled] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [notificationPermission, setNotificationPermission] = useState<NotificationPermission>('default');
  const [memoValue, setMemoValue] = useState<string>('');
  const [savingMemo, setSavingMemo] = useState(false);
  const [isDownloadingChat, setIsDownloadingChat] = useState(false);
  const [downloadTarget, setDownloadTarget] = useState<ConsultationLog | null>(null);
  // 문진표 전화번호 → 작성일 배열 Map (방문 배지 표시용)
  const [intakePhoneMap, setIntakePhoneMap] = useState<Map<string, string[]>>(new Map());
  const modalContentRef = useRef<HTMLDivElement>(null);
  const hiddenModalRef = useRef<HTMLDivElement>(null);

  // 인증 체크 및 알람 설정 확인
  useEffect(() => {
    const authToken = localStorage.getItem('admin_auth');
    if (authToken === 'medis_admin_2019') {
      setIsAuthenticated(true);
      setIsLimitedAccess(false);
    } else if (authToken === 'medis_limited_2019') {
      setIsAuthenticated(true);
      setIsLimitedAccess(true);
    }

    if (authToken === 'medis_admin_2019' || authToken === 'medis_limited_2019') {

      // 브라우저 환경 확인
      console.log('🌐 브라우저 정보:', {
        userAgent: navigator.userAgent,
        notificationSupported: 'Notification' in window,
        currentPermission: 'Notification' in window ? Notification.permission : 'N/A',
      });

      // 브라우저 알림 권한 상태 확인
      if ('Notification' in window) {
        const currentPermission = Notification.permission;
        console.log('🔔 초기 브라우저 알림 권한 상태:', currentPermission);
        setNotificationPermission(currentPermission);
      } else {
        console.warn('⚠️ 이 브라우저는 Notification API를 지원하지 않습니다.');
      }

      // 이전 설정 확인
      const alarmConsent = localStorage.getItem('alarm_consent');
      const browserNotificationConsent = localStorage.getItem('browser_notification_consent');
      console.log('💾 localStorage alarm_consent:', alarmConsent);
      console.log('💾 localStorage browser_notification_consent:', browserNotificationConsent);

      // 소리 알람 설정
      if (alarmConsent === 'granted') {
        setAlarmEnabled(true);
        setAudioInitialized(true);
      }

      // 브라우저 알림 설정
      if (browserNotificationConsent === 'granted') {
        setBrowserNotificationEnabled(true);
      }

      // 둘 다 설정되지 않았으면 다이얼로그 표시
      if (!alarmConsent && !browserNotificationConsent) {
        setShowAlarmDialog(true);
      }
    }
  }, []);

  // 제한된 권한인 경우 목록 탭만 접근 가능하도록 강제
  useEffect(() => {
    if (isLimitedAccess && activeTab !== 'list') {
      setActiveTab('list');
    }
  }, [isLimitedAccess, activeTab]);

  // 선택된 로그 변경 시 메모값 초기화
  useEffect(() => {
    if (selectedLog) {
      setMemoValue(selectedLog.memo || '');
    }
  }, [selectedLog]);

  // downloadTarget 설정 시 히든 모달 렌더 후 자동 다운로드
  useEffect(() => {
    if (downloadTarget && hiddenModalRef.current) {
      downloadChatAsPng(downloadTarget);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [downloadTarget]);

  // 사용자 상호작용으로 오디오 초기화 (백업 방법)
  useEffect(() => {
    if (!alarmEnabled) return;

    const initAudio = () => {
      setAudioInitialized(true);
      document.removeEventListener('click', initAudio);
      document.removeEventListener('keydown', initAudio);
    };

    document.addEventListener('click', initAudio);
    document.addEventListener('keydown', initAudio);

    return () => {
      document.removeEventListener('click', initAudio);
      document.removeEventListener('keydown', initAudio);
    };
  }, [alarmEnabled]);

  // 브라우저 알림 표시 함수
  const showBrowserNotification = useCallback((count: number) => {
    console.log('🔔 showBrowserNotification 호출됨, count:', count);
    console.log('🔔 browserNotificationEnabled:', browserNotificationEnabled);

    if (!browserNotificationEnabled) {
      console.log('⚠️ 브라우저 알림이 비활성화되어 있습니다.');
      return;
    }

    if (!('Notification' in window)) {
      console.warn('⚠️ 이 브라우저는 알림을 지원하지 않습니다.');
      return;
    }

    console.log('🔔 현재 알림 권한 상태:', Notification.permission);

    if (Notification.permission === 'granted') {
      console.log('✅ 알림 권한이 승인되어 있습니다. 알림을 생성합니다...');
      try {
        // 고유한 tag를 사용하여 알림이 대체되지 않도록 함
        const uniqueTag = `consultation-${Date.now()}`;

        const notification = new Notification('🦷 새로운 상담문의', {
          body: `${count}건의 새로운 상담문의가 접수되었습니다.\n클릭하여 확인하세요.`,
          icon: '/favicon.ico',
          badge: '/favicon.ico',
          tag: uniqueTag, // 고유한 tag 사용
          requireInteraction: true, // 사용자가 직접 닫을 때까지 유지
          silent: false,
        });

        console.log('✅ 브라우저 알림 생성 성공:', notification);

        // 알림 클릭 시 탭 포커스
        notification.onclick = () => {
          console.log('🖱️ 브라우저 알림이 클릭되었습니다.');
          window.focus();
          notification.close();
        };

        // 30초 후 자동 닫기 (백업용 - 혹시 모를 경우를 대비)
        setTimeout(() => {
          console.log('⏱️ 30초 경과 - 알림을 닫습니다.');
          notification.close();
        }, 30000);
      } catch (error) {
        console.error('❌ 브라우저 알림 생성 실패:', error);
      }
    } else {
      console.warn('⚠️ 알림 권한이 없습니다. 현재 상태:', Notification.permission);
    }
  }, [browserNotificationEnabled]);

  // 알람 재생 함수
  const playAlarmSound = useCallback(() => {
    if (!alarmEnabled || !audioInitialized) return;

    const audio = new Audio('/sounds/alarm.MP3');
    audio.play().catch(error => {
      console.error('알람 재생 실패:', error);
      // 실패 시 사용자에게 알림
      if (!audioInitialized) {
        console.warn('오디오가 초기화되지 않았습니다. 페이지를 클릭해주세요.');
      }
    });
  }, [alarmEnabled, audioInitialized]);

  // 알람 설정 저장
  const handleAlarmSettings = async (soundAlarm: boolean, browserNotification: boolean) => {
    console.log('🎬 handleAlarmSettings 호출됨', { soundAlarm, browserNotification });
    setShowAlarmDialog(false);

    // 소리 알람 설정
    setAlarmEnabled(soundAlarm);
    if (soundAlarm) {
      localStorage.setItem('alarm_consent', 'granted');
      setAudioInitialized(true);
      console.log('✅ 소리 알람 활성화');

      // 테스트 알람 재생
      setTimeout(() => {
        const audio = new Audio('/sounds/alarm.MP3');
        audio.play().catch(() => {
          console.log('테스트 알람이 차단되었습니다. 페이지를 클릭하면 활성화됩니다.');
        });
      }, 100);
    } else {
      localStorage.setItem('alarm_consent', 'denied');
      console.log('❌ 소리 알람 비활성화');
    }

    // 브라우저 알림 설정
    if (browserNotification) {
      if ('Notification' in window) {
        console.log('📢 Notification API 사용 가능');
        console.log('📢 현재 브라우저 알림 권한 상태:', Notification.permission);

        if (Notification.permission === 'default') {
          console.log('📢 브라우저 알림 권한 요청 팝업을 띄웁니다...');
          try {
            const permission = await Notification.requestPermission();
            console.log('📢 사용자 선택 결과:', permission);
            setNotificationPermission(permission);

            if (permission === 'granted') {
              console.log('✅ 브라우저 알림 권한이 승인되었습니다.');
              setBrowserNotificationEnabled(true);
              localStorage.setItem('browser_notification_consent', 'granted');
              // 테스트 알림 표시
              showBrowserNotification(1);
            } else {
              console.log('❌ 브라우저 알림 권한이 거부되었습니다.');
              setBrowserNotificationEnabled(false);
              localStorage.setItem('browser_notification_consent', 'denied');
              alert('브라우저 알림이 거부되었습니다.\n브라우저 설정에서 알림 권한을 허용하실 수 있습니다.');
            }
          } catch (error) {
            console.error('❌ 브라우저 알림 권한 요청 실패:', error);
            setBrowserNotificationEnabled(false);
            localStorage.setItem('browser_notification_consent', 'denied');
          }
        } else if (Notification.permission === 'granted') {
          console.log('✅ 이미 브라우저 알림 권한이 승인되어 있습니다.');
          setNotificationPermission('granted');
          setBrowserNotificationEnabled(true);
          localStorage.setItem('browser_notification_consent', 'granted');
          // 테스트 알림 표시
          showBrowserNotification(1);
        } else if (Notification.permission === 'denied') {
          console.log('❌ 브라우저 알림 권한이 이미 거부되어 있습니다.');
          setNotificationPermission('denied');
          setBrowserNotificationEnabled(false);
          localStorage.setItem('browser_notification_consent', 'denied');
          alert('브라우저 알림 권한이 차단되어 있습니다.\n브라우저 주소창 왼쪽의 자물쇠 아이콘을 클릭하여 알림 권한을 허용해주세요.');
        }
      } else {
        console.warn('⚠️ 이 브라우저는 알림 기능을 지원하지 않습니다.');
        setBrowserNotificationEnabled(false);
        localStorage.setItem('browser_notification_consent', 'denied');
      }
    } else {
      setBrowserNotificationEnabled(false);
      localStorage.setItem('browser_notification_consent', 'denied');
      console.log('❌ 브라우저 알림 비활성화');
    }
  };

  // 소리 알람 토글
  const toggleSoundAlarm = () => {
    const newState = !alarmEnabled;
    setAlarmEnabled(newState);

    if (newState) {
      localStorage.setItem('alarm_consent', 'granted');
      setAudioInitialized(true);
      console.log('✅ 소리 알람 켜짐');
    } else {
      localStorage.setItem('alarm_consent', 'denied');
      setAudioInitialized(false);
      console.log('❌ 소리 알람 꺼짐');
    }
  };

  // 브라우저 알림 토글
  const toggleBrowserNotification = async () => {
    const newState = !browserNotificationEnabled;

    if (newState) {
      // 켜려고 할 때 - 권한 확인 필요
      if ('Notification' in window) {
        if (Notification.permission === 'granted') {
          setBrowserNotificationEnabled(true);
          localStorage.setItem('browser_notification_consent', 'granted');
          console.log('✅ 브라우저 알림 켜짐');
        } else if (Notification.permission === 'default') {
          // 권한 요청
          try {
            const permission = await Notification.requestPermission();
            setNotificationPermission(permission);

            if (permission === 'granted') {
              setBrowserNotificationEnabled(true);
              localStorage.setItem('browser_notification_consent', 'granted');
              console.log('✅ 브라우저 알림 켜짐');
              showBrowserNotification(1);
            } else {
              setBrowserNotificationEnabled(false);
              localStorage.setItem('browser_notification_consent', 'denied');
              alert('브라우저 알림 권한이 거부되었습니다.');
            }
          } catch (error) {
            console.error('❌ 브라우저 알림 권한 요청 실패:', error);
          }
        } else {
          // 이미 거부됨
          alert('브라우저 알림 권한이 차단되어 있습니다.\n브라우저 주소창 왼쪽의 자물쇠 아이콘을 클릭하여 알림 권한을 허용해주세요.');
        }
      }
    } else {
      // 끄기
      setBrowserNotificationEnabled(false);
      localStorage.setItem('browser_notification_consent', 'denied');
      console.log('❌ 브라우저 알림 꺼짐');
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === '!!medis2019!') {
      localStorage.setItem('admin_auth', 'medis_admin_2019');
      setIsAuthenticated(true);
      setIsLimitedAccess(false);
      setAuthError('');
      setPassword('');
    } else if (password === 'medis123!') {
      // 외부 업체용 제한된 접근 (목록 탭만 접근 가능)
      localStorage.setItem('admin_auth', 'medis_limited_2019');
      setIsAuthenticated(true);
      setIsLimitedAccess(true);
      setAuthError('');
      setPassword('');
    } else {
      setAuthError('비밀번호가 올바르지 않습니다.');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('admin_auth');
    setIsAuthenticated(false);
    setIsLimitedAccess(false);
    setPassword('');
  };

  // 날짜 범위 계산 함수
  const getDateRange = (): { start: string; end: string } | null => {
    const now = new Date();
    const start = new Date();

    switch (dateRange) {
      case 'today':
        start.setHours(0, 0, 0, 0);
        return { start: start.toISOString(), end: now.toISOString() };
      case 'week':
        start.setDate(now.getDate() - 7);
        start.setHours(0, 0, 0, 0);
        return { start: start.toISOString(), end: now.toISOString() };
      case 'month':
        start.setDate(now.getDate() - 30);
        start.setHours(0, 0, 0, 0);
        return { start: start.toISOString(), end: now.toISOString() };
      case 'thisMonth':
        const thisMonthStart = new Date(now.getFullYear(), now.getMonth(), 1);
        return { start: thisMonthStart.toISOString(), end: now.toISOString() };
      case 'lastMonth':
        const lastMonthStart = new Date(now.getFullYear(), now.getMonth() - 1, 1);
        const lastMonthEnd = new Date(now.getFullYear(), now.getMonth(), 0, 23, 59, 59, 999);
        return { start: lastMonthStart.toISOString(), end: lastMonthEnd.toISOString() };
      case 'custom':
        if (startDate || endDate) {
          let start = '';
          let end = '';

          if (startDate) {
            // 한국 시간 00:00:00 기준
            const startDateTime = new Date(startDate + 'T00:00:00+09:00');
            start = startDateTime.toISOString();
          }

          if (endDate) {
            // 한국 시간 23:59:59 기준
            const endDateTime = new Date(endDate + 'T23:59:59.999+09:00');
            end = endDateTime.toISOString();
          }

          return { start, end };
        }
        return null;
      case 'all':
      default:
        return null;
    }
  };

  const fetchLogs = useCallback(async (silent = false) => {
    if (!silent) setLoading(true);
    try {
      let url = '/api/consultations?limit=100';

      if (selectedSource !== 'all') {
        url += `&source=${selectedSource}`;
      }

      if (selectedStatus !== 'all') {
        url += `&status=${selectedStatus}`;
      }

      const range = getDateRange();
      if (range) {
        if (range.start) url += `&startDate=${range.start}`;
        if (range.end) url += `&endDate=${range.end}`;
      }

      console.log('🔍 Admin - API 호출 URL:', url);
      const response = await fetch(url);
      const data = await response.json();

      console.log('📊 Admin - API 응답:', data);
      if (data.success) {
        console.log('✅ Admin - 불러온 로그 개수:', data.count);
        console.log('📋 Admin - 로그 목록:', data.data);
        if (data.data.length > 0) {
          console.log('📝 Admin - 첫 번째 로그:', data.data[0]);
          console.log('💬 Admin - 첫 번째 로그의 chat_history:', data.data[0]?.chat_history);
        } else {
          console.warn('⚠️ Admin - 로그가 비어있습니다!');
        }

        // 새로운 상담 내역 체크
        const newLogCount = data.data.length;
        if (silent && lastLogCount > 0 && newLogCount > lastLogCount) {
          const newCount = newLogCount - lastLogCount;
          console.log('🔔 새로운 상담 내역 발견! 이전:', lastLogCount, '현재:', newLogCount, '새로운 상담:', newCount);

          // 소리 알람 재생
          playAlarmSound();

          // 브라우저 알림 표시
          showBrowserNotification(newCount);
        }

        setLogs(data.data);
        setLastLogCount(newLogCount);
      } else {
        console.error('❌ Admin - API 호출 실패:', data);
      }
    } catch (error) {
      console.error('Failed to fetch logs:', error);
    } finally {
      if (!silent) setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedSource, selectedStatus, dateRange, startDate, endDate, lastLogCount, playAlarmSound, showBrowserNotification]);

  const fetchStats = useCallback(async () => {
    try {
      let url = '/api/consultations?limit=500';

      const range = getDateRange();
      if (range) {
        if (range.start) url += `&startDate=${range.start}`;
        if (range.end) url += `&endDate=${range.end}`;
      }

      const response = await fetch(url);
      const data = await response.json();

      if (data.success) {
        const sourceCounts: Record<string, number> = {};
        data.data.forEach((log: ConsultationLog) => {
          sourceCounts[log.referrer_source] = (sourceCounts[log.referrer_source] || 0) + 1;
        });

        const statsArray = Object.entries(sourceCounts).map(([source, count]) => ({
          source,
          count,
        })).sort((a, b) => b.count - a.count);

        setStats(statsArray);
      }
    } catch (error) {
      console.error('Failed to fetch stats:', error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dateRange, startDate, endDate]);

  // 문진표 데이터 가져오기 (방문 배지 표시용)
  const fetchIntakes = useCallback(async () => {
    try {
      const response = await fetch('/api/patient-intake');
      const data = await response.json();
      if (data.success && data.data) {
        const phoneMap = new Map<string, string[]>();
        (data.data as PatientIntakeData[]).forEach((intake) => {
          if (intake.phoneNumber && intake.created_at) {
            // 전화번호 정규화 (숫자만 추출)
            const normalizedPhone = intake.phoneNumber.replace(/\D/g, '');
            const existing = phoneMap.get(normalizedPhone) || [];
            existing.push(intake.created_at);
            phoneMap.set(normalizedPhone, existing);
          }
        });
        setIntakePhoneMap(phoneMap);
      }
    } catch (error) {
      console.error('Failed to fetch intakes:', error);
    }
  }, []);

  useEffect(() => {
    fetchLogs();
    fetchStats();
    fetchIntakes();
  }, [fetchLogs, fetchStats, fetchIntakes]);

  // 1분마다 새로운 상담 내역 체크 (인증된 상태에서만)
  useEffect(() => {
    if (!isAuthenticated) return;

    // 초기 로드 완료 후 폴링 시작 (5분 간격으로 egress 절약)
    const pollingInterval = setInterval(() => {
      console.log('🔄 5분 주기 상담 내역 체크...');
      fetchLogs(true); // silent mode로 호출
    }, 300000); // 300초 = 5분

    return () => clearInterval(pollingInterval);
  }, [isAuthenticated, fetchLogs]);

  const updateStatus = async (id: string, newStatus: string) => {
    setUpdatingStatus(id);
    try {
      const response = await fetch('/api/consultations', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, status: newStatus }),
      });

      const data = await response.json();

      if (data.success) {
        setLogs(prevLogs =>
          prevLogs.map(log =>
            log.id === id ? { ...log, status: newStatus as ConsultationStatus } : log
          )
        );

        if (selectedLog?.id === id) {
          setSelectedLog(prev => prev ? { ...prev, status: newStatus as ConsultationStatus } : null);
        }
      } else {
        alert('상태 업데이트에 실패했습니다.');
      }
    } catch (error) {
      console.error('Failed to update status:', error);
      alert('상태 업데이트 중 오류가 발생했습니다.');
    } finally {
      setUpdatingStatus(null);
    }
  };

  const saveMemo = async (id: string, memo: string) => {
    setSavingMemo(true);
    try {
      const response = await fetch('/api/consultations', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, memo }),
      });

      const data = await response.json();

      if (data.success) {
        setLogs(prevLogs =>
          prevLogs.map(log =>
            log.id === id ? { ...log, memo } : log
          )
        );

        if (selectedLog?.id === id) {
          setSelectedLog(prev => prev ? { ...prev, memo } : null);
        }
      } else {
        alert('메모 저장에 실패했습니다.');
      }
    } catch (error) {
      console.error('Failed to save memo:', error);
      alert('메모 저장 중 오류가 발생했습니다.');
    } finally {
      setSavingMemo(false);
    }
  };

  const downloadChatAsPng = async (targetLog?: ConsultationLog) => {
    const log = targetLog || selectedLog;
    const targetRef = targetLog ? hiddenModalRef : modalContentRef;

    if (!targetRef.current || !log) return;

    setIsDownloadingChat(true);
    try {
      const element = targetRef.current;
      element.scrollTop = 0;

      await new Promise(resolve => setTimeout(resolve, 200));

      const result = await snapdom(element);
      const fileName = `상담내역_${log.name}_${new Date().toISOString().split('T')[0]}.png`;
      await result.download({ type: 'png', filename: fileName });

    } catch (error) {
      console.error('Error downloading PNG:', error);
      alert('다운로드 중 오류가 발생했습니다: ' + (error as Error).message);
    } finally {
      setIsDownloadingChat(false);
      setDownloadTarget(null);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case '대기중': return 'bg-gray-100 text-gray-800';
      case '보류중': return 'bg-purple-100 text-purple-800';
      case '1차 리콜': return 'bg-yellow-100 text-yellow-800';
      case '2차 리콜': return 'bg-yellow-200 text-yellow-900';
      case '3차 리콜': return 'bg-orange-100 text-orange-800';
      case '4차 리콜': return 'bg-orange-200 text-orange-900';
      case '내원 전 미동의': return 'bg-red-100 text-red-800';
      case '내원 예약 완료': return 'bg-green-100 text-green-800';
      case '치료 진행': return 'bg-cyan-100 text-cyan-800';
      case '상담 미동의': return 'bg-red-200 text-red-900';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const exportToCSV = () => {
    const headers = ['생성일시', '이름', '전화번호', '나이', '상담내용', '유입경로', '메시지수', '상태'];
    const rows = logs.map(log => [
      new Date(log.created_at!).toLocaleString('ko-KR'),
      log.name,
      log.phone,
      log.age,
      log.consultation_content,
      getReferrerSourceLabel(log.referrer_source),
      log.chat_history.length,
      log.status,
    ]);

    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.map(cell => `"${cell}"`).join(','))
    ].join('\n');

    const blob = new Blob(['\uFEFF' + csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `상담로그_${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('ko-KR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const handleTooltipMouseEnter = (e: React.MouseEvent<HTMLSpanElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setTooltipPosition({
      top: rect.bottom + window.scrollY + 8,
      left: rect.left + window.scrollX
    });
  };

  const handleTooltipMouseLeave = () => {
    setTooltipPosition(null);
  };

  // 인증되지 않은 경우 로그인 화면 표시
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
          <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">관리자 로그인</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                비밀번호
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="비밀번호를 입력하세요"
                autoFocus
              />
              {authError && (
                <p className="mt-2 text-sm text-red-600">{authError}</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              로그인
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 w-full">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="w-full px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex items-center gap-3">
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900">상담 관리</h1>
              <div className="flex items-center gap-2">
                {/* 소리 알람 버튼 */}
                <button
                  onClick={toggleSoundAlarm}
                  className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                    alarmEnabled && audioInitialized
                      ? 'bg-green-100 text-green-700 hover:bg-green-200'
                      : alarmEnabled && !audioInitialized
                      ? 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  title={alarmEnabled ? '소리 알람 켜짐' : '소리 알람 꺼짐'}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" />
                  </svg>
                  {alarmEnabled ? '🔊' : '🔇'}
                </button>

                {/* 브라우저 알림 버튼 */}
                <button
                  onClick={toggleBrowserNotification}
                  className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                    browserNotificationEnabled
                      ? 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  title={browserNotificationEnabled ? '브라우저 알림 켜짐' : '브라우저 알림 꺼짐'}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    {browserNotificationEnabled ? (
                      <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                    ) : (
                      <path fillRule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clipRule="evenodd" />
                    )}
                  </svg>
                  {browserNotificationEnabled ? '🔔' : '🔕'}
                </button>
              </div>
            </div>
            <div className="flex gap-2 w-full sm:w-auto">
              {!isLimitedAccess && (
                <button
                  onClick={exportToCSV}
                  className="flex-1 sm:flex-initial px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium text-sm sm:text-base"
                >
                  CSV 내보내기
                </button>
              )}
              <button
                onClick={handleLogout}
                className="flex-1 sm:flex-initial px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium text-sm sm:text-base"
              >
                로그아웃
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8 py-8">
        {/* Tab Navigation */}
        <div className="mb-6">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex gap-8">
              <button
                onClick={() => setActiveTab('list')}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'list'
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                목록
              </button>
              {!isLimitedAccess && (
                <>
                  <button
                    onClick={() => setActiveTab('stats')}
                    className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                      activeTab === 'stats'
                        ? 'border-blue-600 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    통계
                  </button>
                  <button
                    onClick={() => setActiveTab('intake')}
                    className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                      activeTab === 'intake'
                        ? 'border-blue-600 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    문진표
                  </button>
                  <button
                    onClick={() => setActiveTab('popup')}
                    className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                      activeTab === 'popup'
                        ? 'border-blue-600 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    팝업 관리
                  </button>
                  <button
                    onClick={() => setActiveTab('rank')}
                    className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                      activeTab === 'rank'
                        ? 'border-blue-600 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    플레이스 순위추적
                  </button>
                  <button
                    onClick={() => setActiveTab('blog')}
                    className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                      activeTab === 'blog'
                        ? 'border-blue-600 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    블로그 노출추적
                  </button>
                </>
              )}
            </nav>
          </div>
        </div>

        {/* Date Range Filter (hide for popup, intake, rank, and blog tabs) */}
        {activeTab !== 'popup' && activeTab !== 'intake' && activeTab !== 'rank' && activeTab !== 'blog' && (
        <div className="bg-white p-4 rounded-lg shadow mb-6">
          <h3 className="text-sm font-semibold text-gray-700 mb-2">기간</h3>
          <div className="flex flex-wrap gap-2 mb-4">
            {(['all', 'today', 'week', 'thisMonth', 'lastMonth', 'month', 'custom'] as const).map((range) => (
              <button
                key={range}
                onClick={() => setDateRange(range)}
                className={`px-3 sm:px-4 py-2 rounded-lg font-medium transition-colors text-sm sm:text-base ${
                  dateRange === range
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {range === 'all' && '전체'}
                {range === 'today' && '오늘'}
                {range === 'week' && '최근 7일'}
                {range === 'thisMonth' && '이번달'}
                {range === 'lastMonth' && '저번달'}
                {range === 'month' && '최근 30일'}
                {range === 'custom' && '직접 선택'}
              </button>
            ))}
          </div>

          {dateRange === 'custom' && (
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-sm text-gray-600 mb-1">시작일</label>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm text-gray-600 mb-1">종료일</label>
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
          )}
        </div>
        )}

        {/* Popup Management Tab */}
        {activeTab === 'popup' && <PopupManagement />}

        {/* List Tab */}
        {activeTab === 'list' && (
          <>
            {/* Filters */}
            <div className="bg-white p-4 rounded-lg shadow mb-6">
              <h3 className="text-sm font-semibold text-gray-700 mb-2">유입 경로</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                <button
                  onClick={() => setSelectedSource('all')}
                  className={`px-3 sm:px-4 py-2 rounded-lg font-medium transition-colors text-sm sm:text-base ${
                    selectedSource === 'all'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  전체
                </button>
                {stats.map((stat) => (
                  <button
                    key={stat.source}
                    onClick={() => setSelectedSource(stat.source)}
                    className={`px-3 sm:px-4 py-2 rounded-lg font-medium transition-colors text-sm sm:text-base ${
                      selectedSource === stat.source
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <span className="hidden sm:inline">{getReferrerSourceLabel(stat.source)} ({stat.count})</span>
                    <span className="sm:hidden">{getReferrerSourceLabel(stat.source).split(' ')[0]} ({stat.count})</span>
                  </button>
                ))}
              </div>

              <h3 className="text-sm font-semibold text-gray-700 mb-2">상담 상태</h3>
              <div className="flex flex-wrap gap-2">
                {['all', '대기중', '보류중', '1차 리콜', '2차 리콜', '3차 리콜', '4차 리콜', '내원 전 미동의', '내원 예약 완료', '치료 진행', '상담 미동의'].map((status) => (
                  <button
                    key={status}
                    onClick={() => setSelectedStatus(status)}
                    className={`px-3 sm:px-4 py-2 rounded-lg font-medium transition-colors text-sm sm:text-base ${
                      selectedStatus === status
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {status === 'all' ? '전체' : status}
                  </button>
                ))}
              </div>
            </div>

            {/* Table */}
            <div className="relative">
              <div className="bg-white rounded-lg shadow overflow-hidden">
                {loading ? (
                  <div className="p-6 sm:p-8 text-center text-gray-500 text-sm sm:text-base">로딩 중...</div>
                ) : logs.length === 0 ? (
                  <div className="p-6 sm:p-8 text-center text-gray-500 text-sm sm:text-base">상담 내역이 없습니다.</div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200 table-fixed">
                      <thead className="bg-gray-50" style={{position: 'relative'}}>
                        <tr>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap w-[140px]">
                            생성일시
                          </th>
                          <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap w-[60px]">
                            이름
                          </th>
                          <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap w-[120px]">
                            전화번호
                          </th>
                          <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap w-[50px]">
                            나이
                          </th>
                          <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap w-[100px]">
                            상담내용
                          </th>
                          <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap w-[130px]">
                            예약방식
                          </th>
                          <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap w-[100px]">
                            <span className="flex items-center gap-1 cursor-help">
                              유입경로
                              <span
                                onMouseEnter={handleTooltipMouseEnter}
                                onMouseLeave={handleTooltipMouseLeave}
                              >
                                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                              </span>
                            </span>
                          </th>
                          <th className="px-3 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap w-[50px]">
                            대화
                          </th>
                          <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap w-[120px]">
                            상태
                          </th>
                          <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap w-[50px]">
                            상세
                          </th>
                          {/* <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            삭제
                          </th> */}
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {logs.map((log) => (
                          <tr key={log.id} className="hover:bg-gray-50">
                            <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                              {formatDate(log.created_at!)}
                            </td>
                            <td className="px-3 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                              <div className="flex items-center gap-1.5">
                                {log.name}
                                {(() => {
                                  // 전화번호 정규화 후 문진표 작성 여부 확인
                                  const normalizedPhone = log.phone?.replace(/\D/g, '');
                                  const intakeDates = normalizedPhone ? intakePhoneMap.get(normalizedPhone) : null;
                                  // 상담 신청일 이후에 문진표 작성이 있으면 방문 배지 표시
                                  const hasVisited = intakeDates?.some(intakeDate =>
                                    new Date(intakeDate) >= new Date(log.created_at!)
                                  );
                                  return hasVisited ? (
                                    <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-green-100 text-green-800">
                                      방문
                                    </span>
                                  ) : null;
                                })()}
                              </div>
                            </td>
                            <td className="px-3 py-3 whitespace-nowrap text-sm text-gray-900">
                              {log.phone}
                            </td>
                            <td className="px-3 py-3 whitespace-nowrap text-sm text-gray-900">
                              {log.age}세
                            </td>
                            <td className="px-3 py-3 whitespace-nowrap text-sm text-gray-900">
                              {log.consultation_content}
                            </td>
                            <td className="px-3 py-3 whitespace-nowrap text-sm">
                              {log.booking_type === 'naver_reservation' && (
                                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                  📅 네이버예약
                                </span>
                              )}
                              {log.booking_type === 'phone_consultation' && (
                                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                  📞 전화{log.preferred_call_time && ` (${log.preferred_call_time})`}
                                </span>
                              )}
                              {!log.booking_type && (
                                <span className="text-gray-400 text-xs">미선택</span>
                              )}
                            </td>
                            <td className="px-3 py-3 whitespace-nowrap text-sm">
                              <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                {getReferrerSourceLabel(log.referrer_source)}
                              </span>
                            </td>
                            <td className="px-3 py-3 whitespace-nowrap text-sm text-gray-900 text-center">
                              {log.chat_history.length}
                            </td>
                            <td className="px-3 py-3 whitespace-nowrap text-sm">
                              <select
                                value={log.status}
                                onChange={(e) => updateStatus(log.id!, e.target.value)}
                                disabled={updatingStatus === log.id}
                                className={`px-2 py-1 rounded-full text-xs font-medium border-0 cursor-pointer ${getStatusColor(log.status)} ${updatingStatus === log.id ? 'opacity-50' : ''}`}
                              >
                                <option value="대기중">대기중</option>
                                <option value="보류중">보류중</option>
                                <option value="1차 리콜">1차 리콜</option>
                                <option value="2차 리콜">2차 리콜</option>
                                <option value="3차 리콜">3차 리콜</option>
                                <option value="4차 리콜">4차 리콜</option>
                                <option value="내원 전 미동의">내원 전 미동의</option>
                                <option value="내원 예약 완료">내원 예약 완료</option>
                                <option value="치료 진행">치료 진행</option>
                                <option value="상담 미동의">상담 미동의</option>
                              </select>
                            </td>
                            <td className="px-3 py-3 whitespace-nowrap text-sm">
                              <div className="flex items-center gap-2">
                                <button
                                  onClick={() => setSelectedLog(log)}
                                  className="text-blue-600 hover:text-blue-800 font-medium"
                                >
                                  보기
                                </button>
                                <button
                                  onClick={() => setDownloadTarget(log)}
                                  disabled={isDownloadingChat}
                                  className={`${isDownloadingChat ? 'text-gray-400 cursor-not-allowed' : 'text-green-600 hover:text-green-800'} font-medium`}
                                  title="PNG 다운로드"
                                >
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                  </svg>
                                </button>
                              </div>
                            </td>
                            {/* <td className="px-6 py-4 whitespace-nowrap text-sm">
                              <button
                                onClick={() => deleteLog(log.id!)}
                                disabled={deletingId === log.id}
                                className={`font-medium ${
                                  deletingId === log.id
                                    ? 'text-gray-400 cursor-not-allowed'
                                    : 'text-red-600 hover:text-red-800'
                                }`}
                              >
                                {deletingId === log.id ? '삭제 중...' : '삭제'}
                              </button>
                            </td> */}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          </>
        )}

        {/* Statistics Tab */}
        {activeTab === 'stats' && (
          <StatsCharts
            logs={logs}
            stats={stats}
            dateRange={dateRange}
            startDate={startDate}
            endDate={endDate}
          />
        )}

        {/* Patient Intake Tab */}
        {activeTab === 'intake' && <PatientIntakeList />}

        {/* Rank Tracker Tab */}
        {activeTab === 'rank' && <RankTracker />}

        {/* Blog Tracker Tab */}
        {activeTab === 'blog' && <BlogTracker />}
      </div>

      {/* Tooltip */}
      {tooltipPosition && (
        <div
          className="fixed w-80 p-4 bg-gray-900 text-white text-xs rounded-lg shadow-xl z-[100] pointer-events-none"
          style={{
            top: `${tooltipPosition.top}px`,
            left: `${tooltipPosition.left}px`,
            transform: 'translateX(-50%)'
          }}
        >
          <p className="font-semibold mb-2">유입 경로 분류 기준</p>
          <ul className="space-y-1.5 text-left">
            <li><strong>네이버 블로그:</strong> blog.naver.com</li>
            <li><strong>네이버 지식인:</strong> kin.naver.com</li>
            <li><strong>네이버 플레이스:</strong> place.naver.com, map.naver.com</li>
            <li><strong>네이버 검색:</strong> search.naver.com</li>
            <li><strong>네이버 기타:</strong> naver.com (기타)</li>
            <li><strong>메타:</strong> facebook.com, instagram.com</li>
            <li><strong>유튜브:</strong> youtube.com</li>
            <li><strong>구글:</strong> google.com</li>
            <li><strong>카카오:</strong> kakao.com, daum.net</li>
            <li><strong>직접 접속:</strong> URL 직접 입력</li>
            <li><strong>기타:</strong> 위 분류에 해당하지 않는 경우</li>
          </ul>
        </div>
      )}

      {/* Alarm Settings Dialog */}
      {showAlarmDialog && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6 shadow-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">알림 설정</h3>
                <p className="text-sm text-gray-600">원하는 알림 방식을 선택하세요</p>
              </div>
            </div>

            <div className="mb-6 space-y-4">
              {/* 설명 */}
              <div className="p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-gray-700 mb-2">
                  ✓ 1분마다 새로운 상담 내역을 자동으로 확인합니다
                </p>
                <p className="text-sm text-gray-700">
                  ✓ 원하는 알림 방식을 각각 설정할 수 있습니다
                </p>
              </div>

              {/* 옵션 선택 */}
              <div className="space-y-3">
                <AlarmOption
                  id="soundAlarm"
                  icon="🔊"
                  title="소리 알람"
                  description="새 상담이 있으면 알람 소리로 알려드립니다"
                  defaultChecked={alarmEnabled}
                />
                <AlarmOption
                  id="browserNotification"
                  icon="🔔"
                  title="브라우저 알림"
                  description="우측 하단에 브라우저 알림이 표시됩니다 (다른 탭에서도 알림)"
                  defaultChecked={browserNotificationEnabled}
                />
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setShowAlarmDialog(false)}
                className="flex-1 px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium"
              >
                나중에
              </button>
              <button
                onClick={() => {
                  const soundAlarm = (document.getElementById('soundAlarm') as HTMLInputElement)?.checked || false;
                  const browserNotif = (document.getElementById('browserNotification') as HTMLInputElement)?.checked || false;
                  handleAlarmSettings(soundAlarm, browserNotif);
                }}
                className="flex-1 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                설정 저장
              </button>
            </div>

            <p className="mt-4 text-xs text-gray-500 text-center">
              설정은 헤더의 알람 버튼으로 언제든 변경할 수 있습니다
            </p>
          </div>
        </div>
      )}

      {/* Detail Modal */}
      {selectedLog && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setSelectedLog(null)}>
          <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center z-10">
              <h2 className="text-xl font-bold">상담 상세</h2>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => downloadChatAsPng()}
                  disabled={isDownloadingChat}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                    isDownloadingChat
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-blue-50 text-blue-600 hover:bg-blue-100'
                  }`}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  {isDownloadingChat ? '다운로드 중...' : 'PNG 저장'}
                </button>
                <button
                  onClick={() => setSelectedLog(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            <div ref={modalContentRef} className="p-6">
              {/* 기본 정보 */}
              <div className="mb-6">
                <h3 className="text-lg font-bold mb-3">기본 정보</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">이름</p>
                    <p className="font-medium">{selectedLog.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">전화번호</p>
                    <p className="font-medium">{selectedLog.phone}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">나이</p>
                    <p className="font-medium">{selectedLog.age}세</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">생성일시</p>
                    <p className="font-medium">{formatDate(selectedLog.created_at!)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">상태</p>
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(selectedLog.status)}`}>
                      {selectedLog.status}
                    </span>
                  </div>
                  <div className="col-span-2">
                    <p className="text-sm text-gray-600">상담 내용</p>
                    <p className="font-medium">{selectedLog.consultation_content}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">예약 방식</p>
                    <p className="font-medium">
                      {selectedLog.booking_type === 'naver_reservation' && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          📅 네이버 예약
                        </span>
                      )}
                      {selectedLog.booking_type === 'phone_consultation' && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          📞 전화 상담
                        </span>
                      )}
                      {!selectedLog.booking_type && (
                        <span className="text-gray-400">미선택</span>
                      )}
                    </p>
                  </div>
                  {selectedLog.booking_type === 'phone_consultation' && selectedLog.preferred_call_time && (
                    <div>
                      <p className="text-sm text-gray-600">희망 통화 시간</p>
                      <p className="font-medium">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                          🕐 {selectedLog.preferred_call_time}
                        </span>
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* 유입 정보 */}
              <div className="mb-6">
                <h3 className="text-lg font-bold mb-3">유입 정보</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">유입 경로</p>
                    <p className="font-medium">{getReferrerSourceLabel(selectedLog.referrer_source)}</p>
                  </div>
                  {selectedLog.search_query && (
                    <div>
                      <p className="text-sm text-gray-600">검색어</p>
                      <p className="font-medium text-blue-600">{selectedLog.search_query}</p>
                    </div>
                  )}
                  {selectedLog.referrer_url && (
                    <div className="col-span-2">
                      <p className="text-sm text-gray-600">참조 URL</p>
                      <p className="font-medium text-xs break-all text-blue-600">{selectedLog.referrer_url}</p>
                    </div>
                  )}
                  {selectedLog.utm_source && (
                    <>
                      <div>
                        <p className="text-sm text-gray-600">UTM Source</p>
                        <p className="font-medium">{selectedLog.utm_source}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">UTM Medium</p>
                        <p className="font-medium">{selectedLog.utm_medium || '-'}</p>
                      </div>
                      <div className="col-span-2">
                        <p className="text-sm text-gray-600">UTM Campaign</p>
                        <p className="font-medium">{selectedLog.utm_campaign || '-'}</p>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* 메모 */}
              <div className="mb-6">
                <h3 className="text-lg font-bold mb-3">📝 메모</h3>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <textarea
                    value={memoValue}
                    onChange={(e) => setMemoValue(e.target.value)}
                    placeholder="상담 관련 메모를 입력하세요..."
                    className="w-full h-32 p-3 border border-yellow-300 rounded-lg resize-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 bg-white"
                  />
                  <div className="flex justify-end mt-3">
                    <button
                      onClick={() => saveMemo(selectedLog.id!, memoValue)}
                      disabled={savingMemo}
                      className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                        savingMemo
                          ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                          : 'bg-yellow-500 text-white hover:bg-yellow-600'
                      }`}
                    >
                      {savingMemo ? '저장 중...' : '메모 저장'}
                    </button>
                  </div>
                </div>
              </div>

              {/* 채팅 히스토리 - 실제 채팅 UI와 동일한 스타일 */}
              <div>
                <h3 className="text-lg font-bold mb-3">채팅 히스토리 ({selectedLog.chat_history.length}개 메시지)</h3>
                <div className="bg-[#f3f6fb] p-4 rounded-lg max-h-[600px] overflow-y-auto flex flex-col gap-5">
                  {selectedLog.chat_history.map((message) => (
                    <div key={message.id}>
                      {message.role === 'assistant' ? (
                        /* AI 메시지 - ChatInterface와 동일한 스타일 */
                        <div className="flex gap-3 items-start max-w-full">
                          {/* AI 아이콘 */}
                          <div className="w-[30px] h-[30px] flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                              <circle cx="15" cy="15" r="15" fill="white"/>
                              <mask id="mask_admin" style={{maskType: "alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="30" height="30">
                                <circle cx="15" cy="15" r="15" fill="#D9D9D9"/>
                              </mask>
                              <g mask="url(#mask_admin)">
                                <path d="M9.43949 6.84286C9.70916 5.71905 11.2908 5.71904 11.5605 6.84286L12.3025 9.93512C12.3988 10.3364 12.7088 10.6496 13.1059 10.7469L16.1659 11.4967C17.278 11.7693 17.278 13.3676 16.1659 13.6401L13.1059 14.3899C12.7088 14.4872 12.3988 14.8005 12.3025 15.2017L11.5605 18.294C11.2908 19.4178 9.70916 19.4178 9.43949 18.294L8.69748 15.2017C8.6012 14.8005 8.29118 14.4872 7.89413 14.3899L4.83408 13.6401C3.72197 13.3676 3.72197 11.7693 4.83408 11.4967L7.89413 10.7469C8.29118 10.6496 8.6012 10.3364 8.69748 9.93512L9.43949 6.84286Z" fill="#006AFF"/>
                                <path d="M18.3474 17.6345C18.5133 16.9429 19.4867 16.9429 19.6526 17.6345L20.1092 19.5374C20.1685 19.7843 20.3593 19.9771 20.6036 20.037L22.4867 20.4984C23.1711 20.6661 23.1711 21.6497 22.4867 21.8174L20.6036 22.2788C20.3593 22.3387 20.1685 22.5315 20.1092 22.7784L19.6526 24.6813C19.4867 25.3729 18.5133 25.3729 18.3474 24.6813L17.8908 22.7784C17.8315 22.5315 17.6407 22.3387 17.3964 22.2788L15.5133 21.8174C14.8289 21.6497 14.8289 20.6661 15.5133 20.4984L17.3964 20.037C17.6407 19.9771 17.8315 19.7843 17.8908 19.5374L18.3474 17.6345Z" fill="#006AFF"/>
                                <path d="M21.5717 6.71933C21.6806 6.26549 22.3194 6.26549 22.4283 6.71933L22.7279 7.96813C22.7668 8.13017 22.892 8.25668 23.0524 8.29597L24.2882 8.59879C24.7373 8.70884 24.7373 9.35432 24.2882 9.46437L23.0524 9.76718C22.892 9.80648 22.7668 9.93299 22.7279 10.095L22.4283 11.3438C22.3194 11.7977 21.6806 11.7977 21.5717 11.3438L21.2721 10.095C21.2332 9.93299 21.108 9.80648 20.9476 9.76718L19.7118 9.46437C19.2627 9.35432 19.2627 8.70884 19.7118 8.59879L20.9476 8.29597C21.108 8.25668 21.2332 8.13017 21.2721 7.96813L21.5717 6.71933Z" fill="#006AFF"/>
                              </g>
                            </svg>
                          </div>
                          <div className="flex-1 min-w-0 pt-1">
                            {/* 메시지 내용 - 마크다운 렌더링 */}
                            <div className="font-medium text-[15px] text-black tracking-[-0.3px] leading-[1.4] break-words">
                              <ReactMarkdown
                                remarkPlugins={[remarkGfm]}
                                rehypePlugins={[rehypeRaw]}
                                components={{
                                  a: ({ node, ...props }) => (
                                    <a
                                      {...props}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-[#006aff] hover:underline font-medium"
                                    />
                                  ),
                                  h2: ({ children }) => <h2 className="font-bold text-base mt-3 mb-2">{children}</h2>,
                                  h3: ({ children }) => <h3 className="font-bold text-sm mt-3 mb-2">{children}</h3>,
                                  p: ({ children }) => <p className="text-sm mb-2 leading-relaxed">{children}</p>,
                                  ul: ({ children }) => <ul className="ml-4 mb-2 space-y-1 list-disc">{children}</ul>,
                                  ol: ({ children }) => <ol className="ml-4 mb-2 space-y-1 list-decimal">{children}</ol>,
                                  li: ({ children }) => <li className="text-sm ml-2">{children}</li>,
                                  strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
                                  hr: () => <hr className="my-3 border-[#e9ebf1]" />,
                                }}
                              >
                                {message.content.replace(/(\d+)\s*~\s*(\d+)/g, '$1\u2013$2')}
                              </ReactMarkdown>
                            </div>

                            {/* 의식하진정요법 카드 - SedationAppealCard 컴포넌트 사용 */}
                            {message.sedationCard?.show && (
                              <SedationAppealCard sedationCard={message.sedationCard} />
                            )}

                            {/* 영상 iframe 렌더링 */}
                            {message.videoIframes && message.videoIframes.length > 0 && (
                              <div className="mt-4 flex flex-col gap-3">
                                <div className="flex items-center gap-2 pb-2 border-b border-[#e9ebf1]">
                                  <svg className="w-5 h-5 text-[#006aff]" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"/>
                                  </svg>
                                  <p className="font-semibold text-sm text-[#292a2f]">🎬 치료 영상</p>
                                </div>
                                {message.videoIframes.map((iframeHtml, idx) => {
                                  const srcMatch = iframeHtml.match(/src="([^"]+)"/);
                                  const src = srcMatch ? srcMatch[1] : '';
                                  if (!src) return null;
                                  return (
                                    <div key={idx} className="w-full">
                                      <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                                        <iframe
                                          src={src}
                                          className="absolute top-0 left-0 w-full h-full rounded-lg border-0 shadow-lg"
                                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                          allowFullScreen
                                        />
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            )}

                            {/* 케이스 이미지 렌더링 */}
                            {message.caseImages && message.caseImages.length > 0 && (
                              <div className="mt-4 flex flex-col gap-4">
                                <div className="flex items-center gap-2 pb-2 border-b border-[#e9ebf1]">
                                  <svg className="w-5 h-5 text-[#006aff]" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                                  </svg>
                                  <p className="font-semibold text-sm text-[#292a2f]">📸 실제 치료 케이스</p>
                                </div>

                                {/* 첫 2개 케이스: 세로 전체 너비 표시 */}
                                {message.caseImages.slice(0, 2).map((caseImg, idx) => (
                                  <div key={idx} className="bg-white border border-[#f3f6fb] rounded-[20px] overflow-hidden">
                                    <div className="flex flex-col gap-3 p-4">
                                      <p className="font-bold text-[15px] text-black tracking-[-0.3px]">
                                        {caseImg.title}
                                      </p>

                                      {/* Before/After 이미지 (3단계 또는 2단계) */}
                                      {caseImg.intermediateImage ? (
                                        <div className="flex flex-col">
                                          {/* Before */}
                                          <div className="relative w-full">
                                            <div className="h-[160px] w-full rounded-[16px] overflow-hidden relative bg-[#f3f6fb]">
                                              <Image src={caseImg.beforeImage} alt="Before" fill className="object-contain" />
                                            </div>
                                            <div className="absolute top-2 left-2 bg-[#292a2f] px-2 py-1 rounded-lg z-10">
                                              <p className="font-semibold text-[11px] text-white tracking-[-0.22px]">Before</p>
                                            </div>
                                          </div>

                                          {/* 타임라인 연결선 1 */}
                                          <div className="flex justify-center py-1">
                                            <div className="flex flex-col items-center">
                                              <div className="w-0.5 h-4 bg-gradient-to-b from-[#292a2f] to-[#d4a574]"></div>
                                              <div className="text-[#d4a574] text-lg">↓</div>
                                            </div>
                                          </div>

                                          {/* 당일 임시치아 */}
                                          <div className="relative w-full">
                                            <div className="h-[160px] w-full rounded-[16px] overflow-hidden relative bg-gradient-to-r from-[#fdf8f3] to-[#fff9f2] border-2 border-[#d4a574]">
                                              <Image src={caseImg.intermediateImage} alt={caseImg.intermediateLabel || '수술 당일 임시치아'} fill className="object-contain" />
                                            </div>
                                            <div className="absolute top-2 left-2 bg-gradient-to-r from-[#d4a574] to-[#c8955e] px-2 py-1 rounded-lg z-10 flex items-center gap-1">
                                              <span className="text-[11px]">⭐</span>
                                              <p className="font-semibold text-[11px] text-white tracking-[-0.22px]">
                                                {caseImg.intermediateLabel || '수술 당일 임시치아'}
                                              </p>
                                            </div>
                                            <div className="absolute bottom-2 left-2 right-2 bg-[#d4a574]/90 px-3 py-1.5 rounded-lg z-10">
                                              <p className="font-bold text-[12px] text-white text-center tracking-[-0.24px]">
                                                바로 일상생활 복귀 가능!
                                              </p>
                                            </div>
                                          </div>

                                          {/* 타임라인 연결선 2 */}
                                          <div className="flex justify-center py-1">
                                            <div className="flex flex-col items-center">
                                              <div className="w-0.5 h-4 bg-gradient-to-b from-[#d4a574] to-[#006aff]"></div>
                                              <div className="text-[#006aff] text-lg">↓</div>
                                            </div>
                                          </div>

                                          {/* After */}
                                          <div className="relative w-full">
                                            <div className="h-[160px] w-full rounded-[16px] overflow-hidden relative bg-[#f3f6fb]">
                                              <Image src={caseImg.afterImage} alt="After" fill className="object-contain" />
                                            </div>
                                            <div className="absolute top-2 left-2 bg-green-600 px-2 py-1 rounded-lg z-10">
                                              <p className="font-semibold text-[11px] text-white tracking-[-0.22px]">After</p>
                                            </div>
                                          </div>
                                        </div>
                                      ) : (
                                        <div className="flex flex-col gap-3">
                                          {/* Before */}
                                          <div className="relative w-full">
                                            <div className="h-[160px] w-full rounded-[16px] overflow-hidden relative bg-[#f3f6fb]">
                                              <Image src={caseImg.beforeImage} alt="Before" fill className="object-contain" />
                                            </div>
                                            <div className="absolute top-2 left-2 bg-[#292a2f] px-2 py-1 rounded-lg z-10">
                                              <p className="font-semibold text-[11px] text-white tracking-[-0.22px]">Before</p>
                                            </div>
                                          </div>
                                          {/* After */}
                                          <div className="relative w-full">
                                            <div className="h-[160px] w-full rounded-[16px] overflow-hidden relative bg-[#f3f6fb]">
                                              <Image src={caseImg.afterImage} alt="After" fill className="object-contain" />
                                            </div>
                                            <div className="absolute top-2 left-2 bg-green-600 px-2 py-1 rounded-lg z-10">
                                              <p className="font-semibold text-[11px] text-white tracking-[-0.22px]">After</p>
                                            </div>
                                          </div>
                                        </div>
                                      )}

                                      <p className="text-[13px] text-[#727582] leading-[1.5]">
                                        {caseImg.description}
                                      </p>
                                    </div>
                                  </div>
                                ))}

                                {/* 3번째 케이스부터: 가로 스크롤 */}
                                {message.caseImages.length > 2 && (
                                  <div className="overflow-x-auto -mx-4 px-4 pb-2">
                                    <div className="flex gap-3" style={{ width: 'max-content' }}>
                                      {message.caseImages.slice(2).map((caseImg, idx) => (
                                        <div key={idx + 2} className="bg-white border border-[#f3f6fb] rounded-[16px] overflow-hidden" style={{ width: '280px', flexShrink: 0 }}>
                                          <div className="flex flex-col gap-2 p-3">
                                            <p className="font-bold text-[13px] text-black tracking-[-0.26px] line-clamp-2">
                                              {caseImg.title}
                                            </p>

                                            {/* Before/After 이미지 (간소화) */}
                                            <div className="flex gap-2">
                                              {/* Before */}
                                              <div className="relative flex-1">
                                                <div className="h-[100px] w-full rounded-[12px] overflow-hidden relative bg-[#f3f6fb]">
                                                  <Image src={caseImg.beforeImage} alt="Before" fill className="object-contain" />
                                                </div>
                                                <div className="absolute top-1 left-1 bg-[#292a2f] px-1.5 py-0.5 rounded-md z-10">
                                                  <p className="font-semibold text-[9px] text-white tracking-[-0.18px]">Before</p>
                                                </div>
                                              </div>

                                              {/* After */}
                                              <div className="relative flex-1">
                                                <div className="h-[100px] w-full rounded-[12px] overflow-hidden relative bg-[#f3f6fb]">
                                                  <Image src={caseImg.afterImage} alt="After" fill className="object-contain" />
                                                </div>
                                                <div className="absolute top-1 left-1 bg-[#006aff] px-1.5 py-0.5 rounded-md z-10">
                                                  <p className="font-semibold text-[9px] text-white tracking-[-0.18px]">After</p>
                                                </div>
                                              </div>
                                            </div>

                                            <p className="text-[11px] text-[#5d5f6d] tracking-[-0.22px] leading-[1.3] line-clamp-2">
                                              {caseImg.description}
                                            </p>
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                )}
                              </div>
                            )}

                            {/* 구조화된 질문 표시 */}
                            {message.structuredQuestion && (
                              <div className="mt-4 p-4 bg-white rounded-xl border border-[#e9ebf1]">
                                <div className="flex items-start gap-2 mb-3">
                                  <svg className="w-5 h-5 text-[#006aff] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                  </svg>
                                  <p className="font-semibold text-[14px] text-[#292a2f]">
                                    {message.structuredQuestion.question}
                                  </p>
                                </div>
                                <div className="ml-7 space-y-2">
                                  {message.structuredQuestion.options.map((option, optIdx) => (
                                    <div key={option.id} className="flex items-center gap-2 text-[13px] text-[#727582]">
                                      <span className="font-medium text-[#006aff]">{optIdx + 1}.</span>
                                      <span>{option.text}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}

                            {/* 추천 단계 표시 */}
                            {message.isRecommendation && (
                              <div className="mt-3 flex items-center gap-2">
                                <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                                  ✅ 최종 추천 단계
                                </span>
                              </div>
                            )}

                            <p className="text-xs text-[#9ca3af] mt-2">
                              {new Date(message.timestamp).toLocaleTimeString('ko-KR')}
                            </p>
                          </div>
                        </div>
                      ) : (
                        /* 사용자 메시지 */
                        <div className="flex justify-end">
                          <div className="max-w-[80%]">
                            <div className="bg-[#006aff] text-white px-4 py-3 rounded-[20px] rounded-br-[4px]">
                              <p className="text-[15px] leading-[1.4]">{message.content}</p>
                              {message.selectedOptionId && (
                                <p className="text-xs mt-2 opacity-80 border-t border-white/20 pt-2">
                                  ✓ 선택: {message.selectedOptionId}
                                </p>
                              )}
                            </div>
                            <p className="text-xs text-[#9ca3af] mt-1 text-right">
                              {new Date(message.timestamp).toLocaleTimeString('ko-KR')}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hidden render for PNG download */}
      {downloadTarget && (
        <div className="fixed left-[-9999px] top-0" aria-hidden="true">
          <div ref={hiddenModalRef} className="bg-white w-[700px] p-6">
            {/* 기본 정보 */}
            <div className="mb-6">
              <h3 className="text-lg font-bold mb-3">기본 정보</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">이름</p>
                  <p className="font-medium">{downloadTarget.name}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">전화번호</p>
                  <p className="font-medium">{downloadTarget.phone}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">나이</p>
                  <p className="font-medium">{downloadTarget.age}세</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">생성일시</p>
                  <p className="font-medium">{formatDate(downloadTarget.created_at!)}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">상태</p>
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(downloadTarget.status)}`}>
                    {downloadTarget.status}
                  </span>
                </div>
                <div className="col-span-2">
                  <p className="text-sm text-gray-600">상담 내용</p>
                  <p className="font-medium">{downloadTarget.consultation_content}</p>
                </div>
              </div>
            </div>

            {/* 채팅 히스토리 */}
            <div>
              <h3 className="text-lg font-bold mb-3">채팅 히스토리 ({downloadTarget.chat_history.length}개 메시지)</h3>
              <div className="bg-[#f3f6fb] p-4 rounded-lg flex flex-col gap-5">
                {downloadTarget.chat_history.map((message) => (
                  <div key={message.id}>
                    {message.role === 'assistant' ? (
                      <div className="flex gap-3 items-start max-w-full">
                        <div className="w-[30px] h-[30px] flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                            <circle cx="15" cy="15" r="15" fill="white"/>
                            <mask id="mask_dl" style={{maskType: "alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="30" height="30">
                              <circle cx="15" cy="15" r="15" fill="#D9D9D9"/>
                            </mask>
                            <g mask="url(#mask_dl)">
                              <path d="M9.43949 6.84286C9.70916 5.71905 11.2908 5.71904 11.5605 6.84286L12.3025 9.93512C12.3988 10.3364 12.7088 10.6496 13.1059 10.7469L16.1659 11.4967C17.278 11.7693 17.278 13.3676 16.1659 13.6401L13.1059 14.3899C12.7088 14.4872 12.3988 14.8005 12.3025 15.2017L11.5605 18.294C11.2908 19.4178 9.70916 19.4178 9.43949 18.294L8.69748 15.2017C8.6012 14.8005 8.29118 14.4872 7.89413 14.3899L4.83408 13.6401C3.72197 13.3676 3.72197 11.7693 4.83408 11.4967L7.89413 10.7469C8.29118 10.6496 8.6012 10.3364 8.69748 9.93512L9.43949 6.84286Z" fill="#006AFF"/>
                              <path d="M18.3474 17.6345C18.5133 16.9429 19.4867 16.9429 19.6526 17.6345L20.1092 19.5374C20.1685 19.7843 20.3593 19.9771 20.6036 20.037L22.4867 20.4984C23.1711 20.6661 23.1711 21.6497 22.4867 21.8174L20.6036 22.2788C20.3593 22.3387 20.1685 22.5315 20.1092 22.7784L19.6526 24.6813C19.4867 25.3729 18.5133 25.3729 18.3474 24.6813L17.8908 22.7784C17.8315 22.5315 17.6407 22.3387 17.3964 22.2788L15.5133 21.8174C14.8289 21.6497 14.8289 20.6661 15.5133 20.4984L17.3964 20.037C17.6407 19.9771 17.8315 19.7843 17.8908 19.5374L18.3474 17.6345Z" fill="#006AFF"/>
                              <path d="M21.5717 6.71933C21.6806 6.26549 22.3194 6.26549 22.4283 6.71933L22.7279 7.96813C22.7668 8.13017 22.892 8.25668 23.0524 8.29597L24.2882 8.59879C24.7373 8.70884 24.7373 9.35432 24.2882 9.46437L23.0524 9.76718C22.892 9.80648 22.7668 9.93299 22.7279 10.095L22.4283 11.3438C22.3194 11.7977 21.6806 11.7977 21.5717 11.3438L21.2721 10.095C21.2332 9.93299 21.108 9.80648 20.9476 9.76718L19.7118 9.46437C19.2627 9.35432 19.2627 8.70884 19.7118 8.59879L20.9476 8.29597C21.108 8.25668 21.2332 8.13017 21.2721 7.96813L21.5717 6.71933Z" fill="#006AFF"/>
                            </g>
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0 pt-1">
                          <div className="font-medium text-[15px] text-black tracking-[-0.3px] leading-[1.4] break-words">
                            <ReactMarkdown
                              remarkPlugins={[remarkGfm]}
                              rehypePlugins={[rehypeRaw]}
                              components={{
                                a: ({ ...props }) => (
                                  <a {...props} className="text-[#006aff] font-medium" />
                                ),
                                h2: ({ children }) => <h2 className="font-bold text-base mt-3 mb-2">{children}</h2>,
                                h3: ({ children }) => <h3 className="font-bold text-sm mt-3 mb-2">{children}</h3>,
                                p: ({ children }) => <p className="text-sm mb-2 leading-relaxed">{children}</p>,
                                ul: ({ children }) => <ul className="ml-4 mb-2 space-y-1 list-disc">{children}</ul>,
                                ol: ({ children }) => <ol className="ml-4 mb-2 space-y-1 list-decimal">{children}</ol>,
                                li: ({ children }) => <li className="text-sm ml-2">{children}</li>,
                                strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
                                hr: () => <hr className="my-3 border-[#e9ebf1]" />,
                              }}
                            >
                              {message.content.replace(/(\d+)\s*~\s*(\d+)/g, '$1\u2013$2')}
                            </ReactMarkdown>
                          </div>
                          <p className="text-xs text-[#9ca3af] mt-2">
                            {new Date(message.timestamp).toLocaleTimeString('ko-KR')}
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="flex justify-end">
                        <div className="max-w-[80%]">
                          <div className="bg-[#006aff] text-white px-4 py-3 rounded-[20px] rounded-br-[4px]">
                            <p className="text-[15px] leading-[1.4]">{message.content}</p>
                          </div>
                          <p className="text-xs text-[#9ca3af] mt-1 text-right">
                            {new Date(message.timestamp).toLocaleTimeString('ko-KR')}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
