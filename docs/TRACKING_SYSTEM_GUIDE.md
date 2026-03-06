# 네이버 플레이스 순위추적 & 블로그 노출추적 시스템 가이드

이 문서는 네이버 검색 결과에서 플레이스 순위와 블로그 노출 여부를 추적하는 시스템의 구현 가이드입니다.

## 목차

1. [시스템 개요](#1-시스템-개요)
2. [기술 스택](#2-기술-스택)
3. [데이터베이스 스키마](#3-데이터베이스-스키마)
4. [플레이스 순위추적 시스템](#4-플레이스-순위추적-시스템)
5. [블로그 노출추적 시스템](#5-블로그-노출추적-시스템)
6. [UI 컴포넌트](#6-ui-컴포넌트)
7. [Cron 자동화](#7-cron-자동화)
8. [환경 변수 설정](#8-환경-변수-설정)
9. [배포 및 운영](#9-배포-및-운영)

---

## 1. 시스템 개요

### 1.1 플레이스 순위추적

네이버 지도/플레이스 검색 결과에서 특정 업체가 몇 번째에 노출되는지 추적합니다.

**주요 기능:**
- 키워드별 플레이스 순위 확인
- 광고 포함/미포함 순위 구분
- 1페이지(1-5위) 노출 여부 확인
- 불필요한 광고로 인한 순위 밀림 감지
- 일별 순위 변화 추적 및 월별 통계

### 1.2 블로그 노출추적

네이버 모바일 통합검색에서 특정 블로그의 글이 1페이지에 노출되는지 추적합니다.

**주요 기능:**
- 키워드별 블로그 노출 여부 확인
- 노출 영역 구분 (VIEW, 웹, 인플루언서, 블로그)
- 노출된 글의 제목과 URL 저장
- 복수 글 노출 시 모두 기록
- 일별 노출 현황 추적

---

## 2. 기술 스택

```
Framework: Next.js 15 (App Router)
Language: TypeScript
Database: Supabase (PostgreSQL)
Styling: Tailwind CSS
Cron: Vercel Cron Jobs
```

### 2.1 핵심 라이브러리

```json
{
  "@supabase/supabase-js": "^2.x",
  "next": "15.x"
}
```

---

## 3. 데이터베이스 스키마

### 3.1 플레이스 순위추적 테이블

```sql
-- 설정 테이블
CREATE TABLE rank_tracking_configs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  target_url TEXT NOT NULL,           -- 추적할 플레이스 URL (예: place.naver.com/restaurant/1234)
  keywords TEXT[] NOT NULL DEFAULT '{}', -- 추적할 키워드 배열
  is_active BOOLEAN DEFAULT true,     -- 활성화 여부
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 결과 테이블
CREATE TABLE rank_tracking_results (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  config_id UUID REFERENCES rank_tracking_configs(id) ON DELETE CASCADE,
  check_date DATE NOT NULL,           -- 체크 날짜 (YYYY-MM-DD)
  checked_at TIMESTAMPTZ NOT NULL,    -- 체크 시각
  keyword TEXT NOT NULL,              -- 검색 키워드
  position INTEGER,                   -- 순위 (광고 포함)
  position_without_ad INTEGER,        -- 순위 (광고 제외)
  is_first_page BOOLEAN DEFAULT false,-- 1페이지 노출 여부
  has_unnecessary_ad BOOLEAN DEFAULT false, -- 불필요 광고로 순위 밀림
  is_first_page_by_ad BOOLEAN DEFAULT false, -- 광고로 1페이지 진입
  created_at TIMESTAMPTZ DEFAULT NOW(),

  UNIQUE(config_id, check_date, keyword)
);

-- 인덱스
CREATE INDEX idx_rank_results_config_date ON rank_tracking_results(config_id, check_date);
CREATE INDEX idx_rank_results_keyword ON rank_tracking_results(keyword);
```

### 3.2 블로그 노출추적 테이블

```sql
-- 설정 테이블
CREATE TABLE blog_tracking_configs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  blogs JSONB NOT NULL DEFAULT '[]',  -- 블로그 목록 [{id: "uuid", blogId: "네이버블로그ID"}]
  keywords TEXT[] NOT NULL DEFAULT '{}', -- 추적할 키워드 배열
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 결과 테이블
CREATE TABLE blog_tracking_results (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  config_id UUID REFERENCES blog_tracking_configs(id) ON DELETE CASCADE,
  check_date DATE NOT NULL,
  checked_at TIMESTAMPTZ NOT NULL,
  keyword TEXT NOT NULL,
  blog_id TEXT NOT NULL,              -- 블로그 설정의 id (UUID)
  is_first_page BOOLEAN DEFAULT false,
  exposed_posts JSONB DEFAULT '[]',   -- 노출된 글 [{url, title, area}]
  created_at TIMESTAMPTZ DEFAULT NOW(),

  UNIQUE(config_id, check_date, keyword, blog_id)
);

-- 인덱스
CREATE INDEX idx_blog_results_config_date ON blog_tracking_results(config_id, check_date);
```

### 3.3 Supabase 클라이언트 설정

```typescript
// src/lib/supabase/server.ts
import { createServerClient, type CookieOptions } from '@supabase/ssr';
import { createClient as createSupabaseClient } from '@supabase/supabase-js';
import { cookies } from 'next/headers';

// 일반 API용 (쿠키 기반 인증)
export function createClient() {
  const cookieStore = cookies();
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value;
        },
        set(name: string, value: string, options: CookieOptions) {
          try {
            cookieStore.set({ name, value, ...options });
          } catch (error) {}
        },
        remove(name: string, options: CookieOptions) {
          try {
            cookieStore.set({ name, value: '', ...options });
          } catch (error) {}
        },
      },
    }
  );
}

// Cron/서비스용 (Service Role - RLS 우회)
export function createServiceClient() {
  return createSupabaseClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );
}
```

---

## 4. 플레이스 순위추적 시스템

### 4.1 아키텍처

```
┌─────────────────────────────────────────────────────────────┐
│                      RankTracker UI                          │
│  ┌─────────┐  ┌──────────┐  ┌────────────┐  ┌────────────┐  │
│  │키워드관리│  │ 수동체크  │  │ 결과 매트릭스│  │   통계     │  │
│  └────┬────┘  └────┬─────┘  └──────┬─────┘  └──────┬─────┘  │
└───────┼───────────┼────────────────┼───────────────┼────────┘
        │           │                │               │
        ▼           ▼                ▼               ▼
┌───────────────────────────────────────────────────────────────┐
│                        API Layer                               │
│  ┌──────────────┐  ┌─────────────┐  ┌───────────────────────┐ │
│  │/keyword-validate│ │/rank-check │  │/rank-tracking/results│  │
│  │/rank-tracking/  │ │            │  │                       │ │
│  │config          │ │            │  │                       │ │
│  └───────┬────────┘ └──────┬─────┘  └───────────┬───────────┘ │
└──────────┼─────────────────┼────────────────────┼─────────────┘
           │                 │                    │
           ▼                 ▼                    ▼
┌──────────────────┐  ┌──────────────────┐  ┌─────────────────┐
│    Supabase DB   │  │  Naver Place API │  │   Supabase DB   │
│ (config 저장)     │  │ (순위 스크래핑)   │  │  (결과 저장)    │
└──────────────────┘  └──────────────────┘  └─────────────────┘
```

### 4.2 핵심 API: 순위 체크 (`/api/rank-check`)

네이버 지도 검색 결과에서 특정 플레이스의 순위를 파싱합니다.

```typescript
// src/app/api/rank-check/route.ts
import { NextRequest, NextResponse } from 'next/server';

interface RankCheckResult {
  keyword: string;
  targetUrl: string;
  position: number | null;           // 광고 포함 순위
  positionWithoutAd: number | null;  // 광고 제외 순위
  isFirstPage: boolean;              // 1-5위 여부
  hasUnnecessaryAd: boolean;         // 불필요 광고로 순위 밀림
  isFirstPageByAd: boolean;          // 광고로 1페이지
  error?: string;
}

export async function POST(request: NextRequest) {
  try {
    const { keyword, targetUrl } = await request.json();

    if (!keyword || !targetUrl) {
      return NextResponse.json({
        keyword,
        targetUrl,
        position: null,
        positionWithoutAd: null,
        isFirstPage: false,
        hasUnnecessaryAd: false,
        isFirstPageByAd: false,
        error: '키워드와 타겟 URL이 필요합니다.',
      } as RankCheckResult);
    }

    // 타겟 URL에서 플레이스 ID 추출
    // URL 형식: https://map.naver.com/p/entry/place/1234567890
    //          https://m.place.naver.com/restaurant/1234567890
    const placeIdMatch = targetUrl.match(/(?:place|restaurant|cafe|hospital|beauty)\/(\d+)/);
    if (!placeIdMatch) {
      return NextResponse.json({
        keyword,
        targetUrl,
        position: null,
        positionWithoutAd: null,
        isFirstPage: false,
        hasUnnecessaryAd: false,
        isFirstPageByAd: false,
        error: '플레이스 ID를 추출할 수 없습니다.',
      } as RankCheckResult);
    }

    const targetPlaceId = placeIdMatch[1];
    console.log(`🔍 순위 검색: ${keyword} - 타겟 ID: ${targetPlaceId}`);

    // 네이버 지도 검색 API 호출
    const encodedKeyword = encodeURIComponent(keyword);
    const searchUrl = `https://pcmap.place.naver.com/place/list?query=${encodedKeyword}&x=129.0756416&y=35.1595454&clientX=129.0756416&clientY=35.1595454&bounds=128.6830615%3B34.8671608%3B129.4682217%3B35.4519300&ts=${Date.now()}`;

    const response = await fetch(searchUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Accept': 'text/html,application/xhtml+xml',
        'Accept-Language': 'ko-KR,ko;q=0.9',
        'Referer': 'https://map.naver.com/',
      },
    });

    if (!response.ok) {
      throw new Error(`검색 실패: ${response.status}`);
    }

    const html = await response.text();

    // __APOLLO_STATE__ JSON 파싱
    // 네이버 지도는 React/Apollo를 사용하며, 초기 데이터가 이 변수에 저장됨
    const apolloMatch = html.match(/__APOLLO_STATE__\s*=\s*({[\s\S]*?});/);
    if (!apolloMatch) {
      return NextResponse.json({
        keyword,
        targetUrl,
        position: null,
        positionWithoutAd: null,
        isFirstPage: false,
        hasUnnecessaryAd: false,
        isFirstPageByAd: false,
        error: '검색 결과를 파싱할 수 없습니다.',
      } as RankCheckResult);
    }

    const apolloState = JSON.parse(apolloMatch[1]);

    // 광고 플레이스 ID 추출 (HTML에서 광고 마크업 패턴 찾기)
    const adPlaceIds = new Set<string>();
    const adPatternRegex = /data-id="(\d+)"[^>]*class="[^"]*(?:ad_area|_advertising)[^"]*"/gi;
    let adMatch;
    while ((adMatch = adPatternRegex.exec(html)) !== null) {
      adPlaceIds.add(adMatch[1]);
    }

    // 또 다른 광고 패턴: place_ad_area 클래스
    const adAreaRegex = /place_ad_area[^>]*data-(?:place-)?id="(\d+)"/gi;
    while ((adMatch = adAreaRegex.exec(html)) !== null) {
      adPlaceIds.add(adMatch[1]);
    }

    // Apollo State에서 PlaceListResult 찾기
    const places: { id: string; isAd: boolean }[] = [];

    for (const key of Object.keys(apolloState)) {
      // PlaceListResult:{"input":{...}} 형식의 키 찾기
      if (key.startsWith('PlaceListResult:')) {
        const result = apolloState[key];
        if (result?.items) {
          for (const item of result.items) {
            // item은 {"__ref": "Place:1234567890"} 형식
            if (item.__ref) {
              const placeId = item.__ref.replace('Place:', '');
              const placeData = apolloState[item.__ref];

              // 광고 여부 확인
              const isAd = adPlaceIds.has(placeId) ||
                          placeData?.isAdPlace === true ||
                          placeData?.hasAd === true;

              places.push({ id: placeId, isAd });
            }
          }
        }
        break; // 첫 번째 결과만 사용
      }
    }

    // 순위 계산
    let position: number | null = null;
    let positionWithoutAd: number | null = null;
    let nonAdIndex = 0;

    for (let i = 0; i < places.length; i++) {
      const place = places[i];

      if (!place.isAd) {
        nonAdIndex++;
      }

      if (place.id === targetPlaceId) {
        position = i + 1; // 1-based index
        positionWithoutAd = place.isAd ? null : nonAdIndex;
        break;
      }
    }

    // 결과 분석
    const isFirstPage = position !== null && position <= 5;
    const isFirstPageWithoutAd = positionWithoutAd !== null && positionWithoutAd <= 5;

    // 불필요 광고: 광고 없이는 1페이지인데 광고 포함하면 밀려나는 경우
    const hasUnnecessaryAd = isFirstPageWithoutAd && !isFirstPage;

    // 광고로 1페이지: 광고 순위로만 1페이지인 경우 (자사 광고)
    const isFirstPageByAd = isFirstPage && position !== positionWithoutAd &&
                           positionWithoutAd !== null && positionWithoutAd > 5;

    console.log(`✅ ${keyword}: ${position}위 (광고제외: ${positionWithoutAd}위)`);

    return NextResponse.json({
      keyword,
      targetUrl,
      position,
      positionWithoutAd,
      isFirstPage,
      hasUnnecessaryAd,
      isFirstPageByAd,
    } as RankCheckResult);

  } catch (error) {
    console.error('순위 체크 오류:', error);
    return NextResponse.json({
      keyword: '',
      targetUrl: '',
      position: null,
      positionWithoutAd: null,
      isFirstPage: false,
      hasUnnecessaryAd: false,
      isFirstPageByAd: false,
      error: error instanceof Error ? error.message : '알 수 없는 오류',
    } as RankCheckResult);
  }
}
```

### 4.3 키워드 유효성 검증 API (`/api/keyword-validate`)

키워드가 플레이스 섹션을 가지는지 확인합니다. 플레이스 영역이 없는 키워드는 순위 추적이 불가능합니다.

**검증 목적:**
- 모든 키워드가 네이버 지도 검색 결과에서 플레이스 영역을 가지는지 확인
- 플레이스 영역이 없는 키워드는 순위 추적이 불가능하므로 사전에 필터링
- 예: "부산남구임플란트" → 플레이스 O, "임플란트 가격" → 플레이스 X

```typescript
// src/app/api/keyword-validate/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { keyword } = await request.json();

    if (!keyword) {
      return NextResponse.json({
        hasPlaceSection: false,
        error: '키워드가 필요합니다.'
      });
    }

    // 네이버 모바일 통합검색에서 플레이스 영역 존재 여부 확인
    const encodedKeyword = encodeURIComponent(keyword);
    const searchUrl = `https://m.search.naver.com/search.naver?where=m&query=${encodedKeyword}`;

    const response = await fetch(searchUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X)',
        'Accept': 'text/html',
        'Accept-Language': 'ko-KR,ko;q=0.9',
      },
    });

    const html = await response.text();

    // 플레이스 영역 존재 확인 패턴들
    // 네이버 검색결과에서 플레이스/지도 영역이 있으면 해당 클래스명이 존재
    const hasPlaceSection =
      html.includes('place_section') ||      // 플레이스 섹션 wrapper
      html.includes('place_bluelink') ||     // 플레이스 더보기 링크
      html.includes('fds-places') ||         // 플레이스 영역 (신규 패턴)
      html.includes('place.naver.com') ||    // 플레이스 URL
      html.includes('플레이스');              // 플레이스 텍스트

    return NextResponse.json({
      hasPlaceSection,
      keyword,
    });

  } catch (error) {
    return NextResponse.json({
      hasPlaceSection: false,
      error: error instanceof Error ? error.message : '검증 실패',
    });
  }
}
```

### 4.4 키워드 검증 UI 흐름

#### 검증 상태 (Validation Status)

키워드는 3가지 검증 상태를 가집니다:

| 상태 | 의미 | UI 표시 |
|------|------|---------|
| `valid` | 검증 완료, 플레이스 영역 있음 | 회색 배경 |
| `invalid` | 검증 완료, 플레이스 영역 없음 | 빨간 배경 + ⚠ 아이콘 |
| `pending` | 아직 검증되지 않음 | 노란 배경 + ? 아이콘 |

```typescript
// 키워드 유효성 상태 타입
type KeywordValidationStatus = 'valid' | 'invalid' | 'pending';

// 상태 관리
const [keywordValidation, setKeywordValidation] = useState<Record<string, KeywordValidationStatus>>({});
```

#### 키워드 추가 시 흐름

```typescript
const addKeyword = () => {
  const trimmed = newKeyword.trim();
  if (trimmed && !keywords.includes(trimmed)) {
    // 1. 키워드 목록에 추가
    setKeywords([...keywords, trimmed]);

    // 2. pending 상태로 설정 (저장 시 검증됨)
    setKeywordValidation(prev => ({ ...prev, [trimmed]: 'pending' }));

    setNewKeyword('');
  }
};
```

#### 설정 저장 시 검증 흐름

```typescript
const saveConfig = async (): Promise<Config | null> => {
  // 1. 이미 invalid인 키워드가 있으면 저장 차단
  const currentInvalid = keywords.filter(k => keywordValidation[k] === 'invalid');
  if (currentInvalid.length > 0) {
    alert(`유효하지 않은 키워드가 있습니다: ${currentInvalid.join(', ')}\n해당 키워드를 제거한 후 다시 저장해주세요.`);
    return null;
  }

  // 2. 아직 검증되지 않은 키워드만 추출
  const unvalidatedKeywords = keywords.filter(k => keywordValidation[k] !== 'valid');

  if (unvalidatedKeywords.length > 0) {
    // 3. 검증 진행 상태 표시
    setValidationState({
      isValidating: true,
      progress: 0,
      total: unvalidatedKeywords.length,
      currentKeyword: '',
    });

    const newValidation = { ...keywordValidation };
    const invalidKeywords: string[] = [];

    // 4. 각 키워드 순차 검증
    for (let i = 0; i < unvalidatedKeywords.length; i++) {
      const keyword = unvalidatedKeywords[i];

      // 진행 상태 업데이트
      setValidationState(prev => ({
        ...prev,
        progress: i + 1,
        currentKeyword: keyword,
      }));

      // API 호출로 검증
      const isValid = await validateKeyword(keyword);
      newValidation[keyword] = isValid ? 'valid' : 'invalid';

      if (!isValid) {
        invalidKeywords.push(keyword);
      }

      // 네이버 요청 제한 회피 (300ms 간격)
      if (i < unvalidatedKeywords.length - 1) {
        await new Promise(resolve => setTimeout(resolve, 300));
      }
    }

    setKeywordValidation(newValidation);
    setValidationState({ isValidating: false, progress: 0, total: 0, currentKeyword: '' });

    // 5. 유효하지 않은 키워드가 있으면 저장 중단
    if (invalidKeywords.length > 0) {
      alert(`다음 키워드는 플레이스 영역이 없어 저장할 수 없습니다:\n${invalidKeywords.join(', ')}`);
      return null;
    }
  }

  // 6. 모든 키워드가 유효하면 저장 진행
  // ... 저장 로직
};

// 단일 키워드 검증 함수
const validateKeyword = async (keyword: string): Promise<boolean> => {
  try {
    const res = await fetch('/api/keyword-validate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ keyword }),
    });
    const data = await res.json();
    return data.hasPlaceSection === true;
  } catch {
    return false;
  }
};
```

#### 검증 진행 UI

```tsx
// 검증 진행 상태
interface ValidationState {
  isValidating: boolean;
  progress: number;      // 현재 검증 완료 수
  total: number;         // 전체 검증 대상 수
  currentKeyword: string; // 현재 검증 중인 키워드
}

// 검증 진행 바
{validationState.isValidating && (
  <div className="mb-4 space-y-2">
    {/* 프로그레스 바 */}
    <div className="w-full bg-gray-200 rounded-full h-2">
      <div
        className="bg-yellow-500 h-2 rounded-full transition-all duration-300"
        style={{ width: `${(validationState.progress / validationState.total) * 100}%` }}
      />
    </div>
    {/* 현재 검증 중인 키워드 표시 */}
    <p className="text-sm text-gray-500 text-center">
      검증 중: {validationState.currentKeyword}
    </p>
  </div>
)}
```

#### 키워드 칩 UI (상태별 스타일)

```tsx
{keywords.map((keyword) => {
  const status = keywordValidation[keyword] || 'pending';

  // 상태별 배경색
  const bgColor = status === 'invalid'
    ? 'bg-red-100 text-red-700 border border-red-300'    // 빨간색: 유효하지 않음
    : status === 'pending'
      ? 'bg-yellow-50 text-yellow-700 border border-yellow-200'  // 노란색: 검증 전
      : 'bg-gray-100 text-gray-700';  // 회색: 유효함

  return (
    <span
      key={keyword}
      className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm ${bgColor}`}
    >
      {/* 상태 아이콘 */}
      {status === 'invalid' && <span className="text-red-500">⚠</span>}
      {status === 'pending' && <span className="text-yellow-500">?</span>}

      {keyword}

      {/* 삭제 버튼 */}
      <button
        onClick={() => removeKeyword(keyword)}
        disabled={validationState.isValidating}
        className="text-gray-500 hover:text-red-500 disabled:text-gray-300"
      >
        ×
      </button>
    </span>
  );
})}
```

#### 전체 검증 흐름 다이어그램

```
┌─────────────────────────────────────────────────────────────────┐
│                    키워드 추가 흐름                              │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  1. 사용자가 키워드 입력 → [추가] 클릭                          │
│                    ↓                                            │
│  2. keywords 배열에 추가                                        │
│                    ↓                                            │
│  3. keywordValidation[keyword] = 'pending' (노란색)             │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                    설정 저장 흐름                                │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  1. [설정 저장] 클릭                                            │
│                    ↓                                            │
│  2. invalid 상태 키워드 있음? ──YES──→ 저장 차단, 경고 표시     │
│                    ↓ NO                                         │
│  3. pending 상태 키워드 추출                                    │
│                    ↓                                            │
│  4. 없음? ──YES──→ 바로 저장                                    │
│                    ↓ NO                                         │
│  5. 검증 시작 (프로그레스 바 표시)                              │
│                    ↓                                            │
│  6. 각 키워드마다:                                              │
│     └─ /api/keyword-validate 호출                               │
│     └─ hasPlaceSection 확인                                     │
│     └─ valid 또는 invalid로 상태 변경                           │
│     └─ 300ms 대기 (Rate limiting)                               │
│                    ↓                                            │
│  7. invalid 키워드 발견? ──YES──→ 저장 차단, 경고 표시          │
│                    ↓ NO                                         │
│  8. /api/rank-tracking/config POST 호출                         │
│                    ↓                                            │
│  9. 저장 완료 ✓                                                 │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

#### 검증 상태별 색상 정리

| 상태 | 배경색 | 테두리 | 아이콘 | 설명 |
|------|--------|--------|--------|------|
| `valid` | `bg-gray-100` | - | - | 검증 완료, 사용 가능 |
| `invalid` | `bg-red-100` | `border-red-300` | ⚠ (빨간) | 플레이스 영역 없음, 제거 필요 |
| `pending` | `bg-yellow-50` | `border-yellow-200` | ? (노란) | 아직 검증 안됨 |

### 4.5 설정 API (`/api/rank-tracking/config`)

```typescript
// src/app/api/rank-tracking/config/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { createServiceClient } from '@/lib/supabase/server';

// GET: 현재 활성 설정 조회
export async function GET() {
  try {
    const supabase = createServiceClient();

    const { data, error } = await supabase
      .from('rank_tracking_configs')
      .select('*')
      .eq('is_active', true)
      .order('created_at', { ascending: false })
      .limit(1)
      .single();

    if (error && error.code !== 'PGRST116') { // PGRST116 = no rows
      throw error;
    }

    return NextResponse.json({ config: data || null });
  } catch (error) {
    return NextResponse.json({ error: '설정 조회 실패' }, { status: 500 });
  }
}

// POST: 설정 생성/수정
export async function POST(request: NextRequest) {
  try {
    const { targetUrl, keywords } = await request.json();
    const supabase = createServiceClient();

    // 기존 활성 설정 비활성화
    await supabase
      .from('rank_tracking_configs')
      .update({ is_active: false })
      .eq('is_active', true);

    // 새 설정 생성
    const { data, error } = await supabase
      .from('rank_tracking_configs')
      .insert({
        target_url: targetUrl,
        keywords,
        is_active: true,
      })
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json({ config: data });
  } catch (error) {
    return NextResponse.json({ error: '설정 저장 실패' }, { status: 500 });
  }
}
```

### 4.6 결과 API (`/api/rank-tracking/results`)

```typescript
// src/app/api/rank-tracking/results/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { createServiceClient } from '@/lib/supabase/server';

interface KeywordResult {
  keyword: string;
  position: number | null;
  positionWithoutAd: number | null;
  isFirstPage: boolean;
  hasUnnecessaryAd: boolean;
  isFirstPageByAd: boolean;
}

// GET: 월별 결과 조회
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const configId = searchParams.get('configId');
    const year = parseInt(searchParams.get('year') || new Date().getFullYear().toString());
    const month = parseInt(searchParams.get('month') || (new Date().getMonth() + 1).toString());

    if (!configId) {
      return NextResponse.json({ error: 'configId 필요' }, { status: 400 });
    }

    const supabase = createServiceClient();

    // 해당 월의 날짜 범위
    const startDate = `${year}-${String(month).padStart(2, '0')}-01`;
    const lastDay = new Date(year, month, 0).getDate();
    const endDate = `${year}-${String(month).padStart(2, '0')}-${String(lastDay).padStart(2, '0')}`;

    const { data, error } = await supabase
      .from('rank_tracking_results')
      .select('*')
      .eq('config_id', configId)
      .gte('check_date', startDate)
      .lte('check_date', endDate)
      .order('check_date', { ascending: false });

    if (error) throw error;

    // 날짜별로 그룹화
    const groupedByDate: Record<string, {
      date: string;
      checkedAt: string;
      results: KeywordResult[];
    }> = {};

    data?.forEach(row => {
      const dateStr = row.check_date;
      if (!groupedByDate[dateStr]) {
        groupedByDate[dateStr] = {
          date: dateStr,
          checkedAt: row.checked_at,
          results: [],
        };
      }

      groupedByDate[dateStr].results.push({
        keyword: row.keyword,
        position: row.position,
        positionWithoutAd: row.position_without_ad,
        isFirstPage: row.is_first_page,
        hasUnnecessaryAd: row.has_unnecessary_ad,
        isFirstPageByAd: row.is_first_page_by_ad,
      });
    });

    const historyData = Object.values(groupedByDate).sort(
      (a, b) => b.date.localeCompare(a.date)
    );

    return NextResponse.json({ historyData });
  } catch (error) {
    return NextResponse.json({ error: '결과 조회 실패' }, { status: 500 });
  }
}

// POST: 결과 저장
export async function POST(request: NextRequest) {
  try {
    const { configId, date, checkedAt, results } = await request.json();
    const supabase = createServiceClient();

    // 해당 날짜의 기존 결과 삭제
    await supabase
      .from('rank_tracking_results')
      .delete()
      .eq('config_id', configId)
      .eq('check_date', date);

    // 새 결과 삽입
    const insertData = results.map((r: KeywordResult) => ({
      config_id: configId,
      check_date: date,
      checked_at: checkedAt,
      keyword: r.keyword,
      position: r.position,
      position_without_ad: r.positionWithoutAd,
      is_first_page: r.isFirstPage,
      has_unnecessary_ad: r.hasUnnecessaryAd,
      is_first_page_by_ad: r.isFirstPageByAd,
    }));

    const { error } = await supabase
      .from('rank_tracking_results')
      .insert(insertData);

    if (error) throw error;

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: '결과 저장 실패' }, { status: 500 });
  }
}
```

---

## 5. 블로그 노출추적 시스템

### 5.1 아키텍처

```
┌─────────────────────────────────────────────────────────────┐
│                     BlogTracker UI                           │
│  ┌─────────┐  ┌──────────┐  ┌────────────┐  ┌────────────┐  │
│  │블로그관리│  │ 수동체크  │  │ 결과 매트릭스│  │ 노출글팝업 │  │
│  └────┬────┘  └────┬─────┘  └──────┬─────┘  └──────┬─────┘  │
└───────┼───────────┼────────────────┼───────────────┼────────┘
        │           │                │               │
        ▼           ▼                ▼               ▼
┌───────────────────────────────────────────────────────────────┐
│                        API Layer                               │
│  ┌──────────────────┐  ┌─────────────────────────────────────┐│
│  │/blog-tracking/   │  │/blog-check                          ││
│  │config            │  │(노출 체크 + 제목/영역 파싱)          ││
│  │/blog-tracking/   │  │                                      ││
│  │results           │  │                                      ││
│  └────────┬─────────┘  └────────────────┬────────────────────┘│
└───────────┼─────────────────────────────┼─────────────────────┘
            │                             │
            ▼                             ▼
┌──────────────────────┐        ┌─────────────────────────────┐
│     Supabase DB      │        │    Naver Mobile Search      │
│  (설정/결과 저장)     │        │    (HTML 스크래핑)           │
└──────────────────────┘        └─────────────────────────────┘
```

### 5.2 핵심 API: 블로그 노출 체크 (`/api/blog-check`)

네이버 모바일 통합검색에서 특정 블로그의 글 노출 여부와 상세 정보를 파싱합니다.

```typescript
// src/app/api/blog-check/route.ts
import { NextRequest, NextResponse } from 'next/server';

interface ExposedPost {
  url: string;
  title: string;
  area: string; // VIEW, 웹, 블로그, 인플루언서 등
}

interface BlogCheckResult {
  keyword: string;
  blogId: string;
  isFirstPage: boolean;
  exposedPosts: ExposedPost[];
  error?: string;
}

export async function POST(request: NextRequest) {
  try {
    const { keyword, blogId } = await request.json();

    if (!keyword || !blogId) {
      return NextResponse.json({
        keyword,
        blogId,
        isFirstPage: false,
        exposedPosts: [],
        error: '키워드와 블로그 ID가 필요합니다.',
      } as BlogCheckResult);
    }

    console.log(`🔍 블로그 검색 (모바일): ${keyword} - @${blogId}`);

    // 모바일 네이버 통합 검색
    const encodedKeyword = encodeURIComponent(keyword);
    const searchUrl = `https://m.search.naver.com/search.naver?where=m&query=${encodedKeyword}`;

    const response = await fetch(searchUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
        'Accept-Language': 'ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7',
        'Cache-Control': 'no-cache',
      },
    });

    if (!response.ok) {
      return NextResponse.json({
        keyword,
        blogId,
        isFirstPage: false,
        exposedPosts: [],
        error: `검색 실패: ${response.status}`,
      } as BlogCheckResult);
    }

    const html = await response.text();

    // HTML 태그 제거 함수 (mark, b, strong 등의 하이라이트 태그 처리)
    const stripHtmlTags = (str: string): string => {
      return str.replace(/<\/?[^>]+(>|$)/g, '').trim();
    };

    // 제목 유효성 검사 (URL이나 날짜가 아닌 실제 제목인지)
    const isValidTitle = (text: string): boolean => {
      const cleaned = stripHtmlTags(text).trim();
      return cleaned.length >= 10 &&
             cleaned.length <= 100 &&
             !cleaned.includes('blog.naver.com') &&
             !cleaned.includes('naver.com') &&
             !cleaned.includes('instagram.com') &&
             !cleaned.includes('youtube.com') &&
             !/^\d{4}\.\d{2}\.\d{2}/.test(cleaned) && // 날짜 형식
             !/^\d+$/.test(cleaned) && // 숫자만
             !/^[a-z0-9]+$/i.test(cleaned); // ID만
    };

    // 영역 타입 감지 함수
    // 네이버 검색결과의 각 영역은 특정 클래스명으로 구분됨
    const detectAreaType = (contextHtml: string): string => {
      if (contextHtml.includes('fds-ugc-single-intention') || contextHtml.includes('ugc')) {
        return 'VIEW'; // VIEW 탭 콘텐츠
      }
      if (contextHtml.includes('fds-web-root') || contextHtml.includes('fds-web-list') || contextHtml.includes('fds-web-doc')) {
        return '웹'; // 웹문서 영역
      }
      if (contextHtml.includes('fds-influencer') || contextHtml.includes('influencer')) {
        return '인플루언서'; // 인플루언서 영역
      }
      if (contextHtml.includes('blog_list') || contextHtml.includes('_blog_section')) {
        return '블로그'; // 블로그 영역
      }
      return '기타';
    };

    // 블로그 URL 패턴으로 모든 출현 위치 찾기
    const urlPattern = new RegExp(
      `https?://(?:m\\.)?blog\\.naver\\.com/${blogId}/(\\d+)`,
      'gi'
    );

    // Map을 사용해 동일 글의 여러 출현을 병합
    const postDataMap = new Map<string, { url: string; title: string; area: string }>();

    let urlMatch;
    while ((urlMatch = urlPattern.exec(html)) !== null) {
      const url = urlMatch[0];
      const postId = urlMatch[1];
      const urlIndex = urlMatch.index;

      // URL 주변 컨텍스트 추출 (앞 1500자, 뒤 500자)
      // 제목과 영역 정보가 URL 근처에 있음
      const contextStart = Math.max(0, urlIndex - 1500);
      const contextEnd = Math.min(html.length, urlIndex + 500);
      const context = html.substring(contextStart, contextEnd);

      // 영역 감지
      const area = detectAreaType(context);

      // 제목 추출: sds-comps-text 클래스 내용
      let title = '';

      // 패턴 1: href="URL" 바로 뒤의 sds-comps-text
      const escapedUrl = url.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const linkTitlePattern = new RegExp(
        `href=["']${escapedUrl}["'][^>]*>[^<]*<span[^>]*class="[^"]*sds-comps-text[^"]*"[^>]*>([\\s\\S]*?)</span>`,
        'i'
      );
      const linkMatch = linkTitlePattern.exec(context);
      if (linkMatch) {
        const rawTitle = stripHtmlTags(linkMatch[1]);
        if (isValidTitle(rawTitle)) {
          title = rawTitle;
        }
      }

      // 패턴 2: 컨텍스트 내 모든 sds-comps-text에서 유효한 제목 찾기
      if (!title) {
        const allTitlesPattern = /<span[^>]*class="[^"]*sds-comps-text[^"]*"[^>]*>([\s\S]*?)<\/span>/gi;
        let titleMatch;
        while ((titleMatch = allTitlesPattern.exec(context)) !== null) {
          const rawTitle = stripHtmlTags(titleMatch[1]);
          if (isValidTitle(rawTitle)) {
            title = rawTitle;
            break;
          }
        }
      }

      // 기존 데이터와 병합 (제목/영역이 있는 것 우선)
      const existing = postDataMap.get(postId);
      if (!existing) {
        postDataMap.set(postId, { url, title, area });
      } else {
        // 제목이 없었는데 새로 찾은 경우 업데이트
        if (!existing.title && title) {
          existing.title = title;
        }
        // 영역이 '기타'였는데 구체적인 영역 찾은 경우 업데이트
        if (existing.area === '기타' && area !== '기타') {
          existing.area = area;
        }
      }
    }

    // Map을 배열로 변환
    const exposedPosts: ExposedPost[] = [];
    for (const [postId, data] of postDataMap) {
      exposedPosts.push({
        url: data.url,
        title: data.title || '제목 없음',
        area: data.area
      });
      console.log(`📝 [${data.area}] ${data.title ? data.title.substring(0, 30) + '...' : '제목 없음'}`);
    }

    const isFirstPage = exposedPosts.length > 0;

    return NextResponse.json({
      keyword,
      blogId,
      isFirstPage,
      exposedPosts,
    } as BlogCheckResult);

  } catch (error) {
    console.error('블로그 체크 오류:', error);
    return NextResponse.json({
      keyword: '',
      blogId: '',
      isFirstPage: false,
      exposedPosts: [],
      error: error instanceof Error ? error.message : '알 수 없는 오류',
    } as BlogCheckResult);
  }
}
```

### 5.3 노출글 영역 감지 및 저장 로직 상세

블로그 노출 체크의 핵심은 **어떤 글이 어떤 영역에서 노출되고 있는지** 정확히 파악하는 것입니다.

#### 5.3.1 문제 상황

네이버 모바일 검색 결과에서 동일한 블로그 글이 **여러 영역에 중복 노출**될 수 있습니다:

```
검색어: "부산남구라미네이트"

┌─────────────────────────────────────────────────────────┐
│  [VIEW 영역]                                            │
│  ┌─────────────────────────────────────────────────┐   │
│  │ 부산남구치과, 라미네이트 전 체크해야 할 3가지    │   │  ← 글 A (postId: 224042323588)
│  │ blog.naver.com/medisksu/224042323588            │   │
│  └─────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  [웹 영역]                                              │
│  ┌─────────────────────────────────────────────────┐   │
│  │ 대연동라미네이트, 심도있는 디자인이 빠른 결과를  │   │  ← 글 B (postId: 224081585590)
│  │ blog.naver.com/medisksu/224081585590            │   │
│  └─────────────────────────────────────────────────┘   │
│  ┌─────────────────────────────────────────────────┐   │
│  │ medisksu (제목 없는 링크)                        │   │  ← 글 A 또 출현 (URL만)
│  │ blog.naver.com/medisksu/224042323588            │   │
│  └─────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
```

**문제점:**
1. 동일 글이 여러 번 출현 → 중복 제거 필요
2. 어떤 출현에는 제목이 있고, 어떤 출현에는 없음 → 제목 병합 필요
3. 각 출현마다 영역이 다름 → 가장 구체적인 영역 선택 필요

#### 5.3.2 해결 방법: Map 기반 데이터 병합

```typescript
// postId를 키로 하는 Map 사용
const postDataMap = new Map<string, { url: string; title: string; area: string }>();
```

**핵심 알고리즘:**

```
1. HTML에서 모든 블로그 URL 출현 위치 찾기
     ↓
2. 각 출현마다:
   - URL 주변 컨텍스트 추출 (앞 1500자, 뒤 500자)
   - 컨텍스트에서 영역 감지 (detectAreaType)
   - 컨텍스트에서 제목 추출 (sds-comps-text)
     ↓
3. Map에 병합:
   - postId가 처음이면 → 새로 추가
   - postId가 이미 있으면 → 더 좋은 데이터로 업데이트
     - 제목: 기존에 없고 새로 찾았으면 업데이트
     - 영역: '기타'였는데 구체적 영역 찾았으면 업데이트
     ↓
4. Map을 배열로 변환하여 반환
```

#### 5.3.3 영역 감지 로직 (detectAreaType)

네이버 검색결과의 각 영역은 고유한 CSS 클래스명을 가집니다:

```typescript
const detectAreaType = (contextHtml: string): string => {
  // VIEW 영역: UGC(User Generated Content) 섹션
  if (contextHtml.includes('fds-ugc-single-intention') || contextHtml.includes('ugc')) {
    return 'VIEW';
  }

  // 웹 영역: 웹문서 검색 결과
  if (contextHtml.includes('fds-web-root') ||
      contextHtml.includes('fds-web-list') ||
      contextHtml.includes('fds-web-doc')) {
    return '웹';
  }

  // 인플루언서 영역
  if (contextHtml.includes('fds-influencer') || contextHtml.includes('influencer')) {
    return '인플루언서';
  }

  // 블로그 영역 (구형)
  if (contextHtml.includes('blog_list') || contextHtml.includes('_blog_section')) {
    return '블로그';
  }

  return '기타';
};
```

**영역별 HTML 패턴:**

| 영역 | 주요 클래스명 | 설명 |
|------|---------------|------|
| VIEW | `fds-ugc-single-intention`, `ugc` | 네이버 VIEW 탭 콘텐츠 |
| 웹 | `fds-web-root`, `fds-web-list`, `fds-web-doc` | 웹문서 검색 결과 |
| 인플루언서 | `fds-influencer`, `influencer` | 인플루언서 검색 영역 |
| 블로그 | `blog_list`, `_blog_section` | 구형 블로그 영역 |
| 기타 | - | 위 패턴에 매칭 안됨 |

#### 5.3.4 제목 추출 로직

네이버 검색결과에서 제목은 `<span class="sds-comps-text">` 안에 있으며, 검색어는 `<mark>` 태그로 하이라이트됩니다:

```html
<!-- 실제 HTML 구조 예시 -->
<a href="https://blog.naver.com/medisksu/224042323588">
  <span class="sds-comps-text">
    <mark>부산남구</mark>치과, <mark>라미네이트</mark> 전 체크해야 할 3가지
  </span>
</a>
```

**제목 추출 코드:**

```typescript
// HTML 태그 제거 (mark, b, strong 등)
const stripHtmlTags = (str: string): string => {
  return str.replace(/<\/?[^>]+(>|$)/g, '').trim();
};

// 제목 유효성 검사 (URL이나 날짜가 아닌 실제 제목인지)
const isValidTitle = (text: string): boolean => {
  const cleaned = stripHtmlTags(text).trim();
  return cleaned.length >= 10 &&           // 너무 짧으면 제목 아님
         cleaned.length <= 100 &&          // 너무 길면 제목 아님
         !cleaned.includes('blog.naver.com') && // URL이면 제목 아님
         !cleaned.includes('naver.com') &&
         !/^\d{4}\.\d{2}\.\d{2}/.test(cleaned) && // 날짜면 제목 아님
         !/^\d+$/.test(cleaned) &&          // 숫자만이면 제목 아님
         !/^[a-z0-9]+$/i.test(cleaned);     // 블로그ID만이면 제목 아님
};

// 제목 추출 시도
let title = '';

// 패턴 1: href="URL" 바로 뒤의 sds-comps-text
const linkTitlePattern = new RegExp(
  `href=["']${escapedUrl}["'][^>]*>[^<]*<span[^>]*class="[^"]*sds-comps-text[^"]*"[^>]*>([\\s\\S]*?)</span>`,
  'i'
);
const linkMatch = linkTitlePattern.exec(context);
if (linkMatch && isValidTitle(stripHtmlTags(linkMatch[1]))) {
  title = stripHtmlTags(linkMatch[1]);
}

// 패턴 2: 컨텍스트 내 모든 sds-comps-text에서 유효한 제목 찾기
if (!title) {
  const allTitlesPattern = /<span[^>]*class="[^"]*sds-comps-text[^"]*"[^>]*>([\s\S]*?)<\/span>/gi;
  let titleMatch;
  while ((titleMatch = allTitlesPattern.exec(context)) !== null) {
    const rawTitle = stripHtmlTags(titleMatch[1]);
    if (isValidTitle(rawTitle)) {
      title = rawTitle;
      break;
    }
  }
}
```

#### 5.3.5 데이터 병합 로직

동일 postId가 여러 번 출현할 때 데이터를 병합합니다:

```typescript
const existing = postDataMap.get(postId);

if (!existing) {
  // 처음 발견: 그대로 저장
  postDataMap.set(postId, { url, title, area });
} else {
  // 이미 있음: 더 좋은 데이터로 업데이트

  // 제목: 없었는데 새로 찾은 경우만 업데이트
  if (!existing.title && title) {
    existing.title = title;
  }

  // 영역: '기타'였는데 구체적인 영역 찾은 경우만 업데이트
  if (existing.area === '기타' && area !== '기타') {
    existing.area = area;
  }
}
```

**병합 우선순위:**
- 제목: 있는 것 > 없는 것
- 영역: VIEW/웹/인플루언서/블로그 > 기타

#### 5.3.6 최종 결과 구조

```typescript
interface ExposedPost {
  url: string;    // "https://blog.naver.com/medisksu/224042323588"
  title: string;  // "부산남구치과, 라미네이트 전 체크해야 할 3가지"
  area: string;   // "VIEW" | "웹" | "인플루언서" | "블로그" | "기타"
}

// API 응답 예시
{
  "keyword": "부산남구라미네이트",
  "blogId": "medisksu",
  "isFirstPage": true,
  "exposedPosts": [
    {
      "url": "https://blog.naver.com/medisksu/224042323588",
      "title": "부산남구치과, 라미네이트 전 체크해야 할 3가지",
      "area": "VIEW"
    },
    {
      "url": "https://blog.naver.com/medisksu/224081585590",
      "title": "대연동라미네이트, 심도있는 디자인이 빠른 결과를 만듭니다",
      "area": "웹"
    }
  ]
}
```

#### 5.3.7 DB 저장 구조

```sql
-- exposed_posts 컬럼 (JSONB)
exposed_posts = '[
  {"url": "...", "title": "...", "area": "VIEW"},
  {"url": "...", "title": "...", "area": "웹"}
]'
```

#### 5.3.8 UI 표시 (노출글 팝업)

O 버튼 클릭 시 노출된 글 목록을 팝업으로 표시합니다:

```tsx
function ExposedPostsPopup({ posts }: { posts: ExposedPost[] }) {
  return (
    <div className="space-y-3">
      {posts.map((post, i) => (
        <div key={i} className="border-b pb-2">
          {/* 영역 배지 */}
          <span className={`px-2 py-0.5 rounded text-xs font-medium ${
            post.area === 'VIEW' ? 'bg-green-100 text-green-700' :
            post.area === '웹' ? 'bg-blue-100 text-blue-700' :
            post.area === '인플루언서' ? 'bg-purple-100 text-purple-700' :
            post.area === '블로그' ? 'bg-orange-100 text-orange-700' :
            'bg-gray-100 text-gray-700'
          }`}>
            {post.area}
          </span>

          {/* 제목 (클릭시 새 탭에서 열기) */}
          <a href={post.url} target="_blank" className="block mt-1 text-sm text-blue-600 hover:underline">
            {post.title}
          </a>
        </div>
      ))}
    </div>
  );
}
```

**영역별 배지 색상:**

| 영역 | 배경색 | 텍스트색 | 의미 |
|------|--------|----------|------|
| VIEW | `bg-green-100` | `text-green-700` | 네이버 VIEW 탭 (가장 상단) |
| 웹 | `bg-blue-100` | `text-blue-700` | 웹문서 영역 |
| 인플루언서 | `bg-purple-100` | `text-purple-700` | 인플루언서 영역 |
| 블로그 | `bg-orange-100` | `text-orange-700` | 블로그 영역 |
| 기타 | `bg-gray-100` | `text-gray-700` | 분류 불가 |

#### 5.3.9 전체 데이터 흐름

```
┌─────────────────────────────────────────────────────────────────────┐
│  1. 사용자가 [노출 체크] 클릭                                        │
└─────────────────────────────────────────────────────────────────────┘
                                    ↓
┌─────────────────────────────────────────────────────────────────────┐
│  2. /api/blog-check 호출 (keyword, blogId)                          │
│     └─ 네이버 모바일 검색 HTML 가져오기                              │
│     └─ URL 패턴으로 모든 출현 위치 찾기                              │
│     └─ 각 출현마다 영역/제목 추출                                    │
│     └─ Map으로 중복 제거 & 데이터 병합                               │
│     └─ exposedPosts 배열 반환                                       │
└─────────────────────────────────────────────────────────────────────┘
                                    ↓
┌─────────────────────────────────────────────────────────────────────┐
│  3. /api/blog-tracking/results POST (결과 저장)                      │
│     └─ exposed_posts JSONB 컬럼에 저장                               │
└─────────────────────────────────────────────────────────────────────┘
                                    ↓
┌─────────────────────────────────────────────────────────────────────┐
│  4. UI에서 결과 매트릭스 표시                                        │
│     └─ 노출 O → 초록 버튼 (클릭 가능)                                │
│     └─ 미노출 X → 회색 표시                                          │
└─────────────────────────────────────────────────────────────────────┘
                                    ↓
┌─────────────────────────────────────────────────────────────────────┐
│  5. O 버튼 클릭 시 팝업 표시                                         │
│     └─ 각 글의 영역 배지 + 제목 + 링크 표시                          │
└─────────────────────────────────────────────────────────────────────┘
```

### 5.4 설정 API (`/api/blog-tracking/config`)

```typescript
// src/app/api/blog-tracking/config/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { createServiceClient } from '@/lib/supabase/server';

export async function GET() {
  try {
    const supabase = createServiceClient();

    const { data, error } = await supabase
      .from('blog_tracking_configs')
      .select('*')
      .eq('is_active', true)
      .order('created_at', { ascending: false })
      .limit(1)
      .single();

    if (error && error.code !== 'PGRST116') {
      throw error;
    }

    return NextResponse.json({ config: data || null });
  } catch (error) {
    return NextResponse.json({ error: '설정 조회 실패' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const { blogs, keywords } = await request.json();
    // blogs: [{ id: "uuid", blogId: "네이버블로그ID" }, ...]
    // keywords: ["키워드1", "키워드2", ...]

    const supabase = createServiceClient();

    await supabase
      .from('blog_tracking_configs')
      .update({ is_active: false })
      .eq('is_active', true);

    const { data, error } = await supabase
      .from('blog_tracking_configs')
      .insert({
        blogs,
        keywords,
        is_active: true,
      })
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json({ config: data });
  } catch (error) {
    return NextResponse.json({ error: '설정 저장 실패' }, { status: 500 });
  }
}
```

### 5.5 결과 API (`/api/blog-tracking/results`)

```typescript
// src/app/api/blog-tracking/results/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { createServiceClient } from '@/lib/supabase/server';

interface ExposedPost {
  url: string;
  title: string;
  area?: string;
}

interface BlogResult {
  blogId: string;
  isFirstPage: boolean;
  exposedPosts?: ExposedPost[];
}

interface KeywordResult {
  keyword: string;
  blogResults: BlogResult[];
}

// GET: 월별 결과 조회
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const configId = searchParams.get('configId');
    const year = parseInt(searchParams.get('year') || new Date().getFullYear().toString());
    const month = parseInt(searchParams.get('month') || (new Date().getMonth() + 1).toString());

    if (!configId) {
      return NextResponse.json({ error: 'configId가 필요합니다.' }, { status: 400 });
    }

    const supabase = createServiceClient();

    const startDate = `${year}-${String(month).padStart(2, '0')}-01`;
    const lastDay = new Date(year, month, 0).getDate();
    const endDate = `${year}-${String(month).padStart(2, '0')}-${String(lastDay).padStart(2, '0')}`;

    const { data, error } = await supabase
      .from('blog_tracking_results')
      .select('*')
      .eq('config_id', configId)
      .gte('check_date', startDate)
      .lte('check_date', endDate)
      .order('check_date', { ascending: false });

    if (error) throw error;

    // 날짜 → 키워드 → 블로그 순으로 그룹화
    const groupedByDate: Record<string, {
      date: string;
      checkedAt: string;
      results: KeywordResult[];
    }> = {};

    data?.forEach(row => {
      const dateStr = row.check_date;
      if (!groupedByDate[dateStr]) {
        groupedByDate[dateStr] = {
          date: dateStr,
          checkedAt: row.checked_at,
          results: [],
        };
      }

      let keywordResult = groupedByDate[dateStr].results.find(r => r.keyword === row.keyword);
      if (!keywordResult) {
        keywordResult = {
          keyword: row.keyword,
          blogResults: [],
        };
        groupedByDate[dateStr].results.push(keywordResult);
      }

      keywordResult.blogResults.push({
        blogId: row.blog_id,
        isFirstPage: row.is_first_page,
        exposedPosts: row.exposed_posts || [],
      });
    });

    const historyData = Object.values(groupedByDate).sort(
      (a, b) => b.date.localeCompare(a.date)
    );

    return NextResponse.json({ historyData });
  } catch (error) {
    return NextResponse.json({ error: '결과 조회 실패' }, { status: 500 });
  }
}

// POST: 결과 저장
export async function POST(request: NextRequest) {
  try {
    const { configId, date, checkedAt, results } = await request.json();

    if (!configId || !date || !results) {
      return NextResponse.json({ error: '필수 값 누락' }, { status: 400 });
    }

    const supabase = createServiceClient();

    // 해당 날짜의 기존 결과 삭제
    await supabase
      .from('blog_tracking_results')
      .delete()
      .eq('config_id', configId)
      .eq('check_date', date);

    // 새 결과 삽입
    const insertData: any[] = [];

    for (const keywordResult of results as KeywordResult[]) {
      for (const blogResult of keywordResult.blogResults) {
        insertData.push({
          config_id: configId,
          check_date: date,
          checked_at: checkedAt,
          keyword: keywordResult.keyword,
          blog_id: blogResult.blogId,
          is_first_page: blogResult.isFirstPage,
          exposed_posts: blogResult.exposedPosts || [],
        });
      }
    }

    const { error } = await supabase
      .from('blog_tracking_results')
      .insert(insertData);

    if (error) throw error;

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: '결과 저장 실패' }, { status: 500 });
  }
}
```

---

## 6. UI 컴포넌트

### 6.1 플레이스 순위추적 UI (`RankTracker.tsx`)

#### 주요 기능
1. **설정 관리**: 타겟 URL과 키워드 목록 설정
2. **수동 체크**: 버튼 클릭으로 현재 순위 확인
3. **결과 매트릭스**: 월별 달력 형태로 일자별 순위 표시
4. **통계**: 노출률, 평균 순위 등 집계

#### 핵심 UI 구조

```tsx
// src/components/admin/RankTracker.tsx
'use client';

import { useState, useEffect } from 'react';

interface KeywordResult {
  keyword: string;
  position: number | null;
  positionWithoutAd: number | null;
  isFirstPage: boolean;
  hasUnnecessaryAd: boolean;
  isFirstPageByAd: boolean;
}

interface HistoryData {
  date: string;
  checkedAt: string;
  results: KeywordResult[];
}

interface Config {
  id: string;
  target_url: string;
  keywords: string[];
}

export default function RankTracker() {
  const [config, setConfig] = useState<Config | null>(null);
  const [historyData, setHistoryData] = useState<HistoryData[]>([]);
  const [selectedMonth, setSelectedMonth] = useState({ year: new Date().getFullYear(), month: new Date().getMonth() + 1 });
  const [isSearching, setIsSearching] = useState(false);

  // 설정 로드
  useEffect(() => {
    fetchConfig();
  }, []);

  // 월별 결과 로드
  useEffect(() => {
    if (config?.id) {
      fetchResults();
    }
  }, [config?.id, selectedMonth]);

  const fetchConfig = async () => {
    const res = await fetch('/api/rank-tracking/config');
    const data = await res.json();
    setConfig(data.config);
  };

  const fetchResults = async () => {
    const res = await fetch(
      `/api/rank-tracking/results?configId=${config!.id}&year=${selectedMonth.year}&month=${selectedMonth.month}`
    );
    const data = await res.json();
    setHistoryData(data.historyData || []);
  };

  // 순위 체크 실행
  const handleSearch = async () => {
    if (!config) return;
    setIsSearching(true);

    const results: KeywordResult[] = [];

    // 키워드별 순위 체크
    for (const keyword of config.keywords) {
      const res = await fetch('/api/rank-check', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ keyword, targetUrl: config.target_url }),
      });
      const data = await res.json();
      results.push(data);

      // Rate limiting (500ms 간격)
      await new Promise(resolve => setTimeout(resolve, 500));
    }

    // 결과 저장
    const now = new Date();
    const kstDate = new Date(now.getTime() + 9 * 60 * 60 * 1000);
    const dateStr = kstDate.toISOString().split('T')[0];

    await fetch('/api/rank-tracking/results', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        configId: config.id,
        date: dateStr,
        checkedAt: now.toISOString(),
        results,
      }),
    });

    setIsSearching(false);
    fetchResults();
  };

  // 월의 날짜 배열 생성
  const getDaysInMonth = (year: number, month: number) => {
    const lastDay = new Date(year, month, 0).getDate();
    return Array.from({ length: lastDay }, (_, i) => i + 1);
  };

  const days = getDaysInMonth(selectedMonth.year, selectedMonth.month);

  return (
    <div className="p-4">
      {/* 설정 영역 */}
      <div className="mb-6">
        <h2 className="text-lg font-bold mb-2">타겟 URL</h2>
        <input
          type="text"
          value={config?.target_url || ''}
          placeholder="https://map.naver.com/p/entry/place/1234567890"
          className="w-full p-2 border rounded"
        />
      </div>

      {/* 키워드 목록 */}
      <div className="mb-6">
        <h2 className="text-lg font-bold mb-2">키워드</h2>
        <div className="flex flex-wrap gap-2">
          {config?.keywords.map((kw, i) => (
            <span key={i} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              {kw}
            </span>
          ))}
        </div>
      </div>

      {/* 수동 체크 버튼 */}
      <button
        onClick={handleSearch}
        disabled={isSearching}
        className="w-full py-3 bg-blue-500 text-white rounded-lg disabled:bg-gray-300"
      >
        {isSearching ? '검색 중...' : '순위 체크'}
      </button>

      {/* 월 선택 */}
      <div className="flex justify-center items-center gap-4 my-6">
        <button onClick={() => {/* 이전 월 */}}>◀</button>
        <span className="text-lg font-bold">
          {selectedMonth.year}년 {selectedMonth.month}월
        </span>
        <button onClick={() => {/* 다음 월 */}}>▶</button>
      </div>

      {/* 결과 매트릭스 */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr>
              <th className="sticky left-0 bg-white">키워드</th>
              {days.map(day => (
                <th key={day} className="px-2 py-1 text-center min-w-[40px]">
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {config?.keywords.map((keyword, kIdx) => (
              <tr key={kIdx}>
                <td className="sticky left-0 bg-white font-medium px-2 py-1">
                  {keyword}
                </td>
                {days.map(day => {
                  const dateStr = `${selectedMonth.year}-${String(selectedMonth.month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
                  const dayData = historyData.find(h => h.date === dateStr);
                  const result = dayData?.results.find(r => r.keyword === keyword);

                  return (
                    <td key={day} className="px-1 py-1 text-center">
                      {result && (
                        <RankCell result={result} />
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 통계 영역 */}
      <Statistics historyData={historyData} keywords={config?.keywords || []} />
    </div>
  );
}

// 순위 셀 컴포넌트
function RankCell({ result }: { result: KeywordResult }) {
  const { position, isFirstPage, hasUnnecessaryAd, isFirstPageByAd } = result;

  // 배경색 결정
  let bgColor = 'bg-gray-100'; // 미노출
  if (position !== null) {
    if (isFirstPage) {
      bgColor = 'bg-blue-100 text-blue-700'; // 1페이지 노출
    } else {
      bgColor = 'bg-gray-200 text-gray-600'; // 1페이지 밖
    }
  }

  // 링 색상 (특수 상태 표시)
  let ringColor = '';
  if (hasUnnecessaryAd) {
    ringColor = 'ring-2 ring-orange-400'; // 불필요 광고로 순위 밀림
  } else if (isFirstPageByAd) {
    ringColor = 'ring-2 ring-purple-400'; // 광고로 1페이지 진입
  }

  return (
    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium ${bgColor} ${ringColor}`}>
      {position || '-'}
    </div>
  );
}

// 통계 컴포넌트
function Statistics({ historyData, keywords }: { historyData: HistoryData[]; keywords: string[] }) {
  // 통계 계산 로직...
  const totalChecks = historyData.length * keywords.length;
  const firstPageCount = historyData.reduce((acc, h) =>
    acc + h.results.filter(r => r.isFirstPage).length, 0
  );
  const exposureRate = totalChecks > 0 ? Math.round((firstPageCount / totalChecks) * 100) : 0;

  // 평균 순위 계산
  const positions = historyData.flatMap(h =>
    h.results.filter(r => r.position !== null).map(r => r.position!)
  );
  const avgPosition = positions.length > 0
    ? (positions.reduce((a, b) => a + b, 0) / positions.length).toFixed(1)
    : '-';

  return (
    <div className="mt-6 grid grid-cols-4 gap-4 text-center">
      <div className="p-3 bg-gray-50 rounded-lg">
        <div className="text-2xl font-bold">{totalChecks}</div>
        <div className="text-xs text-gray-500">총 체크</div>
      </div>
      <div className="p-3 bg-blue-50 rounded-lg">
        <div className="text-2xl font-bold text-blue-600">{firstPageCount}</div>
        <div className="text-xs text-gray-500">1페이지</div>
      </div>
      <div className="p-3 bg-green-50 rounded-lg">
        <div className="text-2xl font-bold text-green-600">{exposureRate}%</div>
        <div className="text-xs text-gray-500">노출률</div>
      </div>
      <div className="p-3 bg-purple-50 rounded-lg">
        <div className="text-2xl font-bold text-purple-600">{avgPosition}</div>
        <div className="text-xs text-gray-500">평균순위</div>
      </div>
    </div>
  );
}
```

### 6.2 블로그 노출추적 UI (`BlogTracker.tsx`)

#### 주요 기능
1. **블로그 관리**: 복수 블로그 ID 등록
2. **키워드 관리**: 추적할 키워드 목록
3. **수동 체크**: 5개씩 병렬 처리
4. **결과 매트릭스**: O/X로 노출 여부 표시
5. **노출글 팝업**: O 클릭 시 노출된 글 목록 표시

#### 핵심 UI 구조

```tsx
// src/components/admin/BlogTracker.tsx
'use client';

import { useState, useEffect, useCallback } from 'react';

interface ExposedPost {
  url: string;
  title: string;
  area?: string;
}

interface BlogResult {
  blogId: string;
  isFirstPage: boolean;
  exposedPosts?: ExposedPost[];
}

interface KeywordResult {
  keyword: string;
  blogResults: BlogResult[];
}

interface HistoryData {
  date: string;
  checkedAt: string;
  results: KeywordResult[];
}

interface Blog {
  id: string;
  blogId: string;
}

interface Config {
  id: string;
  blogs: Blog[];
  keywords: string[];
}

export default function BlogTracker() {
  const [config, setConfig] = useState<Config | null>(null);
  const [historyData, setHistoryData] = useState<HistoryData[]>([]);
  const [selectedMonth, setSelectedMonth] = useState({ year: new Date().getFullYear(), month: new Date().getMonth() + 1 });
  const [isSearching, setIsSearching] = useState(false);
  const [searchProgress, setSearchProgress] = useState({ current: 0, total: 0 });

  // 팝업 상태
  const [selectedPosts, setSelectedPosts] = useState<ExposedPost[] | null>(null);
  const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });

  // ... 설정/결과 로드 로직 (RankTracker와 유사)

  // 블로그 노출 체크 (5개씩 병렬 처리)
  const handleSearch = async () => {
    if (!config) return;
    setIsSearching(true);

    const { keywords, blogs } = config;
    const totalSearches = keywords.length;
    setSearchProgress({ current: 0, total: totalSearches });

    const BATCH_SIZE = 5; // 5개씩 병렬 처리
    const results: KeywordResult[] = [];

    // 단일 키워드 검색 함수
    const searchKeyword = async (keyword: string): Promise<KeywordResult> => {
      const blogResults: BlogResult[] = [];

      for (const blog of blogs) {
        try {
          const res = await fetch('/api/blog-check', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ keyword, blogId: blog.blogId }),
          });
          const data = await res.json();

          blogResults.push({
            blogId: blog.id,
            isFirstPage: data.isFirstPage,
            exposedPosts: data.exposedPosts || [],
          });
        } catch (error) {
          blogResults.push({
            blogId: blog.id,
            isFirstPage: false,
            exposedPosts: [],
          });
        }

        // 블로그 간 딜레이 (500ms)
        await new Promise(resolve => setTimeout(resolve, 500));
      }

      return { keyword, blogResults };
    };

    // 배치 처리
    for (let i = 0; i < keywords.length; i += BATCH_SIZE) {
      const batch = keywords.slice(i, i + BATCH_SIZE);

      // 배치 내 키워드 병렬 처리
      const batchResults = await Promise.all(batch.map(searchKeyword));
      results.push(...batchResults);

      setSearchProgress({ current: Math.min(i + BATCH_SIZE, keywords.length), total: totalSearches });

      // 배치 간 딜레이 (네이버 차단 방지)
      if (i + BATCH_SIZE < keywords.length) {
        await new Promise(resolve => setTimeout(resolve, 500));
      }
    }

    // 결과 저장
    const now = new Date();
    const kstDate = new Date(now.getTime() + 9 * 60 * 60 * 1000);
    const dateStr = kstDate.toISOString().split('T')[0];

    await fetch('/api/blog-tracking/results', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        configId: config.id,
        date: dateStr,
        checkedAt: now.toISOString(),
        results,
      }),
    });

    setIsSearching(false);
    fetchResults();
  };

  // 노출글 팝업 표시
  const handleCellClick = (e: React.MouseEvent, posts: ExposedPost[] | undefined) => {
    if (!posts || posts.length === 0) return;

    const rect = (e.target as HTMLElement).getBoundingClientRect();
    setPopupPosition({
      x: rect.left + window.scrollX,
      y: rect.bottom + window.scrollY + 4,
    });
    setSelectedPosts(posts);
  };

  const days = getDaysInMonth(selectedMonth.year, selectedMonth.month);

  return (
    <div className="p-4">
      {/* 블로그 목록 */}
      <div className="mb-6">
        <h2 className="text-lg font-bold mb-2">블로그</h2>
        <div className="flex flex-wrap gap-2">
          {config?.blogs.map((blog) => (
            <span key={blog.id} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
              @{blog.blogId}
            </span>
          ))}
        </div>
      </div>

      {/* 키워드 목록 */}
      <div className="mb-6">
        <h2 className="text-lg font-bold mb-2">키워드</h2>
        <div className="flex flex-wrap gap-2">
          {config?.keywords.map((kw, i) => (
            <span key={i} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              {kw}
            </span>
          ))}
        </div>
      </div>

      {/* 수동 체크 버튼 */}
      <button
        onClick={handleSearch}
        disabled={isSearching}
        className="w-full py-3 bg-green-500 text-white rounded-lg disabled:bg-gray-300"
      >
        {isSearching
          ? `검색 중... (${searchProgress.current}/${searchProgress.total})`
          : '노출 체크'
        }
      </button>

      {/* 결과 매트릭스 */}
      <div className="overflow-x-auto mt-6">
        <table className="w-full text-sm">
          <thead>
            <tr>
              <th className="sticky left-0 bg-white">키워드</th>
              <th className="sticky left-[80px] bg-white">블로그</th>
              {days.map(day => (
                <th key={day} className="px-2 py-1 text-center min-w-[36px]">
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {config?.keywords.map((keyword, kIdx) => (
              config.blogs.map((blog, bIdx) => (
                <tr key={`${kIdx}-${bIdx}`}>
                  {bIdx === 0 && (
                    <td
                      rowSpan={config.blogs.length}
                      className="sticky left-0 bg-white font-medium px-2 py-1 border-b"
                    >
                      {keyword}
                    </td>
                  )}
                  <td className="sticky left-[80px] bg-white text-xs px-2 py-1">
                    @{blog.blogId}
                  </td>
                  {days.map(day => {
                    const dateStr = `${selectedMonth.year}-${String(selectedMonth.month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
                    const dayData = historyData.find(h => h.date === dateStr);
                    const keywordResult = dayData?.results.find(r => r.keyword === keyword);
                    const blogResult = keywordResult?.blogResults.find(br => br.blogId === blog.id);

                    return (
                      <td key={day} className="px-1 py-1 text-center">
                        {blogResult && (
                          <ExposureCell
                            isExposed={blogResult.isFirstPage}
                            posts={blogResult.exposedPosts}
                            onClick={(e) => handleCellClick(e, blogResult.exposedPosts)}
                          />
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))
            ))}
          </tbody>
        </table>
      </div>

      {/* 노출글 팝업 */}
      {selectedPosts && (
        <ExposedPostsPopup
          posts={selectedPosts}
          position={popupPosition}
          onClose={() => setSelectedPosts(null)}
        />
      )}
    </div>
  );
}

// 노출 셀 컴포넌트 (O/X 표시)
function ExposureCell({
  isExposed,
  posts,
  onClick
}: {
  isExposed: boolean;
  posts?: ExposedPost[];
  onClick: (e: React.MouseEvent) => void;
}) {
  if (!isExposed) {
    return (
      <div className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 text-xs">
        X
      </div>
    );
  }

  return (
    <button
      onClick={onClick}
      className="w-7 h-7 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs font-bold hover:bg-green-200 transition-colors"
    >
      O
    </button>
  );
}

// 노출글 팝업 컴포넌트
function ExposedPostsPopup({
  posts,
  position,
  onClose
}: {
  posts: ExposedPost[];
  position: { x: number; y: number };
  onClose: () => void;
}) {
  return (
    <>
      {/* 백드롭 */}
      <div
        className="fixed inset-0 z-40"
        onClick={onClose}
      />

      {/* 팝업 */}
      <div
        className="absolute z-50 bg-white border rounded-lg shadow-lg p-4 min-w-[280px] max-w-[360px]"
        style={{ left: position.x, top: position.y }}
      >
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-bold text-sm">노출된 글 ({posts.length}개)</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            ✕
          </button>
        </div>

        <div className="space-y-3 max-h-[300px] overflow-y-auto">
          {posts.map((post, i) => (
            <div key={i} className="border-b pb-2 last:border-b-0">
              {/* 영역 배지 */}
              <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                post.area === 'VIEW' ? 'bg-green-100 text-green-700' :
                post.area === '웹' ? 'bg-blue-100 text-blue-700' :
                post.area === '인플루언서' ? 'bg-purple-100 text-purple-700' :
                post.area === '블로그' ? 'bg-orange-100 text-orange-700' :
                'bg-gray-100 text-gray-700'
              }`}>
                {post.area || '기타'}
              </span>

              {/* 제목 */}
              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-1 text-sm text-blue-600 hover:underline line-clamp-2"
              >
                {post.title}
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
```

### 6.3 UI 색상 및 상태 표시 정리

#### 플레이스 순위추적

| 상태 | 배경색 | 텍스트색 | 링 색상 | 설명 |
|------|--------|----------|---------|------|
| 1페이지 노출 | `bg-blue-100` | `text-blue-700` | - | 1-5위 |
| 1페이지 밖 | `bg-gray-200` | `text-gray-600` | - | 6위 이상 |
| 미노출 | `bg-gray-100` | `text-gray-400` | - | 검색 결과에 없음 |
| 불필요 광고 | - | - | `ring-orange-400` | 광고 없으면 1페이지인데 밀림 |
| 광고로 1페이지 | - | - | `ring-purple-400` | 자사 광고로 1페이지 진입 |

#### 블로그 노출추적

| 상태 | 배경색 | 텍스트 | 설명 |
|------|--------|--------|------|
| 노출 (O) | `bg-green-100` | `text-green-600` | 클릭 시 팝업 표시 |
| 미노출 (X) | `bg-gray-100` | `text-gray-400` | - |

#### 영역 배지 색상

| 영역 | 배경색 | 텍스트색 |
|------|--------|----------|
| VIEW | `bg-green-100` | `text-green-700` |
| 웹 | `bg-blue-100` | `text-blue-700` |
| 인플루언서 | `bg-purple-100` | `text-purple-700` |
| 블로그 | `bg-orange-100` | `text-orange-700` |
| 기타 | `bg-gray-100` | `text-gray-700` |

---

## 7. Cron 자동화

### 7.1 Vercel Cron 설정

```json
// vercel.json
{
  "crons": [
    {
      "path": "/api/cron/rank-tracking",
      "schedule": "0 9 * * *"
    },
    {
      "path": "/api/cron/blog-tracking",
      "schedule": "0 10 * * *"
    }
  ]
}
```

- 플레이스 순위추적: 매일 오전 9시 (KST 18시)
- 블로그 노출추적: 매일 오전 10시 (KST 19시)

### 7.2 플레이스 Cron API (`/api/cron/rank-tracking`)

```typescript
// src/app/api/cron/rank-tracking/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { createServiceClient } from '@/lib/supabase/server';

export async function GET(request: NextRequest) {
  // Vercel Cron 인증
  const authHeader = request.headers.get('authorization');
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const supabase = createServiceClient();

    // 활성 설정 조회
    const { data: config, error: configError } = await supabase
      .from('rank_tracking_configs')
      .select('*')
      .eq('is_active', true)
      .order('created_at', { ascending: false })
      .limit(1)
      .single();

    if (configError || !config) {
      return NextResponse.json({ error: '활성 설정 없음' }, { status: 404 });
    }

    const { id: configId, target_url, keywords } = config;

    console.log(`🚀 순위 추적 시작: ${keywords.length}개 키워드`);

    const now = new Date();
    const kstDate = new Date(now.getTime() + 9 * 60 * 60 * 1000);
    const dateStr = kstDate.toISOString().split('T')[0];
    const checkedAt = now.toISOString();

    const results = [];

    for (const keyword of keywords) {
      try {
        // 내부 API 호출
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/rank-check`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ keyword, targetUrl: target_url }),
          }
        );

        const data = await response.json();
        results.push(data);

        console.log(`✅ ${keyword}: ${data.position}위`);
      } catch (error) {
        console.error(`❌ ${keyword} 실패:`, error);
        results.push({
          keyword,
          position: null,
          positionWithoutAd: null,
          isFirstPage: false,
          hasUnnecessaryAd: false,
          isFirstPageByAd: false,
        });
      }

      // Rate limiting
      await new Promise(resolve => setTimeout(resolve, 500));
    }

    // 결과 저장
    await supabase
      .from('rank_tracking_results')
      .delete()
      .eq('config_id', configId)
      .eq('check_date', dateStr);

    const insertData = results.map(r => ({
      config_id: configId,
      check_date: dateStr,
      checked_at: checkedAt,
      keyword: r.keyword,
      position: r.position,
      position_without_ad: r.positionWithoutAd,
      is_first_page: r.isFirstPage,
      has_unnecessary_ad: r.hasUnnecessaryAd,
      is_first_page_by_ad: r.isFirstPageByAd,
    }));

    await supabase.from('rank_tracking_results').insert(insertData);

    return NextResponse.json({
      success: true,
      date: dateStr,
      totalKeywords: keywords.length,
    });

  } catch (error) {
    console.error('Cron 오류:', error);
    return NextResponse.json({ error: '실행 실패' }, { status: 500 });
  }
}
```

### 7.3 블로그 Cron API (`/api/cron/blog-tracking`)

```typescript
// src/app/api/cron/blog-tracking/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { createServiceClient } from '@/lib/supabase/server';

export async function GET(request: NextRequest) {
  // Vercel Cron 인증
  const authHeader = request.headers.get('authorization');
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const supabase = createServiceClient();

    const { data: config, error: configError } = await supabase
      .from('blog_tracking_configs')
      .select('*')
      .eq('is_active', true)
      .order('created_at', { ascending: false })
      .limit(1)
      .single();

    if (configError || !config) {
      return NextResponse.json({ error: '활성 설정 없음' }, { status: 404 });
    }

    const { id: configId, blogs, keywords } = config;

    console.log(`🚀 블로그 추적 시작: ${keywords.length}개 키워드, ${blogs.length}개 블로그`);

    const now = new Date();
    const kstDate = new Date(now.getTime() + 9 * 60 * 60 * 1000);
    const dateStr = kstDate.toISOString().split('T')[0];
    const checkedAt = now.toISOString();

    const results = [];

    for (const keyword of keywords) {
      const blogResults = [];

      for (const blog of blogs) {
        try {
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/blog-check`,
            {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ keyword, blogId: blog.blogId }),
            }
          );

          const data = await response.json();

          blogResults.push({
            blogId: blog.id,
            isFirstPage: data.isFirstPage,
            exposedPosts: data.exposedPosts || [],
          });

          console.log(`✅ ${keyword} - @${blog.blogId}: ${data.isFirstPage ? 'O' : 'X'}`);
        } catch (error) {
          console.error(`❌ ${keyword} - @${blog.blogId} 실패:`, error);
          blogResults.push({
            blogId: blog.id,
            isFirstPage: false,
            exposedPosts: [],
          });
        }

        await new Promise(resolve => setTimeout(resolve, 500));
      }

      results.push({ keyword, blogResults });
    }

    // 결과 저장
    await supabase
      .from('blog_tracking_results')
      .delete()
      .eq('config_id', configId)
      .eq('check_date', dateStr);

    const insertData = [];
    for (const keywordResult of results) {
      for (const blogResult of keywordResult.blogResults) {
        insertData.push({
          config_id: configId,
          check_date: dateStr,
          checked_at: checkedAt,
          keyword: keywordResult.keyword,
          blog_id: blogResult.blogId,
          is_first_page: blogResult.isFirstPage,
          exposed_posts: blogResult.exposedPosts,
        });
      }
    }

    await supabase.from('blog_tracking_results').insert(insertData);

    const totalChecks = results.reduce((acc, r) => acc + r.blogResults.length, 0);
    const firstPageCount = results.reduce(
      (acc, r) => acc + r.blogResults.filter(br => br.isFirstPage).length,
      0
    );

    return NextResponse.json({
      success: true,
      date: dateStr,
      totalKeywords: keywords.length,
      totalBlogs: blogs.length,
      totalChecks,
      firstPageCount,
    });

  } catch (error) {
    console.error('Cron 오류:', error);
    return NextResponse.json({ error: '실행 실패' }, { status: 500 });
  }
}
```

---

## 8. 환경 변수 설정

```bash
# .env.local

# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
SUPABASE_SERVICE_ROLE_KEY=eyJ...  # Service Role (RLS 우회용)

# Base URL (Cron에서 내부 API 호출용)
NEXT_PUBLIC_BASE_URL=https://your-domain.vercel.app

# Vercel Cron 인증
CRON_SECRET=your-random-secret-string
```

### 8.1 Vercel 환경 변수 설정

1. Vercel 대시보드 → Settings → Environment Variables
2. 위 변수들을 Production/Preview/Development에 추가
3. `CRON_SECRET`은 랜덤 문자열 생성 (예: `openssl rand -hex 32`)

---

## 9. 배포 및 운영

### 9.1 배포 체크리스트

1. **환경 변수 확인**
   - 모든 Supabase 키 설정
   - `NEXT_PUBLIC_BASE_URL` 실제 도메인으로 설정
   - `CRON_SECRET` 설정

2. **데이터베이스 마이그레이션**
   - 위 SQL 스키마 실행
   - 인덱스 생성 확인

3. **Cron 설정**
   - `vercel.json` 배포
   - Vercel Cron 활성화 확인

### 9.2 모니터링

1. **Vercel Logs**
   - Cron 실행 로그 확인
   - API 에러 모니터링

2. **Supabase**
   - Database 사용량
   - Row 증가 추이

### 9.3 네이버 차단 대응

네이버는 과도한 요청을 차단할 수 있습니다. 대응 방법:

1. **Rate Limiting**
   - 요청 간 500ms 이상 간격
   - 일일 요청 수 제한

2. **User-Agent 로테이션**
   ```typescript
   const userAgents = [
     'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0...',
     'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0...',
     'Mozilla/5.0 (Linux; Android 13...',
   ];
   const randomUA = userAgents[Math.floor(Math.random() * userAgents.length)];
   ```

3. **IP 분산**
   - Vercel Edge Functions 사용 고려
   - 프록시 서비스 사용 고려

### 9.4 확장 고려사항

1. **대규모 키워드 처리**
   - Queue 시스템 도입 (Bull, AWS SQS)
   - 배치 처리 최적화

2. **실시간 알림**
   - 순위 변동 시 Slack/이메일 알림
   - 1페이지 이탈 시 긴급 알림

3. **분석 대시보드**
   - 순위 트렌드 차트
   - 경쟁사 비교 분석

---

## 부록: 네이버 HTML 구조 참고

### A. 네이버 지도 Apollo State

```javascript
// 페이지 소스에서 추출
window.__APOLLO_STATE__ = {
  "PlaceListResult:{...}": {
    "items": [
      {"__ref": "Place:1234567890"},
      {"__ref": "Place:9876543210"},
      // ...
    ]
  },
  "Place:1234567890": {
    "id": "1234567890",
    "name": "업체명",
    "category": "카테고리",
    // ...
  }
};
```

### B. 네이버 모바일 검색 영역 클래스

| 영역 | 주요 클래스명 |
|------|--------------|
| VIEW | `fds-ugc-single-intention`, `ugc` |
| 웹 | `fds-web-root`, `fds-web-list`, `fds-web-doc` |
| 인플루언서 | `fds-influencer`, `influencer` |
| 블로그 | `blog_list`, `_blog_section` |
| 플레이스 | `place_section`, `fds-places` |

### C. 블로그 글 제목 마크업

```html
<a href="https://blog.naver.com/blogid/123456789" ...>
  <span class="sds-comps-text">
    <mark>키워드</mark> 관련 블로그 제목입니다
  </span>
</a>
```

---

## 문의 및 지원

이 문서에 대한 문의사항이나 개선 제안은 이슈로 등록해주세요.
