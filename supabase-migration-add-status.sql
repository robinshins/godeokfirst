-- 기존 consultation_logs 테이블에 누락된 컬럼 추가
-- Supabase Dashboard > SQL Editor에서 실행하세요

-- search_query 컬럼 추가
ALTER TABLE consultation_logs 
ADD COLUMN IF NOT EXISTS search_query TEXT;

-- status 컬럼 추가
ALTER TABLE consultation_logs 
ADD COLUMN IF NOT EXISTS status TEXT DEFAULT '대기중';

-- status 컬럼에 CHECK 제약 조건 추가
ALTER TABLE consultation_logs 
ADD CONSTRAINT consultation_logs_status_check 
CHECK (status IN ('대기중', '전화전', '내원예약 완료', '상담완료', '취소'));

-- status 컬럼 인덱스 생성 (필터링 성능 향상)
CREATE INDEX IF NOT EXISTS idx_consultation_logs_status ON consultation_logs(status);

-- 코멘트 추가
COMMENT ON COLUMN consultation_logs.search_query IS '검색 엔진을 통해 유입된 경우의 검색 쿼리';
COMMENT ON COLUMN consultation_logs.status IS '상담 처리 상태: 대기중, 전화전, 내원예약 완료, 상담완료, 취소';

