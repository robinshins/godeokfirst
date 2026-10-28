import { NextRequest, NextResponse } from 'next/server';
import {
  buildSessionCookie,
  createSessionToken,
  getAdminSession,
  isAdminAuthConfigured,
  resolveRoleByPassword,
} from '@/lib/admin-auth';

// 로그인 실패 횟수 제한 (인스턴스 단위, 무차별 대입 완화용)
const MAX_FAILURES = 10;
const WINDOW_MS = 15 * 60 * 1000;
const failures = new Map<string, { count: number; resetAt: number }>();

function clientIp(request: NextRequest): string {
  return request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
}

function isBlocked(ip: string): boolean {
  const entry = failures.get(ip);
  if (!entry) return false;
  if (Date.now() > entry.resetAt) {
    failures.delete(ip);
    return false;
  }
  return entry.count >= MAX_FAILURES;
}

function recordFailure(ip: string) {
  const now = Date.now();
  const entry = failures.get(ip);
  if (!entry || now > entry.resetAt) {
    failures.set(ip, { count: 1, resetAt: now + WINDOW_MS });
  } else {
    entry.count += 1;
  }
}

/** 현재 세션 상태 조회 */
export async function GET(request: NextRequest) {
  const session = getAdminSession(request);
  return NextResponse.json({
    authenticated: Boolean(session),
    role: session?.role ?? null,
  });
}

/** 비밀번호 로그인 → 세션 쿠키 발급 */
export async function POST(request: NextRequest) {
  if (!isAdminAuthConfigured()) {
    console.error('ADMIN_PASSWORD is not set');
    return NextResponse.json({ error: '관리자 비밀번호가 설정되지 않았습니다.' }, { status: 500 });
  }

  const ip = clientIp(request);
  if (isBlocked(ip)) {
    return NextResponse.json(
      { error: '로그인 시도가 너무 많습니다. 15분 후 다시 시도해주세요.' },
      { status: 429 }
    );
  }

  const body = await request.json().catch(() => ({}));
  const password = typeof body?.password === 'string' ? body.password : '';
  const role = resolveRoleByPassword(password);

  if (!role) {
    recordFailure(ip);
    return NextResponse.json({ error: '비밀번호가 올바르지 않습니다.' }, { status: 401 });
  }

  failures.delete(ip);
  const response = NextResponse.json({ success: true, role });
  response.cookies.set(buildSessionCookie(createSessionToken(role)));
  return response;
}

/** 로그아웃 → 세션 쿠키 제거 */
export async function DELETE() {
  const response = NextResponse.json({ success: true });
  response.cookies.set(buildSessionCookie(null));
  return response;
}
