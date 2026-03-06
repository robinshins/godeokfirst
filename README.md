# 피부과 AI 채팅 서비스

Next.js 14를 기반으로 구축된 치과 상담 AI 챗봇 서비스입니다.

## 주요 기능

- 📋 **상담 신청 폼**: 이름, 나이, 성별, 상담희망내용 입력
- 🎯 **프리셋 옵션**: 리프팅, 브티, 색소치료 등 빠른 선택
- 🤖 **AI 챗봇**: OpenAI GPT-4.1-mini를 활용한 피부과 전문 상담
- 📱 **모바일 전용**: 모든 기기에서 모바일 뷰로 최적화

## 기술 스택

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **AI**: OpenAI API (GPT-4.1-mini)
- **Form**: React Hook Form + Zod
- **State Management**: React useState + localStorage

## 시작하기

### 1. 패키지 설치
```bash
npm install
```

### 2. 환경변수 설정
`.env.local` 파일에 OpenAI API 키를 설정하세요:
```
OPENAI_API_KEY=your_actual_openai_api_key_here
```

### 3. 개발 서버 실행
```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

## 프로젝트 구조

```
src/
├── app/
│   ├── page.tsx              # 메인 상담 신청 페이지
│   ├── chat/
│   │   └── page.tsx          # AI 챗봇 페이지
│   ├── api/
│   │   └── chat/route.ts     # OpenAI API 연동
│   ├── layout.tsx            # 루트 레이아웃
│   └── globals.css
├── components/
│   ├── ConsultationForm.tsx  # 상담 신청 폼
│   ├── ChatInterface.tsx     # 채팅 인터페이스
│   ├── PresetOptions.tsx     # 프리셋 선택 옵션
│   └── FormInput.tsx         # 폼 입력 컴포넌트
└── lib/
    ├── types.ts              # TypeScript 타입 정의
    ├── openai.ts             # OpenAI 설정
    └── prompts.ts            # AI 프롬프트
```

## 사용법

1. **상담 신청**: 메인 페이지에서 개인정보와 상담희망내용 입력
2. **프리셋 선택**: 리프팅, 브티, 색소치료 중 선택하거나 직접 입력
3. **AI 상담**: 폼 제출 후 자동으로 채팅 페이지로 이동
4. **실시간 대화**: AI와 실시간으로 치과 상담 진행

## 특징

- **모바일 우선 설계**: PC에서도 모바일 뷰로 일관된 경험 제공
- **전문 상담**: 피부과 특화 프롬프트로 전문적인 상담 제공
- **사용자 친화적**: 직관적인 UI/UX로 쉬운 사용
- **데이터 보안**: localStorage를 활용한 클라이언트 측 데이터 관리
# thewellnessclinic
# medisksu
