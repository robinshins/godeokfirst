import { createServerClient } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';

// Auth가 필요한 경로만 정의 (egress 절약)
const AUTH_REQUIRED_PATHS = ['/login', '/signup', '/admin'];

export async function updateSession(request: NextRequest) {
  const supabaseResponse = NextResponse.next({
    request,
  });

  const { pathname } = request.nextUrl;

  // Auth가 필요한 경로에서만 세션 확인 (egress 절약)
  const needsAuth = AUTH_REQUIRED_PATHS.some(path => pathname.startsWith(path));

  if (!needsAuth) {
    return supabaseResponse;
  }

  // Auth 쿠키가 있는 경우에만 세션 갱신
  const hasAuthCookie = request.cookies.getAll().some(
    cookie => cookie.name.startsWith('sb-') && cookie.name.includes('auth')
  );

  if (!hasAuthCookie) {
    return supabaseResponse;
  }

  let response = supabaseResponse;

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
          response = NextResponse.next({
            request,
          });
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  // Auth 쿠키가 있을 때만 토큰 갱신
  await supabase.auth.getUser();

  return response;
}
