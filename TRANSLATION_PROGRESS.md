# 외국어 번역 진행 현황

빌드: TypeScript 에러 0건
마지막 업데이트: 2026-03-26

## 언어별 현황

### ✅ EN (영어) - 완료 (145줄 = 법적문서)
### ✅ JP (일본어) - 완료 (10줄 = 경로)
### ✅ CN (중국어) - 거의 완료 (93줄 = 경로+주석)
### ✅ VI (베트남어) - 완료 (5줄)
### ✅ RU (러시아어) - 완료 (0줄)
### ✅ MN (몽골어) - 완료 (0줄)

### ✅ TH (태국어) - 완료 (경로+주석만 남음)
완료:
- 홈 컴포넌트 전부 (DoctorSection 포함)
- tmj/ 전부
- gum-care/ 전부
- whitening/ 전부
- denture/ 전부 (InHouseLabSection, SkillDifferenceSection, WhyBestNewSection 포함)
- implant/ 전부 (WhyBestNewSection, BeforeAfterSection, AfterCareSection, SkillDifferenceSection, WarrantySection, InHouseLabSection, BestReasonSection, VideoSection 포함)
- cavity-treatment/ 전부 (CasesSection, SedationSection, TreatmentMethodsSection, DoctorProfileSection, BeforeAfterSection, ComparisonSection, OneDayInlaySection, BlogColumnSection, VideoSection, QuestionSection, HeroSection 포함)

### ✅ UZ (우즈벡어) - 완료 (경로+주석만 남음)
완료: 홈 컴포넌트 + 전 서브페이지 (implant, cavity-treatment, gum-care, whitening, denture, tmj, wisdom-tooth)
⚠️ 우즈벡어 아포스트로피: `o'z` 대신 유니코드 `oʼz` (U+02BC)

## 접근 방법
1. 파일을 Read로 읽는다
2. Edit으로 한국어 텍스트만 번역 (파일경로 절대 변경 금지)
3. 치환(sed)은 파일경로를 깨뜨리므로 사용 금지

## 완료 사항
- 미세현미경/큐레이 전체 제거
- 1호/1인/끝까지 배지 제거
- 유튜브 섹션 주석처리
- 로고 교체 (8개 언어)
- TMJ/Denture 신규 페이지 8개 언어 생성
- GNB 메뉴 8개 항목 (8개 언어)
- layout.tsx 8개 언어
