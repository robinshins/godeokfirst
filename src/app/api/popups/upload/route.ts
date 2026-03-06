import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/client';
import sharp from 'sharp';

/**
 * POST - 이미지 업로드 (WebP 변환으로 용량 절약)
 */
export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json(
        { error: '파일이 필요합니다.' },
        { status: 400 }
      );
    }

    // 파일 타입 검증
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        { error: '이미지 파일만 업로드 가능합니다. (JPG, PNG, GIF, WebP)' },
        { status: 400 }
      );
    }

    // 파일 크기 검증 (10MB)
    const maxSize = 10 * 1024 * 1024;
    if (file.size > maxSize) {
      return NextResponse.json(
        { error: '파일 크기는 10MB를 초과할 수 없습니다.' },
        { status: 400 }
      );
    }

    const supabase = createClient();

    // 고유한 파일명 생성 (WebP로 변환)
    const timestamp = Date.now();
    const randomString = Math.random().toString(36).substring(2, 8);
    const fileName = `popup_${timestamp}_${randomString}.webp`;

    // 이미지를 WebP로 변환 (용량 절약)
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const webpBuffer = await sharp(buffer)
      .webp({ quality: 85 }) // 85% 품질로 변환 (용량 대비 품질 최적)
      .toBuffer();

    console.log(`📸 이미지 변환: ${file.name} (${(file.size / 1024).toFixed(1)}KB) → ${fileName} (${(webpBuffer.length / 1024).toFixed(1)}KB)`);

    // Supabase Storage에 WebP 업로드
    const { error } = await supabase.storage
      .from('popup-images')
      .upload(fileName, webpBuffer, {
        contentType: 'image/webp',
        cacheControl: '3600',
        upsert: false
      });

    if (error) {
      console.error('Supabase Storage error:', error);
      return NextResponse.json(
        { error: '이미지 업로드에 실패했습니다.', details: error.message },
        { status: 500 }
      );
    }

    // 공개 URL 생성
    const { data: publicUrlData } = supabase.storage
      .from('popup-images')
      .getPublicUrl(fileName);

    return NextResponse.json(
      {
        success: true,
        message: '이미지가 업로드되었습니다.',
        imageUrl: publicUrlData.publicUrl,
        fileName: fileName
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
