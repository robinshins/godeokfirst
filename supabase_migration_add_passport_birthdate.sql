-- Add passport_number and birthdate columns to patient_intake table
ALTER TABLE patient_intake
ADD COLUMN IF NOT EXISTS passport_number TEXT,
ADD COLUMN IF NOT EXISTS birthdate TEXT;

-- Make resident_number nullable for foreign patients
ALTER TABLE patient_intake
ALTER COLUMN resident_number DROP NOT NULL;

-- Add comment for documentation
COMMENT ON COLUMN patient_intake.passport_number IS '여권번호 (외국인용)';
COMMENT ON COLUMN patient_intake.birthdate IS '생년월일 (YYYY-MM-DD 형식, 주민등록번호가 없는 경우)';
