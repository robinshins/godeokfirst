# 유입 경로 트래킹 시스템 설정 가이드

## 개요
이 시스템은 사용자가 웹사이트에 접속할 때 유입 경로를 자동으로 추적하고, 상담 진행 시 실시간으로 Supabase에 저장합니다.

## 주요 기능

### 1. 자동 유입 경로 감지
- 네이버 블로그 (`naver_blog`)
- 네이버 지식인 (`naver_kin`)
- 네이버 검색 (`naver_search`)
- 메타 (페이스북/인스타그램) (`meta`)
- 유튜브 (`youtube`)
- 구글 검색 (`google`)
- 카카오 (`kakao`)
- 직접 접속 (`direct`)
- 기타 (`other`)

### 2. UTM 파라미터 추적
- `utm_source`: 유입 소스
- `utm_medium`: 매체 유형
- `utm_campaign`: 캠페인 이름

### 3. 실시간 상담 로그 저장
- 메시지가 추가될 때마다 자동 저장
- 같은 전화번호로 30분 이내 재접속 시 기존 로그 업데이트
- 새 세션이면 새 로그 생성

---

## 설정 단계

### 1단계: Supabase 테이블 생성

Supabase 대시보드 > SQL Editor에서 다음 SQL 스크립트 실행:

```sql
-- supabase-schema.sql 파일 내용 실행
-- 파일 위치: /Users/singyuseob/Dev/dentist/supabase-schema.sql
```

또는 아래 명령 복사:

```sql
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
  chat_history JSONB DEFAULT '[]'::jsonb
);

CREATE INDEX IF NOT EXISTS idx_consultation_logs_created_at ON consultation_logs(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_consultation_logs_referrer_source ON consultation_logs(referrer_source);
CREATE INDEX IF NOT EXISTS idx_consultation_logs_phone ON consultation_logs(phone);

ALTER TABLE consultation_logs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert consultation logs"
  ON consultation_logs
  FOR INSERT
  WITH CHECK (true);
```

### 2단계: 환경 변수 확인

`.env.local` 파일에 Supabase 설정이 있는지 확인:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://wliupmignrmiqnwcrxue.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
```

### 3단계: 개발 서버 실행

```bash
npm run dev
```

---

## 데이터 흐름

### 1. 사용자 접속
```
사용자가 웹사이트 접속
  ↓
ReferrerTracker 컴포넌트 실행
  ↓
document.referrer 및 URL 파라미터 수집
  ↓
sessionStorage에 저장 (키: 'referrerData')
```

### 2. 상담 폼 작성
```
사용자가 상담 폼 작성
  ↓
sessionStorage에서 referrerData 가져오기
  ↓
consultationData에 referrer 정보 포함
  ↓
localStorage에 저장 (키: 'consultationData')
  ↓
/chat 페이지로 이동
```

### 3. 상담 진행 및 저장
```
ChatInterface에서 localStorage 데이터 로드
  ↓
메시지 전송 (사용자 ↔ AI)
  ↓
메시지 2개 이상일 때 자동 저장 트리거
  ↓
/api/consultations POST 요청
  ↓
Supabase에서 최근 30분 이내 같은 전화번호 조회
  ↓
- 있으면: 기존 로그 업데이트 (chat_history 갱신)
- 없으면: 새 로그 생성
  ↓
저장 완료
```

---

## API 엔드포인트

### POST `/api/consultations`
상담 로그 저장 (생성 또는 업데이트)

**요청 Body:**
```typescript
{
  name: string;
  phone: string;
  age: number;
  consultation_content: string;
  referrer_url: string;
  referrer_source: string;
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
  chat_history: ChatMessage[];
}
```

**응답:**
```json
{
  "success": true,
  "message": "상담 로그가 저장되었습니다.",
  "data": { ... },
  "isUpdate": false
}
```

### GET `/api/consultations?limit=50&source=naver_blog`
상담 로그 조회 (관리자용)

**쿼리 파라미터:**
- `limit`: 조회 개수 (기본값: 50)
- `source`: 유입 경로 필터 (선택사항)

**응답:**
```json
{
  "success": true,
  "data": [ ... ],
  "count": 10
}
```

---

## 저장되는 데이터 예시

```json
{
  "id": "uuid",
  "created_at": "2025-10-13T12:00:00Z",
  "name": "홍길동",
  "phone": "010-1234-5678",
  "age": 30,
  "consultation_content": "임플란트",
  "referrer_url": "https://blog.naver.com/example",
  "referrer_source": "naver_blog",
  "utm_source": "naver",
  "utm_medium": "blog",
  "utm_campaign": "implant_2025",
  "chat_history": [
    {
      "id": "1",
      "role": "assistant",
      "content": "궁금한 점이 있으시면 무엇이든 물어봐주세요!",
      "timestamp": "2025-10-13T12:00:00Z"
    },
    {
      "id": "2",
      "role": "user",
      "content": "임플란트 가격이 궁금합니다",
      "timestamp": "2025-10-13T12:01:00Z"
    }
  ]
}
```

---

## 유입 경로별 통계 조회

Supabase SQL Editor에서 실행:

```sql
-- 유입 경로별 통계
SELECT
  referrer_source,
  COUNT(*) as count,
  COUNT(DISTINCT phone) as unique_users
FROM consultation_logs
GROUP BY referrer_source
ORDER BY count DESC;

-- 오늘의 유입 경로별 상담 수
SELECT
  referrer_source,
  COUNT(*) as today_count
FROM consultation_logs
WHERE created_at >= CURRENT_DATE
GROUP BY referrer_source
ORDER BY today_count DESC;

-- UTM 캠페인별 통계
SELECT
  utm_campaign,
  utm_source,
  COUNT(*) as count
FROM consultation_logs
WHERE utm_campaign IS NOT NULL
GROUP BY utm_campaign, utm_source
ORDER BY count DESC;
```

---

## 트러블슈팅

### 1. Referrer 정보가 저장되지 않을 때
- 브라우저 개발자 도구 > Console에서 에러 확인
- sessionStorage에 `referrerData` 키가 있는지 확인
- `document.referrer`가 비어있을 수 있음 (직접 접속 또는 보안 정책)

### 2. Supabase 저장 실패
- `.env.local`에 Supabase 환경 변수 확인
- Supabase 프로젝트에서 테이블이 생성되었는지 확인
- RLS 정책이 올바르게 설정되었는지 확인
- 네트워크 탭에서 API 요청/응답 확인

### 3. 중복 저장 문제
- API는 30분 이내 같은 전화번호는 업데이트만 수행
- `hasLogSavedRef`로 중복 호출 방지
- 개발 환경에서 `console.log`로 확인

---

## 보안 고려사항

### 1. Row Level Security (RLS)
- 현재는 INSERT만 허용 (누구나 상담 로그 저장 가능)
- SELECT는 인증된 사용자만 가능하도록 설정 가능

### 2. 전화번호 암호화 (선택사항)
추후 필요시 전화번호 암호화 추가:

```typescript
// 암호화 라이브러리 설치: npm install bcrypt
import bcrypt from 'bcrypt';

const hashedPhone = await bcrypt.hash(phone, 10);
```

### 3. API 인증 (선택사항)
관리자 조회 API에 인증 미들웨어 추가 가능

---

## 파일 구조

```
src/
├── app/
│   ├── api/
│   │   └── consultations/
│   │       └── route.ts              # 상담 로그 저장/조회 API
│   └── layout.tsx                    # ReferrerTracker 추가
├── components/
│   ├── ChatInterface.tsx             # 자동 저장 기능 추가
│   ├── ConsultationForm.tsx          # Referrer 데이터 포함
│   └── ReferrerTracker.tsx           # 유입 경로 추적 컴포넌트
└── lib/
    ├── referrer-tracker.ts           # 유입 경로 유틸리티 함수
    └── types.ts                      # ReferrerData, ConsultationLog 타입

supabase-schema.sql                   # 테이블 생성 스크립트
```

---

## 다음 단계 (선택사항)

1. **대시보드 구현**: 유입 경로별 통계 시각화
2. **알림 시스템**: 새 상담 로그 생성 시 알림 (Slack, 이메일 등)
3. **분석 기능**: 유입 경로별 전환율 분석
4. **UTM 파라미터 자동화**: 마케팅 링크 자동 생성 도구
5. **관리자 페이지**: 상담 로그 조회 및 필터링 UI

---

## 문의 및 지원

문제가 발생하거나 추가 기능이 필요하면 개발자에게 문의하세요.
