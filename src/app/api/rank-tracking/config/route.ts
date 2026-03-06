import { NextRequest, NextResponse } from 'next/server';
import { createServiceClient } from '@/lib/supabase/server';

// 설정 조회
export async function GET() {
  try {
    const supabase = createServiceClient();

    const { data, error } = await supabase
      .from('rank_tracking_configs')
      .select('*')
      .eq('is_active', true)
      .order('created_at', { ascending: false })
      .limit(1)
      .single();

    if (error && error.code !== 'PGRST116') {
      throw error;
    }

    return NextResponse.json({ config: data || null });
  } catch (error) {
    console.error('설정 조회 오류:', error);
    return NextResponse.json({ error: '설정 조회 실패' }, { status: 500 });
  }
}

// 설정 저장/업데이트
export async function POST(request: NextRequest) {
  try {
    const { targetUrl, keywords, configId } = await request.json();

    if (!targetUrl || !keywords || keywords.length === 0) {
      return NextResponse.json({ error: '필수 값이 누락되었습니다.' }, { status: 400 });
    }

    const supabase = createServiceClient();

    if (configId) {
      // 기존 설정 업데이트
      const { data, error } = await supabase
        .from('rank_tracking_configs')
        .update({
          target_url: targetUrl,
          keywords: keywords,
          updated_at: new Date().toISOString(),
        })
        .eq('id', configId)
        .select()
        .single();

      if (error) throw error;
      return NextResponse.json({ config: data });
    } else {
      // 새 설정 생성
      const { data, error } = await supabase
        .from('rank_tracking_configs')
        .insert({
          target_url: targetUrl,
          keywords: keywords,
        })
        .select()
        .single();

      if (error) throw error;
      return NextResponse.json({ config: data });
    }
  } catch (error) {
    console.error('설정 저장 오류:', error);
    return NextResponse.json({ error: '설정 저장 실패' }, { status: 500 });
  }
}
