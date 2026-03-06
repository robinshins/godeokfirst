# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

고덕퍼스트치과 (Godeok First Dental Clinic) 웹사이트 - 평택시 고덕동 소재 치과의원 랜딩페이지 + AI 상담 챗봇.
Next.js 15, TypeScript, Tailwind CSS v4, OpenAI API 기반.

## Clinic Info (고덕퍼스트치과)

- **병원명**: 고덕퍼스트치과의원
- **대표원장**: 이동현 (통합치의학과 전문의, 조선대학교 치과병원 외래교수)
- **주소**: 경기 평택시 고덕로 250 에듀스카이 4층 401, 402호
- **전화**: 031-611-3222
- **네이버 예약**: https://naver.me/GSD1OqoS
- **진료시간**:
  - 월/목 (야간): 10:00-21:00
  - 화/수/금: 10:00-19:00
  - 토: 09:30-14:00 (점심없음)
  - 점심: 13:00-14:00 (월~금)
  - 휴진: 일요일, 공휴일
- **사업자등록번호**: 210-49-03603
- **지역 키워드**: 고덕동, 평택시, 동삭동, 청북읍, 안중읍, 세교동, 송탄

## Color Scheme

```
Main:       #008095  (teal - buttons, accents, primary)
Dark hover: #006B7A  (darker teal - hover states)
Dark BG:    #21314E  (dark navy - dark sections background)
Accent:     #4DC8D8  (light teal - accent text on dark backgrounds)
Gray text:  #4F5971  (medium gray-blue)
```

- Dark section gradients: `linear-gradient(161deg, #21314E 13.86%, #1a2740 19.07%, #0f1a2d 28.55%)`
- CSS gradient text (`WebkitBackgroundClip: 'text'`)가 이 프로젝트에서 작동하지 않음 → 단색 `text-[#008095]` 사용
- Naver green: #03C75A (네이버 예약 버튼)

## Logo Files

- **원본 (컬러)**: `/images/goduk_images/고덕퍼스트치과로고.png` - teal icon + dark gray text, transparent bg
- **배경제거 SVG**: `/images/goduk_images/고덕퍼스트치과로고 1.svg` - 밝은 배경용
- **White SVG**: `/images/goduk_images/고덕퍼스트치과_Logo_white.svg` - 어두운 배경용
- 어두운 배경에서는 White SVG 사용, 밝은 배경에서는 원본 SVG 사용
- `brightness-0 invert` 필터는 사용하지 않음 (로고가 단순 흰색으로 보임)

## Development Commands

```bash
npm install    # Install dependencies
npm run dev    # Dev server (port 3000)
npm run build  # Production build
npm start      # Production server
npm lint       # Linting
```

## Architecture

### Core Technologies
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript with strict mode
- **Styling**: Tailwind CSS v4
- **AI Integration**: OpenAI API (GPT-4.1-mini)
- **Database**: Supabase
- **Form Handling**: React Hook Form + Zod validation
- **State Management**: React useState + localStorage

### Mobile-First Design
All components are designed for mobile viewport (max-width: 430px) even on desktop.

### AI Chat System
Two-stage pipeline:
1. **Intent Analysis** (`/api/analyze-intent`): Categorizes user messages
2. **Chat Response** (`/api/chat`): Generates contextual responses via OpenAI function calling

### Dynamic Prompt System
- `/lib/prompt-builder.ts`: Constructs prompts based on intent analysis
- `/lib/intent-analyzer.ts`: Categorizes user intent and recommends treatments
- Treatment-specific prompts dynamically loaded

## Project Structure

```
src/
├── app/                          # Next.js App Router pages
│   ├── api/                      # API routes (chat, intent, admin, etc.)
│   ├── implant/                  # 임플란트 페이지
│   ├── denture/                  # 틀니/전체임플란트 페이지
│   ├── whitening/                # 미백/라미네이트 페이지
│   ├── wisdom-tooth/             # 사랑니 발치 페이지
│   ├── cavity-treatment/         # 충치/신경치료 페이지
│   ├── gum-care/                 # 잇몸치료/스케일링 페이지
│   ├── consultation/             # AI 상담 페이지
│   ├── chat/                     # 채팅 인터페이스
│   ├── admin/                    # 관리자 페이지
│   ├── (regional pages)/         # 지역별 SEO 페이지 (godeok, pyeongtaek, etc.)
│   └── (language dirs)/          # 다국어 (en, jp, cn, vi, th, ru, mn, uz)
├── components/
│   ├── home/                     # 메인 홈페이지 컴포넌트 (완료)
│   │   ├── GNB.tsx               # 네비게이션 바
│   │   ├── HeroSection.tsx       # 히어로 섹션
│   │   ├── StatsSection.tsx      # 통계 섹션
│   │   ├── ZeroFailureSection.tsx # 고덕 에듀타운 첫번째 치과
│   │   ├── WhyBestSection.tsx    # 최고인 이유 4가지
│   │   ├── TreatmentSection.tsx  # 진료 분야 카드
│   │   ├── DoctorSection.tsx     # 의료진 소개
│   │   ├── YouTubeSection.tsx    # YouTube (placeholder - returns null)
│   │   ├── FAQSection.tsx        # FAQ
│   │   ├── CTASection.tsx        # CTA 배너
│   │   ├── LocationSection.tsx   # 오시는 길 + 시설사진
│   │   ├── FooterSection.tsx     # 푸터 + 모달 (개인정보, 약관, 비급여)
│   │   └── FixedCTAButton.tsx    # 하단 고정 CTA 버튼
│   ├── implant/                  # 임플란트 서브페이지 컴포넌트
│   ├── denture/                  # 틀니 서브페이지 컴포넌트
│   ├── wisdom-tooth/             # 사랑니 서브페이지 컴포넌트
│   ├── cavity-treatment/         # 충치치료 서브페이지 컴포넌트
│   ├── whitening/                # 미백 서브페이지 컴포넌트
│   ├── gum-care/                 # 잇몸치료 서브페이지 컴포넌트
│   └── (language dirs)/          # 다국어 컴포넌트
├── lib/
│   ├── types.ts                  # TypeScript interfaces
│   ├── openai.ts                 # OpenAI client
│   ├── prompts.ts                # Static prompt templates
│   ├── prompt-builder.ts         # Dynamic prompt construction
│   ├── intent-analyzer.ts        # Intent analysis logic
│   ├── faqData.ts                # FAQ 데이터
│   └── schema.ts                 # JSON-LD schema
└── public/images/goduk_images/   # 고덕퍼스트치과 이미지 파일들
```

## Conversion Status (경성대메디스 → 고덕퍼스트)

### Completed
- 모든 홈페이지 컴포넌트 (`src/components/home/*`) - 텍스트, 색상, 이미지, 링크 전부 변환 완료
- `src/app/layout.tsx` - 메타데이터, JSON-LD, OG tags
- `src/app/page.tsx` - JSON-LD ItemList, SiteNavigationElement
- 색상 스키마 전체 교체 (#006aff → #008095 계열)
- 틀니/전체임플란트 메뉴 추가 (TreatmentSection, GNB)

### Remaining (TODO)
- 서브페이지 컴포넌트 (`src/components/implant/`, `wisdom-tooth/`, etc.) - 아직 경성대메디스 텍스트 남아있을 수 있음
- 서브페이지 색상 (#07B8DA 등 이전 색상 남아있음)
- 다국어 컴포넌트 (`src/components/en/`, `jp/`, etc.) - 이전 치과 정보 남아있음
- 지역별 페이지 (`src/app/yongho/`, `geoje/`, etc.) - 부산 지역 페이지 → 평택 지역으로 변환 필요
- `src/lib/prompts.ts`, `prompt-builder.ts` - AI 챗봇 프롬프트 내용 업데이트
- 이미지 파일 정리 (이전 치과 이미지 제거)

## Key Patterns

### Treatment Pages
각 진료 분야별 서브페이지 구조:
- `/implant` - 임플란트
- `/denture` - 틀니/전체임플란트
- `/whitening` - 미백/라미네이트
- `/wisdom-tooth` - 사랑니 발치
- `/cavity-treatment` - 충치/신경치료
- `/gum-care` - 잇몸치료/스케일링

### Image Paths
고덕퍼스트치과 이미지: `/images/goduk_images/` 디렉토리
- 한글 파일명 사용 가능 (Next.js Image 컴포넌트 호환)
- SVG는 `<img>` 태그 사용 (Next.js Image는 SVG 최적화 안함)

### Common Issues
- CSS gradient text 미작동: `WebkitBackgroundClip: 'text'` + `WebkitTextFillColor: 'transparent'` → 파란 사각형으로 렌더링됨. 단색 사용할 것.
- `src/app/` 폴더 파일이 사라지면: `git restore src/app/` 으로 복원

## Environment Configuration

`.env.local` 필요:
```
OPENAI_API_KEY=...
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
```
# currentDate
Today's date is 2026-03-05.
