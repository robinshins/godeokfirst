import { NextRequest, NextResponse } from 'next/server';
import { createServiceClient } from '@/lib/supabase/server';

interface KeywordResult {
  keyword: string;
  found: boolean;
  position?: number;
  positionWithoutAd?: number;  // 광고 제외 순위
  isAd?: boolean;
  isFirstPage?: boolean;        // 1페이지 노출 여부
  hasUnnecessaryAd?: boolean;   // 불필요한 광고 (오가닉 1페이지인데 광고도 있음)
  isFirstPageByAd?: boolean;    // 광고로 1페이지 (오가닉은 1페이지 아님)
  hasPlaceSection: boolean;
  totalPlaces?: number;
  error?: string;
}

// 결과 조회 (월별)
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const configId = searchParams.get('configId');
    const year = parseInt(searchParams.get('year') || new Date().getFullYear().toString());
    const month = parseInt(searchParams.get('month') || (new Date().getMonth() + 1).toString());

    if (!configId) {
      return NextResponse.json({ error: 'configId가 필요합니다.' }, { status: 400 });
    }

    const supabase = createServiceClient();

    // 해당 월의 시작일과 종료일
    const startDate = `${year}-${String(month).padStart(2, '0')}-01`;
    const lastDay = new Date(year, month, 0).getDate();
    const endDate = `${year}-${String(month).padStart(2, '0')}-${String(lastDay).padStart(2, '0')}`;

    const { data, error } = await supabase
      .from('rank_tracking_results')
      .select('*')
      .eq('config_id', configId)
      .gte('check_date', startDate)
      .lte('check_date', endDate)
      .order('check_date', { ascending: false });

    if (error) throw error;

    // 날짜별로 그룹화
    const groupedByDate: Record<string, {
      date: string;
      checkedAt: string;
      results: KeywordResult[];
    }> = {};

    data?.forEach(row => {
      const dateStr = row.check_date;
      if (!groupedByDate[dateStr]) {
        groupedByDate[dateStr] = {
          date: dateStr,
          checkedAt: row.checked_at,
          results: [],
        };
      }
      groupedByDate[dateStr].results.push({
        keyword: row.keyword,
        found: row.found,
        position: row.position,
        positionWithoutAd: row.position_without_ad,
        isAd: row.is_ad,
        isFirstPage: row.is_first_page,
        hasUnnecessaryAd: row.has_unnecessary_ad,
        isFirstPageByAd: row.is_first_page_by_ad,
        hasPlaceSection: row.has_place_section,
        totalPlaces: row.total_places,
        error: row.error,
      });
    });

    // 날짜 내림차순 정렬
    const historyData = Object.values(groupedByDate).sort(
      (a, b) => b.date.localeCompare(a.date)
    );

    return NextResponse.json({ historyData });
  } catch (error) {
    console.error('결과 조회 오류:', error);
    return NextResponse.json({ error: '결과 조회 실패' }, { status: 500 });
  }
}

// 결과 저장
export async function POST(request: NextRequest) {
  try {
    const { configId, date, checkedAt, results } = await request.json();

    if (!configId || !date || !results || results.length === 0) {
      return NextResponse.json({ error: '필수 값이 누락되었습니다.' }, { status: 400 });
    }

    const supabase = createServiceClient();

    // 해당 날짜의 기존 결과 삭제 (upsert 대신 delete + insert)
    await supabase
      .from('rank_tracking_results')
      .delete()
      .eq('config_id', configId)
      .eq('check_date', date);

    // 새 결과 삽입
    const insertData = results.map((r: KeywordResult) => ({
      config_id: configId,
      check_date: date,
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

    const { error } = await supabase
      .from('rank_tracking_results')
      .insert(insertData);

    if (error) throw error;

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('결과 저장 오류:', error);
    return NextResponse.json({ error: '결과 저장 실패' }, { status: 500 });
  }
}
