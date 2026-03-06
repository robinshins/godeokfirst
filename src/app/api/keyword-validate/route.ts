import { NextRequest, NextResponse } from 'next/server';

interface ValidationResult {
  keyword: string;
  hasPlaceSection: boolean;
  error?: string;
}

export async function POST(request: NextRequest) {
  try {
    const { keyword } = await request.json();

    if (!keyword) {
      return NextResponse.json({
        keyword: '',
        hasPlaceSection: false,
        error: '키워드가 필요합니다.',
      } as ValidationResult);
    }

    // 네이버 검색 URL (지도가 아닌 일반 검색)
    const encodedKeyword = encodeURIComponent(keyword);
    const searchUrl = `https://search.naver.com/search.naver?query=${encodedKeyword}`;

    console.log('🔍 키워드 유효성 검사:', keyword);

    const response = await fetch(searchUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
        'Accept-Language': 'ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7',
        'Accept-Encoding': 'gzip, deflate, br',
        'Connection': 'keep-alive',
        'Upgrade-Insecure-Requests': '1',
        'Sec-Fetch-Dest': 'document',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-Site': 'none',
        'Sec-Fetch-User': '?1',
        'Cache-Control': 'max-age=0',
      },
    });

    if (!response.ok) {
      console.error('❌ 네이버 검색 응답 오류:', response.status);
      return NextResponse.json({
        keyword,
        hasPlaceSection: false,
        error: `검색 실패: ${response.status}`,
      } as ValidationResult);
    }

    const html = await response.text();

    // 플레이스 영역 존재 여부 확인
    // 네이버 검색 결과에서 플레이스 섹션을 나타내는 패턴들
    const hasPlaceSection =
      html.includes('place_section') ||
      html.includes('place_bluelink') ||
      html.includes('sc_new place') ||
      html.includes('type_place') ||
      html.includes('place-app') ||
      html.includes('플레이스') ||
      html.includes('naver.com/place') ||
      html.includes('map.naver.com/p/search');

    console.log(`✅ ${keyword}: 플레이스 영역 ${hasPlaceSection ? '있음' : '없음'}`);

    return NextResponse.json({
      keyword,
      hasPlaceSection,
    } as ValidationResult);

  } catch (error) {
    console.error('❌ 키워드 유효성 검사 오류:', error);
    return NextResponse.json({
      keyword: '',
      hasPlaceSection: false,
      error: error instanceof Error ? error.message : '알 수 없는 오류',
    } as ValidationResult);
  }
}
