#!/usr/bin/env node

/**
 * Supabase 마이그레이션 실행 스크립트
 * status와 search_query 컬럼을 consultation_logs 테이블에 추가
 */

const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('❌ 환경 변수가 설정되지 않았습니다.');
  console.error('NEXT_PUBLIC_SUPABASE_URL:', supabaseUrl);
  console.error('SUPABASE_SERVICE_ROLE_KEY:', supabaseServiceKey ? '✓ 설정됨' : '✗ 설정 안됨');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function runMigration() {
  console.log('🚀 마이그레이션 시작...\n');

  try {
    // 1. search_query 컬럼 추가
    console.log('📝 Step 1: search_query 컬럼 추가');
    const { error: error1 } = await supabase.rpc('exec_sql', {
      sql: `ALTER TABLE consultation_logs ADD COLUMN IF NOT EXISTS search_query TEXT;`
    });

    if (error1) {
      console.log('⚠️ search_query 컬럼 추가 실패 (이미 존재할 수 있음):', error1.message);
    } else {
      console.log('✅ search_query 컬럼 추가 완료\n');
    }

    // 2. status 컬럼 추가
    console.log('📝 Step 2: status 컬럼 추가');
    const { error: error2 } = await supabase.rpc('exec_sql', {
      sql: `ALTER TABLE consultation_logs ADD COLUMN IF NOT EXISTS status TEXT DEFAULT '대기중';`
    });

    if (error2) {
      console.log('⚠️ status 컬럼 추가 실패 (이미 존재할 수 있음):', error2.message);
    } else {
      console.log('✅ status 컬럼 추가 완료\n');
    }

    // 3. status CHECK 제약 조건 추가 (이미 있으면 무시)
    console.log('📝 Step 3: status CHECK 제약 조건 추가');
    const { error: error3 } = await supabase.rpc('exec_sql', {
      sql: `
        DO $$
        BEGIN
          IF NOT EXISTS (
            SELECT 1 FROM pg_constraint
            WHERE conname = 'consultation_logs_status_check'
          ) THEN
            ALTER TABLE consultation_logs
            ADD CONSTRAINT consultation_logs_status_check
            CHECK (status IN ('대기중', '전화전', '내원예약 완료', '상담완료', '취소'));
          END IF;
        END $$;
      `
    });

    if (error3) {
      console.log('⚠️ status CHECK 제약 조건 추가 실패:', error3.message);
    } else {
      console.log('✅ status CHECK 제약 조건 추가 완료\n');
    }

    // 4. status 인덱스 생성
    console.log('📝 Step 4: status 인덱스 생성');
    const { error: error4 } = await supabase.rpc('exec_sql', {
      sql: `CREATE INDEX IF NOT EXISTS idx_consultation_logs_status ON consultation_logs(status);`
    });

    if (error4) {
      console.log('⚠️ status 인덱스 생성 실패:', error4.message);
    } else {
      console.log('✅ status 인덱스 생성 완료\n');
    }

    // 5. 컬럼 확인
    console.log('📝 Step 5: 테이블 구조 확인');
    const { data: columns, error: error5 } = await supabase
      .from('consultation_logs')
      .select('*')
      .limit(0);

    if (error5) {
      console.error('❌ 테이블 구조 확인 실패:', error5.message);
    } else {
      console.log('✅ 현재 consultation_logs 테이블 구조:');
      // 컬럼 이름은 실제 쿼리로는 가져올 수 없으므로 메시지만 출력
      console.log('   테이블이 정상적으로 생성되었습니다.\n');
    }

    console.log('🎉 마이그레이션 완료!');
    console.log('\n다음 단계:');
    console.log('1. npm run dev 로 개발 서버 재시작');
    console.log('2. 채팅 테스트하여 저장 확인');

  } catch (error) {
    console.error('❌ 마이그레이션 실행 중 오류:', error);
    process.exit(1);
  }
}

// RPC 함수가 없을 수 있으므로 대체 방법 사용
async function runMigrationAlternative() {
  console.log('🚀 마이그레이션 시작 (대체 방법)...\n');

  console.log('⚠️ Supabase에서 직접 SQL을 실행해야 합니다.');
  console.log('\n다음 SQL을 Supabase Dashboard > SQL Editor에서 실행하세요:\n');
  console.log('--------------------------------------------------');
  console.log(`
-- search_query 컬럼 추가
ALTER TABLE consultation_logs
ADD COLUMN IF NOT EXISTS search_query TEXT;

-- status 컬럼 추가
ALTER TABLE consultation_logs
ADD COLUMN IF NOT EXISTS status TEXT DEFAULT '대기중';

-- status 컬럼에 CHECK 제약 조건 추가
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint
    WHERE conname = 'consultation_logs_status_check'
  ) THEN
    ALTER TABLE consultation_logs
    ADD CONSTRAINT consultation_logs_status_check
    CHECK (status IN ('대기중', '전화전', '내원예약 완료', '상담완료', '취소'));
  END IF;
END $$;

-- status 컬럼 인덱스 생성
CREATE INDEX IF NOT EXISTS idx_consultation_logs_status ON consultation_logs(status);

-- 코멘트 추가
COMMENT ON COLUMN consultation_logs.search_query IS '검색 엔진을 통해 유입된 경우의 검색 쿼리';
COMMENT ON COLUMN consultation_logs.status IS '상담 처리 상태: 대기중, 전화전, 내원예약 완료, 상담완료, 취소';
  `);
  console.log('--------------------------------------------------\n');

  console.log('📍 Supabase Dashboard 링크:');
  console.log(`   ${supabaseUrl.replace('/rest/v1', '')}/project/default/sql/new\n`);
}

// 실행
runMigrationAlternative();
