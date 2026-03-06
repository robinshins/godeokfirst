-- 팝업 관리 테이블
CREATE TABLE IF NOT EXISTS popups (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),

  -- 팝업 정보
  title TEXT NOT NULL,
  image_url TEXT NOT NULL,
  alt_text TEXT NOT NULL,
  aspect_ratio TEXT NOT NULL DEFAULT '1080/1350', -- width/height 형식

  -- 팝업 타입
  popup_type TEXT NOT NULL CHECK (popup_type IN ('fixed_sidebar', 'modal')),
  -- fixed_sidebar: 데스크탑 오른쪽 고정 (1개만)
  -- modal: 일반 팝업 (순서대로 표시)

  -- 표시 순서 (modal 타입만 사용, 낮을수록 먼저 표시)
  display_order INTEGER DEFAULT 0,

  -- 기간 설정
  start_date TIMESTAMP WITH TIME ZONE NOT NULL,
  end_date TIMESTAMP WITH TIME ZONE NOT NULL,

  -- 활성화 여부
  is_active BOOLEAN DEFAULT true
);

-- 인덱스 생성
CREATE INDEX IF NOT EXISTS idx_popups_type ON popups(popup_type);
CREATE INDEX IF NOT EXISTS idx_popups_active ON popups(is_active);
CREATE INDEX IF NOT EXISTS idx_popups_dates ON popups(start_date, end_date);
CREATE INDEX IF NOT EXISTS idx_popups_order ON popups(display_order);

-- 업데이트 시간 자동 갱신 트리거
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

-- 주석
COMMENT ON TABLE popups IS 'Popup management table for website notifications and events';
COMMENT ON COLUMN popups.popup_type IS 'Type of popup: fixed_sidebar (desktop right side, only 1) or modal (sequential popups)';
COMMENT ON COLUMN popups.display_order IS 'Display order for modal popups (lower number shows first)';
COMMENT ON COLUMN popups.start_date IS 'Popup start date and time';
COMMENT ON COLUMN popups.end_date IS 'Popup end date and time';

-- Storage bucket for popup images (Supabase Storage)
-- Run this in Supabase Dashboard > Storage:
-- 1. Create a new bucket named 'popup-images'
-- 2. Set it as public
-- 3. Add policy for authenticated uploads
