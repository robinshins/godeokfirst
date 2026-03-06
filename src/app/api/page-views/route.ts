import { NextRequest, NextResponse } from 'next/server';
import { createServiceClient } from '@/lib/supabase/server';

/**
 * POST - 페이지 방문 기록
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { path, referrer, referrer_source, user_agent } = body;

    if (!path) {
      return NextResponse.json(
        { error: '필수 정보가 누락되었습니다.' },
        { status: 400 }
      );
    }

    const supabase = createServiceClient();

    // 페이지 방문 기록 저장 (클라이언트에서 날짜별 중복 체크 완료)
    const { data, error } = await supabase
      .from('page_views')
      .insert([
        {
          path,
          referrer,
          referrer_source: referrer_source || 'direct',
          user_agent,
        },
      ])
      .select();

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: '페이지 방문 기록에 실패했습니다.', details: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, data },
      { status: 200 }
    );
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: '서버 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}

/**
 * GET - 페이지 방문 통계 조회 (관리자용)
 * RPC 함수로 DB에서 집계 → egress 대폭 절약 (5000개 레코드 → 집계 결과만)
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const days = searchParams.get('days');
    const startDateParam = searchParams.get('startDate');
    const endDateParam = searchParams.get('endDate');

    const supabase = createServiceClient();

    // 기간 계산
    let startDate: Date | null = null;
    let endDate: Date | null = null;

    if (startDateParam || endDateParam) {
      startDate = startDateParam ? new Date(startDateParam) : null;
      endDate = endDateParam ? new Date(endDateParam) : null;
    } else if (days && days !== '9999') {
      endDate = new Date();
      startDate = new Date();
      startDate.setDate(startDate.getDate() - parseInt(days));
    } else if (!days) {
      // 기본값: 90일
      endDate = new Date();
      startDate = new Date();
      startDate.setDate(startDate.getDate() - 90);
    }
    // days === '9999'인 경우 전체 조회 (startDate/endDate = null)

    // RPC 함수 호출 (DB에서 GROUP BY 집계 - egress 최소화)
    const { data: rpcData, error: rpcError } = await supabase.rpc('get_page_views_stats', {
      start_date: startDate?.toISOString() || null,
      end_date: endDate?.toISOString() || null,
    });

    // RPC 성공시 바로 반환
    if (!rpcError && rpcData) {
      return NextResponse.json({
        success: true,
        data: rpcData.data || [],
        referrerSources: rpcData.referrerSources || [],
        total: rpcData.total || 0,
      }, { status: 200 });
    }

    // RPC 실패시 fallback (기존 방식)
    console.log('RPC fallback 사용:', rpcError?.message);

    // 전체 개수 조회
    let countQuery = supabase
      .from('page_views')
      .select('*', { count: 'exact', head: true });
    if (startDate) countQuery = countQuery.gte('created_at', startDate.toISOString());
    if (endDate) countQuery = countQuery.lte('created_at', endDate.toISOString());
    const { count: totalCount } = await countQuery;

    // 최대 5000개만 가져오기
    let dataQuery = supabase
      .from('page_views')
      .select('created_at, referrer_source')
      .order('created_at', { ascending: false })
      .limit(5000);
    if (startDate) dataQuery = dataQuery.gte('created_at', startDate.toISOString());
    if (endDate) dataQuery = dataQuery.lte('created_at', endDate.toISOString());

    const { data, error } = await dataQuery;

    if (error) {
      return NextResponse.json(
        { error: '통계 조회에 실패했습니다.', details: error.message },
        { status: 500 }
      );
    }

    // 날짜별로 그룹화
    const dailyStats: { [key: string]: number } = {};
    data?.forEach((view) => {
      const date = new Date(view.created_at).toISOString().split('T')[0];
      dailyStats[date] = (dailyStats[date] || 0) + 1;
    });

    const stats = Object.entries(dailyStats).map(([date, count]) => ({ date, count }));

    // 유입 경로별 통계
    const sourceStats: { [key: string]: number } = {};
    data?.forEach((view) => {
      const source = view.referrer_source || 'direct';
      sourceStats[source] = (sourceStats[source] || 0) + 1;
    });

    const referrerSources = Object.entries(sourceStats)
      .map(([source, count]) => ({ source, count }))
      .sort((a, b) => b.count - a.count);

    return NextResponse.json({
      success: true,
      data: stats,
      referrerSources,
      total: totalCount || data?.length || 0,
    }, { status: 200 });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: '서버 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}
