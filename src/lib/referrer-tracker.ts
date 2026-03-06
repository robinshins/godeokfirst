/**
 * 유입 경로 추적 유틸리티
 * 웹사이트 방문자의 referrer를 분석하고 출처를 분류합니다.
 */

export interface ReferrerData {
  referrerUrl: string;
  referrerSource: string;
  utmSource: string | null;
  utmMedium: string | null;
  utmCampaign: string | null;
  searchQuery: string | null;
  timestamp: string;
}

/**
 * Referrer URL을 분석하여 출처를 분류합니다.
 * userAgent를 함께 전달하면 인앱 브라우저를 감지할 수 있습니다.
 */
export function classifyReferrer(referrerUrl: string, userAgent?: string): string {
  // User Agent로 인앱 브라우저 감지 (referrer가 없어도)
  if (userAgent) {
    const ua = userAgent.toLowerCase();

    // 틱톡 인앱 브라우저
    if (ua.includes('tiktok') || ua.includes('musical_ly')) {
      return 'tiktok';
    }

    // 카카오톡 인앱 브라우저
    if (ua.includes('kakaotalk')) {
      return 'kakao_talk';
    }

    // 텔레그램 인앱 브라우저
    if (ua.includes('telegram')) {
      return 'telegram';
    }

    // 라인 인앱 브라우저
    if (ua.includes('line')) {
      return 'line';
    }

    // 왓츠앱 인앱 브라우저
    if (ua.includes('whatsapp')) {
      return 'whatsapp';
    }

    // 뉴스 앱 (open_news)
    if (ua.includes('open_news')) {
      return 'news_app';
    }

    // 네이버 앱
    if (ua.includes('naver') && ua.includes('inapp')) {
      return 'naver_app';
    }

    // 페이스북/인스타그램 인앱 브라우저
    if (ua.includes('fban') || ua.includes('fbav') || ua.includes('instagram')) {
      return 'meta';
    }
  }

  if (!referrerUrl || referrerUrl === '') {
    return 'direct';
  }

  const url = referrerUrl.toLowerCase();

  // 네이버 블로그
  if (url.includes('blog.naver.com') || url.includes('m.blog.naver.com')) {
    return 'naver_blog';
  }

  // 네이버 지식인
  if (url.includes('kin.naver.com') || url.includes('m.kin.naver.com')) {
    return 'naver_kin';
  }

  // 네이버 플레이스
  if (url.includes('place.naver.com') || url.includes('m.place.naver.com') || url.includes('map.naver.com')) {
    return 'naver_place';
  }

  // 네이버 검색
  if (url.includes('search.naver.com') || url.includes('m.search.naver.com')) {
    return 'naver_search';
  }

  // 네이버 기타
  if (url.includes('naver.com')) {
    return 'naver_other';
  }

  // 메타 (페이스북, 인스타그램)
  if (url.includes('facebook.com') || url.includes('fb.com') || url.includes('instagram.com')) {
    return 'meta';
  }

  // 틱톡
  if (url.includes('tiktok.com')) {
    return 'tiktok';
  }

  // 유튜브
  if (url.includes('youtube.com') || url.includes('youtu.be')) {
    return 'youtube';
  }

  // 구글 지도 (구글 검색보다 먼저 체크)
  if (url.includes('google.') && (url.includes('/maps') || url.includes('maps.google'))) {
    return 'google_maps';
  }

  // 구글 검색
  if (url.includes('google.com') || url.includes('google.co.kr')) {
    return 'google_search';
  }

  // 카카오맵
  if (url.includes('map.kakao.com')) {
    return 'kakao_map';
  }

  // 카카오톡
  if (url.includes('kakao.com') || url.includes('daum.net')) {
    return 'kakao_talk';
  }

  // 팡글 광고 네트워크 (ByteDance - 틱톡)
  if (url.includes('pangleglobal.com') || url.includes('pangle.io')) {
    return 'tiktok';
  }

  // 구글 스토리지
  if (url.includes('storage.googleapis.com')) {
    return 'google_storage';
  }

  // 기타
  return 'other';
}

/**
 * URL에서 UTM 파라미터를 추출합니다.
 */
export function extractUtmParams(url: string): {
  utmSource: string | null;
  utmMedium: string | null;
  utmCampaign: string | null;
} {
  try {
    const urlObj = new URL(url);
    return {
      utmSource: urlObj.searchParams.get('utm_source'),
      utmMedium: urlObj.searchParams.get('utm_medium'),
      utmCampaign: urlObj.searchParams.get('utm_campaign'),
    };
  } catch {
    return {
      utmSource: null,
      utmMedium: null,
      utmCampaign: null,
    };
  }
}

/**
 * Referrer URL에서 검색어를 추출하고 디코딩합니다.
 */
export function extractSearchQuery(referrerUrl: string): string | null {
  if (!referrerUrl) {
    console.log('🔍 검색어 추출: referrerUrl이 비어있음');
    return null;
  }

  try {
    const url = referrerUrl.toLowerCase();
    const urlObj = new URL(referrerUrl);

    // 네이버 검색: query 파라미터
    if (url.includes('search.naver.com') || url.includes('m.search.naver.com')) {
      const query = urlObj.searchParams.get('query');
      console.log('🔍 네이버 검색어:', query || '(없음)', '| URL:', referrerUrl);
      return query ? decodeURIComponent(query) : null;
    }

    // 구글 검색: q 파라미터
    if (url.includes('google.com') || url.includes('google.co.kr')) {
      const query = urlObj.searchParams.get('q');
      console.log('🔍 구글 검색어:', query || '(없음)', '| URL:', referrerUrl);
      return query ? decodeURIComponent(query) : null;
    }

    // Daum 검색: q 파라미터
    if (url.includes('search.daum.net')) {
      const query = urlObj.searchParams.get('q');
      console.log('🔍 Daum 검색어:', query || '(없음)', '| URL:', referrerUrl);
      return query ? decodeURIComponent(query) : null;
    }

    console.log('🔍 검색어 추출: 지원하지 않는 검색 엔진 | URL:', referrerUrl);
    return null;
  } catch (error) {
    console.error('🔍 검색어 추출 실패:', error, '| URL:', referrerUrl);
    return null;
  }
}

/**
 * 현재 페이지의 referrer 정보를 수집합니다.
 */
export function collectReferrerData(): ReferrerData {
  const referrerUrl = typeof document !== 'undefined' ? document.referrer : '';
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  const userAgent = typeof navigator !== 'undefined' ? navigator.userAgent : '';
  const utmParams = extractUtmParams(currentUrl);

  console.log('📊 Referrer 데이터 수집:', {
    referrerUrl: referrerUrl || '(없음)',
    currentUrl,
    userAgent: userAgent.substring(0, 50) + '...'
  });

  const data = {
    referrerUrl,
    referrerSource: classifyReferrer(referrerUrl, userAgent),
    utmSource: utmParams.utmSource,
    utmMedium: utmParams.utmMedium,
    utmCampaign: utmParams.utmCampaign,
    searchQuery: extractSearchQuery(referrerUrl),
    timestamp: new Date().toISOString(),
  };

  console.log('📊 수집된 Referrer 데이터:', data);

  return data;
}

/**
 * sessionStorage에 referrer 데이터를 저장합니다.
 */
export function saveReferrerToSession(data: ReferrerData): void {
  if (typeof window !== 'undefined') {
    try {
      sessionStorage.setItem('referrerData', JSON.stringify(data));
    } catch (error) {
      console.error('Failed to save referrer data to sessionStorage:', error);
    }
  }
}

/**
 * sessionStorage에서 referrer 데이터를 가져옵니다.
 */
export function getReferrerFromSession(): ReferrerData | null {
  if (typeof window !== 'undefined') {
    try {
      const data = sessionStorage.getItem('referrerData');
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error('Failed to get referrer data from sessionStorage:', error);
      return null;
    }
  }
  return null;
}

/**
 * 유입 경로 출처를 사람이 읽기 쉬운 형태로 변환합니다.
 */
export function getReferrerSourceLabel(source: string): string {
  const labels: Record<string, string> = {
    'naver_blog': '네이버 블로그',
    'naver_kin': '네이버 지식인',
    'naver_place': '네이버 플레이스',
    'naver_search': '네이버 검색',
    'naver_app': '네이버 앱',
    'naver_other': '네이버 기타',
    'meta': '메타 (페이스북/인스타그램)',
    'tiktok': '틱톡 (광고 포함)',
    'youtube': '유튜브',
    'google_search': '구글 검색',
    'google_maps': '구글 지도',
    'google_storage': '구글 스토리지',
    'kakao_talk': '카카오톡',
    'kakao_map': '카카오맵',
    'telegram': '텔레그램',
    'line': '라인',
    'whatsapp': '왓츠앱',
    'news_app': '뉴스 앱',
    'direct': '직접 접속',
    'other': '기타',
  };

  return labels[source] || source;
}
