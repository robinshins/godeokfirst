import { createHmac, timingSafeEqual } from 'crypto';
import { NextRequest, NextResponse } from 'next/server';

/**
 * 관리자 인증 (서버 전용)
 *
 * - 비밀번호는 환경변수 ADMIN_PASSWORD(전체 권한), ADMIN_LIMITED_PASSWORD(목록만, 쉼표로 여러 개)로 관리한다.
 * - 로그인 성공 시 HMAC 서명된 세션 토큰을 httpOnly 쿠키로 발급한다.
 * - 관리자용 API 라우트는 requireAdmin()으로 쿠키를 검증한 뒤에만 데이터를 내보낸다.
 */

export type AdminRole = 'admin' | 'limited';

export const ADMIN_SESSION_COOKIE = 'gd_admin_session';
const SESSION_TTL_SECONDS = 60 * 60 * 24 * 7; // 7일

function getSecret(): string {
  const secret = process.env.ADMIN_SESSION_SECRET || process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!secret) {
    throw new Error('ADMIN_SESSION_SECRET is not set');
  }
  return secret;
}

function sign(payload: string): string {
  return createHmac('sha256', getSecret()).update(payload).digest('base64url');
}

function safeEqual(a: string, b: string): boolean {
  const bufA = Buffer.from(a);
  const bufB = Buffer.from(b);
  if (bufA.length !== bufB.length) return false;
  return timingSafeEqual(bufA, bufB);
}

function parseList(value: string | undefined): string[] {
  return (value || '')
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);
}

export function isAdminAuthConfigured(): boolean {
  return parseList(process.env.ADMIN_PASSWORD).length > 0;
}

/** 비밀번호로 권한을 판별한다. 일치하는 것이 없으면 null */
export function resolveRoleByPassword(password: string): AdminRole | null {
  if (!password) return null;
  for (const candidate of parseList(process.env.ADMIN_PASSWORD)) {
    if (safeEqual(password, candidate)) return 'admin';
  }
  for (const candidate of parseList(process.env.ADMIN_LIMITED_PASSWORD)) {
    if (safeEqual(password, candidate)) return 'limited';
  }
  return null;
}

export function createSessionToken(role: AdminRole): string {
  const expiresAt = Math.floor(Date.now() / 1000) + SESSION_TTL_SECONDS;
  const payload = `${role}.${expiresAt}`;
  return `${payload}.${sign(payload)}`;
}

export function verifySessionToken(
  token: string | undefined | null
): { role: AdminRole; expiresAt: number } | null {
  if (!token) return null;
  const parts = token.split('.');
  if (parts.length !== 3) return null;
  const [role, expiresAtRaw, signature] = parts;
  if (role !== 'admin' && role !== 'limited') return null;
  const expiresAt = Number(expiresAtRaw);
  if (!Number.isFinite(expiresAt) || expiresAt < Math.floor(Date.now() / 1000)) return null;
  if (!safeEqual(signature, sign(`${role}.${expiresAt}`))) return null;
  return { role, expiresAt };
}

export function getAdminSession(request: NextRequest): { role: AdminRole; expiresAt: number } | null {
  try {
    return verifySessionToken(request.cookies.get(ADMIN_SESSION_COOKIE)?.value);
  } catch {
    return null;
  }
}

export function buildSessionCookie(token: string | null) {
  return {
    name: ADMIN_SESSION_COOKIE,
    value: token ?? '',
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax' as const,
    path: '/',
    maxAge: token ? SESSION_TTL_SECONDS : 0,
  };
}

/** Vercel Cron 또는 크론이 내부 호출할 때 쓰는 Authorization: Bearer CRON_SECRET 검증 */
export function isCronRequest(request: NextRequest): boolean {
  const secret = process.env.CRON_SECRET;
  if (!secret) return false;
  const header = request.headers.get('authorization') || '';
  return safeEqual(header, `Bearer ${secret}`);
}

/** 관리자 세션 또는 크론 인증 중 하나를 요구한다. */
export function requireAdminOrCron(
  request: NextRequest,
  options: { adminOnly?: boolean } = {}
): NextResponse | null {
  if (isCronRequest(request)) return null;
  return requireAdmin(request, options);
}

/**
 * 관리자 세션을 요구한다.
 * 통과하면 null, 아니면 바로 반환할 401/403 응답을 돌려준다.
 */
export function requireAdmin(
  request: NextRequest,
  options: { adminOnly?: boolean } = {}
): NextResponse | null {
  const session = getAdminSession(request);
  if (!session) {
    return NextResponse.json({ error: '관리자 로그인이 필요합니다.' }, { status: 401 });
  }
  if (options.adminOnly && session.role !== 'admin') {
    return NextResponse.json({ error: '권한이 없습니다.' }, { status: 403 });
  }
  return null;
}
