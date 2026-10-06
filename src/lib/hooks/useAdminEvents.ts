'use client';

import { useEffect, useRef } from 'react';
import { createClient } from '@/lib/supabase/client';

/**
 * 관리자 화면 실시간 이벤트 구독.
 *
 * DB 트리거가 patient_intake / consultation_logs INSERT 시
 * 공개 브로드캐스트 채널 'admin-events' 로 { id, created_at } 만 보낸다.
 * (개인정보는 포함되지 않음. 실제 데이터는 서버 API 로 다시 조회한다.)
 *
 * - 신호 수신 → 해당 콜백 호출
 * - 연결이 끊긴 뒤 다시 붙으면 놓친 이벤트가 있을 수 있으므로 콜백을 한 번 호출
 * - 탭이 다시 보이면 콜백을 한 번 호출
 * - 안전장치로 fallbackIntervalMs 마다 콜백 호출 (기본 5분)
 */
export const ADMIN_EVENTS_CHANNEL = 'admin-events';

export interface AdminEventPayload {
  id: string;
  created_at: string;
}

interface UseAdminEventsOptions {
  enabled?: boolean;
  onNewIntake?: (payload?: AdminEventPayload) => void;
  onNewConsultation?: (payload?: AdminEventPayload) => void;
  fallbackIntervalMs?: number;
}

export function useAdminEvents({
  enabled = true,
  onNewIntake,
  onNewConsultation,
  fallbackIntervalMs = 5 * 60 * 1000,
}: UseAdminEventsOptions) {
  // 콜백은 ref 로 보관해 재구독 없이 최신 함수를 호출한다.
  const intakeRef = useRef(onNewIntake);
  const consultationRef = useRef(onNewConsultation);
  intakeRef.current = onNewIntake;
  consultationRef.current = onNewConsultation;

  useEffect(() => {
    if (!enabled) return;

    const supabase = createClient();
    let hasConnectedOnce = false;

    const refreshAll = () => {
      intakeRef.current?.();
      consultationRef.current?.();
    };

    const channel = supabase
      .channel(ADMIN_EVENTS_CHANNEL, { config: { private: false } })
      .on('broadcast', { event: 'new_intake' }, (msg) => {
        console.log('📩 realtime: 새 문진표', msg.payload);
        intakeRef.current?.(msg.payload as AdminEventPayload);
      })
      .on('broadcast', { event: 'new_consultation' }, (msg) => {
        console.log('📩 realtime: 새 상담', msg.payload);
        consultationRef.current?.(msg.payload as AdminEventPayload);
      })
      .subscribe((status, err) => {
        if (status === 'SUBSCRIBED') {
          if (hasConnectedOnce) {
            // 재연결: 끊긴 동안 놓친 이벤트 보정
            console.log('🔁 realtime 재연결 - 목록 재조회');
            refreshAll();
          } else {
            console.log('✅ realtime 구독 시작:', ADMIN_EVENTS_CHANNEL);
          }
          hasConnectedOnce = true;
        } else if (status === 'CHANNEL_ERROR' || status === 'TIMED_OUT') {
          console.warn('⚠️ realtime 채널 상태:', status, err?.message);
        }
      });

    const handleVisibility = () => {
      if (document.visibilityState === 'visible') refreshAll();
    };
    document.addEventListener('visibilitychange', handleVisibility);

    const fallback = setInterval(() => {
      if (document.visibilityState === 'visible') refreshAll();
    }, fallbackIntervalMs);

    return () => {
      clearInterval(fallback);
      document.removeEventListener('visibilitychange', handleVisibility);
      supabase.removeChannel(channel);
    };
  }, [enabled, fallbackIntervalMs]);
}
