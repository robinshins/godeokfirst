-- 2026-10-28 보안 강화 (Supabase SQL Editor에서 실행)
-- 배경: 개인정보 API 무인증 노출 사고 대응. 코드 쪽(requireAdmin)과 별개로 DB 쪽 방어선을 추가한다.
-- 1) popups 테이블에 RLS가 없어 브라우저용 anon 키로 누구나 읽고/쓰고/지울 수 있었다.
-- 2) anon/authenticated 역할에 모든 테이블의 전체 권한(INSERT~TRUNCATE)이 기본 부여돼 있었다.
--    실제 데이터 접근은 전부 서버 API(service_role)로만 이뤄지므로 회수한다.
-- 3) 관리자 알림용 SECURITY DEFINER 함수가 anon에서 실행 가능했다.

-- 1. popups: RLS 활성화. 공개 조회는 활성+기간 내 팝업만, 쓰기는 service_role만
alter table public.popups enable row level security;
drop policy if exists "Public can view active popups" on public.popups;
create policy "Public can view active popups" on public.popups
  for select to anon, authenticated
  using (is_active = true and start_date <= now() and end_date >= now());
drop policy if exists "Service role can do everything on popups" on public.popups;
create policy "Service role can do everything on popups" on public.popups
  for all using (auth.role() = 'service_role') with check (auth.role() = 'service_role');

-- 2. 모든 데이터 접근은 서버 API(service_role)로만. 브라우저용 anon 키의 테이블 권한 회수
revoke all privileges on table public.consultation_logs, public.patient_intake, public.page_views from anon, authenticated;
revoke insert, update, delete, truncate, references, trigger on table public.popups from anon, authenticated;
drop policy if exists "Anyone can insert consultation logs" on public.consultation_logs;
drop policy if exists "Anyone can insert page views" on public.page_views;

-- 3. 함수: 외부(anon/authenticated/PUBLIC) 실행 권한 회수
revoke execute on function public.notify_admin_new_consultation() from public, anon, authenticated;
revoke execute on function public.notify_admin_new_intake() from public, anon, authenticated;
revoke execute on function public.update_patient_intake_updated_at() from public, anon, authenticated;
revoke execute on function public.update_popups_updated_at() from public, anon, authenticated;
revoke execute on function public.get_daily_page_views(timestamptz, timestamptz) from public, anon, authenticated;
revoke execute on function public.get_page_views_by_source(timestamptz, timestamptz) from public, anon, authenticated;
revoke execute on function public.get_page_views_stats(timestamptz, timestamptz) from public, anon, authenticated;

-- 4. search_path 고정 (Supabase security advisor 경고 해소)
alter function public.get_daily_page_views(timestamptz, timestamptz) set search_path = public;
alter function public.get_page_views_by_source(timestamptz, timestamptz) set search_path = public;
alter function public.get_page_views_stats(timestamptz, timestamptz) set search_path = public;
alter function public.update_popups_updated_at() set search_path = public;
alter function public.update_patient_intake_updated_at() set search_path = public;
