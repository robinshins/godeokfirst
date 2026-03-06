export interface ConsultationData {
  name: string;
  phone: string; // 기존 호환성 유지
  contactType?: 'phone' | 'email' | 'instagram'; // 연락 방법 타입
  contactValue?: string; // 실제 연락처 값
  age: number;
  gender: 'male' | 'female';
  consultationContent: string;
  referrerData?: ReferrerData;
  visitSource?: string; // 내원 경로
  naverSearchKeyword?: string; // 네이버 검색어
  partnershipName?: string; // 제휴업체명
  dentalInsurance?: 'none' | 'yes' | 'unknown'; // 치아보험 가입 유무
  insuranceCompany?: string; // 보험 회사명
  insuranceYear?: number; // 보험 가입년도
}

export interface ReferrerData {
  referrerUrl: string;
  referrerSource: string;
  utmSource: string | null;
  utmMedium: string | null;
  utmCampaign: string | null;
  searchQuery: string | null;
  timestamp: string;
}

export interface CaseImage {
  beforeImage: string;
  afterImage: string;
  intermediateImage?: string;  // 당일 임시치아 등 중간 단계 이미지
  intermediateLabel?: string;  // "수술 당일 임시치아" 등 라벨
  title: string;
  description: string;
  translations?: {
    en?: { title: string; description: string; };
    jp?: { title: string; description: string; };
    cn?: { title: string; description: string; };
    vi?: { title: string; description: string; };
    th?: { title: string; description: string; };
    ru?: { title: string; description: string; };
    mn?: { title: string; description: string; };
    uz?: { title: string; description: string; };
  };
}

export interface SedationCardImage {
  src: string;
  alt: string;
  title: string;
}

export interface SedationCard {
  show: boolean;
  images: SedationCardImage[];
  highlights: string[];
  headerText: string;
  emphasisText: string;
}

export interface CostWarningCheckItem {
  title: string;
  description: string;
}

export interface CostWarningCard {
  show: boolean;
  headerText: string;
  subHeaderText: string;
  checkItems: CostWarningCheckItem[];
  footerText: string;
}

// 원장님 소개 카드 (심미 상담용)
export interface DoctorCredentialCard {
  show: boolean;
  credentials: string[];  // ["심미치아보철 인정의", "SKCD 정회원", "미국 텍사스 A&M 보철 연구회 회원"]
  headerText: string;
  patientVideo?: string;  // 웃는 환자 비디오
}

// 이벤트 배너 카드 (깜빡이 효과)
export interface EventBannerCard {
  show: boolean;
  eventTitle: string;
  price: string;
  isUrgent: boolean;  // 깜빡이 효과 트리거
  ctaText: string;
  ctaUrl: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  image?: string;
  caseImages?: CaseImage[];
  videoIframes?: string[];
  structuredQuestion?: StructuredQuestion;
  isRecommendation?: boolean;
  selectedOptionId?: string; // 사용자가 선택한 옵션 ID
  sedationCard?: SedationCard; // 의식하진정요법 어필 카드
  costWarningCard?: CostWarningCard; // 저가 덤핑 주의 카드
  doctorCredentialCard?: DoctorCredentialCard; // 원장 소개 카드 (심미 상담용)
  eventBannerCard?: EventBannerCard; // 이벤트 배너 카드
  cosmeticPath?: 'whitening' | 'laminate'; // 심미 경로 추적
  skipPhoneOption?: boolean; // 전화 상담 옵션 스킵 (심미 상담용)
}

export interface PresetOption {
  id: string;
  title: string;
  description: string;
}

export interface Treatment {
  id: string;
  name: string;
  description: string;
  price?: string;
  features: string[];
  suitableFor: string[];
}

export interface QuestionOption {
  id: string;
  text: string;
}

export interface StructuredQuestion {
  question: string;
  options: QuestionOption[];
  allowCustomInput?: boolean;
  allowMultiSelect?: boolean;  // 복수 선택 가능 여부 (전신질환 등)
  placeholder?: string;
}

export interface ChatAPIResponse {
  content: string;
  showImage?: boolean;
  shouldEnd?: boolean;
  caseImages?: CaseImage[];
  videoIframes?: string[];
  structuredQuestion?: StructuredQuestion;
  isRecommendation?: boolean;
  doctorCredentialCard?: DoctorCredentialCard; // 원장 소개 카드 (심미 상담용)
  eventBannerCard?: EventBannerCard; // 이벤트 배너 카드
  cosmeticPath?: 'whitening' | 'laminate'; // 심미 경로 추적
  skipPhoneOption?: boolean; // 전화 상담 옵션 스킵 (심미 상담용)
}

export interface IntentAnalysis {
  categories: string[];
  recommendedTreatments: string[];
  urgency: 'low' | 'medium' | 'high';
  stage: 'initial' | 'interested' | 'ready_to_book';
  consultationTopic?: string; // 상담 주제 (사랑니 발치, 임플란트 등)
}

export type ConsultationStatus = '대기중' | '보류중' | '1차 리콜' | '2차 리콜' | '3차 리콜' | '4차 리콜' | '내원 전 미동의' | '내원 예약 완료' | '치료 진행' | '상담 미동의';

export interface ConsultationLog {
  id?: string;
  created_at?: string;
  name: string;
  phone: string;
  contact_type?: string | null; // 'phone' | 'email' | 'instagram'
  contact_value?: string | null; // 실제 연락처 값
  age: number;
  consultation_content: string;
  referrer_url: string;
  referrer_source: string;
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
  search_query: string | null;
  chat_history: ChatMessage[];
  status: ConsultationStatus;
  visit_source?: string | null;
  naver_search_keyword?: string | null;
  partnership_name?: string | null;
  dental_insurance?: string | null;
  insurance_company?: string | null;
  insurance_year?: number | null;
  booking_type?: 'naver_reservation' | 'phone_consultation' | null;
  preferred_call_time?: string | null;
  hasPatientIntake?: boolean; // 문진표 작성 여부 (방문)
  memo?: string | null; // 관리자 메모
}