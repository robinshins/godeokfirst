import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    const email = formData.get('email') as string;
    const employeeName = formData.get('employeeName') as string;
    const fileName = formData.get('fileName') as string;

    if (!file || !email || !employeeName) {
      return NextResponse.json(
        { success: false, error: '필수 정보가 누락되었습니다.' },
        { status: 400 }
      );
    }

    // 환경변수에서 SMTP 설정 가져오기 (EMAIL_USER/EMAIL_APP_PASSWORD 우선, SMTP_* 폴백)
    const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
    const smtpPort = parseInt(process.env.SMTP_PORT || '587');
    const smtpUser = process.env.EMAIL_USER || process.env.SMTP_USER;
    const smtpPass = process.env.EMAIL_APP_PASSWORD || process.env.SMTP_PASS;
    const senderName = process.env.SMTP_SENDER_NAME || '고덕퍼스트치과';

    if (!smtpUser || !smtpPass) {
      console.error('SMTP credentials not configured');
      return NextResponse.json(
        { success: false, error: 'SMTP 설정이 되어있지 않습니다.' },
        { status: 500 }
      );
    }

    // Nodemailer transporter 생성
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    // 파일을 Buffer로 변환
    const fileBuffer = Buffer.from(await file.arrayBuffer());

    // 이메일 전송
    await transporter.sendMail({
      from: `"${senderName}" <${smtpUser}>`,
      to: email,
      subject: `[${senderName}] 급여명세서`,
      html: `
        <div style="font-family: 'Malgun Gothic', 'Apple SD Gothic Neo', sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            📧 급여명세서 안내
          </h2>

          <p style="font-size: 16px; color: #555; line-height: 1.6;">
            안녕하세요, <strong>${employeeName}</strong>님.
          </p>

          <p style="font-size: 16px; color: #555; line-height: 1.6;">
            ${employeeName}님의 급여명세서를 첨부파일로 보내드립니다.
          </p>

          <div style="background-color: #f8f9fa; border-radius: 8px; padding: 15px; margin: 20px 0;">
            <p style="margin: 0; color: #666; font-size: 14px;">
              📎 첨부파일: <strong>${fileName}</strong>
            </p>
          </div>

          <p style="font-size: 14px; color: #888; line-height: 1.6;">
            문의사항이 있으시면 경영지원팀으로 연락해 주세요.
          </p>

          <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">

          <p style="font-size: 12px; color: #999; text-align: center;">
            본 메일은 발신전용입니다.<br>
            ${senderName}
          </p>
        </div>
      `,
      attachments: [
        {
          filename: fileName,
          content: fileBuffer,
          contentType: 'application/pdf',
        },
      ],
    });

    console.log(`✅ Email sent successfully to ${email} (${employeeName})`);

    return NextResponse.json({
      success: true,
      message: `${employeeName}님에게 이메일이 전송되었습니다.`,
    });

  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : '이메일 전송 중 오류가 발생했습니다.'
      },
      { status: 500 }
    );
  }
}
