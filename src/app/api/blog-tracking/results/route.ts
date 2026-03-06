import { NextRequest, NextResponse } from 'next/server';
import { createServiceClient } from '@/lib/supabase/server';

interface ExposedPost {
  url: string;
  title: string;
  area?: string; // VIEW, 웹, 블로그, 인플루언서 등
}

interface BlogResult {
  blogId: string;
  isFirstPage: boolean;
  exposedPosts?: ExposedPost[];
}

interface KeywordResult {
  keyword: string;
  blogResults: BlogResult[];
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
      .from('blog_tracking_results')
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

      // 키워드별로 그룹화
      let keywordResult = groupedByDate[dateStr].results.find(r => r.keyword === row.keyword);
      if (!keywordResult) {
        keywordResult = {
          keyword: row.keyword,
          blogResults: [],
        };
        groupedByDate[dateStr].results.push(keywordResult);
      }

      keywordResult.blogResults.push({
        blogId: row.blog_id,
        isFirstPage: row.is_first_page,
        exposedPosts: row.exposed_posts || [],
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
      .from('blog_tracking_results')
      .delete()
      .eq('config_id', configId)
      .eq('check_date', date);

    // 새 결과 삽입
    const insertData: {
      config_id: string;
      check_date: string;
      checked_at: string;
      keyword: string;
      blog_id: string;
      is_first_page: boolean;
      exposed_posts: ExposedPost[];
    }[] = [];

    for (const keywordResult of results as KeywordResult[]) {
      for (const blogResult of keywordResult.blogResults) {
        insertData.push({
          config_id: configId,
          check_date: date,
          checked_at: checkedAt,
          keyword: keywordResult.keyword,
          blog_id: blogResult.blogId,
          is_first_page: blogResult.isFirstPage,
          exposed_posts: blogResult.exposedPosts || [],
        });
      }
    }

    const { error } = await supabase
      .from('blog_tracking_results')
      .insert(insertData);

    if (error) throw error;

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('결과 저장 오류:', error);
    return NextResponse.json({ error: '결과 저장 실패' }, { status: 500 });
  }
}
