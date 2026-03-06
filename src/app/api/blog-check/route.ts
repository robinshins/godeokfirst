import { NextRequest, NextResponse } from 'next/server';

interface ExposedPost {
  url: string;
  title: string;
  area: string; // VIEW, 웹, 블로그, 인플루언서 등
}

interface BlogCheckResult {
  keyword: string;
  blogId: string;
  isFirstPage: boolean;
  exposedPosts: ExposedPost[];
  error?: string;
}

export async function POST(request: NextRequest) {
  try {
    const { keyword, blogId } = await request.json();

    if (!keyword || !blogId) {
      return NextResponse.json({
        keyword,
        blogId,
        isFirstPage: false,
        exposedPosts: [],
        error: '키워드와 블로그 ID가 필요합니다.',
      } as BlogCheckResult);
    }

    console.log(`🔍 블로그 검색 (모바일): ${keyword} - @${blogId}`);

    // 모바일 네이버 통합 검색 (전체 영역에서 찾기)
    const encodedKeyword = encodeURIComponent(keyword);
    const searchUrl = `https://m.search.naver.com/search.naver?where=m&query=${encodedKeyword}`;

    const response = await fetch(searchUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
        'Accept-Language': 'ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7',
        'Cache-Control': 'no-cache',
      },
    });

    if (!response.ok) {
      console.error('❌ 네이버 검색 응답 오류:', response.status);
      return NextResponse.json({
        keyword,
        blogId,
        isFirstPage: false,
        exposedPosts: [],
        error: `검색 실패: ${response.status}`,
      } as BlogCheckResult);
    }

    const html = await response.text();

    // 노출된 글들 추출
    const exposedPosts: ExposedPost[] = [];
    const postDataMap = new Map<string, { url: string; title: string; area: string }>();

    // HTML 태그 제거 함수 (mark, b, strong 등)
    const stripHtmlTags = (str: string): string => {
      return str.replace(/<\/?[^>]+(>|$)/g, '').trim();
    };

    // 제목 유효성 검사
    const isValidTitle = (text: string): boolean => {
      const cleaned = stripHtmlTags(text).trim();
      return cleaned.length >= 10 &&
             cleaned.length <= 100 &&
             !cleaned.includes('blog.naver.com') &&
             !cleaned.includes('naver.com') &&
             !cleaned.includes('instagram.com') &&
             !cleaned.includes('youtube.com') &&
             !/^\d{4}\.\d{2}\.\d{2}/.test(cleaned) &&
             !/^\d+$/.test(cleaned) &&
             !/^[a-z0-9]+$/i.test(cleaned);
    };

    // 영역 타입 감지 함수
    const detectAreaType = (contextHtml: string): string => {
      if (contextHtml.includes('fds-ugc-single-intention') || contextHtml.includes('ugc')) {
        return 'VIEW';
      }
      if (contextHtml.includes('fds-web-root') || contextHtml.includes('fds-web-list') || contextHtml.includes('fds-web-doc')) {
        return '웹';
      }
      if (contextHtml.includes('fds-influencer') || contextHtml.includes('influencer')) {
        return '인플루언서';
      }
      if (contextHtml.includes('blog_list') || contextHtml.includes('_blog_section')) {
        return '블로그';
      }
      return '기타';
    };

    // 모든 블로그 URL 출현 위치 찾기
    const urlPattern = new RegExp(
      `https?://(?:m\\.)?blog\\.naver\\.com/${blogId}/(\\d+)`,
      'gi'
    );

    let urlMatch;
    while ((urlMatch = urlPattern.exec(html)) !== null) {
      const url = urlMatch[0];
      const postId = urlMatch[1];
      const urlIndex = urlMatch.index;

      // 이 URL 주변 컨텍스트 (앞 1500자, 뒤 500자)
      const contextStart = Math.max(0, urlIndex - 1500);
      const contextEnd = Math.min(html.length, urlIndex + 500);
      const context = html.substring(contextStart, contextEnd);

      // 영역 감지
      const area = detectAreaType(context);

      // 제목 추출 시도: <a> 태그 내 sds-comps-text 패턴
      // href="URL" 이후 바로 나오는 <span class="sds-comps-text">...</span> 찾기
      let title = '';

      // 패턴 1: href="URL"...><span class="sds-comps-text">제목</span>
      const escapedUrl = url.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const linkTitlePattern = new RegExp(
        `href=["']${escapedUrl}["'][^>]*>[^<]*<span[^>]*class="[^"]*sds-comps-text[^"]*"[^>]*>([\\s\\S]*?)</span>`,
        'i'
      );
      const linkMatch = linkTitlePattern.exec(context);
      if (linkMatch) {
        const rawTitle = stripHtmlTags(linkMatch[1]);
        if (isValidTitle(rawTitle)) {
          title = rawTitle;
        }
      }

      // 패턴 2: 컨텍스트 내 모든 sds-comps-text에서 유효한 제목 찾기
      if (!title) {
        const allTitlesPattern = /<span[^>]*class="[^"]*sds-comps-text[^"]*"[^>]*>([\s\S]*?)<\/span>/gi;
        let titleMatch;
        while ((titleMatch = allTitlesPattern.exec(context)) !== null) {
          const rawTitle = stripHtmlTags(titleMatch[1]);
          if (isValidTitle(rawTitle)) {
            title = rawTitle;
            break;
          }
        }
      }

      // 기존 데이터와 병합 (제목이 있는 것 우선, 영역은 기타가 아닌 것 우선)
      const existing = postDataMap.get(postId);
      if (!existing) {
        postDataMap.set(postId, { url, title, area });
      } else {
        // 제목이 없었는데 새로 찾은 경우
        if (!existing.title && title) {
          existing.title = title;
        }
        // 영역이 기타였는데 새로 찾은 경우
        if (existing.area === '기타' && area !== '기타') {
          existing.area = area;
        }
      }
    }

    // Map을 배열로 변환
    for (const [postId, data] of postDataMap) {
      exposedPosts.push({
        url: data.url,
        title: data.title || '제목 없음',
        area: data.area
      });
      console.log(`📝 [${data.area}] ${data.title ? data.title.substring(0, 30) + '...' : '제목 없음'}`);
    }

    const isFirstPage = exposedPosts.length > 0;

    if (isFirstPage) {
      console.log(`🎯 블로그 1페이지 노출 확인: ${keyword} - @${blogId} (${exposedPosts.length}개 글)`);
    } else {
      console.log(`❌ 블로그 미노출: ${keyword} - @${blogId}`);
    }

    const result: BlogCheckResult = {
      keyword,
      blogId,
      isFirstPage,
      exposedPosts,
    };

    return NextResponse.json(result);
  } catch (error) {
    console.error('❌ 블로그 체크 오류:', error);
    return NextResponse.json({
      keyword: '',
      blogId: '',
      isFirstPage: false,
      exposedPosts: [],
      error: error instanceof Error ? error.message : '알 수 없는 오류가 발생했습니다.',
    } as BlogCheckResult);
  }
}
