import crypto from 'crypto';

/**
 * TikTok Events API (v1.3)
 * 서버 측에서 TikTok Pixel로 전환 이벤트를 전송합니다.
 */

export interface TikTokEventData {
  email?: string;
  phone?: string;
  externalId?: string;
  ttclid?: string;
  ttp?: string;
  ipAddress?: string;
  userAgent?: string;
  eventSourceUrl?: string;
  eventId?: string;
  value?: number;
  currency?: string;
  contentName?: string;
  contentType?: string;
  contentId?: string;
}

function hashData(data: string): string {
  return crypto.createHash('sha256').update(data.toLowerCase().trim()).digest('hex');
}

export async function sendTikTokEvent(
  eventName: string,
  eventData: TikTokEventData
): Promise<boolean> {
  const accessToken = process.env.TIKTOK_ACCESS_TOKEN;
  const pixelId = process.env.TIKTOK_PIXEL_ID;

  if (!accessToken || !pixelId) {
    console.warn('TikTok Events API: Access Token 또는 Pixel ID가 설정되지 않았습니다.');
    return false;
  }

  try {
    const eventTime = Math.floor(Date.now() / 1000);

    const user: Record<string, string> = {};
    if (eventData.email) user.email = hashData(eventData.email);
    if (eventData.phone) {
      const normalizedPhone = eventData.phone.replace(/\D/g, '');
      user.phone = hashData(normalizedPhone);
    }
    if (eventData.externalId) user.external_id = hashData(eventData.externalId);
    if (eventData.ipAddress) user.ip = eventData.ipAddress;
    if (eventData.userAgent) user.user_agent = eventData.userAgent;
    if (eventData.ttclid) user.ttclid = eventData.ttclid;
    if (eventData.ttp) user.ttp = eventData.ttp;

    const properties: Record<string, string | number> = {};
    if (eventData.value !== undefined) properties.value = eventData.value;
    if (eventData.currency) properties.currency = eventData.currency;
    if (eventData.contentName) properties.content_name = eventData.contentName;
    if (eventData.contentType) properties.content_type = eventData.contentType;
    if (eventData.contentId) properties.content_id = eventData.contentId;

    const payload: Record<string, unknown> = {
      event_source: 'web',
      event_source_id: pixelId,
      data: [
        {
          event: eventName,
          event_time: eventTime,
          event_id: eventData.eventId,
          user,
          properties,
          page: {
            url: eventData.eventSourceUrl || '',
          },
        },
      ],
    };

    console.log('📤 TikTok Events API 전송:', {
      eventName,
      eventTime: new Date(eventTime * 1000).toISOString(),
      pixelId,
      eventId: eventData.eventId,
    });

    const response = await fetch(
      'https://business-api.tiktok.com/open_api/v1.3/event/track/',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Token': accessToken,
        },
        body: JSON.stringify(payload),
      }
    );

    const result = await response.json();

    if (!response.ok || result.code !== 0) {
      console.error('❌ TikTok Events API 오류:', result);
      return false;
    }

    console.log('✅ TikTok Events API 성공:', result);
    return true;
  } catch (error) {
    console.error('❌ TikTok Events API 예외:', error);
    return false;
  }
}

/**
 * 상담 신청 완료 이벤트 (CompleteRegistration)
 * 파라미터 최소화 - 의료 정보 차단 방지
 */
export async function sendConsultationCompleteRegistrationEvent(data: TikTokEventData) {
  return sendTikTokEvent('CompleteRegistration', data);
}
