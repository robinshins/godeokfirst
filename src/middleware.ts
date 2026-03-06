import { type NextRequest, NextResponse } from 'next/server';
import { updateSession } from '@/lib/supabase/middleware';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Browser language detection - redirect root path to appropriate language
  if (pathname === '/') {
    const acceptLanguage = request.headers.get('accept-language') || '';
    const browserLang = acceptLanguage.split(',')[0].split('-')[0].toLowerCase();

    if (browserLang === 'en') {
      return NextResponse.redirect(new URL('/en', request.url));
    } else if (browserLang === 'ja') {
      return NextResponse.redirect(new URL('/jp', request.url));
    }
    // Korean or other languages stay on root (default)
  }

  return updateSession(request);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images (public images)
     * - icons (public icons)
     */
    '/((?!_next/static|_next/image|favicon.ico|images|icons|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
