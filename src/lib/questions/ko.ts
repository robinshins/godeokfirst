import { LanguageQuestionTree } from './types';
export const QUESTION_TREE_KO: LanguageQuestionTree = {
  // 1단계: 초기 증상 파악
  initial: {
    question: "어떤 증상이나 불편함이 있으신가요?",
    options: [
      { id: "pain", text: "통증이 있어요" },
      { id: "aesthetic", text: "심미적으로 개선하고 싶어요" },
      { id: "missing_tooth", text: "치아가 빠졌어요" },
      { id: "gum_issue", text: "잇몸에 문제가 있어요" },
      { id: "checkup", text: "정기 검진 및 예방" }
    ]
  },

  // ============================================================
  // 충치/신경/보철치료 관련 질문 (7단계 플로우)
  // Q1: 현재 불편한 상황 → 답안 결정 (answer1~4)
  // Q2: 불편한 부위
  // Q3: 증상 심해지는 경우
  // Q4: 치료 결정시 중요한 것
  // Q5: 치료 망설이는 이유
  // Q6: 궁금한 점
  // Q7: 당일 진료 희망 여부
  // → 최종 추천 (병원 강점 + 답안별 케이스)
  // ============================================================
  cavity_nerve: {
    question: "현재 불편하신 상황은 무엇인가요?",
    options: [
      { id: "cavity_pain", text: "치아가 아파요" },           // → 답안1
      { id: "cavity_sensitive", text: "치아가 시려요" },      // → 답안2
      { id: "cavity_broken", text: "치아가 깨졌어요" },       // → 답안3
      { id: "cavity_eating", text: "식사할 때 불편해요" },    // → 답안4
      { id: "cavity_dark", text: "치아가 검게 보여요" },      // → 답안2
      { id: "cavity_brushing", text: "양치할 때 불편해요" }   // → 답안4
    ],
    next: {
      // 답안1: 치아가 아파요
      cavity_pain: {
        question: "현재 불편한 부위(치아, 잇몸)는 어디인가요?",
        answerType: "answer1",
        options: [
          { id: "area_specific", text: "특정 치아 1개 또는 2개가 아파요" },
          { id: "area_wide", text: "왼쪽 위/아래 등 넓은 부위가 아파요" },
          { id: "area_unknown", text: "잘 모르겠어요" }
        ],
        next: {
          area_specific: { question: "현재 불편한 증상이 더 심해지는 경우는 언제인가요?", answerType: "answer1", options: [{ id: "worse_chew", text: "씹을 때" }, { id: "worse_cold", text: "찬물을 마실 때" }, { id: "worse_hot", text: "뜨거운 물을 마실 때" }, { id: "worse_rest", text: "가만히 있을 때" }], next: { worse_chew: { question: "치료를 결정함에 있어서 가장 중요하게 생각하는 것은 무엇인가요?", answerType: "answer1", options: [{ id: "priority_cost", text: "저렴한 비용" }, { id: "priority_fear", text: "치과 공포 해소" }, { id: "priority_duration", text: "치료 기간" }, { id: "priority_result", text: "치료 결과" }, { id: "priority_dentist", text: "적절한 치과 선택 (전문의)" }], next: { priority_cost: { question: "지금까지 치료를 망설이고 있는 이유가 있나요?", answerType: "answer1", options: [{ id: "hesitate_cost", text: "비용 때문에" }, { id: "hesitate_fear", text: "치과 공포증 때문에" }, { id: "hesitate_choice", text: "적절한 치과 선택이 어려워서" }], next: { hesitate_cost: { question: "마지막으로 궁금하거나 요청사항이 있으신가요?", answerType: "answer1", options: [{ id: "request_none", text: "없음" }, { id: "request_detail", text: "상담 시 자세히 말씀드릴게요" }], next: { request_none: { question: "당일 진료를 희망하시나요?", treatmentPath: "nerve_treatment", answerType: "answer1", isTerminal: true, options: [{ id: "same_day_yes", text: "네, 당일 진료 희망합니다" }, { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }] }, request_detail: { question: "당일 진료를 희망하시나요?", treatmentPath: "nerve_treatment", answerType: "answer1", isTerminal: true, options: [{ id: "same_day_yes", text: "네, 당일 진료 희망합니다" }, { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }] } } }, hesitate_fear: { question: "마지막으로 궁금하거나 요청사항이 있으신가요?", answerType: "answer1", options: [{ id: "request_none", text: "없음" }, { id: "request_detail", text: "상담 시 자세히 말씀드릴게요" }], next: { request_none: { question: "당일 진료를 희망하시나요?", treatmentPath: "nerve_treatment", answerType: "answer1", isTerminal: true, options: [{ id: "same_day_yes", text: "네, 당일 진료 희망합니다" }, { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }] }, request_detail: { question: "당일 진료를 희망하시나요?", treatmentPath: "nerve_treatment", answerType: "answer1", isTerminal: true, options: [{ id: "same_day_yes", text: "네, 당일 진료 희망합니다" }, { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }] } } }, hesitate_choice: { question: "마지막으로 궁금하거나 요청사항이 있으신가요?", answerType: "answer1", options: [{ id: "request_none", text: "없음" }, { id: "request_detail", text: "상담 시 자세히 말씀드릴게요" }], next: { request_none: { question: "당일 진료를 희망하시나요?", treatmentPath: "nerve_treatment", answerType: "answer1", isTerminal: true, options: [{ id: "same_day_yes", text: "네, 당일 진료 희망합니다" }, { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }] }, request_detail: { question: "당일 진료를 희망하시나요?", treatmentPath: "nerve_treatment", answerType: "answer1", isTerminal: true, options: [{ id: "same_day_yes", text: "네, 당일 진료 희망합니다" }, { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }] } } } } }, priority_fear: { question: "지금까지 치료를 망설이고 있는 이유가 있나요?", answerType: "answer1", options: [{ id: "hesitate_cost", text: "비용 때문에" }, { id: "hesitate_fear", text: "치과 공포증 때문에" }, { id: "hesitate_choice", text: "적절한 치과 선택이 어려워서" }], next: { hesitate_cost: { question: "마지막으로 궁금하거나 요청사항이 있으신가요?", answerType: "answer1", options: [{ id: "request_none", text: "없음" }, { id: "request_detail", text: "상담 시 자세히 말씀드릴게요" }], next: { request_none: { question: "당일 진료를 희망하시나요?", treatmentPath: "nerve_treatment", answerType: "answer1", isTerminal: true, options: [{ id: "same_day_yes", text: "네, 당일 진료 희망합니다" }, { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }] }, request_detail: { question: "당일 진료를 희망하시나요?", treatmentPath: "nerve_treatment", answerType: "answer1", isTerminal: true, options: [{ id: "same_day_yes", text: "네, 당일 진료 희망합니다" }, { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }] } } }, hesitate_fear: { question: "마지막으로 궁금하거나 요청사항이 있으신가요?", answerType: "answer1", options: [{ id: "request_none", text: "없음" }, { id: "request_detail", text: "상담 시 자세히 말씀드릴게요" }], next: { request_none: { question: "당일 진료를 희망하시나요?", treatmentPath: "nerve_treatment", answerType: "answer1", isTerminal: true, options: [{ id: "same_day_yes", text: "네, 당일 진료 희망합니다" }, { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }] }, request_detail: { question: "당일 진료를 희망하시나요?", treatmentPath: "nerve_treatment", answerType: "answer1", isTerminal: true, options: [{ id: "same_day_yes", text: "네, 당일 진료 희망합니다" }, { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }] } } }, hesitate_choice: { question: "마지막으로 궁금하거나 요청사항이 있으신가요?", answerType: "answer1", options: [{ id: "request_none", text: "없음" }, { id: "request_detail", text: "상담 시 자세히 말씀드릴게요" }], next: { request_none: { question: "당일 진료를 희망하시나요?", treatmentPath: "nerve_treatment", answerType: "answer1", isTerminal: true, options: [{ id: "same_day_yes", text: "네, 당일 진료 희망합니다" }, { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }] }, request_detail: { question: "당일 진료를 희망하시나요?", treatmentPath: "nerve_treatment", answerType: "answer1", isTerminal: true, options: [{ id: "same_day_yes", text: "네, 당일 진료 희망합니다" }, { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }] } } } } }, priority_duration: { question: "지금까지 치료를 망설이고 있는 이유가 있나요?", answerType: "answer1", options: [{ id: "hesitate_cost", text: "비용 때문에" }, { id: "hesitate_fear", text: "치과 공포증 때문에" }, { id: "hesitate_choice", text: "적절한 치과 선택이 어려워서" }], next: { hesitate_cost: { question: "마지막으로 궁금하거나 요청사항이 있으신가요?", answerType: "answer1", options: [{ id: "request_none", text: "없음" }, { id: "request_detail", text: "상담 시 자세히 말씀드릴게요" }], next: { request_none: { question: "당일 진료를 희망하시나요?", treatmentPath: "nerve_treatment", answerType: "answer1", isTerminal: true, options: [{ id: "same_day_yes", text: "네, 당일 진료 희망합니다" }, { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }] }, request_detail: { question: "당일 진료를 희망하시나요?", treatmentPath: "nerve_treatment", answerType: "answer1", isTerminal: true, options: [{ id: "same_day_yes", text: "네, 당일 진료 희망합니다" }, { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }] } } }, hesitate_fear: { question: "마지막으로 궁금하거나 요청사항이 있으신가요?", answerType: "answer1", options: [{ id: "request_none", text: "없음" }, { id: "request_detail", text: "상담 시 자세히 말씀드릴게요" }], next: { request_none: { question: "당일 진료를 희망하시나요?", treatmentPath: "nerve_treatment", answerType: "answer1", isTerminal: true, options: [{ id: "same_day_yes", text: "네, 당일 진료 희망합니다" }, { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }] }, request_detail: { question: "당일 진료를 희망하시나요?", treatmentPath: "nerve_treatment", answerType: "answer1", isTerminal: true, options: [{ id: "same_day_yes", text: "네, 당일 진료 희망합니다" }, { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }] } } }, hesitate_choice: { question: "마지막으로 궁금하거나 요청사항이 있으신가요?", answerType: "answer1", options: [{ id: "request_none", text: "없음" }, { id: "request_detail", text: "상담 시 자세히 말씀드릴게요" }], next: { request_none: { question: "당일 진료를 희망하시나요?", treatmentPath: "nerve_treatment", answerType: "answer1", isTerminal: true, options: [{ id: "same_day_yes", text: "네, 당일 진료 희망합니다" }, { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }] }, request_detail: { question: "당일 진료를 희망하시나요?", treatmentPath: "nerve_treatment", answerType: "answer1", isTerminal: true, options: [{ id: "same_day_yes", text: "네, 당일 진료 희망합니다" }, { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }] } } } } }, priority_result: { question: "지금까지 치료를 망설이고 있는 이유가 있나요?", answerType: "answer1", options: [{ id: "hesitate_cost", text: "비용 때문에" }, { id: "hesitate_fear", text: "치과 공포증 때문에" }, { id: "hesitate_choice", text: "적절한 치과 선택이 어려워서" }], next: { hesitate_cost: { question: "마지막으로 궁금하거나 요청사항이 있으신가요?", answerType: "answer1", options: [{ id: "request_none", text: "없음" }, { id: "request_detail", text: "상담 시 자세히 말씀드릴게요" }], next: { request_none: { question: "당일 진료를 희망하시나요?", treatmentPath: "nerve_treatment", answerType: "answer1", isTerminal: true, options: [{ id: "same_day_yes", text: "네, 당일 진료 희망합니다" }, { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }] }, request_detail: { question: "당일 진료를 희망하시나요?", treatmentPath: "nerve_treatment", answerType: "answer1", isTerminal: true, options: [{ id: "same_day_yes", text: "네, 당일 진료 희망합니다" }, { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }] } } }, hesitate_fear: { question: "마지막으로 궁금하거나 요청사항이 있으신가요?", answerType: "answer1", options: [{ id: "request_none", text: "없음" }, { id: "request_detail", text: "상담 시 자세히 말씀드릴게요" }], next: { request_none: { question: "당일 진료를 희망하시나요?", treatmentPath: "nerve_treatment", answerType: "answer1", isTerminal: true, options: [{ id: "same_day_yes", text: "네, 당일 진료 희망합니다" }, { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }] }, request_detail: { question: "당일 진료를 희망하시나요?", treatmentPath: "nerve_treatment", answerType: "answer1", isTerminal: true, options: [{ id: "same_day_yes", text: "네, 당일 진료 희망합니다" }, { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }] } } }, hesitate_choice: { question: "마지막으로 궁금하거나 요청사항이 있으신가요?", answerType: "answer1", options: [{ id: "request_none", text: "없음" }, { id: "request_detail", text: "상담 시 자세히 말씀드릴게요" }], next: { request_none: { question: "당일 진료를 희망하시나요?", treatmentPath: "nerve_treatment", answerType: "answer1", isTerminal: true, options: [{ id: "same_day_yes", text: "네, 당일 진료 희망합니다" }, { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }] }, request_detail: { question: "당일 진료를 희망하시나요?", treatmentPath: "nerve_treatment", answerType: "answer1", isTerminal: true, options: [{ id: "same_day_yes", text: "네, 당일 진료 희망합니다" }, { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }] } } } } }, priority_dentist: { question: "지금까지 치료를 망설이고 있는 이유가 있나요?", answerType: "answer1", options: [{ id: "hesitate_cost", text: "비용 때문에" }, { id: "hesitate_fear", text: "치과 공포증 때문에" }, { id: "hesitate_choice", text: "적절한 치과 선택이 어려워서" }], next: { hesitate_cost: { question: "마지막으로 궁금하거나 요청사항이 있으신가요?", answerType: "answer1", options: [{ id: "request_none", text: "없음" }, { id: "request_detail", text: "상담 시 자세히 말씀드릴게요" }], next: { request_none: { question: "당일 진료를 희망하시나요?", treatmentPath: "nerve_treatment", answerType: "answer1", isTerminal: true, options: [{ id: "same_day_yes", text: "네, 당일 진료 희망합니다" }, { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }] }, request_detail: { question: "당일 진료를 희망하시나요?", treatmentPath: "nerve_treatment", answerType: "answer1", isTerminal: true, options: [{ id: "same_day_yes", text: "네, 당일 진료 희망합니다" }, { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }] } } }, hesitate_fear: { question: "마지막으로 궁금하거나 요청사항이 있으신가요?", answerType: "answer1", options: [{ id: "request_none", text: "없음" }, { id: "request_detail", text: "상담 시 자세히 말씀드릴게요" }], next: { request_none: { question: "당일 진료를 희망하시나요?", treatmentPath: "nerve_treatment", answerType: "answer1", isTerminal: true, options: [{ id: "same_day_yes", text: "네, 당일 진료 희망합니다" }, { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }] }, request_detail: { question: "당일 진료를 희망하시나요?", treatmentPath: "nerve_treatment", answerType: "answer1", isTerminal: true, options: [{ id: "same_day_yes", text: "네, 당일 진료 희망합니다" }, { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }] } } }, hesitate_choice: { question: "마지막으로 궁금하거나 요청사항이 있으신가요?", answerType: "answer1", options: [{ id: "request_none", text: "없음" }, { id: "request_detail", text: "상담 시 자세히 말씀드릴게요" }], next: { request_none: { question: "당일 진료를 희망하시나요?", treatmentPath: "nerve_treatment", answerType: "answer1", isTerminal: true, options: [{ id: "same_day_yes", text: "네, 당일 진료 희망합니다" }, { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }] }, request_detail: { question: "당일 진료를 희망하시나요?", treatmentPath: "nerve_treatment", answerType: "answer1", isTerminal: true, options: [{ id: "same_day_yes", text: "네, 당일 진료 희망합니다" }, { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }] } } } } } } }, worse_cold: { question: "치료를 결정함에 있어서 가장 중요하게 생각하는 것은 무엇인가요?", answerType: "answer1", options: [{ id: "priority_cost", text: "저렴한 비용" }, { id: "priority_fear", text: "치과 공포 해소" }, { id: "priority_duration", text: "치료 기간" }, { id: "priority_result", text: "치료 결과" }, { id: "priority_dentist", text: "적절한 치과 선택 (전문의)" }], next: { priority_cost: { question: "지금까지 치료를 망설이고 있는 이유가 있나요?", answerType: "answer1", options: [{ id: "hesitate_cost", text: "비용 때문에" }, { id: "hesitate_fear", text: "치과 공포증 때문에" }, { id: "hesitate_choice", text: "적절한 치과 선택이 어려워서" }], next: { hesitate_cost: { question: "마지막으로 궁금하거나 요청사항이 있으신가요?", answerType: "answer1", options: [{ id: "request_none", text: "없음" }, { id: "request_detail", text: "상담 시 자세히 말씀드릴게요" }], next: { request_none: { question: "당일 진료를 희망하시나요?", treatmentPath: "nerve_treatment", answerType: "answer1", isTerminal: true, options: [{ id: "same_day_yes", text: "네, 당일 진료 희망합니다" }, { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }] }, request_detail: { question: "당일 진료를 희망하시나요?", treatmentPath: "nerve_treatment", answerType: "answer1", isTerminal: true, options: [{ id: "same_day_yes", text: "네, 당일 진료 희망합니다" }, { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }] } } }, hesitate_fear: { question: "마지막으로 궁금하거나 요청사항이 있으신가요?", answerType: "answer1", options: [{ id: "request_none", text: "없음" }, { id: "request_detail", text: "상담 시 자세히 말씀드릴게요" }], next: { request_none: { question: "당일 진료를 희망하시나요?", treatmentPath: "nerve_treatment", answerType: "answer1", isTerminal: true, options: [{ id: "same_day_yes", text: "네, 당일 진료 희망합니다" }, { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }] }, request_detail: { question: "당일 진료를 희망하시나요?", treatmentPath: "nerve_treatment", answerType: "answer1", isTerminal: true, options: [{ id: "same_day_yes", text: "네, 당일 진료 희망합니다" }, { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }] } } }, hesitate_choice: { question: "마지막으로 궁금하거나 요청사항이 있으신가요?", answerType: "answer1", options: [{ id: "request_none", text: "없음" }, { id: "request_detail", text: "상담 시 자세히 말씀드릴게요" }], next: { request_none: { question: "당일 진료를 희망하시나요?", treatmentPath: "nerve_treatment", answerType: "answer1", isTerminal: true, options: [{ id: "same_day_yes", text: "네, 당일 진료 희망합니다" }, { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }] }, request_detail: { question: "당일 진료를 희망하시나요?", treatmentPath: "nerve_treatment", answerType: "answer1", isTerminal: true, options: [{ id: "same_day_yes", text: "네, 당일 진료 희망합니다" }, { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }] } } } } }, priority_fear: { question: "지금까지 치료를 망설이고 있는 이유가 있나요?", answerType: "answer1", options: [{ id: "hesitate_cost", text: "비용 때문에" }, { id: "hesitate_fear", text: "치과 공포증 때문에" }, { id: "hesitate_choice", text: "적절한 치과 선택이 어려워서" }], next: { hesitate_cost: { question: "마지막으로 궁금하거나 요청사항이 있으신가요?", answerType: "answer1", options: [{ id: "request_none", text: "없음" }, { id: "request_detail", text: "상담 시 자세히 말씀드릴게요" }], next: { request_none: { question: "당일 진료를 희망하시나요?", treatmentPath: "nerve_treatment", answerType: "answer1", isTerminal: true, options: [{ id: "same_day_yes", text: "네, 당일 진료 희망합니다" }, { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }] }, request_detail: { question: "당일 진료를 희망하시나요?", treatmentPath: "nerve_treatment", answerType: "answer1", isTerminal: true, options: [{ id: "same_day_yes", text: "네, 당일 진료 희망합니다" }, { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }] } } }, hesitate_fear: { question: "마지막으로 궁금하거나 요청사항이 있으신가요?", answerType: "answer1", options: [{ id: "request_none", text: "없음" }, { id: "request_detail", text: "상담 시 자세히 말씀드릴게요" }], next: { request_none: { question: "당일 진료를 희망하시나요?", treatmentPath: "nerve_treatment", answerType: "answer1", isTerminal: true, options: [{ id: "same_day_yes", text: "네, 당일 진료 희망합니다" }, { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }] }, request_detail: { question: "당일 진료를 희망하시나요?", treatmentPath: "nerve_treatment", answerType: "answer1", isTerminal: true, options: [{ id: "same_day_yes", text: "네, 당일 진료 희망합니다" }, { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }] } } }, hesitate_choice: { question: "마지막으로 궁금하거나 요청사항이 있으신가요?", answerType: "answer1", options: [{ id: "request_none", text: "없음" }, { id: "request_detail", text: "상담 시 자세히 말씀드릴게요" }], next: { request_none: { question: "당일 진료를 희망하시나요?", treatmentPath: "nerve_treatment", answerType: "answer1", isTerminal: true, options: [{ id: "same_day_yes", text: "네, 당일 진료 희망합니다" }, { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }] }, request_detail: { question: "당일 진료를 희망하시나요?", treatmentPath: "nerve_treatment", answerType: "answer1", isTerminal: true, options: [{ id: "same_day_yes", text: "네, 당일 진료 희망합니다" }, { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }] } } } } }, priority_duration: { question: "지금까지 치료를 망설이고 있는 이유가 있나요?", answerType: "answer1", options: [{ id: "hesitate_cost", text: "비용 때문에" }, { id: "hesitate_fear", text: "치과 공포증 때문에" }, { id: "hesitate_choice", text: "적절한 치과 선택이 어려워서" }], next: { hesitate_cost: { question: "마지막으로 궁금하거나 요청사항이 있으신가요?", answerType: "answer1", options: [{ id: "request_none", text: "없음" }, { id: "request_detail", text: "상담 시 자세히 말씀드릴게요" }], next: { request_none: { question: "당일 진료를 희망하시나요?", treatmentPath: "nerve_treatment", answerType: "answer1", isTerminal: true, options: [{ id: "same_day_yes", text: "네, 당일 진료 희망합니다" }, { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }] }, request_detail: { question: "당일 진료를 희망하시나요?", treatmentPath: "nerve_treatment", answerType: "answer1", isTerminal: true, options: [{ id: "same_day_yes", text: "네, 당일 진료 희망합니다" }, { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }] } } }, hesitate_fear: { question: "마지막으로 궁금하거나 요청사항이 있으신가요?", answerType: "answer1", options: [{ id: "request_none", text: "없음" }, { id: "request_detail", text: "상담 시 자세히 말씀드릴게요" }], next: { request_none: { question: "당일 진료를 희망하시나요?", treatmentPath: "nerve_treatment", answerType: "answer1", isTerminal: true, options: [{ id: "same_day_yes", text: "네, 당일 진료 희망합니다" }, { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }] }, request_detail: { question: "당일 진료를 희망하시나요?", treatmentPath: "nerve_treatment", answerType: "answer1", isTerminal: true, options: [{ id: "same_day_yes", text: "네, 당일 진료 희망합니다" }, { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }] } } }, hesitate_choice: { question: "마지막으로 궁금하거나 요청사항이 있으신가요?", answerType: "answer1", options: [{ id: "request_none", text: "없음" }, { id: "request_detail", text: "상담 시 자세히 말씀드릴게요" }], next: { request_none: { question: "당일 진료를 희망하시나요?", treatmentPath: "nerve_treatment", answerType: "answer1", isTerminal: true, options: [{ id: "same_day_yes", text: "네, 당일 진료 희망합니다" }, { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }] }, request_detail: { question: "당일 진료를 희망하시나요?", treatmentPath: "nerve_treatment", answerType: "answer1", isTerminal: true, options: [{ id: "same_day_yes", text: "네, 당일 진료 희망합니다" }, { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }] } } } } }, priority_result: { question: "지금까지 치료를 망설이고 있는 이유가 있나요?", answerType: "answer1", options: [{ id: "hesitate_cost", text: "비용 때문에" }, { id: "hesitate_fear", text: "치과 공포증 때문에" }, { id: "hesitate_choice", text: "적절한 치과 선택이 어려워서" }], next: { hesitate_cost: { question: "마지막으로 궁금하거나 요청사항이 있으신가요?", answerType: "answer1", options: [{ id: "request_none", text: "없음" }, { id: "request_detail", text: "상담 시 자세히 말씀드릴게요" }], next: { request_none: { question: "당일 진료를 희망하시나요?", treatmentPath: "nerve_treatment", answerType: "answer1", isTerminal: true, options: [{ id: "same_day_yes", text: "네, 당일 진료 희망합니다" }, { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }] }, request_detail: { question: "당일 진료를 희망하시나요?", treatmentPath: "nerve_treatment", answerType: "answer1", isTerminal: true, options: [{ id: "same_day_yes", text: "네, 당일 진료 희망합니다" }, { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }] } } }, hesitate_fear: { question: "마지막으로 궁금하거나 요청사항이 있으신가요?", answerType: "answer1", options: [{ id: "request_none", text: "없음" }, { id: "request_detail", text: "상담 시 자세히 말씀드릴게요" }], next: { request_none: { question: "당일 진료를 희망하시나요?", treatmentPath: "nerve_treatment", answerType: "answer1", isTerminal: true, options: [{ id: "same_day_yes", text: "네, 당일 진료 희망합니다" }, { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }] }, request_detail: { question: "당일 진료를 희망하시나요?", treatmentPath: "nerve_treatment", answerType: "answer1", isTerminal: true, options: [{ id: "same_day_yes", text: "네, 당일 진료 희망합니다" }, { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }] } } }, hesitate_choice: { question: "마지막으로 궁금하거나 요청사항이 있으신가요?", answerType: "answer1", options: [{ id: "request_none", text: "없음" }, { id: "request_detail", text: "상담 시 자세히 말씀드릴게요" }], next: { request_none: { question: "당일 진료를 희망하시나요?", treatmentPath: "nerve_treatment", answerType: "answer1", isTerminal: true, options: [{ id: "same_day_yes", text: "네, 당일 진료 희망합니다" }, { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }] }, request_detail: { question: "당일 진료를 희망하시나요?", treatmentPath: "nerve_treatment", answerType: "answer1", isTerminal: true, options: [{ id: "same_day_yes", text: "네, 당일 진료 희망합니다" }, { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }] } } } } }, priority_dentist: { question: "지금까지 치료를 망설이고 있는 이유가 있나요?", answerType: "answer1", options: [{ id: "hesitate_cost", text: "비용 때문에" }, { id: "hesitate_fear", text: "치과 공포증 때문에" }, { id: "hesitate_choice", text: "적절한 치과 선택이 어려워서" }], next: { hesitate_cost: { question: "마지막으로 궁금하거나 요청사항이 있으신가요?", answerType: "answer1", options: [{ id: "request_none", text: "없음" }, { id: "request_detail", text: "상담 시 자세히 말씀드릴게요" }], next: { request_none: { question: "당일 진료를 희망하시나요?", treatmentPath: "nerve_treatment", answerType: "answer1", isTerminal: true, options: [{ id: "same_day_yes", text: "네, 당일 진료 희망합니다" }, { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }] }, request_detail: { question: "당일 진료를 희망하시나요?", treatmentPath: "nerve_treatment", answerType: "answer1", isTerminal: true, options: [{ id: "same_day_yes", text: "네, 당일 진료 희망합니다" }, { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }] } } }, hesitate_fear: { question: "마지막으로 궁금하거나 요청사항이 있으신가요?", answerType: "answer1", options: [{ id: "request_none", text: "없음" }, { id: "request_detail", text: "상담 시 자세히 말씀드릴게요" }], next: { request_none: { question: "당일 진료를 희망하시나요?", treatmentPath: "nerve_treatment", answerType: "answer1", isTerminal: true, options: [{ id: "same_day_yes", text: "네, 당일 진료 희망합니다" }, { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }] }, request_detail: { question: "당일 진료를 희망하시나요?", treatmentPath: "nerve_treatment", answerType: "answer1", isTerminal: true, options: [{ id: "same_day_yes", text: "네, 당일 진료 희망합니다" }, { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }] } } }, hesitate_choice: { question: "마지막으로 궁금하거나 요청사항이 있으신가요?", answerType: "answer1", options: [{ id: "request_none", text: "없음" }, { id: "request_detail", text: "상담 시 자세히 말씀드릴게요" }], next: { request_none: { question: "당일 진료를 희망하시나요?", treatmentPath: "nerve_treatment", answerType: "answer1", isTerminal: true, options: [{ id: "same_day_yes", text: "네, 당일 진료 희망합니다" }, { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }] }, request_detail: { question: "당일 진료를 희망하시나요?", treatmentPath: "nerve_treatment", answerType: "answer1", isTerminal: true, options: [{ id: "same_day_yes", text: "네, 당일 진료 희망합니다" }, { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }] } } } } } } }, worse_hot: { question: "치료를 결정함에 있어서 가장 중요하게 생각하는 것은 무엇인가요?", answerType: "answer1", options: [{ id: "priority_cost", text: "저렴한 비용" }, { id: "priority_fear", text: "치과 공포 해소" }, { id: "priority_duration", text: "치료 기간" }, { id: "priority_result", text: "치료 결과" }, { id: "priority_dentist", text: "적절한 치과 선택 (전문의)" }], next: { priority_cost: { question: "지금까지 치료를 망설이고 있는 이유가 있나요?", answerType: "answer1", options: [{ id: "hesitate_cost", text: "비용 때문에" }, { id: "hesitate_fear", text: "치과 공포증 때문에" }, { id: "hesitate_choice", text: "적절한 치과 선택이 어려워서" }], next: { hesitate_cost: { question: "마지막으로 궁금하거나 요청사항이 있으신가요?", answerType: "answer1", options: [{ id: "request_none", text: "없음" }, { id: "request_detail", text: "상담 시 자세히 말씀드릴게요" }], next: { request_none: { question: "당일 진료를 희망하시나요?", treatmentPath: "nerve_treatment", answerType: "answer1", isTerminal: true, options: [{ id: "same_day_yes", text: "네, 당일 진료 희망합니다" }, { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }] }, request_detail: { question: "당일 진료를 희망하시나요?", treatmentPath: "nerve_treatment", answerType: "answer1", isTerminal: true, options: [{ id: "same_day_yes", text: "네, 당일 진료 희망합니다" }, { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }] } } }, hesitate_fear: { question: "마지막으로 궁금하거나 요청사항이 있으신가요?", answerType: "answer1", options: [{ id: "request_none", text: "없음" }, { id: "request_detail", text: "상담 시 자세히 말씀드릴게요" }], next: { request_none: { question: "당일 진료를 희망하시나요?", treatmentPath: "nerve_treatment", answerType: "answer1", isTerminal: true, options: [{ id: "same_day_yes", text: "네, 당일 진료 희망합니다" }, { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }] }, request_detail: { question: "당일 진료를 희망하시나요?", treatmentPath: "nerve_treatment", answerType: "answer1", isTerminal: true, options: [{ id: "same_day_yes", text: "네, 당일 진료 희망합니다" }, { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }] } } }, hesitate_choice: { question: "마지막으로 궁금하거나 요청사항이 있으신가요?", answerType: "answer1", options: [{ id: "request_none", text: "없음" }, { id: "request_detail", text: "상담 시 자세히 말씀드릴게요" }], next: { request_none: { question: "당일 진료를 희망하시나요?", treatmentPath: "nerve_treatment", answerType: "answer1", isTerminal: true, options: [{ id: "same_day_yes", text: "네, 당일 진료 희망합니다" }, { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }] }, request_detail: { question: "당일 진료를 희망하시나요?", treatmentPath: "nerve_treatment", answerType: "answer1", isTerminal: true, options: [{ id: "same_day_yes", text: "네, 당일 진료 희망합니다" }, { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }] } } } } }, priority_fear: { question: "지금까지 치료를 망설이고 있는 이유가 있나요?", answerType: "answer1", options: [{ id: "hesitate_cost", text: "비용 때문에" }, { id: "hesitate_fear", text: "치과 공포증 때문에" }, { id: "hesitate_choice", text: "적절한 치과 선택이 어려워서" }], next: { hesitate_cost: { question: "마지막으로 궁금하거나 요청사항이 있으신가요?", answerType: "answer1", options: [{ id: "request_none", text: "없음" }, { id: "request_detail", text: "상담 시 자세히 말씀드릴게요" }], next: { request_none: { question: "당일 진료를 희망하시나요?", treatmentPath: "nerve_treatment", answerType: "answer1", isTerminal: true, options: [{ id: "same_day_yes", text: "네, 당일 진료 희망합니다" }, { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }] }, request_detail: { question: "당일 진료를 희망하시나요?", treatmentPath: "nerve_treatment", answerType: "answer1", isTerminal: true, options: [{ id: "same_day_yes", text: "네, 당일 진료 희망합니다" }, { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }] } } }, hesitate_fear: { question: "마지막으로 궁금하거나 요청사항이 있으신가요?", answerType: "answer1", options: [{ id: "request_none", text: "없음" }, { id: "request_detail", text: "상담 시 자세히 말씀드릴게요" }], next: { request_none: { question: "당일 진료를 희망하시나요?", treatmentPath: "nerve_treatment", answerType: "answer1", isTerminal: true, options: [{ id: "same_day_yes", text: "네, 당일 진료 희망합니다" }, { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }] }, request_detail: { question: "당일 진료를 희망하시나요?", treatmentPath: "nerve_treatment", answerType: "answer1", isTerminal: true, options: [{ id: "same_day_yes", text: "네, 당일 진료 희망합니다" }, { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }] } } }, hesitate_choice: { question: "마지막으로 궁금하거나 요청사항이 있으신가요?", answerType: "answer1", options: [{ id: "request_none", text: "없음" }, { id: "request_detail", text: "상담 시 자세히 말씀드릴게요" }], next: { request_none: { question: "당일 진료를 희망하시나요?", treatmentPath: "nerve_treatment", answerType: "answer1", isTerminal: true, options: [{ id: "same_day_yes", text: "네, 당일 진료 희망합니다" }, { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }] }, request_detail: { question: "당일 진료를 희망하시나요?", treatmentPath: "nerve_treatment", answerType: "answer1", isTerminal: true, options: [{ id: "same_day_yes", text: "네, 당일 진료 희망합니다" }, { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }] } } } } }, priority_duration: { question: "지금까지 치료를 망설이고 있는 이유가 있나요?", answerType: "answer1", options: [{ id: "hesitate_cost", text: "비용 때문에" }, { id: "hesitate_fear", text: "치과 공포증 때문에" }, { id: "hesitate_choice", text: "적절한 치과 선택이 어려워서" }], next: { hesitate_cost: { question: "마지막으로 궁금하거나 요청사항이 있으신가요?", answerType: "answer1", options: [{ id: "request_none", text: "없음" }, { id: "request_detail", text: "상담 시 자세히 말씀드릴게요" }], next: { request_none: { question: "당일 진료를 희망하시나요?", treatmentPath: "nerve_treatment", answerType: "answer1", isTerminal: true, options: [{ id: "same_day_yes", text: "네, 당일 진료 희망합니다" }, { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }] }, request_detail: { question: "당일 진료를 희망하시나요?", treatmentPath: "nerve_treatment", answerType: "answer1", isTerminal: true, options: [{ id: "same_day_yes", text: "네, 당일 진료 희망합니다" }, { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }] } } }, hesitate_fear: { question: "마지막으로 궁금하거나 요청사항이 있으신가요?", answerType: "answer1", options: [{ id: "request_none", text: "없음" }, { id: "request_detail", text: "상담 시 자세히 말씀드릴게요" }], next: { request_none: { question: "당일 진료를 희망하시나요?", treatmentPath: "nerve_treatment", answerType: "answer1", isTerminal: true, options: [{ id: "same_day_yes", text: "네, 당일 진료 희망합니다" }, { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }] }, request_detail: { question: "당일 진료를 희망하시나요?", treatmentPath: "nerve_treatment", answerType: "answer1", isTerminal: true, options: [{ id: "same_day_yes", text: "네, 당일 진료 희망합니다" }, { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }] } } }, hesitate_choice: { question: "마지막으로 궁금하거나 요청사항이 있으신가요?", answerType: "answer1", options: [{ id: "request_none", text: "없음" }, { id: "request_detail", text: "상담 시 자세히 말씀드릴게요" }], next: { request_none: { question: "당일 진료를 희망하시나요?", treatmentPath: "nerve_treatment", answerType: "answer1", isTerminal: true, options: [{ id: "same_day_yes", text: "네, 당일 진료 희망합니다" }, { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }] }, request_detail: { question: "당일 진료를 희망하시나요?", treatmentPath: "nerve_treatment", answerType: "answer1", isTerminal: true, options: [{ id: "same_day_yes", text: "네, 당일 진료 희망합니다" }, { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }] } } } } }, priority_result: { question: "지금까지 치료를 망설이고 있는 이유가 있나요?", answerType: "answer1", options: [{ id: "hesitate_cost", text: "비용 때문에" }, { id: "hesitate_fear", text: "치과 공포증 때문에" }, { id: "hesitate_choice", text: "적절한 치과 선택이 어려워서" }], next: { hesitate_cost: { question: "마지막으로 궁금하거나 요청사항이 있으신가요?", answerType: "answer1", options: [{ id: "request_none", text: "없음" }, { id: "request_detail", text: "상담 시 자세히 말씀드릴게요" }], next: { request_none: { question: "당일 진료를 희망하시나요?", treatmentPath: "nerve_treatment", answerType: "answer1", isTerminal: true, options: [{ id: "same_day_yes", text: "네, 당일 진료 희망합니다" }, { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }] }, request_detail: { question: "당일 진료를 희망하시나요?", treatmentPath: "nerve_treatment", answerType: "answer1", isTerminal: true, options: [{ id: "same_day_yes", text: "네, 당일 진료 희망합니다" }, { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }] } } }, hesitate_fear: { question: "마지막으로 궁금하거나 요청사항이 있으신가요?", answerType: "answer1", options: [{ id: "request_none", text: "없음" }, { id: "request_detail", text: "상담 시 자세히 말씀드릴게요" }], next: { request_none: { question: "당일 진료를 희망하시나요?", treatmentPath: "nerve_treatment", answerType: "answer1", isTerminal: true, options: [{ id: "same_day_yes", text: "네, 당일 진료 희망합니다" }, { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }] }, request_detail: { question: "당일 진료를 희망하시나요?", treatmentPath: "nerve_treatment", answerType: "answer1", isTerminal: true, options: [{ id: "same_day_yes", text: "네, 당일 진료 희망합니다" }, { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }] } } }, hesitate_choice: { question: "마지막으로 궁금하거나 요청사항이 있으신가요?", answerType: "answer1", options: [{ id: "request_none", text: "없음" }, { id: "request_detail", text: "상담 시 자세히 말씀드릴게요" }], next: { request_none: { question: "당일 진료를 희망하시나요?", treatmentPath: "nerve_treatment", answerType: "answer1", isTerminal: true, options: [{ id: "same_day_yes", text: "네, 당일 진료 희망합니다" }, { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }] }, request_detail: { question: "당일 진료를 희망하시나요?", treatmentPath: "nerve_treatment", answerType: "answer1", isTerminal: true, options: [{ id: "same_day_yes", text: "네, 당일 진료 희망합니다" }, { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }] } } } } }, priority_dentist: { question: "지금까지 치료를 망설이고 있는 이유가 있나요?", answerType: "answer1", options: [{ id: "hesitate_cost", text: "비용 때문에" }, { id: "hesitate_fear", text: "치과 공포증 때문에" }, { id: "hesitate_choice", text: "적절한 치과 선택이 어려워서" }], next: { hesitate_cost: { question: "마지막으로 궁금하거나 요청사항이 있으신가요?", answerType: "answer1", options: [{ id: "request_none", text: "없음" }, { id: "request_detail", text: "상담 시 자세히 말씀드릴게요" }], next: { request_none: { question: "당일 진료를 희망하시나요?", treatmentPath: "nerve_treatment", answerType: "answer1", isTerminal: true, options: [{ id: "same_day_yes", text: "네, 당일 진료 희망합니다" }, { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }] }, request_detail: { question: "당일 진료를 희망하시나요?", treatmentPath: "nerve_treatment", answerType: "answer1", isTerminal: true, options: [{ id: "same_day_yes", text: "네, 당일 진료 희망합니다" }, { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }] } } }, hesitate_fear: { question: "마지막으로 궁금하거나 요청사항이 있으신가요?", answerType: "answer1", options: [{ id: "request_none", text: "없음" }, { id: "request_detail", text: "상담 시 자세히 말씀드릴게요" }], next: { request_none: { question: "당일 진료를 희망하시나요?", treatmentPath: "nerve_treatment", answerType: "answer1", isTerminal: true, options: [{ id: "same_day_yes", text: "네, 당일 진료 희망합니다" }, { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }] }, request_detail: { question: "당일 진료를 희망하시나요?", treatmentPath: "nerve_treatment", answerType: "answer1", isTerminal: true, options: [{ id: "same_day_yes", text: "네, 당일 진료 희망합니다" }, { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }] } } }, hesitate_choice: { question: "마지막으로 궁금하거나 요청사항이 있으신가요?", answerType: "answer1", options: [{ id: "request_none", text: "없음" }, { id: "request_detail", text: "상담 시 자세히 말씀드릴게요" }], next: { request_none: { question: "당일 진료를 희망하시나요?", treatmentPath: "nerve_treatment", answerType: "answer1", isTerminal: true, options: [{ id: "same_day_yes", text: "네, 당일 진료 희망합니다" }, { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }] }, request_detail: { question: "당일 진료를 희망하시나요?", treatmentPath: "nerve_treatment", answerType: "answer1", isTerminal: true, options: [{ id: "same_day_yes", text: "네, 당일 진료 희망합니다" }, { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }] } } } } } } }, worse_rest: { question: "치료를 결정함에 있어서 가장 중요하게 생각하는 것은 무엇인가요?", answerType: "answer1", options: [{ id: "priority_cost", text: "저렴한 비용" }, { id: "priority_fear", text: "치과 공포 해소" }, { id: "priority_duration", text: "치료 기간" }, { id: "priority_result", text: "치료 결과" }, { id: "priority_dentist", text: "적절한 치과 선택 (전문의)" }], next: { priority_cost: { question: "지금까지 치료를 망설이고 있는 이유가 있나요?", answerType: "answer1", options: [{ id: "hesitate_cost", text: "비용 때문에" }, { id: "hesitate_fear", text: "치과 공포증 때문에" }, { id: "hesitate_choice", text: "적절한 치과 선택이 어려워서" }], next: { hesitate_cost: { question: "마지막으로 궁금하거나 요청사항이 있으신가요?", answerType: "answer1", options: [{ id: "request_none", text: "없음" }, { id: "request_detail", text: "상담 시 자세히 말씀드릴게요" }], next: { request_none: { question: "당일 진료를 희망하시나요?", treatmentPath: "nerve_treatment", answerType: "answer1", isTerminal: true, options: [{ id: "same_day_yes", text: "네, 당일 진료 희망합니다" }, { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }] }, request_detail: { question: "당일 진료를 희망하시나요?", treatmentPath: "nerve_treatment", answerType: "answer1", isTerminal: true, options: [{ id: "same_day_yes", text: "네, 당일 진료 희망합니다" }, { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }] } } }, hesitate_fear: { question: "마지막으로 궁금하거나 요청사항이 있으신가요?", answerType: "answer1", options: [{ id: "request_none", text: "없음" }, { id: "request_detail", text: "상담 시 자세히 말씀드릴게요" }], next: { request_none: { question: "당일 진료를 희망하시나요?", treatmentPath: "nerve_treatment", answerType: "answer1", isTerminal: true, options: [{ id: "same_day_yes", text: "네, 당일 진료 희망합니다" }, { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }] }, request_detail: { question: "당일 진료를 희망하시나요?", treatmentPath: "nerve_treatment", answerType: "answer1", isTerminal: true, options: [{ id: "same_day_yes", text: "네, 당일 진료 희망합니다" }, { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }] } } }, hesitate_choice: { question: "마지막으로 궁금하거나 요청사항이 있으신가요?", answerType: "answer1", options: [{ id: "request_none", text: "없음" }, { id: "request_detail", text: "상담 시 자세히 말씀드릴게요" }], next: { request_none: { question: "당일 진료를 희망하시나요?", treatmentPath: "nerve_treatment", answerType: "answer1", isTerminal: true, options: [{ id: "same_day_yes", text: "네, 당일 진료 희망합니다" }, { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }] }, request_detail: { question: "당일 진료를 희망하시나요?", treatmentPath: "nerve_treatment", answerType: "answer1", isTerminal: true, options: [{ id: "same_day_yes", text: "네, 당일 진료 희망합니다" }, { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }] } } } } }, priority_fear: { question: "지금까지 치료를 망설이고 있는 이유가 있나요?", answerType: "answer1", options: [{ id: "hesitate_cost", text: "비용 때문에" }, { id: "hesitate_fear", text: "치과 공포증 때문에" }, { id: "hesitate_choice", text: "적절한 치과 선택이 어려워서" }], next: { hesitate_cost: { question: "마지막으로 궁금하거나 요청사항이 있으신가요?", answerType: "answer1", options: [{ id: "request_none", text: "없음" }, { id: "request_detail", text: "상담 시 자세히 말씀드릴게요" }], next: { request_none: { question: "당일 진료를 희망하시나요?", treatmentPath: "nerve_treatment", answerType: "answer1", isTerminal: true, options: [{ id: "same_day_yes", text: "네, 당일 진료 희망합니다" }, { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }] }, request_detail: { question: "당일 진료를 희망하시나요?", treatmentPath: "nerve_treatment", answerType: "answer1", isTerminal: true, options: [{ id: "same_day_yes", text: "네, 당일 진료 희망합니다" }, { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }] } } }, hesitate_fear: { question: "마지막으로 궁금하거나 요청사항이 있으신가요?", answerType: "answer1", options: [{ id: "request_none", text: "없음" }, { id: "request_detail", text: "상담 시 자세히 말씀드릴게요" }], next: { request_none: { question: "당일 진료를 희망하시나요?", treatmentPath: "nerve_treatment", answerType: "answer1", isTerminal: true, options: [{ id: "same_day_yes", text: "네, 당일 진료 희망합니다" }, { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }] }, request_detail: { question: "당일 진료를 희망하시나요?", treatmentPath: "nerve_treatment", answerType: "answer1", isTerminal: true, options: [{ id: "same_day_yes", text: "네, 당일 진료 희망합니다" }, { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }] } } }, hesitate_choice: { question: "마지막으로 궁금하거나 요청사항이 있으신가요?", answerType: "answer1", options: [{ id: "request_none", text: "없음" }, { id: "request_detail", text: "상담 시 자세히 말씀드릴게요" }], next: { request_none: { question: "당일 진료를 희망하시나요?", treatmentPath: "nerve_treatment", answerType: "answer1", isTerminal: true, options: [{ id: "same_day_yes", text: "네, 당일 진료 희망합니다" }, { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }] }, request_detail: { question: "당일 진료를 희망하시나요?", treatmentPath: "nerve_treatment", answerType: "answer1", isTerminal: true, options: [{ id: "same_day_yes", text: "네, 당일 진료 희망합니다" }, { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }] } } } } }, priority_duration: { question: "지금까지 치료를 망설이고 있는 이유가 있나요?", answerType: "answer1", options: [{ id: "hesitate_cost", text: "비용 때문에" }, { id: "hesitate_fear", text: "치과 공포증 때문에" }, { id: "hesitate_choice", text: "적절한 치과 선택이 어려워서" }], next: { hesitate_cost: { question: "마지막으로 궁금하거나 요청사항이 있으신가요?", answerType: "answer1", options: [{ id: "request_none", text: "없음" }, { id: "request_detail", text: "상담 시 자세히 말씀드릴게요" }], next: { request_none: { question: "당일 진료를 희망하시나요?", treatmentPath: "nerve_treatment", answerType: "answer1", isTerminal: true, options: [{ id: "same_day_yes", text: "네, 당일 진료 희망합니다" }, { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }] }, request_detail: { question: "당일 진료를 희망하시나요?", treatmentPath: "nerve_treatment", answerType: "answer1", isTerminal: true, options: [{ id: "same_day_yes", text: "네, 당일 진료 희망합니다" }, { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }] } } }, hesitate_fear: { question: "마지막으로 궁금하거나 요청사항이 있으신가요?", answerType: "answer1", options: [{ id: "request_none", text: "없음" }, { id: "request_detail", text: "상담 시 자세히 말씀드릴게요" }], next: { request_none: { question: "당일 진료를 희망하시나요?", treatmentPath: "nerve_treatment", answerType: "answer1", isTerminal: true, options: [{ id: "same_day_yes", text: "네, 당일 진료 희망합니다" }, { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }] }, request_detail: { question: "당일 진료를 희망하시나요?", treatmentPath: "nerve_treatment", answerType: "answer1", isTerminal: true, options: [{ id: "same_day_yes", text: "네, 당일 진료 희망합니다" }, { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }] } } }, hesitate_choice: { question: "마지막으로 궁금하거나 요청사항이 있으신가요?", answerType: "answer1", options: [{ id: "request_none", text: "없음" }, { id: "request_detail", text: "상담 시 자세히 말씀드릴게요" }], next: { request_none: { question: "당일 진료를 희망하시나요?", treatmentPath: "nerve_treatment", answerType: "answer1", isTerminal: true, options: [{ id: "same_day_yes", text: "네, 당일 진료 희망합니다" }, { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }] }, request_detail: { question: "당일 진료를 희망하시나요?", treatmentPath: "nerve_treatment", answerType: "answer1", isTerminal: true, options: [{ id: "same_day_yes", text: "네, 당일 진료 희망합니다" }, { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }] } } } } }, priority_result: { question: "지금까지 치료를 망설이고 있는 이유가 있나요?", answerType: "answer1", options: [{ id: "hesitate_cost", text: "비용 때문에" }, { id: "hesitate_fear", text: "치과 공포증 때문에" }, { id: "hesitate_choice", text: "적절한 치과 선택이 어려워서" }], next: { hesitate_cost: { question: "마지막으로 궁금하거나 요청사항이 있으신가요?", answerType: "answer1", options: [{ id: "request_none", text: "없음" }, { id: "request_detail", text: "상담 시 자세히 말씀드릴게요" }], next: { request_none: { question: "당일 진료를 희망하시나요?", treatmentPath: "nerve_treatment", answerType: "answer1", isTerminal: true, options: [{ id: "same_day_yes", text: "네, 당일 진료 희망합니다" }, { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }] }, request_detail: { question: "당일 진료를 희망하시나요?", treatmentPath: "nerve_treatment", answerType: "answer1", isTerminal: true, options: [{ id: "same_day_yes", text: "네, 당일 진료 희망합니다" }, { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }] } } }, hesitate_fear: { question: "마지막으로 궁금하거나 요청사항이 있으신가요?", answerType: "answer1", options: [{ id: "request_none", text: "없음" }, { id: "request_detail", text: "상담 시 자세히 말씀드릴게요" }], next: { request_none: { question: "당일 진료를 희망하시나요?", treatmentPath: "nerve_treatment", answerType: "answer1", isTerminal: true, options: [{ id: "same_day_yes", text: "네, 당일 진료 희망합니다" }, { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }] }, request_detail: { question: "당일 진료를 희망하시나요?", treatmentPath: "nerve_treatment", answerType: "answer1", isTerminal: true, options: [{ id: "same_day_yes", text: "네, 당일 진료 희망합니다" }, { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }] } } }, hesitate_choice: { question: "마지막으로 궁금하거나 요청사항이 있으신가요?", answerType: "answer1", options: [{ id: "request_none", text: "없음" }, { id: "request_detail", text: "상담 시 자세히 말씀드릴게요" }], next: { request_none: { question: "당일 진료를 희망하시나요?", treatmentPath: "nerve_treatment", answerType: "answer1", isTerminal: true, options: [{ id: "same_day_yes", text: "네, 당일 진료 희망합니다" }, { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }] }, request_detail: { question: "당일 진료를 희망하시나요?", treatmentPath: "nerve_treatment", answerType: "answer1", isTerminal: true, options: [{ id: "same_day_yes", text: "네, 당일 진료 희망합니다" }, { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }] } } } } }, priority_dentist: { question: "지금까지 치료를 ��설이고 있는 이유가 있나요?", answerType: "answer1", options: [{ id: "hesitate_cost", text: "비용 때문에" }, { id: "hesitate_fear", text: "치과 공포증 때문에" }, { id: "hesitate_choice", text: "적절한 치과 선택이 어려워서" }], next: { hesitate_cost: { question: "마지막으로 궁금하거나 요청사항이 있으신가요?", answerType: "answer1", options: [{ id: "request_none", text: "없음" }, { id: "request_detail", text: "상담 시 자세히 말씀드릴게요" }], next: { request_none: { question: "당일 진료를 희망하시나요?", treatmentPath: "nerve_treatment", answerType: "answer1", isTerminal: true, options: [{ id: "same_day_yes", text: "네, 당일 진료 희망합니다" }, { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }] }, request_detail: { question: "당일 진료를 희망하시나요?", treatmentPath: "nerve_treatment", answerType: "answer1", isTerminal: true, options: [{ id: "same_day_yes", text: "네, 당일 진료 희망합니다" }, { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }] } } }, hesitate_fear: { question: "마지막으로 궁금하거나 요청사항이 있으신가요?", answerType: "answer1", options: [{ id: "request_none", text: "없음" }, { id: "request_detail", text: "상담 시 자세히 말씀드릴게요" }], next: { request_none: { question: "당일 진료를 희망하시나요?", treatmentPath: "nerve_treatment", answerType: "answer1", isTerminal: true, options: [{ id: "same_day_yes", text: "네, 당일 진료 희망합니다" }, { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }] }, request_detail: { question: "당일 진료를 희망하시나요?", treatmentPath: "nerve_treatment", answerType: "answer1", isTerminal: true, options: [{ id: "same_day_yes", text: "네, 당일 진료 희망합니다" }, { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }] } } }, hesitate_choice: { question: "마지막으로 궁금하거나 요청사항이 있으신가요?", answerType: "answer1", options: [{ id: "request_none", text: "없음" }, { id: "request_detail", text: "상담 시 자세히 말씀드릴게요" }], next: { request_none: { question: "당일 진료를 희망하시나요?", treatmentPath: "nerve_treatment", answerType: "answer1", isTerminal: true, options: [{ id: "same_day_yes", text: "네, 당일 진료 희망합니다" }, { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }] }, request_detail: { question: "당일 진료를 희망하시나요?", treatmentPath: "nerve_treatment", answerType: "answer1", isTerminal: true, options: [{ id: "same_day_yes", text: "네, 당일 진료 희망합니다" }, { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }] } } } } } } } } },
          area_wide: {
            question: "현재 불편한 증상이 더 심해지는 경우는 언제인가요?",
            answerType: "answer1",
            options: [
              { id: "worse_chew", text: "씹을 때" },
              { id: "worse_cold", text: "찬물을 마실 때" },
              { id: "worse_hot", text: "뜨거운 물을 마실 때" },
              { id: "worse_rest", text: "가만히 있을 때" }
            ],
            next: {
              default: {
                question: "치료를 결정함에 있어서 가장 중요하게 생각하는 것은 무엇인가요?",
                answerType: "answer1",
                options: [
                  { id: "priority_cost", text: "저렴한 비용" },
                  { id: "priority_fear", text: "치과 공포 해소" },
                  { id: "priority_duration", text: "치료 기간" },
                  { id: "priority_result", text: "치료 결과" },
                  { id: "priority_dentist", text: "적절한 치과 선택 (전문의)" }
                ],
                next: {
                  default: {
                    question: "지금까지 치료를 망설이고 있는 이유가 있나요?",
                    answerType: "answer1",
                    options: [
                      { id: "hesitate_cost", text: "비용 때문에" },
                      { id: "hesitate_fear", text: "치과 공포증 때문에" },
                      { id: "hesitate_choice", text: "적절한 치과 선택이 어려워서" }
                    ],
                    next: {
                      default: {
                        question: "마지막으로 궁금하거나 요청사항이 있으신가요?",
                        answerType: "answer1",
                        options: [
                          { id: "request_none", text: "없음" },
                          { id: "request_detail", text: "상담 시 자세히 말씀드릴게요" }
                        ],
                        next: {
                          default: {
                            question: "당일 진료를 희망하시나요?",
                            treatmentPath: "nerve_treatment",
                            answerType: "answer1",
                            isTerminal: true,
                            options: [
                              { id: "same_day_yes", text: "네, 당일 진료 희망합니다" },
                              { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }
                            ]
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          area_unknown: {
            question: "현재 불편한 증상이 더 심해지는 경우는 언제인가요?",
            answerType: "answer1",
            options: [
              { id: "worse_chew", text: "씹을 때" },
              { id: "worse_cold", text: "찬물을 마실 때" },
              { id: "worse_hot", text: "뜨거운 물을 마실 때" },
              { id: "worse_rest", text: "가만히 있을 때" }
            ],
            next: {
              default: {
                question: "치료를 결정함에 있어서 가장 중요하게 생각하는 것은 무엇인가요?",
                answerType: "answer1",
                options: [
                  { id: "priority_cost", text: "저렴한 비용" },
                  { id: "priority_fear", text: "치과 공포 해소" },
                  { id: "priority_duration", text: "치료 기간" },
                  { id: "priority_result", text: "치료 결과" },
                  { id: "priority_dentist", text: "적절한 치과 선택 (전문의)" }
                ],
                next: {
                  default: {
                    question: "지금까지 치료를 망설이고 있는 이유가 있나요?",
                    answerType: "answer1",
                    options: [
                      { id: "hesitate_cost", text: "비용 때문에" },
                      { id: "hesitate_fear", text: "치과 공포증 때문에" },
                      { id: "hesitate_choice", text: "적절한 치과 선택이 어려워서" }
                    ],
                    next: {
                      default: {
                        question: "마지막으로 궁금하거나 요청사항이 있으신가요?",
                        answerType: "answer1",
                        options: [
                          { id: "request_none", text: "없음" },
                          { id: "request_detail", text: "상담 시 자세히 말씀드릴게요" }
                        ],
                        next: {
                          default: {
                            question: "당일 진료를 희망하시나요?",
                            treatmentPath: "nerve_treatment",
                            answerType: "answer1",
                            isTerminal: true,
                            options: [
                              { id: "same_day_yes", text: "네, 당일 진료 희망합니다" },
                              { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }
                            ]
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      },
      // 답안2: 치아가 시려요
      cavity_sensitive: {
        question: "현재 불편한 부위(치아, 잇몸)는 어디인가요?",
        answerType: "answer2",
        options: [
          { id: "area_specific", text: "특정 치아 1개 또는 2개가 시려요" },
          { id: "area_wide", text: "왼쪽 위/아래 등 넓은 부위가 시려요" },
          { id: "area_unknown", text: "잘 모르겠어요" }
        ],
        next: {
          default: {
            question: "현재 불편한 증상이 더 심해지는 경우는 언제인가요?",
            answerType: "answer2",
            options: [
              { id: "worse_chew", text: "씹을 때" },
              { id: "worse_cold", text: "찬물을 마실 때" },
              { id: "worse_hot", text: "뜨거운 물을 마실 때" },
              { id: "worse_rest", text: "가만히 있을 때" }
            ],
            next: {
              default: {
                question: "치료를 결정함에 있어서 가장 중요하게 생각하는 것은 무엇인가요?",
                answerType: "answer2",
                options: [
                  { id: "priority_cost", text: "저렴한 비용" },
                  { id: "priority_fear", text: "치과 공포 해소" },
                  { id: "priority_duration", text: "치료 기간" },
                  { id: "priority_result", text: "치료 결과" },
                  { id: "priority_dentist", text: "적절한 치과 선택 (전문의)" }
                ],
                next: {
                  default: {
                    question: "지금까지 치료를 망설이고 있는 이유가 있나요?",
                    answerType: "answer2",
                    options: [
                      { id: "hesitate_cost", text: "비용 때문에" },
                      { id: "hesitate_fear", text: "치과 공포증 때문에" },
                      { id: "hesitate_choice", text: "적절한 치과 선택이 어려워서" }
                    ],
                    next: {
                      default: {
                        question: "마지막으로 궁금하거나 요청사항이 있으신가요?",
                        answerType: "answer2",
                        options: [
                          { id: "request_none", text: "없음" },
                          { id: "request_detail", text: "상담 시 자세히 말씀드릴게요" }
                        ],
                        next: {
                          default: {
                            question: "당일 진료를 희망하시나요?",
                            treatmentPath: "nerve_treatment",
                            answerType: "answer2",
                            isTerminal: true,
                            options: [
                              { id: "same_day_yes", text: "네, 당일 진료 희망합니다" },
                              { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }
                            ]
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      },
      // 답안3: 치아가 깨졌어요
      cavity_broken: {
        question: "현재 불편한 부위(치아, 잇몸)는 어디인가요?",
        answerType: "answer3",
        options: [
          { id: "area_specific", text: "특정 치아 1개 또는 2개가 깨졌어요" },
          { id: "area_wide", text: "여러 개가 깨졌어요" },
          { id: "area_unknown", text: "잘 모르겠어요" }
        ],
        next: {
          default: {
            question: "현재 불편한 증상이 더 심해지는 경우는 언제인가요?",
            answerType: "answer3",
            options: [
              { id: "worse_chew", text: "씹을 때" },
              { id: "worse_cold", text: "찬물을 마실 때" },
              { id: "worse_hot", text: "뜨거운 물을 마실 때" },
              { id: "worse_rest", text: "가만히 있을 때" }
            ],
            next: {
              default: {
                question: "치료를 결정함에 있어서 가장 중요하게 생각하는 것은 무엇인가요?",
                answerType: "answer3",
                options: [
                  { id: "priority_cost", text: "저렴한 비용" },
                  { id: "priority_fear", text: "치과 공포 해소" },
                  { id: "priority_duration", text: "치료 기간" },
                  { id: "priority_result", text: "치료 결과" },
                  { id: "priority_dentist", text: "적절한 치과 선택 (전문의)" }
                ],
                next: {
                  default: {
                    question: "지금까지 치료를 망설이고 있는 이유가 있나요?",
                    answerType: "answer3",
                    options: [
                      { id: "hesitate_cost", text: "비용 때문에" },
                      { id: "hesitate_fear", text: "치과 공포증 때문에" },
                      { id: "hesitate_choice", text: "적절한 치과 선택이 어려워서" }
                    ],
                    next: {
                      default: {
                        question: "마지막으로 궁금하거나 요청사항이 있으신가요?",
                        answerType: "answer3",
                        options: [
                          { id: "request_none", text: "없음" },
                          { id: "request_detail", text: "상담 시 자세히 말씀드릴게요" }
                        ],
                        next: {
                          default: {
                            question: "당일 진료를 희망하시나요?",
                            treatmentPath: "nerve_treatment",
                            answerType: "answer3",
                            isTerminal: true,
                            options: [
                              { id: "same_day_yes", text: "네, 당일 진료 희망합니다" },
                              { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }
                            ]
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      },
      // 답안4: 식사할 때 불편해요
      cavity_eating: {
        question: "현재 불편한 부위(치아, 잇몸)는 어디인가요?",
        answerType: "answer4",
        options: [
          { id: "area_specific", text: "특정 치아 1개 또는 2개가 불편해요" },
          { id: "area_wide", text: "왼쪽 위/아래 등 넓은 부위가 불편해요" },
          { id: "area_unknown", text: "잘 모르겠어요" }
        ],
        next: {
          default: {
            question: "현재 불편한 증상이 더 심해지는 경우는 언제인가요?",
            answerType: "answer4",
            options: [
              { id: "worse_chew", text: "씹을 때" },
              { id: "worse_cold", text: "찬물을 마실 때" },
              { id: "worse_hot", text: "뜨거운 물을 마실 때" },
              { id: "worse_rest", text: "가만히 있을 때" }
            ],
            next: {
              default: {
                question: "치료를 결정함에 있어서 가장 중요하게 생각하는 것은 무엇인가요?",
                answerType: "answer4",
                options: [
                  { id: "priority_cost", text: "저렴한 비용" },
                  { id: "priority_fear", text: "치과 공포 해소" },
                  { id: "priority_duration", text: "치료 기간" },
                  { id: "priority_result", text: "치료 결과" },
                  { id: "priority_dentist", text: "적절한 치과 선택 (전문의)" }
                ],
                next: {
                  default: {
                    question: "지금까지 치료를 망설이고 있는 이유가 있나요?",
                    answerType: "answer4",
                    options: [
                      { id: "hesitate_cost", text: "비용 때문에" },
                      { id: "hesitate_fear", text: "치과 공포증 때문에" },
                      { id: "hesitate_choice", text: "적절한 치과 선택이 어려워서" }
                    ],
                    next: {
                      default: {
                        question: "마지막으로 궁금하거나 요청사항이 있으신가요?",
                        answerType: "answer4",
                        options: [
                          { id: "request_none", text: "없음" },
                          { id: "request_detail", text: "상담 시 자세히 말씀드릴게요" }
                        ],
                        next: {
                          default: {
                            question: "당일 진료를 희망하시나요?",
                            treatmentPath: "nerve_treatment",
                            answerType: "answer4",
                            isTerminal: true,
                            options: [
                              { id: "same_day_yes", text: "네, 당일 진료 희망합니다" },
                              { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }
                            ]
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      },
      // 답안2: 치아가 검게 보여요 (시려요와 동일 답안)
      cavity_dark: {
        question: "현재 불편한 부위(치아, 잇몸)는 어디인가요?",
        answerType: "answer2",
        options: [
          { id: "area_specific", text: "특정 치아 1개 또는 2개가 검게 보여요" },
          { id: "area_wide", text: "여러 개가 검게 보여요" },
          { id: "area_unknown", text: "잘 모르겠어요" }
        ],
        next: {
          default: {
            question: "현재 불편한 증상이 더 심해지는 경우는 언제인가요?",
            answerType: "answer2",
            options: [
              { id: "worse_chew", text: "씹을 때" },
              { id: "worse_cold", text: "찬물을 마실 때" },
              { id: "worse_hot", text: "뜨거운 물을 마실 때" },
              { id: "worse_rest", text: "가만히 있을 때" }
            ],
            next: {
              default: {
                question: "치료를 결정함에 있어서 가장 중요하게 생각하는 것은 무엇인가요?",
                answerType: "answer2",
                options: [
                  { id: "priority_cost", text: "저렴한 비용" },
                  { id: "priority_fear", text: "치과 공포 해소" },
                  { id: "priority_duration", text: "치료 기간" },
                  { id: "priority_result", text: "치료 결과" },
                  { id: "priority_dentist", text: "적절한 치과 선택 (전문의)" }
                ],
                next: {
                  default: {
                    question: "지금까지 치료를 망설이고 있는 이유가 있나요?",
                    answerType: "answer2",
                    options: [
                      { id: "hesitate_cost", text: "비용 때문에" },
                      { id: "hesitate_fear", text: "치과 공포증 때문에" },
                      { id: "hesitate_choice", text: "적절한 치과 선택이 어려워서" }
                    ],
                    next: {
                      default: {
                        question: "마지막으로 궁금하거나 요청사항이 있으신가요?",
                        answerType: "answer2",
                        options: [
                          { id: "request_none", text: "없음" },
                          { id: "request_detail", text: "상담 시 자세히 말씀드릴게요" }
                        ],
                        next: {
                          default: {
                            question: "당일 진료를 희망하시나요?",
                            treatmentPath: "nerve_treatment",
                            answerType: "answer2",
                            isTerminal: true,
                            options: [
                              { id: "same_day_yes", text: "네, 당일 진료 희망합니다" },
                              { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }
                            ]
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      },
      // 답안4: 양치할 때 불편해요 (식사할 때와 동일 답안)
      cavity_brushing: {
        question: "현재 불편한 부위(치아, 잇몸)는 어디인가요?",
        answerType: "answer4",
        options: [
          { id: "area_specific", text: "특정 치아 1개 또는 2개가 불편해요" },
          { id: "area_wide", text: "왼쪽 위/아래 등 넓은 부위가 불편해요" },
          { id: "area_unknown", text: "잘 모르겠어요" }
        ],
        next: {
          default: {
            question: "현재 불편한 증상이 더 심해지는 경우는 언제인가요?",
            answerType: "answer4",
            options: [
              { id: "worse_chew", text: "씹을 때" },
              { id: "worse_cold", text: "찬물을 마실 때" },
              { id: "worse_hot", text: "뜨거운 물을 마실 때" },
              { id: "worse_rest", text: "가만히 있을 때" }
            ],
            next: {
              default: {
                question: "치료를 결정함에 있어서 가장 중요하게 생각하는 것은 무엇인가요?",
                answerType: "answer4",
                options: [
                  { id: "priority_cost", text: "저렴한 비용" },
                  { id: "priority_fear", text: "치과 공포 해소" },
                  { id: "priority_duration", text: "치료 기간" },
                  { id: "priority_result", text: "치료 결과" },
                  { id: "priority_dentist", text: "적절한 치과 선택 (전문의)" }
                ],
                next: {
                  default: {
                    question: "지금까지 치료를 망설이고 있는 이유가 있나요?",
                    answerType: "answer4",
                    options: [
                      { id: "hesitate_cost", text: "비용 때문에" },
                      { id: "hesitate_fear", text: "치과 공포증 때문에" },
                      { id: "hesitate_choice", text: "적절한 치과 선택이 어려워서" }
                    ],
                    next: {
                      default: {
                        question: "마지막으로 궁금하거나 요청사항이 있으신가요?",
                        answerType: "answer4",
                        options: [
                          { id: "request_none", text: "없음" },
                          { id: "request_detail", text: "상담 시 자세히 말씀드릴게요" }
                        ],
                        next: {
                          default: {
                            question: "당일 진료를 희망하시나요?",
                            treatmentPath: "nerve_treatment",
                            answerType: "answer4",
                            isTerminal: true,
                            options: [
                              { id: "same_day_yes", text: "네, 당일 진료 희망합니다" },
                              { id: "same_day_no", text: "상담을 먼저 받아보고 싶어요" }
                            ]
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  },

  // 통증 관련 질문 (일반)
  pain: {
    question: "통증이 어떤 상황에서 느껴지시나요?",
    options: [
      { id: "pain_cold_hot", text: "차갑거나 뜨거운 것에 시릴 때" },
      { id: "pain_chewing", text: "음식을 씹을 때" },
      { id: "pain_always", text: "가만히 있어도 계속 아파요" },
      { id: "pain_wisdom", text: "사랑니 부위가 아파요" }
    ],
    next: {
      pain_cold_hot: {
        question: "통증이 얼마나 지속되나요?",
        options: [
          { id: "pain_short", text: "잠깐 시렸다가 사라져요" },
          { id: "pain_long", text: "한번 시리면 오래 지속돼요" },
          { id: "pain_getting_worse", text: "점점 심해지고 있어요" }
        ],
        next: {
          pain_short: {
            question: "치료에서 가장 중요하게 생각하시는 부분은 무엇인가요?",
            options: [
              { id: "priority_cost", text: "저렴한 비용" },
              { id: "priority_fear", text: "치과공포 해소" },
              { id: "priority_time", text: "치료기간" },
              { id: "priority_result", text: "치료결과" }
            ]
          },
          pain_long: {
            question: "치료에서 가장 중요하게 생각하시는 부분은 무엇인가요?",
            options: [
              { id: "priority_cost", text: "저렴한 비용" },
              { id: "priority_fear", text: "치과공포 해소" },
              { id: "priority_time", text: "치료기간" },
              { id: "priority_result", text: "치료결과" }
            ]
          },
          pain_getting_worse: {
            question: "치료에서 가장 중요하게 생각하시는 부분은 무엇인가요?",
            options: [
              { id: "priority_cost", text: "저렴한 비용" },
              { id: "priority_fear", text: "치과공포 해소" },
              { id: "priority_time", text: "치료기간" },
              { id: "priority_result", text: "치료결과" }
            ]
          }
        }
      },
      pain_chewing: {
        question: "어느 부위가 아프신가요?",
        options: [
          { id: "pain_front", text: "앞니 부위" },
          { id: "pain_back", text: "어금니 부위" },
          { id: "pain_multiple", text: "여러 곳이 아파요" }
        ],
        next: {
          pain_front: {
            question: "치료에서 가장 중요하게 생각하시는 부분은 무엇인가요?",
            options: [
              { id: "priority_cost", text: "저렴한 비용" },
              { id: "priority_fear", text: "치과공포 해소" },
              { id: "priority_time", text: "치료기간" },
              { id: "priority_result", text: "치료결과" }
            ]
          },
          pain_back: {
            question: "치료에서 가장 중요하게 생각하시는 부분은 무엇인가요?",
            options: [
              { id: "priority_cost", text: "저렴한 비용" },
              { id: "priority_fear", text: "치과공포 해소" },
              { id: "priority_time", text: "치료기간" },
              { id: "priority_result", text: "치료결과" }
            ]
          },
          pain_multiple: {
            question: "치료에서 가장 중요하게 생각하시는 부분은 무엇인가요?",
            options: [
              { id: "priority_cost", text: "저렴한 비용" },
              { id: "priority_fear", text: "치과공포 해소" },
              { id: "priority_time", text: "치료기간" },
              { id: "priority_result", text: "치료결과" }
            ]
          }
        }
      },
      pain_always: {
        question: "붓기나 고름이 생겼나요?",
        options: [
          { id: "pain_swelling_yes", text: "네, 붓거나 고름이 있어요" },
          { id: "pain_swelling_no", text: "아니요, 그냥 통증만 있어요" }
        ],
        next: {
          pain_swelling_yes: {
            question: "치료에서 가장 중요하게 생각하시는 부분은 무엇인가요?",
            options: [
              { id: "priority_cost", text: "저렴한 비용" },
              { id: "priority_fear", text: "치과공포 해소" },
              { id: "priority_time", text: "치료기간" },
              { id: "priority_result", text: "치료결과" }
            ]
          },
          pain_swelling_no: {
            question: "치료에서 가장 중요하게 생각하시는 부분은 무엇인가요?",
            options: [
              { id: "priority_cost", text: "저렴한 비용" },
              { id: "priority_fear", text: "치과공포 해소" },
              { id: "priority_time", text: "치료기간" },
              { id: "priority_result", text: "치료결과" }
            ]
          }
        }
      },
      pain_wisdom: {
        question: "사랑니 통증은 언제부터 시작됐나요?",
        options: [
          { id: "wisdom_recent", text: "최근 며칠 사이" },
          { id: "wisdom_recurring", text: "자주 반복돼요" },
          { id: "wisdom_swelling", text: "잇몸이 많이 부었어요" }
        ],
        next: {
          wisdom_recent: {
            question: "치료에서 가장 중요하게 생각하시는 부분은 무엇인가요?",
            options: [
              { id: "priority_cost", text: "저렴한 비용" },
              { id: "priority_fear", text: "치과공포 해소" },
              { id: "priority_time", text: "치료기간" },
              { id: "priority_result", text: "치료결과" }
            ]
          },
          wisdom_recurring: {
            question: "치료에서 가장 중요하게 생각하시는 부분은 무엇인가요?",
            options: [
              { id: "priority_cost", text: "저렴한 비용" },
              { id: "priority_fear", text: "치과공포 해소" },
              { id: "priority_time", text: "치료기간" },
              { id: "priority_result", text: "치료결과" }
            ]
          },
          wisdom_swelling: {
            question: "치료에서 가장 중요하게 생각하시는 부분은 무엇인가요?",
            options: [
              { id: "priority_cost", text: "저렴한 비용" },
              { id: "priority_fear", text: "치과공포 해소" },
              { id: "priority_time", text: "치료기간" },
              { id: "priority_result", text: "치료결과" }
            ]
          }
        }
      }
    }
  },

  // 사랑니 관련 질문 (사랑니 상담용)
  wisdom_tooth: {
    question: "지금 현재 사랑니가 어떤 상태인가요?",
    options: [
      { id: "wisdom_pain", text: "사랑니 부위가 아파요" },
      { id: "wisdom_checkup", text: "아프지는 않는데, 점검 받고싶어요" }
    ],
    next: {
      // 아파요 선택 시 → 위치 질문
      wisdom_pain: {
        question: "현재 아픈 치아가 어느 것인가요?",
        options: [
          { id: "wisdom_upper", text: "위 사랑니" },
          { id: "wisdom_lower", text: "아래 사랑니" }
        ],
        next: {
          // 위 사랑니 선택 후 → 언제부터 불편
          wisdom_upper: {
            question: "현재 사랑니의 불편한 느낌이 언제부터 시작되었나요?",
            options: [
              { id: "wisdom_first_time", text: "처음입니다" },
              { id: "wisdom_recurring", text: "예전에도 비슷한 경험이 있었는데, 괜찮았다가 이번에 또 생겼어요" }
            ],
            next: {
              wisdom_first_time: {
                question: "현재 사랑니 통증 치료에 가장 걱정되는 부분은 무엇인가요?",
                options: [
                  { id: "worry_possible", text: "발치 가능 여부" },
                  { id: "worry_fear", text: "발치 치료에 대한 두려움" },
                  { id: "worry_daily", text: "발치 이후에 일상생활의 불편함" }
                ],
                next: {
                  worry_possible: {
                    question: "혹시 예전에 심혈관 관련 수술을 받았거나 전신질환이 있으신가요?",
                    options: [
                      { id: "disease_medication", text: "매일 복용하는 약이 있어요 (약봉투 지참해주세요)" },
                      { id: "disease_heart", text: "예전에 심장, 혈관계열로 수술 받은 적이 있어요" },
                      { id: "disease_bp_diabetes", text: "고혈압/당뇨" },
                      { id: "disease_osteoporosis", text: "골다공증" },
                      { id: "disease_other", text: "기타 전신질환" },
                      { id: "disease_none", text: "없습니다" }
                    ]
                  },
                  worry_fear: {
                    question: "혹시 예전에 심혈관 관련 수술을 받았거나 전신질환이 있으신가요?",
                    options: [
                      { id: "disease_medication", text: "매일 복용하는 약이 있어요 (약봉투 지참해주세요)" },
                      { id: "disease_heart", text: "예전에 심장, 혈관계열로 수술 받은 적이 있어요" },
                      { id: "disease_bp_diabetes", text: "고혈압/당뇨" },
                      { id: "disease_osteoporosis", text: "골다공증" },
                      { id: "disease_other", text: "기타 전신질환" },
                      { id: "disease_none", text: "없습니다" }
                    ]
                  },
                  worry_daily: {
                    question: "혹시 예전에 심혈관 관련 수술을 받았거나 전신질환이 있으신가요?",
                    options: [
                      { id: "disease_medication", text: "매일 복용하는 약이 있어요 (약봉투 지참해주세요)" },
                      { id: "disease_heart", text: "예전에 심장, 혈관계열로 수술 받은 적이 있어요" },
                      { id: "disease_bp_diabetes", text: "고혈압/당뇨" },
                      { id: "disease_osteoporosis", text: "골다공증" },
                      { id: "disease_other", text: "기타 전신질환" },
                      { id: "disease_none", text: "없습니다" }
                    ]
                  }
                }
              },
              wisdom_recurring: {
                question: "현재 사랑니 통증 치료에 가장 걱정되는 부분은 무엇인가요?",
                options: [
                  { id: "worry_possible", text: "발치 가능 여부" },
                  { id: "worry_fear", text: "발치 치료에 대한 두려움" },
                  { id: "worry_daily", text: "발치 이후에 일상생활의 불편함" }
                ],
                next: {
                  worry_possible: {
                    question: "혹시 예전에 심혈관 관련 수술을 받았거나 전신질환이 있으신가요?",
                    options: [
                      { id: "disease_medication", text: "매일 복용하는 약이 있어요 (약봉투 지참해주세요)" },
                      { id: "disease_heart", text: "예전에 심장, 혈관계열로 수술 받은 적이 있어요" },
                      { id: "disease_bp_diabetes", text: "고혈압/당뇨" },
                      { id: "disease_osteoporosis", text: "골다공증" },
                      { id: "disease_other", text: "기타 전신질환" },
                      { id: "disease_none", text: "없습니다" }
                    ]
                  },
                  worry_fear: {
                    question: "혹시 예전에 심혈관 관련 수술을 받았거나 전신질환이 있으신가요?",
                    options: [
                      { id: "disease_medication", text: "매일 복용하는 약이 있어요 (약봉투 지참해주세요)" },
                      { id: "disease_heart", text: "예전에 심장, 혈관계열로 수술 받은 적이 있어요" },
                      { id: "disease_bp_diabetes", text: "고혈압/당뇨" },
                      { id: "disease_osteoporosis", text: "골다공증" },
                      { id: "disease_other", text: "기타 전신질환" },
                      { id: "disease_none", text: "없습니다" }
                    ]
                  },
                  worry_daily: {
                    question: "혹시 예전에 심혈관 관련 수술을 받았거나 전신질환이 있으신가요?",
                    options: [
                      { id: "disease_medication", text: "매일 복용하는 약이 있어요 (약봉투 지참해주세요)" },
                      { id: "disease_heart", text: "예전에 심장, 혈관계열로 수술 받은 적이 있어요" },
                      { id: "disease_bp_diabetes", text: "고혈압/당뇨" },
                      { id: "disease_osteoporosis", text: "골다공증" },
                      { id: "disease_other", text: "기타 전신질환" },
                      { id: "disease_none", text: "없습니다" }
                    ]
                  }
                }
              }
            }
          },
          // 아래 사랑니 선택 후 → 언제부터 불편
          wisdom_lower: {
            question: "현재 사랑니의 불편한 느낌이 언제부터 시작되었나요?",
            options: [
              { id: "wisdom_first_time", text: "처음입니다" },
              { id: "wisdom_recurring", text: "예전에도 비슷한 경험이 있었는데, 괜찮았다가 이번에 또 생겼어요" }
            ],
            next: {
              wisdom_first_time: {
                question: "현재 사랑니 통증 치료에 가장 걱정되는 부분은 무엇인가요?",
                options: [
                  { id: "worry_possible", text: "발치 가능 여부" },
                  { id: "worry_fear", text: "발치 치료에 대한 두려움" },
                  { id: "worry_daily", text: "발치 이후에 일상생활의 불편함" }
                ],
                next: {
                  worry_possible: {
                    question: "혹시 예전에 심혈관 관련 수술을 받았거나 전신질환이 있으신가요?",
                    options: [
                      { id: "disease_medication", text: "매일 복용하는 약이 있어요 (약봉투 지참해주세요)" },
                      { id: "disease_heart", text: "예전에 심장, 혈관계열로 수술 받은 적이 있어요" },
                      { id: "disease_bp_diabetes", text: "고혈압/당뇨" },
                      { id: "disease_osteoporosis", text: "골다공증" },
                      { id: "disease_other", text: "기타 전신질환" },
                      { id: "disease_none", text: "없습니다" }
                    ]
                  },
                  worry_fear: {
                    question: "혹시 예전에 심혈관 관련 수술을 받았거나 전신질환이 있으신가요?",
                    options: [
                      { id: "disease_medication", text: "매일 복용하는 약이 있어요 (약봉투 지참해주세요)" },
                      { id: "disease_heart", text: "예전에 심장, 혈관계열로 수술 받은 적이 있어요" },
                      { id: "disease_bp_diabetes", text: "고혈압/당뇨" },
                      { id: "disease_osteoporosis", text: "골다공증" },
                      { id: "disease_other", text: "기타 전신질환" },
                      { id: "disease_none", text: "없습니다" }
                    ]
                  },
                  worry_daily: {
                    question: "혹시 예전에 심혈관 관련 수술을 받았거나 전신질환이 있으신가요?",
                    options: [
                      { id: "disease_medication", text: "매일 복용하는 약이 있어요 (약봉투 지참해주세요)" },
                      { id: "disease_heart", text: "예전에 심장, 혈관계열로 수술 받은 적이 있어요" },
                      { id: "disease_bp_diabetes", text: "고혈압/당뇨" },
                      { id: "disease_osteoporosis", text: "골다공증" },
                      { id: "disease_other", text: "기타 전신질환" },
                      { id: "disease_none", text: "없습니다" }
                    ]
                  }
                }
              },
              wisdom_recurring: {
                question: "현재 사랑니 통증 치료에 가장 걱정되는 부분은 무엇인가요?",
                options: [
                  { id: "worry_possible", text: "발치 가능 여부" },
                  { id: "worry_fear", text: "발치 치료에 대한 두려움" },
                  { id: "worry_daily", text: "발치 이후에 일상생활의 불편함" }
                ],
                next: {
                  worry_possible: {
                    question: "혹시 예전에 심혈관 관련 수술을 받았거나 전신질환이 있으신가요?",
                    options: [
                      { id: "disease_medication", text: "매일 복용하는 약이 있어요 (약봉투 지참해주세요)" },
                      { id: "disease_heart", text: "예전에 심장, 혈관계열로 수술 받은 적이 있어요" },
                      { id: "disease_bp_diabetes", text: "고혈압/당뇨" },
                      { id: "disease_osteoporosis", text: "골다공증" },
                      { id: "disease_other", text: "기타 전신질환" },
                      { id: "disease_none", text: "없습니다" }
                    ]
                  },
                  worry_fear: {
                    question: "혹시 예전에 심혈관 관련 수술을 받았거나 전신질환이 있으신가요?",
                    options: [
                      { id: "disease_medication", text: "매일 복용하는 약이 있어요 (약봉투 지참해주세요)" },
                      { id: "disease_heart", text: "예전에 심장, 혈관계열로 수술 받은 적이 있어요" },
                      { id: "disease_bp_diabetes", text: "고혈압/당뇨" },
                      { id: "disease_osteoporosis", text: "골다공증" },
                      { id: "disease_other", text: "기타 전신질환" },
                      { id: "disease_none", text: "없습니다" }
                    ]
                  },
                  worry_daily: {
                    question: "혹시 예전에 심혈관 관련 수술을 받았거나 전신질환이 있으신가요?",
                    options: [
                      { id: "disease_medication", text: "매일 복용하는 약이 있어요 (약봉투 지참해주세요)" },
                      { id: "disease_heart", text: "예전에 심장, 혈관계열로 수술 받은 적이 있어요" },
                      { id: "disease_bp_diabetes", text: "고혈압/당뇨" },
                      { id: "disease_osteoporosis", text: "골다공증" },
                      { id: "disease_other", text: "기타 전신질환" },
                      { id: "disease_none", text: "없습니다" }
                    ]
                  }
                }
              }
            }
          }
        }
      },
      // 아프지 않은데 점검받고싶어요 선택 시 → 망설이는 이유 질문 → 최종 추천
      wisdom_checkup: {
        question: "사랑니 치료를 받는다면 가장 걱정되는 부분은 무엇인가요?",
        options: [
          { id: "checkup_worry_possible", text: "발치 가능 여부" },
          { id: "checkup_worry_fear", text: "발치 치료에 대한 두려움" },
          { id: "checkup_worry_daily", text: "발치 이후에 일상생활의 불편함" }
        ],
        next: {
          checkup_worry_possible: {
            question: "혹시 예전에 심혈관 관련 수술을 받았거나 전신질환이 있으신가요?",
            options: [
              { id: "disease_medication", text: "매일 복용하는 약이 있어요 (약봉투 지참해주세요)" },
              { id: "disease_heart", text: "예전에 심장, 혈관계열로 수술 받은 적이 있어요" },
              { id: "disease_bp_diabetes", text: "고혈압/당뇨" },
              { id: "disease_osteoporosis", text: "골다공증" },
              { id: "disease_other", text: "기타 전신질환" },
              { id: "disease_none", text: "없습니다" }
            ],
            next: {
              disease_medication: {
                question: "점검 받으면서 같이 검진 받고 싶은 부분이 있으신가요?",
                options: [
                  { id: "extra_cavity", text: "충치 검진" },
                  { id: "extra_gum", text: "잇몸 검진" },
                  { id: "extra_scaling", text: "스케일링" },
                  { id: "extra_none", text: "없어요, 사랑니만 점검 받고 싶어요" }
                ]
              },
              disease_heart: {
                question: "점검 받으면서 같이 검진 받고 싶은 부분이 있으신가요?",
                options: [
                  { id: "extra_cavity", text: "충치 검진" },
                  { id: "extra_gum", text: "잇몸 검진" },
                  { id: "extra_scaling", text: "스케일링" },
                  { id: "extra_none", text: "없어요, 사랑니만 점검 받고 싶어요" }
                ]
              },
              disease_bp_diabetes: {
                question: "점검 받으면서 같이 검진 받고 싶은 부분이 있으신가요?",
                options: [
                  { id: "extra_cavity", text: "충치 검진" },
                  { id: "extra_gum", text: "잇몸 검진" },
                  { id: "extra_scaling", text: "스케일링" },
                  { id: "extra_none", text: "없어요, 사랑니만 점검 받고 싶어요" }
                ]
              },
              disease_osteoporosis: {
                question: "점검 받으면서 같이 검진 받고 싶은 부분이 있으신가요?",
                options: [
                  { id: "extra_cavity", text: "충치 검진" },
                  { id: "extra_gum", text: "잇몸 검진" },
                  { id: "extra_scaling", text: "스케일링" },
                  { id: "extra_none", text: "없어요, 사랑니만 점검 받고 싶어요" }
                ]
              },
              disease_other: {
                question: "점검 받으면서 같이 검진 받고 싶은 부분이 있으신가요?",
                options: [
                  { id: "extra_cavity", text: "충치 검진" },
                  { id: "extra_gum", text: "잇몸 검진" },
                  { id: "extra_scaling", text: "스케일링" },
                  { id: "extra_none", text: "없어요, 사랑니만 점검 받고 싶어요" }
                ]
              },
              disease_none: {
                question: "점검 받으면서 같이 검진 받고 싶은 부분이 있으신가요?",
                options: [
                  { id: "extra_cavity", text: "충치 검진" },
                  { id: "extra_gum", text: "잇몸 검진" },
                  { id: "extra_scaling", text: "스케일링" },
                  { id: "extra_none", text: "없어요, 사랑니만 점검 받고 싶어요" }
                ]
              }
            }
          },
          checkup_worry_fear: {
            question: "혹시 예전에 심혈관 관련 수술을 받았거나 전신질환이 있으신가요?",
            options: [
              { id: "disease_medication", text: "매일 복용하는 약이 있어요 (약봉투 지참해주세요)" },
              { id: "disease_heart", text: "예전에 심장, 혈관계열로 수술 받은 적이 있어요" },
              { id: "disease_bp_diabetes", text: "고혈압/당뇨" },
              { id: "disease_osteoporosis", text: "골다공증" },
              { id: "disease_other", text: "기타 전신질환" },
              { id: "disease_none", text: "없습니다" }
            ],
            next: {
              disease_medication: {
                question: "점검 받으면서 같이 검진 받고 싶은 부분이 있으신가요?",
                options: [
                  { id: "extra_cavity", text: "충치 검진" },
                  { id: "extra_gum", text: "잇몸 검진" },
                  { id: "extra_scaling", text: "스케일링" },
                  { id: "extra_none", text: "없어요, 사랑니만 점검 받고 싶어요" }
                ]
              },
              disease_heart: {
                question: "점검 받으면서 같이 검진 받고 싶은 부분이 있으신가요?",
                options: [
                  { id: "extra_cavity", text: "충치 검진" },
                  { id: "extra_gum", text: "잇몸 검진" },
                  { id: "extra_scaling", text: "스케일링" },
                  { id: "extra_none", text: "없어요, 사랑니만 점검 받고 싶어요" }
                ]
              },
              disease_bp_diabetes: {
                question: "점검 받으면서 같이 검진 받고 싶은 부분이 있으신가요?",
                options: [
                  { id: "extra_cavity", text: "충치 검진" },
                  { id: "extra_gum", text: "잇몸 검진" },
                  { id: "extra_scaling", text: "스케일링" },
                  { id: "extra_none", text: "없어요, 사랑니만 점검 받고 싶어요" }
                ]
              },
              disease_osteoporosis: {
                question: "점검 받으면서 같이 검진 받고 싶은 부분이 있으신가요?",
                options: [
                  { id: "extra_cavity", text: "충치 검진" },
                  { id: "extra_gum", text: "잇몸 검진" },
                  { id: "extra_scaling", text: "스케일링" },
                  { id: "extra_none", text: "없어요, 사랑니만 점검 받고 싶어요" }
                ]
              },
              disease_other: {
                question: "점검 받으면서 같이 검진 받고 싶은 부분이 있으신가요?",
                options: [
                  { id: "extra_cavity", text: "충치 검진" },
                  { id: "extra_gum", text: "잇몸 검진" },
                  { id: "extra_scaling", text: "스케일링" },
                  { id: "extra_none", text: "없어요, 사랑니만 점검 받고 싶어요" }
                ]
              },
              disease_none: {
                question: "점검 받으면서 같이 검진 받고 싶은 부분이 있으신가요?",
                options: [
                  { id: "extra_cavity", text: "충치 검진" },
                  { id: "extra_gum", text: "잇몸 검진" },
                  { id: "extra_scaling", text: "스케일링" },
                  { id: "extra_none", text: "없어요, 사랑니만 점검 받고 싶어요" }
                ]
              }
            }
          },
          checkup_worry_daily: {
            question: "혹시 예전에 심혈관 관련 수술을 받았거나 전신질환이 있으신가요?",
            options: [
              { id: "disease_medication", text: "매일 복용하는 약이 있어요 (약봉투 지참해주세요)" },
              { id: "disease_heart", text: "예전에 심장, 혈관계열로 수술 받은 적이 있어요" },
              { id: "disease_bp_diabetes", text: "고혈압/당뇨" },
              { id: "disease_osteoporosis", text: "골다공증" },
              { id: "disease_other", text: "기타 전신질환" },
              { id: "disease_none", text: "없습니다" }
            ],
            next: {
              disease_medication: {
                question: "점검 받으면서 같이 검진 받고 싶은 부분이 있으신가요?",
                options: [
                  { id: "extra_cavity", text: "충치 검진" },
                  { id: "extra_gum", text: "잇몸 검진" },
                  { id: "extra_scaling", text: "스케일링" },
                  { id: "extra_none", text: "없어요, 사랑니만 점검 받고 싶어요" }
                ]
              },
              disease_heart: {
                question: "점검 받으면서 같이 검진 받고 싶은 부분이 있으신가요?",
                options: [
                  { id: "extra_cavity", text: "충치 검진" },
                  { id: "extra_gum", text: "잇몸 검진" },
                  { id: "extra_scaling", text: "스케일링" },
                  { id: "extra_none", text: "없어요, 사랑니만 점검 받고 싶어요" }
                ]
              },
              disease_bp_diabetes: {
                question: "점검 받으면서 같이 검진 받고 싶은 부분이 있으신가요?",
                options: [
                  { id: "extra_cavity", text: "충치 검진" },
                  { id: "extra_gum", text: "잇몸 검진" },
                  { id: "extra_scaling", text: "스케일링" },
                  { id: "extra_none", text: "없어요, 사랑니만 점검 받고 싶어요" }
                ]
              },
              disease_osteoporosis: {
                question: "점검 받으면서 같이 검진 받고 싶은 부분이 있으신가요?",
                options: [
                  { id: "extra_cavity", text: "충치 검진" },
                  { id: "extra_gum", text: "잇몸 검진" },
                  { id: "extra_scaling", text: "스케일링" },
                  { id: "extra_none", text: "없어요, 사랑니만 점검 받고 싶어요" }
                ]
              },
              disease_other: {
                question: "점검 받으면서 같이 검진 받고 싶은 부분이 있으신가요?",
                options: [
                  { id: "extra_cavity", text: "충치 검진" },
                  { id: "extra_gum", text: "잇몸 검진" },
                  { id: "extra_scaling", text: "스케일링" },
                  { id: "extra_none", text: "없어요, 사랑니만 점검 받고 싶어요" }
                ]
              },
              disease_none: {
                question: "점검 받으면서 같이 검진 받고 싶은 부분이 있으신가요?",
                options: [
                  { id: "extra_cavity", text: "충치 검진" },
                  { id: "extra_gum", text: "잇몸 검진" },
                  { id: "extra_scaling", text: "스케일링" },
                  { id: "extra_none", text: "없어요, 사랑니만 점검 받고 싶어요" }
                ]
              }
            }
          }
        }
      }
    }
  },

  // 심미 관련 질문 (미백/라미네이트 전용 플로우)
  aesthetic: {
    question: "어떤 부분을 개선하고 싶으신가요?",
    showDoctorCredentials: true,  // 원장 소개 카드 표시 플래그
    options: [
      { id: "cosmetic_color", text: "앞니의 색 및 밝기" },
      { id: "cosmetic_shape", text: "앞니의 모양과 크기, 웃음라인" },
      { id: "cosmetic_both", text: "둘다 개선" }
    ],
    next: {
      // 미백 경로
      cosmetic_color: {
        question: "현재 본인의 치아 그대로, 밝고 깨끗한 느낌을 주기 위해서는 \"전문가 미백\" 치료를 권장드립니다.\n\n혹시 미백치료에 걱정되는 부분은 무엇입니까?",
        treatmentPath: "whitening",
        isTerminal: true,
        options: [
          { id: "whitening_first", text: "처음 미백치료를 받아봅니다" },
          { id: "whitening_sideeffects", text: "치료후 후유증은 없는지 궁금합니다" },
          { id: "whitening_frequency", text: "얼마나 자주 해야하는 지 궁금합니다" }
        ]
      },
      // 라미네이트 경로 (모양/크기 선택)
      cosmetic_shape: {
        question: "앞니의 모양과 크기를 개선하기 위해서는 \"심미보철치료\", 즉 \"라미네이트\" 치료를 권장드립니다.\n\n혹시 라미네이트 치료에 걱정되는 부분은 무엇입니까?",
        treatmentPath: "laminate",
        isTerminal: true,
        options: [
          { id: "laminate_prep", text: "치아 삭제량" },
          { id: "laminate_duration", text: "치료기간" },
          { id: "laminate_warranty", text: "보증기간 (재치료에 대한 불안감)" }
        ]
      },
      // 라미네이트 경로 (둘다 선택)
      cosmetic_both: {
        question: "앞니의 모양과 크기를 개선하기 위해서는 \"심미보철치료\", 즉 \"라미네이트\" 치료를 권장드립니다.\n\n혹시 라미네이트 치료에 걱정되는 부분은 무엇입니까?",
        treatmentPath: "laminate",
        isTerminal: true,
        options: [
          { id: "laminate_prep", text: "치아 삭제량" },
          { id: "laminate_duration", text: "치료기간" },
          { id: "laminate_warranty", text: "보증기간 (재치료에 대한 불안감)" }
        ]
      }
    }
  },

  // 치아 상실 관련 질문 (임플란트 상담용) - Q1: 현재 상태
  missing_tooth: {
    question: "현재 치아 상태가 어떠신가요?",
    options: [
      { id: "missing_upper_all", text: "윗니 전체가 없거나 발치 예정이에요" },
      { id: "missing_lower_all", text: "아랫니 전체가 없거나 발치 예정이에요" },
      { id: "missing_all", text: "거의 모든 치아가 없거나 발치 예정이에요" },
      { id: "missing_partial", text: "10개 이내의 부분적인 다수 치아가 없거나 발치 예정이에요" },
      { id: "implant_revision", text: "임플란트 재수술이 필요해요" }
    ],
    next: {
      // Q2: 틀니 여부 (모든 옵션 공통)
      missing_upper_all: {
        question: "현재 틀니를 착용하고 계신가요?",
        options: [
          { id: "denture_yes", text: "예" },
          { id: "denture_no", text: "아니요" }
        ],
        next: {
          // Q3: 전신질환 확인
          denture_yes: {
            question: "현재 앓고 계신 전신질환이 있으신가요?",
            options: [
              { id: "disease_diabetes", text: "당뇨" },
              { id: "disease_hypertension", text: "고혈압" },
              { id: "disease_osteoporosis", text: "골다공증" },
              { id: "disease_heart", text: "심장질환" },
              { id: "disease_none", text: "없어요" }
            ],
            next: {
              // Q4: 치료에서 중요한 부분 (Q5 역할)
              disease_diabetes: {
                question: "치료에서 가장 중요하게 생각하시는 부분은?",
                options: [
                  { id: "priority_cost", text: "비용" },
                  { id: "priority_pain", text: "통증" },
                  { id: "priority_eating", text: "편안한 식사" },
                  { id: "priority_recovery", text: "수술 후 빠른 회복과 일상복귀" }
                ],
                next: {
                  // Q5: 망설이는 이유 (Q6 역할)
                  priority_cost: {
                    question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?",
                    options: [
                      { id: "hesitation_cost", text: "비용 때문에" },
                      { id: "hesitation_fear", text: "통증/치과공포증 때문에" },
                      { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" },
                      { id: "hesitation_none", text: "특별한 이유 없어요" }
                    ]
                  },
                  priority_pain: {
                    question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?",
                    options: [
                      { id: "hesitation_cost", text: "비용 때문에" },
                      { id: "hesitation_fear", text: "통증/치과공포증 때문에" },
                      { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" },
                      { id: "hesitation_none", text: "특별한 이유 없어요" }
                    ]
                  },
                  priority_eating: {
                    question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?",
                    options: [
                      { id: "hesitation_cost", text: "비용 때문에" },
                      { id: "hesitation_fear", text: "통증/치과공포증 때문에" },
                      { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" },
                      { id: "hesitation_none", text: "특별한 이유 없어요" }
                    ]
                  },
                  priority_recovery: {
                    question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?",
                    options: [
                      { id: "hesitation_cost", text: "비용 때문에" },
                      { id: "hesitation_fear", text: "통증/치과공포증 때문에" },
                      { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" },
                      { id: "hesitation_none", text: "특별한 이유 없어요" }
                    ]
                  }
                }
              },
              disease_hypertension: {
                question: "치료에서 가장 중요하게 생각하시는 부분은?",
                options: [
                  { id: "priority_cost", text: "비용" },
                  { id: "priority_pain", text: "통증" },
                  { id: "priority_eating", text: "편안한 식사" },
                  { id: "priority_recovery", text: "수술 후 빠른 회복과 일상복귀" }
                ],
                next: {
                  priority_cost: {
                    question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?",
                    options: [
                      { id: "hesitation_cost", text: "비용 때문에" },
                      { id: "hesitation_fear", text: "통증/치과공포증 때문에" },
                      { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" },
                      { id: "hesitation_none", text: "특별한 이유 없어요" }
                    ]
                  },
                  priority_pain: {
                    question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?",
                    options: [
                      { id: "hesitation_cost", text: "비용 때문에" },
                      { id: "hesitation_fear", text: "통증/치과공포증 때문에" },
                      { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" },
                      { id: "hesitation_none", text: "특별한 이유 없어요" }
                    ]
                  },
                  priority_eating: {
                    question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?",
                    options: [
                      { id: "hesitation_cost", text: "비용 때문에" },
                      { id: "hesitation_fear", text: "통증/치과공포증 때문에" },
                      { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" },
                      { id: "hesitation_none", text: "특별한 이유 없어요" }
                    ]
                  },
                  priority_recovery: {
                    question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?",
                    options: [
                      { id: "hesitation_cost", text: "비용 때문에" },
                      { id: "hesitation_fear", text: "통증/치과공포증 때문에" },
                      { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" },
                      { id: "hesitation_none", text: "특별한 이유 없어요" }
                    ]
                  }
                }
              },
              disease_osteoporosis: {
                question: "치료에서 가장 중요하게 생각하시는 부분은?",
                options: [
                  { id: "priority_cost", text: "비용" },
                  { id: "priority_pain", text: "통증" },
                  { id: "priority_eating", text: "편안한 식사" },
                  { id: "priority_recovery", text: "수술 후 빠른 회복과 일상복귀" }
                ],
                next: {
                  priority_cost: {
                    question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?",
                    options: [
                      { id: "hesitation_cost", text: "비용 때문에" },
                      { id: "hesitation_fear", text: "통증/치과공포증 때문에" },
                      { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" },
                      { id: "hesitation_none", text: "특별한 이유 없어요" }
                    ]
                  },
                  priority_pain: {
                    question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?",
                    options: [
                      { id: "hesitation_cost", text: "비용 때문에" },
                      { id: "hesitation_fear", text: "통증/치과공포증 때문에" },
                      { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" },
                      { id: "hesitation_none", text: "특별한 이유 없어요" }
                    ]
                  },
                  priority_eating: {
                    question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?",
                    options: [
                      { id: "hesitation_cost", text: "비용 때문에" },
                      { id: "hesitation_fear", text: "통증/치과공포증 때문에" },
                      { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" },
                      { id: "hesitation_none", text: "특별한 이유 없어요" }
                    ]
                  },
                  priority_recovery: {
                    question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?",
                    options: [
                      { id: "hesitation_cost", text: "비용 때문에" },
                      { id: "hesitation_fear", text: "통증/치과공포증 때문에" },
                      { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" },
                      { id: "hesitation_none", text: "특별한 이유 없어요" }
                    ]
                  }
                }
              },
              disease_heart: {
                question: "치료에서 가장 중요하게 생각하시는 부분은?",
                options: [
                  { id: "priority_cost", text: "비용" },
                  { id: "priority_pain", text: "통증" },
                  { id: "priority_eating", text: "편안한 식사" },
                  { id: "priority_recovery", text: "수술 후 빠른 회복과 일상복귀" }
                ],
                next: {
                  priority_cost: {
                    question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?",
                    options: [
                      { id: "hesitation_cost", text: "비용 때문에" },
                      { id: "hesitation_fear", text: "통증/치과공포증 때문에" },
                      { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" },
                      { id: "hesitation_none", text: "특별한 이유 없어요" }
                    ]
                  },
                  priority_pain: {
                    question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?",
                    options: [
                      { id: "hesitation_cost", text: "비용 때문에" },
                      { id: "hesitation_fear", text: "통증/치과공포증 때문에" },
                      { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" },
                      { id: "hesitation_none", text: "특별한 이유 없어요" }
                    ]
                  },
                  priority_eating: {
                    question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?",
                    options: [
                      { id: "hesitation_cost", text: "비용 때문에" },
                      { id: "hesitation_fear", text: "통증/치과공포증 때문에" },
                      { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" },
                      { id: "hesitation_none", text: "특별한 이유 없어요" }
                    ]
                  },
                  priority_recovery: {
                    question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?",
                    options: [
                      { id: "hesitation_cost", text: "비용 때문에" },
                      { id: "hesitation_fear", text: "통증/치과공포증 때문에" },
                      { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" },
                      { id: "hesitation_none", text: "특별한 이유 없어요" }
                    ]
                  }
                }
              },
              disease_none: {
                question: "치료에서 가장 중요하게 생각하시는 부분은?",
                options: [
                  { id: "priority_cost", text: "비용" },
                  { id: "priority_pain", text: "통증" },
                  { id: "priority_eating", text: "편안한 식사" },
                  { id: "priority_recovery", text: "수술 후 빠른 회복과 일상복귀" }
                ],
                next: {
                  priority_cost: {
                    question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?",
                    options: [
                      { id: "hesitation_cost", text: "비용 때문에" },
                      { id: "hesitation_fear", text: "통증/치과공포증 때문에" },
                      { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" },
                      { id: "hesitation_none", text: "특별한 이유 없어요" }
                    ]
                  },
                  priority_pain: {
                    question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?",
                    options: [
                      { id: "hesitation_cost", text: "비용 때문에" },
                      { id: "hesitation_fear", text: "통증/치과공포증 때문에" },
                      { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" },
                      { id: "hesitation_none", text: "특별한 이유 없어요" }
                    ]
                  },
                  priority_eating: {
                    question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?",
                    options: [
                      { id: "hesitation_cost", text: "비용 때문에" },
                      { id: "hesitation_fear", text: "통증/치과공포증 때문에" },
                      { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" },
                      { id: "hesitation_none", text: "특별한 이유 없어요" }
                    ]
                  },
                  priority_recovery: {
                    question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?",
                    options: [
                      { id: "hesitation_cost", text: "비용 때문에" },
                      { id: "hesitation_fear", text: "통증/치과공포증 때문에" },
                      { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" },
                      { id: "hesitation_none", text: "특별한 이유 없어요" }
                    ]
                  }
                }
              }
            }
          },
          denture_no: {
            question: "현재 앓고 계신 전신질환이 있으신가요?",
            options: [
              { id: "disease_diabetes", text: "당뇨" },
              { id: "disease_hypertension", text: "고혈압" },
              { id: "disease_osteoporosis", text: "골다공증" },
              { id: "disease_heart", text: "심장질환" },
              { id: "disease_none", text: "없어요" }
            ],
            next: {
              disease_diabetes: {
                question: "치료에서 가장 중요하게 생각하시는 부분은?",
                options: [
                  { id: "priority_cost", text: "비용" },
                  { id: "priority_pain", text: "통증" },
                  { id: "priority_eating", text: "편안한 식사" },
                  { id: "priority_recovery", text: "수술 후 빠른 회복과 일상복귀" }
                ],
                next: {
                  priority_cost: {
                    question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?",
                    options: [
                      { id: "hesitation_cost", text: "비용 때문에" },
                      { id: "hesitation_fear", text: "통증/치과공포증 때문에" },
                      { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" },
                      { id: "hesitation_none", text: "특별한 이유 없어요" }
                    ]
                  },
                  priority_pain: {
                    question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?",
                    options: [
                      { id: "hesitation_cost", text: "비용 때문에" },
                      { id: "hesitation_fear", text: "통증/치과공포증 때문에" },
                      { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" },
                      { id: "hesitation_none", text: "특별한 이유 없어요" }
                    ]
                  },
                  priority_eating: {
                    question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?",
                    options: [
                      { id: "hesitation_cost", text: "비용 때문에" },
                      { id: "hesitation_fear", text: "통증/치과공포증 때문에" },
                      { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" },
                      { id: "hesitation_none", text: "특별한 이유 없어요" }
                    ]
                  },
                  priority_recovery: {
                    question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?",
                    options: [
                      { id: "hesitation_cost", text: "비용 때문에" },
                      { id: "hesitation_fear", text: "통증/치과공포증 때문에" },
                      { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" },
                      { id: "hesitation_none", text: "특별한 이유 없어요" }
                    ]
                  }
                }
              },
              disease_hypertension: {
                question: "치료에서 가장 중요하게 생각하시는 부분은?",
                options: [
                  { id: "priority_cost", text: "비용" },
                  { id: "priority_pain", text: "통증" },
                  { id: "priority_eating", text: "편안한 식사" },
                  { id: "priority_recovery", text: "수술 후 빠른 회복과 일상복귀" }
                ],
                next: {
                  priority_cost: {
                    question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?",
                    options: [
                      { id: "hesitation_cost", text: "비용 때문에" },
                      { id: "hesitation_fear", text: "통증/치과공포증 때문에" },
                      { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" },
                      { id: "hesitation_none", text: "특별한 이유 없어요" }
                    ]
                  },
                  priority_pain: {
                    question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?",
                    options: [
                      { id: "hesitation_cost", text: "비용 때문에" },
                      { id: "hesitation_fear", text: "통증/치과공포증 때문에" },
                      { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" },
                      { id: "hesitation_none", text: "특별한 이유 없어요" }
                    ]
                  },
                  priority_eating: {
                    question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?",
                    options: [
                      { id: "hesitation_cost", text: "비용 때문에" },
                      { id: "hesitation_fear", text: "통증/치과공포증 때문에" },
                      { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" },
                      { id: "hesitation_none", text: "특별한 이유 없어요" }
                    ]
                  },
                  priority_recovery: {
                    question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?",
                    options: [
                      { id: "hesitation_cost", text: "비용 때문에" },
                      { id: "hesitation_fear", text: "통증/치과공포증 때문에" },
                      { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" },
                      { id: "hesitation_none", text: "특별한 이유 없어요" }
                    ]
                  }
                }
              },
              disease_osteoporosis: {
                question: "치료에서 가장 중요하게 생각하시는 부분은?",
                options: [
                  { id: "priority_cost", text: "비용" },
                  { id: "priority_pain", text: "통증" },
                  { id: "priority_eating", text: "편안한 식사" },
                  { id: "priority_recovery", text: "수술 후 빠른 회복과 일상복귀" }
                ],
                next: {
                  priority_cost: {
                    question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?",
                    options: [
                      { id: "hesitation_cost", text: "비용 때문에" },
                      { id: "hesitation_fear", text: "통증/치과공포증 때문에" },
                      { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" },
                      { id: "hesitation_none", text: "특별한 이유 없어요" }
                    ]
                  },
                  priority_pain: {
                    question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?",
                    options: [
                      { id: "hesitation_cost", text: "비용 때문에" },
                      { id: "hesitation_fear", text: "통증/치과공포증 때문에" },
                      { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" },
                      { id: "hesitation_none", text: "특별한 이유 없어요" }
                    ]
                  },
                  priority_eating: {
                    question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?",
                    options: [
                      { id: "hesitation_cost", text: "비용 때문에" },
                      { id: "hesitation_fear", text: "통증/치과공포증 때문에" },
                      { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" },
                      { id: "hesitation_none", text: "특별한 이유 없어요" }
                    ]
                  },
                  priority_recovery: {
                    question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?",
                    options: [
                      { id: "hesitation_cost", text: "비용 때문에" },
                      { id: "hesitation_fear", text: "통증/치과공포증 때문에" },
                      { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" },
                      { id: "hesitation_none", text: "특별한 이유 없어요" }
                    ]
                  }
                }
              },
              disease_heart: {
                question: "치료에서 가장 중요하게 생각하시는 부분은?",
                options: [
                  { id: "priority_cost", text: "비용" },
                  { id: "priority_pain", text: "통증" },
                  { id: "priority_eating", text: "편안한 식사" },
                  { id: "priority_recovery", text: "수술 후 빠른 회복과 일상복귀" }
                ],
                next: {
                  priority_cost: {
                    question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?",
                    options: [
                      { id: "hesitation_cost", text: "비용 때문에" },
                      { id: "hesitation_fear", text: "통증/치과공포증 때문에" },
                      { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" },
                      { id: "hesitation_none", text: "특별한 이유 없어요" }
                    ]
                  },
                  priority_pain: {
                    question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?",
                    options: [
                      { id: "hesitation_cost", text: "비용 때문에" },
                      { id: "hesitation_fear", text: "통증/치과공포증 때문에" },
                      { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" },
                      { id: "hesitation_none", text: "특별한 이유 없어요" }
                    ]
                  },
                  priority_eating: {
                    question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?",
                    options: [
                      { id: "hesitation_cost", text: "비용 때문에" },
                      { id: "hesitation_fear", text: "통증/치과공포증 때문에" },
                      { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" },
                      { id: "hesitation_none", text: "특별한 이유 없어요" }
                    ]
                  },
                  priority_recovery: {
                    question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?",
                    options: [
                      { id: "hesitation_cost", text: "비용 때문에" },
                      { id: "hesitation_fear", text: "통증/치과공포증 때문에" },
                      { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" },
                      { id: "hesitation_none", text: "특별한 이유 없어요" }
                    ]
                  }
                }
              },
              disease_none: {
                question: "치료에서 가장 중요하게 생각하시는 부분은?",
                options: [
                  { id: "priority_cost", text: "비용" },
                  { id: "priority_pain", text: "통증" },
                  { id: "priority_eating", text: "편안한 식사" },
                  { id: "priority_recovery", text: "수술 후 빠른 회복과 일상복귀" }
                ],
                next: {
                  priority_cost: {
                    question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?",
                    options: [
                      { id: "hesitation_cost", text: "비용 때문에" },
                      { id: "hesitation_fear", text: "통증/치과공포증 때문에" },
                      { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" },
                      { id: "hesitation_none", text: "특별한 이유 없어요" }
                    ]
                  },
                  priority_pain: {
                    question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?",
                    options: [
                      { id: "hesitation_cost", text: "비용 때문에" },
                      { id: "hesitation_fear", text: "통증/치과공포증 때문에" },
                      { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" },
                      { id: "hesitation_none", text: "특별한 이유 없어요" }
                    ]
                  },
                  priority_eating: {
                    question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?",
                    options: [
                      { id: "hesitation_cost", text: "비용 때문에" },
                      { id: "hesitation_fear", text: "통증/치과공포증 때문에" },
                      { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" },
                      { id: "hesitation_none", text: "특별한 이유 없어요" }
                    ]
                  },
                  priority_recovery: {
                    question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?",
                    options: [
                      { id: "hesitation_cost", text: "비용 때문에" },
                      { id: "hesitation_fear", text: "통증/치과공포증 때문에" },
                      { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" },
                      { id: "hesitation_none", text: "특별한 이유 없어요" }
                    ]
                  }
                }
              }
            }
          }
        }
      },
      // 다른 옵션들도 동일한 플로우 적용 (missing_upper_all과 동일한 구조)
      missing_all: {
        question: "현재 틀니를 착용하고 계신가요?",
        options: [
          { id: "denture_yes", text: "예" },
          { id: "denture_no", text: "아니요" }
        ],
        next: {
          denture_yes: {
            question: "현재 앓고 계신 전신질환이 있으신가요?",
            options: [
              { id: "disease_diabetes", text: "당뇨" },
              { id: "disease_hypertension", text: "고혈압" },
              { id: "disease_osteoporosis", text: "골다공증" },
              { id: "disease_heart", text: "심장질환" },
              { id: "disease_none", text: "없어요" }
            ],
            next: {
              disease_diabetes: { question: "치료에서 가장 중요하게 생각하시는 부분은?", options: [{ id: "priority_cost", text: "비용" }, { id: "priority_pain", text: "통증" }, { id: "priority_eating", text: "편안한 식사" }, { id: "priority_recovery", text: "수술 후 빠른 회복과 일상복귀" }], next: { priority_cost: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_pain: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_eating: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_recovery: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] } } },
              disease_hypertension: { question: "치료에서 가장 중요하게 생각하시는 부분은?", options: [{ id: "priority_cost", text: "비용" }, { id: "priority_pain", text: "통증" }, { id: "priority_eating", text: "편안한 식사" }, { id: "priority_recovery", text: "수술 후 빠른 회복과 일상복귀" }], next: { priority_cost: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_pain: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_eating: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_recovery: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] } } },
              disease_osteoporosis: { question: "치료에서 가장 중요하게 생각하시는 부분은?", options: [{ id: "priority_cost", text: "비용" }, { id: "priority_pain", text: "통증" }, { id: "priority_eating", text: "편안한 식사" }, { id: "priority_recovery", text: "수술 후 빠른 회복과 일상복귀" }], next: { priority_cost: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_pain: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_eating: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_recovery: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] } } },
              disease_heart: { question: "치료에서 가장 중요하게 생각하시는 부분은?", options: [{ id: "priority_cost", text: "비용" }, { id: "priority_pain", text: "통증" }, { id: "priority_eating", text: "편안한 식사" }, { id: "priority_recovery", text: "수술 후 빠른 회복과 일상복귀" }], next: { priority_cost: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_pain: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_eating: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_recovery: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] } } },
              disease_none: { question: "치료에서 가장 중요하게 생각하시는 부분은?", options: [{ id: "priority_cost", text: "비용" }, { id: "priority_pain", text: "통증" }, { id: "priority_eating", text: "편안한 식사" }, { id: "priority_recovery", text: "수술 후 빠른 회복과 일상복귀" }], next: { priority_cost: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_pain: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_eating: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_recovery: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] } } }
            }
          },
          denture_no: {
            question: "현재 앓고 계신 전신질환이 있으신가요?",
            options: [
              { id: "disease_diabetes", text: "당뇨" },
              { id: "disease_hypertension", text: "고혈압" },
              { id: "disease_osteoporosis", text: "골다공증" },
              { id: "disease_heart", text: "심장질환" },
              { id: "disease_none", text: "없어요" }
            ],
            next: {
              disease_diabetes: { question: "치료에서 가장 중요하게 생각하시는 부분은?", options: [{ id: "priority_cost", text: "비용" }, { id: "priority_pain", text: "통증" }, { id: "priority_eating", text: "편안한 식사" }, { id: "priority_recovery", text: "수술 후 빠른 회복과 일상복귀" }], next: { priority_cost: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_pain: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_eating: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_recovery: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] } } },
              disease_hypertension: { question: "치료에서 가장 중요하게 생각하시는 부분은?", options: [{ id: "priority_cost", text: "비용" }, { id: "priority_pain", text: "통증" }, { id: "priority_eating", text: "편안한 식사" }, { id: "priority_recovery", text: "수술 후 빠른 회복과 일상복귀" }], next: { priority_cost: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_pain: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_eating: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_recovery: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] } } },
              disease_osteoporosis: { question: "치료에서 가장 중요하게 생각하시는 부분은?", options: [{ id: "priority_cost", text: "비용" }, { id: "priority_pain", text: "통증" }, { id: "priority_eating", text: "편안한 식사" }, { id: "priority_recovery", text: "수술 후 빠른 회복과 일상복귀" }], next: { priority_cost: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_pain: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_eating: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_recovery: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] } } },
              disease_heart: { question: "치료에서 가장 중요하게 생각하시는 부분은?", options: [{ id: "priority_cost", text: "비용" }, { id: "priority_pain", text: "통증" }, { id: "priority_eating", text: "편안한 식사" }, { id: "priority_recovery", text: "수술 후 빠른 회복과 일상복귀" }], next: { priority_cost: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_pain: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_eating: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_recovery: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] } } },
              disease_none: { question: "치료에서 가장 중요하게 생각하시는 부분은?", options: [{ id: "priority_cost", text: "비용" }, { id: "priority_pain", text: "통증" }, { id: "priority_eating", text: "편안한 식사" }, { id: "priority_recovery", text: "수술 후 빠른 회복과 일상복귀" }], next: { priority_cost: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_pain: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_eating: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_recovery: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] } } }
            }
          }
        }
      },
      missing_lower_all: {
        question: "현재 틀니를 착용하고 계신가요?",
        options: [
          { id: "denture_yes", text: "예" },
          { id: "denture_no", text: "아니요" }
        ],
        next: {
          denture_yes: {
            question: "현재 앓고 계신 전신질환이 있으신가요?",
            options: [
              { id: "disease_diabetes", text: "당뇨" },
              { id: "disease_hypertension", text: "고혈압" },
              { id: "disease_osteoporosis", text: "골다공증" },
              { id: "disease_heart", text: "심장질환" },
              { id: "disease_none", text: "없어요" }
            ],
            next: {
              disease_diabetes: { question: "치료에서 가장 중요하게 생각하시는 부분은?", options: [{ id: "priority_cost", text: "비용" }, { id: "priority_pain", text: "통증" }, { id: "priority_eating", text: "편안한 식사" }, { id: "priority_recovery", text: "수술 후 빠른 회복과 일상복귀" }], next: { priority_cost: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_pain: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_eating: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_recovery: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] } } },
              disease_hypertension: { question: "치료에서 가장 중요하게 생각하시는 부분은?", options: [{ id: "priority_cost", text: "비용" }, { id: "priority_pain", text: "통증" }, { id: "priority_eating", text: "편안한 식사" }, { id: "priority_recovery", text: "수술 후 빠른 회복과 일상복귀" }], next: { priority_cost: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_pain: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_eating: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_recovery: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] } } },
              disease_osteoporosis: { question: "치료에서 가장 중요하게 생각하시는 부분은?", options: [{ id: "priority_cost", text: "비용" }, { id: "priority_pain", text: "통증" }, { id: "priority_eating", text: "편안한 식사" }, { id: "priority_recovery", text: "수술 후 빠른 회복과 일상복귀" }], next: { priority_cost: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_pain: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_eating: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_recovery: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] } } },
              disease_heart: { question: "치료에서 가장 중요하게 생각하시는 부분은?", options: [{ id: "priority_cost", text: "비용" }, { id: "priority_pain", text: "통증" }, { id: "priority_eating", text: "편안한 식사" }, { id: "priority_recovery", text: "수술 후 빠른 회복과 일상복귀" }], next: { priority_cost: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_pain: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_eating: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_recovery: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] } } },
              disease_none: { question: "치료에서 가장 중요하게 생각하시는 부분은?", options: [{ id: "priority_cost", text: "비용" }, { id: "priority_pain", text: "통증" }, { id: "priority_eating", text: "편안한 식사" }, { id: "priority_recovery", text: "수술 후 빠른 회복과 일상복귀" }], next: { priority_cost: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_pain: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_eating: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_recovery: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] } } }
            }
          },
          denture_no: {
            question: "현재 앓고 계신 전신질환이 있으신가요?",
            options: [
              { id: "disease_diabetes", text: "당뇨" },
              { id: "disease_hypertension", text: "고혈압" },
              { id: "disease_osteoporosis", text: "골다공증" },
              { id: "disease_heart", text: "심장질환" },
              { id: "disease_none", text: "없어요" }
            ],
            next: {
              disease_diabetes: { question: "치료에서 가장 중요하게 생각하시는 부분은?", options: [{ id: "priority_cost", text: "비용" }, { id: "priority_pain", text: "통증" }, { id: "priority_eating", text: "편안한 식사" }, { id: "priority_recovery", text: "수술 후 빠른 회복과 일상복귀" }], next: { priority_cost: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_pain: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_eating: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_recovery: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] } } },
              disease_hypertension: { question: "치료에서 가장 중요하게 생각하시는 부분은?", options: [{ id: "priority_cost", text: "비용" }, { id: "priority_pain", text: "통증" }, { id: "priority_eating", text: "편안한 식사" }, { id: "priority_recovery", text: "수술 후 빠른 회복과 일상복귀" }], next: { priority_cost: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_pain: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_eating: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_recovery: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] } } },
              disease_osteoporosis: { question: "치료에서 가장 중요하게 생각하시는 부분은?", options: [{ id: "priority_cost", text: "비용" }, { id: "priority_pain", text: "통증" }, { id: "priority_eating", text: "편안한 식사" }, { id: "priority_recovery", text: "수술 후 빠른 회복과 일상복귀" }], next: { priority_cost: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_pain: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_eating: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_recovery: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] } } },
              disease_heart: { question: "치료에서 가장 중요하게 생각하시는 부분은?", options: [{ id: "priority_cost", text: "비용" }, { id: "priority_pain", text: "통증" }, { id: "priority_eating", text: "편안한 식사" }, { id: "priority_recovery", text: "수술 후 빠른 회복과 일상복귀" }], next: { priority_cost: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_pain: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_eating: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_recovery: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] } } },
              disease_none: { question: "치료에서 가장 중요하게 생각하시는 부분은?", options: [{ id: "priority_cost", text: "비용" }, { id: "priority_pain", text: "통증" }, { id: "priority_eating", text: "편안한 식사" }, { id: "priority_recovery", text: "수술 후 빠른 회복과 일상복귀" }], next: { priority_cost: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_pain: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_eating: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_recovery: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] } } }
            }
          }
        }
      },
      missing_partial: {
        question: "어느 부위의 치아가 없거나 발치 예정인가요?",
        options: [
          { id: "location_front", text: "앞니쪽" },
          { id: "location_back", text: "어금니쪽" },
          { id: "location_both", text: "앞니와 어금니 모두" }
        ],
        next: {
          location_front: {
            question: "현재 앓고 계신 전신질환이 있으신가요?",
            options: [
              { id: "disease_diabetes", text: "당뇨" },
              { id: "disease_hypertension", text: "고혈압" },
              { id: "disease_osteoporosis", text: "골다공증" },
              { id: "disease_heart", text: "심장질환" },
              { id: "disease_none", text: "없어요" }
            ],
            next: {
              disease_diabetes: { question: "치료에서 가장 중요하게 생각하시는 부분은?", options: [{ id: "priority_cost", text: "비용" }, { id: "priority_pain", text: "통증" }, { id: "priority_eating", text: "편안한 식사" }, { id: "priority_recovery", text: "수술 후 빠른 회복과 일상복귀" }], next: { priority_cost: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_pain: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_eating: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_recovery: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] } } },
              disease_hypertension: { question: "치료에서 가장 중요하게 생각하시는 부분은?", options: [{ id: "priority_cost", text: "비용" }, { id: "priority_pain", text: "통증" }, { id: "priority_eating", text: "편안한 식사" }, { id: "priority_recovery", text: "수술 후 빠른 회복과 일상복귀" }], next: { priority_cost: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_pain: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_eating: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_recovery: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] } } },
              disease_osteoporosis: { question: "치료에서 가장 중요하게 생각하시는 부분은?", options: [{ id: "priority_cost", text: "비용" }, { id: "priority_pain", text: "통증" }, { id: "priority_eating", text: "편안한 식사" }, { id: "priority_recovery", text: "수술 후 빠른 회복과 일상복귀" }], next: { priority_cost: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_pain: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_eating: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_recovery: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] } } },
              disease_heart: { question: "치료에서 가장 중요하게 생각하시는 부분은?", options: [{ id: "priority_cost", text: "비용" }, { id: "priority_pain", text: "통증" }, { id: "priority_eating", text: "편안한 식사" }, { id: "priority_recovery", text: "수술 후 빠른 회복과 일상복귀" }], next: { priority_cost: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_pain: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_eating: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_recovery: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] } } },
              disease_none: { question: "치료에서 가장 중요하게 생각하시는 부분은?", options: [{ id: "priority_cost", text: "비용" }, { id: "priority_pain", text: "통증" }, { id: "priority_eating", text: "편안한 식사" }, { id: "priority_recovery", text: "수술 후 빠른 회복과 일상복귀" }], next: { priority_cost: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_pain: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_eating: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_recovery: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] } } }
            }
          },
          location_back: {
            question: "현재 앓고 계신 전신질환이 있으신가요?",
            options: [
              { id: "disease_diabetes", text: "당뇨" },
              { id: "disease_hypertension", text: "고혈압" },
              { id: "disease_osteoporosis", text: "골다공증" },
              { id: "disease_heart", text: "심장질환" },
              { id: "disease_none", text: "없어요" }
            ],
            next: {
              disease_diabetes: { question: "치료에서 가장 중요하게 생각하시는 부분은?", options: [{ id: "priority_cost", text: "비용" }, { id: "priority_pain", text: "통증" }, { id: "priority_eating", text: "편안한 식사" }, { id: "priority_recovery", text: "수술 후 빠른 회복과 일상복귀" }], next: { priority_cost: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_pain: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_eating: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_recovery: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] } } },
              disease_hypertension: { question: "치료에서 가장 중요하게 생각하시는 부분은?", options: [{ id: "priority_cost", text: "비용" }, { id: "priority_pain", text: "통증" }, { id: "priority_eating", text: "편안한 식사" }, { id: "priority_recovery", text: "수술 후 빠른 회복과 일상복귀" }], next: { priority_cost: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_pain: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_eating: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_recovery: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] } } },
              disease_osteoporosis: { question: "치료에서 가장 중요하게 생각하시는 부분은?", options: [{ id: "priority_cost", text: "비용" }, { id: "priority_pain", text: "통증" }, { id: "priority_eating", text: "편안한 식사" }, { id: "priority_recovery", text: "수술 후 빠른 회복과 일상복귀" }], next: { priority_cost: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_pain: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_eating: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_recovery: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] } } },
              disease_heart: { question: "치료에서 가장 중요하게 생각하시는 부분은?", options: [{ id: "priority_cost", text: "비용" }, { id: "priority_pain", text: "통증" }, { id: "priority_eating", text: "편안한 식사" }, { id: "priority_recovery", text: "수술 후 빠른 회복과 일상복귀" }], next: { priority_cost: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_pain: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_eating: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_recovery: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] } } },
              disease_none: { question: "치료에서 가장 중요하게 생각하시는 부분은?", options: [{ id: "priority_cost", text: "비용" }, { id: "priority_pain", text: "통증" }, { id: "priority_eating", text: "편안한 식사" }, { id: "priority_recovery", text: "수술 후 빠른 회복과 일상복귀" }], next: { priority_cost: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_pain: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_eating: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_recovery: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] } } }
            }
          },
          location_both: {
            question: "현재 앓고 계신 전신질환이 있으신가요?",
            options: [
              { id: "disease_diabetes", text: "당뇨" },
              { id: "disease_hypertension", text: "고혈압" },
              { id: "disease_osteoporosis", text: "골다공증" },
              { id: "disease_heart", text: "심장질환" },
              { id: "disease_none", text: "없어요" }
            ],
            next: {
              disease_diabetes: { question: "치료에서 가장 중요하게 생각하시는 부분은?", options: [{ id: "priority_cost", text: "비용" }, { id: "priority_pain", text: "통증" }, { id: "priority_eating", text: "편안한 식사" }, { id: "priority_recovery", text: "수술 후 빠른 회복과 일상복귀" }], next: { priority_cost: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_pain: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_eating: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_recovery: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] } } },
              disease_hypertension: { question: "치료에서 가장 중요하게 생각하시는 부분은?", options: [{ id: "priority_cost", text: "비용" }, { id: "priority_pain", text: "통증" }, { id: "priority_eating", text: "편안한 식사" }, { id: "priority_recovery", text: "수술 후 빠른 회복과 일상복귀" }], next: { priority_cost: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_pain: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_eating: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_recovery: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] } } },
              disease_osteoporosis: { question: "치료에서 가장 중요하게 생각하시는 부분은?", options: [{ id: "priority_cost", text: "비용" }, { id: "priority_pain", text: "통증" }, { id: "priority_eating", text: "편안한 식사" }, { id: "priority_recovery", text: "수술 후 빠른 회복과 일상복귀" }], next: { priority_cost: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_pain: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_eating: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_recovery: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] } } },
              disease_heart: { question: "치료에서 가장 중요하게 생각하시는 부분은?", options: [{ id: "priority_cost", text: "비용" }, { id: "priority_pain", text: "통증" }, { id: "priority_eating", text: "편안한 식사" }, { id: "priority_recovery", text: "수술 후 빠른 회복과 일상복귀" }], next: { priority_cost: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_pain: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_eating: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_recovery: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] } } },
              disease_none: { question: "치료에서 가장 중요하게 생각하시는 부분은?", options: [{ id: "priority_cost", text: "비용" }, { id: "priority_pain", text: "통증" }, { id: "priority_eating", text: "편안한 식사" }, { id: "priority_recovery", text: "수술 후 빠른 회복과 일상복귀" }], next: { priority_cost: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_pain: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_eating: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_recovery: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] } } }
            }
          }
        }
      },
      implant_revision: {
        question: "현재 틀니를 착용하고 계신가요?",
        options: [
          { id: "denture_yes", text: "예" },
          { id: "denture_no", text: "아니요" }
        ],
        next: {
          denture_yes: {
            question: "현재 앓고 계신 전신질환이 있으신가요?",
            options: [
              { id: "disease_diabetes", text: "당뇨" },
              { id: "disease_hypertension", text: "고혈압" },
              { id: "disease_osteoporosis", text: "골다공증" },
              { id: "disease_heart", text: "심장질환" },
              { id: "disease_none", text: "없어요" }
            ],
            next: {
              disease_diabetes: { question: "치료에서 가장 중요하게 생각하시는 부분은?", options: [{ id: "priority_cost", text: "비용" }, { id: "priority_pain", text: "통증" }, { id: "priority_eating", text: "편안한 식사" }, { id: "priority_recovery", text: "수술 후 빠른 회복과 일상복귀" }], next: { priority_cost: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_pain: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_eating: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_recovery: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] } } },
              disease_hypertension: { question: "치료에서 가장 중요하게 생각하시는 부분은?", options: [{ id: "priority_cost", text: "비용" }, { id: "priority_pain", text: "통증" }, { id: "priority_eating", text: "편안한 식사" }, { id: "priority_recovery", text: "수술 후 빠른 회복과 일상복귀" }], next: { priority_cost: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_pain: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_eating: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_recovery: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] } } },
              disease_osteoporosis: { question: "치료에서 가장 중요하게 생각하시는 부분은?", options: [{ id: "priority_cost", text: "비용" }, { id: "priority_pain", text: "통증" }, { id: "priority_eating", text: "편안한 식사" }, { id: "priority_recovery", text: "수술 후 빠른 회복과 일상복귀" }], next: { priority_cost: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_pain: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_eating: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_recovery: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] } } },
              disease_heart: { question: "치료에서 가장 중요하게 생각하시는 부분은?", options: [{ id: "priority_cost", text: "비용" }, { id: "priority_pain", text: "통증" }, { id: "priority_eating", text: "편안한 식사" }, { id: "priority_recovery", text: "수술 후 빠른 회복과 일상복귀" }], next: { priority_cost: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_pain: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_eating: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_recovery: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] } } },
              disease_none: { question: "치료에서 가장 중요하게 생각하시는 부분은?", options: [{ id: "priority_cost", text: "비용" }, { id: "priority_pain", text: "통증" }, { id: "priority_eating", text: "편안한 식사" }, { id: "priority_recovery", text: "수술 후 빠른 회복과 일상복귀" }], next: { priority_cost: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_pain: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_eating: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_recovery: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] } } }
            }
          },
          denture_no: {
            question: "현재 앓고 계신 전신질환이 있으신가요?",
            options: [
              { id: "disease_diabetes", text: "당뇨" },
              { id: "disease_hypertension", text: "고혈압" },
              { id: "disease_osteoporosis", text: "골다공증" },
              { id: "disease_heart", text: "심장질환" },
              { id: "disease_none", text: "없어요" }
            ],
            next: {
              disease_diabetes: { question: "치료에서 가장 중요하게 생각하시는 부분은?", options: [{ id: "priority_cost", text: "비용" }, { id: "priority_pain", text: "통증" }, { id: "priority_eating", text: "편안한 식사" }, { id: "priority_recovery", text: "수술 후 빠른 회복과 일상복귀" }], next: { priority_cost: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_pain: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_eating: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_recovery: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] } } },
              disease_hypertension: { question: "치료에서 가장 중요하게 생각하시는 부분은?", options: [{ id: "priority_cost", text: "비용" }, { id: "priority_pain", text: "통증" }, { id: "priority_eating", text: "편안한 식사" }, { id: "priority_recovery", text: "수술 후 빠른 회복과 일상복귀" }], next: { priority_cost: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_pain: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_eating: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_recovery: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] } } },
              disease_osteoporosis: { question: "치료에서 가장 중요하게 생각하시는 부분은?", options: [{ id: "priority_cost", text: "비용" }, { id: "priority_pain", text: "통증" }, { id: "priority_eating", text: "편안한 식사" }, { id: "priority_recovery", text: "수술 후 빠른 회복과 일상복귀" }], next: { priority_cost: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_pain: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_eating: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_recovery: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] } } },
              disease_heart: { question: "치료에서 가장 중요하게 생각하시는 부분은?", options: [{ id: "priority_cost", text: "비용" }, { id: "priority_pain", text: "통증" }, { id: "priority_eating", text: "편안한 식사" }, { id: "priority_recovery", text: "수술 후 빠른 회복과 일상복귀" }], next: { priority_cost: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_pain: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_eating: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_recovery: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] } } },
              disease_none: { question: "치료에서 가장 중요하게 생각하시는 부분은?", options: [{ id: "priority_cost", text: "비용" }, { id: "priority_pain", text: "통증" }, { id: "priority_eating", text: "편안한 식사" }, { id: "priority_recovery", text: "수술 후 빠른 회복과 일상복귀" }], next: { priority_cost: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_pain: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_eating: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] }, priority_recovery: { question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?", options: [{ id: "hesitation_cost", text: "비용 때문에" }, { id: "hesitation_fear", text: "통증/치과공포증 때문에" }, { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" }, { id: "hesitation_none", text: "특별한 이유 없어요" }] } } }
            }
          }
        }
      }
    }
  },

  // 잇몸 관련 질문 (Q0 → Q1 → Q2(전신질환) → 최종대답)
  gum_issue: {
    question: "어떤 증상이 있으신가요?",
    options: [
      { id: "gum_bleeding", text: "잇몸에서 피가 나요" },
      { id: "gum_swelling", text: "잇몸이 부었어요" },
      { id: "gum_recession", text: "잇몸이 내려갔어요" },
      { id: "gum_wobbly", text: "치아가 흔들려요" }
    ],
    next: {
      gum_bleeding: {
        question: "언제 피가 나시나요?",
        options: [
          { id: "bleeding_brushing", text: "양치할 때만" },
          { id: "bleeding_often", text: "자주 피가 나요" },
          { id: "bleeding_always", text: "가만히 있어도 나요" }
        ],
        next: {
          bleeding_brushing: {
            question: "현재 전신질환이 있으신가요? (복수 선택 가능)",
            allowMultiSelect: true,
            options: [
              { id: "gum_disease_diabetes", text: "당뇨" },
              { id: "gum_disease_hypertension", text: "고혈압" },
              { id: "gum_disease_osteoporosis", text: "골다공증" },
              { id: "gum_disease_heart", text: "심장질환" },
              { id: "gum_disease_none", text: "없어요" }
            ],
            next: {
              gum_disease_diabetes: {
                question: "치료를 망설이는 이유가 있으신가요?",
                options: [
                  { id: "gum_hesitate_cost", text: "비용이 걱정돼요" },
                  { id: "gum_hesitate_fear", text: "치과가 무서워요" },
                  { id: "gum_hesitate_choice", text: "어떤 치과를 가야할지 모르겠어요" },
                  { id: "gum_hesitate_none", text: "특별히 없어요" }
                ],
                next: {
                  gum_hesitate_cost: {
                    question: "궁금하신 점이 있으신가요?",
                    options: [
                      { id: "gum_request_detail", text: "치료 과정이 궁금해요" },
                      { id: "gum_request_cost", text: "비용이 궁금해요" },
                      { id: "gum_request_none", text: "없어요" }
                    ],
                    next: {
                      gum_request_detail: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true },
                      gum_request_cost: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true },
                      gum_request_none: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }
                    }
                  },
                  gum_hesitate_fear: {
                    question: "궁금하신 점이 있으신가요?",
                    options: [
                      { id: "gum_request_detail", text: "치료 과정이 궁금해요" },
                      { id: "gum_request_cost", text: "비용이 궁금해요" },
                      { id: "gum_request_none", text: "없어요" }
                    ],
                    next: {
                      gum_request_detail: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true },
                      gum_request_cost: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true },
                      gum_request_none: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }
                    }
                  },
                  gum_hesitate_choice: {
                    question: "궁금하신 점이 있으신가요?",
                    options: [
                      { id: "gum_request_detail", text: "치료 과정이 궁금해요" },
                      { id: "gum_request_cost", text: "비용이 궁금해요" },
                      { id: "gum_request_none", text: "없어요" }
                    ],
                    next: {
                      gum_request_detail: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true },
                      gum_request_cost: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true },
                      gum_request_none: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }
                    }
                  },
                  gum_hesitate_none: {
                    question: "궁금하신 점이 있으신가요?",
                    options: [
                      { id: "gum_request_detail", text: "치료 과정이 궁금해요" },
                      { id: "gum_request_cost", text: "비용이 궁금해요" },
                      { id: "gum_request_none", text: "없어요" }
                    ],
                    next: {
                      gum_request_detail: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true },
                      gum_request_cost: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true },
                      gum_request_none: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }
                    }
                  }
                }
              },
              gum_disease_hypertension: {
                question: "치료를 망설이는 이유가 있으신가요?",
                options: [
                  { id: "gum_hesitate_cost", text: "비용이 걱정돼요" },
                  { id: "gum_hesitate_fear", text: "치과가 무서워요" },
                  { id: "gum_hesitate_choice", text: "어떤 치과를 가야할지 모르겠어요" },
                  { id: "gum_hesitate_none", text: "특별히 없어요" }
                ],
                next: {
                  gum_hesitate_cost: { question: "궁금하신 점이 있으신가요?", options: [{ id: "gum_request_detail", text: "치료 과정이 궁금해요" }, { id: "gum_request_cost", text: "비용이 궁금해요" }, { id: "gum_request_none", text: "없어요" }], next: { gum_request_detail: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_cost: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_none: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true } } },
                  gum_hesitate_fear: { question: "궁금하신 점이 있으신가요?", options: [{ id: "gum_request_detail", text: "치료 과정이 궁금해요" }, { id: "gum_request_cost", text: "비용이 궁금해요" }, { id: "gum_request_none", text: "없어요" }], next: { gum_request_detail: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_cost: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_none: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true } } },
                  gum_hesitate_choice: { question: "궁금하신 점이 있으신가요?", options: [{ id: "gum_request_detail", text: "치료 과정이 궁금해요" }, { id: "gum_request_cost", text: "비용이 궁금해요" }, { id: "gum_request_none", text: "없어요" }], next: { gum_request_detail: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_cost: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_none: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true } } },
                  gum_hesitate_none: { question: "궁금하신 점이 있으신가요?", options: [{ id: "gum_request_detail", text: "치료 과정이 궁금해요" }, { id: "gum_request_cost", text: "비용이 궁금해요" }, { id: "gum_request_none", text: "없어요" }], next: { gum_request_detail: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_cost: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_none: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true } } }
                }
              },
              gum_disease_osteoporosis: {
                question: "치료를 망설이는 이유가 있으신가요?",
                options: [
                  { id: "gum_hesitate_cost", text: "비용이 걱정돼요" },
                  { id: "gum_hesitate_fear", text: "치과가 무서워요" },
                  { id: "gum_hesitate_choice", text: "어떤 치과를 가야할지 모르겠어요" },
                  { id: "gum_hesitate_none", text: "특별히 없어요" }
                ],
                next: {
                  gum_hesitate_cost: { question: "궁금하신 점이 있으신가요?", options: [{ id: "gum_request_detail", text: "치료 과정이 궁금해요" }, { id: "gum_request_cost", text: "비용이 궁금해요" }, { id: "gum_request_none", text: "없어요" }], next: { gum_request_detail: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_cost: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_none: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true } } },
                  gum_hesitate_fear: { question: "궁금하신 점이 있으신가요?", options: [{ id: "gum_request_detail", text: "치료 과정이 궁금해요" }, { id: "gum_request_cost", text: "비용이 궁금해요" }, { id: "gum_request_none", text: "없어요" }], next: { gum_request_detail: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_cost: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_none: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true } } },
                  gum_hesitate_choice: { question: "궁금하신 점이 있으신가요?", options: [{ id: "gum_request_detail", text: "치료 과정이 궁금해요" }, { id: "gum_request_cost", text: "비용이 궁금해요" }, { id: "gum_request_none", text: "없어요" }], next: { gum_request_detail: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_cost: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_none: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true } } },
                  gum_hesitate_none: { question: "궁금하신 점이 있으신가요?", options: [{ id: "gum_request_detail", text: "치료 과정이 궁금해요" }, { id: "gum_request_cost", text: "비용이 궁금해요" }, { id: "gum_request_none", text: "없어요" }], next: { gum_request_detail: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_cost: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_none: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true } } }
                }
              },
              gum_disease_heart: {
                question: "치료를 망설이는 이유가 있으신가요?",
                options: [
                  { id: "gum_hesitate_cost", text: "비용이 걱정돼요" },
                  { id: "gum_hesitate_fear", text: "치과가 무서워요" },
                  { id: "gum_hesitate_choice", text: "어떤 치과를 가야할지 모르겠어요" },
                  { id: "gum_hesitate_none", text: "특별히 없어요" }
                ],
                next: {
                  gum_hesitate_cost: { question: "궁금하신 점이 있으신가요?", options: [{ id: "gum_request_detail", text: "치료 과정이 궁금해요" }, { id: "gum_request_cost", text: "비용이 궁금해요" }, { id: "gum_request_none", text: "없어요" }], next: { gum_request_detail: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_cost: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_none: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true } } },
                  gum_hesitate_fear: { question: "궁금하신 점이 있으신가요?", options: [{ id: "gum_request_detail", text: "치료 과정이 궁금해요" }, { id: "gum_request_cost", text: "비용이 궁금해요" }, { id: "gum_request_none", text: "없어요" }], next: { gum_request_detail: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_cost: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_none: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true } } },
                  gum_hesitate_choice: { question: "궁금하신 점이 있으신가요?", options: [{ id: "gum_request_detail", text: "치료 과정이 궁금해요" }, { id: "gum_request_cost", text: "비용이 궁금해요" }, { id: "gum_request_none", text: "없어요" }], next: { gum_request_detail: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_cost: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_none: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true } } },
                  gum_hesitate_none: { question: "궁금하신 점이 있으신가요?", options: [{ id: "gum_request_detail", text: "치료 과정이 궁금해요" }, { id: "gum_request_cost", text: "비용이 궁금해요" }, { id: "gum_request_none", text: "없어요" }], next: { gum_request_detail: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_cost: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_none: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true } } }
                }
              },
              gum_disease_none: {
                question: "치료를 망설이는 이유가 있으신가요?",
                options: [
                  { id: "gum_hesitate_cost", text: "비용이 걱정돼요" },
                  { id: "gum_hesitate_fear", text: "치과가 무서워요" },
                  { id: "gum_hesitate_choice", text: "어떤 치과를 가야할지 모르겠어요" },
                  { id: "gum_hesitate_none", text: "특별히 없어요" }
                ],
                next: {
                  gum_hesitate_cost: { question: "궁금하신 점이 있으신가요?", options: [{ id: "gum_request_detail", text: "치료 과정이 궁금해요" }, { id: "gum_request_cost", text: "비용이 궁금해요" }, { id: "gum_request_none", text: "없어요" }], next: { gum_request_detail: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_cost: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_none: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true } } },
                  gum_hesitate_fear: { question: "궁금하신 점이 있으신가요?", options: [{ id: "gum_request_detail", text: "치료 과정이 궁금해요" }, { id: "gum_request_cost", text: "비용이 궁금해요" }, { id: "gum_request_none", text: "없어요" }], next: { gum_request_detail: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_cost: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_none: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true } } },
                  gum_hesitate_choice: { question: "궁금하신 점이 있으신가요?", options: [{ id: "gum_request_detail", text: "치료 과정이 궁금해요" }, { id: "gum_request_cost", text: "비용이 궁금해요" }, { id: "gum_request_none", text: "없어요" }], next: { gum_request_detail: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_cost: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_none: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true } } },
                  gum_hesitate_none: { question: "궁금하신 점이 있으신가요?", options: [{ id: "gum_request_detail", text: "치료 과정이 궁금해요" }, { id: "gum_request_cost", text: "비용이 궁금해요" }, { id: "gum_request_none", text: "없어요" }], next: { gum_request_detail: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_cost: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_none: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true } } }
                }
              }
            }
          },
          bleeding_often: {
            question: "현재 전신질환이 있으신가요? (복수 선택 가능)",
            allowMultiSelect: true,
            options: [
              { id: "gum_disease_diabetes", text: "당뇨" },
              { id: "gum_disease_hypertension", text: "고혈압" },
              { id: "gum_disease_osteoporosis", text: "골다공증" },
              { id: "gum_disease_heart", text: "심장질환" },
              { id: "gum_disease_none", text: "없어요" }
            ],
            next: {
              gum_disease_diabetes: { question: "치료를 망설이는 이유가 있으신가요?", options: [{ id: "gum_hesitate_cost", text: "비용이 걱정돼요" }, { id: "gum_hesitate_fear", text: "치과가 무서워요" }, { id: "gum_hesitate_choice", text: "어떤 치과를 가야할지 모르겠어요" }, { id: "gum_hesitate_none", text: "특별히 없어요" }], next: { gum_hesitate_cost: { question: "궁금하신 점이 있으신가요?", options: [{ id: "gum_request_detail", text: "치료 과정이 궁금해요" }, { id: "gum_request_cost", text: "비용이 궁금해요" }, { id: "gum_request_none", text: "없어요" }], next: { gum_request_detail: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_cost: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_none: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true } } }, gum_hesitate_fear: { question: "궁금하신 점이 있으신가요?", options: [{ id: "gum_request_detail", text: "치료 과정이 궁금해요" }, { id: "gum_request_cost", text: "비용이 궁금해요" }, { id: "gum_request_none", text: "없어요" }], next: { gum_request_detail: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_cost: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_none: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true } } }, gum_hesitate_choice: { question: "궁금하신 점이 있으신가요?", options: [{ id: "gum_request_detail", text: "치료 과정이 궁금해요" }, { id: "gum_request_cost", text: "비용이 궁금해요" }, { id: "gum_request_none", text: "없어요" }], next: { gum_request_detail: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_cost: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_none: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true } } }, gum_hesitate_none: { question: "궁금하신 점이 있으신가요?", options: [{ id: "gum_request_detail", text: "치료 과정이 궁금해요" }, { id: "gum_request_cost", text: "비용이 궁금해요" }, { id: "gum_request_none", text: "없어요" }], next: { gum_request_detail: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_cost: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_none: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true } } } } },
              gum_disease_hypertension: { question: "치료를 망설이는 이유가 있으신가요?", options: [{ id: "gum_hesitate_cost", text: "비용이 걱정돼요" }, { id: "gum_hesitate_fear", text: "치과가 무서워요" }, { id: "gum_hesitate_choice", text: "어떤 치과를 가야할지 모르겠어요" }, { id: "gum_hesitate_none", text: "특별히 없어요" }], next: { gum_hesitate_cost: { question: "궁금하신 점이 있으신가요?", options: [{ id: "gum_request_detail", text: "치료 과정이 궁금해요" }, { id: "gum_request_cost", text: "비용이 궁금해요" }, { id: "gum_request_none", text: "없어요" }], next: { gum_request_detail: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_cost: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_none: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true } } }, gum_hesitate_fear: { question: "궁금하신 점이 있으신가요?", options: [{ id: "gum_request_detail", text: "치료 과정이 궁금해요" }, { id: "gum_request_cost", text: "비용이 궁금해요" }, { id: "gum_request_none", text: "없어요" }], next: { gum_request_detail: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_cost: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_none: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true } } }, gum_hesitate_choice: { question: "궁금하신 점이 있으신가요?", options: [{ id: "gum_request_detail", text: "치료 과정이 궁금해요" }, { id: "gum_request_cost", text: "비용이 궁금해요" }, { id: "gum_request_none", text: "없어요" }], next: { gum_request_detail: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_cost: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_none: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true } } }, gum_hesitate_none: { question: "궁금하신 점이 있으신가요?", options: [{ id: "gum_request_detail", text: "치료 과정이 궁금해요" }, { id: "gum_request_cost", text: "비용이 궁금해요" }, { id: "gum_request_none", text: "없어요" }], next: { gum_request_detail: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_cost: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_none: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true } } } } },
              gum_disease_osteoporosis: { question: "치료를 망설이는 이유가 있으신가요?", options: [{ id: "gum_hesitate_cost", text: "비용이 걱정돼요" }, { id: "gum_hesitate_fear", text: "치과가 무서워요" }, { id: "gum_hesitate_choice", text: "어떤 치과를 가야할지 모르겠어요" }, { id: "gum_hesitate_none", text: "특별히 없어요" }], next: { gum_hesitate_cost: { question: "궁금하신 점이 있으신가요?", options: [{ id: "gum_request_detail", text: "치료 과정이 궁금해요" }, { id: "gum_request_cost", text: "비용이 궁금해요" }, { id: "gum_request_none", text: "없어요" }], next: { gum_request_detail: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_cost: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_none: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true } } }, gum_hesitate_fear: { question: "궁금하신 점이 있으신가요?", options: [{ id: "gum_request_detail", text: "치료 과정이 궁금해요" }, { id: "gum_request_cost", text: "비용이 궁금해요" }, { id: "gum_request_none", text: "없어요" }], next: { gum_request_detail: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_cost: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_none: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true } } }, gum_hesitate_choice: { question: "궁금하신 점이 있으신가요?", options: [{ id: "gum_request_detail", text: "치료 과정이 궁금해요" }, { id: "gum_request_cost", text: "비용이 궁금해요" }, { id: "gum_request_none", text: "없어요" }], next: { gum_request_detail: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_cost: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_none: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true } } }, gum_hesitate_none: { question: "궁금하신 점이 있으신가요?", options: [{ id: "gum_request_detail", text: "치료 과정이 궁금해요" }, { id: "gum_request_cost", text: "비용이 궁금해요" }, { id: "gum_request_none", text: "없어요" }], next: { gum_request_detail: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_cost: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_none: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true } } } } },
              gum_disease_heart: { question: "치료를 망설이는 이유가 있으신가요?", options: [{ id: "gum_hesitate_cost", text: "비용이 걱정돼요" }, { id: "gum_hesitate_fear", text: "치과가 무서워요" }, { id: "gum_hesitate_choice", text: "어떤 치과를 가야할지 모르겠어요" }, { id: "gum_hesitate_none", text: "특별히 없어요" }], next: { gum_hesitate_cost: { question: "궁금하신 점이 있으신가요?", options: [{ id: "gum_request_detail", text: "치료 과정이 궁금해요" }, { id: "gum_request_cost", text: "비용이 궁금해요" }, { id: "gum_request_none", text: "없어요" }], next: { gum_request_detail: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_cost: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_none: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true } } }, gum_hesitate_fear: { question: "궁금하신 점이 있으신가요?", options: [{ id: "gum_request_detail", text: "치료 과정이 궁금해요" }, { id: "gum_request_cost", text: "비용이 궁금해요" }, { id: "gum_request_none", text: "없어요" }], next: { gum_request_detail: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_cost: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_none: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true } } }, gum_hesitate_choice: { question: "궁금하신 점이 있으신가요?", options: [{ id: "gum_request_detail", text: "치료 과정이 궁금해요" }, { id: "gum_request_cost", text: "비용이 궁금해요" }, { id: "gum_request_none", text: "없어요" }], next: { gum_request_detail: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_cost: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_none: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true } } }, gum_hesitate_none: { question: "궁금하신 점이 있으신가요?", options: [{ id: "gum_request_detail", text: "치료 과정이 궁금해요" }, { id: "gum_request_cost", text: "비용이 궁금해요" }, { id: "gum_request_none", text: "없어요" }], next: { gum_request_detail: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_cost: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_none: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true } } } } },
              gum_disease_none: { question: "치료를 망설이는 이유가 있으신가요?", options: [{ id: "gum_hesitate_cost", text: "비용이 걱정돼요" }, { id: "gum_hesitate_fear", text: "치과가 무서워요" }, { id: "gum_hesitate_choice", text: "어떤 치과를 가야할지 모르겠어요" }, { id: "gum_hesitate_none", text: "특별히 없어요" }], next: { gum_hesitate_cost: { question: "궁금하신 점이 있으신가요?", options: [{ id: "gum_request_detail", text: "치료 과정이 궁금해요" }, { id: "gum_request_cost", text: "비용이 궁금해요" }, { id: "gum_request_none", text: "없어요" }], next: { gum_request_detail: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_cost: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_none: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true } } }, gum_hesitate_fear: { question: "궁금하신 점이 있으신가요?", options: [{ id: "gum_request_detail", text: "치료 과정이 궁금해요" }, { id: "gum_request_cost", text: "비용이 궁금해요" }, { id: "gum_request_none", text: "없어요" }], next: { gum_request_detail: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_cost: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_none: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true } } }, gum_hesitate_choice: { question: "궁금하신 점이 있으신가요?", options: [{ id: "gum_request_detail", text: "치료 과정이 궁금해요" }, { id: "gum_request_cost", text: "비용이 궁금해요" }, { id: "gum_request_none", text: "없어요" }], next: { gum_request_detail: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_cost: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_none: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true } } }, gum_hesitate_none: { question: "궁금하신 점이 있으신가요?", options: [{ id: "gum_request_detail", text: "치료 과정이 궁금해요" }, { id: "gum_request_cost", text: "비용이 궁금해요" }, { id: "gum_request_none", text: "없어요" }], next: { gum_request_detail: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_cost: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_none: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true } } } } }
            }
          },
          bleeding_always: {
            question: "현재 전신질환이 있으신가요? (복수 선택 가능)",
            allowMultiSelect: true,
            options: [
              { id: "gum_disease_diabetes", text: "당뇨" },
              { id: "gum_disease_hypertension", text: "고혈압" },
              { id: "gum_disease_osteoporosis", text: "골다공증" },
              { id: "gum_disease_heart", text: "심장질환" },
              { id: "gum_disease_none", text: "없어요" }
            ],
            next: {
              gum_disease_diabetes: { question: "치료를 망설이는 이유가 있으신가요?", options: [{ id: "gum_hesitate_cost", text: "비용이 걱정돼요" }, { id: "gum_hesitate_fear", text: "치과가 무서워요" }, { id: "gum_hesitate_choice", text: "어떤 치과를 가야할지 모르겠어요" }, { id: "gum_hesitate_none", text: "특별히 없어요" }], next: { gum_hesitate_cost: { question: "궁금하신 점이 있으신가요?", options: [{ id: "gum_request_detail", text: "치료 과정이 궁금해요" }, { id: "gum_request_cost", text: "비용이 궁금해요" }, { id: "gum_request_none", text: "없어요" }], next: { gum_request_detail: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_cost: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_none: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true } } }, gum_hesitate_fear: { question: "궁금하신 점이 있으신가요?", options: [{ id: "gum_request_detail", text: "치료 과정이 궁금해요" }, { id: "gum_request_cost", text: "비용이 궁금해요" }, { id: "gum_request_none", text: "없어요" }], next: { gum_request_detail: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_cost: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_none: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true } } }, gum_hesitate_choice: { question: "궁금하신 점이 있으신가요?", options: [{ id: "gum_request_detail", text: "치료 과정이 궁금해요" }, { id: "gum_request_cost", text: "비용이 궁금해요" }, { id: "gum_request_none", text: "없어요" }], next: { gum_request_detail: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_cost: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_none: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true } } }, gum_hesitate_none: { question: "궁금하신 점이 있으신가요?", options: [{ id: "gum_request_detail", text: "치료 과정이 궁금해요" }, { id: "gum_request_cost", text: "비용이 궁금해요" }, { id: "gum_request_none", text: "없어요" }], next: { gum_request_detail: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_cost: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_none: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true } } } } },
              gum_disease_hypertension: { question: "치료를 망설이는 이유가 있으신가요?", options: [{ id: "gum_hesitate_cost", text: "비용이 걱정돼요" }, { id: "gum_hesitate_fear", text: "치과가 무서워요" }, { id: "gum_hesitate_choice", text: "어떤 치과를 가야할지 모르겠어요" }, { id: "gum_hesitate_none", text: "특별히 없어요" }], next: { gum_hesitate_cost: { question: "궁금하신 점이 있으신가요?", options: [{ id: "gum_request_detail", text: "치료 과정이 궁금해요" }, { id: "gum_request_cost", text: "비용이 궁금해요" }, { id: "gum_request_none", text: "없어요" }], next: { gum_request_detail: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_cost: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_none: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true } } }, gum_hesitate_fear: { question: "궁금하신 점이 있으신가요?", options: [{ id: "gum_request_detail", text: "치료 과정이 궁금해요" }, { id: "gum_request_cost", text: "비용이 궁금해요" }, { id: "gum_request_none", text: "없어요" }], next: { gum_request_detail: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_cost: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_none: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true } } }, gum_hesitate_choice: { question: "궁금하신 점이 있으신가요?", options: [{ id: "gum_request_detail", text: "치료 과정이 궁금해요" }, { id: "gum_request_cost", text: "비용이 궁금해요" }, { id: "gum_request_none", text: "없어요" }], next: { gum_request_detail: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_cost: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_none: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true } } }, gum_hesitate_none: { question: "궁금하신 점이 있으신가요?", options: [{ id: "gum_request_detail", text: "치료 과정이 궁금해요" }, { id: "gum_request_cost", text: "비용이 궁금해요" }, { id: "gum_request_none", text: "없어요" }], next: { gum_request_detail: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_cost: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_none: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true } } } } },
              gum_disease_osteoporosis: { question: "치료를 망설이는 이유가 있으신가요?", options: [{ id: "gum_hesitate_cost", text: "비용이 걱정돼요" }, { id: "gum_hesitate_fear", text: "치과가 무서워요" }, { id: "gum_hesitate_choice", text: "어떤 치과를 가야할지 모르겠어요" }, { id: "gum_hesitate_none", text: "특별히 없어요" }], next: { gum_hesitate_cost: { question: "궁금하신 점이 있으신가요?", options: [{ id: "gum_request_detail", text: "치료 과정이 궁금해요" }, { id: "gum_request_cost", text: "비용이 궁금해요" }, { id: "gum_request_none", text: "없어요" }], next: { gum_request_detail: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_cost: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_none: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true } } }, gum_hesitate_fear: { question: "궁금하신 점이 있으신가요?", options: [{ id: "gum_request_detail", text: "치료 과정이 궁금해요" }, { id: "gum_request_cost", text: "비용이 궁금해요" }, { id: "gum_request_none", text: "없어요" }], next: { gum_request_detail: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_cost: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_none: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true } } }, gum_hesitate_choice: { question: "궁금하신 점이 있으신가요?", options: [{ id: "gum_request_detail", text: "치료 과정이 궁금해요" }, { id: "gum_request_cost", text: "비용이 궁금해요" }, { id: "gum_request_none", text: "없어요" }], next: { gum_request_detail: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_cost: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_none: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true } } }, gum_hesitate_none: { question: "궁금하신 점이 있으신가요?", options: [{ id: "gum_request_detail", text: "치료 과정이 궁금해요" }, { id: "gum_request_cost", text: "비용이 궁금해요" }, { id: "gum_request_none", text: "없어요" }], next: { gum_request_detail: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_cost: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_none: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true } } } } },
              gum_disease_heart: { question: "치료를 망설이는 이유가 있으신가요?", options: [{ id: "gum_hesitate_cost", text: "비용이 걱정돼요" }, { id: "gum_hesitate_fear", text: "치과가 무서워요" }, { id: "gum_hesitate_choice", text: "어떤 치과를 가야할지 모르겠어요" }, { id: "gum_hesitate_none", text: "특별히 없어요" }], next: { gum_hesitate_cost: { question: "궁금하신 점이 있으신가요?", options: [{ id: "gum_request_detail", text: "치료 과정이 궁금해요" }, { id: "gum_request_cost", text: "비용이 궁금해요" }, { id: "gum_request_none", text: "없어요" }], next: { gum_request_detail: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_cost: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_none: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true } } }, gum_hesitate_fear: { question: "궁금하신 점이 있으신가요?", options: [{ id: "gum_request_detail", text: "치료 과정이 궁금해요" }, { id: "gum_request_cost", text: "비용이 궁금해요" }, { id: "gum_request_none", text: "없어요" }], next: { gum_request_detail: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_cost: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_none: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true } } }, gum_hesitate_choice: { question: "궁금하신 점이 있으신가요?", options: [{ id: "gum_request_detail", text: "치료 과정이 궁금해요" }, { id: "gum_request_cost", text: "비용이 궁금해요" }, { id: "gum_request_none", text: "없어요" }], next: { gum_request_detail: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_cost: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_none: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true } } }, gum_hesitate_none: { question: "궁금하신 점이 있으신가요?", options: [{ id: "gum_request_detail", text: "치료 과정이 궁금해요" }, { id: "gum_request_cost", text: "비용이 궁금해요" }, { id: "gum_request_none", text: "없어요" }], next: { gum_request_detail: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_cost: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_none: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true } } } } },
              gum_disease_none: { question: "치료를 망설이는 이유가 있으신가요?", options: [{ id: "gum_hesitate_cost", text: "비용이 걱정돼요" }, { id: "gum_hesitate_fear", text: "치과가 무서워요" }, { id: "gum_hesitate_choice", text: "어떤 치과를 가야할지 모르겠어요" }, { id: "gum_hesitate_none", text: "특별히 없어요" }], next: { gum_hesitate_cost: { question: "궁금하신 점이 있으신가요?", options: [{ id: "gum_request_detail", text: "치료 과정이 궁금해요" }, { id: "gum_request_cost", text: "비용이 궁금해요" }, { id: "gum_request_none", text: "없어요" }], next: { gum_request_detail: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_cost: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_none: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true } } }, gum_hesitate_fear: { question: "궁금하신 점이 있으신가요?", options: [{ id: "gum_request_detail", text: "치료 과정이 궁금해요" }, { id: "gum_request_cost", text: "비용이 궁금해요" }, { id: "gum_request_none", text: "없어요" }], next: { gum_request_detail: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_cost: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_none: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true } } }, gum_hesitate_choice: { question: "궁금하신 점이 있으신가요?", options: [{ id: "gum_request_detail", text: "치료 과정이 궁금해요" }, { id: "gum_request_cost", text: "비용이 궁금해요" }, { id: "gum_request_none", text: "없어요" }], next: { gum_request_detail: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_cost: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_none: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true } } }, gum_hesitate_none: { question: "궁금하신 점이 있으신가요?", options: [{ id: "gum_request_detail", text: "치료 과정이 궁금해요" }, { id: "gum_request_cost", text: "비용이 궁금해요" }, { id: "gum_request_none", text: "없어요" }], next: { gum_request_detail: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_cost: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_none: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true } } } } }
            }
          }
        }
      },
      gum_swelling: {
        question: "붓기와 함께 통증도 있으신가요?",
        options: [
          { id: "swelling_pain_yes", text: "네, 아파요" },
          { id: "swelling_pain_no", text: "아니요, 붓기만 있어요" }
        ],
        next: {
          swelling_pain_yes: {
            question: "현재 전신질환이 있으신가요? (복수 선택 가능)",
            allowMultiSelect: true,
            options: [{ id: "gum_disease_diabetes", text: "당뇨" }, { id: "gum_disease_hypertension", text: "고혈압" }, { id: "gum_disease_osteoporosis", text: "골다공증" }, { id: "gum_disease_heart", text: "심장질환" }, { id: "gum_disease_none", text: "없어요" }],
            next: {
              gum_disease_diabetes: { question: "치료를 망설이는 이유가 있으신가요?", options: [{ id: "gum_hesitate_cost", text: "비용이 걱정돼요" }, { id: "gum_hesitate_fear", text: "치과가 무서워요" }, { id: "gum_hesitate_choice", text: "어떤 치과를 가야할지 모르겠어요" }, { id: "gum_hesitate_none", text: "특별히 없어요" }], next: { gum_hesitate_cost: { question: "궁금하신 점이 있으신가요?", options: [{ id: "gum_request_detail", text: "치료 과정이 궁금해요" }, { id: "gum_request_cost", text: "비용이 궁금해요" }, { id: "gum_request_none", text: "없어요" }], next: { gum_request_detail: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_cost: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_none: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true } } }, gum_hesitate_fear: { question: "궁금하신 점이 있으신가요?", options: [{ id: "gum_request_detail", text: "치료 과정이 궁금해요" }, { id: "gum_request_cost", text: "비용이 궁금해요" }, { id: "gum_request_none", text: "없어요" }], next: { gum_request_detail: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_cost: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_none: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true } } }, gum_hesitate_choice: { question: "궁금하신 점이 있으신가요?", options: [{ id: "gum_request_detail", text: "치료 과정이 궁금해요" }, { id: "gum_request_cost", text: "비용이 궁금해요" }, { id: "gum_request_none", text: "없어요" }], next: { gum_request_detail: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_cost: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_none: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true } } }, gum_hesitate_none: { question: "궁금하신 점이 있으신가요?", options: [{ id: "gum_request_detail", text: "치료 과정이 궁금해요" }, { id: "gum_request_cost", text: "비용이 궁금해요" }, { id: "gum_request_none", text: "없어요" }], next: { gum_request_detail: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_cost: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_none: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true } } } } },
              gum_disease_hypertension: { question: "치료를 망설이는 이유가 있으신가요?", options: [{ id: "gum_hesitate_cost", text: "비용이 걱정돼요" }, { id: "gum_hesitate_fear", text: "치과가 무서워요" }, { id: "gum_hesitate_choice", text: "어떤 치과를 가야할지 모르겠어요" }, { id: "gum_hesitate_none", text: "특별히 없어요" }], next: { gum_hesitate_cost: { question: "궁금하신 점이 있으신가요?", options: [{ id: "gum_request_detail", text: "치료 과정이 궁금해요" }, { id: "gum_request_cost", text: "비용이 궁금해요" }, { id: "gum_request_none", text: "없어요" }], next: { gum_request_detail: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_cost: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_none: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true } } }, gum_hesitate_fear: { question: "궁금하신 점이 있으신가요?", options: [{ id: "gum_request_detail", text: "치료 과정이 궁금해요" }, { id: "gum_request_cost", text: "비용이 궁금해요" }, { id: "gum_request_none", text: "없어요" }], next: { gum_request_detail: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_cost: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_none: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true } } }, gum_hesitate_choice: { question: "궁금하신 점이 있으신가요?", options: [{ id: "gum_request_detail", text: "치료 과정이 궁금해요" }, { id: "gum_request_cost", text: "비용이 궁금해요" }, { id: "gum_request_none", text: "없어요" }], next: { gum_request_detail: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_cost: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_none: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true } } }, gum_hesitate_none: { question: "궁금하신 점이 있으신가요?", options: [{ id: "gum_request_detail", text: "치료 과정이 궁금해요" }, { id: "gum_request_cost", text: "비용이 궁금해요" }, { id: "gum_request_none", text: "없어요" }], next: { gum_request_detail: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_cost: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_none: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true } } } } },
              gum_disease_osteoporosis: { question: "치료를 망설이는 이유가 있으신가요?", options: [{ id: "gum_hesitate_cost", text: "비용이 걱정돼요" }, { id: "gum_hesitate_fear", text: "치과가 무서워요" }, { id: "gum_hesitate_choice", text: "어떤 치과를 가야할지 모르겠어요" }, { id: "gum_hesitate_none", text: "특별히 없어요" }], next: { gum_hesitate_cost: { question: "궁금하신 점이 있으신가요?", options: [{ id: "gum_request_detail", text: "치료 과정이 궁금해요" }, { id: "gum_request_cost", text: "비용이 궁금해요" }, { id: "gum_request_none", text: "없어요" }], next: { gum_request_detail: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_cost: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_none: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true } } }, gum_hesitate_fear: { question: "궁금하신 점이 있으신가요?", options: [{ id: "gum_request_detail", text: "치료 과정이 궁금해요" }, { id: "gum_request_cost", text: "비용이 궁금해요" }, { id: "gum_request_none", text: "없어요" }], next: { gum_request_detail: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_cost: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_none: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true } } }, gum_hesitate_choice: { question: "궁금하신 점이 있으신가요?", options: [{ id: "gum_request_detail", text: "치료 과정이 궁금해요" }, { id: "gum_request_cost", text: "비용이 궁금해요" }, { id: "gum_request_none", text: "없어요" }], next: { gum_request_detail: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_cost: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_none: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true } } }, gum_hesitate_none: { question: "궁금하신 점이 있으신가요?", options: [{ id: "gum_request_detail", text: "치료 과정이 궁금해요" }, { id: "gum_request_cost", text: "비용이 궁금해요" }, { id: "gum_request_none", text: "없어요" }], next: { gum_request_detail: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_cost: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_none: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true } } } } },
              gum_disease_heart: { question: "치료를 망설이는 이유가 있으신가요?", options: [{ id: "gum_hesitate_cost", text: "비용이 걱정돼요" }, { id: "gum_hesitate_fear", text: "치과가 무서워요" }, { id: "gum_hesitate_choice", text: "어떤 치과를 가야할지 모르겠어요" }, { id: "gum_hesitate_none", text: "특별히 없어요" }], next: { gum_hesitate_cost: { question: "궁금하신 점이 있으신가요?", options: [{ id: "gum_request_detail", text: "치료 과정이 궁금해요" }, { id: "gum_request_cost", text: "비용이 궁금해요" }, { id: "gum_request_none", text: "없어요" }], next: { gum_request_detail: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_cost: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_none: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true } } }, gum_hesitate_fear: { question: "궁금하신 점이 있으신가요?", options: [{ id: "gum_request_detail", text: "치료 과정이 궁금해요" }, { id: "gum_request_cost", text: "비용이 궁금해요" }, { id: "gum_request_none", text: "없어요" }], next: { gum_request_detail: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_cost: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_none: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true } } }, gum_hesitate_choice: { question: "궁금하신 점이 있으신가요?", options: [{ id: "gum_request_detail", text: "치료 과정이 궁금해요" }, { id: "gum_request_cost", text: "비용이 궁금해요" }, { id: "gum_request_none", text: "없어요" }], next: { gum_request_detail: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_cost: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_none: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true } } }, gum_hesitate_none: { question: "궁금하신 점이 있으신가요?", options: [{ id: "gum_request_detail", text: "치료 과정이 궁금해요" }, { id: "gum_request_cost", text: "비용이 궁금해요" }, { id: "gum_request_none", text: "없어요" }], next: { gum_request_detail: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_cost: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_none: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true } } } } },
              gum_disease_none: { question: "치료를 망설이는 이유가 있으신가요?", options: [{ id: "gum_hesitate_cost", text: "비용이 걱정돼요" }, { id: "gum_hesitate_fear", text: "치과가 무서워요" }, { id: "gum_hesitate_choice", text: "어떤 치과를 가야할지 모르겠어요" }, { id: "gum_hesitate_none", text: "특별히 없어요" }], next: { gum_hesitate_cost: { question: "궁금하신 점이 있으신가요?", options: [{ id: "gum_request_detail", text: "치료 과정이 궁금해요" }, { id: "gum_request_cost", text: "비용이 궁금해요" }, { id: "gum_request_none", text: "없어요" }], next: { gum_request_detail: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_cost: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_none: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true } } }, gum_hesitate_fear: { question: "궁금하신 점이 있으신가요?", options: [{ id: "gum_request_detail", text: "치료 과정이 궁금해요" }, { id: "gum_request_cost", text: "비용이 궁금해요" }, { id: "gum_request_none", text: "없어요" }], next: { gum_request_detail: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_cost: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_none: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true } } }, gum_hesitate_choice: { question: "궁금하신 점이 있으신가요?", options: [{ id: "gum_request_detail", text: "치료 과정이 궁금해요" }, { id: "gum_request_cost", text: "비용이 궁금해요" }, { id: "gum_request_none", text: "없어요" }], next: { gum_request_detail: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_cost: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_none: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true } } }, gum_hesitate_none: { question: "궁금하신 점이 있으신가요?", options: [{ id: "gum_request_detail", text: "치료 과정이 궁금해요" }, { id: "gum_request_cost", text: "비용이 궁금해요" }, { id: "gum_request_none", text: "없어요" }], next: { gum_request_detail: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_cost: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_none: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true } } } } }
            }
          },
          swelling_pain_no: {
            question: "현재 전신질환이 있으신가요? (복수 선택 가능)",
            allowMultiSelect: true,
            options: [{ id: "gum_disease_diabetes", text: "당뇨" }, { id: "gum_disease_hypertension", text: "고혈압" }, { id: "gum_disease_osteoporosis", text: "골다공증" }, { id: "gum_disease_heart", text: "심장질환" }, { id: "gum_disease_none", text: "없어요" }],
            next: {
              gum_disease_diabetes: { question: "치료를 망설이는 이유가 있으신가요?", options: [{ id: "gum_hesitate_cost", text: "비용이 걱정돼요" }, { id: "gum_hesitate_fear", text: "치과가 무서워요" }, { id: "gum_hesitate_choice", text: "어떤 치과를 가야할지 모르겠어요" }, { id: "gum_hesitate_none", text: "특별히 없어요" }], next: { gum_hesitate_cost: { question: "궁금하신 점이 있으신가요?", options: [{ id: "gum_request_detail", text: "치료 과정이 궁금해요" }, { id: "gum_request_cost", text: "비용이 궁금해요" }, { id: "gum_request_none", text: "없어요" }], next: { gum_request_detail: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_cost: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_none: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true } } }, gum_hesitate_fear: { question: "궁금하신 점이 있으신가요?", options: [{ id: "gum_request_detail", text: "치료 과정이 궁금해요" }, { id: "gum_request_cost", text: "비용이 궁금해요" }, { id: "gum_request_none", text: "없어요" }], next: { gum_request_detail: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_cost: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_none: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true } } }, gum_hesitate_choice: { question: "궁금하신 점이 있으신가요?", options: [{ id: "gum_request_detail", text: "치료 과정이 궁금해요" }, { id: "gum_request_cost", text: "비용이 궁금해요" }, { id: "gum_request_none", text: "없어요" }], next: { gum_request_detail: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_cost: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_none: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true } } }, gum_hesitate_none: { question: "궁금하신 점이 있으신가요?", options: [{ id: "gum_request_detail", text: "치료 과정이 궁금해요" }, { id: "gum_request_cost", text: "비용이 궁금해요" }, { id: "gum_request_none", text: "없어요" }], next: { gum_request_detail: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_cost: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_none: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true } } } } },
              gum_disease_hypertension: { question: "치료를 망설이는 이유가 있으신가요?", options: [{ id: "gum_hesitate_cost", text: "비용이 걱정돼요" }, { id: "gum_hesitate_fear", text: "치과가 무서워요" }, { id: "gum_hesitate_choice", text: "어떤 치과를 가야할지 모르겠어요" }, { id: "gum_hesitate_none", text: "특별히 없어요" }], next: { gum_hesitate_cost: { question: "궁금하신 점이 있으신가요?", options: [{ id: "gum_request_detail", text: "치료 과정이 궁금해요" }, { id: "gum_request_cost", text: "비용이 궁금해요" }, { id: "gum_request_none", text: "없어요" }], next: { gum_request_detail: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_cost: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_none: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true } } }, gum_hesitate_fear: { question: "궁금하신 점이 있으신가요?", options: [{ id: "gum_request_detail", text: "치료 과정이 궁금해요" }, { id: "gum_request_cost", text: "비용이 궁금해요" }, { id: "gum_request_none", text: "없어요" }], next: { gum_request_detail: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_cost: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_none: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true } } }, gum_hesitate_choice: { question: "궁금하신 점이 있으신가요?", options: [{ id: "gum_request_detail", text: "치료 과정이 궁금해요" }, { id: "gum_request_cost", text: "비용이 궁금해요" }, { id: "gum_request_none", text: "없어요" }], next: { gum_request_detail: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_cost: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_none: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true } } }, gum_hesitate_none: { question: "궁금하신 점이 있으신가요?", options: [{ id: "gum_request_detail", text: "치료 과정이 궁금해요" }, { id: "gum_request_cost", text: "비용이 궁금해요" }, { id: "gum_request_none", text: "없어요" }], next: { gum_request_detail: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_cost: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_none: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true } } } } },
              gum_disease_osteoporosis: { question: "치료를 망설이는 이유가 있으신가요?", options: [{ id: "gum_hesitate_cost", text: "비용이 걱정돼요" }, { id: "gum_hesitate_fear", text: "치과가 무서워요" }, { id: "gum_hesitate_choice", text: "어떤 치과를 가야할지 모르겠어요" }, { id: "gum_hesitate_none", text: "특별히 없어요" }], next: { gum_hesitate_cost: { question: "궁금하신 점이 있으신가요?", options: [{ id: "gum_request_detail", text: "치료 과정이 궁금해요" }, { id: "gum_request_cost", text: "비용이 궁금해요" }, { id: "gum_request_none", text: "없어요" }], next: { gum_request_detail: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_cost: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_none: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true } } }, gum_hesitate_fear: { question: "궁금하신 점이 있으신가요?", options: [{ id: "gum_request_detail", text: "치료 과정이 궁금해요" }, { id: "gum_request_cost", text: "비용이 궁금해요" }, { id: "gum_request_none", text: "없어요" }], next: { gum_request_detail: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_cost: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_none: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true } } }, gum_hesitate_choice: { question: "궁금하신 점이 있으신가요?", options: [{ id: "gum_request_detail", text: "치료 과정이 궁금해요" }, { id: "gum_request_cost", text: "비용이 궁금해요" }, { id: "gum_request_none", text: "없어요" }], next: { gum_request_detail: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_cost: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_none: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true } } }, gum_hesitate_none: { question: "궁금하신 점이 있으신가요?", options: [{ id: "gum_request_detail", text: "치료 과정이 궁금해요" }, { id: "gum_request_cost", text: "비용이 궁금해요" }, { id: "gum_request_none", text: "없어요" }], next: { gum_request_detail: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_cost: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_none: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true } } } } },
              gum_disease_heart: { question: "치료를 망설이는 이유가 있으신가요?", options: [{ id: "gum_hesitate_cost", text: "비용이 걱정돼요" }, { id: "gum_hesitate_fear", text: "치과가 무서워요" }, { id: "gum_hesitate_choice", text: "어떤 치과를 가야할지 모르겠어요" }, { id: "gum_hesitate_none", text: "특별히 없어요" }], next: { gum_hesitate_cost: { question: "궁금하신 점이 있으신가요?", options: [{ id: "gum_request_detail", text: "치료 과정이 궁금해요" }, { id: "gum_request_cost", text: "비용이 궁금해요" }, { id: "gum_request_none", text: "없어요" }], next: { gum_request_detail: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_cost: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_none: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true } } }, gum_hesitate_fear: { question: "궁금하신 점이 있으신가요?", options: [{ id: "gum_request_detail", text: "치료 과정이 궁금해요" }, { id: "gum_request_cost", text: "비용이 궁금해요" }, { id: "gum_request_none", text: "없어요" }], next: { gum_request_detail: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_cost: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_none: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true } } }, gum_hesitate_choice: { question: "궁금하신 점이 있으신가요?", options: [{ id: "gum_request_detail", text: "치료 과정이 궁금해요" }, { id: "gum_request_cost", text: "비용이 궁금해요" }, { id: "gum_request_none", text: "없어요" }], next: { gum_request_detail: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_cost: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_none: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true } } }, gum_hesitate_none: { question: "궁금하신 점이 있으신가요?", options: [{ id: "gum_request_detail", text: "치료 과정이 궁금해요" }, { id: "gum_request_cost", text: "비용이 궁금해요" }, { id: "gum_request_none", text: "없어요" }], next: { gum_request_detail: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_cost: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_none: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true } } } } },
              gum_disease_none: { question: "치료를 망설이는 이유가 있으신가요?", options: [{ id: "gum_hesitate_cost", text: "비용이 걱정돼요" }, { id: "gum_hesitate_fear", text: "치과가 무서워요" }, { id: "gum_hesitate_choice", text: "어떤 치과를 가야할지 모르겠어요" }, { id: "gum_hesitate_none", text: "특별히 없어요" }], next: { gum_hesitate_cost: { question: "궁금하신 점이 있으신가요?", options: [{ id: "gum_request_detail", text: "치료 과정이 궁금해요" }, { id: "gum_request_cost", text: "비용이 궁금해요" }, { id: "gum_request_none", text: "없어요" }], next: { gum_request_detail: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_cost: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_none: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true } } }, gum_hesitate_fear: { question: "궁금하신 점이 있으신가요?", options: [{ id: "gum_request_detail", text: "치료 과정이 궁금해요" }, { id: "gum_request_cost", text: "비용이 궁금해요" }, { id: "gum_request_none", text: "없어요" }], next: { gum_request_detail: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_cost: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_none: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true } } }, gum_hesitate_choice: { question: "궁금하신 점이 있으신가요?", options: [{ id: "gum_request_detail", text: "치료 과정이 궁금해요" }, { id: "gum_request_cost", text: "비용이 궁금해요" }, { id: "gum_request_none", text: "없어요" }], next: { gum_request_detail: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_cost: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_none: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true } } }, gum_hesitate_none: { question: "궁금하신 점이 있으신가요?", options: [{ id: "gum_request_detail", text: "치료 과정이 궁금해요" }, { id: "gum_request_cost", text: "비용이 궁금해요" }, { id: "gum_request_none", text: "없어요" }], next: { gum_request_detail: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_cost: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true }, gum_request_none: { question: "당일 진료를 원하시나요?", options: [{ id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" }, { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }], isTerminal: true } } } } }
            }
          }
        }
      },
      gum_recession: {
        question: "치아가 시리거나 민감하신가요?",
        options: [
          { id: "recession_sensitive_yes", text: "네, 시려요" },
          { id: "recession_sensitive_no", text: "아니요" }
        ],
        next: {
          recession_sensitive_yes: {
            question: "현재 전신질환이 있으신가요?",
            allowMultiSelect: true,
            options: [
              { id: "gum_disease_diabetes", text: "당뇨" },
              { id: "gum_disease_hypertension", text: "고혈압" },
              { id: "gum_disease_osteoporosis", text: "골다공증" },
              { id: "gum_disease_heart", text: "심장질환" },
              { id: "gum_disease_none", text: "없어요" }
            ],
            next: {
              default: {
                question: "치료를 망설이는 이유가 있으신가요?",
                options: [
                  { id: "gum_hesitate_cost", text: "비용이 걱정돼요" },
                  { id: "gum_hesitate_fear", text: "치과가 무서워요" },
                  { id: "gum_hesitate_choice", text: "어떤 치과를 가야할지 모르겠어요" },
                  { id: "gum_hesitate_none", text: "특별히 없어요" }
                ],
                next: {
                  default: {
                    question: "궁금하신 점이 있으신가요?",
                    options: [
                      { id: "gum_request_detail", text: "치료 과정이 궁금해요" },
                      { id: "gum_request_cost", text: "비용이 궁금해요" },
                      { id: "gum_request_none", text: "없어요" }
                    ],
                    next: {
                      default: {
                        question: "당일 진료를 원하시나요?",
                        options: [
                          { id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" },
                          { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }
                        ],
                        isTerminal: true
                      }
                    }
                  }
                }
              }
            }
          },
          recession_sensitive_no: {
            question: "현재 전신질환이 있으신가요?",
            allowMultiSelect: true,
            options: [
              { id: "gum_disease_diabetes", text: "당뇨" },
              { id: "gum_disease_hypertension", text: "고혈압" },
              { id: "gum_disease_osteoporosis", text: "골다공증" },
              { id: "gum_disease_heart", text: "심장질환" },
              { id: "gum_disease_none", text: "없어요" }
            ],
            next: {
              default: {
                question: "치료를 망설이는 이유가 있으신가요?",
                options: [
                  { id: "gum_hesitate_cost", text: "비용이 걱정돼요" },
                  { id: "gum_hesitate_fear", text: "치과가 무서워요" },
                  { id: "gum_hesitate_choice", text: "어떤 치과를 가야할지 모르겠어요" },
                  { id: "gum_hesitate_none", text: "특별히 없어요" }
                ],
                next: {
                  default: {
                    question: "궁금하신 점이 있으신가요?",
                    options: [
                      { id: "gum_request_detail", text: "치료 과정이 궁금해요" },
                      { id: "gum_request_cost", text: "비용이 궁금해요" },
                      { id: "gum_request_none", text: "없어요" }
                    ],
                    next: {
                      default: {
                        question: "당일 진료를 원하시나요?",
                        options: [
                          { id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" },
                          { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }
                        ],
                        isTerminal: true
                      }
                    }
                  }
                }
              }
            }
          }
        }
      },
      gum_wobbly: {
        question: "흔들림의 정도는 어떤가요?",
        options: [
          { id: "wobbly_slight", text: "살짝 흔들려요" },
          { id: "wobbly_severe", text: "많이 흔들려요" }
        ],
        next: {
          wobbly_slight: {
            question: "현재 전신질환이 있으신가요?",
            allowMultiSelect: true,
            options: [
              { id: "gum_disease_diabetes", text: "당뇨" },
              { id: "gum_disease_hypertension", text: "고혈압" },
              { id: "gum_disease_osteoporosis", text: "골다공증" },
              { id: "gum_disease_heart", text: "심장질환" },
              { id: "gum_disease_none", text: "없어요" }
            ],
            next: {
              default: {
                question: "치료를 망설이는 이유가 있으신가요?",
                options: [
                  { id: "gum_hesitate_cost", text: "비용이 걱정돼요" },
                  { id: "gum_hesitate_fear", text: "치과가 무서워요" },
                  { id: "gum_hesitate_choice", text: "어떤 치과를 가야할지 모르겠어요" },
                  { id: "gum_hesitate_none", text: "특별히 없어요" }
                ],
                next: {
                  default: {
                    question: "궁금하신 점이 있으신가요?",
                    options: [
                      { id: "gum_request_detail", text: "치료 과정이 궁금해요" },
                      { id: "gum_request_cost", text: "비용이 궁금해요" },
                      { id: "gum_request_none", text: "없어요" }
                    ],
                    next: {
                      default: {
                        question: "당일 진료를 원하시나요?",
                        options: [
                          { id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" },
                          { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }
                        ],
                        isTerminal: true
                      }
                    }
                  }
                }
              }
            }
          },
          wobbly_severe: {
            question: "현재 전신질환이 있으신가요?",
            allowMultiSelect: true,
            options: [
              { id: "gum_disease_diabetes", text: "당뇨" },
              { id: "gum_disease_hypertension", text: "고혈압" },
              { id: "gum_disease_osteoporosis", text: "골다공증" },
              { id: "gum_disease_heart", text: "심장질환" },
              { id: "gum_disease_none", text: "없어요" }
            ],
            next: {
              default: {
                question: "치료를 망설이는 이유가 있으신가요?",
                options: [
                  { id: "gum_hesitate_cost", text: "비용이 걱정돼요" },
                  { id: "gum_hesitate_fear", text: "치과가 무서워요" },
                  { id: "gum_hesitate_choice", text: "어떤 치과를 가야할지 모르겠어요" },
                  { id: "gum_hesitate_none", text: "특별히 없어요" }
                ],
                next: {
                  default: {
                    question: "궁금하신 점이 있으신가요?",
                    options: [
                      { id: "gum_request_detail", text: "치료 과정이 궁금해요" },
                      { id: "gum_request_cost", text: "비용이 궁금해요" },
                      { id: "gum_request_none", text: "없어요" }
                    ],
                    next: {
                      default: {
                        question: "당일 진료를 원하시나요?",
                        options: [
                          { id: "gum_same_day_yes", text: "네, 가능한 빨리 치료받고 싶어요" },
                          { id: "gum_same_day_no", text: "상담을 먼저 받아보고 싶어요" }
                        ],
                        isTerminal: true
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  },

  // 정기 검진 관련
  checkup: {
    question: "특별히 신경 쓰이는 부분이 있으신가요?",
    options: [
      { id: "checkup_prevention", text: "충치/잇몸 예방" },
      { id: "checkup_cleaning", text: "스케일링 받고 싶어요" },
      { id: "checkup_concern", text: "특정 치아가 신경 쓰여요" },
      { id: "checkup_general", text: "전반적인 검진만" }
    ]
  }
};
