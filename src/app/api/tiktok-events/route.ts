import { NextRequest, NextResponse } from 'next/server';
import { sendConsultationCompleteRegistrationEvent } from '@/lib/tiktok-events';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      email,
      phone,
      externalId,
      ttclid,
      ttp,
      eventId,
      eventSourceUrl,
      userAgent,
      ipAddress,
    } = body;

    console.log('📊 TikTok Events API 호출:', { phone, email, eventId });

    const success = await sendConsultationCompleteRegistrationEvent({
      email,
      phone,
      externalId,
      ttclid,
      ttp,
      eventId,
      eventSourceUrl: eventSourceUrl || request.headers.get('referer') || undefined,
      userAgent: userAgent || request.headers.get('user-agent') || undefined,
      ipAddress:
        ipAddress ||
        request.headers.get('x-forwarded-for')?.split(',')[0] ||
        undefined,
    });

    if (success) {
      return NextResponse.json({
        success: true,
        message: 'TikTok Event sent successfully',
      });
    }
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to send TikTok Event',
      },
      { status: 500 }
    );
  } catch (error) {
    console.error('TikTok Events API Error:', error);
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
