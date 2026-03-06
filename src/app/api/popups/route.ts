import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/client';

export interface Popup {
  id?: string;
  created_at?: string;
  updated_at?: string;
  title: string;
  image_url: string;
  alt_text: string;
  aspect_ratio: string;
  popup_type: 'fixed_sidebar' | 'modal';
  display_order: number;
  start_date: string;
  end_date: string;
  is_active: boolean;
}

/**
 * GET - 활성 팝업 조회 (사용자용) 또는 전체 팝업 조회 (관리자용)
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const adminMode = searchParams.get('admin') === 'true';

    const supabase = createClient();
    let query = supabase.from('popups').select('*');

    if (!adminMode) {
      // 사용자용: 활성화되고 기간 내인 팝업만
      const now = new Date().toISOString();
      query = query
        .eq('is_active', true)
        .lte('start_date', now)
        .gte('end_date', now);
    }

    // 순서대로 정렬: fixed_sidebar 먼저, 그 다음 modal을 display_order로
    query = query.order('popup_type', { ascending: false }).order('display_order', { ascending: true });

    const { data, error } = await query;

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: '팝업 조회에 실패했습니다.', details: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        data,
        count: data?.length || 0
      },
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
 * POST - 새 팝업 생성
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as Popup;

    // 필수 필드 검증
    if (!body.title || !body.image_url || !body.alt_text || !body.popup_type || !body.start_date || !body.end_date) {
      return NextResponse.json(
        { error: '필수 정보가 누락되었습니다.' },
        { status: 400 }
      );
    }

    // popup_type 검증
    if (!['fixed_sidebar', 'modal'].includes(body.popup_type)) {
      return NextResponse.json(
        { error: '유효하지 않은 팝업 타입입니다.' },
        { status: 400 }
      );
    }

    const supabase = createClient();

    // fixed_sidebar는 1개만 허용
    if (body.popup_type === 'fixed_sidebar') {
      const { data: existingSidebar } = await supabase
        .from('popups')
        .select('id')
        .eq('popup_type', 'fixed_sidebar')
        .eq('is_active', true);

      if (existingSidebar && existingSidebar.length > 0) {
        return NextResponse.json(
          { error: '고정 사이드바 팝업은 1개만 활성화할 수 있습니다. 기존 팝업을 비활성화하거나 삭제해주세요.' },
          { status: 400 }
        );
      }
    }

    const popupData = {
      title: body.title,
      image_url: body.image_url,
      alt_text: body.alt_text,
      aspect_ratio: body.aspect_ratio || '1080/1350',
      popup_type: body.popup_type,
      display_order: body.display_order || 0,
      start_date: body.start_date,
      end_date: body.end_date,
      is_active: body.is_active !== undefined ? body.is_active : true,
    };

    const { data, error } = await supabase
      .from('popups')
      .insert([popupData])
      .select();

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: '팝업 생성에 실패했습니다.', details: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: '팝업이 생성되었습니다.',
        data: data?.[0]
      },
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
 * PATCH - 팝업 수정
 */
export async function PATCH(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, ...updates } = body;

    if (!id) {
      return NextResponse.json(
        { error: 'ID가 필요합니다.' },
        { status: 400 }
      );
    }

    const supabase = createClient();

    // fixed_sidebar 타입으로 변경하거나 활성화하는 경우 체크
    if (updates.popup_type === 'fixed_sidebar' || (updates.is_active === true && updates.popup_type === 'fixed_sidebar')) {
      const { data: existingSidebar } = await supabase
        .from('popups')
        .select('id')
        .eq('popup_type', 'fixed_sidebar')
        .eq('is_active', true)
        .neq('id', id);

      if (existingSidebar && existingSidebar.length > 0) {
        return NextResponse.json(
          { error: '고정 사이드바 팝업은 1개만 활성화할 수 있습니다.' },
          { status: 400 }
        );
      }
    }

    const { data, error } = await supabase
      .from('popups')
      .update(updates)
      .eq('id', id)
      .select();

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: '팝업 수정에 실패했습니다.', details: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: '팝업이 수정되었습니다.',
        data: data?.[0]
      },
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
 * DELETE - 팝업 삭제
 */
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { error: 'ID가 필요합니다.' },
        { status: 400 }
      );
    }

    const supabase = createClient();

    const { error } = await supabase
      .from('popups')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: '팝업 삭제에 실패했습니다.', details: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: '팝업이 삭제되었습니다.'
      },
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
