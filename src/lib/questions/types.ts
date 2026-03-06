import { QuestionOption } from '../types';

export type QuestionNode = {
  question: string;
  options: QuestionOption[];
  next?: Record<string, QuestionNode>;
  allowMultiSelect?: boolean;  // 복수 선택 가능 여부 (전신질환 등)
  // 심미 상담 전용 속성
  showDoctorCredentials?: boolean;  // 원장 소개 카드 표시 플래그
  treatmentPath?: 'whitening' | 'laminate' | 'nerve_treatment';  // 미백/라미네이트/신경치료 경로
  isTerminal?: boolean;  // 종료 노드 여부 (Q2 후 바로 종합 답변)
  // 충치/신경/보철치료 전용 속성
  answerType?: 'answer1' | 'answer2' | 'answer3' | 'answer4';  // 답안 유형 (답안1~4)
};

export type LanguageQuestionTree = {
  [key: string]: QuestionNode & { next?: Record<string, QuestionNode> };
};

