import { NextRequest, NextResponse } from 'next/server';
import { sendConsultationLeadEvent } from '@/lib/meta-conversion';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      email,
      phone,
      name,
      externalId,
      fbp,
      fbc,
      eventSourceUrl,
      userAgent,
      ipAddress,
    } = body;

    console.log('📊 Meta Conversion API 호출:', { name, phone, email });

    // 이름을 firstName과 lastName으로 분리 (선택사항)
    const nameParts = name?.split(' ') || [];
    const firstName = nameParts[0];
    const lastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : undefined;

    const success = await sendConsultationLeadEvent({
      email,
      phone,
      firstName,
      lastName,
      externalId,
      fbp,
      fbc,
      eventSourceUrl: eventSourceUrl || request.headers.get('referer') || undefined,
      userAgent: userAgent || request.headers.get('user-agent') || undefined,
      ipAddress: ipAddress || request.headers.get('x-forwarded-for')?.split(',')[0] || undefined,
      country: 'kr', // 한국
    });

    if (success) {
      return NextResponse.json({
        success: true,
        message: 'Meta Conversion Event sent successfully',
      });
    } else {
      return NextResponse.json(
        {
          success: false,
          message: 'Failed to send Meta Conversion Event',
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Meta Conversion API Error:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Internal server error',
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
