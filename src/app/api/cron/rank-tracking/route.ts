import { NextRequest, NextResponse } from 'next/server';
import { createServiceClient } from '@/lib/supabase/server';

interface KeywordResult {
  keyword: string;
  found: boolean;
  position?: number;
  positionWithoutAd?: number;
  isAd?: boolean;
  isFirstPage?: boolean;
  hasUnnecessaryAd?: boolean;
  isFirstPageByAd?: boolean;
  hasPlaceSection: boolean;
  totalPlaces?: number;
  error?: string;
}

export async function GET(request: NextRequest) {
  // Vercel Cron 인증 확인
  const authHeader = request.headers.get('authorization');
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const supabase = createServiceClient();

    // 활성화된 설정 가져오기
    const { data: config, error: configError } = await supabase
      .from('rank_tracking_configs')
      .select('*')
      .eq('is_active', true)
      .order('created_at', { ascending: false })
      .limit(1)
      .single();

    if (configError || !config) {
      console.log('❌ 활성화된 설정 없음');
      return NextResponse.json({ error: '활성화된 설정이 없습니다.' }, { status: 404 });
    }

    const { id: configId, target_url: targetUrl, keywords } = config;

    console.log(`🚀 순위 추적 시작: ${keywords.length}개 키워드`);

    const now = new Date();
    // 한국 시간 기준 날짜 (UTC+9)
    const kstDate = new Date(now.getTime() + 9 * 60 * 60 * 1000);
    const dateStr = kstDate.toISOString().split('T')[0];
    const checkedAt = now.toISOString();

    const results: KeywordResult[] = [];

    for (const keyword of keywords) {
      try {
        // 내부 API 호출 대신 직접 로직 실행
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'https://your-domain.vercel.app'}/api/rank-check`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ keyword, targetUrl }),
        });

        const data = await response.json();

        results.push({
          keyword,
          found: data.found,
          position: data.position,
          positionWithoutAd: data.positionWithoutAd,
          isAd: data.isAd,
          isFirstPage: data.isFirstPage,
          hasUnnecessaryAd: data.hasUnnecessaryAd,
          isFirstPageByAd: data.isFirstPageByAd,
          hasPlaceSection: data.hasPlaceSection ?? true,
          totalPlaces: data.totalPlaces,
          error: data.error,
        });

        console.log(`✅ ${keyword}: ${data.found ? `${data.positionWithoutAd || data.position}위` : '미발견'}`);
      } catch (error) {
        console.error(`❌ ${keyword} 검색 실패:`, error);
        results.push({
          keyword,
          found: false,
          hasPlaceSection: true,
          error: '검색 실패',
        });
      }

      // Rate limiting - 500ms 대기
      await new Promise(resolve => setTimeout(resolve, 500));
    }

    // 결과 저장
    // 해당 날짜의 기존 결과 삭제
    await supabase
      .from('rank_tracking_results')
      .delete()
      .eq('config_id', configId)
      .eq('check_date', dateStr);

    // 새 결과 삽입
    const insertData = results.map((r) => ({
      config_id: configId,
      check_date: dateStr,
      checked_at: checkedAt,
      keyword: r.keyword,
      found: r.found,
      position: r.position || null,
      position_without_ad: r.positionWithoutAd || null,
      is_ad: r.isAd || false,
      is_first_page: r.isFirstPage || false,
      has_unnecessary_ad: r.hasUnnecessaryAd || false,
      is_first_page_by_ad: r.isFirstPageByAd || false,
      has_place_section: r.hasPlaceSection,
      total_places: r.totalPlaces || null,
      error: r.error || null,
    }));

    const { error: insertError } = await supabase
      .from('rank_tracking_results')
      .insert(insertData);

    if (insertError) {
      console.error('❌ 결과 저장 실패:', insertError);
      return NextResponse.json({ error: '결과 저장 실패' }, { status: 500 });
    }

    const firstPageCount = results.filter(r => r.isFirstPage).length;
    console.log(`✅ 순위 추적 완료: ${results.length}개 키워드, 1페이지 ${firstPageCount}개`);

    return NextResponse.json({
      success: true,
      date: dateStr,
      totalKeywords: results.length,
      firstPageCount,
      results: results.map(r => ({
        keyword: r.keyword,
        position: r.positionWithoutAd || r.position,
        isFirstPage: r.isFirstPage,
      })),
    });
  } catch (error) {
    console.error('❌ Cron 실행 오류:', error);
    return NextResponse.json({
      error: error instanceof Error ? error.message : '알 수 없는 오류'
    }, { status: 500 });
  }
}
