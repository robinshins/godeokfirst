'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { classifyReferrer } from '@/lib/referrer-tracker';

export default function PageViewTracker() {
  const pathname = usePathname();

  useEffect(() => {
    // 오늘 날짜 가져오기 (YYYY-MM-DD 형식)
    const today = new Date().toISOString().split('T')[0];

    // localStorage에서 오늘 방문한 페이지 목록 가져오기
    const visitKey = `page_visits_${today}`;
    const visitedPages = localStorage.getItem(visitKey);
    const visitedList: string[] = visitedPages ? JSON.parse(visitedPages) : [];

    // 이미 오늘 이 페이지를 방문했는지 확인
    if (visitedList.includes(pathname)) {
      // 이미 방문한 페이지면 집계하지 않음
      return;
    }

    // 페이지 방문 기록
    const trackPageView = async () => {
      try {
        const referrer = document.referrer || '';
        const userAgent = navigator.userAgent;
        const referrerSource = classifyReferrer(referrer, userAgent);

        const response = await fetch('/api/page-views', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            path: pathname,
            referrer: referrer || null,
            referrer_source: referrerSource,
            user_agent: userAgent,
          }),
        });

        // 성공적으로 기록되면 localStorage에 저장
        if (response.ok) {
          visitedList.push(pathname);
          localStorage.setItem(visitKey, JSON.stringify(visitedList));
        }
      } catch (error) {
        console.error('Failed to track page view:', error);
      }
    };

    trackPageView();

    // 오래된 방문 기록 정리 (7일 이상 된 기록 삭제)
    const cleanupOldVisits = () => {
      const keys = Object.keys(localStorage);
      const sevenDaysAgo = new Date();
      sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
      const cutoffDate = sevenDaysAgo.toISOString().split('T')[0];

      keys.forEach(key => {
        if (key.startsWith('page_visits_')) {
          const dateStr = key.replace('page_visits_', '');
          if (dateStr < cutoffDate) {
            localStorage.removeItem(key);
          }
        }
      });
    };

    cleanupOldVisits();
  }, [pathname]);

  return null;
}
