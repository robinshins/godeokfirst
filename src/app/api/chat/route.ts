import { NextRequest, NextResponse } from 'next/server';
import { openai } from '@/lib/openai';
import { ChatMessage, IntentAnalysis, CaseImage, StructuredQuestion, SedationCard, CostWarningCard, DoctorCredentialCard, EventBannerCard } from '@/lib/types';
import { buildDynamicPrompt, buildFinalRecommendationPrompt } from '@/lib/prompt-builder';
import { analyzeIntentServerSide, logIntentAnalysis } from '@/lib/intent-analyzer';
import { getCaseImagesForMultipleTreatments, getCaseImagesForTreatment } from '@/lib/treatment-images';
import { generateNextQuestion, buildAnswerContext, ExtendedStructuredQuestion } from '@/lib/question-generator';

// Multilingual system text for consistent language across all prompts
const SYSTEM_TEXTS = {
  ko: {
    customerInterest: '고객의 관심 분야',
    myQuestion: '내가 한 질문',
    providedOptions: '제공한 선택지',
    customerChoice: '고객 선택',
    consultationPrinciples: '상담 원칙 (반드시 준수)',
    noDuplicateQuestions: '중복 질문 절대 금지',
    reviewHistory: '위 대화 히스토리를 꼼꼼히 확인하세요',
    noRepeatTopics: '이미 물어본 주제는 절대 다시 묻지 마세요',
    example: '예',
    costConsideration: '비용 고려',
    answer: '답변',
    costPeriodQuestion: '치료 기간 vs 비용',
    questionProhibited: '질문 금지',
    quickRecovery: '빠른 회복',
    recoveryPeriod: '회복 기간',
    reaskProhibited: '재질문 금지',
    customerCareFocus: '고객 케어 중심 질문',
    careFeeling: '고객이 "나를 신경 써주는구나"라고 느낄 질문',
    treatmentInfo: '치료 계획에 진짜 필요한 정보만 질문',
    avoidFormal: '형식적이거나 불필요한 질문 지양',
    goodExamples: '좋은 질문 예시',
    badExamples: '나쁜 질문 예시',
    maxThreeQuestions: '질문은 최대 3개까지만',
    essentialOnly: '정말 필요한 핵심 질문만',
    moveToRecommendation: '빠르게 파악하고 추천으로 이동',
    importantFormat: '중요 응답 형식',
    mustFollowJson: '반드시 다음 JSON 형식으로 응답하세요',
    correctFormat: '올바른 형식',
    bothFieldsRequired: '두 필드 모두 필수',
    wrongFormat: '잘못된 형식',
    missingQuestionField: 'question 필드 누락',
    errorNoResponse: '응답을 생성할 수 없습니다.',
    errorParsingFailed: '죄송합니다. 질문을 생성하는 중 오류가 발생했습니다. 다시 시도해 주세요.'
  },
  en: {
    customerInterest: "Customer's area of interest",
    myQuestion: 'My question',
    providedOptions: 'Provided options',
    customerChoice: 'Customer choice',
    consultationPrinciples: 'Consultation Principles (Must Follow)',
    noDuplicateQuestions: 'Absolutely No Duplicate Questions',
    reviewHistory: 'Carefully review the conversation history above',
    noRepeatTopics: 'Never ask about topics that have already been discussed',
    example: 'Example',
    costConsideration: 'Cost consideration',
    answer: 'answer',
    costPeriodQuestion: 'Treatment period vs cost',
    questionProhibited: 'question prohibited',
    quickRecovery: 'Quick recovery',
    recoveryPeriod: 'Recovery period',
    reaskProhibited: 're-asking prohibited',
    customerCareFocus: 'Customer-Centered Questions',
    careFeeling: 'Questions that make customers feel "they care about me"',
    treatmentInfo: 'Only ask for information truly needed for treatment planning',
    avoidFormal: 'Avoid formal or unnecessary questions',
    goodExamples: 'Good Question Examples',
    badExamples: 'Bad Question Examples',
    maxThreeQuestions: 'Maximum 3 questions only',
    essentialOnly: 'Only essential core questions',
    moveToRecommendation: 'Quickly understand and move to recommendations',
    importantFormat: 'Important Response Format',
    mustFollowJson: 'You MUST respond in the following JSON format',
    correctFormat: 'CORRECT FORMAT',
    bothFieldsRequired: 'BOTH FIELDS REQUIRED',
    wrongFormat: 'WRONG FORMAT',
    missingQuestionField: 'Missing question field',
    errorNoResponse: 'Unable to generate a response.',
    errorParsingFailed: 'Sorry. An error occurred while generating the question. Please try again.'
  },
  jp: {
    customerInterest: 'お客様の関心分野',
    myQuestion: '私の質問',
    providedOptions: '提供した選択肢',
    customerChoice: 'お客様の選択',
    consultationPrinciples: '相談原則（必ず遵守）',
    noDuplicateQuestions: '重複質問は絶対禁止',
    reviewHistory: '上記の会話履歴を注意深く確認してください',
    noRepeatTopics: 'すでに聞いたトピックは絶対に再び聞かないでください',
    example: '例',
    costConsideration: '費用考慮',
    answer: '回答',
    costPeriodQuestion: '治療期間 vs 費用',
    questionProhibited: '質問禁止',
    quickRecovery: '早期回復',
    recoveryPeriod: '回復期間',
    reaskProhibited: '再質問禁止',
    customerCareFocus: '顧客ケア中心の質問',
    careFeeling: '顧客が「私を気にかけてくれている」と感じる質問',
    treatmentInfo: '治療計画に本当に必要な情報のみ質問',
    avoidFormal: '形式的または不要な質問は避ける',
    goodExamples: '良い質問の例',
    badExamples: '悪い質問の例',
    maxThreeQuestions: '質問は最大3つまで',
    essentialOnly: '本当に必要な核心的な質問のみ',
    moveToRecommendation: '素早く把握して推奨に移行',
    importantFormat: '重要な回答形式',
    mustFollowJson: '必ず以下のJSON形式で回答してください',
    correctFormat: '正しい形式',
    bothFieldsRequired: '両フィールド必須',
    wrongFormat: '間違った形式',
    missingQuestionField: 'questionフィールドが欠落',
    errorNoResponse: '応答を生成できませんでした。',
    errorParsingFailed: '申し訳ございません。質問の生成中にエラーが発生しました。もう一度お試しください。'
  },
  cn: {
    customerInterest: '客户关注领域',
    myQuestion: '我的问题',
    providedOptions: '提供的选项',
    customerChoice: '客户选择',
    consultationPrinciples: '咨询原则（必须遵守）',
    noDuplicateQuestions: '绝对禁止重复提问',
    reviewHistory: '请仔细查看上述对话历史',
    noRepeatTopics: '绝不要再次询问已经讨论过的主题',
    example: '例',
    costConsideration: '费用考虑',
    answer: '回答',
    costPeriodQuestion: '治疗周期 vs 费用',
    questionProhibited: '禁止提问',
    quickRecovery: '快速恢复',
    recoveryPeriod: '恢复期',
    reaskProhibited: '禁止重复提问',
    customerCareFocus: '以客户关怀为中心的问题',
    careFeeling: '让客户感到"他们关心我"的问题',
    treatmentInfo: '仅询问治疗计划真正需要的信息',
    avoidFormal: '避免形式化或不必要的问题',
    goodExamples: '好问题示例',
    badExamples: '坏问题示例',
    maxThreeQuestions: '最多只问3个问题',
    essentialOnly: '仅提出真正必要的核心问题',
    moveToRecommendation: '快速了解并转向推荐',
    importantFormat: '重要回复格式',
    mustFollowJson: '您必须使用以下JSON格式回复',
    correctFormat: '正确格式',
    bothFieldsRequired: '两个字段都是必需的',
    wrongFormat: '错误格式',
    missingQuestionField: '缺少question字段',
    errorNoResponse: '无法生成响应。',
    errorParsingFailed: '抱歉。生成问题时发生错误。请重试。'
  },
  vi: {
    customerInterest: 'Lĩnh vực quan tâm của khách hàng',
    myQuestion: 'Câu hỏi của tôi',
    providedOptions: 'Các lựa chọn đã cung cấp',
    customerChoice: 'Lựa chọn của khách hàng',
    consultationPrinciples: 'Nguyên tắc tư vấn (Bắt buộc tuân thủ)',
    noDuplicateQuestions: 'Tuyệt đối không hỏi trùng lặp',
    reviewHistory: 'Vui lòng xem kỹ lịch sử hội thoại ở trên',
    noRepeatTopics: 'Không bao giờ hỏi lại các chủ đề đã được thảo luận',
    example: 'Ví dụ',
    costConsideration: 'Cân nhắc chi phí',
    answer: 'Trả lời',
    costPeriodQuestion: 'Thời gian điều trị vs Chi phí',
    questionProhibited: 'Cấm hỏi',
    quickRecovery: 'Phục hồi nhanh',
    recoveryPeriod: 'Thời gian phục hồi',
    reaskProhibited: 'Cấm hỏi lại',
    customerCareFocus: 'Câu hỏi tập trung vào chăm sóc khách hàng',
    careFeeling: 'Câu hỏi khiến khách hàng cảm thấy "họ quan tâm đến tôi"',
    treatmentInfo: 'Chỉ hỏi thông tin thực sự cần thiết cho kế hoạch điều trị',
    avoidFormal: 'Tránh các câu hỏi hình thức hoặc không cần thiết',
    goodExamples: 'Ví dụ câu hỏi tốt',
    badExamples: 'Ví dụ câu hỏi xấu',
    maxThreeQuestions: 'Tối đa chỉ 3 câu hỏi',
    essentialOnly: 'Chỉ các câu hỏi cốt lõi cần thiết',
    moveToRecommendation: 'Nhanh chóng hiểu và chuyển sang đề xuất',
    importantFormat: 'Định dạng phản hồi quan trọng',
    mustFollowJson: 'Bạn PHẢI phản hồi theo định dạng JSON sau',
    correctFormat: 'ĐỊNH DẠNG ĐÚNG',
    bothFieldsRequired: 'CẢ HAI TRƯỜNG ĐỀU BẮT BUỘC',
    wrongFormat: 'ĐỊNH DẠNG SAI',
    missingQuestionField: 'Thiếu trường question',
    errorNoResponse: 'Không thể tạo phản hồi.',
    errorParsingFailed: 'Xin lỗi. Đã xảy ra lỗi khi tạo câu hỏi. Vui lòng thử lại.'
  },
  mn: {
    customerInterest: 'Үйлчлүүлэгчийн сонирхлын чиглэл',
    myQuestion: 'Миний асуулт',
    providedOptions: 'Өгсөн сонголтууд',
    customerChoice: 'Үйлчлүүлэгчийн сонголт',
    consultationPrinciples: 'Зөвлөгөөний зарчим (Заавал дагах)',
    noDuplicateQuestions: 'Давтан асуулт огт хориотой',
    reviewHistory: 'Дээрх харилцааны түүхийг анхааралтай уншина уу',
    noRepeatTopics: 'Аль хэдийн ярилцсан сэдвийг дахин бүү асуу',
    example: 'Жишээ',
    costConsideration: 'Зардлын тооцоо',
    answer: 'Хариулт',
    costPeriodQuestion: 'Эмчилгээний хугацаа vs Зардал',
    questionProhibited: 'Асуулт хориотой',
    quickRecovery: 'Хурдан сэргэлт',
    recoveryPeriod: 'Сэргэлтийн хугацаа',
    reaskProhibited: 'Дахин асуулт хориотой',
    customerCareFocus: 'Үйлчлүүлэгчид анхаарал хандуулсан асуултууд',
    careFeeling: 'Үйлчлүүлэгчид "тэд намайг анхаарч байна" гэж мэдрүүлэх асуултууд',
    treatmentInfo: 'Зөвхөн эмчилгээний төлөвлөгөөнд үнэхээр шаардлагатай мэдээллийг асуу',
    avoidFormal: 'Албан ёсны эсвэл шаардлагагүй асуултаас зайлсхий',
    goodExamples: 'Сайн асуултын жишээ',
    badExamples: 'Муу асуултын жишээ',
    maxThreeQuestions: 'Хамгийн ихдээ 3 асуулт',
    essentialOnly: 'Зөвхөн зайлшгүй шаардлагатай асуултууд',
    moveToRecommendation: 'Хурдан ойлгож, зөвлөмж рүү шилжих',
    importantFormat: 'Чухал хариултын формат',
    mustFollowJson: 'Та дараах JSON форматаар хариулах ЁСТОЙ',
    correctFormat: 'ЗӨВФОРМАТ',
    bothFieldsRequired: 'ХОЁР ТАЛБАР ХОЁУЛАА ШААРДЛАГАТАЙ',
    wrongFormat: 'БУРУУ ФОРМАТ',
    missingQuestionField: 'question талбар байхгүй байна',
    errorNoResponse: 'Хариулт үүсгэх боломжгүй байна.',
    errorParsingFailed: 'Уучлаарай. Асуулт үүсгэх явцад алдаа гарлаа. Дахин оролдоно уу.'
  },
  uz: {
    customerInterest: 'Mijozning qiziqish sohasi',
    myQuestion: 'Mening savolim',
    providedOptions: 'Taqdim etilgan variantlar',
    customerChoice: 'Mijoz tanlovi',
    consultationPrinciples: 'Maslahat tamoyillari (Albatta rioya qiling)',
    noDuplicateQuestions: 'Takroriy savollar mutlaqo taqiqlanadi',
    reviewHistory: 'Yuqoridagi suhbat tarixini diqqat bilan ko\'ring',
    noRepeatTopics: 'Allaqachon muhokama qilingan mavzularni qayta so\'ramang',
    example: 'Misol',
    costConsideration: 'Xarajatlarni hisobga olish',
    answer: 'Javob',
    costPeriodQuestion: 'Davolash muddati vs Xarajat',
    questionProhibited: 'Savol taqiqlangan',
    quickRecovery: 'Tez tiklanish',
    recoveryPeriod: 'Tiklanish davri',
    reaskProhibited: 'Qayta so\'rash taqiqlangan',
    customerCareFocus: 'Mijozga g\'amxo\'rlik markazida bo\'lgan savollar',
    careFeeling: 'Mijozga "ular menga g\'amxo\'rlik qilishadi" deb his qildiruvchi savollar',
    treatmentInfo: 'Faqat davolash rejasi uchun haqiqatan kerakli ma\'lumotlarni so\'rang',
    avoidFormal: 'Rasmiy yoki keraksiz savollardan saqlaning',
    goodExamples: 'Yaxshi savol namunalari',
    badExamples: 'Yomon savol namunalari',
    maxThreeQuestions: 'Maksimum 3 ta savol',
    essentialOnly: 'Faqat zarur asosiy savollar',
    moveToRecommendation: 'Tezda tushuning va tavsiyalarga o\'ting',
    importantFormat: 'Muhim javob formati',
    mustFollowJson: 'Siz quyidagi JSON formatida javob berishingiz SHART',
    correctFormat: 'TO\'G\'RI FORMAT',
    bothFieldsRequired: 'IKKALA MAYDON HAM TALAB QILINADI',
    wrongFormat: 'NOTO\'G\'RI FORMAT',
    missingQuestionField: 'question maydoni yo\'q',
    errorNoResponse: 'Javob yaratib bo\'lmadi.',
    errorParsingFailed: 'Kechirasiz. Savol yaratishda xatolik yuz berdi. Qaytadan urinib ko\'ring.'
  },
  ru: {
    customerInterest: 'Область интереса клиента',
    myQuestion: 'Мой вопрос',
    providedOptions: 'Предоставленные варианты',
    customerChoice: 'Выбор клиента',
    consultationPrinciples: 'Принципы консультации (Обязательно соблюдать)',
    noDuplicateQuestions: 'Повторные вопросы строго запрещены',
    reviewHistory: 'Внимательно просмотрите историю разговора выше',
    noRepeatTopics: 'Никогда не спрашивайте о темах, которые уже обсуждались',
    example: 'Пример',
    costConsideration: 'Учёт стоимости',
    answer: 'Ответ',
    costPeriodQuestion: 'Срок лечения vs Стоимость',
    questionProhibited: 'Вопрос запрещён',
    quickRecovery: 'Быстрое восстановление',
    recoveryPeriod: 'Период восстановления',
    reaskProhibited: 'Повторный вопрос запрещён',
    customerCareFocus: 'Вопросы, ориентированные на заботу о клиенте',
    careFeeling: 'Вопросы, которые дают клиенту почувствовать "они заботятся обо мне"',
    treatmentInfo: 'Спрашивайте только информацию, действительно необходимую для плана лечения',
    avoidFormal: 'Избегайте формальных или ненужных вопросов',
    goodExamples: 'Примеры хороших вопросов',
    badExamples: 'Примеры плохих вопросов',
    maxThreeQuestions: 'Максимум 3 вопроса',
    essentialOnly: 'Только необходимые ключевые вопросы',
    moveToRecommendation: 'Быстро понять и перейти к рекомендациям',
    importantFormat: 'Важный формат ответа',
    mustFollowJson: 'Вы ДОЛЖНЫ отвечать в следующем формате JSON',
    correctFormat: 'ПРАВИЛЬНЫЙ ФОРМАТ',
    bothFieldsRequired: 'ОБА ПОЛЯ ОБЯЗАТЕЛЬНЫ',
    wrongFormat: 'НЕПРАВИЛЬНЫЙ ФОРМАТ',
    missingQuestionField: 'Отсутствует поле question',
    errorNoResponse: 'Не удалось сгенерировать ответ.',
    errorParsingFailed: 'Извините. Произошла ошибка при генерации вопроса. Пожалуйста, попробуйте снова.'
  },
  th: {
    customerInterest: 'สิ่งที่ลูกค้าสนใจ',
    myQuestion: 'คำถามของฉัน',
    providedOptions: 'ตัวเลือกที่ให้มา',
    customerChoice: 'ตัวเลือกของลูกค้า',
    consultationPrinciples: 'หลักการให้คำปรึกษา (ต้องปฏิบัติตาม)',
    noDuplicateQuestions: 'ห้ามถามซ้ำโดยเด็ดขาด',
    reviewHistory: 'กรุณาตรวจสอบประวัติการสนทนาด้านบนอย่างละเอียด',
    noRepeatTopics: 'อย่าถามหัวข้อที่ได้พูดคุยไปแล้วอีก',
    example: 'ตัวอย่าง',
    costConsideration: 'การพิจารณาค่าใช้จ่าย',
    answer: 'คำตอบ',
    costPeriodQuestion: 'ระยะเวลาการรักษา vs ค่าใช้จ่าย',
    questionProhibited: 'ห้ามถาม',
    quickRecovery: 'ฟื้นตัวเร็ว',
    recoveryPeriod: 'ระยะเวลาฟื้นตัว',
    reaskProhibited: 'ห้ามถามซ้ำ',
    customerCareFocus: 'คำถามที่มุ่งเน้นการดูแลลูกค้า',
    careFeeling: 'คำถามที่ทำให้ลูกค้ารู้สึกว่า "พวกเขาใส่ใจฉัน"',
    treatmentInfo: 'ถามเฉพาะข้อมูลที่จำเป็นจริงๆ สำหรับแผนการรักษา',
    avoidFormal: 'หลีกเลี่ยงคำถามที่เป็นทางการหรือไม่จำเป็น',
    goodExamples: 'ตัวอย่างคำถามที่ดี',
    badExamples: 'ตัวอย่างคำถามที่ไม่ดี',
    maxThreeQuestions: 'สูงสุดเพียง 3 คำถาม',
    essentialOnly: 'เฉพาะคำถามหลักที่จำเป็น',
    moveToRecommendation: 'เข้าใจอย่างรวดเร็วและไปสู่คำแนะนำ',
    importantFormat: 'รูปแบบการตอบที่สำคัญ',
    mustFollowJson: 'คุณต้องตอบในรูปแบบ JSON ต่อไปนี้',
    correctFormat: 'รูปแบบที่ถูกต้อง',
    bothFieldsRequired: 'ต้องมีทั้งสองฟิลด์',
    wrongFormat: 'รูปแบบที่ไม่ถูกต้อง',
    missingQuestionField: 'ไม่มีฟิลด์ question',
    errorNoResponse: 'ไม่สามารถสร้างการตอบกลับได้',
    errorParsingFailed: 'ขออภัย เกิดข้อผิดพลาดในการสร้างคำถาม กรุณาลองอีกครั้ง'
  }
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      messages,
      consultationTopic,
      max_tokens,
      temperature,
      questionCount = 0,
      answerHistory = [],
      language = 'ko',
      sedationCardShown = false
    } = body as {
      messages: ChatMessage[];
      consultationTopic?: string;
      max_tokens?: number;
      temperature?: number;
      questionCount?: number;
      answerHistory?: Array<{ optionId: string; questionType: string; optionText: string }>;
      language?: 'ko' | 'en' | 'jp' | 'cn' | 'vi' | 'mn' | 'uz' | 'ru' | 'th';
      sedationCardShown?: boolean;
    };

    console.log('📋 상담 주제:', consultationTopic);

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: '메시지가 제공되지 않았습니다.' },
        { status: 400 }
      );
    }

    // 사용자의 최신 메시지 가져오기
    const latestUserMessage = messages
      .filter(msg => msg.role === 'user')
      .pop()?.content || '';

    // 1단계: 의도 분석 (GPT-4.1-mini 사용)
    // ⚠️ 중요: consultationTopic(초기 상담 주제)이 있으면 이를 우선 사용
    // 사용자가 대화 중 다른 치료명을 언급해도 초기 상담 주제를 유지
    const intentAnalysisMessage = consultationTopic || latestUserMessage || '';

    let intentAnalysis: IntentAnalysis;
    try {
      const intentResponse = await fetch(`${request.nextUrl.origin}/api/analyze-intent`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: intentAnalysisMessage,
          max_tokens: typeof max_tokens === 'number' ? max_tokens : 300,
          temperature: typeof temperature === 'number' ? temperature : 0.3,
        })
      });

      if (intentResponse.ok) {
        intentAnalysis = await intentResponse.json();
      } else {
        // API 호출 실패 시 서버사이드 분석으로 fallback
        intentAnalysis = await analyzeIntentServerSide(intentAnalysisMessage);
      }
    } catch (error) {
      console.error('Intent analysis failed, using server-side fallback:', error);
      intentAnalysis = await analyzeIntentServerSide(intentAnalysisMessage);
    }

    // 개발 환경에서 분석 결과 로깅
    logIntentAnalysis(intentAnalysisMessage, intentAnalysis);

    // consultationTopic을 intentAnalysis에 추가 (프롬프트 빌더에서 사용)
    if (consultationTopic) {
      intentAnalysis.consultationTopic = consultationTopic;
      console.log('📌 [상담주제 유지] 초기 상담 주제 고정:', consultationTopic);
    }

    // questionCount === 6: Q6 응답 후 처리
    // 신경치료/충치 상담: 바로 최종 추천으로 이동
    // 기타 상담: 추가 질문 안내
    if (questionCount === 6) {
      // Q5 응답 후 sedationCard 계산 (조기 반환 전에 먼저 계산)
      // 주의: questionCount === 6일 때, answerHistory는 Q1-Q4만 포함하고 Q5 답변은 latestUserMessage에 있음
      const q5AnswerText = (latestUserMessage || '').toLowerCase();
      const isPainSelectedQ6 = q5AnswerText.includes('통증') || q5AnswerText.includes('공포') ||
                               q5AnswerText.includes('pain') || q5AnswerText.includes('fear') ||
                               q5AnswerText.includes('phobia') || q5AnswerText.includes('무서') ||
                               q5AnswerText.includes('痛み') || q5AnswerText.includes('恐怖') ||
                               q5AnswerText.includes('怖') || q5AnswerText.includes('疼痛') ||
                               q5AnswerText.includes('恐惧') || q5AnswerText.includes('疼');

      console.log('💤 [sedationCard Q6] Q5 응답 텍스트:', q5AnswerText);
      console.log('💤 [sedationCard Q6] isPainSelectedQ6:', isPainSelectedQ6);

      // Q4에서 이미 통증 선택했는지 확인 (중복 방지)
      // answerHistory[3]이 Q4 답변 (인덱스 0=Q1, 1=Q2, 2=Q3, 3=Q4)
      const alreadyShowedInQ4 = answerHistory.some(
        (answer, idx) => idx === 3 && // Q4는 인덱스 3
          (answer.optionText.includes('통증') || answer.optionText.includes('pain') ||
           answer.optionText.includes('痛み') || answer.optionText.includes('疼痛'))
      );
      console.log('💤 [sedationCard Q6] alreadyShowedInQ4:', alreadyShowedInQ4);

      let sedationCardQ6: SedationCard | undefined = undefined;
      if (isPainSelectedQ6 && !alreadyShowedInQ4) {
        const sedationTextsQ6 = {
          ko: {
            headerText: '자면서 치료받으세요!',
            emphasisText: '공포 때문에 치료 못 받고 가신 분이 없습니다!',
            highlights: ['수면치료로 통증 없이 편안하게 받으실 수 있어요', '시술 후 불편한 기억이 남지 않아요', '전문 자격증 보유 의료진이 안전하게 진행해요']
          },
          en: {
            headerText: 'Sleep through your treatment!',
            emphasisText: 'No one has ever left without treatment due to fear!',
            highlights: ['Safe treatment while conscious', 'Only comfortable memories remain', 'Certified medical professionals']
          },
          jp: {
            headerText: '眠りながら治療を受けましょう！',
            emphasisText: '恐怖で治療を受けられなかった方はいません！',
            highlights: ['意識がある状態で安全に施術', '施術後は快適な記憶だけが残る', '専門資格を持つ医療スタッフ']
          },
          cn: {
            headerText: '睡眠中完成治疗！',
            emphasisText: '从未有人因恐惧而放弃治疗！',
            highlights: ['在有意识的状态下安全治疗', '术后只留下舒适的记忆', '持有专业资格证书的医疗团队']
          },
          vi: {
            headerText: 'Điều trị trong khi ngủ!',
            emphasisText: 'Chưa ai từ bỏ điều trị vì sợ hãi!',
            highlights: ['Điều trị an toàn trong trạng thái có ý thức', 'Chỉ còn lại những ký ức thoải mái', 'Đội ngũ y tế có chứng chỉ chuyên môn']
          },
          mn: {
            headerText: 'Унтаж байхдаа эмчлүүлээрэй!',
            emphasisText: 'Айдсаас болж эмчлүүлэхээ болих хүн байгаагүй!',
            highlights: ['Ухамсартай байдлаар аюулгүй эмчилгээ', 'Зөвхөн тухтай дурсамжууд үлдэнэ', 'Мэргэжлийн гэрчилгээтэй эмч нар']
          },
          uz: {
            headerText: 'Uxlab yotganingizda davolanish!',
            emphasisText: 'Qo\'rquv tufayli davolanishdan voz kechgan hech kim yo\'q!',
            highlights: ['Hushyor holatda xavfsiz davolash', 'Faqat qulay xotiralar qoladi', 'Sertifikatlangan tibbiy mutaxassislar']
          },
          ru: {
            headerText: 'Лечение во сне!',
            emphasisText: 'Никто не отказался от лечения из-за страха!',
            highlights: ['Безопасное лечение в сознании', 'Остаются только комфортные воспоминания', 'Сертифицированные медицинские специалисты']
          },
          th: {
            headerText: 'รักษาในขณะหลับ!',
            emphasisText: 'ไม่มีใครละทิ้งการรักษาเพราะความกลัว!',
            highlights: ['การรักษาอย่างปลอดภัยในสภาวะมีสติ', 'เหลือเพียงความทรงจำที่สบาย', 'ทีมแพทย์ที่มีใบรับรองวิชาชีพ']
          }
        };
        const textsQ6 = sedationTextsQ6[language] || sedationTextsQ6.ko;
        sedationCardQ6 = {
          show: true,
          images: [
            { src: '/images/monitoring-equipment.jpg', alt: '환자 모니터링 장비', title: '환자 모니터링 장비' },
            { src: '/images/sedation-dental-cpr.png', alt: '치과 전문 소생술 자격증', title: '치과 전문 소생술 자격증' },
            { src: '/images/sedation-certificate-overseas.png', alt: '전문 교육 이수 자격증', title: '전문 교육 이수 자격증' }
          ],
          highlights: textsQ6.highlights,
          headerText: textsQ6.headerText,
          emphasisText: textsQ6.emphasisText
        };
        console.log('💤 [sedationCard] Q5(questionCount=6)에서 통증/공포 선택 - 의식하진정요법 카드 표시 (조기반환 경로)');
      }

      // 모든 상담에서 Q6 응답 후 바로 최종 추천으로 이동
      const skipAdditionalQuestion = true;

      if (skipAdditionalQuestion) {
        console.log('🦷 [questionCount 6] 추가 질문 스킵 - 바로 최종 추천으로 이동');

        // 최종 추천 프롬프트 생성
        const finalPrompt = buildFinalRecommendationPrompt(intentAnalysis, language);

        // GPT-5.2 사용 (Responses API)
        const conversationInput = messages.map(msg => ({
          role: msg.role as 'user' | 'assistant',
          content: msg.content
        }));

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const finalResult = await (openai as any).responses.create({
          model: 'gpt-5.2',
          instructions: finalPrompt,
          input: conversationInput,
          reasoning: {
            effort: 'none'
          },
          max_output_tokens: 1500
        });

        // 응답 구조 디버깅
        console.log('🔍 [questionCount 6] finalResult 구조:', JSON.stringify(finalResult, null, 2).substring(0, 500));

        // 여러 가능한 응답 구조 시도
        let finalMessage = '';
        if (finalResult.output?.[0]?.content?.[0]?.text) {
          finalMessage = finalResult.output[0].content[0].text;
        } else if (finalResult.output_text) {
          finalMessage = finalResult.output_text;
        } else if (typeof finalResult.output === 'string') {
          finalMessage = finalResult.output;
        } else if (finalResult.choices?.[0]?.message?.content) {
          finalMessage = finalResult.choices[0].message.content;
        }

        console.log('📝 [questionCount 6] 최종 추천:', finalMessage ? finalMessage.substring(0, 200) : '(빈 응답)');

        // 케이스 이미지 가져오기 (상담 주제 기반 매핑)
        const getQ6Treatments = (topic: string, msgs: ChatMessage[]): string[] => {
          const topicLower = topic.toLowerCase();

          // 사랑니 케이스 - 이전 답변에 따라 적절한 타입 반환
          if (topicLower.includes('wisdom') || topicLower.includes('사랑니') ||
              topicLower.includes('親知らず') || topicLower.includes('智齿')) {
            // 이전 답변에서 사랑니 위치 확인
            const userMessages = msgs.filter(m => m.role === 'user').map(m => m.content.toLowerCase()).join(' ');

            // 검진 선택 (아프지 않은데 점검) - 답안3
            if (userMessages.includes('점검') || userMessages.includes('검진') ||
                userMessages.includes('아프지') || userMessages.includes('checkup')) {
              return ['wisdom_tooth_checkup'];
            }
            // 위 사랑니 선택 - 답안1
            if (userMessages.includes('위 사랑니') || userMessages.includes('upper')) {
              return ['wisdom_tooth_upper'];
            }
            // 아래 사랑니 선택 - 답안2
            if (userMessages.includes('아래 사랑니') || userMessages.includes('lower')) {
              return ['wisdom_tooth_lower'];
            }
            // 기본값
            return ['wisdom_tooth'];
          }

          if (topicLower.includes('implant') || topicLower.includes('임플란트') ||
              topicLower.includes('インプラント') || topicLower.includes('种植牙')) {
            // answerHistory에서 전체 임플란트 optionId 체크
            const fullArchOptionIds = ['missing_upper_all', 'missing_lower_all', 'missing_all'];
            const hasFullArchOption = answerHistory.some(answer =>
              fullArchOptionIds.includes(answer.optionId)
            );
            if (hasFullArchOption) {
              return ['all_on_x'];
            }
            return ['implant'];
          }
          if (topicLower.includes('충치') || topicLower.includes('신경') || topicLower.includes('보철') || topicLower.includes('크라운') ||
              topicLower.includes('cavity') || topicLower.includes('nerve') || topicLower.includes('root canal') ||
              topicLower.includes('crown') || topicLower.includes('prosthetics') ||
              topicLower.includes('虫歯') || topicLower.includes('神経') || topicLower.includes('蛀牙') || topicLower.includes('根管') ||
              topicLower.includes('補綴') || topicLower.includes('クラウン') || topicLower.includes('牙冠')) {
            return ['nerve_treatment'];
          }
          if (topicLower.includes('미백') || topicLower.includes('whitening') ||
              topicLower.includes('ホワイトニング') || topicLower.includes('美白')) {
            return ['whitening'];
          }
          if (topicLower.includes('교정') || topicLower.includes('orthodontic') ||
              topicLower.includes('矯正') || topicLower.includes('正畸')) {
            return ['orthodontics'];
          }
          if (topicLower.includes('라미네이트') || topicLower.includes('laminate') ||
              topicLower.includes('ラミネート') || topicLower.includes('贴面')) {
            return ['laminate'];
          }
          return [];
        };
        const topicTreatments = consultationTopic ? getQ6Treatments(consultationTopic, messages) : [];
        const treatments = topicTreatments.length > 0 ? topicTreatments : (intentAnalysis.recommendedTreatments || []);
        console.log('🖼️ [questionCount 6] 케이스 이미지 선택:', { consultationTopic, topicTreatments, treatments });
        const caseImages = getCaseImagesForMultipleTreatments(treatments, 5, language);

        // 추천된 치료에 따라 영상 iframe 선택
        const videoIframesQ6: string[] = [];
        if (treatments.includes('all_on_x')) {
          videoIframesQ6.push(
            '<iframe src="https://www.youtube.com/embed/9kP02X04THc" allowfullscreen></iframe>',
            '<iframe src="https://www.youtube.com/embed/GyzFVUfRqmk" allowfullscreen></iframe>',
            '<iframe src="https://www.youtube.com/embed/wZYlF4IJYd4" allowfullscreen></iframe>'
          );
          console.log('📹 [questionCount 6] 전체 임플란트 영상 3개 추가');
        } else if (treatments.includes('whitening') || treatments.includes('laminate')) {
          // 심미치료 (미백/라미네이트): 1개 영상
          videoIframesQ6.push('<iframe src="https://www.youtube.com/embed/4hJI8OteG3Q" allowfullscreen></iframe>');
          console.log('📹 [questionCount 6] 심미치료(미백/라미네이트) 영상 1개 추가');

          // 미백 케이스: AI 응답 + 오스템 미백제 어필 문구 추가
          if (treatments.includes('whitening')) {
            const whiteningAppeal = `

---

## 🦷 고덕퍼스트치과 전문가 미백

### 최고급 오스템 뷰티스 미백 시스템
- **국내 1위 임플란트 기업 오스템**의 검증된 프리미엄 미백제
- 식약처 허가 고농도 미백 젤 사용
- 잇몸 보호 + 시린 증상 최소화 기술 적용

### 미백 치료 차별점
✅ **전문의 직접 시술** - 안전하고 균일한 미백 효과
✅ **1회 시술로 2~3톤 개선** - 즉각적인 효과 확인
✅ **사후관리 프로그램** - 미백 후 시린 증상 케어

### 🎁 원데이 미백 이벤트
**전문가미백 1회 4.9만원** (정가 15만원)
- 당일 시술 완료
- 바쁜 일정에도 부담 없이

> 💡 정확한 진단과 맞춤 상담을 위해 **무료 상담 예약**을 권해드립니다!`;

            finalMessage = finalMessage + whiteningAppeal;
            console.log('✨ [questionCount 6] 미백 어필 문구 추가 완료');
          }
        } else if (treatments.some(t => t.includes('wisdom_tooth'))) {
          videoIframesQ6.push('<iframe src="https://www.youtube.com/embed/SmjM0-MCGX4" allowfullscreen></iframe>');
          console.log('📹 [questionCount 6] 사랑니 영상 1개 추가');
        } else if (treatments.includes('nerve_treatment') || treatments.includes('cavity')) {
          videoIframesQ6.push('<iframe src="https://www.youtube.com/embed/pSSexzE2wXY" allowfullscreen></iframe>');
          videoIframesQ6.push('<iframe src="https://www.youtube.com/embed/tUYS2ov5C9w" allowfullscreen></iframe>');
          console.log('📹 [questionCount 6] 충치/신경치료 영상 2개 추가');
        } else if (treatments.includes('gum_care') || treatments.includes('scaling')) {
          videoIframesQ6.push('<iframe src="https://www.youtube.com/embed/m9GC1rlL-vE" allowfullscreen></iframe>');
          console.log('📹 [questionCount 6] 잇몸치료/스케일링 영상 1개 추가');
        } else if (treatments.some(t => t.includes('implant') || t === 'digital_implant')) {
          videoIframesQ6.push('<iframe src="https://www.youtube.com/embed/9kP02X04THc" allowfullscreen></iframe>');
          console.log('📹 [questionCount 6] 일반 임플란트 영상 1개 추가');
        }

        // 💤 수면 카드가 표시된 경우 수면치료 영상 추가 (현재 또는 이전 요청에서)
        if (sedationCardQ6 || sedationCardShown) {
          videoIframesQ6.push('<iframe src="https://www.youtube.com/embed/WB3M_Uw5X_s" allowfullscreen></iframe>');
          console.log('📹 [questionCount 6] 수면치료(의식하진정) 영상 추가 - sedationCardQ6:', !!sedationCardQ6, 'sedationCardShown:', sedationCardShown);
        }

        return NextResponse.json({
          content: finalMessage,
          caseImages: caseImages.length > 0 ? caseImages : undefined,
          videoIframes: videoIframesQ6.length > 0 ? videoIframesQ6 : undefined,
          isRecommendation: true,
          sedationCard: sedationCardQ6
        });
      }
    }

    // 전체 임플란트가 필요한지 판단하는 함수 (questionCount 7, 8+에서 공통 사용)
    const checkNeedsFullArchImplant = (
      msgs: ChatMessage[],
      history: Array<{ optionId: string; questionType: string; optionText: string }>
    ): boolean => {
      // 1. answerHistory에서 optionId로 직접 체크 (가장 정확함)
      const fullArchOptionIds = [
        'missing_upper_all',  // 윗니 전체가 없거나 발치 예정
        'missing_lower_all',  // 아랫니 전체가 없거나 발치 예정
        'missing_all'         // 거의 모든 치아가 없거나 발치 예정
      ];
      const hasFullArchOption = history.some(answer =>
        fullArchOptionIds.includes(answer.optionId)
      );

      if (hasFullArchOption) {
        console.log('🦷 [전체임플란트 체크] optionId로 확인: true');
        return true;
      }

      // 2. 메시지 텍스트로 체크 (fallback)
      const userContent = msgs
        .filter(m => m.role === 'user')
        .map(m => m.content.toLowerCase())
        .join(' ');

      // 전체 임플란트가 필요한 정확한 선택지만 검사 (question-generator.ts 기준)
      // "윗니 한쪽 전체가 없어요", "아랫니 한쪽 전체가 없어요" 등의 실제 선택지 텍스트 기준
      const fullArchKeywords = [
        '전체가 없', '전체 없',  // 한국어: "윗니 한쪽 전체가 없어요"
        '거의 모든 치아',
        '틀니를 사용', '틀니 사용', '현재 틀니',
        'all of my upper teeth', 'all of my lower teeth',
        'almost all of my teeth', 'using dentures', 'currently using dentures',
        '歯が全部', '全部ありません',  // 일본어: "上の歯が全部ありません"
        'ほぼ全ての歯', '入れ歯を使用',
        '牙齿全部缺失', '全部缺失',  // 중국어
        '几乎所有牙齿', '使用假牙', '正在使用假牙'
      ];

      const isFullArch = fullArchKeywords.some(keyword => userContent.includes(keyword.toLowerCase()));
      console.log('🦷 [전체임플란트 체크] userContent 일부:', userContent.substring(0, 200));
      console.log('🦷 [전체임플란트 체크] isFullArch:', isFullArch);
      return isFullArch;
    };

    const isFullArchCase = checkNeedsFullArchImplant(messages, answerHistory);

    // 2단계: 의도 분석 기반 동적 프롬프트 생성 (언어 포함)
    // questionCount >= 7: 최종 추천 프롬프트 (추가 질문 있으면 그것도 답변)
    // questionCount < 7: 일반 질문 프롬프트
    const dynamicPrompt = questionCount >= 7
      ? buildFinalRecommendationPrompt(intentAnalysis, language)
      : buildDynamicPrompt(intentAnalysis, language);

    // 최종 추천 단계일 때 프롬프트 로깅
    if (questionCount >= 7) {
      console.log('🔍 [디버깅] 프롬프트 타입: 최종 추천');
      console.log('🔍 [디버깅] questionCount:', questionCount);
      console.log('🔍 [디버깅] intentAnalysis.recommendedTreatments:', intentAnalysis.recommendedTreatments);
      console.log('🔍 [디버깅] 프롬프트 길이:', dynamicPrompt.length);
    }

    // 답변 이력을 컨텍스트로 추가
    const answerContext = answerHistory.length > 0 ? buildAnswerContext(answerHistory) : '';

    // 디버깅: answerHistory와 answerContext 로깅
    if (questionCount >= 7) {
      console.log('🔍 [디버깅] answerHistory:', JSON.stringify(answerHistory, null, 2));
      console.log('🔍 [디버깅] answerContext:', answerContext);
    }

    // Build language-specific additional instruction based on question count
    const getAdditionalInstruction = (lang: 'ko' | 'en' | 'jp' | 'cn' | 'vi' | 'mn' | 'uz' | 'ru' | 'th', qCount: number, topic: string): string => {
      const texts = SYSTEM_TEXTS[lang];

      if (qCount >= 1 && qCount < 6) {
        const examples = {
          ko: {
            good1: '"치료 후 특별히 신경 쓰셔야 할 일정(출장, 행사 등)이 있으신가요?"',
            good2: '"현재 가장 불편하신 점은 무엇인가요?" (선택지: "못먹는 음식이 많음", "외관/심미적으로 신경쓰임", "통증이 심함")',
            good3: '"치료에서 제일 중요한 부분은 무엇인가요?" (선택지: "효과가 확실하고 오래가는 치료", "저렴한 비용", "일정")',
            good4: '"전신질환이 있으신가요?" (선택지: "당뇨병", "고혈압", "골다공증", "심장질환", "없음") → 있으면 "내원 시 꼼꼼하게 확인해서 안전한 치료 계획 세워드리겠습니다"만 답변',
            bad1: '"비용이 중요하신가요?" (이미 물어봄)',
            bad2: '"회복일정이 중요하신가요?" (비슷한 질문 반복)',
            messageLabel: '"고객에게 보여줄 친절한 메시지 (필수)"',
            questionLabel: '"질문 내용"',
            optionsLabel: '["선택지1", "선택지2", "선택지3"]',
            notes: '- message 필드는 반드시 포함해야 합니다\n- 선택지는 2-4개로 제한\n- 이미지, 영상, 케이스는 포함하지 마세요'
          },
          en: {
            good1: '"Do you have any special events (business trips, occasions) after treatment?"',
            good2: '"What bothers you the most currently?" (options: "chewing food", "appearance/aesthetics", "pain")',
            good3: '"What is your preferred treatment approach?" (options: "quick recovery", "cost consideration", "latest treatment")',
            good4: '"Do you have any systemic diseases?" (options: "diabetes", "hypertension", "osteoporosis", "heart disease", "none") → If yes, only respond "We will carefully review this during your visit to create a safe treatment plan"',
            bad1: '"Is cost important to you?" (already asked)',
            bad2: '"Is recovery important?" (similar question repeated)',
            messageLabel: '"Friendly message to show to customer (required)"',
            questionLabel: '"Question text"',
            optionsLabel: '["Option1", "Option2", "Option3"]',
            notes: '- message field is required\n- Limit options to 2-4\n- Do not include images, videos, or cases'
          },
          jp: {
            good1: '"治療後に特に気をつけなければならない予定（出張、イベントなど）はありますか？"',
            good2: '"現在最も不便な点は何ですか？" (選択肢: "食べ物を噛むとき", "外観/審美的", "痛み")',
            good3: '"ご希望の治療方向は何ですか？" (選択肢: "早期回復", "費用考慮", "最新治療")',
            good4: '"全身疾患はありますか？" (選択肢: "糖尿病", "高血圧", "骨粗鬆症", "心臓病", "なし") → ある場合「来院時に詳しく確認して安全な治療計画を立てます」とのみ回答',
            bad1: '"費用は重要ですか？" (すでに聞いた)',
            bad2: '"回復は重要ですか？" (類似の質問を繰り返し)',
            messageLabel: '"お客様に表示する親切なメッセージ（必須）"',
            questionLabel: '"質問内容"',
            optionsLabel: '["選択肢1", "選択肢2", "選択肢3"]',
            notes: '- messageフィールドは必須です\n- 選択肢は2〜4個に制限\n- 画像、動画、症例は含めないでください'
          },
          cn: {
            good1: '"治疗后您是否有需要特别注意的日程（出差、活动等）？"',
            good2: '"目前最困扰您的是什么？" (选项: "咀嚼食物时", "外观/美观", "疼痛")',
            good3: '"您希望的治疗方向是什么？" (选项: "快速恢复", "费用考虑", "最新治疗")',
            good4: '"您有全身性疾病吗？" (选项: "糖尿病", "高血压", "骨质疏松", "心脏病", "无") → 如有，仅回复"我们将在您就诊时仔细确认并制定安全的治疗计划"',
            bad1: '"费用对您重要吗？" (已经问过)',
            bad2: '"恢复重要吗？" (重复类似问题)',
            messageLabel: '"向客户显示的友好消息（必填）"',
            questionLabel: '"问题内容"',
            optionsLabel: '["选项1", "选项2", "选项3"]',
            notes: '- message字段是必需的\n- 将选项限制为2-4个\n- 不要包含图片、视频或案例'
          }
        };

        const ex = examples[lang as keyof typeof examples] || examples.en;

        return `\n\n**${texts.consultationPrinciples}**:

1. ${texts.noDuplicateQuestions}:
   - ${texts.reviewHistory}
   - ${texts.noRepeatTopics}
   - ${lang === 'ko' ? '선택지로 한 번 물어본 주제는 다시 독립 질문으로 묻지 마세요' : lang === 'en' ? 'Never ask about topics already covered in previous options as separate questions' : lang === 'jp' ? '選択肢で一度尋ねたトピックは、再度独立した質問としてしないでください' : '不要将选项中已询问过的主题再次作为独立问题提出'}
   - ${texts.example}: "${texts.costConsideration}" ${texts.answer} → "${texts.costPeriodQuestion}" ${texts.questionProhibited}
   - ${texts.example}: "${texts.quickRecovery}" ${texts.answer} → "${texts.recoveryPeriod}" ${texts.reaskProhibited}

2. ${texts.customerCareFocus}:
   - ${texts.careFeeling}
   - ${texts.treatmentInfo}
   - ${texts.avoidFormal}

3. ${texts.goodExamples}:
   ✅ ${ex.good1}
   ✅ ${ex.good2}
   ✅ ${ex.good3}
   ✅ ${ex.good4}

   ❌ ${ex.bad1}
   ❌ ${ex.bad2}

4. ${texts.maxThreeQuestions}:
   - ${texts.essentialOnly}
   - ${texts.moveToRecommendation}

5. ${lang === 'ko' ? '의료정보 질문 제한' : lang === 'en' ? 'Medical Information Questions - Limited' : lang === 'jp' ? '医療情報質問制限' : '医疗信息询问限制'}:
   - ${lang === 'ko' ? '전신질환은 치료별 맞춤 선택지로만 확인 (예: 당뇨병, 고혈압, 골다공증, 심장질환, 없음)' : lang === 'en' ? 'Ask about systemic diseases only with treatment-specific options (e.g., diabetes, hypertension, osteoporosis, heart disease, none)' : lang === 'jp' ? '全身疾患は治療別のカスタム選択肢でのみ確認（例：糖尿病、高血圧、骨粗鬆症、心臓病、なし）' : '仅通过治疗相关选项确认全身性疾病（例如：糖尿病、高血压、骨质疏松、心脏病、无）'}
   - ${lang === 'ko' ? '전신질환 "있음" 선택 시: 더 깊게 묻지 말고 "내원 시 꼼꼼하게 확인해서 안전한 치료 계획 세워드리겠습니다"만 답변' : lang === 'en' ? 'If systemic disease selected: Don\'t ask further, only respond "We will carefully review this during your visit to create a safe treatment plan"' : lang === 'jp' ? '全身疾患「あり」選択時：深く聞かず「来院時に詳しく確認して安全な治療計画を立てます」とのみ回答' : '如果选择了全身性疾病：不要深入询问，仅回复"我们将在您就诊时仔细确认并制定安全的治疗计划"'}
   - ${lang === 'ko' ? '복용약, 주의사항, 조심할 점 등은 절대 묻지 마세요' : lang === 'en' ? 'Never ask about medications, precautions, or specific concerns' : lang === 'jp' ? '服用中の薬、注意事項、気をつける点などは絶対に聞かないでください' : '绝对不要询问药物、注意事项或具体问题'}

6. ${lang === 'ko' ? '"마지막으로" 문구 금지' : lang === 'en' ? 'Never say "lastly" or "finally"' : lang === 'jp' ? '「最後に」という表現は禁止' : '禁止使用"最后"这个表达'}:
   - ${lang === 'ko' ? '"마지막으로"는 절대 사용하지 마세요. 질문이 끝인지 아닌지 모르기 때문입니다' : lang === 'en' ? 'Never use "lastly" or "finally" as it\'s not necessarily the last question' : lang === 'jp' ? '質問が最後かどうかわからないため「最後に」は絶対に使用しないでください' : '由于不知道这是否是最后一个问题，请绝对不要使用"最后"'}

7. ${lang === 'ko' ? '⭐ 답변 반응 후 질문하기 (매우 중요)' : lang === 'en' ? '⭐ Respond to answer before asking (Very Important)' : lang === 'jp' ? '⭐ 回答に反応してから質問する（非常に重要）' : '⭐ 回应答案后再提问（非常重要）'}:
   - ${lang === 'ko' ? '🚨 고객이 방금 선택한 답변에만 반응하세요. 선택하지 않은 내용(빠른회복, 비용, 통증 등)은 절대 언급하지 마세요!' : lang === 'en' ? '🚨 Only respond to what the customer just selected. Never mention unselected topics (recovery, cost, pain, etc.)!' : lang === 'jp' ? '🚨 お客様が選択した回答にのみ反応してください。選択されていない内容は絶対に言及しないでください！' : '🚨 只对客户刚刚选择的答案做出反应。绝对不要提及未选择的内容！'}
   - ${lang === 'ko' ? '⚠️ 아래 템플릿 문장을 반드시 그대로 사용하세요. 임의로 변형하거나 내용을 추가/생략하지 마세요!' : lang === 'en' ? '⚠️ You MUST use the template sentences below EXACTLY as written. Do NOT modify, add, or omit any content!' : lang === 'jp' ? '⚠️ 以下のテンプレート文をそのまま使用してください。変更・追加・省略は禁止です！' : '⚠️ 必须完全按照以下模板句子使用，禁止修改、添加或省略任何内容！'}
   - ${lang === 'ko' ? '답변별 맞춤 반응 (이 문장을 그대로 복사해서 사용):' : lang === 'en' ? 'Response templates (copy these sentences exactly):' : lang === 'jp' ? '回答別テンプレート（この文章をそのままコピーして使用）:' : '回答模板（请原封不动地复制使用）:'}
     ${lang === 'ko' ? `
     • 고혈압 → "고혈압이 있으시군요. 항응고제 복용 여부를 내원 시 확인해드릴게요. 약봉투 지참해주시면 더 정확한 상담이 가능합니다."
     • 당뇨 → "당뇨가 있으시군요. 당화혈색소 수치에 따라 협진이 필요할 수 있어요. 내원 시 자세히 확인해드리겠습니다."
     • 골다공증 주사/약 복용 → "골다공증 치료 중이시군요. 스케줄 조정이 필요할 수 있어서, 하루라도 빨리 내원해서 상담받으시는 게 좋아요."
     • 이갈이/이악물기/턱관절장애 → "턱관절 문제가 있으시군요. 수술 후 예후에 영향을 줄 수 있어서, 턱관절 치료에 집중하시는 이동현 대표원장님께서 꼼꼼히 확인해드릴 거예요."
     • 빠른회복/일상복귀 → "빠른 회복을 원하시는군요! 저희는 디지털 시스템으로 수술 당일 즉시 임시치아 장착이 가능해요."
     • 통증 → "통증이 걱정되시는군요. 저희는 통증완화시스템(가글마취, 무통마취, 수면마취)과 디지털 가이드 무절개 수술 80% 이상으로 통증 때문에 치료 못 받고 가신 분은 없어요."
     • 비용 → ${topic === '임플란트' ? '아래 내용을 **자연스러운 말투로 어미가 반복되지 않게** 조합하여 작성: (1) 과잉진료 없이 양심진료 원칙 (2) 통합치의학과 전문의 직접 진료로 합리적 비용 (3) 메가젠/오스템 등 유명 브랜드 정품 사용 (4) 내원해서 상담받아보시면 환자분 상황에 맞게 가장 합리적 비용으로 최고 효율 치료 추천해드림 (5) 무이자 할부 가능하니 비용 걱정 말고 내원 상담 권유' : '아래 내용을 **자연스러운 말투로 어미가 반복되지 않게** 조합하여 작성: (1) 과잉진료 없이 양심진료 원칙 (2) 내원해서 상담받아보시면 환자분 상황에 맞게 합리적 비용으로 최고 효율 치료 추천해드림 (3) 무이자 할부 가능하니 비용 걱정 말고 내원 상담 권유'}
     • 수술의 안전성/정밀함 → "안전하고 정밀한 수술을 원하시는군요. 저희는 3D 가상 임플란트 수술과 디지털 가이드 수술로 정밀하게 진행해드려요."
     • 비용부담 최소화 → "비용 부담을 줄이고 싶으시군요. 전체 임플란트의 경우 최소 4개 식립 + 뼈이식 포함 비용으로 진행해서 훨씬 부담이 적어요."
     • 치과공포증 → "치과공포증이 있으시군요. 저희는 통증완화시스템으로 가글마취, 무통마취, 의식하 수면요법을 통한 수면마취 임플란트가 가능해서 공포 때문에 치료 못 받고 가신 분은 없어요."
     • 심미적 모습/대인관계 → "심미적인 부분이 중요하시군요. 즉시 임시치아와 디지털 최종보철로 자연스러운 모습을 만들어드려요. 환자분이 만족하실 때까지 다시 만들어드립니다."
     • 편안한 식사 → "편안한 식사가 중요하시군요. 100세 시대, 충분한 영양섭취를 위해 튼튼한 치아가 필수예요."
     • 적절한 치과 선택 고민 → "좋은 치과를 찾고 계시는군요. 저희는 8년간 한자리를 지키며 사후관리까지 철저히 해드리고 있어요."` : lang === 'en' ? `
     • High blood pressure → "I see you have high blood pressure. We'll check about anticoagulant medications during your visit. Please bring your medication bag for a more accurate consultation."
     • Diabetes → "I see you have diabetes. Depending on your HbA1c levels, coordination with your doctor may be needed. We'll review this carefully during your visit."
     • Osteoporosis medication → "You're receiving osteoporosis treatment. Schedule adjustments may be needed, so it's best to visit us as soon as possible for a consultation."
     • Teeth grinding/TMJ issues → "I see you have jaw joint issues. This can affect post-surgery outcomes, so Dr. Kim, who specializes in TMJ and prosthetics, will carefully review your case."
     • Quick recovery → "You want a quick recovery! We have an in-house dental lab, so same-day temporary teeth are possible."
     • Pain concerns → "You're worried about pain. With our pain relief system (topical anesthesia, painless injection, sedation) and 80%+ non-incision digital guide surgery, no one has ever left without treatment due to pain."
     • Cost → ${topic === '임플란트' ? '"Cost is important to you. We have maintained a good reputation for 10 years through honest treatment without overcharging. We operate an in-house dental lab and Dr. Kim does the dental work directly, so we are very affordable among regular clinics (excluding discount clinics). As consultants and partners of famous brands like Megagen and Osstem, we can offer genuine products at reasonable prices. We recommend treatments optimized for your situation at the most reasonable cost, and interest-free installments are available. Please visit us for a consultation without worrying about costs!"' : '"Cost is important to you. The exact cost will be determined after the doctor\'s diagnosis. We offer interest-free installment plans."'}
     • Safety and precision → "You want a safe and precise surgery. We use 3D virtual implant surgery and digital guide surgery for precision."
     • Cost concerns → "You want to minimize costs. For full-arch implants, we include bone grafting with minimum 4 implants, making it much more affordable."
     • Dental anxiety → "You have dental anxiety. We have a pain relief system with topical anesthesia, painless injection, and sedation implants through conscious sedation - no one has ever left without treatment due to fear."
     • Aesthetics/social concerns → "Aesthetics are important to you. We provide immediate temporary teeth and digital final prosthetics for natural results. We'll remake them until you're satisfied."` : lang === 'jp' ? `
     • 高血圧 → "高血圧があるのですね。抗凝固剤の服用について来院時に確認させていただきます。お薬手帳をお持ちいただければ、より正確なご相談が可能です。"
     • 糖尿病 → "糖尿病があるのですね。HbA1c値によっては主治医との連携が必要な場合があります。来院時に詳しく確認させていただきます。"
     • 骨粗鬆症治療中 → "骨粗鬆症の治療中なのですね。スケジュール調整が必要な場合がありますので、できるだけ早めにご来院いただくことをお勧めします。"
     • 歯ぎしり/顎関節障害 → "顎関節に問題があるのですね。術後の予後に影響する可能性がありますので、顎関節治療と補綴に精通した金院長が丁寧に確認いたします。"
     • 早期回復 → "早い回復をご希望なのですね！当院には院内技工所があり、手術当日に即時仮歯の装着が可能です。"
     • 痛み → "痛みが心配なのですね。当院では痛み緩和システム（表面麻酔、無痛麻酔、睡眠麻酔）とデジタルガイド無切開手術80%以上で、痛みで治療を受けられなかった方はいません。"
     • 費用 → ${topic === '임플란트' ? '"費用が重要なのですね。当院は過剰診療なしの良心的な治療で10年間同じ場所で良い評判を維持してきました。院内技工所を運営し、院長が直接技工を行うため、ダンピング歯科を除く一般的な歯科の中ではかなりリーズナブルです。また、メガジェン、オステムなど有名ブランドの諮問医・協力パートナーとして、正規品を合理的な価格でご提供できます。患者様の状況に合わせて最も合理的な費用で最高の効率を出せる治療をお勧めします。無利子分割払いも可能ですので、費用を心配せずにお気軽にご相談にお越しください！"' : '"費用が重要なのですね。正確な費用は院長が診断後にご案内します。無利子分割払いもご利用いただけます。"'}
     • 安全性・精密さ → "安全で精密な手術をご希望なのですね。当院では3D仮想インプラント手術とデジタルガイド手術で精密に行います。"
     • 費用負担軽減 → "費用を抑えたいのですね。全顎インプラントの場合、最小4本埋入＋骨移植込みの費用で、かなりご負担が軽くなります。"
     • 歯科恐怖症 → "歯科恐怖症があるのですね。当院では痛み緩和システムとして表面麻酔、無痛麻酔、意識下鎮静法による睡眠麻酔インプラントが可能で、恐怖で治療を受けられなかった方はいません。"` : `
     • 高血压 → "您有高血压。我们会在您就诊时确认抗凝药物情况。请带上药袋以便更准确地咨询。"
     • 糖尿病 → "您有糖尿病。根据糖化血红蛋白水平，可能需要会诊。我们会在您就诊时详细确认。"
     • 骨质疏松治疗中 → "您正在接受骨质疏松治疗。可能需要调整时间安排，建议尽快来院咨询。"
     • 磨牙/颞下颌关节问题 → "您有颞下颌关节问题。这可能影响术后效果，金院长专精于颞下颌关节治疗和修复，会仔细为您检查。"
     • 快速恢复 → "您希望快速恢复！我们有院内技工室，手术当天即可安装临时牙。"
     • 疼痛 → "您担心疼痛。我们有疼痛缓解系统（表面麻醉、无痛麻醉、睡眠麻醉）和80%以上数字导板无切口手术，从来没有人因为疼痛而无法接受治疗。"
     • 费用 → ${topic === '임플란트' ? '"费用对您很重要。我们凭借10年来诚实治疗、不过度医疗，在同一位置保持着良好的口碑。我们运营院内技工室，院长亲自做技工，因此在正规牙科中（不含低价牙科）价格非常实惠。作为Megagen、Osstem等知名品牌的顾问和合作伙伴，我们能以合理的价格提供正品。我们会根据您的情况推荐最具性价比的治疗方案，还支持免息分期付款。请不用担心费用，随时来咨询吧！"' : '"费用对您很重要。准确费用需要院长诊断后确定，还支持免息分期付款。"'}
     • 安全精准 → "您希望安全精准的手术。我们使用3D虚拟种植手术和数字导板手术来确保精准度。"
     • 减轻费用负担 → "您希望减轻费用负担。全口种植的情况下，我们以最少4颗植入+骨移植的费用进行，负担会小很多。"
     • 牙科恐惧症 → "您有牙科恐惧症。我们有疼痛缓解系统，包括表面麻醉、无痛麻醉和清醒镇静睡眠种植，从来没有人因为恐惧而无法接受治疗。"`}

**${texts.importantFormat}**:
${texts.mustFollowJson}

✅ ${texts.correctFormat} (${texts.bothFieldsRequired}):
{
  "message": "Your friendly message here",
  "question": {
    "text": "Your question here",
    "options": ["Option 1", "Option 2", "Option 3"]
  }
}

❌ ${texts.wrongFormat} - ${texts.missingQuestionField}:
{
  "message": "Thank you for..."
}

**${lang === 'ko' ? '주의사항' : lang === 'en' ? 'Notes' : lang === 'jp' ? '注意事項' : '注意事项'}**:
${ex.notes}`;
      }
      // questionCount >= 7인 경우는 별도 프롬프트(추가질문응답/최종추천)를 사용하므로
      // 여기서는 빈 문자열 반환
      return '';
    };

    const additionalInstruction = getAdditionalInstruction(language, questionCount, consultationTopic || '');

    // Get language-specific text labels
    const texts = SYSTEM_TEXTS[language];

    // 다음 질문을 미리 생성하여 AI에게 알려줌 (questionCount 1-5인 경우)
    let nextQuestionPrompt = '';
    if (questionCount >= 1 && questionCount < 6) {
      const nextQuestion = generateNextQuestion(
        questionCount,
        answerHistory,
        consultationTopic || '',
        language
      );
      if (nextQuestion) {
        // 환자의 마지막 답변 추출
        const lastAnswer = answerHistory.length > 0 ? answerHistory[answerHistory.length - 1] : null;
        const lastAnswerText = lastAnswer?.optionText || '';

        // 전체 임플란트 케이스 여부 및 답변별 필수 문구 생성
        let requiredResponseGuide = '';
        if (language === 'ko' && consultationTopic === '임플란트') {
          // Q4 (questionCount 4) - 치료에서 중요한 부분
          if (questionCount === 4) {
            if (lastAnswerText.includes('비용')) {
              requiredResponseGuide = `\n\n🚨🚨🚨 **필수 포함 내용 (자연스럽게 다듬어서 작성):**
- 과잉진료 없이 양심진료를 해왔기에 10년간 같은 자리에서 좋은 평판 유지
- 원내기공소 운영 + 원장님이 직접 기공하여 덤핑치과 제외 정상적인 치과 중에서는 정말 저렴한 편
- 메가젠, 오스템 등 유명 브랜드의 자문의이자 협업 파트너로서 브랜드 정품도 합리적인 가격으로 사용 가능
- 환자분 상황에 맞게 가장 합리적인 비용으로 최고의 효율을 낼 수 있는 치료 추천
- 무이자 할부 가능하니 비용 걱정 말고 내원 상담
위 내용을 자연스러운 말투로 포함하여 작성하세요. (구체적인 금액 언급 금지)`;
            } else if (lastAnswerText.includes('통증')) {
              requiredResponseGuide = `\n\n🚨🚨🚨 **필수 응답 (반드시 이 문구 포함!):**
"통증완화시스템(가글마취, 무통마취, 수면마취)과 디지털 가이드 무절개 수술 80% 이상으로 **공포 때문에 치료 못 받고 가신 분이 없습니다!**"`;
            } else if (lastAnswerText.includes('식사')) {
              if (isFullArchCase) {
                requiredResponseGuide = `\n\n🚨🚨🚨 **필수 응답 (반드시 이 문구 포함!):**
"수술 당일 임시치아로 바로 식사 가능하고, 디지털 보철로 자연치아처럼 씹는 힘을 회복해드립니다!"`;
              } else {
                requiredResponseGuide = `\n\n🚨🚨🚨 **필수 응답 (반드시 이 문구 포함!):**
"디지털 보철로 자연치아처럼 씹는 힘을 회복해드립니다!"`;
              }
            } else if (lastAnswerText.includes('회복') || lastAnswerText.includes('일상')) {
              if (isFullArchCase) {
                requiredResponseGuide = `\n\n🚨🚨🚨 **필수 응답 (반드시 이 문구 포함!):**
"원내 기공소 당일 임시치아 + 무절개 수술 80%로 회복 기간을 최소화합니다!"`;
              } else {
                requiredResponseGuide = `\n\n🚨🚨🚨 **필수 응답 (반드시 이 문구 포함!):**
"디지털 가이드 무절개 수술 80%로 출혈/통증 최소화, 빠른 회복이 가능합니다!"`;
              }
            }
          }
          // Q5 (questionCount 5) - 치료를 망설이는 이유
          else if (questionCount === 5) {
            if (lastAnswerText.includes('비용')) {
              requiredResponseGuide = `\n\n🚨🚨🚨 **필수 포함 내용 (자연스럽게 다듬어서 작성):**
- 비용 부담에 대한 공감
- 과잉진료 없이 양심진료를 해왔기에 10년간 같은 자리에서 좋은 평판 유지
- 원내기공소 운영 + 원장님이 직접 기공하여 덤핑치과 제외 정상적인 치과 중에서는 정말 저렴한 편
- 메가젠, 오스템 등 유명 브랜드의 자문의이자 협업 파트너로서 브랜드 정품도 합리적인 가격으로 사용 가능
- 환자분 상황에 맞게 가장 합리적인 비용으로 최고의 효율을 낼 수 있는 치료 추천
- 무이자 할부 가능하니 비용 걱정 말고 내원 상담
위 내용을 자연스러운 말투로 포함하여 작성하세요. (구체적인 금액 언급 금지)`;
            } else if (lastAnswerText.includes('통증') || lastAnswerText.includes('공포')) {
              requiredResponseGuide = `\n\n🚨🚨🚨 **필수 응답 (반드시 이 문구 포함!):**
"치과 공포가 있으시군요. 저희 통증완화시스템(가글마취, 무통마취, 수면마취)으로 **공포 때문에 치료 못 받고 가신 분이 없습니다!**"`;
            } else if (lastAnswerText.includes('치과 선택') || lastAnswerText.includes('적절한')) {
              requiredResponseGuide = `\n\n🚨🚨🚨 **필수 응답 (반드시 이 문구 포함!):**
"좋은 치과 선택이 고민되시죠. 이동현 대표원장은 통합치의학과 전문의이자 조선대학교 치과병원 외래교수 출신으로, **디지털 내비게이션 임플란트 전문, 네이버 지도 환자 만족도 최상위**입니다. 과잉진료 없는 양심진료로 사후관리까지 책임집니다!"`;
            }
          }
        }

        const nextQuestionTexts = {
          ko: `\n\n**[시스템 제공 다음 질문 - 이 질문을 반드시 사용하세요]**
다음 질문: "${nextQuestion.question}"
선택지: ${nextQuestion.options.map((o, i) => `${i + 1}. ${o.text}`).join(', ')}

📌 **환자의 마지막 답변**: "${lastAnswerText}"
📌 **전체 임플란트 케이스**: ${isFullArchCase ? '예' : '아니오'}
${requiredResponseGuide}

⚠️ 중요: 위의 시스템 제공 질문만 사용하세요. 새로운 질문을 만들지 마세요.
message 필드에는 위의 필수 응답 문구를 **반드시 그대로** 포함하여 작성하세요. question 필드는 위의 질문을 그대로 사용하세요.`,
          en: `\n\n**[System-provided next question - You MUST use this question]**
Next question: "${nextQuestion.question}"
Options: ${nextQuestion.options.map((o, i) => `${i + 1}. ${o.text}`).join(', ')}

⚠️ Important: Only use the system-provided question above. Do not create new questions.
In the message field, refer to the 'Response guide by answer' above and include our clinic's strengths matching the customer's answer. Use the question above as-is for the question field.`,
          jp: `\n\n**[システム提供の次の質問 - この質問を必ず使用してください]**
次の質問: "${nextQuestion.question}"
選択肢: ${nextQuestion.options.map((o, i) => `${i + 1}. ${o.text}`).join(', ')}

⚠️ 重要: 上記のシステム提供の質問のみを使用してください。新しい質問を作成しないでください。
messageフィールドには上記の「回答別カスタム反応ガイド」を参考に、お客様の回答に合った当院の強みを含めたメッセージを記入してください。questionフィールドは上記の質問をそのまま使用してください。`,
          cn: `\n\n**[系统提供的下一个问题 - 必须使用此问题]**
下一个问题: "${nextQuestion.question}"
选项: ${nextQuestion.options.map((o, i) => `${i + 1}. ${o.text}`).join(', ')}

⚠️ 重要: 只使用上面系统提供的问题。不要创建新问题。
message字段请参考上面的"按回答的定制回应指南"，写出包含我们诊所优势的、与客户回答相匹配的消息。question字段直接使用上面的问题。`,
          vi: `\n\n**[Câu hỏi tiếp theo do hệ thống cung cấp - BẮT BUỘC sử dụng câu hỏi này]**
Câu hỏi tiếp theo: "${nextQuestion.question}"
Các lựa chọn: ${nextQuestion.options.map((o, i) => `${i + 1}. ${o.text}`).join(', ')}

⚠️ Quan trọng: Chỉ sử dụng câu hỏi do hệ thống cung cấp ở trên. Không tạo câu hỏi mới.
Trong trường message, hãy tham khảo 'Hướng dẫn phản hồi theo câu trả lời' ở trên và bao gồm thế mạnh của phòng khám phù hợp với câu trả lời của khách hàng. Sử dụng câu hỏi trên cho trường question.`,
          mn: `\n\n**[Системээс өгсөн дараагийн асуулт - Энэ асуултыг ЗААВАЛ ашиглана уу]**
Дараагийн асуулт: "${nextQuestion.question}"
Сонголтууд: ${nextQuestion.options.map((o, i) => `${i + 1}. ${o.text}`).join(', ')}

⚠️ Чухал: Зөвхөн дээрх системээс өгсөн асуултыг ашиглана уу. Шинэ асуулт бүү үүсгээрэй.
message талбарт дээрх 'Хариултын дагуу хариу өгөх заавар'-ыг ашиглан, үйлчлүүлэгчийн хариулттай нийцсэн манай эмнэлгийн давуу талыг оруулна уу. question талбарт дээрх асуултыг шууд ашиглана уу.`,
          uz: `\n\n**[Tizim tomonidan taqdim etilgan keyingi savol - Bu savolni ALBATTA ishlating]**
Keyingi savol: "${nextQuestion.question}"
Variantlar: ${nextQuestion.options.map((o, i) => `${i + 1}. ${o.text}`).join(', ')}

⚠️ Muhim: Faqat yuqoridagi tizim tomonidan taqdim etilgan savoldan foydalaning. Yangi savol yaratmang.
message maydonida yuqoridagi 'Javobga mos javob qo'llanmasi'ga murojaat qiling va mijozning javobiga mos keladigan klinikamiz afzalliklarini kiriting. question maydoni uchun yuqoridagi savoldan foydalaning.`,
          ru: `\n\n**[Следующий вопрос от системы - ОБЯЗАТЕЛЬНО используйте этот вопрос]**
Следующий вопрос: "${nextQuestion.question}"
Варианты: ${nextQuestion.options.map((o, i) => `${i + 1}. ${o.text}`).join(', ')}

⚠️ Важно: Используйте только вопрос, предоставленный системой выше. Не создавайте новые вопросы.
В поле message используйте 'Руководство по ответам' выше и укажите преимущества нашей клиники, соответствующие ответу клиента. Для поля question используйте вопрос выше как есть.`,
          th: `\n\n**[คำถามถัดไปจากระบบ - ต้องใช้คำถามนี้]**
คำถามถัดไป: "${nextQuestion.question}"
ตัวเลือก: ${nextQuestion.options.map((o, i) => `${i + 1}. ${o.text}`).join(', ')}

⚠️ สำคัญ: ใช้เฉพาะคำถามที่ระบบให้มาด้านบนเท่านั้น อย่าสร้างคำถามใหม่
ในช่อง message ให้อ้างอิง 'คู่มือการตอบตามคำตอบ' ด้านบน และรวมจุดเด่นของคลินิกที่ตรงกับคำตอบของลูกค้า ใช้คำถามด้านบนสำหรับช่อง question`
        };
        nextQuestionPrompt = nextQuestionTexts[language] || nextQuestionTexts.en;
      }
    }

    // 전체 임플란트가 아닌 경우 원내 기공소/당일 임시치아 언급 금지 지시
    let restrictionPrompt = '';
    if (consultationTopic === '임플란트' && !isFullArchCase) {
      restrictionPrompt = `

🚫🚫🚫 **절대 금지 (부분/일반 임플란트 케이스)**
다음 내용은 **전체 임플란트(All-on-X)에만 해당**되므로 절대 언급하지 마세요:
- ❌ "원내 기공소" 언급 금지
- ❌ "당일 임시치아" 언급 금지

대신 다음을 강조하세요:
- ✅ 디지털 가이드 무절개 수술 80% (통증/출혈 최소화)
- ✅ 3D CT + 디지털 시뮬레이션 (정밀하고 안전한 수술)
- ✅ 통증완화시스템 (가글마취, 무통마취, 수면마취)
`;
    }

    // OpenAI format message conversion with language-specific labels
    const openaiMessages = [
      {
        role: 'system' as const,
        content: dynamicPrompt +
          (consultationTopic ? `\n\n${texts.customerInterest}: ${consultationTopic}` : '') +
          (answerContext ? `\n${answerContext}` : '') +
          additionalInstruction +
          restrictionPrompt +
          nextQuestionPrompt
      },
      ...messages.map(msg => {
        let fullContent = msg.content;

        // AI message: Include actual question content and options
        if (msg.role === 'assistant' && msg.structuredQuestion) {
          fullContent += `\n\n[${texts.myQuestion}: ${msg.structuredQuestion.question}]`;
          fullContent += `\n[${texts.providedOptions}:\n${msg.structuredQuestion.options.map((o, i) =>
            `  ${i + 1}. ${o.text} (ID: ${o.id})`
          ).join('\n')}]`;
        }

        // User message: Emphasize selected answer
        if (msg.role === 'user' && msg.selectedOptionId) {
          fullContent = `[${texts.customerChoice}] ${fullContent}`;
        }

        return {
          role: msg.role as 'user' | 'assistant',
          content: fullContent
        };
      })
    ];

    // GPT-5.2 사용 (Responses API)
    // JSON format 사용 시 input 메시지에 'json' 단어 포함 필요
    const needsJsonFormat = questionCount >= 1 && questionCount < 6;

    // input 메시지 준비 - JSON format 필요 시 마지막에 json 요청 추가
    const inputMessages = openaiMessages.slice(1);
    if (needsJsonFormat && inputMessages.length > 0) {
      const lastMsg = inputMessages[inputMessages.length - 1];
      inputMessages[inputMessages.length - 1] = {
        ...lastMsg,
        content: lastMsg.content + ' (Please respond in JSON format)'
      };
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const chatResult = await (openai as any).responses.create({
      model: 'gpt-5.2',
      instructions: openaiMessages[0].content,
      input: inputMessages,
      reasoning: {
        effort: 'none'
      },
      max_output_tokens: typeof max_tokens === 'number' ? max_tokens : 4000,
      // 질문 단계에서는 JSON 형식으로 응답하도록 설정 (1~5번 질문)
      ...(needsJsonFormat ? {
        text: {
          format: {
            type: 'json_object'
          }
        }
      } : {})
    });

    const assistantMessage = chatResult.output?.[0]?.content?.[0]?.text;

    if (!assistantMessage) {
      return NextResponse.json(
        { error: texts.errorNoResponse },
        { status: 500 }
      );
    }

    // 질문 카운트에 따른 처리
    // 0-5: 일반 질문, 7: 추가 질문 응답, 8+: 최종 추천
    // (questionCount === 6는 위에서 이미 early return 처리됨)
    let structuredQuestion: StructuredQuestion | null = null;
    let caseImages: CaseImage[] = [];
    const videoIframes: string[] = [];
    let isRecommendation = false;
    let displayMessage = assistantMessage; // 사용자에게 보여줄 메시지
    let sedationCard: SedationCard | undefined = undefined;

    // 심미 상담 전용 변수
    let doctorCredentialCard: DoctorCredentialCard | undefined = undefined;
    let eventBannerCard: EventBannerCard | undefined = undefined;
    let cosmeticPath: 'whitening' | 'laminate' | undefined = undefined;
    let skipPhoneOption: boolean | undefined = undefined;

    // Q4/Q5에서 통증 선택 시 의식하진정요법 카드 표시
    // Q4에서 이미 표시했으면 Q5에서 중복 표시 안 함
    // 프론트엔드에서 questionCount+1로 전송하므로: Q4 답변 시 questionCount=5, Q5 답변 시 questionCount=6

    // Q4 답변 체크 (questionCount=5일 때 answerHistory의 마지막이 Q4)
    const q4Answer = answerHistory.length > 0 ? answerHistory[answerHistory.length - 1] : null;
    const q4AnswerText = q4Answer?.optionText || '';
    const isPainSelectedQ4 = q4AnswerText.includes('통증') || q4AnswerText.includes('공포') ||
                             q4AnswerText.includes('pain') || q4AnswerText.includes('fear') ||
                             q4AnswerText.includes('痛み') || q4AnswerText.includes('恐怖') ||
                             q4AnswerText.includes('疼痛') || q4AnswerText.includes('恐惧');

    // Q5 답변 체크 (questionCount=6일 때, Q5 답변은 latestUserMessage에 있음 - answerHistory에는 아직 추가 안 됨)
    const q5AnswerTextForCard = (latestUserMessage || '').toLowerCase();
    const isPainSelectedQ5 = q5AnswerTextForCard.includes('통증') || q5AnswerTextForCard.includes('공포') ||
                             q5AnswerTextForCard.includes('pain') || q5AnswerTextForCard.includes('fear') ||
                             q5AnswerTextForCard.includes('phobia') || q5AnswerTextForCard.includes('무서') ||
                             q5AnswerTextForCard.includes('痛み') || q5AnswerTextForCard.includes('恐怖') ||
                             q5AnswerTextForCard.includes('怖') || q5AnswerTextForCard.includes('疼痛') ||
                             q5AnswerTextForCard.includes('恐惧') || q5AnswerTextForCard.includes('疼');

    // 사랑니 상담에서 '두려움' 또는 '공포증' 선택 체크
    const isWisdomToothConsultation = consultationTopic?.toLowerCase().includes('사랑니') ||
                                       consultationTopic?.toLowerCase().includes('wisdom');
    const isFearSelectedWisdom = q5AnswerTextForCard.includes('두려움') || q5AnswerTextForCard.includes('fear') ||
                                  q5AnswerTextForCard.includes('무서') || q5AnswerTextForCard.includes('恐怖') ||
                                  q5AnswerTextForCard.includes('恐惧') ||
                                  q5AnswerTextForCard.includes('공포증') || q5AnswerTextForCard.includes('phobia') ||
                                  q5AnswerTextForCard.includes('치과 공포');

    // Q4에서 이미 통증 선택했는지 확인 (Q5에서 중복 방지용)
    // answerHistory에서 인덱스 3이 Q4 답변 (0=Q1, 1=Q2, 2=Q3, 3=Q4)
    const alreadyShowedSedationInQ4 = answerHistory.some(
      (answer, idx) => idx === 3 && // Q4는 인덱스 3 (0부터 시작)
        (answer.optionText.includes('통증') || answer.optionText.includes('pain') ||
         answer.optionText.includes('痛み') || answer.optionText.includes('疼痛'))
    );

    // 사랑니 상담에서 이미 두려움/공포증 선택했는지 확인 (중복 방지)
    // 현재 답변(마지막 항목)은 제외하고 이전 답변만 체크
    const previousAnswers = answerHistory.slice(0, -1);
    const alreadyShowedSedationForFear = previousAnswers.some(
      (answer) => answer.optionText.includes('두려움') || answer.optionText.includes('fear') ||
                  answer.optionText.includes('무서') || answer.optionText.includes('恐怖') ||
                  answer.optionText.includes('공포증') || answer.optionText.includes('phobia') ||
                  answer.optionText.includes('치과 공포')
    );

    console.log('💤 [sedationCard 메인] questionCount:', questionCount);
    console.log('💤 [sedationCard 메인] Q4 답변:', q4AnswerText, '- isPainSelectedQ4:', isPainSelectedQ4);
    console.log('💤 [sedationCard 메인] Q5 답변 (latestUserMessage):', q5AnswerTextForCard, '- isPainSelectedQ5:', isPainSelectedQ5);
    console.log('💤 [sedationCard 메인] alreadyShowedSedationInQ4:', alreadyShowedSedationInQ4);
    console.log('💤 [sedationCard 메인] 사랑니 상담:', isWisdomToothConsultation, '- 두려움 선택:', isFearSelectedWisdom);
    console.log('💤 [sedationCard 메인] 이전 답변에서 두려움 선택 여부:', alreadyShowedSedationForFear);

    // Q4 또는 Q5에서 통증/공포 선택 시 카드 표시 (중복 방지)
    // questionCount=5는 Q4 답변 후, questionCount=6은 Q5 답변 후
    // 주의: Q4에서 표시했으면 Q5에서는 표시 안 함
    // 사랑니 상담: '두려움' 선택 시에도 카드 표시
    const shouldShowSedationCard =
      (questionCount === 5 && isPainSelectedQ4) ||  // Q4에서 통증 선택 시
      (questionCount === 6 && isPainSelectedQ5 && !alreadyShowedSedationInQ4) ||  // Q5에서 통증 선택 시 (Q4에서 안 보여줬을 경우만)
      (isWisdomToothConsultation && isFearSelectedWisdom && !alreadyShowedSedationForFear);  // 사랑니 상담에서 두려움 선택 시

    if (shouldShowSedationCard) {
      const sedationTexts = {
        ko: {
          headerText: '자면서 치료받으세요!',
          emphasisText: '공포 때문에 치료 못 받고 가신 분이 없습니다!',
          highlights: [
            '수면치료로 통증 없이 편안하게 받으실 수 있어요',
            '시술 후 불편한 기억이 남지 않아요',
            '전문 자격증 보유 의료진이 안전하게 진행해요'
          ]
        },
        en: {
          headerText: 'Sleep through your treatment!',
          emphasisText: 'No one has ever left without treatment due to fear!',
          highlights: [
            'Safe treatment while conscious',
            'Only comfortable memories remain',
            'Certified medical professionals'
          ]
        },
        jp: {
          headerText: '眠りながら治療を受けましょう！',
          emphasisText: '恐怖で治療を受けられなかった方はいません！',
          highlights: [
            '意識がある状態で安全に施術',
            '施術後は快適な記憶だけが残る',
            '専門資格を持つ医療スタッフ'
          ]
        },
        cn: {
          headerText: '睡眠中完成治疗！',
          emphasisText: '从未有人因恐惧而放弃治疗！',
          highlights: [
            '在有意识的状态下安全治疗',
            '术后只留下舒适的记忆',
            '持有专业资格证书的医疗团队'
          ]
        },
        vi: {
          headerText: 'Điều trị trong khi ngủ!',
          emphasisText: 'Chưa ai từ bỏ điều trị vì sợ hãi!',
          highlights: [
            'Điều trị an toàn trong trạng thái có ý thức',
            'Chỉ còn lại những ký ức thoải mái',
            'Đội ngũ y tế có chứng chỉ chuyên môn'
          ]
        },
        mn: {
          headerText: 'Унтаж байхдаа эмчлүүлээрэй!',
          emphasisText: 'Айдсаас болж эмчлүүлэхээ болих хүн байгаагүй!',
          highlights: [
            'Ухамсартай байдлаар аюулгүй эмчилгээ',
            'Зөвхөн тухтай дурсамжууд үлдэнэ',
            'Мэргэжлийн гэрчилгээтэй эмч нар'
          ]
        },
        uz: {
          headerText: 'Uxlab yotganingizda davolanish!',
          emphasisText: 'Qo\'rquv tufayli davolanishdan voz kechgan hech kim yo\'q!',
          highlights: [
            'Hushyor holatda xavfsiz davolash',
            'Faqat qulay xotiralar qoladi',
            'Sertifikatlangan tibbiy mutaxassislar'
          ]
        },
        ru: {
          headerText: 'Лечение во сне!',
          emphasisText: 'Никто не отказался от лечения из-за страха!',
          highlights: [
            'Безопасное лечение в сознании',
            'Остаются только комфортные воспоминания',
            'Сертифицированные медицинские специалисты'
          ]
        },
        th: {
          headerText: 'รักษาในขณะหลับ!',
          emphasisText: 'ไม่มีใครละทิ้งการรักษาเพราะความกลัว!',
          highlights: [
            'การรักษาอย่างปลอดภัยในสภาวะมีสติ',
            'เหลือเพียงความทรงจำที่สบาย',
            'ทีมแพทย์ที่มีใบรับรองวิชาชีพ'
          ]
        }
      };

      const texts = sedationTexts[language] || sedationTexts.ko;

      sedationCard = {
        show: true,
        images: [
          { src: '/images/monitoring-equipment.jpg', alt: '환자 모니터링 장비', title: '환자 모니터링 장비' },
          { src: '/images/sedation-dental-cpr.png', alt: '치과 전문 소생술 자격증', title: '치과 전문 소생술 자격증' },
          { src: '/images/sedation-certificate-overseas.png', alt: '전문 교육 이수 자격증', title: '전문 교육 이수 자격증' }
        ],
        highlights: texts.highlights,
        headerText: texts.headerText,
        emphasisText: texts.emphasisText
      };
      // questionCount=5는 실제 Q4, questionCount=6은 실제 Q5
      const actualQuestion = questionCount === 5 ? 'Q4' : 'Q5';
      console.log('💤 [sedationCard] ' + actualQuestion + '(questionCount=' + questionCount + ')에서 통증/공포 선택 - 의식하진정요법 카드 표시');
    }

    // 💤 직접 입력으로 수면치료 관련 언급 시 의식하진정 카드 표시
    const sedationKeywords = [
      // 한국어
      '수면치료', '수면마취', '의식하진정', '진정치료', '무통치료', '수면 치료', '수면 마취',
      // 영어
      'sedation', 'conscious sedation', 'sleep dentistry', 'iv sedation', 'painless',
      // 일본어
      '鎮静', '静脈内鎮静', '無痛治療', '睡眠歯科',
      // 중국어
      '镇静', '无痛', '睡眠治疗', '静脉镇静'
    ];

    const latestMessageLower = (latestUserMessage || '').toLowerCase();
    const isSedationMentioned = sedationKeywords.some(keyword => latestMessageLower.includes(keyword.toLowerCase()));

    if (isSedationMentioned && !sedationCard) {
      console.log('💤 [sedationCard 직접입력] 수면치료 관련 키워드 감지:', latestUserMessage);

      const sedationTextsDirectInput: Record<string, { headerText: string; emphasisText: string; highlights: string[] }> = {
        ko: {
          headerText: '자면서 치료받으세요!',
          emphasisText: '공포 때문에 치료 못 받고 가신 분이 없습니다!',
          highlights: ['의식이 있는 상태에서 안전하게 시술', '시술 후 편안한 기억만 남아요', '전문 자격증을 갖춘 의료진']
        },
        en: {
          headerText: 'Get treated while you sleep!',
          emphasisText: 'No one has ever left without treatment due to fear!',
          highlights: ['Safe procedure while conscious', 'Only comfortable memories remain', 'Certified medical professionals']
        },
        ja: {
          headerText: '眠りながら治療を受けましょう！',
          emphasisText: '恐怖で治療を受けられなかった方はいません！',
          highlights: ['意識がある状態で安全に施術', '施術後は快適な記憶だけが残る', '専門資格を持つ医療スタッフ']
        },
        cn: {
          headerText: '睡眠中完成治疗！',
          emphasisText: '从未有人因恐惧而放弃治疗！',
          highlights: ['在有意识的状态下安全治疗', '术后只留下舒适的记忆', '持有专业资格证书的医疗团队']
        },
        vi: {
          headerText: 'Điều trị trong khi ngủ!',
          emphasisText: 'Chưa ai từ bỏ điều trị vì sợ hãi!',
          highlights: ['Điều trị an toàn trong trạng thái có ý thức', 'Chỉ còn lại những ký ức thoải mái', 'Đội ngũ y tế có chứng chỉ chuyên môn']
        },
        mn: {
          headerText: 'Унтаж байхдаа эмчлүүлээрэй!',
          emphasisText: 'Айдсаас болж эмчлүүлэхээ болих хүн байгаагүй!',
          highlights: ['Ухамсартай байдлаар аюулгүй эмчилгээ', 'Зөвхөн тухтай дурсамжууд үлдэнэ', 'Мэргэжлийн гэрчилгээтэй эмч нар']
        },
        uz: {
          headerText: 'Uxlab yotganingizda davolanish!',
          emphasisText: 'Qo\'rquv tufayli davolanishdan voz kechgan hech kim yo\'q!',
          highlights: ['Hushyor holatda xavfsiz davolash', 'Faqat qulay xotiralar qoladi', 'Sertifikatlangan tibbiy mutaxassislar']
        },
        ru: {
          headerText: 'Лечение во сне!',
          emphasisText: 'Никто не отказался от лечения из-за страха!',
          highlights: ['Безопасное лечение в сознании', 'Остаются только комфортные воспоминания', 'Сертифицированные медицинские специалисты']
        },
        th: {
          headerText: 'รักษาในขณะหลับ!',
          emphasisText: 'ไม่มีใครละทิ้งการรักษาเพราะความกลัว!',
          highlights: ['การรักษาอย่างปลอดภัยในสภาวะมีสติ', 'เหลือเพียงความทรงจำที่สบาย', 'ทีมแพทย์ที่มีใบรับรองวิชาชีพ']
        }
      };

      const textsDirectInput = sedationTextsDirectInput[language] || sedationTextsDirectInput.ko;

      sedationCard = {
        show: true,
        images: [
          { src: '/images/monitoring-equipment.jpg', alt: '환자 모니터링 장비', title: '환자 모니터링 장비' },
          { src: '/images/sedation-dental-cpr.png', alt: '치과 전문 소생술 자격증', title: '치과 전문 소생술 자격증' },
          { src: '/images/sedation-certificate-overseas.png', alt: '전문 교육 이수 자격증', title: '전문 교육 이수 자격증' }
        ],
        highlights: textsDirectInput.highlights,
        headerText: textsDirectInput.headerText,
        emphasisText: textsDirectInput.emphasisText
      };
      console.log('💤 [sedationCard 직접입력] 의식하진정요법 카드 표시');
    }

    // 💰 비용 선택 시 저가 덤핑 주의 카드 표시 (임플란트 상담만)
    let costWarningCard: CostWarningCard | undefined;

    // 임플란트 상담인지 확인
    const isImplantConsultationForCostCard = consultationTopic?.toLowerCase().includes('임플란트') ||
                                              consultationTopic?.toLowerCase().includes('implant') ||
                                              consultationTopic?.toLowerCase().includes('インプラント') ||
                                              consultationTopic?.toLowerCase().includes('种植牙');

    // Q4 또는 Q5에서 비용 선택했는지 확인
    const isCostSelectedQ4 = q4AnswerText.includes('비용') || q4AnswerText.includes('cost') ||
                              q4AnswerText.includes('저렴') || q4AnswerText.includes('가격') ||
                              q4AnswerText.includes('費用') || q4AnswerText.includes('费用');

    const isCostSelectedQ5 = q5AnswerTextForCard.includes('비용') || q5AnswerTextForCard.includes('cost') ||
                              q5AnswerTextForCard.includes('저렴') || q5AnswerTextForCard.includes('가격') ||
                              q5AnswerTextForCard.includes('費用') || q5AnswerTextForCard.includes('费用');

    // 이미 비용 카드를 보여줬는지 확인 (중복 방지)
    const alreadyShowedCostCardInQ4 = answerHistory.some(
      (answer, idx) => idx === 3 && // Q4는 인덱스 3
        (answer.optionText.includes('비용') || answer.optionText.includes('cost') ||
         answer.optionText.includes('저렴') || answer.optionText.includes('費用'))
    );

    const shouldShowCostWarningCard = isImplantConsultationForCostCard && (
      (questionCount === 5 && isCostSelectedQ4) ||  // Q4에서 비용 선택 시
      (questionCount === 6 && isCostSelectedQ5 && !alreadyShowedCostCardInQ4)  // Q5에서 비용 선택 시 (Q4에서 안 보여줬을 경우만)
    );

    if (shouldShowCostWarningCard) {
      costWarningCard = {
        show: true,
        headerText: '저가 덤핑 치과를 주의하세요',
        subHeaderText: '임플란트 39만원, 전체임플란트 300만원 등 저가로 광고하는 치과들이 많습니다. 아래 사항을 꼭 점검해보세요.',
        checkItems: [
          {
            title: '정품 임플란트 여부 확인',
            description: '몸통(픽스처)만 브랜드 정품이고, 지대주와 보철은 중국산 저가 제품을 사용하는 경우가 많습니다. 저희 병원에서 재수술하는 케이스를 많이 봐왔습니다.'
          },
          {
            title: '전체임플란트(올온엑스) 맞는지 확인',
            description: '전체임플란트인데 뼈이식을 하자고 하면, 일반 임플란트를 전체임플란트로 속이고 있을 가능성이 있습니다.'
          },
          {
            title: '최종보철까지 진행하는지 확인',
            description: '원가 절감을 위해 임시치아로만 치료를 종료하는 경우가 있습니다. 이 경우 1~2년 후 임시치아가 깨져 비용이 훨씬 더 들게 됩니다.'
          }
        ],
        footerText: '저희 치과에서 치료하지 않으셔도 괜찮습니다.\n오시면 정확하고 친절하게 상담해드리니,\n꼭 상담이라도 한번 받아보세요.\n치아는 건강에 정말 중요하니 잘 알아보시고 수술하세요.'
      };
      console.log('💰 [costWarningCard] 임플란트 상담에서 비용 선택 - 저가 덤핑 주의 카드 표시');
    }

    // questionCount === 7: 추가 질문에 대한 응답 + 최종 추천 (AI가 buildAdditionalQuestionResponsePrompt 사용)
    // 수정: 버튼 없이 바로 최종 추천까지 진행
    if (questionCount === 7) {
      // "없음" 선택 시에도 AI가 최종 추천 포함하여 응답
      const noQuestionPatterns = ['없음', 'no question', 'none', 'なし', '没有', '无', '궁금한 점 없음'];
      const hasNoQuestion = noQuestionPatterns.some(pattern =>
        latestUserMessage.toLowerCase().includes(pattern.toLowerCase())
      );

      if (hasNoQuestion) {
        console.log('📝 [questionCount 7] "없음" 선택 - AI가 최종 추천 포함하여 응답');
      } else {
        console.log('📝 [questionCount 7] 추가 질문에 대한 AI 상세 답변 + 최종 추천');
      }

      // 버튼 제거, 바로 최종 추천으로 종료
      structuredQuestion = null;
      isRecommendation = true;

      // 케이스 이미지/영상 선택 로직 (questionCount >= 7과 동일)
      // AI 응답에서 추천 치료 키워드 추출 (추천 문맥에서만)
      const extractTreatmentsFromResponse = (message: string): string[] => {
        const treatments: string[] = [];
        const lowerMessage = message.toLowerCase();

        // "추천", "권장", "적합", "치료" 등의 추천 문맥 키워드 확인
        const hasRecommendationContext =
          lowerMessage.includes('추천') ||
          lowerMessage.includes('권장') ||
          lowerMessage.includes('적합') ||
          lowerMessage.includes('제안') ||
          lowerMessage.includes('권유') ||
          lowerMessage.includes('고려') ||
          lowerMessage.includes('recommended') ||
          lowerMessage.includes('suggest');

        // 추천 문맥이 없으면 빈 배열 반환
        if (!hasRecommendationContext) {
          return [];
        }

        // 키워드 매핑 (우선순위 높은 것부터)
        const keywords: Array<{ pattern: string; treatment: string; priority: number }> = [
          // 높은 우선순위 (구체적인 치료)
          { pattern: '디지털 임플란트', treatment: 'digital_implant', priority: 3 },
          { pattern: '올온엑스', treatment: 'all_on_x', priority: 3 },
          { pattern: 'all-on', treatment: 'all_on_x', priority: 3 },
          { pattern: '전체 임플란트', treatment: 'all_on_x', priority: 3 },
          { pattern: '라미네이트', treatment: 'laminate', priority: 3 },
          { pattern: '신경치료', treatment: 'nerve_treatment', priority: 3 },

          // 중간 우선순위
          { pattern: '임플란트', treatment: 'implant', priority: 2 },
          { pattern: 'implant', treatment: 'implant', priority: 2 },
          { pattern: '사랑니', treatment: 'wisdom_tooth', priority: 2 },
          { pattern: '미백', treatment: 'whitening', priority: 2 },
          { pattern: '크라운', treatment: 'crown_bridge', priority: 2 },
          { pattern: '브릿지', treatment: 'crown_bridge', priority: 2 },
          { pattern: '레진', treatment: 'resin', priority: 2 },

          // 낮은 우선순위 (일반적인 용어, 추천 문맥에서만)
          { pattern: '충치치료', treatment: 'nerve_treatment', priority: 1 },
          { pattern: '잇몸치료', treatment: 'gum_care', priority: 1 },
          { pattern: '치주치료', treatment: 'gum_care', priority: 1 },
        ];

        // 우선순위별로 정렬하여 검사
        const sortedKeywords = keywords.sort((a, b) => b.priority - a.priority);

        for (const { pattern, treatment } of sortedKeywords) {
          if (lowerMessage.includes(pattern) && !treatments.includes(treatment)) {
            treatments.push(treatment);
          }
        }

        return treatments;
      };

      // consultationTopic 기반으로 치료 타입 매핑
      const mapConsultationTopicToTreatments = (topic: string): string[] => {
        const topicLower = topic.toLowerCase();

        // Implant / 임플란트 / インプラント / 种植牙
        if (topicLower.includes('implant') || topicLower.includes('임플란트') ||
            topicLower.includes('インプラント') || topicLower.includes('种植牙')) {
          // isFullArchCase는 이미 위에서 계산됨
          if (isFullArchCase) {
            return ['all_on_x']; // 전체 임플란트만
          } else {
            // answerHistory에서 앞니/어금니 선택 확인 (missing_partial 케이스)
            const hasLocationFront = answerHistory.some(a => a.optionId === 'location_front');
            const hasLocationBack = answerHistory.some(a => a.optionId === 'location_back');
            const hasLocationBoth = answerHistory.some(a => a.optionId === 'location_both');

            if (hasLocationFront) {
              return ['implant_front_multiple']; // 앞니 다수 케이스
            } else if (hasLocationBack) {
              return ['implant_back_multiple']; // 어금니 다수 케이스
            } else if (hasLocationBoth) {
              return ['implant_front_multiple', 'implant_back_multiple']; // 둘 다
            }
            return ['implant', 'digital_implant']; // 일반 임플란트
          }
        }

        // Root Canal / 신경치료 / 神経治療 / 根管治疗
        if (topicLower.includes('root canal') || topicLower.includes('신경치료') ||
            topicLower.includes('神経治療') || topicLower.includes('根管治疗')) {
          return ['nerve_treatment'];
        }

        // Prosthetics / 보철 / 補綴 / 修复
        if (topicLower.includes('prosthetics') || topicLower.includes('crown') ||
            topicLower.includes('보철') || topicLower.includes('크라운') ||
            topicLower.includes('補綴') || topicLower.includes('クラウン') ||
            topicLower.includes('修复') || topicLower.includes('牙冠')) {
          return ['crown_bridge', 'implant'];
        }

        // Cosmetic / Whitening / Laminate / 심미 / 미백 / 라미네이트 / 審美 / ホワイトニング / 美容 / 美白
        if (topicLower.includes('cosmetic') || topicLower.includes('whitening') || topicLower.includes('laminate') ||
            topicLower.includes('심미') || topicLower.includes('미백') || topicLower.includes('라미') ||
            topicLower.includes('審美') || topicLower.includes('ホワイトニング') || topicLower.includes('ラミネート') ||
            topicLower.includes('美容') || topicLower.includes('美白') || topicLower.includes('贴面')) {
          return ['whitening', 'laminate'];
        }

        // Wisdom Tooth / 사랑니 / 親知らず / 智齿
        if (topicLower.includes('wisdom') || topicLower.includes('사랑니') ||
            topicLower.includes('親知らず') || topicLower.includes('智齿')) {
          return ['wisdom_tooth'];
        }

        // Gum Care / 잇몸 / 케어 / 歯茎 / 牙龈
        if (topicLower.includes('gum') || topicLower.includes('care') ||
            topicLower.includes('잇몸') || topicLower.includes('케어') ||
            topicLower.includes('歯茎') || topicLower.includes('牙龈')) {
          return ['gum_care'];
        }

        // Cavity / 충치 / 虫歯 / 龋齿
        if (topicLower.includes('cavity') || topicLower.includes('충치') ||
            topicLower.includes('虫歯') || topicLower.includes('龋齿')) {
          return ['nerve_treatment'];
        }

        // TMJ / 턱관절 / 顎関節 / 颞下颌关节
        if (topicLower.includes('tmj') || topicLower.includes('턱관절') ||
            topicLower.includes('顎関節') || topicLower.includes('颞下颌关节')) {
          return []; // 턱관절은 케이스 이미지 없음
        }

        return [];
      };

      // 1순위: consultationTopic 기반 매핑
      const topicBasedTreatments = consultationTopic
        ? mapConsultationTopicToTreatments(consultationTopic)
        : [];

      // 2순위: AI 응답에서 추천 치료 추출
      const extractedTreatments = extractTreatmentsFromResponse(assistantMessage);

      // 3순위: 초기 intent analysis 사용
      const finalTreatments = topicBasedTreatments.length > 0
        ? topicBasedTreatments
        : (extractedTreatments.length > 0 ? extractedTreatments : intentAnalysis.recommendedTreatments || []);

      console.log('🖼️ [questionCount 7] 케이스 이미지 선택:', {
        consultationTopic,
        isFullArchCase,
        topicBasedTreatments,
        extractedTreatments,
        initialTreatments: intentAnalysis.recommendedTreatments,
        finalTreatments
      });

      // 추천된 치료에 따라 케이스 이미지 선택
      if (finalTreatments.length > 0) {
        caseImages = getCaseImagesForMultipleTreatments(
          finalTreatments,
          5, // 각 치료당 최대 5개
          language // 언어 파라미터 전달
        );
      }

      // 추천된 치료에 따라 영상 iframe 선택 (롱폼 16:9 비율)
      if (finalTreatments.includes('all_on_x')) {
        // 전체 임플란트: 3개 영상 (총정리 1개 + 후기 2개)
        videoIframes.push(
          '<iframe src="https://www.youtube.com/embed/9kP02X04THc" allowfullscreen></iframe>',
          '<iframe src="https://www.youtube.com/embed/GyzFVUfRqmk" allowfullscreen></iframe>',
          '<iframe src="https://www.youtube.com/embed/wZYlF4IJYd4" allowfullscreen></iframe>'
        );
        console.log('📹 [questionCount 7] 전체 임플란트 영상 3개 추가');
      } else if (finalTreatments.includes('whitening') || finalTreatments.includes('laminate')) {
        // 심미치료 (미백/라미네이트): 1개 영상
        videoIframes.push('<iframe src="https://www.youtube.com/embed/4hJI8OteG3Q" allowfullscreen></iframe>');
        console.log('📹 [questionCount 7] 심미치료(미백/라미네이트) 영상 1개 추가');
      } else if (finalTreatments.includes('wisdom_tooth')) {
        // 사랑니: 1개 영상
        videoIframes.push('<iframe src="https://www.youtube.com/embed/SmjM0-MCGX4" allowfullscreen></iframe>');
        console.log('📹 [questionCount 7] 사랑니 영상 1개 추가');
      } else if (finalTreatments.includes('nerve_treatment') || finalTreatments.includes('cavity')) {
        // 충치/신경치료: 2개 영상
        videoIframes.push('<iframe src="https://www.youtube.com/embed/pSSexzE2wXY" allowfullscreen></iframe>');
        videoIframes.push('<iframe src="https://www.youtube.com/embed/tUYS2ov5C9w" allowfullscreen></iframe>');
        console.log('📹 [questionCount 7] 충치/신경치료 영상 2개 추가');
      } else if (finalTreatments.includes('gum_care') || finalTreatments.includes('scaling')) {
        // 잇몸치료/스케일링: 1개 영상
        videoIframes.push('<iframe src="https://www.youtube.com/embed/m9GC1rlL-vE" allowfullscreen></iframe>');
        console.log('📹 [questionCount 7] 잇몸치료/스케일링 영상 1개 추가');
      } else if (finalTreatments.some(t => t.includes('implant') || t === 'digital_implant')) {
        // 일반 임플란트: 1개 영상
        videoIframes.push('<iframe src="https://www.youtube.com/embed/9kP02X04THc" allowfullscreen></iframe>');
        console.log('📹 [questionCount 7] 일반 임플란트 영상 1개 추가');
      }

      // 💤 수면 카드 표시 여부 확인 (현재 요청 또는 이전에 카드가 표시됨)
      if (sedationCard || sedationCardShown) {
        videoIframes.push('<iframe src="https://www.youtube.com/embed/WB3M_Uw5X_s" allowfullscreen></iframe>');
        console.log('📹 [questionCount 7] 수면치료(의식하진정) 영상 추가 - sedationCard:', !!sedationCard, 'sedationCardShown:', sedationCardShown);
      }
    }
    // questionCount < 6: 구조화된 질문 생성 (question-generator.ts 사용 또는 AI 생성)
    // Q1~Q5까지 5개 질문을 표시하기 위해 questionCount < 6으로 설정
    else if (questionCount < 6) {
      // 먼저 question-generator.ts의 구조화된 질문 트리에서 가져오기 시도
      const extendedQuestion = generateNextQuestion(
        questionCount,
        answerHistory,
        consultationTopic || '',
        language
      ) as ExtendedStructuredQuestion | null;

      structuredQuestion = extendedQuestion;

      // 🦷 잇몸치료 Q2 조기 처리: generateNextQuestion이 null일 때 직접 전신질환 질문 제공
      if (!structuredQuestion && questionCount === 2) {
        const isGumTopicEarly = consultationTopic && (
          consultationTopic.includes('잇몸') || consultationTopic.includes('gum') ||
          consultationTopic.includes('歯茎') || consultationTopic.includes('牙龈')
        );
        const hasGumQ1AnswerEarly = answerHistory.some(a =>
          ['bleeding_brushing', 'bleeding_often', 'bleeding_always',
           'swelling_pain_yes', 'swelling_pain_no',
           'recession_sensitive_yes', 'recession_sensitive_no',
           'wobbly_slight', 'wobbly_severe'].includes(a.optionId)
        );

        if (isGumTopicEarly && hasGumQ1AnswerEarly) {
          structuredQuestion = {
            question: '현재 전신질환이 있으신가요? (복수 선택 가능)',
            options: [
              { id: 'gum_disease_diabetes', text: '당뇨' },
              { id: 'gum_disease_hypertension', text: '고혈압' },
              { id: 'gum_disease_osteoporosis', text: '골다공증' },
              { id: 'gum_disease_heart', text: '심장질환' },
              { id: 'gum_disease_none', text: '없어요' }
            ],
            allowCustomInput: false
          };
          console.log('🦷 [잇몸치료] Q2 전신질환 질문 조기 제공 (generateNextQuestion null)');
        }
      }

      // 🎨 심미 상담 처리: cosmeticMetadata 확인
      const cosmeticMetadata = extendedQuestion?.cosmeticMetadata;

      // Q1에서 원장 소개 카드 표시 (심미 상담 진입 시)
      if (questionCount === 0 && cosmeticMetadata?.showDoctorCredentials) {
        doctorCredentialCard = {
          show: true,
          credentials: [
            '대한심미치과학회 심미치아보철 인정의',
            'SKCD(Society of Korean Clinical Dentistry) 정회원',
            '미국 텍사스 A&M 치과대학 보철 연구회 회원'
          ],
          headerText: '대표원장 책임진료',
          patientVideo: '/videos/laminate-smile.mp4'
        };
        console.log('🎨 [심미 상담] Q1 진입 - 원장 소개 카드 표시');
      }

      // 심미 Q2 응답 후 종합 추천으로 바로 진행 (isTerminal 체크)
      // answerHistory에서 심미 Q1 경로 (cosmetic_color, cosmetic_shape, cosmetic_both) 확인
      const cosmeticQ1Answer = answerHistory.find(a =>
        ['cosmetic_color', 'cosmetic_shape', 'cosmetic_both'].includes(a.optionId)
      );

      // Q2 응답 확인 (미백 또는 라미네이트 Q2 옵션)
      const cosmeticQ2Answer = answerHistory.find(a =>
        ['whitening_first', 'whitening_sideeffects', 'whitening_frequency',
         'laminate_prep', 'laminate_duration', 'laminate_warranty'].includes(a.optionId)
      );

      // Q0 + Q1 응답이 모두 있을 때 종합 추천 표시
      // Q0: cosmetic_color/shape/both, Q1: whitening_*/laminate_*
      if (cosmeticQ1Answer && cosmeticQ2Answer) {
        // 심미 종합 추천 생성
        const isWhitening = cosmeticQ1Answer.optionId === 'cosmetic_color';
        cosmeticPath = isWhitening ? 'whitening' : 'laminate';
        skipPhoneOption = true;
        isRecommendation = true;
        structuredQuestion = null; // 더 이상 질문 없음

        // 케이스 이미지 가져오기
        if (isWhitening) {
          caseImages = getCaseImagesForTreatment('cosmetic_whitening', 8) || []; // 모든 미백 케이스 표시

          // AI 응답 파싱 (JSON 형식일 수 있음)
          let aiResponse = '';
          try {
            const parsed = JSON.parse(assistantMessage);
            aiResponse = parsed.message || '';
          } catch {
            aiResponse = assistantMessage || '';
          }

          // AI 응답 + 오스템 미백 어필 문구
          const whiteningAppeal = `

---

## 🦷 고덕퍼스트치과 전문가 미백

### 최고급 오스템 뷰티스 미백 시스템
저희는 **국내 1위 임플란트 기업 오스템**의 프리미엄 미백 시스템을 사용합니다.
- **식약처 허가** 고농도 미백 젤
- **잇몸 보호** + 시린 증상 최소화 기술 적용
- **전문의 직접 시술**로 안전하고 균일한 효과

### 미백 치료 차별점
✅ **1회 시술로 2~3톤 개선** - 즉각적인 효과 확인
✅ **사후관리 프로그램** - 미백 후 시린 증상 케어
✅ **당일 시술 완료** - 바쁜 일정에도 부담 없이

### 자주 묻는 질문
- **후유증**: 일시적 시린 증상 있을 수 있으나 2-3일 내 완화
- **유지기간**: 개인차 있으나 보통 6개월~1년 유지
- **재시술**: 정기적 터치업으로 밝기 유지 가능

> 💡 정확한 진단과 맞춤 상담을 위해 **무료 상담 예약**을 권해드립니다!`;

          displayMessage = (aiResponse ? aiResponse + '\n' : '') + whiteningAppeal;
          console.log('✨ [심미 상담] 미백 Q1 선택 → 바로 종합 추천 (AI 응답 + 오스템 어필)');
        } else {
          // 라미네이트 - 여러 케이스 종류 합치기
          caseImages = [
            ...(getCaseImagesForTreatment('laminate_free_diagnosis', 1) || []),
            ...(getCaseImagesForTreatment('laminate_partial', 1) || []),
            ...(getCaseImagesForTreatment('laminate_noprep', 1) || []),
            ...(getCaseImagesForTreatment('laminate_minimalprep', 1) || [])
          ];
          displayMessage = `## 라미네이트 종합 안내\n\n### 라미네이트가 필요한 TOP 5 이유\n1. **치아 한 개만 작은 왜소치** - 다른 치아와 조화롭게 크기 교정\n2. **교정 완료 후 치아모양 변경** - 교정 후 완벽한 스마일라인 완성\n3. **치아 사이 공간이 크거나 모양 불만족** - 틈새 없는 균일한 앞니\n4. **치아가 비뚤빼뚤한데 교정은 싫음** - 짧은 기간에 가지런한 치아\n5. **아나운서처럼 이쁘고 하얗고 가지런한 치아** - 연예인 스마일\n\n### 대표원장님 책임진료\n- **심미치아보철 인정의**: 대한심미치과학회 인정\n- **SKCD 정회원**: 교합과 기능적 안정성을 중시하는 고품질 임상 연구 단체\n- **미국 텍사스 A&M 치과대학 보철 연구회 회원**\n- **2년 무상보증**: 치료 후 2년간 무상 A/S\n\n### 원내 기공소 장점\n- **당일 or 24시간 원데이 라미네이트** 가능\n- 환자분의 의도대로 제작 가능\n- 재제작 시 추가비용 없음\n\n### 최소삭제 / 무삭제 라미네이트\n- 정확한 진단이 최우선!\n- 모든 환자가 무삭제 라미네이트 가능한 것은 아닙니다\n- 치아 상태에 따라 최소삭제~무삭제 결정\n- **무료진단**으로 정확한 상담 후 결정하세요`;
        }

        // 이벤트 배너 카드
        eventBannerCard = {
          show: true,
          eventTitle: isWhitening ? '전문가미백 1회' : '미세현미경 최소삭제 라미네이트',
          price: isWhitening ? '4.9만원' : '49만원/개',
          isUrgent: true,
          ctaText: '네이버로 예약하기',
          ctaUrl: 'https://m.booking.naver.com/booking/13/bizes/948237/items/7265917'
        };

        console.log('🎨 [심미 상담] 종합 추천 생성 완료 - 경로:', cosmeticPath);
        console.log('🎨 [심미 상담] 케이스 이미지:', caseImages.length, '개');

        // 심미 종합 추천은 여기서 바로 응답 반환
        return NextResponse.json({
          content: displayMessage,
          caseImages: caseImages.length > 0 ? caseImages : undefined,
          structuredQuestion: undefined,
          isRecommendation: true,
          doctorCredentialCard,
          eventBannerCard,
          cosmeticPath,
          skipPhoneOption: true
        });
      }

      // 🦷 잇몸치료 상담 처리: Q0(증상) + Q1(추가질문) + Q2(전신질환) 후 최종 추천
      // Q0: gum_bleeding, gum_swelling, gum_recession, gum_wobbly
      const gumQ0Answer = answerHistory.find(a =>
        ['gum_bleeding', 'gum_swelling', 'gum_recession', 'gum_wobbly'].includes(a.optionId)
      );

      // Q1: 각 증상별 추가질문 옵션 (ko.ts와 일치하는 ID)
      const gumQ1Answer = answerHistory.find(a =>
        ['bleeding_brushing', 'bleeding_often', 'bleeding_always',
         'swelling_pain_yes', 'swelling_pain_no',
         'recession_sensitive_yes', 'recession_sensitive_no',
         'wobbly_slight', 'wobbly_severe'].includes(a.optionId)
      );

      // Q2: 전신질환 확인
      const gumQ2Answer = answerHistory.find(a =>
        ['gum_disease_diabetes', 'gum_disease_hypertension', 'gum_disease_osteoporosis',
         'gum_disease_heart', 'gum_disease_none'].includes(a.optionId)
      );

      // Q0 + Q1 + Q2 응답이 모두 있을 때 잇몸치료 종합 추천 표시
      if (gumQ0Answer && gumQ1Answer && gumQ2Answer) {
        isRecommendation = true;
        structuredQuestion = null; // 더 이상 질문 없음

        // 잇몸치료 케이스 이미지 가져오기
        caseImages = getCaseImagesForTreatment('gum_care', 5) || [];

        // 증상별 맞춤 메시지 구성
        const symptomMessages: Record<string, string> = {
          gum_bleeding: '잇몸 출혈',
          gum_swelling: '잇몸 부종',
          gum_recession: '잇몸 퇴축',
          gum_wobbly: '치아 흔들림'
        };
        const symptom = symptomMessages[gumQ0Answer.optionId] || '잇몸 증상';

        // 전신질환 메시지
        const diseaseMessages: Record<string, string> = {
          gum_disease_diabetes: '당뇨가 있으시군요. 당뇨와 치주질환은 상호 영향을 주는 관계입니다. 혈당 조절과 함께 잇몸 관리가 매우 중요합니다.',
          gum_disease_hypertension: '고혈압이 있으시군요. 치료 시 혈압 관리에 주의하며 안전하게 진행하겠습니다.',
          gum_disease_osteoporosis: '골다공증이 있으시군요. 잇몸뼈 상태를 꼼꼼히 확인하고 맞춤 치료 계획을 세워드리겠습니다.',
          gum_disease_heart: '심장질환이 있으시군요. 치료 전 담당 내과 선생님과 협진하여 안전하게 진행하겠습니다.',
          gum_disease_none: ''
        };
        const diseaseNote = diseaseMessages[gumQ2Answer.optionId] || '';

        // 원장님이 직접 이야기하는 형식의 최종 추천 메시지
        const symptomExplanations: Record<string, string> = {
          gum_bleeding: '양치할 때 피가 나시는 건 잇몸 염증의 초기 신호입니다. 지금 단계에서 스케일링과 잇몸 관리를 하시면 충분히 회복할 수 있어요.',
          gum_swelling: '잇몸이 붓는 건 염증이 진행되고 있다는 신호입니다. 빨리 원인을 찾아 치료하면 더 심해지는 것을 막을 수 있어요.',
          gum_recession: '잇몸이 내려간 건 치주염이 진행되었다는 신호입니다. 조기에 치료하면 더 이상의 진행을 막고 관리할 수 있어요.',
          gum_wobbly: '치아가 흔들리시면 빠른 시일 내에 꼭 내원해 주세요. 정확한 진단 후 최선의 치료 방법을 찾아드리겠습니다.'
        };
        const symptomExplanation = symptomExplanations[gumQ0Answer.optionId] || '';

        displayMessage = `## 🦷 ${symptom} 상담 결과

안녕하세요, 고덕퍼스트치과 원장입니다.

말씀해주신 증상을 잘 들었습니다. **${symptom}**으로 불편하시고 걱정 많으셨죠.

${diseaseNote ? `${diseaseNote}\n` : ''}

### 원장으로서 말씀드리고 싶은 점

잇몸이 불편한 경우, 일상생활까지 지장이 있습니다.
초기에는 단순히 진통제만 먹고 나을 수 있습니다만, 그대로 방치되는 순간 잇몸염증이 커져서 흔들려서 오게 되면 치과에서 치료를 할 수 없어 발치해야 하는 안타까운 순간이 올 수 있습니다.

**잇몸이 불편한 경우, 치아의 문제인지 진짜 잇몸의 문제인지 조기판단이 매우 중요합니다.**
- 치아의 문제라면 정확한 진단을 한 뒤, 치료계획이 필요합니다.
- 잇몸의 문제라면 치석제거, 잇몸치료 등의 적극적인 잇몸케어로 치아를 장기적으로 보존할 수 있도록 하는 치주(잇몸)치료가 필요합니다.

${symptomExplanation}

### 잇몸치료 과정

1. **1단계: 스케일링** - 치석 제거로 염증 원인 제거
2. **2단계: 치주치료** - 잇몸 밑 깊은 곳의 치석과 세균막 제거
3. **3단계: 유지관리** - 정기적 관리로 재발 방지

### 고덕퍼스트치과 잇몸치료 특징

✅ **치주과 전문의 협진** - 필요 시 전문의와 함께 치료
✅ **미세현미경 활용** - 정밀한 치료로 치료 효과 극대화
✅ **체계적인 관리 시스템** - 치료 후에도 꾸준한 관리

### 치료비 안내

- **스케일링**: 건강보험 적용 (1년 1회 보험, 1.5~1.6만원)
- **치주치료**: 정도에 따라 다양 (상담 시 정확히 안내)

---

**혹시, 시리거나 치과공포증 때문에 두려우신가요?**

통증완화시스템과 필요 시 의식하진정요법을 통한 수면마취치료도 가능하니 주저하지 마시고 내원해주세요.
- 가글마취 → 전동무통마취 → 수면마취

> 💬 **원장 한마디**: 잇몸 문제는 방치하면 치아를 잃을 수 있습니다. 지금 불편하시다면, 가능한 빨리 한번 봐드리고 싶습니다. 정확한 상태 확인 후 치료가 필요한지, 어느 정도 치료가 필요한지 솔직하게 말씀드리겠습니다.`;

        console.log('🦷 [잇몸 상담] 종합 추천 생성 완료');
        console.log('🦷 [잇몸 상담] 증상:', symptom);
        console.log('🦷 [잇몸 상담] 전신질환:', gumQ2Answer.optionId);
        console.log('🦷 [잇몸 상담] 케이스 이미지:', caseImages.length, '개');

        // 잇몸치료 종합 추천 응답 반환
        return NextResponse.json({
          content: displayMessage,
          caseImages: caseImages.length > 0 ? caseImages : undefined,
          structuredQuestion: undefined,
          isRecommendation: true,
          skipPhoneOption: false // 전화 상담 옵션 표시
        });
      }

      // ============================================================
      // 🦷 충치/신경/보철치료 상담 처리
      // Q1: 증상 선택 (cavity_pain, cavity_sensitive, cavity_broken, cavity_eating, cavity_dark, cavity_brushing)
      // Q2: 당일진료 희망여부 (cavity_same_day_yes, cavity_same_day_no)
      // → 답안 1-4 결정 → 최종 추천 표시
      // ============================================================
      const cavityQ1Options = ['cavity_pain', 'cavity_sensitive', 'cavity_broken', 'cavity_eating', 'cavity_dark', 'cavity_brushing'];
      const cavityQ2Options = ['cavity_same_day_yes', 'cavity_same_day_no'];

      const cavityQ1Answer = answerHistory.find(a => cavityQ1Options.includes(a.optionId));
      const cavityQ2Answer = answerHistory.find(a => cavityQ2Options.includes(a.optionId));

      // Q1 + Q2 응답이 모두 있을 때 충치/신경치료 종합 추천 표시
      if (cavityQ1Answer && cavityQ2Answer) {
        isRecommendation = true;
        structuredQuestion = null;

        // 답안 유형 결정 (Q1 옵션에 따라)
        const answerTypeMap: Record<string, 'answer1' | 'answer2' | 'answer3' | 'answer4'> = {
          'cavity_pain': 'answer1',      // 치아가 아파요 → 심한충치/신경치료
          'cavity_sensitive': 'answer2', // 치아가 시려요 → 충치(보철)치료
          'cavity_broken': 'answer3',    // 치아가 깨졌어요 → 보철치료/신경치료
          'cavity_eating': 'answer4',    // 식사할 때 불편해요 → 진단 필요
          'cavity_dark': 'answer2',      // 치아가 검게 보여요 → 충치(보철)치료
          'cavity_brushing': 'answer4'   // 양치할 때 불편해요 → 진단 필요
        };
        const answerType = answerTypeMap[cavityQ1Answer.optionId] || 'answer1';

        // 증상별 공감 메시지
        const symptomMessages: Record<string, string> = {
          'cavity_pain': '치아가 아프시군요. 통증으로 많이 힘드셨을 것 같습니다.',
          'cavity_sensitive': '치아가 시리시군요. 찬 음식을 드실 때마다 불편하셨겠어요.',
          'cavity_broken': '치아가 깨지셨군요. 갑작스러운 상황에 많이 놀라셨을 것 같습니다.',
          'cavity_eating': '식사할 때 불편하시군요. 매일 겪는 불편함이 큰 스트레스였겠어요.',
          'cavity_dark': '치아가 검게 보이시군요. 신경이 많이 쓰이셨을 것 같습니다.',
          'cavity_brushing': '양치할 때 불편하시군요. 일상적인 관리조차 힘드셨겠어요.'
        };
        const empathyMessage = symptomMessages[cavityQ1Answer.optionId] || '불편하셨겠습니다.';

        // 병원 강점 (모든 답안에 공통)
        const clinicStrengths = `
### 🏆 신경치료 전문 고덕퍼스트치과의 강점

1. **통합치의학과 전문의 이동현 원장**
   - 조선대학교 치과병원 외래교수 출신
   - 자연치아 보존에 대한 전문성

2. **미세현미경 신경치료 가능**
   - 25배 확대로 정밀한 치료
   - 육안으로 보이지 않는 미세 신경관까지 치료

3. **대학병원급 고난도 시술 가능**
   - 재신경치료, 치근단절제술
   - 타 병원에서 어려운 케이스도 치료

4. **자연치아 보존주의**
   - 최대한 치아를 살리는 치료 철학
   - 무분별한 발치 지양`;

        // 답안별 케이스 설명 및 이미지
        let answerContent = '';

        if (answerType === 'answer1') {
          // 답안1: 치아가 아파요 → 심한충치/치수염 신경치료
          caseImages = getCaseImagesForTreatment('cavity_nerve_answer1', 5) || [];
          answerContent = `
### 📋 예상되는 치료

치아가 아픈 경우, 다음과 같은 치료가 필요할 수 있습니다:

**1) 충치가 심해서 신경치료가 필요한 경우**
- 충치가 신경까지 진행되면 극심한 통증 발생
- 신경치료 후 크라운(보철) 씌워서 마무리
- 치료기간: 2-3주 (신경치료 2-3회 + 보철)

**2) 신경치료했던 치아 뿌리에 염증이 생긴 경우 (재신경치료)**
- 예전에 신경치료 받은 치아가 다시 아픈 경우
- 미세현미경으로 정밀 재신경치료
- 고난이도 시술 - 이동현 전문의 직접 시술

> ⚠️ **중요**: 아픈 경우 일상생활에 지장이 생길 수 있습니다. 늦은 밤에는 응급실을 찾게 되는 경우도 있으니, **가능한 빨리 내원**해 주시길 권해드립니다.`;
        } else if (answerType === 'answer2') {
          // 답안2: 치아가 시려요/검게보여요 → 충치(보철)치료
          caseImages = getCaseImagesForTreatment('cavity_nerve_answer2', 4) || [];
          answerContent = `
### 📋 예상되는 치료

치아가 시리거나 검게 보이는 경우, 충치가 있을 수 있습니다:

**1) 범위가 작은 간단한 충치 → 레진치료**
- 충치 제거 후 치아색 레진으로 메움
- **당일 완료** 가능
- 치료시간: 30분-1시간

**2) 범위가 깊고 큰 충치 → 인레이 보철치료**
- 충치 범위가 넓어 레진으로 부족한 경우
- 정밀한 인레이(세라믹/금) 제작하여 접착
- 치료기간: **2-3일** 소요 (본뜨기 → 제작 → 접착)

> 💡 정확한 치료 범위는 X-ray 촬영 후 확인이 필요합니다.`;
        } else if (answerType === 'answer3') {
          // 답안3: 치아가 깨졌어요 → 보철치료/신경치료 또는 발치
          caseImages = [
            ...(getCaseImagesForTreatment('cavity_nerve_answer3', 4) || []),
            ...(getCaseImagesForTreatment('cavity_nerve_answer3_extraction', 2) || [])
          ];
          answerContent = `
### 📋 예상되는 치료

치아가 깨진 경우, 최대한 치아를 보존해서 치료합니다:

**1) 보존치료가 가능한 경우**
- 신경치료 후 크라운(보철) 씌워서 보호
- 깨진 부분이 치아 뿌리까지 가지 않은 경우 가능
- 치료기간: 2-3주

**2) 보존이 불가능한 경우 (발치)**
- 치아가 뿌리까지 파절된 경우
- 발치 후 임플란트 또는 브릿지로 회복
- 정확한 진단 후 최선의 방법 결정

> ⚠️ **중요**: 파절의 경우 **발치해야 할 위험**이 있으니, 가능한 빨리 내원하시길 권해드립니다. 빨리 오실수록 살릴 수 있는 확률이 높아집니다.`;
        } else {
          // 답안4: 식사/양치할 때 불편해요 → 치아/잇몸 문제 진단 필요
          caseImages = getCaseImagesForTreatment('cavity_nerve_answer4', 4) || [];
          answerContent = `
### 📋 예상되는 치료

식사할 때나 양치할 때 불편한 경우, **치아 문제 또는 잇몸 문제**일 수 있어 정확한 진단이 필요합니다:

**1) 치아 자체가 불편한 경우**
- 치아와 잇몸 경계부위가 시리거나 불편한 경우
- 치경부 마모, 잇몸 퇴축 등 다양한 원인 가능
- 정확한 진단 후 레진 충전 또는 지각과민 치료

**2) 잇몸이 좋지 않아 불편한 경우**
- 잇몸 염증, 치주염 등
- 스케일링, 잇몸치료로 건강한 잇몸 회복 필요
- 방치 시 치아 흔들림, 발치로 이어질 수 있음

> 💡 정확한 원인 파악을 위해 **X-ray 및 구강검진**이 필요합니다.`;
        }

        // 당일진료 여부에 따른 CTA
        const sameDayCTA = cavityQ2Answer.optionId === 'cavity_same_day_yes'
          ? `\n\n### 📞 당일 진료 안내\n당일 진료를 희망하신다고 하셨네요! 가능한 빨리 치료받으실 수 있도록 도와드리겠습니다.\n\n**오늘 예약 가능 여부**를 확인해드릴게요. 담당자가 곧 연락드리겠습니다.`
          : `\n\n### 📞 상담 예약 안내\n먼저 상담을 받아보고 싶으시군요. 정확한 진단 후 치료 계획을 세워드리겠습니다.\n\n담당자가 곧 연락드려 **무료 상담 예약**을 도와드리겠습니다.`;

        // 최종 메시지 조합
        displayMessage = `## 🦷 충치/신경/보철치료 상담 결과

${empathyMessage}

${clinicStrengths}

---

${answerContent}

${sameDayCTA}

---

> 💬 **원장 한마디**: 치아가 불편하면 일상생활이 힘들어집니다. 조기에 치료하면 간단하게 끝날 수 있는 것도, 방치하면 신경치료나 발치까지 이어질 수 있습니다. 지금 불편하시다면 가능한 빨리 한번 봐드리고 싶습니다.`;

        console.log('🦷 [충치/신경치료 상담] 종합 추천 생성 완료');
        console.log('🦷 [충치/신경치료 상담] 답안 유형:', answerType);
        console.log('🦷 [충치/신경치료 상담] 케이스 이미지:', caseImages.length, '개');

        // 충치/신경치료 종합 추천 응답 반환
        return NextResponse.json({
          content: displayMessage,
          caseImages: caseImages.length > 0 ? caseImages : undefined,
          structuredQuestion: undefined,
          isRecommendation: true,
          skipPhoneOption: false
        });
      }

      if (questionCount === 0) {
        // First question: Display simple greeting message (language-specific)
        const greetings = {
          ko: `안녕하세요! 고덕퍼스트치과 AI 상담사입니다. ${consultationTopic} 치료에 관심 가져주셔서 감사합니다.\n\n고객님께 가장 적합한 치료를 추천해드리기 위해 몇 가지 질문을 드리겠습니다. 편하게 답변해 주세요!`,
          en: `Hello! I'm the AI consultant at Godeok First Dental Clinic. Thank you for your interest in ${consultationTopic} treatment.\n\nI'll ask you a few questions to recommend the most suitable treatment for you. Please answer comfortably!`,
          jp: `こんにちは！ゴドクファースト歯科のAIコンサルタントです。${consultationTopic}治療にご関心をお寄せいただきありがとうございます。\n\nお客様に最適な治療をお勧めするため、いくつか質問させていただきます。お気軽にお答えください！`,
          cn: `您好！我是高德First牙科诊所的AI顾问。感谢您对${consultationTopic}治疗的关注。\n\n我将向您提出几个问题，以推荐最适合您的治疗方案。请随意回答！`,
          vi: `Xin chào! Tôi là tư vấn viên AI tại Nha khoa Godeok First. Cảm ơn bạn đã quan tâm đến điều trị ${consultationTopic}.\n\nTôi sẽ hỏi bạn một vài câu hỏi để đề xuất phương pháp điều trị phù hợp nhất. Hãy thoải mái trả lời!`,
          mn: `Сайн байна уу! Би Godeok First шүдний эмнэлгийн AI зөвлөх юм. ${consultationTopic} эмчилгээнд сонирхол тавьсанд баярлалаа.\n\nТанд хамгийн тохиромжтой эмчилгээг санал болгохын тулд хэдэн асуулт асууя. Чөлөөтэй хариулна уу!`,
          uz: `Assalomu alaykum! Men Godeok First stomatologiya klinikasining AI maslahatchisiman. ${consultationTopic} davolashga qiziqishingiz uchun rahmat.\n\nSizga eng mos davolashni tavsiya qilish uchun bir nechta savol beraman. Erkin javob bering!`,
          ru: `Здравствуйте! Я AI-консультант стоматологической клиники Godeok First. Спасибо за интерес к лечению ${consultationTopic}.\n\nЯ задам вам несколько вопросов, чтобы порекомендовать наиболее подходящее лечение. Пожалуйста, отвечайте свободно!`,
          th: `สวัสดีครับ/ค่ะ! ผม/ดิฉันคือที่ปรึกษา AI ที่คลินิกทันตกรรม Godeok First ขอบคุณที่สนใจการรักษา${consultationTopic}\n\nผม/ดิฉันจะถามคำถามสักสองสามข้อเพื่อแนะนำการรักษาที่เหมาะสมที่สุดสำหรับคุณ กรุณาตอบอย่างสบายใจ!`
        };
        displayMessage = greetings[language] || greetings.en;
      } else {
        // 2-5번째 질문: AI 응답 JSON 파싱 (공감 + 장점 어필 + 질문)
        const parseAIResponse = (response: string) => {
          // 1. 먼저 그대로 JSON 파싱 시도
          try {
            return JSON.parse(response);
          } catch {
            // 2. 코드 블록 안에 JSON이 있는 경우 추출
            const jsonMatch = response.match(/```(?:json)?\s*([\s\S]*?)```/);
            if (jsonMatch) {
              try {
                return JSON.parse(jsonMatch[1].trim());
              } catch {
                // continue to next method
              }
            }
            // 3. { } 사이의 JSON 추출 시도
            const braceMatch = response.match(/\{[\s\S]*\}/);
            if (braceMatch) {
              try {
                return JSON.parse(braceMatch[0]);
              } catch {
                // continue
              }
            }
            return null;
          }
        };

        const parsed = parseAIResponse(assistantMessage);

        if (parsed && parsed.message) {
          displayMessage = parsed.message;

          // AI 응답에서 질문/선택지 추출 (question-generator.ts에 없는 경우 사용)
          if (parsed.question && parsed.options && Array.isArray(parsed.options)) {
            // generateNextQuestion이 null이거나 AI 생성 질문이 더 적합한 경우
            if (!structuredQuestion) {
              structuredQuestion = {
                question: parsed.question,
                options: parsed.options.map((opt: string, idx: number) => ({
                  id: `ai_option_${idx}`,
                  text: opt
                })),
                allowCustomInput: parsed.options.some((o: string) => o.includes('없음')) || questionCount === 5
              };
              console.log('🤖 AI 생성 질문 사용:', structuredQuestion);
            }
          }
        } else {
          // JSON 파싱 완전 실패시 기본 메시지
          const defaultMessages = {
            ko: '답변 감사합니다. 다음 질문에 답변해 주세요.',
            en: 'Thank you for your answer. Please answer the next question.',
            jp: 'ご回答ありがとうございます。次の質問にお答えください。',
            cn: '感谢您的回答。请回答下一个问题。',
            vi: 'Cảm ơn câu trả lời của bạn. Xin vui lòng trả lời câu hỏi tiếp theo.',
            mn: 'Хариултанд баярлалаа. Дараагийн асуултанд хариулна уу.',
            uz: 'Javobingiz uchun rahmat. Iltimos, keyingi savolga javob bering.',
            ru: 'Спасибо за ваш ответ. Пожалуйста, ответьте на следующий вопрос.',
            th: 'ขอบคุณสำหรับคำตอบของคุณ กรุณาตอบคำถามถัดไป'
          };
          displayMessage = defaultMessages[language] || defaultMessages.en;
          console.log('⚠️ JSON 파싱 실패, 원본:', assistantMessage.substring(0, 200));
        }
      }

      console.log('✅ 구조화된 질문:', structuredQuestion);

      // 🔄 질문 트리가 없고 AI도 질문을 생성하지 않았을 때 fallback 질문 생성
      if (!structuredQuestion && questionCount < 6) {
        // 기본 fallback 질문들 (순차적으로 제공)
        const fallbackQuestions: Record<string, { question: string; options: Array<{id: string; text: string}> }[]> = {
          ko: [
            {
              question: "치료에서 가장 중요하게 생각하시는 부분은 무엇인가요?",
              options: [
                { id: "priority_cost", text: "저렴한 비용" },
                { id: "priority_fear", text: "치과공포 해소" },
                { id: "priority_time", text: "치료기간" },
                { id: "priority_result", text: "치료결과" }
              ]
            },
            {
              question: "지금까지 치료를 망설이고 있는 이유가 있으신가요?",
              options: [
                { id: "hesitation_cost", text: "비용 때문에" },
                { id: "hesitation_fear", text: "통증/치과공포증 때문에" },
                { id: "hesitation_clinic", text: "적절한 치과 선택이 어려워서" },
                { id: "hesitation_none", text: "특별한 이유 없어요" }
              ]
            },
            {
              question: "혹시 예전에 심혈관 관련 수술을 받았거나 전신질환이 있으신가요?",
              options: [
                { id: "disease_medication", text: "매일 복용하는 약이 있어요" },
                { id: "disease_heart", text: "심장, 혈관 관련 수술 경험" },
                { id: "disease_bp_diabetes", text: "고혈압/당뇨" },
                { id: "disease_none", text: "없습니다" }
              ]
            }
          ],
          en: [
            {
              question: "What is most important to you in treatment?",
              options: [
                { id: "priority_cost", text: "Affordable cost" },
                { id: "priority_fear", text: "Overcoming dental anxiety" },
                { id: "priority_time", text: "Treatment duration" },
                { id: "priority_result", text: "Treatment results" }
              ]
            },
            {
              question: "Is there a reason you've been hesitant about treatment?",
              options: [
                { id: "hesitation_cost", text: "Due to cost" },
                { id: "hesitation_fear", text: "Due to pain/dental phobia" },
                { id: "hesitation_clinic", text: "Difficulty choosing a clinic" },
                { id: "hesitation_none", text: "No particular reason" }
              ]
            },
            {
              question: "Have you had any cardiovascular surgery or have any systemic conditions?",
              options: [
                { id: "disease_medication", text: "I take daily medication" },
                { id: "disease_heart", text: "Heart/vascular surgery history" },
                { id: "disease_bp_diabetes", text: "Hypertension/Diabetes" },
                { id: "disease_none", text: "None" }
              ]
            }
          ]
        };

        const langFallbacks = fallbackQuestions[language] || fallbackQuestions.en;

        // ⚠️ 이미 전신질환에 답변했는지 체크 (중복 질문 방지)
        const diseaseOptionIds = ['disease_medication', 'disease_heart', 'disease_bp_diabetes', 'disease_osteoporosis', 'disease_other', 'disease_none'];
        const alreadyAnsweredDisease = answerHistory.some(answer => {
          const optionIds = answer.optionId.split(',');
          return optionIds.some(id => diseaseOptionIds.includes(id.trim()));
        });

        // ⚠️ 이미 우선순위 질문에 답변했는지 체크 (중복 질문 방지)
        const priorityOptionIds = ['priority_cost', 'priority_fear', 'priority_time', 'priority_result', 'priority_speed'];
        const alreadyAnsweredPriority = answerHistory.some(answer => {
          const optionIds = answer.optionId.split(',');
          return optionIds.some(id => priorityOptionIds.includes(id.trim()));
        });

        // ⚠️ 이미 망설임 이유 질문에 답변했는지 체크 (중복 질문 방지)
        const hesitationOptionIds = ['hesitation_cost', 'hesitation_fear', 'hesitation_clinic', 'hesitation_none', 'hesitation_time', 'hesitation_result'];
        const alreadyAnsweredHesitation = answerHistory.some(answer => {
          const optionIds = answer.optionId.split(',');
          return optionIds.some(id => hesitationOptionIds.includes(id.trim()));
        });

        console.log('🔍 [Fallback 중복체크] 우선순위:', alreadyAnsweredPriority, '망설임:', alreadyAnsweredHesitation, '전신질환:', alreadyAnsweredDisease);

        // 세 질문 모두 답변했으면 추천 단계로 이동
        if (alreadyAnsweredPriority && alreadyAnsweredHesitation && alreadyAnsweredDisease) {
          console.log('✅ [Fallback] 모든 fallback 질문 완료 - 추천 단계로 이동');
          isRecommendation = true;

          // 최종 추천 케이스 이미지 및 영상 추가
          const finalTreatmentsForFallback = intentAnalysis.recommendedTreatments || [];
          console.log('🎯 [Fallback 추천] 최종 치료:', finalTreatmentsForFallback);

          // 케이스 이미지 추가
          caseImages = getCaseImagesForMultipleTreatments(finalTreatmentsForFallback, 5, language);

          // 영상 추가
          if (finalTreatmentsForFallback.includes('all_on_x')) {
            videoIframes.push(
              '<iframe src="https://www.youtube.com/embed/9kP02X04THc" allowfullscreen></iframe>',
              '<iframe src="https://www.youtube.com/embed/GyzFVUfRqmk" allowfullscreen></iframe>',
              '<iframe src="https://www.youtube.com/embed/wZYlF4IJYd4" allowfullscreen></iframe>'
            );
          } else if (finalTreatmentsForFallback.includes('whitening') || finalTreatmentsForFallback.includes('laminate')) {
            videoIframes.push('<iframe src="https://www.youtube.com/embed/4hJI8OteG3Q" allowfullscreen></iframe>');
          } else if (finalTreatmentsForFallback.includes('wisdom_tooth')) {
            videoIframes.push('<iframe src="https://www.youtube.com/embed/SmjM0-MCGX4" allowfullscreen></iframe>');
          } else if (finalTreatmentsForFallback.includes('nerve_treatment') || finalTreatmentsForFallback.includes('cavity')) {
            videoIframes.push('<iframe src="https://www.youtube.com/embed/pSSexzE2wXY" allowfullscreen></iframe>');
            videoIframes.push('<iframe src="https://www.youtube.com/embed/tUYS2ov5C9w" allowfullscreen></iframe>');
          } else if (finalTreatmentsForFallback.includes('gum_care') || finalTreatmentsForFallback.includes('scaling')) {
            videoIframes.push('<iframe src="https://www.youtube.com/embed/m9GC1rlL-vE" allowfullscreen></iframe>');
          } else if (finalTreatmentsForFallback.some(t => t.includes('implant') || t === 'digital_implant')) {
            videoIframes.push('<iframe src="https://www.youtube.com/embed/9kP02X04THc" allowfullscreen></iframe>');
          }

          // 수면 카드 표시된 경우 수면 영상 추가
          if (sedationCard || sedationCardShown) {
            videoIframes.push('<iframe src="https://www.youtube.com/embed/WB3M_Uw5X_s" allowfullscreen></iframe>');
            console.log('📹 [Fallback 추천] 수면치료 영상 추가');
          }
        } else {
          // questionCount에 따라 fallback 질문 선택 (0-based index 조정)
          let fallbackIndex = Math.min(questionCount - 1, langFallbacks.length - 1);

          // 선택된 질문이 이미 답변된 경우 다른 질문으로 대체
          const findAvailableFallback = (): number => {
            // 우선순위: 우선순위(0) → 망설임(1) → 전신질환(2)
            if (!alreadyAnsweredPriority) return 0;
            if (!alreadyAnsweredHesitation) return 1;
            if (!alreadyAnsweredDisease) return 2;
            return -1; // 모두 답변됨
          };

          // 현재 선택된 질문이 이미 답변된 경우
          if ((fallbackIndex === 0 && alreadyAnsweredPriority) ||
              (fallbackIndex === 1 && alreadyAnsweredHesitation) ||
              (fallbackIndex === 2 && alreadyAnsweredDisease)) {
            fallbackIndex = findAvailableFallback();
            console.log('🚫 [Fallback] 현재 질문 이미 답변 - 대체 질문 사용 (index', fallbackIndex, ')');
          }

          if (fallbackIndex >= 0 && fallbackIndex < langFallbacks.length) {
            const fallback = langFallbacks[fallbackIndex];
            structuredQuestion = {
              question: fallback.question,
              options: fallback.options,
              allowCustomInput: true
            };
            console.log('🔄 Fallback 질문 사용 (질문트리 없음):', structuredQuestion.question);
          }
        }
      }

      // 💰 모든 상담 유형에서 비용 선택 시 "양심진료" 문구 강제 삽입 (여기서 실행해야 displayMessage 덮어쓰기 후에 적용됨)
      const isCostSelectedForMessage = answerHistory.some((answer, idx) => {
        const costKeywords = ['비용', 'cost', '저렴', '가격', '費用', '费用', 'affordable', 'cheap', 'price'];
        return (idx === 2 || idx === 3 || idx === 4) && // Q3, Q4, Q5
          costKeywords.some(keyword => answer.optionText.toLowerCase().includes(keyword.toLowerCase()));
      });

      if (isCostSelectedForMessage && questionCount >= 4 && questionCount <= 6) {
        const conscientiousCareMsg: Record<string, string> = {
          ko: '\n\n💚 **비용이 걱정되시죠.** 저희가 10년간 같은 자리에서 좋은 평판을 유지할 수 있었던 건, **과잉진료 없이 양심진료**를 해왔기 때문이에요. 꼭 필요한 치료만 정직하게 권해드리니 안심하세요.',
          en: '\n\n💚 **Worried about costs?** We\'ve maintained a great reputation in the same location for 10 years because we practice **conscientious care without over-treatment**. We honestly recommend only the treatments you truly need, so please rest assured.',
          jp: '\n\n💚 **費用が心配ですね。** 10年間同じ場所で良い評判を維持できたのは、**過剰診療なしで良心的な診療**を行ってきたからです。本当に必要な治療だけを正直におすすめしますので、ご安心ください。',
          cn: '\n\n💚 **担心费用吗？** 我们能在同一个地方保持10年的良好声誉，是因为我们一直**不过度治疗，良心诊疗**。我们只诚实地推荐您真正需要的治疗，请放心。',
          vi: '\n\n💚 **Lo lắng về chi phí?** Chúng tôi đã duy trì danh tiếng tốt tại cùng một địa điểm trong 10 năm vì chúng tôi thực hành **điều trị lương tâm không quá mức**. Chúng tôi chỉ thành thật đề xuất những điều trị bạn thực sự cần, vì vậy hãy yên tâm.',
          th: '\n\n💚 **กังวลเรื่องค่าใช้จ่ายใช่ไหม?** เรารักษาชื่อเสียงที่ดีในที่เดิมมา 10 ปีเพราะเราปฏิบัติ**การรักษาอย่างมีจิตสำนึกโดยไม่รักษาเกินจำเป็น** เราแนะนำเฉพาะการรักษาที่คุณต้องการจริงๆ อย่างซื่อสัตย์ โปรดวางใจ',
          ru: '\n\n💚 **Беспокоитесь о стоимости?** Мы поддерживаем хорошую репутацию на одном месте 10 лет, потому что практикуем **добросовестное лечение без избыточных процедур**. Мы честно рекомендуем только те процедуры, которые вам действительно нужны, так что будьте спокойны.',
          mn: '\n\n💚 **Зардлын талаар санаа зовж байна у|?** Бид 10 жилийн турш нэг газарт сайн нэр хүндтэй байсан нь **шаардлагагүй эмчилгээгүйгээр шударга эмчилгээ** хийсэнтэй холбоотой. Бид зөвхөн танд үнэхээр хэрэгтэй эмчилгээг шударгаар санал болгодог тул санаа зовох хэрэггүй.',
          uz: '\n\n💚 **Xarajatlar haqida xavotirdamisiz?** Biz 10 yil davomida bir joyda yaxshi obro\'ni saqlab qoldik, chunki biz **ortiqcha davolanmasdan vijdonli davolash**ni amalda qo\'llaymiz. Biz faqat sizga haqiqatan ham kerak bo\'lgan davolashlarni halol tavsiya qilamiz, shuning uchun xotirjam bo\'ling.'
        };

        const msgToAppend = conscientiousCareMsg[language] || conscientiousCareMsg.en;

        // displayMessage에 양심진료 문구가 이미 있는지 확인 (중복 방지)
        const alreadyHasMessage = displayMessage.includes('양심진료') ||
                                   displayMessage.includes('conscientious') ||
                                   displayMessage.includes('過剰診療') ||
                                   displayMessage.includes('过度治疗') ||
                                   displayMessage.includes('10년간') ||
                                   displayMessage.includes('10 years');

        if (!alreadyHasMessage) {
          displayMessage = displayMessage + msgToAppend;
          console.log('💚 [양심진료] 비용 선택 감지 - 양심진료 문구 강제 삽입 (displayMessage 설정 후)');
        }
      }

      console.log('📝 표시할 메시지:', displayMessage);
    }

    // 8번째 응답(추가 질문 단계 완료 후) 최종 추천
    // 흐름: 0-5번 질문 (Q1-Q5) → 6번 추가 질문 안내 → 7번 추가 질문 응답 → 8번+ 최종 추천
    if (questionCount >= 8) {
      isRecommendation = true;
      structuredQuestion = null; // 최종 추천 단계에서는 질문 완전히 제거

      // AI 응답에서 추천 치료 키워드 추출 (추천 문맥에서만)
      const extractTreatmentsFromResponse = (message: string): string[] => {
        const treatments: string[] = [];
        const lowerMessage = message.toLowerCase();

        // "추천", "권장", "적합", "치료" 등의 추천 문맥 키워드 확인
        const hasRecommendationContext =
          lowerMessage.includes('추천') ||
          lowerMessage.includes('권장') ||
          lowerMessage.includes('적합') ||
          lowerMessage.includes('제안') ||
          lowerMessage.includes('권유') ||
          lowerMessage.includes('고려');

        // 추천 문맥이 없으면 빈 배열 반환
        if (!hasRecommendationContext) {
          return [];
        }

        // 키워드 매핑 (우선순위 높은 것부터)
        const keywords: Array<{ pattern: string; treatment: string; priority: number }> = [
          // 높은 우선순위 (구체적인 치료)
          { pattern: '디지털 임플란트', treatment: 'digital_implant', priority: 3 },
          { pattern: '올온엑스', treatment: 'all_on_x', priority: 3 },
          { pattern: 'all-on', treatment: 'all_on_x', priority: 3 },
          { pattern: '전체 임플란트', treatment: 'all_on_x', priority: 3 },
          { pattern: '라미네이트', treatment: 'laminate', priority: 3 },
          { pattern: '신경치료', treatment: 'nerve_treatment', priority: 3 },

          // 중간 우선순위
          { pattern: '임플란트', treatment: 'implant', priority: 2 },
          { pattern: 'implant', treatment: 'implant', priority: 2 },
          { pattern: '사랑니', treatment: 'wisdom_tooth', priority: 2 },
          { pattern: '미백', treatment: 'whitening', priority: 2 },
          { pattern: '크라운', treatment: 'crown_bridge', priority: 2 },
          { pattern: '브릿지', treatment: 'crown_bridge', priority: 2 },
          { pattern: '레진', treatment: 'resin', priority: 2 },

          // 낮은 우선순위 (일반적인 용어, 추천 문맥에서만)
          { pattern: '충치치료', treatment: 'nerve_treatment', priority: 1 },
          { pattern: '잇몸치료', treatment: 'gum_care', priority: 1 },
          { pattern: '치주치료', treatment: 'gum_care', priority: 1 },
        ];

        // 우선순위별로 정렬하여 검사
        const sortedKeywords = keywords.sort((a, b) => b.priority - a.priority);

        for (const { pattern, treatment } of sortedKeywords) {
          if (lowerMessage.includes(pattern) && !treatments.includes(treatment)) {
            treatments.push(treatment);
          }
        }

        return treatments;
      };

      // 전체 대화 내역을 분석하여 전체 임플란트가 필요한지 판단
      const needsFullArchImplant = (messages: ChatMessage[]): boolean => {
        // 1. answerHistory에서 optionId로 직접 체크 (가장 정확함)
        const fullArchOptionIds = [
          'missing_upper_all',  // 윗니 전체가 없거나 발치 예정
          'missing_lower_all',  // 아랫니 전체가 없거나 발치 예정
          'missing_all'         // 거의 모든 치아가 없거나 발치 예정
        ];
        const hasFullArchOption = answerHistory.some(answer =>
          fullArchOptionIds.includes(answer.optionId)
        );

        if (hasFullArchOption) {
          console.log('🦷 [최종추천 전체임플란트 체크] optionId로 확인: true');
          return true;
        }

        // 2. 사용자 메시지로 체크 (fallback)
        const userContent = messages
          .filter(m => m.role === 'user')
          .map(m => m.content.toLowerCase())
          .join(' ');

        // 전체 임플란트가 필요한 키워드 (다국어 지원)
        const fullArchKeywords = [
          '전체가 없', '전체 없',  // 한국어: "윗니 한쪽 전체가 없어요"
          '거의 모든 치아',
          '틀니를 사용', '틀니 사용', '현재 틀니',
          'all of my upper teeth', 'all of my lower teeth',
          'almost all of my teeth', 'using dentures', 'currently using dentures',
          '歯が全部', '全部ありません',
          'ほぼ全ての歯', '入れ歯を使用',
          '牙齿全部缺失', '全部缺失',
          '几乎所有牙齿', '使用假牙', '正在使用假牙'
        ];

        const isFullArch = fullArchKeywords.some(keyword => userContent.includes(keyword.toLowerCase()));
        console.log('🦷 [최종추천 전체임플란트 체크] isFullArch:', isFullArch);
        return isFullArch;
      };

      // consultationTopic 기반으로 치료 타입 매핑
      const mapConsultationTopicToTreatments = (topic: string, messages: ChatMessage[]): string[] => {
        const topicLower = topic.toLowerCase();

        // Implant / 임플란트 / インプラント / 种植牙
        if (topicLower.includes('implant') || topicLower.includes('임플란트') ||
            topicLower.includes('インプラント') || topicLower.includes('种植牙')) {
          // 대화 내용을 분석해서 전체 임플란트 vs 일반 임플란트 결정
          if (needsFullArchImplant(messages)) {
            return ['all_on_x']; // 전체 임플란트만
          } else {
            return ['implant', 'digital_implant']; // 일반 임플란트
          }
        }

        // Root Canal / 신경치료 / 神経治療 / 根管治疗
        if (topicLower.includes('root canal') || topicLower.includes('신경치료') ||
            topicLower.includes('神経治療') || topicLower.includes('根管治疗')) {
          return ['nerve_treatment'];
        }

        // Prosthetics / 보철 / 補綴 / 修复
        if (topicLower.includes('prosthetics') || topicLower.includes('crown') ||
            topicLower.includes('보철') || topicLower.includes('크라운') ||
            topicLower.includes('補綴') || topicLower.includes('クラウン') ||
            topicLower.includes('修复') || topicLower.includes('牙冠')) {
          return ['crown_bridge', 'implant'];
        }

        // Cosmetic / Whitening / Laminate / 심미 / 미백 / 라미네이트 / 審美 / ホワイトニング / 美容 / 美白
        if (topicLower.includes('cosmetic') || topicLower.includes('whitening') || topicLower.includes('laminate') ||
            topicLower.includes('심미') || topicLower.includes('미백') || topicLower.includes('라미') ||
            topicLower.includes('審美') || topicLower.includes('ホワイトニング') || topicLower.includes('ラミネート') ||
            topicLower.includes('美容') || topicLower.includes('美白') || topicLower.includes('贴面')) {
          return ['whitening', 'laminate'];
        }

        // Wisdom Tooth / 사랑니 / 親知らず / 智齿
        if (topicLower.includes('wisdom') || topicLower.includes('사랑니') ||
            topicLower.includes('親知らず') || topicLower.includes('智齿')) {
          return ['wisdom_tooth'];
        }

        // Gum Care / 잇몸 / 케어 / 歯茎 / 牙龈
        if (topicLower.includes('gum') || topicLower.includes('care') ||
            topicLower.includes('잇몸') || topicLower.includes('케어') ||
            topicLower.includes('歯茎') || topicLower.includes('牙龈')) {
          return ['gum_care'];
        }

        // Cavity / 충치 / 虫歯 / 龋齿
        if (topicLower.includes('cavity') || topicLower.includes('충치') ||
            topicLower.includes('虫歯') || topicLower.includes('龋齿')) {
          return ['nerve_treatment'];
        }

        // TMJ / 턱관절 / 顎関節 / 颞下颌关节
        if (topicLower.includes('tmj') || topicLower.includes('턱관절') ||
            topicLower.includes('顎関節') || topicLower.includes('颞下颌关节')) {
          return []; // 턱관절은 케이스 이미지 없음
        }

        return [];
      };

      // 1순위: consultationTopic 기반 매핑
      const topicBasedTreatments = consultationTopic
        ? mapConsultationTopicToTreatments(consultationTopic, messages)
        : [];

      // 2순위: AI 응답에서 추천 치료 추출
      const extractedTreatments = extractTreatmentsFromResponse(assistantMessage);

      // 3순위: 초기 intent analysis 사용
      const finalTreatments = topicBasedTreatments.length > 0
        ? topicBasedTreatments
        : (extractedTreatments.length > 0 ? extractedTreatments : intentAnalysis.recommendedTreatments || []);

      const isImplantTopic = consultationTopic?.includes('임플란트') || false;
      console.log('🖼️ 케이스 이미지 선택:', {
        consultationTopic,
        needsFullArch: isImplantTopic ? needsFullArchImplant(messages) : false,
        topicBasedTreatments,
        extractedTreatments,
        initialTreatments: intentAnalysis.recommendedTreatments,
        finalTreatments
      });

      // 추천된 치료에 따라 케이스 이미지 선택
      if (finalTreatments.length > 0) {
        caseImages = getCaseImagesForMultipleTreatments(
          finalTreatments,
          5, // 각 치료당 최대 5개
          language // 언어 파라미터 전달
        );
      }

      // 추천된 치료에 따라 영상 iframe 선택 (롱폼 16:9 비율)
      if (finalTreatments.includes('all_on_x')) {
        // 전체 임플란트: 3개 영상 (총정리 1개 + 후기 2개)
        videoIframes.push(
          '<iframe src="https://www.youtube.com/embed/9kP02X04THc" allowfullscreen></iframe>',
          '<iframe src="https://www.youtube.com/embed/GyzFVUfRqmk" allowfullscreen></iframe>',
          '<iframe src="https://www.youtube.com/embed/wZYlF4IJYd4" allowfullscreen></iframe>'
        );
        console.log('📹 전체 임플란트 영상 3개 추가:', videoIframes);
      } else if (finalTreatments.includes('whitening') || finalTreatments.includes('laminate')) {
        // 심미치료 (미백/라미네이트): 1개 영상
        videoIframes.push('<iframe src="https://www.youtube.com/embed/4hJI8OteG3Q" allowfullscreen></iframe>');
        console.log('📹 심미치료(미백/라미네이트) 영상 1개 추가:', videoIframes);
      } else if (finalTreatments.includes('wisdom_tooth')) {
        // 사랑니: 1개 영상
        videoIframes.push('<iframe src="https://www.youtube.com/embed/SmjM0-MCGX4" allowfullscreen></iframe>');
        console.log('📹 사랑니 영상 1개 추가:', videoIframes);
      } else if (finalTreatments.includes('nerve_treatment') || finalTreatments.includes('cavity')) {
        // 충치/신경치료: 2개 영상
        videoIframes.push('<iframe src="https://www.youtube.com/embed/pSSexzE2wXY" allowfullscreen></iframe>');
        videoIframes.push('<iframe src="https://www.youtube.com/embed/tUYS2ov5C9w" allowfullscreen></iframe>');
        console.log('📹 충치/신경치료 영상 2개 추가:', videoIframes);
      } else if (finalTreatments.includes('gum_care') || finalTreatments.includes('scaling')) {
        // 잇몸치료/스케일링: 1개 영상
        videoIframes.push('<iframe src="https://www.youtube.com/embed/m9GC1rlL-vE" allowfullscreen></iframe>');
        console.log('📹 잇몸치료/스케일링 영상 1개 추가:', videoIframes);
      } else if (finalTreatments.some(t => t.includes('implant') || t === 'digital_implant')) {
        // 일반 임플란트: 1개 영상
        videoIframes.push('<iframe src="https://www.youtube.com/embed/9kP02X04THc" allowfullscreen></iframe>');
        console.log('📹 일반 임플란트 영상 1개 추가:', videoIframes);
      }

      // 💤 수면 카드 표시 여부 확인 (현재 요청 또는 이전에 카드가 표시됨)
      if (sedationCard || sedationCardShown) {
        videoIframes.push('<iframe src="https://www.youtube.com/embed/WB3M_Uw5X_s" allowfullscreen></iframe>');
        console.log('📹 수면치료(의식하진정) 영상 추가 - sedationCard:', !!sedationCard, 'sedationCardShown:', sedationCardShown);
      }
    }

    // 응답 반환
    return NextResponse.json({
      content: displayMessage,
      caseImages: caseImages.length > 0 ? caseImages : undefined,
      videoIframes: videoIframes.length > 0 ? videoIframes : undefined,
      structuredQuestion: structuredQuestion || undefined,
      isRecommendation,
      sedationCard,
      costWarningCard,
      // 심미 상담 전용 필드
      doctorCredentialCard,
      eventBannerCard,
      cosmeticPath,
      skipPhoneOption
    });

  } catch (error) {
    console.error('Chat API Error:', error);
    
    if (error instanceof Error && error.message.includes('API key')) {
      return NextResponse.json(
        { error: 'API 키 설정을 확인해주세요.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { error: '서버 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}