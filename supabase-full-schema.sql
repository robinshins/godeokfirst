-- ============================================================
-- 전체 스키마 설정 (새 Supabase 프로젝트에서 이 파일 하나만 실행)
-- Supabase Dashboard > SQL Editor에서 실행하세요
-- ============================================================


-- ============================================================
-- 1. consultation_logs 테이블 (채팅 상담 로그)
-- ============================================================
CREATE TABLE IF NOT EXISTS consultation_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ DEFAULT NOW(),

  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  age INTEGER NOT NULL,
  consultation_content TEXT NOT NULL,

  referrer_url TEXT DEFAULT '',
  referrer_source TEXT DEFAULT 'direct',
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  search_query TEXT,

  status TEXT DEFAULT '대기중' CHECK (status IN ('대기중', '전화전', '내원예약 완료', '상담완료', '취소')),

  chat_history JSONB DEFAULT '[]'::jsonb
);

CREATE INDEX IF NOT EXISTS idx_consultation_logs_created_at ON consultation_logs(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_consultation_logs_referrer_source ON consultation_logs(referrer_source);
CREATE INDEX IF NOT EXISTS idx_consultation_logs_phone ON consultation_logs(phone);
CREATE INDEX IF NOT EXISTS idx_consultation_logs_status ON consultation_logs(status);

ALTER TABLE consultation_logs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert consultation logs"
  ON consultation_logs FOR INSERT WITH CHECK (true);

CREATE POLICY "Service role can do everything on consultation_logs"
  ON consultation_logs FOR ALL USING (auth.role() = 'service_role');

COMMENT ON TABLE consultation_logs IS '치과 상담 로그 및 유입 경로 추적';
COMMENT ON COLUMN consultation_logs.referrer_source IS '유입 경로 분류: naver_blog, naver_kin, naver_search, meta, youtube, google, kakao, direct, other';
COMMENT ON COLUMN consultation_logs.status IS '상담 처리 상태: 대기중, 전화전, 내원예약 완료, 상담완료, 취소';
COMMENT ON COLUMN consultation_logs.chat_history IS '전체 채팅 대화 내역 (JSON 배열)';


-- ============================================================
-- 2. page_views 테이블 (페이지 방문 통계)
-- ============================================================
CREATE TABLE IF NOT EXISTS page_views (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ DEFAULT NOW(),

  path TEXT NOT NULL,
  referrer TEXT,
  referrer_source TEXT DEFAULT 'direct',
  user_agent TEXT
);

CREATE INDEX IF NOT EXISTS idx_page_views_created_at ON page_views(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_page_views_referrer_source ON page_views(referrer_source);
CREATE INDEX IF NOT EXISTS idx_page_views_path ON page_views(path);

ALTER TABLE page_views ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert page views"
  ON page_views FOR INSERT WITH CHECK (true);

CREATE POLICY "Service role can do everything on page_views"
  ON page_views FOR ALL USING (auth.role() = 'service_role');

COMMENT ON TABLE page_views IS '페이지 방문 기록 및 유입 경로 추적';


-- ============================================================
-- 3. page_views RPC 함수 (egress 절약용 집계 함수)
-- ============================================================
CREATE OR REPLACE FUNCTION get_daily_page_views(
  start_date TIMESTAMPTZ DEFAULT NULL,
  end_date TIMESTAMPTZ DEFAULT NULL
)
RETURNS TABLE (date TEXT, count BIGINT) AS $$
BEGIN
  RETURN QUERY
  SELECT
    TO_CHAR(created_at AT TIME ZONE 'Asia/Seoul', 'YYYY-MM-DD') as date,
    COUNT(*)::BIGINT as count
  FROM page_views
  WHERE
    (start_date IS NULL OR created_at >= start_date)
    AND (end_date IS NULL OR created_at <= end_date)
  GROUP BY TO_CHAR(created_at AT TIME ZONE 'Asia/Seoul', 'YYYY-MM-DD')
  ORDER BY date DESC;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION get_page_views_by_source(
  start_date TIMESTAMPTZ DEFAULT NULL,
  end_date TIMESTAMPTZ DEFAULT NULL
)
RETURNS TABLE (source TEXT, count BIGINT) AS $$
BEGIN
  RETURN QUERY
  SELECT
    COALESCE(referrer_source, 'direct') as source,
    COUNT(*)::BIGINT as count
  FROM page_views
  WHERE
    (start_date IS NULL OR created_at >= start_date)
    AND (end_date IS NULL OR created_at <= end_date)
  GROUP BY COALESCE(referrer_source, 'direct')
  ORDER BY count DESC;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION get_page_views_stats(
  start_date TIMESTAMPTZ DEFAULT NULL,
  end_date TIMESTAMPTZ DEFAULT NULL
)
RETURNS JSON AS $$
DECLARE
  daily_stats JSON;
  source_stats JSON;
  total_count BIGINT;
BEGIN
  SELECT json_agg(row_to_json(t)) INTO daily_stats
  FROM (
    SELECT
      TO_CHAR(created_at AT TIME ZONE 'Asia/Seoul', 'YYYY-MM-DD') as date,
      COUNT(*)::BIGINT as count
    FROM page_views
    WHERE
      (start_date IS NULL OR created_at >= start_date)
      AND (end_date IS NULL OR created_at <= end_date)
    GROUP BY TO_CHAR(created_at AT TIME ZONE 'Asia/Seoul', 'YYYY-MM-DD')
    ORDER BY date DESC
  ) t;

  SELECT json_agg(row_to_json(t)) INTO source_stats
  FROM (
    SELECT
      COALESCE(referrer_source, 'direct') as source,
      COUNT(*)::BIGINT as count
    FROM page_views
    WHERE
      (start_date IS NULL OR created_at >= start_date)
      AND (end_date IS NULL OR created_at <= end_date)
    GROUP BY COALESCE(referrer_source, 'direct')
    ORDER BY count DESC
  ) t;

  SELECT COUNT(*) INTO total_count
  FROM page_views
  WHERE
    (start_date IS NULL OR created_at >= start_date)
    AND (end_date IS NULL OR created_at <= end_date);

  RETURN json_build_object(
    'data', COALESCE(daily_stats, '[]'::json),
    'referrerSources', COALESCE(source_stats, '[]'::json),
    'total', total_count
  );
END;
$$ LANGUAGE plpgsql;


-- ============================================================
-- 4. popups 테이블 (팝업 관리)
-- ============================================================
CREATE TABLE IF NOT EXISTS popups (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),

  title TEXT NOT NULL,
  image_url TEXT NOT NULL,
  alt_text TEXT NOT NULL,
  aspect_ratio TEXT NOT NULL DEFAULT '1080/1350',

  popup_type TEXT NOT NULL CHECK (popup_type IN ('fixed_sidebar', 'modal')),
  display_order INTEGER DEFAULT 0,

  start_date TIMESTAMP WITH TIME ZONE NOT NULL,
  end_date TIMESTAMP WITH TIME ZONE NOT NULL,

  is_active BOOLEAN DEFAULT true
);

CREATE INDEX IF NOT EXISTS idx_popups_type ON popups(popup_type);
CREATE INDEX IF NOT EXISTS idx_popups_active ON popups(is_active);
CREATE INDEX IF NOT EXISTS idx_popups_dates ON popups(start_date, end_date);
CREATE INDEX IF NOT EXISTS idx_popups_order ON popups(display_order);

CREATE OR REPLACE FUNCTION update_popups_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_update_popups_updated_at
  BEFORE UPDATE ON popups
  FOR EACH ROW
  EXECUTE FUNCTION update_popups_updated_at();

COMMENT ON TABLE popups IS 'Popup management table for website notifications and events';
COMMENT ON COLUMN popups.popup_type IS 'fixed_sidebar: 데스크탑 오른쪽 고정 (1개), modal: 순서대로 표시';
COMMENT ON COLUMN popups.display_order IS 'modal 타입 표시 순서 (낮을수록 먼저)';


-- ============================================================
-- 5. patient_intake 테이블 (환자 문진표)
-- ============================================================
CREATE TABLE IF NOT EXISTS patient_intake (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),

  -- 기본 정보
  name TEXT NOT NULL,
  gender TEXT,
  resident_number TEXT,
  passport_number TEXT,
  birthdate TEXT,
  age INTEGER,
  address TEXT,
  phone_number TEXT NOT NULL,
  guardian_phone_number TEXT,

  -- 내원 경로
  how_did_you_know TEXT,
  how_did_you_know_other TEXT,
  how_did_you_know_search TEXT,
  how_did_you_know_partner TEXT,
  referrer_name TEXT,
  why_visit TEXT,
  why_visit_other TEXT,

  -- 상담 과목
  consultation_types TEXT[],
  other_consultation TEXT,
  last_dental_visit TEXT,

  -- 건강 정보
  drug_allergy BOOLEAN DEFAULT false,
  drug_allergy_details TEXT,
  medical_conditions TEXT[],
  other_condition TEXT,
  has_dental_history BOOLEAN DEFAULT false,
  dental_history_details TEXT,

  -- 흡연/음주
  smoking_amount TEXT,
  drinking_frequency TEXT,
  no_smoking_drinking BOOLEAN DEFAULT false,

  -- 보험
  has_dental_insurance BOOLEAN DEFAULT false,
  insurance_company TEXT,
  insurance_year TEXT,

  -- 증상
  symptoms TEXT[],
  pain_level INTEGER,

  -- 동의
  privacy_consent BOOLEAN NOT NULL DEFAULT false,
  consent_date TIMESTAMPTZ,
  signature TEXT,

  -- 법정대리인 (만 14세 미만)
  guardian_name TEXT,
  guardian_relationship TEXT,
  guardian_signature TEXT,

  -- 메모 (관리자용)
  memo TEXT
);

CREATE INDEX IF NOT EXISTS idx_patient_intake_created_at ON patient_intake(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_patient_intake_phone ON patient_intake(phone_number);
CREATE INDEX IF NOT EXISTS idx_patient_intake_name ON patient_intake(name);

CREATE OR REPLACE FUNCTION update_patient_intake_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_update_patient_intake_updated_at
  BEFORE UPDATE ON patient_intake
  FOR EACH ROW
  EXECUTE FUNCTION update_patient_intake_updated_at();

ALTER TABLE patient_intake ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Service role can do everything on patient_intake"
  ON patient_intake FOR ALL USING (auth.role() = 'service_role');

COMMENT ON TABLE patient_intake IS '환자 문진표 데이터';
COMMENT ON COLUMN patient_intake.passport_number IS '여권번호 (외국인용)';
COMMENT ON COLUMN patient_intake.birthdate IS '생년월일 (YYYY-MM-DD, 주민등록번호 없는 경우)';
COMMENT ON COLUMN patient_intake.referrer_name IS '추천인 이름 (지인 추천인 경우)';


-- ============================================================
-- Storage: popup-images 버킷은 대시보드에서 수동 생성 필요
-- Storage > New bucket > 이름: popup-images > Public bucket 체크
-- ============================================================
