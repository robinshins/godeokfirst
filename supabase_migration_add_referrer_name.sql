-- Add referrer_name column to patient_intake table
-- 지인 추천인 경우 추천인 이름을 저장하기 위한 컬럼 추가
-- Supabase Dashboard > SQL Editor에서 실행하세요

ALTER TABLE patient_intake
ADD COLUMN IF NOT EXISTS referrer_name TEXT;

-- Add comment for documentation
COMMENT ON COLUMN patient_intake.referrer_name IS '추천인 이름 (지인 추천인 경우)';
