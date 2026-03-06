import { NextRequest, NextResponse } from 'next/server';

interface PlaceItem {
  position: number;          // 전체 순위 (광고 포함)
  positionWithoutAd: number | null; // 광고 제외 순위
  isAd: boolean;             // 광고 여부
  placeId: string;           // 플레이스 ID
  placeName: string;         // 업체명
}

interface RankCheckResult {
  keyword: string;
  targetUrl: string;
  found: boolean;
  position?: number;           // 전체 순위 (광고 포함)
  positionWithoutAd?: number;  // 광고 제외 순위
  isAd?: boolean;              // 타겟이 광고인지
  isFirstPage: boolean;        // 1페이지 노출 여부 (상위 8개)
  hasUnnecessaryAd: boolean;   // 불필요한 광고 (오가닉 1페이지인데 광고도 있음)
  isFirstPageByAd: boolean;    // 광고로 1페이지 노출 (오가닉은 1페이지 아님)
  hasPlaceSection: boolean;    // 플레이스 영역 존재 여부
  totalPlaces?: number;        // 전체 플레이스 수
  error?: string;
}

// Apollo State에서 추출한 Place 데이터
interface ApolloPlaceData {
  id: string;
  name: string;
}

export async function POST(request: NextRequest) {
  try {
    const { keyword, targetUrl } = await request.json();

    if (!keyword || !targetUrl) {
      return NextResponse.json({
        keyword,
        targetUrl,
        found: false,
        isFirstPage: false,
        hasUnnecessaryAd: false,
        isFirstPageByAd: false,
        hasPlaceSection: false,
        error: '키워드와 타겟 URL이 필요합니다.',
      } as RankCheckResult);
    }

    // 타겟에서 place ID 추출
    const targetPlaceIdMatch = targetUrl.match(/place\/(\d+)/);
    const targetPlaceId = targetPlaceIdMatch ? targetPlaceIdMatch[1] : null;

    if (!targetPlaceId) {
      return NextResponse.json({
        keyword,
        targetUrl,
        found: false,
        isFirstPage: false,
        hasUnnecessaryAd: false,
        isFirstPageByAd: false,
        hasPlaceSection: false,
        error: '타겟 URL에서 place ID를 추출할 수 없습니다.',
      } as RankCheckResult);
    }

    console.log('🎯 찾을 Place ID:', targetPlaceId);

    const encodedKeyword = encodeURIComponent(keyword);
    let hasPlaceSection = false;
    let placeItems: PlaceItem[] = [];

    // 네이버 지도 플레이스 리스트 페이지 직접 접근
    // 이 URL은 map.naver.com 내부 iframe에서 사용되는 URL로, Apollo State를 포함
    const pcmapUrl = `https://pcmap.place.naver.com/place/list?query=${encodedKeyword}&display=70`;
    console.log('🔍 네이버 지도 플레이스 리스트:', pcmapUrl);

    const response = await fetch(pcmapUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'ko-KR,ko;q=0.9',
        'Referer': 'https://map.naver.com/',
      },
    });

    if (response.ok) {
      const html = await response.text();
      console.log('📄 HTML 길이:', html.length);

      // __APOLLO_STATE__ 추출
      const apolloMatch = html.match(/window\.__APOLLO_STATE__\s*=\s*({[\s\S]*?});?\s*(?:<\/script>|window\.__)/);

      if (apolloMatch) {
        console.log('✅ __APOLLO_STATE__ 발견');
        hasPlaceSection = true;

        try {
          const apolloState = JSON.parse(apolloMatch[1]);
          placeItems = parseApolloState(apolloState, html, targetPlaceId);
          console.log('📍 파싱된 플레이스:', placeItems.length);
        } catch (parseError) {
          console.error('❌ Apollo State 파싱 오류:', parseError);
        }
      } else {
        console.log('⚠️ __APOLLO_STATE__ 없음, 대체 방법 시도');

        // 대체 방법: HTML에서 직접 추출 시도
        placeItems = parseNaverSearchHtml(html, targetPlaceId);
        if (placeItems.length > 0) {
          hasPlaceSection = true;
        }
      }
    }

    console.log('📍 최종 플레이스 수:', placeItems.length);
    if (placeItems.length > 0) {
      console.log('📍 첫 5개:', placeItems.slice(0, 5).map(p => `${p.position}. ${p.placeId} (광고:${p.isAd})`));
    }

    // 타겟 찾기
    const targetItem = placeItems.find(item => item.placeId === targetPlaceId);
    const targetAdItem = placeItems.find(item => item.placeId === targetPlaceId && item.isAd);
    const targetOrganicItem = placeItems.find(item => item.placeId === targetPlaceId && !item.isAd);

    const found = !!targetItem;
    let position: number | undefined;
    let positionWithoutAd: number | undefined;
    let isAd = false;
    let isFirstPage = false;
    let hasUnnecessaryAd = false;
    let isFirstPageByAd = false;

    if (found) {
      // 광고가 아닌 항목의 순위 사용 (있다면)
      if (targetOrganicItem) {
        position = targetOrganicItem.position;
        positionWithoutAd = targetOrganicItem.positionWithoutAd ?? undefined;
        isAd = false;
      } else if (targetAdItem) {
        position = targetAdItem.position;
        positionWithoutAd = undefined; // 광고만 있으면 광고제외순위 없음
        isAd = true;
      }

      // 1페이지 노출 여부 (상위 8개 이내)
      isFirstPage = position !== undefined && position <= 8;

      // 오가닉 1페이지 여부 (광고 제외 순위 8위 이내)
      const isOrganicFirstPage = targetOrganicItem &&
        targetOrganicItem.positionWithoutAd !== null &&
        targetOrganicItem.positionWithoutAd <= 8;

      // 불필요한 광고: 오가닉으로 1페이지인데 광고도 있는 경우
      if (isOrganicFirstPage && targetAdItem) {
        hasUnnecessaryAd = true;
      }

      // 광고로 1페이지: 오가닉은 1페이지 아닌데 광고로 1페이지 노출
      if (targetAdItem && targetAdItem.position <= 8) {
        if (!isOrganicFirstPage) {
          isFirstPageByAd = true;
        }
      }
    }

    const result: RankCheckResult = {
      keyword,
      targetUrl,
      found,
      position,
      positionWithoutAd,
      isAd,
      isFirstPage,
      hasUnnecessaryAd,
      isFirstPageByAd,
      hasPlaceSection: hasPlaceSection,
      totalPlaces: placeItems.length,
    };

    console.log('✅ 결과:', result);

    return NextResponse.json(result);
  } catch (error) {
    console.error('❌ 순위 체크 오류:', error);
    return NextResponse.json({
      keyword: '',
      targetUrl: '',
      found: false,
      isFirstPage: false,
      hasUnnecessaryAd: false,
      isFirstPageByAd: false,
      hasPlaceSection: false,
      error: error instanceof Error ? error.message : '알 수 없는 오류가 발생했습니다.',
    } as RankCheckResult);
  }
}

/**
 * Apollo State에서 플레이스 데이터 추출
 */
function parseApolloState(
  apolloState: Record<string, unknown>,
  html: string,
  targetPlaceId: string
): PlaceItem[] {
  const items: PlaceItem[] = [];

  // Apollo State에서 플레이스 ID와 이름 매핑 추출
  const placeMap = new Map<string, ApolloPlaceData>();
  const allKeys = Object.keys(apolloState);

  // HospitalSummary, RestaurantSummary 등의 엔트리에서 ID와 이름 추출
  // 순서대로 추출 (Apollo State의 키 순서가 삽입 순서를 유지)
  const orderedPlaceIds: string[] = [];

  allKeys.forEach(key => {
    if (key.includes('Summary:') && !key.includes('Panorama')) {
      const entry = apolloState[key] as Record<string, unknown>;
      if (entry && typeof entry === 'object' && entry.id && entry.name) {
        const id = entry.id as string;
        placeMap.set(id, {
          id: id,
          name: entry.name as string,
        });
        orderedPlaceIds.push(id);
      }
    }
  });

  console.log('🗺️ Apollo State에서 추출된 플레이스:', placeMap.size);

  // 광고 감지 - HTML에서 광고 섹션 확인
  // 광고는 보통 첫 번째 몇 개 항목에 위치
  const adCountMatch = html.match(/광고<\/span>/g);
  const adCount = adCountMatch ? adCountMatch.length : 0;
  console.log('📢 감지된 광고 수:', adCount);

  // 순서대로 PlaceItem 생성
  // 광고는 orderedPlaceIds에 포함되지 않으므로 offset으로 처리
  let position = adCount; // 광고 수만큼 offset
  let nonAdPosition = 0;

  // 먼저 광고 항목 추가
  for (let i = 0; i < adCount; i++) {
    items.push({
      position: i + 1,
      positionWithoutAd: null,
      isAd: true,
      placeId: `ad_${i + 1}`,
      placeName: `광고 ${i + 1}`,
    });
  }

  // 오가닉 결과 추가
  for (const placeId of orderedPlaceIds) {
    position++;
    nonAdPosition++;

    const placeData = placeMap.get(placeId);

    items.push({
      position,
      positionWithoutAd: nonAdPosition,
      isAd: false,
      placeId,
      placeName: placeData?.name || '',
    });
  }

  // 타겟 플레이스 ID가 있는지 확인
  const targetFound = items.some(item => item.placeId === targetPlaceId);
  if (targetFound) {
    console.log('🎯 타겟 플레이스 발견:', targetPlaceId);
  } else {
    console.log('⚠️ 타겟 플레이스가 목록에 없음');
    // Apollo State에 타겟이 있는지 확인
    if (placeMap.has(targetPlaceId)) {
      console.log('✅ Apollo State에 타겟 존재하나 순위 목록에 없음:', placeMap.get(targetPlaceId)?.name);
    }
  }

  return items;
}

/**
 * 네이버 검색 HTML에서 플레이스 리스트 파싱 (대체 방법)
 */
function parseNaverSearchHtml(html: string, targetPlaceId: string): PlaceItem[] {
  const items: PlaceItem[] = [];
  const seenPlaceIds = new Map<string, { position: number; isAd: boolean }>();

  // place/숫자 패턴으로 모든 플레이스 ID 추출
  const placePattern = /place\/(\d+)/g;
  let match;
  let position = 0;

  while ((match = placePattern.exec(html)) !== null) {
    const placeId = match[1];

    // 이미 본 placeId면 건너뛰기 (첫 번째 등장 위치가 실제 순위)
    if (seenPlaceIds.has(placeId)) continue;

    position++;

    // 광고 여부 확인: place ID 주변 컨텍스트에서 광고 표시 확인
    const startIdx = Math.max(0, match.index - 1000);
    const endIdx = Math.min(html.length, match.index + 200);
    const context = html.substring(startIdx, endIdx);

    const isAd =
      context.includes('광고') ||
      context.includes('ad_') ||
      context.includes('_ad') ||
      context.includes('"ad"') ||
      context.includes('sponsored') ||
      context.includes('type="ad"');

    seenPlaceIds.set(placeId, { position, isAd });

    // 디버깅: 타겟 플레이스 찾으면 컨텍스트 출력
    if (placeId === targetPlaceId) {
      console.log('🎯 타겟 발견! 위치:', position, '광고:', isAd);
      console.log('📝 컨텍스트:', context.substring(0, 300));
    }
  }

  // 광고 제외 순위 계산
  let nonAdPosition = 0;
  const sortedEntries = Array.from(seenPlaceIds.entries())
    .sort((a, b) => a[1].position - b[1].position);

  for (const [placeId, data] of sortedEntries) {
    if (!data.isAd) {
      nonAdPosition++;
    }

    items.push({
      position: data.position,
      positionWithoutAd: data.isAd ? null : nonAdPosition,
      isAd: data.isAd,
      placeId,
      placeName: '',
    });
  }

  return items;
}
