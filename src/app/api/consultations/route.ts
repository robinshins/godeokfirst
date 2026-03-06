import { NextRequest, NextResponse } from 'next/server';
import { createServiceClient } from '@/lib/supabase/server';
import { ConsultationLog } from '@/lib/types';

/**
 * 상담 로그를 Supabase에 저장하는 API 엔드포인트
 * 같은 전화번호로 최근 30분 이내에 생성된 로그가 있으면 업데이트, 없으면 새로 생성
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as ConsultationLog;

    // 필수 필드 검증
    if (!body.name || !body.phone || !body.age || !body.consultation_content) {
      return NextResponse.json(
        { error: '필수 정보가 누락되었습니다.' },
        { status: 400 }
      );
    }

    // Supabase Service Role 클라이언트 생성 (RLS 우회)
    const supabase = createServiceClient();

    const logData = {
      name: body.name,
      phone: body.phone,
      contact_type: body.contact_type || null,
      contact_value: body.contact_value || null,
      age: body.age,
      consultation_content: body.consultation_content,
      referrer_url: body.referrer_url || '',
      referrer_source: body.referrer_source || 'direct',
      utm_source: body.utm_source || null,
      utm_medium: body.utm_medium || null,
      utm_campaign: body.utm_campaign || null,
      search_query: body.search_query || null,
      chat_history: body.chat_history || [],
      status: body.status || '대기중',
    };

    // 항상 새 로그 생성
    const { data, error } = await supabase
      .from('consultation_logs')
      .insert([logData])
      .select();

    if (!error) {
      console.log('✅ 새 상담 로그 생성:', data?.[0]?.id);
    }

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: '상담 로그 저장에 실패했습니다.', details: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: '상담 로그가 저장되었습니다.',
        data: data?.[0],
        isUpdate: false
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
 * 상담 로그를 조회하는 API 엔드포인트 (관리자용)
 * 선택사항: 필요시 인증 미들웨어 추가
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get('limit') || '50');
    const source = searchParams.get('source'); // 유입 경로 필터
    const status = searchParams.get('status'); // 상태 필터
    const startDate = searchParams.get('startDate'); // 시작 날짜 필터
    const endDate = searchParams.get('endDate'); // 종료 날짜 필터

    const supabase = createServiceClient();

    let query = supabase
      .from('consultation_logs')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(limit);

    // 유입 경로 필터링
    if (source) {
      query = query.eq('referrer_source', source);
    }

    // 상태 필터링
    if (status) {
      query = query.eq('status', status);
    }

    // 날짜 범위 필터링
    if (startDate) {
      query = query.gte('created_at', startDate);
    }
    if (endDate) {
      // endDate는 이미 클라이언트에서 23:59:59로 처리되어 옴
      query = query.lte('created_at', endDate);
    }

    const { data, error } = await query;

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: '상담 로그 조회에 실패했습니다.', details: error.message },
        { status: 500 }
      );
    }

    // 상담 로그의 전화번호만 추출 (숫자만)
    const phoneNumbers = data?.map((log) => log.phone?.replace(/\D/g, '')).filter(Boolean) || [];

    // 해당 전화번호들만 문진표에서 조회 (전체 조회 대신 IN 쿼리로 egress 절약)
    let intakePhoneSet = new Set<string>();
    if (phoneNumbers.length > 0) {
      const { data: patientIntakes, error: intakeError } = await supabase
        .from('patient_intake')
        .select('phone_number')
        .in('phone_number', phoneNumbers);

      if (intakeError) {
        console.error('Patient intake error:', intakeError);
      }

      intakePhoneSet = new Set(
        patientIntakes?.map((intake: { phone_number: string }) =>
          intake.phone_number?.replace(/\D/g, '')
        ).filter(Boolean) || []
      );
    }

    // 각 상담 로그에 문진표 작성 여부 추가
    const dataWithIntakeStatus = data?.map((log) => ({
      ...log,
      hasPatientIntake: intakePhoneSet.has(log.phone?.replace(/\D/g, '') || '')
    }));

    return NextResponse.json(
      {
        success: true,
        data: dataWithIntakeStatus,
        count: dataWithIntakeStatus?.length || 0
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
 * 상담 로그를 삭제하는 API 엔드포인트
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

    const supabase = createServiceClient();

    const { error } = await supabase
      .from('consultation_logs')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: '삭제에 실패했습니다.', details: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: '상담 로그가 삭제되었습니다.'
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
 * 상담 로그를 업데이트하는 API 엔드포인트 (상태 또는 채팅 히스토리)
 */
export async function PATCH(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, status, chat_history, booking_type, preferred_call_time, memo } = body;

    // 필수 필드 검증
    if (!id) {
      return NextResponse.json(
        { error: 'ID가 필요합니다.' },
        { status: 400 }
      );
    }

    // 업데이트할 데이터 준비
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const updateData: Record<string, any> = {};

    // 상태 업데이트
    if (status) {
      const validStatuses = ['대기중', '보류중', '1차 리콜', '2차 리콜', '3차 리콜', '4차 리콜', '내원 전 미동의', '내원 예약 완료', '치료 진행', '상담 미동의'];
      if (!validStatuses.includes(status)) {
        return NextResponse.json(
          { error: '유효하지 않은 상태 값입니다.' },
          { status: 400 }
        );
      }
      updateData.status = status;
    }

    // 채팅 히스토리 업데이트
    if (chat_history) {
      updateData.chat_history = chat_history;
    }

    // 예약 방식 업데이트
    if (booking_type !== undefined) {
      const validBookingTypes = ['naver_reservation', 'phone_consultation', null];
      if (!validBookingTypes.includes(booking_type)) {
        return NextResponse.json(
          { error: '유효하지 않은 예약 방식입니다.' },
          { status: 400 }
        );
      }
      updateData.booking_type = booking_type;
    }

    // 희망 통화 시간 업데이트
    if (preferred_call_time !== undefined) {
      updateData.preferred_call_time = preferred_call_time;
    }

    // 메모 업데이트
    if (memo !== undefined) {
      updateData.memo = memo;
    }

    // 업데이트할 항목이 없으면 에러
    if (Object.keys(updateData).length === 0) {
      return NextResponse.json(
        { error: '업데이트할 데이터가 없습니다.' },
        { status: 400 }
      );
    }

    const supabase = createServiceClient();

    console.log('🔧 PATCH - 업데이트 시작:', { id, updateData });

    const { data, error } = await supabase
      .from('consultation_logs')
      .update(updateData)
      .eq('id', id)
      .select();

    console.log('🔍 PATCH - Supabase 응답:', { data, error });

    if (error) {
      console.error('❌ Supabase error:', error);
      return NextResponse.json(
        { error: '업데이트에 실패했습니다.', details: error.message },
        { status: 500 }
      );
    }

    if (!data || data.length === 0) {
      console.warn('⚠️ PATCH - 업데이트된 데이터가 없습니다. ID가 존재하지 않을 수 있습니다:', id);
      return NextResponse.json(
        { error: '해당 ID의 로그를 찾을 수 없습니다.' },
        { status: 404 }
      );
    }

    console.log('✅ 상담 로그 업데이트 성공:', id, 'chat_history 길이:', data[0]?.chat_history?.length);

    return NextResponse.json(
      {
        success: true,
        message: '업데이트되었습니다.',
        data: data[0]
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
