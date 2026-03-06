'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Popup } from '@/app/api/popups/route';

export default function ScheduleNotice() {
  const [currentPopup, setCurrentPopup] = useState(0);
  const [sidebarPopup, setSidebarPopup] = useState<Popup | null>(null);
  const [desktopModalPopups, setDesktopModalPopups] = useState<Popup[]>([]);
  const [mobileModalPopups, setMobileModalPopups] = useState<Popup[]>([]);
  const [loading, setLoading] = useState(true);
  const [isClosing, setIsClosing] = useState(false);
  const [isWebView, setIsWebView] = useState(false);

  useEffect(() => {
    // 웹뷰 감지 (인스타그램, 유튜브, 틱톡 등)
    const checkWebView = () => {
      const ua = navigator.userAgent || navigator.vendor || '';
      const webViewPatterns = [
        /FBAN|FBAV/i,           // Facebook/Instagram
        /Instagram/i,            // Instagram
        /TikTok/i,              // TikTok
        /BytedanceWebview/i,     // TikTok/ByteDance
        /musical_ly/i,           // TikTok (old name)
        /YTApp/i,               // YouTube App
        /Line\//i,              // Line
        /KAKAOTALK/i,           // KakaoTalk
        /NAVER\(/i,             // Naver App
      ];

      const isInWebView = webViewPatterns.some(pattern => pattern.test(ua));
      setIsWebView(isInWebView);

      if (isInWebView) {
        console.log('📱 웹뷰 환경 감지됨, 팝업 비활성화');
      }

      return isInWebView;
    };

    if (!checkWebView()) {
      fetchPopups();
    } else {
      setLoading(false);
    }
  }, []);

  const fetchPopups = async () => {
    try {
      const response = await fetch('/api/popups');
      const data = await response.json();

      if (data.success && data.data) {
        const allPopups = data.data as Popup[];

        // 고정 사이드바 팝업 (데스크탑 전용)
        const sidebar = allPopups.find(p => p.popup_type === 'fixed_sidebar');
        setSidebarPopup(sidebar || null);

        // 일반 모달 팝업
        const modals = allPopups.filter(p => p.popup_type === 'modal');

        console.log('📊 팝업 데이터:', {
          전체: allPopups.length,
          사이드바: sidebar ? 1 : 0,
          일반모달: modals.length,
          데스크탑표시: modals.length,
          모바일표시: sidebar ? modals.length + 1 : modals.length
        });

        // 데스크탑: 일반 모달만 표시
        setDesktopModalPopups(modals);

        // 모바일: 사이드바를 첫 번째로, 그 다음 일반 모달들
        if (sidebar) {
          setMobileModalPopups([sidebar, ...modals]);
        } else {
          setMobileModalPopups(modals);
        }
      }
    } catch (error) {
      console.error('Failed to fetch popups:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleClosePopup = (isMobile: boolean) => {
    const popups = isMobile ? mobileModalPopups : desktopModalPopups;
    const next = currentPopup < popups.length - 1 ? currentPopup + 1 : -1;

    // 먼저 현재 팝업을 DOM에서 제거
    setIsClosing(true);

    // 300ms 후 다음 팝업 표시 (DOM에 새로 마운트)
    setTimeout(() => {
      setCurrentPopup(next);
      setIsClosing(false);
    }, 300);
  };

  if (loading) {
    return null;
  }

  // 웹뷰 환경에서는 팝업 표시하지 않음
  if (isWebView) {
    return null;
  }

  return (
    <>
      {/* 데스크탑: 오른쪽 영역의 좌측에 고정 사이드바 (최대 350px) */}
      {sidebarPopup && (
        <div className="hidden lg:block fixed top-20 z-50" style={{ maxWidth: '350px', width: 'calc((100vw - 375px) / 2 - 24px)', left: 'calc(50% + 375px / 2 + 12px)' }}>
          <div className="relative w-full" style={{ aspectRatio: sidebarPopup.aspect_ratio }}>
            <Image
              src={sidebarPopup.image_url}
              alt={sidebarPopup.alt_text}
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}

      {/* 데스크탑 모달 팝업: 일반 모달만 표시 (사이드바 제외) */}
      <div className="hidden lg:block">
        {!isClosing && currentPopup >= 0 && currentPopup < desktopModalPopups.length && (
          <div
            key={currentPopup}
            className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4 animate-fadeIn"
          >
            <div className="relative w-[90vw] max-w-[400px] animate-fadeInUp" style={{ aspectRatio: desktopModalPopups[currentPopup].aspect_ratio }}>
              <button
                onClick={() => handleClosePopup(false)}
                className="absolute top-3 right-3 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center z-10 shadow-lg hover:bg-white transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <Image
                src={desktopModalPopups[currentPopup].image_url}
                alt={desktopModalPopups[currentPopup].alt_text}
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        )}
      </div>

      {/* 모바일 모달 팝업: 사이드바 포함 모든 팝업 표시 */}
      <div className="block lg:hidden">
        {!isClosing && currentPopup >= 0 && currentPopup < mobileModalPopups.length && (
          <div
            key={currentPopup}
            className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4 animate-fadeIn"
          >
            <div className="relative w-[90vw] max-w-[400px] animate-fadeInUp" style={{ aspectRatio: mobileModalPopups[currentPopup].aspect_ratio }}>
              <button
                onClick={() => handleClosePopup(true)}
                className="absolute top-3 right-3 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center z-10 shadow-lg hover:bg-white transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <Image
                src={mobileModalPopups[currentPopup].image_url}
                alt={mobileModalPopups[currentPopup].alt_text}
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
