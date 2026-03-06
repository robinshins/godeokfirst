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
  exposedPosts: ExposedPost[];
}

interface KeywordResult {
  keyword: string;
  blogResults: BlogResult[];
}

export async function GET(request: NextRequest) {
  // Vercel Cron 인증 확인
  const authHeader = request.headers.get('authorization');
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const supabase = createServiceClient();

    // 활성화된 설정 가져오기
    const { data: config, error: configError } = await supabase
      .from('blog_tracking_configs')
      .select('*')
      .eq('is_active', true)
      .order('created_at', { ascending: false })
      .limit(1)
      .single();

    if (configError || !config) {
      console.log('❌ 활성화된 블로그 설정 없음');
      return NextResponse.json({ error: '활성화된 설정이 없습니다.' }, { status: 404 });
    }

    const { id: configId, blogs, keywords } = config;

    if (!blogs || blogs.length === 0 || !keywords || keywords.length === 0) {
      console.log('❌ 블로그 또는 키워드 없음');
      return NextResponse.json({ error: '블로그 또는 키워드가 없습니다.' }, { status: 400 });
    }

    console.log(`🚀 블로그 노출 추적 시작: ${keywords.length}개 키워드, ${blogs.length}개 블로그`);

    const now = new Date();
    // 한국 시간 기준 날짜 (UTC+9)
    const kstDate = new Date(now.getTime() + 9 * 60 * 60 * 1000);
    const dateStr = kstDate.toISOString().split('T')[0];
    const checkedAt = now.toISOString();

    const results: KeywordResult[] = [];

    for (const keyword of keywords) {
      const blogResults: BlogResult[] = [];

      for (const blog of blogs) {
        try {
          const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'https://your-domain.vercel.app'}/api/blog-check`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ keyword, blogId: blog.blogId }),
          });

          const data = await response.json();

          blogResults.push({
            blogId: blog.id,
            isFirstPage: data.isFirstPage,
            exposedPosts: data.exposedPosts || [],
          });

          console.log(`✅ ${keyword} - @${blog.blogId}: ${data.isFirstPage ? 'O' : 'X'} (${data.exposedPosts?.length || 0}개 글)`);
        } catch (error) {
          console.error(`❌ ${keyword} - @${blog.blogId} 검색 실패:`, error);
          blogResults.push({
            blogId: blog.id,
            isFirstPage: false,
            exposedPosts: [],
          });
        }

        // Rate limiting - 500ms 대기
        await new Promise(resolve => setTimeout(resolve, 500));
      }

      results.push({
        keyword,
        blogResults,
      });
    }

    // 결과 저장
    // 해당 날짜의 기존 결과 삭제
    await supabase
      .from('blog_tracking_results')
      .delete()
      .eq('config_id', configId)
      .eq('check_date', dateStr);

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

    for (const keywordResult of results) {
      for (const blogResult of keywordResult.blogResults) {
        insertData.push({
          config_id: configId,
          check_date: dateStr,
          checked_at: checkedAt,
          keyword: keywordResult.keyword,
          blog_id: blogResult.blogId,
          is_first_page: blogResult.isFirstPage,
          exposed_posts: blogResult.exposedPosts,
        });
      }
    }

    const { error: insertError } = await supabase
      .from('blog_tracking_results')
      .insert(insertData);

    if (insertError) {
      console.error('❌ 결과 저장 실패:', insertError);
      return NextResponse.json({ error: '결과 저장 실패' }, { status: 500 });
    }

    const totalChecks = results.reduce((acc, r) => acc + r.blogResults.length, 0);
    const firstPageCount = results.reduce(
      (acc, r) => acc + r.blogResults.filter(br => br.isFirstPage).length,
      0
    );

    console.log(`✅ 블로그 노출 추적 완료: ${totalChecks}개 체크, 1페이지 ${firstPageCount}개`);

    return NextResponse.json({
      success: true,
      date: dateStr,
      totalKeywords: keywords.length,
      totalBlogs: blogs.length,
      totalChecks,
      firstPageCount,
    });
  } catch (error) {
    console.error('❌ Cron 실행 오류:', error);
    return NextResponse.json({
      error: error instanceof Error ? error.message : '알 수 없는 오류'
    }, { status: 500 });
  }
}
