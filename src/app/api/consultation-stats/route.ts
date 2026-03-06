import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/client';

/**
 * GET - 상담 통계 조회 (RPC 사용으로 egress 절약)
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const startDateParam = searchParams.get('startDate');
    const endDateParam = searchParams.get('endDate');

    const supabase = createClient();

    // RPC 함수 호출 (DB에서 GROUP BY 집계)
    const { data: rpcData, error: rpcError } = await supabase.rpc('get_consultation_stats', {
      start_date: startDateParam || null,
      end_date: endDateParam || null,
    });

    if (!rpcError && rpcData) {
      return NextResponse.json({
        success: true,
        dailyStats: rpcData.dailyStats || [],
        sourceStats: rpcData.sourceStats || [],
        statusStats: rpcData.statusStats || [],
        total: rpcData.total || 0,
      }, { status: 200 });
    }

    // RPC 실패시 fallback
    console.log('Consultation stats RPC fallback:', rpcError?.message);

    let query = supabase
      .from('consultation_logs')
      .select('created_at, referrer_source, status');

    if (startDateParam) query = query.gte('created_at', startDateParam);
    if (endDateParam) query = query.lte('created_at', endDateParam);

    const { data, error } = await query;

    if (error) {
      return NextResponse.json(
        { error: '통계 조회 실패', details: error.message },
        { status: 500 }
      );
    }

    // 날짜별 집계
    const dailyStats: Record<string, number> = {};
    const sourceStats: Record<string, number> = {};
    const statusStats: Record<string, number> = {};

    data?.forEach((log) => {
      const date = new Date(log.created_at).toISOString().split('T')[0];
      dailyStats[date] = (dailyStats[date] || 0) + 1;

      const source = log.referrer_source || 'direct';
      sourceStats[source] = (sourceStats[source] || 0) + 1;

      const status = log.status || '대기중';
      statusStats[status] = (statusStats[status] || 0) + 1;
    });

    return NextResponse.json({
      success: true,
      dailyStats: Object.entries(dailyStats).map(([date, count]) => ({ date, count })).sort((a, b) => b.date.localeCompare(a.date)),
      sourceStats: Object.entries(sourceStats).map(([source, count]) => ({ source, count })).sort((a, b) => b.count - a.count),
      statusStats: Object.entries(statusStats).map(([status, count]) => ({ status, count })).sort((a, b) => b.count - a.count),
      total: data?.length || 0,
    }, { status: 200 });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: '서버 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}
