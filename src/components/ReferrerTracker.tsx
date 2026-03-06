'use client';

import { useEffect } from 'react';
import { collectReferrerData, saveReferrerToSession, getReferrerFromSession } from '@/lib/referrer-tracker';

/**
 * 페이지 로드 시 유입 경로를 추적하는 클라이언트 컴포넌트
 * layout.tsx에서 사용되며, 사용자가 처음 방문할 때 referrer 정보를 수집합니다.
 */
export default function ReferrerTracker() {
  useEffect(() => {
    // 이미 referrer 데이터가 세션에 저장되어 있는지 확인
    const existingData = getReferrerFromSession();

    if (!existingData) {
      // 처음 방문하는 경우에만 referrer 정보를 수집하고 저장
      const referrerData = collectReferrerData();
      saveReferrerToSession(referrerData);

      // 개발 환경에서 로깅
      if (process.env.NODE_ENV === 'development') {
        console.log('🔍 Referrer tracked:', referrerData);
      }
    }
  }, []);

  // UI를 렌더링하지 않음 (추적만 수행)
  return null;
}
