import crypto from 'crypto';

/**
 * Meta Conversions API
 * 서버 측에서 Meta(Facebook) Pixel로 전환 이벤트를 전송합니다.
 */

interface ConversionEventData {
  email?: string;
  phone?: string;
  firstName?: string;
  lastName?: string;
  city?: string;
  state?: string;
  country?: string;
  zipCode?: string;
  externalId?: string;
  fbp?: string; // Facebook Browser ID (_fbp cookie)
  fbc?: string; // Facebook Click ID (_fbc cookie)
  eventSourceUrl?: string;
  userAgent?: string;
  ipAddress?: string;
  value?: number;
  currency?: string;
  contentName?: string;
  contentCategory?: string;
}

/**
 * SHA256 해시 함수
 */
function hashData(data: string): string {
  return crypto.createHash('sha256').update(data.toLowerCase().trim()).digest('hex');
}

/**
 * Meta Conversions API로 전환 이벤트 전송
 */
export async function sendMetaConversionEvent(
  eventName: string,
  eventData: ConversionEventData
): Promise<boolean> {
  const accessToken = process.env.FACEBOOK_ACCESS_TOKEN;
  const pixelId = process.env.FACEBOOK_PIXEL_ID;

  if (!accessToken || !pixelId) {
    console.warn('Meta Conversions API: Access Token 또는 Pixel ID가 설정되지 않았습니다.');
    return false;
  }

  try {
    const eventTime = Math.floor(Date.now() / 1000);

    // User Data 해싱 (Meta 정책 준수)
    const userData: Record<string, string | string[]> = {};

    if (eventData.email) {
      userData.em = [hashData(eventData.email)];
    }

    if (eventData.phone) {
      // 전화번호 정규화 (숫자만 추출)
      const normalizedPhone = eventData.phone.replace(/\D/g, '');
      userData.ph = [hashData(normalizedPhone)];
    }

    if (eventData.firstName) {
      userData.fn = [hashData(eventData.firstName)];
    }

    if (eventData.lastName) {
      userData.ln = [hashData(eventData.lastName)];
    }

    if (eventData.city) {
      userData.ct = [hashData(eventData.city)];
    }

    if (eventData.state) {
      userData.st = [hashData(eventData.state)];
    }

    if (eventData.country) {
      userData.country = [hashData(eventData.country)];
    }

    if (eventData.zipCode) {
      userData.zp = [hashData(eventData.zipCode)];
    }

    if (eventData.externalId) {
      userData.external_id = [eventData.externalId];
    }

    if (eventData.fbp) {
      userData.fbp = eventData.fbp;
    }

    if (eventData.fbc) {
      userData.fbc = eventData.fbc;
    }

    // Custom Data
    const customData: Record<string, string | number> = {};

    if (eventData.value !== undefined) {
      customData.value = eventData.value;
    }

    if (eventData.currency) {
      customData.currency = eventData.currency;
    }

    if (eventData.contentName) {
      customData.content_name = eventData.contentName;
    }

    if (eventData.contentCategory) {
      customData.content_category = eventData.contentCategory;
    }

    // Event Data 구성
    const eventPayload = {
      event_name: eventName,
      event_time: eventTime,
      event_source_url: eventData.eventSourceUrl || '',
      action_source: 'website',
      user_data: userData,
      custom_data: customData,
    };

    // API 요청
    const formData = new URLSearchParams();
    formData.append('data', JSON.stringify([eventPayload]));
    formData.append('access_token', accessToken);

    console.log('📤 Meta Conversions API 전송:', {
      eventName,
      eventTime: new Date(eventTime * 1000).toISOString(),
      pixelId,
    });

    const response = await fetch(
      `https://graph.facebook.com/v21.0/${pixelId}/events`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData.toString(),
      }
    );

    const result = await response.json();

    if (!response.ok) {
      console.error('❌ Meta Conversions API 오류:', result);
      return false;
    }

    console.log('✅ Meta Conversions API 성공:', result);
    return true;
  } catch (error) {
    console.error('❌ Meta Conversions API 예외:', error);
    return false;
  }
}

/**
 * 상담 신청 완료 이벤트 (Lead)
 * 파라미터 최소화 - 의료 정보 차단 방지
 */
export async function sendConsultationLeadEvent(data: ConversionEventData) {
  return sendMetaConversionEvent('Lead', {
    ...data,
    // contentName, contentCategory, value, currency 모두 제거
  });
}

/**
 * 상담 완료 이벤트 (Contact)
 * 파라미터 최소화 - 의료 정보 차단 방지
 */
export async function sendConsultationCompleteEvent(data: ConversionEventData) {
  return sendMetaConversionEvent('Contact', {
    ...data,
    // contentName, contentCategory, value, currency 모두 제거
  });
}
