import { StructuredQuestion } from './types';
import { QuestionNode, LanguageQuestionTree } from './questions/types';
import { QUESTION_TREE_KO } from './questions/ko';
import { QUESTION_TREE_EN } from './questions/en';
import { QUESTION_TREE_JP } from './questions/jp';
import { QUESTION_TREE_CN } from './questions/cn';
import { QUESTION_TREE_VI } from './questions/vi';
import { QUESTION_TREE_TH } from './questions/th';
import { QUESTION_TREE_RU } from './questions/ru';
import { QUESTION_TREE_MN } from './questions/mn';
import { QUESTION_TREE_UZ } from './questions/uz';

// 언어별 질문 트리 매핑
export const QUESTION_TREES: Record<string, LanguageQuestionTree> = {
  ko: QUESTION_TREE_KO,
  en: QUESTION_TREE_EN,
  jp: QUESTION_TREE_JP,
  cn: QUESTION_TREE_CN,
  vi: QUESTION_TREE_VI,
  th: QUESTION_TREE_TH,
  ru: QUESTION_TREE_RU,
  mn: QUESTION_TREE_MN,
  uz: QUESTION_TREE_UZ
};

// 기본 호환성을 위한 QUESTION_TREE export
export const QUESTION_TREE = QUESTION_TREE_KO;

// consultationTopic을 initial 선택지 ID로 매핑 (다국어 지원)
function mapTopicToInitialOptionId(topic: string): string {
  const topicLower = topic.toLowerCase();

  // Implant / 임플란트 / インプラント / 种植牙 / Cấy ghép răng / รากเทียม / Им플нтация / Им플нт / Implantatsiya
  if (topicLower.includes('implant') || topicLower.includes('임플란트') ||
      topicLower.includes('インプラント') || topicLower.includes('种植牙') ||
      topicLower.includes('cấy ghép') || topicLower.includes('รากเทียม') ||
      topicLower.includes('им플란트') || topicLower.includes('implantatsiya')) {
    return 'missing_tooth';
  }

  // Root Canal / 신경치료 / 神経治療 / 根管治疗 / Điều trị tủy / รักษารากฟัน / Лечение каналов / Сувгийн эмчилгээ / Kanal davolash
  if (topicLower.includes('root canal') || topicLower.includes('신경치료') ||
      topicLower.includes('神経治療') || topicLower.includes('根管治疗') ||
      topicLower.includes('tủy') || topicLower.includes('รักษารากฟัน') ||
      topicLower.includes('канал') || topicLower.includes('сувгийн') ||
      topicLower.includes('kanal')) {
    return 'cavity_nerve';
  }

  // Prosthetics / Crown / 보철 / 크라운 / 補綴 / クラウン / 修复 / 牙冠 / Răng sứ / ครอบฟัน / Протезирование / Бөглөө / Protez
  // 보철/크라운은 충치/신경치료와 연결된 치료이므로 cavity_nerve 카테고리 사용
  if (topicLower.includes('prosthetics') || topicLower.includes('crown') ||
      topicLower.includes('보철') || topicLower.includes('크라운') ||
      topicLower.includes('補綴') || topicLower.includes('クラウン') ||
      topicLower.includes('修复') || topicLower.includes('牙冠') ||
      topicLower.includes('răng sứ') || topicLower.includes('ครอบฟัน') ||
      topicLower.includes('протез') || topicLower.includes('бөглөө') ||
      topicLower.includes('protez')) {
    return 'cavity_nerve';
  }

  // Cosmetic / Whitening / Laminate / 심미 / 미백 / 라미네이트 / 審美 / ホワイトニング / 美容 / 美白 / Tẩy trắng / ฟอกสีฟัน / Отбеливание / Цайруулах / Oqartirish
  if (topicLower.includes('cosmetic') || topicLower.includes('whitening') ||
      topicLower.includes('laminate') ||
      topicLower.includes('심미') || topicLower.includes('미백') || topicLower.includes('라미네이트') ||
      topicLower.includes('審美') || topicLower.includes('ホワイトニング') || topicLower.includes('ラミネート') ||
      topicLower.includes('美容') || topicLower.includes('美白') || topicLower.includes('贴面') ||
      topicLower.includes('trắng') || topicLower.includes('ฟอกสีฟัน') ||
      topicLower.includes('отбеливание') || topicLower.includes('цайруулах') ||
      topicLower.includes('oqartirish')) {
    return 'aesthetic';
  }

  // Wisdom Tooth / 사랑니 / 親知らず / 智齿 / Răng khôn / ฟันคุด / Зуб мудрости / Аг트 араа / Tish olish
  if (topicLower.includes('wisdom') || topicLower.includes('사랑니') ||
      topicLower.includes('親知らず') || topicLower.includes('智齿') ||
      topicLower.includes('răng khôn') || topicLower.includes('ฟันคุด') ||
      topicLower.includes('зуб мудрости') || topicLower.includes('агт араа') ||
      topicLower.includes('tish olish')) {
    return 'wisdom_tooth';
  }

  // Gum Care / 잇몸 / 歯茎 / 牙龈 / Nướu / เหงือก / Десны / Буйл / Milk
  if (topicLower.includes('gum') || topicLower.includes('잇몸') ||
      topicLower.includes('歯茎') || topicLower.includes('牙龈') ||
      topicLower.includes('nướu') || topicLower.includes('เหงือก') ||
      topicLower.includes('데스н') || topicLower.includes('부일') ||
      topicLower.includes('milk')) {
    return 'gum_issue';
  }

  // Cavity / 충치 / 虫歯 / 龋齿 / Sâu răng / ฟันผุ / Кариес / Цоорол / Karies
  if (topicLower.includes('cavity') || topicLower.includes('충치') ||
      topicLower.includes('虫歯') || topicLower.includes('龋齿') ||
      topicLower.includes('sâu răng') || topicLower.includes('ฟันผุ') ||
      topicLower.includes('кариес') || topicLower.includes('цоорол') ||
      topicLower.includes('karies')) {
    return 'cavity_nerve';
  }

  // TMJ / 턱관절 / 顎関節 / 颞下颌关节 / Khớp thái dương hàm / ข้อต่อขากรรไกร / ВНЧС / Эрүүний үе / Jag' bo'g'imi
  if (topicLower.includes('tmj') || topicLower.includes('턱관절') ||
      topicLower.includes('顎関節') || topicLower.includes('颞下颌关节') ||
      topicLower.includes('thái dương hàm') || topicLower.includes('ขากรรไกร') ||
      topicLower.includes('внчс') || topicLower.includes('эрүүний үе') ||
      topicLower.includes('bo\'g\'imi')) {
    return 'pain';
  }

  return 'pain';  // fallback
}

// 심미 상담 전용 메타데이터 반환 타입
export interface CosmeticQuestionMetadata {
  showDoctorCredentials?: boolean;
  treatmentPath?: 'whitening' | 'laminate' | 'nerve_treatment';
  isTerminal?: boolean;
}

// 질문과 메타데이터를 함께 반환하는 확장 타입
export interface ExtendedStructuredQuestion extends StructuredQuestion {
  cosmeticMetadata?: CosmeticQuestionMetadata;
}

// 이미 답변한 질문 유형 체크를 위한 패턴 정의
const DISEASE_OPTION_IDS = [
  'disease_medication', 'disease_heart', 'disease_bp_diabetes',
  'disease_osteoporosis', 'disease_other', 'disease_none'
];

// 전신질환 질문인지 확인하는 함수
function isDiseaseQuestion(question: string): boolean {
  const diseaseKeywords = [
    '전신질환', '심혈관', 'systemic', 'cardiovascular',
    '全身疾患', '心血管', '全身性疾病', '心血管'
  ];
  return diseaseKeywords.some(keyword => question.includes(keyword));
}

// 이미 전신질환에 대해 답변했는지 확인
function hasAnsweredDiseaseQuestion(answers: Array<{ optionId: string; questionType: string }>): boolean {
  return answers.some(answer => {
    // 콤마로 구분된 다중 선택 처리
    const optionIds = answer.optionId.split(',');
    return optionIds.some(id => DISEASE_OPTION_IDS.includes(id.trim()));
  });
}

// 질문 카운트와 답변을 기반으로 다음 질문 생성
export function generateNextQuestion(
  questionCount: number,
  previousAnswers: Array<{ optionId: string; questionType: string }>,
  consultationTopic: string,
  language: 'ko' | 'en' | 'jp' | 'cn' | 'vi' | 'th' | 'ru' | 'mn' | 'uz' = 'ko'
): ExtendedStructuredQuestion | null {
  console.log('🎯 [generateNextQuestion] questionCount:', questionCount);
  console.log('🎯 [generateNextQuestion] previousAnswers:', JSON.stringify(previousAnswers));
  console.log('🎯 [generateNextQuestion] consultationTopic:', consultationTopic);

  // 6번 질문 완료 시 null 반환 (추천 단계로 진입)
  if (questionCount >= 6) {
    console.log('🎯 [generateNextQuestion] questionCount >= 6, returning null');
    return null;
  }

  // ⚠️ 이미 전신질환에 대해 답변했는지 체크
  const alreadyAnsweredDisease = hasAnsweredDiseaseQuestion(previousAnswers);
  if (alreadyAnsweredDisease) {
    console.log('🚫 [generateNextQuestion] 이미 전신질환 답변 완료 - 중복 질문 방지 활성화');
  }

  // 언어별 질문 트리 선택
  const questionTree = QUESTION_TREES[language];

  // 첫 번째 질문 - consultationTopic에 따라 자동으로 시작
  if (questionCount === 0 && consultationTopic) {
    const initialOptionId = mapTopicToInitialOptionId(consultationTopic);
    const categoryNode = questionTree[initialOptionId as keyof typeof questionTree];

    if (categoryNode && 'question' in categoryNode) {
      console.log('🎯 [generateNextQuestion] Q1 반환:', categoryNode.question);
      const result: ExtendedStructuredQuestion = {
        question: categoryNode.question,
        options: categoryNode.options,
        allowCustomInput: true
      };

      // 심미 상담의 경우 메타데이터 추가
      if (categoryNode.showDoctorCredentials) {
        result.cosmeticMetadata = {
          showDoctorCredentials: categoryNode.showDoctorCredentials
        };
      }

      return result;
    }

    // fallback: 기본 initial 질문
    return {
      question: questionTree.initial.question,
      options: questionTree.initial.options,
      allowCustomInput: true
    };
  }

  // 이전 답변들을 기반으로 다음 질문 결정
  const lastAnswer = previousAnswers[previousAnswers.length - 1];

  if (!lastAnswer) {
    console.log('🎯 [generateNextQuestion] no lastAnswer, returning null');
    return null;
  }

  console.log('🎯 [generateNextQuestion] lastAnswer:', JSON.stringify(lastAnswer));

  // 질문 트리를 따라 다음 질문 찾기
  const questionPath = findQuestionPath(previousAnswers, language);

  if (questionPath) {
    // ⚠️ 중복 질문 방지: 이미 전신질환에 답변했는데 또 전신질환 질문이 나오면 스킵
    if (alreadyAnsweredDisease && isDiseaseQuestion(questionPath.question)) {
      console.log('🚫 [generateNextQuestion] 전신질환 질문 중복 감지 - 스킵하고 추천 단계로 이동');
      return null; // 추천 단계로 바로 이동
    }

    const result: ExtendedStructuredQuestion = {
      question: questionPath.question,
      options: questionPath.options,
      allowCustomInput: true
    };

    // 심미 상담 메타데이터 추가 (treatmentPath, isTerminal)
    if (questionPath.treatmentPath || questionPath.isTerminal) {
      result.cosmeticMetadata = {
        treatmentPath: questionPath.treatmentPath,
        isTerminal: questionPath.isTerminal
      };
    }

    return result;
  }

  // 추가 질문이 없으면 null 반환 (조기 추천)
  return null;
}

// 답변 경로를 따라 다음 질문 찾기
function findQuestionPath(
  answers: Array<{ optionId: string; questionType: string }>,
  language: 'ko' | 'en' | 'jp' | 'cn' | 'vi' | 'th' | 'ru' | 'mn' | 'uz' = 'ko'
): QuestionNode | null {
  let currentNode: QuestionNode | null = null;
  const questionTree = QUESTION_TREES[language];

  console.log('🔍 [findQuestionPath] answers:', JSON.stringify(answers));

  for (const answer of answers) {
    // 첫 번째 답변 처리 (Q1 응답)
    if (answer.questionType === 'initial') {
      console.log('🔍 [findQuestionPath] initial answer:', answer.optionId);
      // Q1 옵션 ID (예: missing_all, missing_upper_all 등)로
      // 모든 카테고리 노드의 next에서 해당 옵션을 찾음
      for (const categoryKey of Object.keys(questionTree)) {
        const categoryNode = questionTree[categoryKey as keyof typeof questionTree];
        if (categoryNode && 'next' in categoryNode && categoryNode.next) {
          const nextNode = categoryNode.next[answer.optionId];
          if (nextNode && 'question' in nextNode && 'options' in nextNode) {
            currentNode = nextNode as QuestionNode;
            console.log('🔍 [findQuestionPath] found Q2 in category:', categoryKey, '-> question:', (nextNode as QuestionNode).question);
            break;
          }
        }
      }
      continue;
    }

    // 다음 단계 질문 찾기
    // 다중 선택의 경우 콤마로 구분된 ID 중 첫 번째를 사용
    const optionIdForLookup = answer.optionId?.includes(',')
      ? answer.optionId.split(',')[0]
      : (answer.optionId || '');

    if (currentNode?.next) {
      // 특정 optionId로 매칭 시도, 없으면 default 키로 폴백
      if (currentNode.next[optionIdForLookup]) {
        currentNode = currentNode.next[optionIdForLookup];
        console.log('🔍 [findQuestionPath] next node found for:', optionIdForLookup, '(original:', answer.optionId, ')');
      } else if (currentNode.next['default']) {
        currentNode = currentNode.next['default'];
        console.log('🔍 [findQuestionPath] using default node for:', optionIdForLookup, '(original:', answer.optionId, ')');
      } else {
        // 더 이상 질문이 없으면 중단
        console.log('🔍 [findQuestionPath] no next node for:', optionIdForLookup);
        return null;
      }
    } else {
      console.log('🔍 [findQuestionPath] no next object for currentNode');
      return null;
    }
  }

  // 현재 노드가 질문 객체인지 확인
  if (currentNode && 'question' in currentNode && 'options' in currentNode) {
    console.log('🔍 [findQuestionPath] returning node:', currentNode.question);
    return currentNode;
  }

  console.log('🔍 [findQuestionPath] returning null, currentNode:', currentNode);
  return null;
}

// 답변 이력을 기반으로 프롬프트에 컨텍스트 추가
export function buildAnswerContext(answers: Array<{ optionId: string; questionType: string; optionText: string }>): string {
  if (answers.length === 0) {
    return '';
  }

  // 질문 유형별 한글 매핑
  const questionLabels: Record<string, string> = {
    // Q1 - 치아 상태
    'initial': '현재 치아 상태',
    // Q2 - 치아 위치 또는 틀니 여부
    'missing_partial': '결손 치아 위치',
    'missing_upper_all': '틀니 착용 여부',
    'missing_lower_all': '틀니 착용 여부',
    'missing_all': '틀니 착용 여부',
    'implant_revision': '틀니 착용 여부',
    'location_front': '전신질환',
    'location_back': '전신질환',
    'location_both': '전신질환',
    'denture_yes': '전신질환',
    'denture_no': '전신질환',
    // Q3 - 전신질환 (disease_* 답변 후)
    'disease_diabetes': '치료 우선순위',
    'disease_hypertension': '치료 우선순위',
    'disease_osteoporosis': '치료 우선순위',
    'disease_heart': '치료 우선순위',
    'disease_none': '치료 우선순위',
    // Q4 - 치료 우선순위 (priority_* 답변 후)
    'priority_cost': '치료 망설임 이유',
    'priority_pain': '치료 망설임 이유',
    'priority_eating': '치료 망설임 이유',
    'priority_recovery': '치료 망설임 이유',
  };

  const contextParts = answers.map((answer, index) => {
    // questionType에서 질문 라벨 가져오기 (콤마로 구분된 경우 첫 번째 사용)
    const questionType = answer.questionType?.includes(',')
      ? answer.questionType.split(',')[0]
      : (answer.questionType || '');
    const questionLabel = questionLabels[questionType] || `질문 ${index + 1}`;
    return `- ${questionLabel}: ${answer.optionText}`;
  });

  return `
## 환자 답변 이력
${contextParts.join('\n')}

위 답변들을 종합하여 최적의 치료를 추천해주세요. 특히 '치료 우선순위'와 '치료 망설임 이유'를 반드시 고려하여 환자가 듣고 싶어하는 내용을 먼저 언급해주세요.
`;
}
