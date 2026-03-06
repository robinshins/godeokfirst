-- 상담 로그 테이블 생성
-- Supabase Dashboard > SQL Editor에서 실행하세요

CREATE TABLE IF NOT EXISTS consultation_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ DEFAULT NOW(),

  -- 상담자 정보
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  age INTEGER NOT NULL,
  consultation_content TEXT NOT NULL,

  -- 유입 경로 정보
  referrer_url TEXT DEFAULT '',
  referrer_source TEXT DEFAULT 'direct',
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  search_query TEXT,

  -- 상담 상태
  status TEXT DEFAULT '대기중' CHECK (status IN ('대기중', '전화전', '내원예약 완료', '상담완료', '취소')),

  -- 채팅 히스토리
  chat_history JSONB DEFAULT '[]'::jsonb
);

-- 인덱스 생성 (조회 성능 향상)
CREATE INDEX IF NOT EXISTS idx_consultation_logs_created_at ON consultation_logs(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_consultation_logs_referrer_source ON consultation_logs(referrer_source);
CREATE INDEX IF NOT EXISTS idx_consultation_logs_phone ON consultation_logs(phone);

-- RLS (Row Level Security) 활성화 (선택사항)
ALTER TABLE consultation_logs ENABLE ROW LEVEL SECURITY;

-- 모든 사용자가 INSERT 가능하도록 설정 (상담 로그 저장용)
CREATE POLICY "Anyone can insert consultation logs"
  ON consultation_logs
  FOR INSERT
  WITH CHECK (true);

-- 관리자만 조회 가능하도록 설정 (선택사항 - 필요시 주석 해제)
-- CREATE POLICY "Only authenticated users can view consultation logs"
--   ON consultation_logs
--   FOR SELECT
--   USING (auth.role() = 'authenticated');

-- 테이블 코멘트
COMMENT ON TABLE consultation_logs IS '치과 상담 로그 및 유입 경로 추적';
COMMENT ON COLUMN consultation_logs.referrer_source IS '유입 경로 분류: naver_blog, naver_kin, naver_search, meta, youtube, google, kakao, direct, other';
COMMENT ON COLUMN consultation_logs.chat_history IS '전체 채팅 대화 내역 (JSON 배열)';

-- ============================================
-- page_views 통계 집계 RPC 함수 (egress 절약)
-- ============================================

-- 날짜별 방문 수 집계 함수
CREATE OR REPLACE FUNCTION get_daily_page_views(
  start_date TIMESTAMPTZ DEFAULT NULL,
  end_date TIMESTAMPTZ DEFAULT NULL
)
RETURNS TABLE (
  date TEXT,
  count BIGINT
) AS $$
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

-- 유입 경로별 방문 수 집계 함수
CREATE OR REPLACE FUNCTION get_page_views_by_source(
  start_date TIMESTAMPTZ DEFAULT NULL,
  end_date TIMESTAMPTZ DEFAULT NULL
)
RETURNS TABLE (
  source TEXT,
  count BIGINT
) AS $$
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

-- 전체 통계 한번에 가져오는 함수 (가장 효율적)
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
  -- 날짜별 통계
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

  -- 유입 경로별 통계
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

  -- 전체 개수
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
