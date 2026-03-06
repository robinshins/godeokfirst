'use client';

import { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import Image from 'next/image';
import { ChatMessage, ConsultationData, ConsultationLog } from '@/lib/types';
import SedationAppealCard from './SedationAppealCard';
import CostWarningCard from './CostWarningCard';

interface ChatInterfaceProps {
  initialMessage?: string;
  language?: 'ko' | 'en' | 'jp' | 'cn' | 'vi' | 'th' | 'ru' | 'mn' | 'uz';
}

/**
 * 현재 한국 시간이 영업시간(평일 9시~18시)인지 확인
 */
const isWithinBusinessHours = (): boolean => {
  // 한국 시간대로 현재 시간 가져오기
  const now = new Date();
  const koreaTime = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Seoul' }));

  const dayOfWeek = koreaTime.getDay(); // 0 = 일요일, 1 = 월요일, ..., 6 = 토요일
  const hour = koreaTime.getHours();

  // 평일(월~금)이고 9시~18시 사이인지 확인
  const isWeekday = dayOfWeek >= 1 && dayOfWeek <= 5;
  const isBusinessHour = hour >= 9 && hour < 18;

  return isWeekday && isBusinessHour;
};

export default function ChatInterface({ initialMessage, language = 'ko' }: ChatInterfaceProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [consultationData, setConsultationData] = useState<ConsultationData | null>(null);
  // localStorage에서 consultationLogId 초기화 (상담 신청 시 생성된 ID)
  const [consultationLogId, setConsultationLogId] = useState<string | null>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('consultationLogId');
    }
    return null;
  });
  const isSavingLogRef = useRef(false);
  const [isSavingLogUI, setIsSavingLogUI] = useState(false); // UI 표시용
  const [questionCount, setQuestionCount] = useState(0);
  const [answerHistory, setAnswerHistory] = useState<Array<{ optionId: string; questionType: string; optionText: string }>>([]);
  const [showEndModal, setShowEndModal] = useState(false); // 상담 종료 모달
  const [isConsultationEnded, setIsConsultationEnded] = useState(false); // 상담 종료 여부 (모달 닫아도 유지)
  const [showRecommendationPopup, setShowRecommendationPopup] = useState(false); // 최종 추천 후 예약 유도 팝업
  const [cosmeticPath, setCosmeticPath] = useState<'whitening' | 'laminate' | null>(null); // 심미 경로 추적
  const [sedationCardShown, setSedationCardShown] = useState(false); // 수면 카드 표시 여부 추적
  const [bookingStep, setBookingStep] = useState<'options' | 'time_select' | 'complete'>('options'); // 예약 단계
  const [selectedCallTime, setSelectedCallTime] = useState<string | null>(null); // 선택한 통화 시간
  const [selectedBookingType, setSelectedBookingType] = useState<'naver' | 'phone' | null>(null); // 선택한 예약 타입
  const [multiSelectOptions, setMultiSelectOptions] = useState<string[]>([]); // 전신질환 다중 선택
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const lastMessageRef = useRef<HTMLDivElement>(null);

  /**
   * 전신질환 질문인지 확인 (options 중에 disease_로 시작하는 ID가 있으면)
   */
  const isDiseaseQuestion = (options: { id: string; text: string }[]): boolean => {
    return options.some(opt => opt.id.startsWith('disease_'));
  };

  /**
   * 전신질환 다중 선택 토글
   */
  const handleMultiSelectToggle = (optionId: string) => {
    if (optionId === 'disease_none') {
      // "없어요" 선택 시 다른 선택 모두 해제하고 "없어요"만 선택
      setMultiSelectOptions(['disease_none']);
    } else {
      // 다른 질환 선택 시 "없어요" 해제
      setMultiSelectOptions(prev => {
        const withoutNone = prev.filter(id => id !== 'disease_none');
        if (withoutNone.includes(optionId)) {
          // 이미 선택된 경우 해제
          return withoutNone.filter(id => id !== optionId);
        } else {
          // 새로 선택
          return [...withoutNone, optionId];
        }
      });
    }
  };

  // 언어별 UI 텍스트
  const uiTexts = useMemo(() => ({
    ko: {
      initialGreeting: (topic: string) => `안녕하세요! 고덕퍼스트치과 AI 상담사입니다. ${topic} 치료에 관심 가져주셔서 감사합니다.\n\n고객님께 가장 적합한 치료를 추천해드리기 위해 몇 가지 질문을 드리겠습니다. 편하게 답변해 주세요!`,
      inputPlaceholder: '궁금한 내용을 입력해 주세요',
      otherOption: '기타 (직접 입력)',
      endModalTitle: '상담이 완료되었습니다',
      endModalMessage: '상담 내용을 확인한 후\n담당자가 전화로 연락드리겠습니다.',
      endModalButton: '확인',
      consultationEndNote: '📞 상담 내용을 확인한 후 담당자가 전화로 연락드리겠습니다.',
      errorMessage: '죄송합니다. 일시적인 오류가 발생했습니다. 잠시 후 다시 시도해주세요.',
      endConsultationButton: '상담 종료',
      savingButton: '저장 중...',
      headerTitle: '고덕퍼스트치과 AI 상담',
      caseStudiesTitle: '실제 치료 케이스',
      beforeLabel: 'Before',
      afterLabel: 'After',
      contactInfoTitle: '예약 및 문의',
      justNow: '방금 전',
      minutesAgo: (mins: number) => `${mins}분 전`,
      beforeImageAlt: '치료 전',
      afterImageAlt: '치료 후',
      customInputHint: '또는 직접 입력하실 수도 있어요',
      customInputInstruction: '👆 위 선택지를 고르시거나, 아래 입력창에 직접 입력해주세요',
      treatmentVideosLabel: '치료 관련 영상',
      sedationVideosLabel: '수면치료(의식하진정) 관련 영상',
      // 예약 관련 텍스트
      bookingTitle: '원하시는 예약 방법을 선택해주세요',
      naverButton: '네이버로 바로 예약하기',
      naverHint: "'예약하기' 누르신 후 'AI 상담 환자 예약'을 선택하시면 내원 시간 선택 후 바로 내원 가능합니다!",
      phoneButton: '전화로 예약 하기',
      phoneTitle: '전화 상담 안내',
      phoneMessage: '031-611-3222로 전화드릴 예정이에요.\n꼭 받아주세요!',
      timeSelectTitle: '통화 가능한 시간대를 선택해주세요',
      morning: '오전 10:00~12:00',
      lunch: '점심 12:00~2:00',
      afternoon: '오후 2:00 이후',
      confirmButton: '확인',
      thankYouMessage: '감사합니다! 선택하신 시간에 연락드리겠습니다.',
      naverThankYouMessage: '감사합니다!\n과잉진료 없이 내 가족처럼\n정성껏 진료할 것을 약속드립니다. 🙏',
      directCallMessage: '📞 지금 바로도 전화 가능하세요!\n031-611-3222로 전화 주시면\n즉시 상담해 드립니다.',
      multiSelectHint: '해당하는 항목을 모두 선택해주세요',
      multiSelectConfirm: '선택 완료',
      recommendationBookingMessage: '내원하시면 상황에 맞게 비용 효율적으로 최고의 만족도를 얻을 수 있는 치료를 책임지고 상담해드리겠습니다. 꼭 내원해주세요! 🙏',
      // 최종 추천 후 예약 유도 팝업
      recommendationPopupTitle: '상담 내용 확인 후 \n 꼭 내원 예약을 진행해주세요',
      recommendationPopupMessage: '팝업을 닫고 치료 안내정보를 확인하시고\n더 자세한 상담을 원하시면\n꼭 예약해주세요!',
      recommendationPopupNaverButton: '네이버로 바로 예약하기',
      recommendationPopupPhoneLabel: '전화 문의',
      recommendationPopupPhoneNumber: '031-611-3222',
      recommendationPopupHours: '운영시간: 평일 10:00 ~ 19:00',
      recommendationPopupCredentials: '통합치의학과 전문의, 조선대학교 치과병원 외래교수 출신.\n과잉진료 없는 양심진료를 원칙으로 합니다.',
      recommendationPopupEncouragement: '꼭 여기서 치료를 진행하지 않으시더라도\n상담이라도 받아보고 가시면 좋겠습니다 🙏',
      recommendationPopupClose: '확인했습니다'
    },
    en: {
      initialGreeting: (topic: string) => `Hello! I'm the professional AI consultant at Godeok First Dental Clinic. Thank you for your interest in ${topic} treatment.\n\nI'll ask you a few questions to recommend the most suitable treatment for you. Please answer comfortably!`,
      inputPlaceholder: 'Please enter your question',
      otherOption: 'Other (Type your answer)',
      endModalTitle: 'Consultation Completed',
      endModalMessage: 'Our staff will contact you by phone\nafter reviewing your consultation.',
      endModalButton: 'OK',
      consultationEndNote: '📞 Our staff will contact you by phone after reviewing your consultation.',
      errorMessage: 'Sorry, a temporary error occurred. Please try again later.',
      endConsultationButton: 'End Consultation',
      savingButton: 'Saving...',
      headerTitle: 'Godeok First Dental AI',
      caseStudiesTitle: 'Actual Treatment Cases',
      beforeLabel: 'Before',
      afterLabel: 'After',
      contactInfoTitle: 'Reservation & Inquiry',
      justNow: 'Just now',
      minutesAgo: (mins: number) => `${mins} min ago`,
      beforeImageAlt: 'Before treatment',
      afterImageAlt: 'After treatment',
      customInputHint: 'Or you can type your own answer',
      customInputInstruction: '👆 Select an option above or type your answer below',
      treatmentVideosLabel: 'Treatment Videos',
      sedationVideosLabel: 'Sedation (Conscious Sedation) Video',
      // Booking related texts
      bookingTitle: 'Please select the next step',
      naverButton: 'Book appointment time via Naver Reservation',
      naverHint: "Click 'Book' then select 'AI Consultation Patient' - just choose your time!",
      phoneButton: 'Get more consultation by phone first',
      phoneTitle: 'Phone Consultation Info',
      phoneMessage: 'We will call you at 031-611-3222.\nPlease make sure to answer!',
      timeSelectTitle: 'Please select your available time',
      morning: 'Morning 10:00~12:00',
      lunch: 'Lunch 12:00~2:00',
      afternoon: 'Afternoon 2:00 onwards',
      confirmButton: 'Confirm',
      thankYouMessage: 'Thank you! We will contact you at your selected time.',
      naverThankYouMessage: 'Thank you!\nWe promise to treat you like family\nwith sincere care and no unnecessary treatment. 🙏',
      directCallMessage: '📞 We are open now!\nCall 031-611-3222 directly\nfor immediate consultation.',
      multiSelectHint: 'Please select all that apply',
      multiSelectConfirm: 'Confirm Selection',
      recommendationBookingMessage: 'When you visit us, we will provide cost-effective treatment with the highest satisfaction tailored to your situation. Please visit us! 🙏',
      // Recommendation popup
      recommendationPopupTitle: 'Please Review Your Consultation',
      recommendationPopupMessage: 'Based on the consultation above,\nif you want more detailed consultation,\nplease make a reservation!',
      recommendationPopupNaverButton: 'Book via Naver',
      recommendationPopupPhoneLabel: 'Phone Inquiry',
      recommendationPopupPhoneNumber: '031-611-3222',
      recommendationPopupHours: 'Hours: Weekdays 10:00 ~ 19:00',
      recommendationPopupCredentials: 'Specialist in Comprehensive Dentistry, former visiting professor at Chosun University Dental Hospital.\nWe practice honest treatment without unnecessary procedures.',
      recommendationPopupEncouragement: 'Even if you don\'t proceed with treatment here,\nwe\'d love for you to at least get a consultation 🙏',
      recommendationPopupClose: 'I Understand'
    },
    jp: {
      initialGreeting: (topic: string) => `こんにちは！慶星メディス歯科の専門AI相談員です。${topic}治療にご興味をお持ちいただきありがとうございます。\n\nお客様に最適な治療をご提案するため、いくつか質問させていただきます。お気軽にお答えください！`,
      inputPlaceholder: 'ご質問を入力してください',
      otherOption: 'その他（直接入力）',
      endModalTitle: '相談が完了しました',
      endModalMessage: '相談内容を確認後\n担当者よりお電話でご連絡いたします。',
      endModalButton: '確認',
      consultationEndNote: '📞 相談内容を確認後、担当者よりお電話でご連絡いたします。',
      errorMessage: '申し訳ございません。一時的なエラーが発生しました。しばらくしてから再度お試しください。',
      endConsultationButton: '相談終了',
      savingButton: '保存中...',
      headerTitle: 'メディス歯科AI相談アシスタント',
      caseStudiesTitle: '実際の治療ケース',
      beforeLabel: 'Before',
      afterLabel: 'After',
      contactInfoTitle: 'ご予約・お問い合わせ',
      justNow: 'たった今',
      minutesAgo: (mins: number) => `${mins}分前`,
      beforeImageAlt: '治療前',
      afterImageAlt: '治療後',
      customInputHint: 'または直接入力することもできます',
      customInputInstruction: '👆 上記の選択肢を選ぶか、下の入力欄に直接入力してください',
      treatmentVideosLabel: '治療関連映像',
      sedationVideosLabel: '睡眠治療（静脈鎮静法）関連映像',
      // 予約関連テキスト
      bookingTitle: '次のステップを選択してください',
      naverButton: 'Naver予約で診療時間を予約する',
      naverHint: "「予約する」を押して「AI相談患者予約」を選択すると、時間を選ぶだけで完了です！",
      phoneButton: 'まずは電話でご相談ください',
      phoneTitle: '電話相談のご案内',
      phoneMessage: '031-611-3222にお電話いたします。\n必ずお受けください！',
      timeSelectTitle: 'ご都合の良い時間帯を選択してください',
      morning: '午前 10:00~12:00',
      lunch: '昼 12:00~2:00',
      afternoon: '午後 2:00以降',
      confirmButton: '確認',
      thankYouMessage: 'ありがとうございます！ご選択いただいた時間にご連絡いたします。',
      naverThankYouMessage: 'ありがとうございます！\n過剰治療なく、家族のように\n心を込めて診療することをお約束します。🙏',
      directCallMessage: '📞 今すぐお電話いただけます！\n031-611-3222にお電話いただければ\n即座にご相談いただけます。',
      multiSelectHint: '該当する項目をすべて選択してください',
      multiSelectConfirm: '選択完了',
      recommendationBookingMessage: 'ご来院いただければ、状況に合わせて費用対効果の高い、最高のご満足をお約束する治療を責任を持ってご相談いたします。ぜひご来院ください！🙏',
      // 推薦ポップアップ
      recommendationPopupTitle: 'ご相談結果をご確認ください',
      recommendationPopupMessage: '上記の相談内容をご参考に、\nより詳しい相談をご希望でしたら\nぜひご予約ください！',
      recommendationPopupNaverButton: 'ネイバーで今すぐ予約',
      recommendationPopupPhoneLabel: '電話でのお問い合わせ',
      recommendationPopupPhoneNumber: '031-611-3222',
      recommendationPopupHours: '営業時間：平日 10:00 ~ 19:00',
      recommendationPopupCredentials: '総合歯科専門医、朝鮮大学校歯科病院の元外来教授。\n過剰診療のない良心的な診療を原則としています。',
      recommendationPopupEncouragement: 'ここで治療を受けなくても、\n相談だけでもお気軽にお越しください 🙏',
      recommendationPopupClose: '確認しました'
    },
    cn: {
      initialGreeting: (topic: string) => `您好！我是庆星美迪斯牙科的专业AI咨询员。感谢您对${topic}治疗的关注。\n\n为了向您推荐最合适的治疗方案，我将询问您几个问题。请随意回答！`,
      inputPlaceholder: '请输入您的问题',
      otherOption: '其他（手动输入）',
      endModalTitle: '咨询已完成',
      endModalMessage: '确认咨询内容后\n我们的工作人员将通过电话与您联系。',
      endModalButton: '确认',
      consultationEndNote: '📞 确认咨询内容后，我们的工作人员将通过电话与您联系。',
      errorMessage: '抱歉，发生了临时错误。请稍后再试。',
      endConsultationButton: '结束咨询',
      savingButton: '保存中...',
      headerTitle: '美迪斯牙科AI咨询助手',
      caseStudiesTitle: '实际治疗案例',
      beforeLabel: 'Before',
      afterLabel: 'After',
      contactInfoTitle: '预约及咨询',
      justNow: '刚刚',
      minutesAgo: (mins: number) => `${mins}分钟前`,
      beforeImageAlt: '治疗前',
      afterImageAlt: '治疗后',
      customInputHint: '或者您可以直接输入',
      customInputInstruction: '👆 选择上方选项或在下方输入框中直接输入',
      treatmentVideosLabel: '治疗相关视频',
      sedationVideosLabel: '睡眠治疗（清醒镇静）相关视频',
      // 预约相关文本
      bookingTitle: '请选择下一步',
      naverButton: '通过Naver预约直接预约就诊时间',
      naverHint: "点击'预约'后选择'AI咨询患者预约'，只需选择时间即可！",
      phoneButton: '先通过电话进行更多咨询',
      phoneTitle: '电话咨询指南',
      phoneMessage: '我们将拨打031-611-3222与您联系。\n请务必接听！',
      timeSelectTitle: '请选择您方便的时间段',
      morning: '上午 10:00~12:00',
      lunch: '午餐 12:00~2:00',
      afternoon: '下午 2:00以后',
      confirmButton: '确认',
      thankYouMessage: '谢谢！我们会在您选择的时间联系您。',
      naverThankYouMessage: '谢谢！\n我们承诺不会过度治疗，\n会像对待家人一样用心为您诊疗。🙏',
      directCallMessage: '📞 现在可以直接来电！\n拨打031-611-3222\n即可立即进行咨询。',
      multiSelectHint: '请选择所有适用的选项',
      multiSelectConfirm: '确认选择',
      recommendationBookingMessage: '来院时，我们将根据您的情况，以最高的性价比和满意度为您提供负责任的治疗咨询。请务必来院！🙏',
      // 推荐弹窗
      recommendationPopupTitle: '请确认咨询结果',
      recommendationPopupMessage: '参考以上咨询内容，\n如需更详细的咨询，\n请务必预约！',
      recommendationPopupNaverButton: '通过Naver立即预约',
      recommendationPopupPhoneLabel: '电话咨询',
      recommendationPopupPhoneNumber: '031-611-3222',
      recommendationPopupHours: '营业时间：工作日 10:00 ~ 19:00',
      recommendationPopupCredentials: '综合牙科专科医生，朝鲜大学牙科医院前客座教授。\n我们坚持不过度治疗的良心诊疗原则。',
      recommendationPopupEncouragement: '即使不在这里接受治疗，\n也欢迎您来咨询一下 🙏',
      recommendationPopupClose: '我已确认'
    },
    vi: {
      initialGreeting: (topic: string) => `Xin chào! Tôi là tư vấn viên AI của Nha khoa Godeok First. Cảm ơn bạn đã quan tâm đến dịch vụ (${topic}).\n\nĐể gợi ý phương pháp điều trị phù hợp nhất, tôi xin phép được đặt một vài câu hỏi. Hãy trả lời thoải mái nhé!`,
      inputPlaceholder: 'Vui lòng nhập nội dung bạn thắc mắc',
      otherOption: 'Khác (nhập trực tiếp)',
      endModalTitle: 'Tư vấn đã hoàn tất',
      endModalMessage: 'Sau khi kiểm tra nội dung tư vấn\nnhân viên phụ trách sẽ liên hệ với bạn qua điện thoại.',
      endModalButton: 'Xác nhận',
      consultationEndNote: '📞 Sau khi kiểm tra nội dung tư vấn, nhân viên phụ trách sẽ liên hệ với bạn qua điện thoại.',
      errorMessage: 'Xin lỗi, đã xảy ra lỗi tạm thời. Vui lòng thử lại sau.',
      endConsultationButton: 'Kết thúc tư vấn',
      savingButton: 'Đang lưu...',
      headerTitle: 'Tư vấn viên AI (Godeok First)',
      caseStudiesTitle: 'Các trường hợp điều trị thực tế',
      beforeLabel: 'Trước',
      afterLabel: 'Sau',
      contactInfoTitle: 'Đặt hẹn & Thắc mắc',
      justNow: 'Vừa xong',
      minutesAgo: (mins: number) => `${mins} phút trước`,
      beforeImageAlt: 'Trước khi điều trị',
      afterImageAlt: 'Sau khi điều trị',
      customInputHint: 'Hoặc bạn có thể nhập trực tiếp',
      customInputInstruction: '👆 Hãy chọn các lựa chọn trên hoặc nhập trực tiếp vào khung dưới',
      treatmentVideosLabel: 'Video liên quan đến điều trị',
      sedationVideosLabel: 'Video về điều trị giấc ngủ (An thần có ý thức)',
      bookingTitle: 'Vui lòng chọn phương thức đặt hẹn',
      naverButton: 'Đặt hẹn qua Naver',
      naverHint: 'Nhấn "Đặt hẹn" rồi chọn "Bệnh nhân tư vấn AI", sau đó chọn thời gian thăm khám.',
      phoneButton: 'Đặt hẹn qua điện thoại',
      phoneTitle: 'Hướng dẫn tư vấn điện thoại',
      phoneMessage: 'Chúng tôi sẽ gọi cho bạn từ số 031-611-3222.\nVui lòng chú ý điện thoại nhé!',
      timeSelectTitle: 'Vui lòng chọn khung giờ có thể nghe máy',
      morning: 'Sáng 10:00~12:00',
      lunch: 'Trưa 12:00~14:00',
      afternoon: 'Sau 14:00 chiều',
      confirmButton: 'Xác nhận',
      thankYouMessage: 'Xin cảm ơn! Chúng tôi sẽ liên hệ với bạn vào khung giờ đã chọn.',
      naverThankYouMessage: 'Xin cảm ơn!\nChúng tôi hứa sẽ điều trị tận tâm như người nhà\nmà không có các chỉ định điều trị quá mức. 🙏',
      directCallMessage: '📞 Bạn có thể gọi ngay bây giờ!\nGọi đến số 031-611-3222\nđể được tư vấn ngay lập tức.',
      multiSelectHint: 'Vui lòng chọn tất cả các mục phù hợp',
      multiSelectConfirm: 'Hoàn tất chọn',
      recommendationBookingMessage: 'Khi bạn đến thăm khám, chúng tôi sẽ tư vấn tận tình để bạn có được kết quả hài lòng nhất và chi phí hiệu quả nhất tùy theo tình trạng của mình. Hãy ghé thăm nhé! 🙏',
      // Popup khuyến nghị
      recommendationPopupTitle: 'Vui lòng xem lại kết quả tư vấn',
      recommendationPopupMessage: 'Dựa trên nội dung tư vấn ở trên,\nnếu bạn muốn được tư vấn chi tiết hơn,\nhãy đặt lịch hẹn nhé!',
      recommendationPopupNaverButton: 'Đặt lịch qua Naver',
      recommendationPopupPhoneLabel: 'Liên hệ qua điện thoại',
      recommendationPopupPhoneNumber: '031-611-3222',
      recommendationPopupHours: 'Giờ làm việc: Thứ 2-6, 10:00 ~ 19:00',
      recommendationPopupCredentials: 'Chuyên gia Nha khoa Tổng hợp, từng là Giáo sư tại Bệnh viện Nha khoa Đại học Chosun.\nChúng tôi cam kết điều trị trung thực, không chỉ định quá mức.',
      recommendationPopupEncouragement: 'Dù bạn không điều trị tại đây,\nhãy đến để được tư vấn nhé 🙏',
      recommendationPopupClose: 'Tôi đã hiểu'
    },
    th: {
      initialGreeting: (topic: string) => `สวัสดีครับ! ผมคือที่ปรึกษา AI จาก Godeok First Dental Clinic ขอบคุณที่สนใจการรักษา (${topic}) ครับ\n\nเพื่อแนะนำการรักษาที่เหมาะสมที่สุด ผมขอถามคำถามสักเล็กน้อย โปรดตอบตามสบายนะครับ!`,
      inputPlaceholder: 'กรุณาพิมพ์ข้อสงสัยของคุณ',
      otherOption: 'อื่นๆ (พิมพ์เอง)',
      endModalTitle: 'การปรึกษาเสร็จสมบูรณ์',
      endModalMessage: 'หลังจากตรวจสอบข้อมูล\nเจ้าหน้าที่ของเราจะติดต่อกลับทางโทรศัพท์ครับ',
      endModalButton: 'ตกลง',
      consultationEndNote: '📞 เจ้าหน้าที่จะติดต่อกลับหลังจากตรวจสอบข้อมูลการปรึกษาครับ',
      errorMessage: 'ขออภัย เกิดข้อผิดพลาดชั่วคราว กรุณาลองใหม่ในภายหลัง',
      endConsultationButton: 'จบการปรึกษา',
      savingButton: 'กำลังบันทึก...',
      headerTitle: 'ที่ปรึกษา AI (Godeok First)',
      caseStudiesTitle: 'เคสการรักษาจริง',
      beforeLabel: 'ก่อน',
      afterLabel: 'หลัง',
      contactInfoTitle: 'จองและสอบถาม',
      justNow: 'เมื่อครู่นี้',
      minutesAgo: (mins: number) => `${mins} นาทีที่แล้ว`,
      beforeImageAlt: 'ก่อนการรักษา',
      afterImageAlt: 'หลังการรักษา',
      customInputHint: 'หรือคุณสามารถพิมพ์เองได้ครับ',
      customInputInstruction: '👆 เลือกตัวเลือกด้านบน หรือพิมพ์ในช่องด้านล่างครับ',
      treatmentVideosLabel: 'วิดีโอที่เกี่ยวข้องกับการรักษา',
      sedationVideosLabel: 'วิดีโอเกี่ยวกับการรักษาขณะหลับ (การสงบสติแบบมีสติ)',
      bookingTitle: 'กรุณาเลือกวิธีการจอง',
      naverButton: 'จองผ่าน Naver',
      naverHint: 'กด "จอง" แล้วเลือก "ผู้ป่วยปรึกษา AI" จากนั้นเลือกเวลาที่สะดวกครับ',
      phoneButton: 'จองผ่านโทรศัพท์',
      phoneTitle: 'ข้อมูลการปรึกษาทางโทรศัพท์',
      phoneMessage: 'เราจะโทรหาคุณจากเบอร์ 031-611-3222\nกรุณารับสายด้วยนะครับ!',
      timeSelectTitle: 'กรุณาเลือกช่วงเวลาที่สะดวกรับสาย',
      morning: 'เช้า 10:00~12:00',
      lunch: 'เที่ยง 12:00~14:00',
      afternoon: 'บ่าย 14:00 เป็นต้นไป',
      confirmButton: 'ยืนยัน',
      thankYouMessage: 'ขอบคุณครับ! เราจะติดต่อกลับตามเวลาที่เลือกไว้ครับ',
      naverThankYouMessage: 'ขอบคุณครับ!\nเราสัญญาว่าจะดูแลคุณเหมือนคนในครอบครัว\nโดยไม่มีการรักษาที่เกินความจำเป็นครับ 🙏',
      directCallMessage: '📞 โทรหาเราได้ทันที!\nโทร 031-611-3222\nเพื่อรับการปรึกษาทันทีครับ',
      multiSelectHint: 'กรุณาเลือกทุกข้อที่ตรงกับคุณ',
      multiSelectConfirm: 'เสร็จสิ้นการเลือก',
      recommendationBookingMessage: 'เมื่อคุณมาพบเรา เราจะให้คำปรึกษาเพื่อให้คุณได้รับการรักษาที่พึงพอใจและคุ้มค่าที่สุดตามอาการของคุณ โปรดมาพบเรานะครับ! 🙏',
      // ป๊อปอัพแนะนำ
      recommendationPopupTitle: 'กรุณาตรวจสอบผลการปรึกษา',
      recommendationPopupMessage: 'จากข้อมูลการปรึกษาข้างต้น\nหากต้องการคำปรึกษาเพิ่มเติม\nกรุณาจองนัดหมายครับ!',
      recommendationPopupNaverButton: 'จองผ่าน Naver',
      recommendationPopupPhoneLabel: 'สอบถามทางโทรศัพท์',
      recommendationPopupPhoneNumber: '031-611-3222',
      recommendationPopupHours: 'เวลาทำการ: จันทร์-ศุกร์ 10:00 ~ 19:00',
      recommendationPopupCredentials: 'ผู้เชี่ยวชาญทันตกรรมบูรณาการ อดีตอาจารย์โรงพยาบาลทันตกรรม ม.โชซอน\nเรายึดมั่นในการรักษาที่ซื่อสัตย์ ไม่สั่งการรักษาเกินจำเป็น',
      recommendationPopupEncouragement: 'แม้ไม่ได้รักษาที่นี่\nก็ยินดีต้อนรับมาปรึกษาครับ 🙏',
      recommendationPopupClose: 'รับทราบแล้ว'
    },
    ru: {
      initialGreeting: (topic: string) => `Здравствуйте! Я ИИ-консультант стоматологии Godeok First. Спасибо за ваш интерес к лечению (${topic}).\n\nЯ задам вам несколько вопросов, чтобы предложить наиболее подходящий план лечения. Пожалуйста, отвечайте честно!`,
      inputPlaceholder: 'Введите ваш вопрос',
      otherOption: 'Другое (ввести вручную)',
      endModalTitle: 'Консультация завершена',
      endModalMessage: 'Наш специалист свяжется с вами\nпосле ознакомления с вашими ответами.',
      endModalButton: 'ОК',
      consultationEndNote: '📞 Наш специалист свяжется с вами по телефону после ознакомления с вашими ответами.',
      errorMessage: 'Извините, произошла ошибка. Пожалуйста, попробуйте позже.',
      endConsultationButton: 'Завершить консультацию',
      savingButton: 'Сохранение...',
      headerTitle: 'ИИ-консультант (Godeok First)',
      caseStudiesTitle: 'Примеры лечения',
      beforeLabel: 'До',
      afterLabel: 'После',
      contactInfoTitle: 'Запись и вопросы',
      justNow: 'Только что',
      minutesAgo: (mins: number) => `${mins} мин. назад`,
      beforeImageAlt: 'До лечения',
      afterImageAlt: 'После лечения',
      customInputHint: 'Или вы можете ввести свой ответ',
      customInputInstruction: '👆 Выберите вариант выше или введите свой ответ ниже',
      treatmentVideosLabel: 'Видео о лечении',
      sedationVideosLabel: 'Видео о седации (сознательная седация)',
      bookingTitle: 'Выберите способ связи',
      naverButton: 'Записаться через Naver',
      naverHint: 'Нажмите "Записаться" и выберите "AI Консультация", затем выберите удобное время.',
      phoneButton: 'Заказать обратный звонок',
      phoneTitle: 'Информация о звонке',
      phoneMessage: 'Мы позвоним вам с номера 031-611-3222.\nПожалуйста, ответьте на звонок!',
      timeSelectTitle: 'Выберите удобное время для звонка',
      morning: 'Утро 10:00~12:00',
      lunch: 'Обед 12:00~14:00',
      afternoon: 'После 14:00',
      confirmButton: 'Подтвердить',
      thankYouMessage: 'Спасибо! Мы свяжемся с вами в выбранное время.',
      naverThankYouMessage: 'Спасибо!\nМы обещаем позаботиться о вас как о члене семьи\nбез лишних процедур. 🙏',
      directCallMessage: '📞 Мы открыты!\nПозвоните нам 031-611-3222\nдля немедленной консультации.',
      multiSelectHint: 'Пожалуйста, выберите все подходящие варианты',
      multiSelectConfirm: 'Подтвердить выбор',
      recommendationBookingMessage: 'При посещении мы предложим наиболее эффективное лечение, исходя из вашей ситуации. Пожалуйста, приходите! 🙏',
      // Всплывающее окно рекомендации
      recommendationPopupTitle: 'Пожалуйста, ознакомьтесь с результатами',
      recommendationPopupMessage: 'На основании консультации выше,\nесли вам нужна более детальная консультация,\nпожалуйста, запишитесь!',
      recommendationPopupNaverButton: 'Записаться через Naver',
      recommendationPopupPhoneLabel: 'Телефон для справок',
      recommendationPopupPhoneNumber: '031-611-3222',
      recommendationPopupHours: 'Часы работы: Пн-Пт 10:00 ~ 19:00',
      recommendationPopupCredentials: 'Специалист по комплексной стоматологии, бывший профессор стоматологической больницы университета Чосон.\nМы придерживаемся принципа честного лечения без лишних процедур.',
      recommendationPopupEncouragement: 'Даже если вы не планируете лечение здесь,\nмы будем рады проконсультировать вас 🙏',
      recommendationPopupClose: 'Понятно'
    },
    mn: {
      initialGreeting: (topic: string) => `Сайн байна уу! Би бол Godeok First шүдний эмнэлгийн AI зөвлөх байна. (${topic}) эмчилгээг сонирхсон танд баярлалаа.\n\nТанд хамгийн тохиромжтой эмчилгээг санал болгохын тулд цөөн хэдэн асуулт асууя. Та чөлөөтэй хариулаарай!`,
      inputPlaceholder: 'Асуух зүйлээ энд бичнэ үү',
      otherOption: 'Бусад (шууд бичих)',
      endModalTitle: 'Зөвлөгөө дууслаа',
      endModalMessage: 'Зөвлөгөөний мэдээллийг шалгасны дараа\nхариуцсан ажилтан тантай утсаар холбогдох болно.',
      endModalButton: 'OK',
      consultationEndNote: '📞 Зөвлөгөөний мэдээллийг шалгасны дараа ажилтан тантай утсаар холбогдох болно.',
      errorMessage: 'Уучлаарай, түр зуурын алдаа гарлаа. Та дараа дахин оролдоно уу.',
      endConsultationButton: 'Зөвлөгөөг дуусгах',
      savingButton: 'Хадгалж байна...',
      headerTitle: 'AI зөвлөх (Godeok First)',
      caseStudiesTitle: 'Бодит эмчилгээний жишээнүүд',
      beforeLabel: 'Өмнө',
      afterLabel: 'Дараа',
      contactInfoTitle: 'Цаг захиалга & Лавлах',
      justNow: 'Саяхан',
      minutesAgo: (mins: number) => `${mins} минутын өмнө`,
      beforeImageAlt: 'Эмчилгээний өмнө',
      afterImageAlt: 'Эмчилгээний дараа',
      customInputHint: 'Эсвэл та шууд бичиж болно',
      customInputInstruction: '👆 Дээрх сонголтуудаас сонгох эсвэл доорх хэсэгт бичнэ үү',
      treatmentVideosLabel: 'Эмчилгээний видеонууд',
      sedationVideosLabel: 'Унтуулах эмчилгээ (ухаантай седаци) видео',
      bookingTitle: 'Цаг захиалах хэлбэрээ сонгоно уу',
      naverButton: 'Naver-ээр захиалах',
      naverHint: 'Захиалах товчийг дараад "AI зөвлөгөө" гэснийг сонгоод цагаа сонгоно уу.',
      phoneButton: 'Утсаар захиалах',
      phoneTitle: 'Утасны зөвлөгөөний мэдээлэл',
      phoneMessage: 'Бид тантай 031-611-3222 дугаараас холбогдох болно.\nУтсаа заавал аваарай!',
      timeSelectTitle: 'Утсаар ярих боломжтой цагаа сонгоно уу',
      morning: 'Өглөө 10:00~12:00',
      lunch: 'Өдөр 12:00~14:00',
      afternoon: 'Өдөр 14:00-с хойш',
      confirmButton: 'Батлах',
      thankYouMessage: 'Баярлалаа! Бид таны сонгосон цагт холбогдох болно.',
      naverThankYouMessage: 'Баيارлаа!\nБид таныг гэр бүл шигээ чин сэтгэлээсээ\nэмчлэх болно гэдгээ амлаж байна. 🙏',
      directCallMessage: '📞 Одоо шууд залгах боломжтой!\n031-611-3222 дугаар руу залгаж\nзөвлөгөө аваарай.',
      multiSelectHint: 'Тохирох бүх сонголтыг сонгоно уу',
      multiSelectConfirm: 'Сонгож дуусгах',
      recommendationBookingMessage: 'Та манай эмнэлэгт ирснээр бид таны нөхцөл байдалд тохирсон хамгийн үр дүнтэй эмчилгээний зөвлөгөөг өгөх болно. Заавал ирээрэй! 🙏',
      // Зөвлөмжийн popup
      recommendationPopupTitle: 'Зөвлөгөөний үр дүнг шалгана уу',
      recommendationPopupMessage: 'Дээрх зөвлөгөөг үндэслэн,\nхэрэв дэлгэрэнгүй зөвлөгөө авахыг хүсвэл\nцаг захиалаарай!',
      recommendationPopupNaverButton: 'Naver-ээр захиалах',
      recommendationPopupPhoneLabel: 'Утасны лавлагаа',
      recommendationPopupPhoneNumber: '031-611-3222',
      recommendationPopupHours: 'Ажлын цаг: Даваа-Баасан 10:00 ~ 19:00',
      recommendationPopupCredentials: 'Нэгдсэн шүдний эмчилгээний мэргэжилтэн, Чосоны их сургуулийн шүдний эмнэлгийн зочин профессор.\nБид шударга эмчилгээний зарчмыг баримтална.',
      recommendationPopupEncouragement: 'Энд эмчлүүлэхгүй байсан ч\nзөвлөгөө авахыг хүсвэл таныг урьж байна 🙏',
      recommendationPopupClose: 'Ойлголоо'
    },
    uz: {
      initialGreeting: (topic: string) => `Assalomu alaykum! Men Godeok First stomatologiya klinikasining AI maslahatchisiman. (${topic}) muolajasiga qiziqish bildirganingiz uchun tashakkur.\n\nSizga eng mos keladigan davolash usulini tavsiya qilishim uchun bir nechta savollarga javob bersangiz. Iltimos, bemalol javob bering!`,
      inputPlaceholder: 'Savolingizni kiriting',
      otherOption: 'Boshqa (o\'zingiz kiriting)',
      endModalTitle: 'Maslahat yakunlandi',
      endModalMessage: 'Maslahat mazmunini ko\'rib chiqqandan so\'ng\nmutaxassisimiz siz bilan telefon orqali bog\'lanadi.',
      endModalButton: 'OK',
      consultationEndNote: '📞 Mutaxassisimiz ma\'lumotlarni ko\'rib chiqqandan so\'ng siz bilan telefon orqali bog\'lanadi.',
      errorMessage: 'Uzr, vaqtinchalik xatolik yuz berdi. Iltimos, birozdan so\'ng qayta urinib ko\'ring.',
      endConsultationButton: 'Maslahatni yakunlash',
      savingButton: 'Saqlanmoqda...',
      headerTitle: 'AI maslahatchisi (Godeok First)',
      caseStudiesTitle: 'Haqiqiy davolash holatlari',
      beforeLabel: 'Oldin',
      afterLabel: 'Keyin',
      contactInfoTitle: 'Band qilish va Savollar',
      justNow: 'Hozirgina',
      minutesAgo: (mins: number) => `${mins} daqiqa oldin`,
      beforeImageAlt: 'Davolashdan oldin',
      afterImageAlt: 'Davolashdan keyin',
      customInputHint: 'Yoki o\'zingiz yozishingiz mumkin',
      customInputInstruction: '👆 Yuqoridagi variantlardan birini tanlang yoki pastda o\'zingiz yozing',
      treatmentVideosLabel: 'Davolashga oid videolar',
      sedationVideosLabel: 'Uyqu davolash (ongli sedatsiya) videosi',
      bookingTitle: 'Band qilish usulini tanlang',
      naverButton: 'Naver orqali band qilish',
      naverHint: 'Band qilish tugmasini bosing va "AI konsultatsiya"ni tanlang, so\'ng vaqtni tanlang.',
      phoneButton: 'Telefon orqali band qilish',
      phoneTitle: 'Telefon orqali maslahat ma\'lumoti',
      phoneMessage: 'Biz sizga 031-611-3222 raqamidan qo\'ng\'iroq qilamiz.\nIltimos, qo\'ng\'iroqqa javob bering!',
      timeSelectTitle: 'Telefon orqali gaplashishga qulay vaqtni tanlang',
      morning: 'Ertalab 10:00~12:00',
      lunch: 'Tushlik 12:00~14:00',
      afternoon: 'Tushdan keyin 14:00 dan so\'ng',
      confirmButton: 'Tasdiqlash',
      thankYouMessage: 'Rahmat! Siz tanlagan vaqtda bog\'lanamiz.',
      naverThankYouMessage: 'Rahmat!\nBiz sizga oila a\'zosidek g\'amxo\'rlik qilishga va\nortiqcha muolajalarsiz davolashga va\'da beramiz. 🙏',
      directCallMessage: '📞 Hozirning o\'zida ham bog\'lanishingiz mumkin!\n031-611-3222 raqamiga qo\'ng\'iroq qiling va\ndarhol maslahat oling.',
      multiSelectHint: 'Tegishli barcha bandlarni tanlang',
      multiSelectConfirm: 'Tanlash yakunlandi',
      recommendationBookingMessage: 'Bizning klinikamizga tashrif buyursangiz, holatingizga mos keladigan eng samarali davolash usuli bo\'yicha maslahat beramiz. Albatta keling! 🙏',
      // Tavsiya popup
      recommendationPopupTitle: 'Maslahat natijasini ko\'rib chiqing',
      recommendationPopupMessage: 'Yuqoridagi maslahat asosida,\nagar batafsil maslahat olishni xohlasangiz,\niltimos, band qiling!',
      recommendationPopupNaverButton: 'Naver orqali band qilish',
      recommendationPopupPhoneLabel: 'Telefon ma\'lumoti',
      recommendationPopupPhoneNumber: '031-611-3222',
      recommendationPopupHours: 'Ish vaqti: Du-Ju 10:00 ~ 19:00',
      recommendationPopupCredentials: 'Kompleks stomatologiya mutaxassisi, Choson universiteti stomatologiya kasalxonasining sobiq professori.\nBiz ortiqcha davolanishsiz halol davolash tamoyiliga amal qilamiz.',
      recommendationPopupEncouragement: 'Bu yerda davolanmasangiz ham,\nmaslahatchiga murojaat qilishni tavsiya qilamiz 🙏',
      recommendationPopupClose: 'Tushundim'
    }
  }), []);

  const texts = uiTexts[language];

  // 언어별 초기 인사말
  const getInitialGreeting = useCallback((topic: string, lang: 'ko' | 'en' | 'jp' | 'cn' | 'vi' | 'th' | 'ru' | 'mn' | 'uz'): string => {
    return uiTexts[lang as keyof typeof uiTexts].initialGreeting(topic);
  }, [uiTexts]);

  // 마지막 메시지의 시작 부분으로 스크롤 (조금만 내리기)
  const scrollToLastMessage = useCallback(() => {
    setTimeout(() => {
      try {
        lastMessageRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } catch {
        lastMessageRef.current?.scrollIntoView();
      }
    }, 100);
  }, []);

  /**
   * 상담 로그를 Supabase에 저장하는 함수 (실시간 업데이트)
   */
  const saveConsultationLog = useCallback(async () => {
    if (!consultationData || isSavingLogRef.current) {
      return;
    }

    isSavingLogRef.current = true;
    setIsSavingLogUI(true);

    try {
      if (!consultationLogId) {
        // 첫 저장: 새 로그 생성 (POST)
        const logData: ConsultationLog = {
          name: consultationData.name,
          phone: consultationData.phone,
          contact_type: consultationData.contactType || null,
          contact_value: consultationData.contactValue || null,
          age: consultationData.age,
          consultation_content: consultationData.consultationContent,
          referrer_url: consultationData.referrerData?.referrerUrl || '',
          referrer_source: consultationData.referrerData?.referrerSource || 'direct',
          utm_source: consultationData.referrerData?.utmSource || null,
          utm_medium: consultationData.referrerData?.utmMedium || null,
          utm_campaign: consultationData.referrerData?.utmCampaign || null,
          search_query: consultationData.referrerData?.searchQuery || null,
          chat_history: messages,
          status: '대기중',
        };

        console.log('💾 새 상담 로그 생성 - 메시지 개수:', messages.length);

        const response = await fetch('/api/consultations', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(logData),
        });

        if (!response.ok) {
          throw new Error('Failed to save consultation log');
        }

        const result = await response.json();
        console.log('✅ 새 상담 로그 생성 완료:', result);

        // 생성된 로그 ID 저장
        if (result.data?.id) {
          setConsultationLogId(result.data.id);
          console.log('📝 로그 ID 저장:', result.data.id);
        }
      } else {
        // 이후 저장: 기존 로그 업데이트 (PATCH)
        console.log('💾 기존 로그 업데이트 - ID:', consultationLogId, '메시지 개수:', messages.length);
        console.log('📤 업데이트할 데이터:', {
          id: consultationLogId,
          chat_history: messages,
        });

        const response = await fetch('/api/consultations', {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id: consultationLogId,
            chat_history: messages,
          }),
        });

        // PATCH 실패 시 (ID가 없는 경우) 새로 생성
        if (!response.ok) {
          const errorText = await response.text();
          console.warn('⚠️ PATCH 요청 실패, 새 로그 생성 시도:', response.status, errorText);

          // 새로 생성
          const logData = {
            name: consultationData.name,
            phone: consultationData.phone,
            contact_type: consultationData.contactType || 'phone',
            contact_value: consultationData.contactValue || consultationData.phone,
            age: consultationData.age,
            consultation_content: consultationData.consultationContent,
            referrer_url: consultationData.referrerData?.referrerUrl || '',
            referrer_source: consultationData.referrerData?.referrerSource || 'direct',
            utm_source: consultationData.referrerData?.utmSource || null,
            utm_medium: consultationData.referrerData?.utmMedium || null,
            utm_campaign: consultationData.referrerData?.utmCampaign || null,
            search_query: consultationData.referrerData?.searchQuery || null,
            chat_history: messages,
            status: '대기중',
          };

          const createResponse = await fetch('/api/consultations', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(logData),
          });

          if (!createResponse.ok) {
            throw new Error('Failed to create new consultation log after PATCH failure');
          }

          const createResult = await createResponse.json();
          console.log('✅ 새 상담 로그 생성 완료 (PATCH 실패 후):', createResult);

          // 새 로그 ID 저장
          if (createResult.data?.id) {
            setConsultationLogId(createResult.data.id);
            localStorage.setItem('consultationLogId', createResult.data.id);
            console.log('📝 새 로그 ID 저장:', createResult.data.id);
          }
          return;
        }

        const result = await response.json();
        console.log('✅ 상담 로그 업데이트 완료:', result);
        console.log('✅ 업데이트된 데이터:', result.data);
      }
    } catch (error) {
      console.error('❌ 상담 로그 저장 실패:', error);
    } finally {
      isSavingLogRef.current = false;
      setIsSavingLogUI(false);
    }
  }, [consultationData, consultationLogId, messages, setConsultationLogId]);

  useEffect(() => {
    // localStorage에서 상담 데이터 로드
    const storedData = localStorage.getItem('consultationData');
    console.log('🔍 localStorage에서 consultationData 로드:', storedData);
    if (storedData) {
      try {
        const data = JSON.parse(storedData) as ConsultationData;
        console.log('✅ consultationData 파싱 성공:', data);
        setConsultationData(data);
      } catch (error) {
        console.error('❌ Failed to parse consultation data:', error);
      }
    } else {
      console.warn('⚠️ localStorage에 consultationData가 없습니다!');
    }

    // localStorage에서 상담 로그 ID 로드
    const storedLogId = localStorage.getItem('consultationLogId');
    if (storedLogId) {
      console.log('📝 기존 상담 로그 ID 로드:', storedLogId);
      setConsultationLogId(storedLogId);
    }

    // 초기 질문을 클라이언트에서 직접 생성
    if (initialMessage) {
      console.log('🎯 초기 토픽:', initialMessage);

      // generateNextQuestion을 직접 import해서 사용
      import('@/lib/question-generator').then(({ generateNextQuestion }) => {
        const firstQuestion = generateNextQuestion(0, [], initialMessage, language);

        if (firstQuestion) {
          // 심미 상담 Q1 진입 시 원장 소개 카드 추가
          const extendedQuestion = firstQuestion as {
            question: string;
            options: Array<{ id: string; text: string }>;
            allowCustomInput?: boolean;
            cosmeticMetadata?: {
              showDoctorCredentials?: boolean;
              treatmentPath?: 'whitening' | 'laminate';
              isTerminal?: boolean;
            };
          };

          const firstMessage: ChatMessage = {
            id: '1',
            role: 'assistant',
            content: getInitialGreeting(initialMessage, language),
            timestamp: new Date(),
            structuredQuestion: firstQuestion,
            isRecommendation: false,
            // 심미 상담 Q1 진입 시 원장 소개 카드 추가
            doctorCredentialCard: extendedQuestion.cosmeticMetadata?.showDoctorCredentials ? {
              show: true,
              credentials: [
                '대한심미치과학회 심미치아보철 인정의',
                'SKCD(Society of Korean Clinical Dentistry) 정회원',
                '미국 텍사스 A&M 치과대학 보철 연구회 회원'
              ],
              headerText: '대표원장 책임진료',
              patientVideo: '/videos/laminate-smile.mp4'
            } : undefined
          };
          setMessages([firstMessage]);
          setQuestionCount(1); // 첫 질문 생성 시 카운트를 1로 설정
          console.log('📩 첫 질문 생성 완료:', firstQuestion);
          console.log('📊 questionCount 초기화: 1');
          if (extendedQuestion.cosmeticMetadata?.showDoctorCredentials) {
            console.log('🎨 심미 상담 Q1 - 원장 소개 카드 추가됨');
          }
        }
      });
    }
  }, [initialMessage, language, getInitialGreeting]);

  useEffect(() => {
    // 항상 마지막 메시지 시작 부분으로만 스크롤 (조금만 내리기)
    scrollToLastMessage();
  }, [messages, scrollToLastMessage]);

  // 페이지를 떠날 때 상담 로그 저장
  useEffect(() => {
    const handleBeforeUnload = () => {
      if (messages.length > 1 && consultationData) {
        saveConsultationLog();
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [messages, consultationData, saveConsultationLog]);

  // 메시지가 추가될 때마다 자동으로 저장 (실시간 백업)
  useEffect(() => {
    console.log('📝 저장 조건 체크 - messages:', messages.length, 'consultationData:', consultationData ? '있음' : '없음', 'consultationLogId:', consultationLogId);
    // 메시지가 2개 이상이고 consultationData와 consultationLogId가 있으면 업데이트
    // consultationLogId가 있다는 것은 이미 상담 신청 시 Supabase에 저장되었다는 의미
    if (messages.length >= 2 && consultationData && consultationLogId) {
      console.log('✅ 기존 로그 업데이트 조건 충족, saveConsultationLog 호출');
      saveConsultationLog();
    } else if (messages.length >= 2 && consultationData && !consultationLogId) {
      // consultationLogId가 없으면 상담 신청 시 저장 실패한 경우이므로 새로 생성
      console.log('✅ 새 로그 생성 조건 충족 (상담 신청 시 저장 실패), saveConsultationLog 호출');
      saveConsultationLog();
    } else {
      console.log('⏭️ 저장 조건 미충족 - messages:', messages.length, 'consultationData:', consultationData ? '있음' : '없음', 'consultationLogId:', consultationLogId);
    }
  }, [messages, consultationData, consultationLogId, saveConsultationLog]);

  // 틀니 경고 메시지 (다국어)
  const dentureWarningMessages: Record<string, string> = {
    ko: '🔴 틀니를 꼭 챙겨오세요!',
    en: '🔴 Please bring your dentures!',
    jp: '🔴 入れ歯を必ずお持ちください！',
    cn: '🔴 请务必带상您的假牙！',
    vi: '🔴 Vui lòng mang theo hàm giả của bạn!',
    th: '🔴 กรุณานำฟันปลอมของคุณมาด้วย!',
    ru: '🔴 Пожалуйста, возьмите с собой зубные протезы!',
    mn: '🔴 Хиймэл шүдээ заавал авчираарай!',
    uz: '🔴 Iltimos, protezlaringizni o\'zingiz bilan olib keling!'
  };

  /**
   * 객관식 옵션 클릭 핸들러
   */
  const handleOptionClick = async (optionId: string, optionText: string, questionType: string) => {
    if (isLoading) return;

    // 답변 히스토리에 추가
    const newAnswerHistory = [...answerHistory, { optionId, questionType, optionText }];
    setAnswerHistory(newAnswerHistory);

    // 사용자 메시지 생성
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: optionText,
      timestamp: new Date(),
      selectedOptionId: optionId,
    };

    // 틀니 "예" 선택 시 경고 메시지 추가
    if (optionId === 'denture_yes') {
      const warningMessage: ChatMessage = {
        id: (Date.now() - 1).toString(),
        role: 'assistant',
        content: dentureWarningMessages[language] || dentureWarningMessages.ko,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, userMessage, warningMessage]);
    } else {
      setMessages(prev => [...prev, userMessage]);
    }
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...messages, userMessage],
          consultationTopic: initialMessage,
          questionCount: questionCount + 1,
          answerHistory: newAnswerHistory,
          language,
          sedationCardShown
        }),
      });

      if (!response.ok) {
        throw new Error('API 요청에 실패했습니다');
      }

      const data = await response.json();

      console.log('📹 프론트엔드 (옵션 클릭) - API 응답 data:', data);
      console.log('📹 프론트엔드 (옵션 클릭) - videoIframes:', data.videoIframes);
      console.log('📹 프론트엔드 (옵션 클릭) - videoIframes 길이:', data.videoIframes?.length || 0);

      const assistantMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.content,
        timestamp: new Date(),
        caseImages: data.caseImages,
        videoIframes: data.videoIframes,
        structuredQuestion: data.structuredQuestion,
        isRecommendation: data.isRecommendation,
        sedationCard: data.sedationCard,
        costWarningCard: data.costWarningCard,
        doctorCredentialCard: data.doctorCredentialCard,
        eventBannerCard: data.eventBannerCard,
        cosmeticPath: data.cosmeticPath,
        skipPhoneOption: data.skipPhoneOption
      };

      console.log('📹 프론트엔드 (옵션 클릭) - assistantMessage:', assistantMessage);
      console.log('📹 프론트엔드 (옵션 클릭) - assistantMessage.videoIframes:', assistantMessage.videoIframes);
      if (data.sedationCard) {
        console.log('💤 프론트엔드 (옵션 클릭) - sedationCard 수신:', data.sedationCard);
        setSedationCardShown(true);
      }
      if (data.costWarningCard) {
        console.log('💰 프론트엔드 (옵션 클릭) - costWarningCard 수신:', data.costWarningCard);
      }
      if (data.doctorCredentialCard) {
        console.log('💊 프론트엔드 (옵션 클릭) - doctorCredentialCard 수신:', data.doctorCredentialCard);
      }
      if (data.eventBannerCard) {
        console.log('🎉 프론트엔드 (옵션 클릭) - eventBannerCard 수신:', data.eventBannerCard);
      }

      setMessages(prev => [...prev, assistantMessage]);

      // 심미 상담 경로 업데이트
      if (data.cosmeticPath) {
        setCosmeticPath(data.cosmeticPath);
      }

      // 질문 카운트 증가 (추천 단계가 아닐 때만)
      if (!data.isRecommendation && data.structuredQuestion) {
        setQuestionCount(prev => prev + 1);
      }

      // 상담 종료 시 상태 설정
      if (data.isRecommendation) {
        setIsConsultationEnded(true); // 상담 종료 상태 설정 (입력창 비활성화 유지)
      }
    } catch (error) {
      console.error('Error:', error);
      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: texts.errorMessage,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * 전신질환 다중 선택 확인 핸들러
   */
  const handleMultiSelectConfirm = async (options: { id: string; text: string }[]) => {
    if (isLoading || multiSelectOptions.length === 0) return;

    // 선택된 옵션들의 텍스트 가져오기
    const selectedTexts = multiSelectOptions.map(id => {
      const opt = options.find(o => o.id === id);
      return opt?.text || id;
    });

    // 답변 히스토리에 추가 (다중 선택은 콤마로 연결하여 하나의 항목으로)
    const combinedOptionId = multiSelectOptions.join(',');
    const combinedOptionText = selectedTexts.join(', ');
    const newAnswerHistory = [
      ...answerHistory,
      {
        optionId: combinedOptionId,
        questionType: answerHistory.length === 0 ? 'initial' : answerHistory[answerHistory.length - 1]?.optionId || 'unknown',
        optionText: combinedOptionText
      }
    ];
    setAnswerHistory(newAnswerHistory);

    // 사용자 메시지 생성 (선택된 항목들 표시)
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: selectedTexts.join(', '),
      timestamp: new Date(),
      selectedOptionId: multiSelectOptions.join(','),
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    setMultiSelectOptions([]); // 선택 초기화

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...messages, userMessage],
          consultationTopic: initialMessage,
          questionCount: questionCount + 1,
          answerHistory: newAnswerHistory,
          language,
          sedationCardShown
        }),
      });

      if (!response.ok) {
        throw new Error('API 요청에 실패했습니다');
      }

      const data = await response.json();

      const assistantMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.content,
        timestamp: new Date(),
        caseImages: data.caseImages,
        videoIframes: data.videoIframes,
        structuredQuestion: data.structuredQuestion,
        isRecommendation: data.isRecommendation,
        sedationCard: data.sedationCard,
        costWarningCard: data.costWarningCard,
        doctorCredentialCard: data.doctorCredentialCard,
        eventBannerCard: data.eventBannerCard,
        cosmeticPath: data.cosmeticPath,
        skipPhoneOption: data.skipPhoneOption
      };

      setMessages(prev => [...prev, assistantMessage]);

      // 심미 상담 경로 업데이트
      if (data.cosmeticPath) {
        setCosmeticPath(data.cosmeticPath);
      }

      if (!data.isRecommendation && data.structuredQuestion) {
        setQuestionCount(prev => prev + 1);
      }

      // 상담 종료 시 상태 설정
      if (data.isRecommendation) {
        setIsConsultationEnded(true);
      }
    } catch (error) {
      console.error('Error:', error);
      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: texts.errorMessage,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date()
    };

    // 직접 입력도 answerHistory에 추가 (옵션 클릭과 동일하게 처리)
    const newAnswerEntry = {
      optionId: 'direct_input',
      questionType: 'direct_input',
      optionText: input.trim()
    };
    const newAnswerHistory = [...answerHistory, newAnswerEntry];
    setAnswerHistory(newAnswerHistory);

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...messages, userMessage],
          consultationTopic: initialMessage,
          questionCount: questionCount + 1,
          answerHistory: newAnswerHistory,  // 업데이트된 히스토리 사용
          language,
          sedationCardShown
        }),
      });

      if (!response.ok) {
        throw new Error('API 요청에 실패했습니다');
      }

      const data = await response.json();

      console.log('📹 프론트엔드 (직접 입력) - API 응답 data:', data);
      console.log('📹 프론트엔드 (직접 입력) - videoIframes:', data.videoIframes);
      console.log('📹 프론트엔드 (직접 입력) - videoIframes 길이:', data.videoIframes?.length || 0);

      const assistantMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.content,
        timestamp: new Date(),
        caseImages: data.caseImages,
        videoIframes: data.videoIframes,
        structuredQuestion: data.structuredQuestion,
        isRecommendation: data.isRecommendation,
        sedationCard: data.sedationCard,
        costWarningCard: data.costWarningCard,
        doctorCredentialCard: data.doctorCredentialCard,
        eventBannerCard: data.eventBannerCard,
        cosmeticPath: data.cosmeticPath,
        skipPhoneOption: data.skipPhoneOption
      };

      console.log('📹 프론트엔드 (직접 입력) - assistantMessage:', assistantMessage);
      console.log('📹 프론트엔드 (직접 입력) - assistantMessage.videoIframes:', assistantMessage.videoIframes);
      if (data.sedationCard) {
        console.log('💤 프론트엔드 (직접 입력) - sedationCard 수신:', data.sedationCard);
        setSedationCardShown(true);
      }
      if (data.costWarningCard) {
        console.log('💰 프론트엔드 (직접 입력) - costWarningCard 수신:', data.costWarningCard);
      }
      if (data.doctorCredentialCard) {
        console.log('💊 프론트엔드 (직접 입력) - doctorCredentialCard 수신:', data.doctorCredentialCard);
      }
      if (data.eventBannerCard) {
        console.log('🎉 프론트엔드 (직접 입력) - eventBannerCard 수신:', data.eventBannerCard);
      }

      setMessages(prev => [...prev, assistantMessage]);

      // 심미 상담 경로 업데이트
      if (data.cosmeticPath) {
        setCosmeticPath(data.cosmeticPath);
      }

      // 추천 단계가 아니면 질문 카운트 증가
      if (!data.isRecommendation && data.structuredQuestion) {
        setQuestionCount(prev => prev + 1);
      }

      // 상담 종료 시 상태 설정
      if (data.isRecommendation) {
        setIsConsultationEnded(true); // 상담 종료 상태 설정 (입력창 비활성화 유지)
      }
    } catch (error) {
      console.error('Error:', error);
      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: texts.errorMessage,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const formatTimestamp = (date: Date) => {
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);

    if (diffMins < 1) return texts.justNow;
    if (diffMins < 60) return texts.minutesAgo(diffMins);

    return date.toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' });
  };

  /**
   * 상담 종료 함수 (사용자가 "상담 종료" 또는 "예약하겠습니다" 등을 입력했을 때)
   */
  const handleEndConsultation = () => {
    if (messages.length > 1) {
      saveConsultationLog();
      setIsConsultationEnded(true); // 상담 종료 상태 설정 (입력창 비활성화 유지)
      setShowEndModal(true); // 종료 모달 표시

      // localStorage 정리
      console.log('🧹 상담 종료 - localStorage 정리');
      localStorage.removeItem('consultationData');
      localStorage.removeItem('consultationLogId');
    }
  };

  /**
   * 예약 선택 저장 함수
   */
  const saveBookingChoice = async (type: 'naver' | 'phone', callTime?: string) => {
    if (!consultationLogId) {
      console.warn('⚠️ consultationLogId가 없어서 예약 선택을 저장할 수 없습니다.');
      return;
    }

    try {
      const response = await fetch('/api/consultations', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: consultationLogId,
          booking_type: type === 'naver' ? 'naver_reservation' : 'phone_consultation',
          preferred_call_time: callTime || null
        }),
      });

      if (!response.ok) {
        throw new Error('예약 선택 저장 실패');
      }

      console.log('✅ 예약 선택 저장 완료:', { type, callTime });
    } catch (error) {
      console.error('❌ 예약 선택 저장 실패:', error);
    }
  };

  /**
   * 네이버 예약 버튼 클릭 핸들러
   */
  const handleNaverReservation = async () => {
    await saveBookingChoice('naver');
    setSelectedBookingType('naver');
    setBookingStep('complete');
    // 네이버 예약 페이지 새 탭에서 열기
    window.open('https://m.booking.naver.com/booking/13/bizes/948237/items/7265917?area=ple&lang=ko', '_blank');
  };

  /**
   * 전화 상담 버튼 클릭 핸들러 - 바로 전화 걸기
   */
  const handlePhoneConsultation = () => {
    window.location.href = 'tel:031-611-3222';
  };

  /**
   * 통화 시간 선택 확인 핸들러
   */
  const handleTimeSelectConfirm = async () => {
    if (!selectedCallTime) return;
    await saveBookingChoice('phone', selectedCallTime);
    setSelectedBookingType('phone');
    setBookingStep('complete');
  };

  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Header */}
      <div className="bg-white px-4 py-[7px] flex items-center gap-3 justify-between border-b border-[#e9ebf1]">
        <button
          onClick={() => window.location.href = '/'}
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
        >
          <div className="w-9 h-9 rounded-full overflow-hidden">
            <div className="relative w-full h-full">
              <Image
                src="/logo_oneword.svg"
                alt="고덕퍼스트치과"
                width={36}
                height={36}
                className="object-cover"
              />
            </div>
          </div>
          <h1 className="font-['Pretendard_JP'] font-bold text-[15px] text-black tracking-[-0.3px] leading-[1.4]">
            {texts.headerTitle}
          </h1>
        </button>
        <button
          onClick={handleEndConsultation}
          disabled={isSavingLogUI || messages.length <= 1}
          className="px-3 py-1.5 bg-[#008095] text-white rounded-lg text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#006B7A] transition-colors"
        >
          {isSavingLogUI ? texts.savingButton : texts.endConsultationButton}
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 pt-5 pb-4 flex flex-col gap-5">
        {messages.map((message, index) => (
          <div key={message.id} ref={index === messages.length - 1 ? lastMessageRef : null}>
            {message.role === 'assistant' ? (
              <div className="flex gap-3 items-start max-w-full">
                <div className="w-[30px] h-[30px] flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                    <circle cx="15" cy="15" r="15" fill="white"/>
                    <mask id="mask0_1_5578" style={{maskType: "alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="30" height="30">
                      <circle cx="15" cy="15" r="15" fill="#D9D9D9"/>
                    </mask>
                    <g mask="url(#mask0_1_5578)">
                      <path d="M9.43949 6.84286C9.70916 5.71905 11.2908 5.71904 11.5605 6.84286L12.3025 9.93512C12.3988 10.3364 12.7088 10.6496 13.1059 10.7469L16.1659 11.4967C17.278 11.7693 17.278 13.3676 16.1659 13.6401L13.1059 14.3899C12.7088 14.4872 12.3988 14.8005 12.3025 15.2017L11.5605 18.294C11.2908 19.4178 9.70916 19.4178 9.43949 18.294L8.69748 15.2017C8.6012 14.8005 8.29118 14.4872 7.89413 14.3899L4.83408 13.6401C3.72197 13.3676 3.72197 11.7693 4.83408 11.4967L7.89413 10.7469C8.29118 10.6496 8.6012 10.3364 8.69748 9.93512L9.43949 6.84286Z" fill="#006AFF"/>
                      <path d="M18.3474 17.6345C18.5133 16.9429 19.4867 16.9429 19.6526 17.6345L20.1092 19.5374C20.1685 19.7843 20.3593 19.9771 20.6036 20.037L22.4867 20.4984C23.1711 20.6661 23.1711 21.6497 22.4867 21.8174L20.6036 22.2788C20.3593 22.3387 20.1685 22.5315 20.1092 22.7784L19.6526 24.6813C19.4867 25.3729 18.5133 25.3729 18.3474 24.6813L17.8908 22.7784C17.8315 22.5315 17.6407 22.3387 17.3964 22.2788L15.5133 21.8174C14.8289 21.6497 14.8289 20.6661 15.5133 20.4984L17.3964 20.037C17.6407 19.9771 17.8315 19.7843 17.8908 19.5374L18.3474 17.6345Z" fill="#006AFF"/>
                      <path d="M21.5717 6.71933C21.6806 6.26549 22.3194 6.26549 22.4283 6.71933L22.7279 7.96813C22.7668 8.13017 22.892 8.25668 23.0524 8.29597L24.2882 8.59879C24.7373 8.70884 24.7373 9.35432 24.2882 9.46437L23.0524 9.76718C22.892 9.80648 22.7668 9.93299 22.7279 10.095L22.4283 11.3438C22.3194 11.7977 21.6806 11.7977 21.5717 11.3438L21.2721 10.095C21.2332 9.93299 21.108 9.80648 20.9476 9.76718L19.7118 9.46437C19.2627 9.35432 19.2627 8.70884 19.7118 8.59879L20.9476 8.29597C21.108 8.25668 21.2332 8.13017 21.2721 7.96813L21.5717 6.71933Z" fill="#006AFF"/>
                      <path fillRule="evenodd" clipRule="evenodd" d="M22 6.94089L21.7554 7.96013C21.6577 8.36754 21.3429 8.68564 20.9397 8.78443L19.9311 9.03158L20.9397 9.27873C21.3429 9.37752 21.6577 9.69562 21.7554 10.103L22 11.1223L22.2446 10.103C22.3423 9.69562 22.6571 9.37752 23.0603 9.27873L24.0689 9.03158L23.0603 8.78443C22.6571 8.68564 22.3423 8.36754 22.2446 7.96013L22 6.94089ZM22.4895 6.38901C22.365 5.87033 21.635 5.87033 21.5105 6.38901L21.1681 7.81621C21.1236 8.00139 20.9805 8.14598 20.7973 8.19089L19.385 8.53696C18.8717 8.66274 18.8717 9.40042 19.385 9.5262L20.7973 9.87227C20.9805 9.91718 21.1236 10.0618 21.1681 10.2469L21.5105 11.6741C21.635 12.1928 22.365 12.1928 22.4895 11.6741L22.8319 10.2469C22.8764 10.0618 23.0195 9.91718 23.2027 9.87227L24.615 9.5262C25.1283 9.40042 25.1283 8.66274 24.615 8.53696L23.2027 8.19089C23.0195 8.14598 22.8764 8.00139 22.8319 7.81621L22.4895 6.38901Z" fill="#006AFF"/>
                    </g>
                  </svg>
                </div>
                <div className="flex-1 min-w-0 pt-1">
                  <div className="font-['Pretendard_JP'] font-medium text-[15px] text-black tracking-[-0.3px] leading-[1.4] break-words overflow-wrap-anywhere">
                    <ReactMarkdown
                      remarkPlugins={[remarkGfm]}
                      rehypePlugins={[rehypeRaw]}
                      components={{
                        iframe: ({src, ...props}) => {
                          // YouTube Shorts 감지 (세로형)
                          const isShorts = src?.includes('/shorts/');

                          return (
                            <div className="flex justify-center my-4">
                              <div
                                className="relative"
                                style={isShorts
                                  ? {width: '280px', height: '500px'} // 숏폼: 세로 비율
                                  : {width: '100%', paddingBottom: '56.25%'} // 롱폼: 16:9 비율
                                }
                              >
                                <iframe
                                  src={src}
                                  className="absolute top-0 left-0 w-full h-full rounded-lg border-0 shadow-lg"
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                  allowFullScreen
                                  {...props}
                                />
                              </div>
                            </div>
                          );
                        },
                        a: ({href, children}) => {
                          const isInstagram = href?.includes('instagram.com');
                          const isYouTube = href?.includes('youtube.com') || href?.includes('youtu.be');
                          return (
                            <a
                              href={href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`
                                inline-flex items-center gap-1 px-2 py-1 rounded-lg
                                ${isInstagram ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600' :
                                  isYouTube ? 'bg-red-600 text-white hover:bg-red-700' :
                                  'text-[#008095] hover:underline'}
                                font-medium transition-all
                              `}
                            >
                              {children}
                            </a>
                          );
                        },
                        h2: ({children}) => <h2 className="font-bold text-base mt-3 mb-2">{children}</h2>,
                        h3: ({children}) => <h3 className="font-bold text-sm mt-3 mb-2">{children}</h3>,
                        p: ({children}) => {
                          const text = String(children);
                          if (text.startsWith('📌') || text.startsWith('💡') || text.startsWith('⚡')) {
                            return <p className="font-semibold text-sm mt-3 mb-2">{children}</p>;
                          }
                          if (text.startsWith('**') && text.endsWith('**')) {
                            return <p className="font-semibold text-sm mt-2 mb-1">{children}</p>;
                          }
                          return <p className="text-sm mb-2 leading-relaxed">{children}</p>;
                        },
                        ul: ({children}) => <ul className="ml-4 mb-2 space-y-1 list-disc">{children}</ul>,
                        ol: ({children}) => <ol className="ml-4 mb-2 space-y-1 list-decimal">{children}</ol>,
                        li: ({children}) => <li className="text-sm ml-2">{children}</li>,
                        strong: ({children}) => <strong className="font-semibold">{children}</strong>,
                        del: ({children}) => <span>{children}</span>,
                        hr: () => <hr className="my-3 border-[#e9ebf1]" />,
                        blockquote: ({children}) => (
                          <blockquote className="border-l-3 border-[#008095] pl-3 my-2 italic text-sm">
                            {children}
                          </blockquote>
                        ),
                        table: ({children}) => (
                          <table className="my-3 w-full text-xs border-collapse">
                            {children}
                          </table>
                        ),
                        th: ({children}) => (
                          <th className="bg-[#f3f6fb] p-2 border border-[#e9ebf1] font-semibold text-left">
                            {children}
                          </th>
                        ),
                        td: ({children}) => (
                          <td className="p-2 border border-[#e9ebf1]">
                            {children}
                          </td>
                        ),
                      }}
                    >
                      {/* 가격 패턴의 ~ 를 취소선으로 해석하지 않도록 en dash로 변환 */}
                      {message.content.replace(/(\d+)\s*~\s*(\d+)/g, '$1\u2013$2')}
                    </ReactMarkdown>
                  </div>
                  {message.image && (
                    <div className="mt-3 relative w-full aspect-video">
                      <Image
                        src={message.image}
                        alt="Before & After 이미지"
                        fill
                        className="rounded-xl shadow-lg object-cover"
                        loading="lazy"
                      />
                    </div>
                  )}

                  {/* 의식하진정요법 어필 카드 */}
                  {message.sedationCard?.show && (
                    <SedationAppealCard sedationCard={message.sedationCard} />
                  )}

                  {/* 저가 덤핑 주의 카드 */}
                  {message.costWarningCard?.show && (
                    <CostWarningCard costWarningCard={message.costWarningCard} />
                  )}

                  {/* 원장 소개 카드 (심미 상담용) */}
                  {message.doctorCredentialCard?.show && (
                    <div className="bg-gradient-to-br from-[#f8faff] to-[#fff] rounded-2xl p-5 mt-4 border border-[#e8ecf4] shadow-sm">
                      {/* 헤더 */}
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-8 h-8 bg-[#008095] rounded-full flex items-center justify-center flex-shrink-0">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="white"/>
                          </svg>
                        </div>
                        <span className="text-[#008095] font-bold text-[16px]">{message.doctorCredentialCard.headerText}</span>
                      </div>

                      {/* 서술형 소개 */}
                      <div className="text-[14px] text-[#444] leading-[1.7] mb-4">
                        <p className="mb-2">
                          고덕퍼스트치과 이동현 대표원장은 <strong className="text-[#008095]">통합치의학과 전문의</strong>이자 <strong className="text-[#008095]">조선대학교 치과병원 외래교수</strong>입니다.
                        </p>
                        <p className="mb-2">
                          구강 전체를 종합적으로 진단하고 치료하는 통합치의학 전문의로서, 임플란트부터 보철, 신경치료까지 <strong className="text-[#008095]">원스톱 진료</strong>가 가능합니다. 과잉진료 없는 양심진료를 원칙으로 합니다.
                        </p>
                        <p className="text-[13px] text-[#666] mt-3 bg-[#f5f7fa] p-2 rounded-lg">
                          ✨ 풍부한 임상경험과 전문 자격을 바탕으로 책임진료해 드립니다.
                        </p>
                      </div>

                      {/* 환자 영상 */}
                      {message.doctorCredentialCard.patientVideo && (
                        <div className="rounded-xl overflow-hidden">
                          <video
                            src={message.doctorCredentialCard.patientVideo}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full"
                          />
                        </div>
                      )}
                    </div>
                  )}

                  {/* 이벤트 배너 카드 (심미 상담용) */}
                  {message.eventBannerCard?.show && (
                    <div
                      className={`bg-gradient-to-r from-[#ff6b6b] to-[#ff8e53] rounded-xl p-4 mt-4 text-white ${message.eventBannerCard.isUrgent ? 'animate-pulse' : ''}`}
                      style={message.eventBannerCard.isUrgent ? { animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite' } : undefined}
                    >
                      <div className="text-center">
                        <div className="text-sm mb-1">🎉 마감임박!</div>
                        <div className="text-xl font-bold">{message.eventBannerCard.eventTitle}</div>
                        <div className="text-2xl font-black my-2">{message.eventBannerCard.price}</div>
                        <button
                          onClick={() => window.open(message.eventBannerCard!.ctaUrl, '_blank')}
                          className="bg-white text-[#ff6b6b] px-6 py-2 rounded-full font-bold mt-2 hover:bg-gray-100 transition-colors"
                        >
                          {message.eventBannerCard.ctaText}
                        </button>
                      </div>
                    </div>
                  )}

                  {/* 영상 iframe 렌더링 (먼저 표시) */}
                  {message.videoIframes && message.videoIframes.length > 0 && (() => {
                    // 수면치료 영상과 일반 치료 영상 분리
                    const SEDATION_VIDEO_ID = 'WB3M_Uw5X_s';
                    const sedationVideos = message.videoIframes.filter(iframe => iframe.includes(SEDATION_VIDEO_ID));
                    const treatmentVideos = message.videoIframes.filter(iframe => !iframe.includes(SEDATION_VIDEO_ID));

                    return (
                      <>
                        {/* 일반 치료 영상 */}
                        {treatmentVideos.length > 0 && (
                          <div className="mt-4 flex flex-col gap-3">
                            <div className="flex items-center gap-2 pb-2 border-b border-[#e9ebf1]">
                              <svg className="w-5 h-5 text-[#008095]" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"/>
                              </svg>
                              <p className="font-semibold text-sm text-[#292a2f]">{texts.treatmentVideosLabel}</p>
                            </div>
                            {treatmentVideos.map((iframeHtml, idx) => {
                              const srcMatch = iframeHtml.match(/src="([^"]+)"/);
                              const src = srcMatch ? srcMatch[1] : '';
                              if (!src) return null;
                              return (
                                <div key={idx} className="w-full">
                                  <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                                    <iframe
                                      src={src}
                                      className="absolute top-0 left-0 w-full h-full rounded-lg border-0 shadow-lg"
                                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                      allowFullScreen
                                    />
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        )}

                        {/* 수면치료(의식하진정) 영상 */}
                        {sedationVideos.length > 0 && (
                          <div className="mt-4 flex flex-col gap-3">
                            <div className="flex items-center gap-2 pb-2 border-b border-[#e9ebf1]">
                              <svg className="w-5 h-5 text-[#9b59b6]" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/>
                              </svg>
                              <p className="font-semibold text-sm text-[#292a2f]">{texts.sedationVideosLabel}</p>
                            </div>
                            {sedationVideos.map((iframeHtml, idx) => {
                              const srcMatch = iframeHtml.match(/src="([^"]+)"/);
                              const src = srcMatch ? srcMatch[1] : '';
                              if (!src) return null;
                              return (
                                <div key={`sedation-${idx}`} className="w-full">
                                  <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                                    <iframe
                                      src={src}
                                      className="absolute top-0 left-0 w-full h-full rounded-lg border-0 shadow-lg"
                                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                      allowFullScreen
                                    />
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </>
                    );
                  })()}

                  {/* 미백 케이스 전용 그리드 렌더링 (작게 많이) */}
                  {message.caseImages && message.caseImages.length > 0 && message.cosmeticPath === 'whitening' && (
                    <div className="mt-4 flex flex-col gap-3">
                      <div className="flex items-center gap-2 pb-2 border-b border-[#e9ebf1]">
                        <svg className="w-5 h-5 text-[#008095]" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                          <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                        </svg>
                        <p className="font-semibold text-sm text-[#292a2f]">다양한 미백 사례</p>
                      </div>

                      {/* 2열 그리드 - 작게 많이 */}
                      <div className="grid grid-cols-2 gap-2">
                        {message.caseImages.map((caseImg, idx) => (
                          <div key={idx} className="bg-white border border-[#f0f2f5] rounded-xl overflow-hidden">
                            {/* Before/After 가로 배치 */}
                            <div className="flex">
                              <div className="flex-1 relative">
                                <Image
                                  src={caseImg.beforeImage}
                                  alt="Before"
                                  width={100}
                                  height={80}
                                  className="w-full h-[70px] object-cover"
                                />
                                <span className="absolute bottom-1 left-1 bg-black/50 text-white text-[9px] px-1 rounded">전</span>
                              </div>
                              <div className="flex-1 relative">
                                <Image
                                  src={caseImg.afterImage}
                                  alt="After"
                                  width={100}
                                  height={80}
                                  className="w-full h-[70px] object-cover"
                                />
                                <span className="absolute bottom-1 right-1 bg-[#008095]/80 text-white text-[9px] px-1 rounded">후</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* 케이스 이미지 렌더링 (일반 - 미백 제외) */}
                  {message.caseImages && message.caseImages.length > 0 && message.cosmeticPath !== 'whitening' && (
                    <div className="mt-4 flex flex-col gap-4">
                      <div className="flex items-center gap-2 pb-2 border-b border-[#e9ebf1]">
                        <svg className="w-5 h-5 text-[#008095]" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                          <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                        </svg>
                        <p className="font-semibold text-sm text-[#292a2f]">{texts.caseStudiesTitle}</p>
                      </div>

                      {/* 첫 2개 케이스: 세로 전체 너비 표시 */}
                      {message.caseImages.slice(0, 2).map((caseImg, idx) => (
                        <div key={idx} className="bg-white border border-[#f3f6fb] rounded-[20px] overflow-hidden">
                          <div className="flex flex-col gap-3 p-4">
                            {/* 케이스 제목 */}
                            <p className="font-bold text-[15px] text-black tracking-[-0.3px]">
                              {caseImg.title}
                            </p>

                            {/* Before/After 이미지 (3단계 또는 2단계) */}
                            {caseImg.intermediateImage ? (
                              /* 3단계 타임라인: Before → 당일 임시치아 → After */
                              <div className="flex flex-col">
                                {/* Before */}
                                <div className="relative w-full">
                                  <div className="h-[160px] w-full rounded-[16px] overflow-hidden relative bg-[#f3f6fb]">
                                    <Image
                                      src={caseImg.beforeImage}
                                      alt={texts.beforeImageAlt}
                                      fill
                                      className="object-contain"
                                    />
                                  </div>
                                  <div className="absolute top-2 left-2 bg-[#292a2f] px-2 py-1 rounded-lg z-10">
                                    <p className="font-semibold text-[11px] text-white tracking-[-0.22px]">
                                      {texts.beforeLabel}
                                    </p>
                                  </div>
                                </div>

                                {/* 타임라인 연결선 1 */}
                                <div className="flex justify-center py-1">
                                  <div className="flex flex-col items-center">
                                    <div className="w-0.5 h-4 bg-gradient-to-b from-[#292a2f] to-[#d4a574]"></div>
                                    <div className="text-[#d4a574] text-lg">↓</div>
                                  </div>
                                </div>

                                {/* 당일 임시치아 (강조) */}
                                <div className="relative w-full">
                                  <div className="h-[160px] w-full rounded-[16px] overflow-hidden relative bg-gradient-to-r from-[#fdf8f3] to-[#fff9f2] border-2 border-[#d4a574]">
                                    <Image
                                      src={caseImg.intermediateImage}
                                      alt={caseImg.intermediateLabel || '수술 당일 임시치아'}
                                      fill
                                      className="object-contain"
                                    />
                                  </div>
                                  <div className="absolute top-2 left-2 bg-gradient-to-r from-[#d4a574] to-[#c8955e] px-2 py-1 rounded-lg z-10 flex items-center gap-1">
                                    <span className="text-[11px]">⭐</span>
                                    <p className="font-semibold text-[11px] text-white tracking-[-0.22px]">
                                      {caseImg.intermediateLabel || '수술 당일 임시치아'}
                                    </p>
                                  </div>
                                  {/* 강조 메시지 */}
                                  <div className="absolute bottom-2 left-2 right-2 bg-[#d4a574]/90 px-3 py-1.5 rounded-lg z-10">
                                    <p className="font-bold text-[12px] text-white text-center tracking-[-0.24px]">
                                      {language === 'ko' ? '바로 일상생활 복귀 가능!' :
                                       language === 'en' ? 'Return to daily life immediately!' :
                                       language === 'jp' ? 'すぐに日常生活に復帰可能！' :
                                       '可立即恢复日常生活！'}
                                    </p>
                                  </div>
                                </div>

                                {/* 타임라인 연결선 2 */}
                                <div className="flex justify-center py-1">
                                  <div className="flex flex-col items-center">
                                    <div className="w-0.5 h-4 bg-gradient-to-b from-[#d4a574] to-[#008095]"></div>
                                    <div className="text-[#008095] text-lg">↓</div>
                                  </div>
                                </div>

                                {/* After */}
                                <div className="relative w-full">
                                  <div className="h-[160px] w-full rounded-[16px] overflow-hidden relative bg-[#f3f6fb]">
                                    <Image
                                      src={caseImg.afterImage}
                                      alt={texts.afterImageAlt}
                                      fill
                                      className="object-contain"
                                    />
                                  </div>
                                  {/* After badge with gradient */}
                                  <div className="absolute top-0 left-0 w-[150px] h-[70px]">
                                    <Image
                                      src="/images/after-badge.svg"
                                      alt=""
                                      fill
                                      className="object-contain"
                                    />
                                  </div>
                                  <div className="absolute top-2 left-2">
                                    <p className="font-semibold text-[11px] text-white tracking-[-0.22px]">
                                      {texts.afterLabel}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            ) : (
                              /* 기존 2단계: Before → After */
                              <div className="flex flex-col gap-2">
                                {/* Before */}
                                <div className="relative w-full">
                                  <div className="h-[160px] w-full rounded-[16px] overflow-hidden relative bg-[#f3f6fb]">
                                    <Image
                                      src={caseImg.beforeImage}
                                      alt={texts.beforeImageAlt}
                                      fill
                                      className="object-contain"
                                    />
                                  </div>
                                  <div className="absolute top-2 left-2 bg-[#292a2f] px-2 py-1 rounded-lg z-10">
                                    <p className="font-semibold text-[11px] text-white tracking-[-0.22px]">
                                      {texts.beforeLabel}
                                    </p>
                                  </div>
                                </div>

                                {/* After */}
                                <div className="relative w-full">
                                  <div className="h-[160px] w-full rounded-[16px] overflow-hidden relative bg-[#f3f6fb]">
                                    <Image
                                      src={caseImg.afterImage}
                                      alt={texts.afterImageAlt}
                                      fill
                                      className="object-contain"
                                    />
                                  </div>
                                  {/* After badge with gradient */}
                                  <div className="absolute top-0 left-0 w-[150px] h-[70px]">
                                    <Image
                                      src="/images/after-badge.svg"
                                      alt=""
                                      fill
                                      className="object-contain"
                                    />
                                  </div>
                                  <div className="absolute top-2 left-2">
                                    <p className="font-semibold text-[11px] text-white tracking-[-0.22px]">
                                      {texts.afterLabel}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            )}

                            {/* 결과 설명 */}
                            <p className="text-[13px] text-[#5d5f6d] tracking-[-0.26px] leading-[1.4]">
                              {caseImg.description}
                            </p>
                          </div>
                        </div>
                      ))}

                      {/* 3번째 케이스부터: 가로 스크롤 */}
                      {message.caseImages.length > 2 && (
                        <div className="overflow-x-auto -mx-4 px-4 pb-2">
                          <div className="flex gap-3" style={{ width: 'max-content' }}>
                            {message.caseImages.slice(2).map((caseImg, idx) => (
                              <div key={idx + 2} className="bg-white border border-[#f3f6fb] rounded-[16px] overflow-hidden" style={{ width: '280px', flexShrink: 0 }}>
                                <div className="flex flex-col gap-2 p-3">
                                  {/* 케이스 제목 */}
                                  <p className="font-bold text-[13px] text-black tracking-[-0.26px] line-clamp-2">
                                    {caseImg.title}
                                  </p>

                                  {/* Before/After 이미지 (간소화) */}
                                  <div className="flex gap-2">
                                    {/* Before */}
                                    <div className="relative flex-1">
                                      <div className="h-[100px] w-full rounded-[12px] overflow-hidden relative bg-[#f3f6fb]">
                                        <Image
                                          src={caseImg.beforeImage}
                                          alt={texts.beforeImageAlt}
                                          fill
                                          className="object-contain"
                                        />
                                      </div>
                                      <div className="absolute top-1 left-1 bg-[#292a2f] px-1.5 py-0.5 rounded-md z-10">
                                        <p className="font-semibold text-[9px] text-white tracking-[-0.18px]">
                                          {texts.beforeLabel}
                                        </p>
                                      </div>
                                    </div>

                                    {/* After */}
                                    <div className="relative flex-1">
                                      <div className="h-[100px] w-full rounded-[12px] overflow-hidden relative bg-[#f3f6fb]">
                                        <Image
                                          src={caseImg.afterImage}
                                          alt={texts.afterImageAlt}
                                          fill
                                          className="object-contain"
                                        />
                                      </div>
                                      <div className="absolute top-1 left-1 bg-[#008095] px-1.5 py-0.5 rounded-md z-10">
                                        <p className="font-semibold text-[9px] text-white tracking-[-0.18px]">
                                          {texts.afterLabel}
                                        </p>
                                      </div>
                                    </div>
                                  </div>

                                  {/* 결과 설명 */}
                                  <p className="text-[11px] text-[#5d5f6d] tracking-[-0.22px] leading-[1.3] line-clamp-2">
                                    {caseImg.description}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* 구조화된 질문 렌더링 */}
                  {message.structuredQuestion && !message.isRecommendation && (() => {
                    // 마지막 AI 메시지인지 확인 (이전 메시지의 선택지는 비활성화)
                    const isLastAssistantMessage = index === messages.filter(m => m.role === 'assistant').length * 2 - 1 ||
                      messages.slice(index + 1).every(m => m.role !== 'assistant');
                    const isAnswered = index < messages.length - 1 && messages[index + 1]?.role === 'user';
                    const canInteract = isLastAssistantMessage && !isAnswered;

                    return (
                    <div className="mt-4 flex flex-col gap-3">
                      <div className="flex items-center gap-2 pb-2 border-b border-[#e9ebf1]">
                        <svg className="w-5 h-5 text-[#008095]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p className="font-semibold text-sm text-[#292a2f]">{message.structuredQuestion.question}</p>
                      </div>

                      {/* 객관식 선택지 (options이 있을 때만) */}
                      {message.structuredQuestion.options.length > 0 && (
                        isDiseaseQuestion(message.structuredQuestion.options) ? (
                          // 전신질환 다중 선택 UI
                          <div className="flex flex-col gap-2">
                            <p className="text-xs text-[#727582] mb-1">{texts.multiSelectHint}</p>
                            {message.structuredQuestion.options.map((option) => {
                              const isSelected = multiSelectOptions.includes(option.id);
                              return (
                                <button
                                  key={option.id}
                                  onClick={() => handleMultiSelectToggle(option.id)}
                                  disabled={isLoading || !canInteract}
                                  className={`w-full text-left border-2 rounded-[16px] px-4 py-3 font-['Pretendard_JP'] font-medium text-[14px] tracking-[-0.28px] leading-[1.4] transition-all active:scale-[0.98] flex items-center gap-3 ${
                                    canInteract
                                      ? isSelected
                                        ? 'bg-[#f3f6fb] border-[#008095] text-[#008095]'
                                        : 'bg-white border-[#e9ebf1] text-[#292a2f] hover:border-[#008095] hover:bg-[#f3f6fb]'
                                      : 'bg-gray-50 border-gray-200 text-gray-400 cursor-not-allowed'
                                  }`}
                                >
                                  {/* 체크박스 아이콘 */}
                                  <span className={`w-5 h-5 flex items-center justify-center rounded border-2 ${
                                    isSelected ? 'bg-[#008095] border-[#008095]' : 'bg-white border-[#c4c8d0]'
                                  }`}>
                                    {isSelected && (
                                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                      </svg>
                                    )}
                                  </span>
                                  {option.text}
                                </button>
                              );
                            })}
                            {/* 선택 완료 버튼 */}
                            {multiSelectOptions.length > 0 && canInteract && (
                              <button
                                onClick={() => handleMultiSelectConfirm(message.structuredQuestion!.options)}
                                disabled={isLoading}
                                className="w-full mt-2 py-3 bg-[#008095] text-white rounded-[16px] font-['Pretendard_JP'] font-bold text-[14px] tracking-[-0.28px] hover:bg-[#006B7A] transition-colors active:scale-[0.98] disabled:opacity-50"
                              >
                                {texts.multiSelectConfirm}
                              </button>
                            )}
                          </div>
                        ) : (
                          // 기존 단일 선택 UI
                          <div className="flex flex-col gap-2">
                            {message.structuredQuestion.options.map((option) => (
                              <button
                                key={option.id}
                                onClick={() => handleOptionClick(
                                  option.id,
                                  option.text,
                                  answerHistory.length === 0 ? 'initial' : answerHistory[answerHistory.length - 1]?.optionId || 'unknown'
                                )}
                                disabled={isLoading || !canInteract}
                                className={`w-full text-left border-2 rounded-[16px] px-4 py-3 font-['Pretendard_JP'] font-medium text-[14px] tracking-[-0.28px] leading-[1.4] transition-all active:scale-[0.98] ${
                                  canInteract
                                    ? 'bg-white border-[#e9ebf1] text-[#292a2f] hover:border-[#008095] hover:bg-[#f3f6fb] disabled:opacity-50 disabled:cursor-not-allowed'
                                    : 'bg-gray-50 border-gray-200 text-gray-400 cursor-not-allowed'
                                }`}
                              >
                                {option.text}
                              </button>
                            ))}
                          </div>
                        )
                      )}

                      {/* 주관식 입력 옵션 (allowCustomInput이 true일 때만) */}
                      {message.structuredQuestion.allowCustomInput && (
                        <div className={message.structuredQuestion.options.length > 0 ? "pt-2 border-t border-[#e9ebf1]" : ""}>
                          {message.structuredQuestion.options.length > 0 ? (
                            <>
                              <p className="text-xs text-[#727582] mb-2">{texts.customInputHint}</p>
                              <div className="text-xs text-[#aab2c1] italic">
                                {texts.customInputInstruction}
                              </div>
                            </>
                          ) : (
                            <p className="text-xs text-[#aab2c1] italic">
                              {message.structuredQuestion.placeholder || texts.customInputInstruction}
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                    );
                  })()}

                  <p className="font-['Pretendard_JP'] font-normal text-[12px] text-[#727582] tracking-[-0.24px] leading-[1.4] mt-1">
                    {formatTimestamp(message.timestamp)}
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex justify-end">
                <div className="bg-[#008095] rounded-[20px] px-3 py-[10px] max-w-[80%]">
                  <p className="font-['Pretendard_JP'] font-medium text-[15px] text-white tracking-[-0.3px] leading-[1.4] text-left">
                    {message.content}
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}

        {/* 예약 버튼 UI - 상담 종료 후 표시 */}
        {isConsultationEnded && bookingStep !== 'complete' && (
          <div className="mt-4 bg-[#f8f9fc] rounded-[20px] p-4 mx-1">
            {bookingStep === 'options' && (
              <>
                <p className="font-['Pretendard_JP'] font-semibold text-[15px] text-[#292a2f] tracking-[-0.3px] mb-4 text-center">
                  {texts.bookingTitle}
                </p>
                <div className="flex flex-col gap-3">
                  {/* 네이버 예약 버튼 */}
                  <button
                    onClick={handleNaverReservation}
                    className="w-full py-4 bg-[#03C75A] text-white rounded-[12px] font-['Pretendard_JP'] font-bold text-[15px] tracking-[-0.3px] hover:bg-[#02b351] transition-colors active:scale-[0.98] flex items-center justify-center gap-2"
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="20" height="20" rx="4" fill="white"/>
                      <path d="M13.5 6.5V13.5H11.5L8.5 9.5V13.5H6.5V6.5H8.5L11.5 10.5V6.5H13.5Z" fill="#03C75A"/>
                    </svg>
                    {texts.naverButton}
                  </button>
                  <p className="text-center text-[12px] text-[#03C75A] font-medium -mt-1 mb-1">
                    💡 {texts.naverHint}
                  </p>

                  {/* 전화 상담 버튼 - 임플란트 상담일 때만 표시 (심미 상담 제외) */}
                  {initialMessage?.toLowerCase().includes('임플란트') && !cosmeticPath && (
                    <button
                      onClick={handlePhoneConsultation}
                      className="w-full py-4 bg-[#008095] text-white rounded-[12px] font-['Pretendard_JP'] font-bold text-[15px] tracking-[-0.3px] hover:bg-[#006B7A] transition-colors active:scale-[0.98] flex items-center justify-center gap-2"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7294C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1468 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5342 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.19 12.85C3.49997 10.2412 2.44824 7.27099 2.12 4.18C2.09501 3.90347 2.12787 3.62476 2.2165 3.36162C2.30513 3.09849 2.44757 2.85669 2.63477 2.65162C2.82196 2.44655 3.04981 2.28271 3.30379 2.17052C3.55778 2.05833 3.83234 2.00026 4.11 2H7.11C7.59531 1.99522 8.06579 2.16708 8.43376 2.48353C8.80173 2.79999 9.04208 3.23945 9.11 3.72C9.23662 4.68007 9.47145 5.62273 9.81 6.53C9.94455 6.88792 9.97366 7.27691 9.89391 7.65088C9.81415 8.02485 9.62886 8.36811 9.36 8.64L8.09 9.91C9.51355 12.4135 11.5865 14.4865 14.09 15.91L15.36 14.64C15.6319 14.3711 15.9752 14.1859 16.3491 14.1061C16.7231 14.0263 17.1121 14.0555 17.47 14.19C18.3773 14.5286 19.3199 14.7634 20.28 14.89C20.7658 14.9585 21.2094 15.2032 21.5265 15.5775C21.8437 15.9518 22.0122 16.4296 22 16.92Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {texts.phoneButton}
                    </button>
                  )}
                </div>
              </>
            )}

            {bookingStep === 'time_select' && (
              <>
                <div className="text-center mb-4">
                  <p className="font-['Pretendard_JP'] font-bold text-[16px] text-[#292a2f] tracking-[-0.32px] mb-2">
                    {texts.phoneTitle}
                  </p>
                  <p className="font-['Pretendard_JP'] font-medium text-[14px] text-[#5d5f6d] tracking-[-0.28px] whitespace-pre-line">
                    {texts.phoneMessage}
                  </p>
                </div>

                <p className="font-['Pretendard_JP'] font-semibold text-[14px] text-[#292a2f] tracking-[-0.28px] mb-3">
                  {texts.timeSelectTitle}
                </p>

                <div className="flex flex-col gap-2 mb-4">
                  {[
                    { value: texts.morning, label: texts.morning },
                    { value: texts.lunch, label: texts.lunch },
                    { value: texts.afternoon, label: texts.afternoon }
                  ].map((time) => (
                    <label
                      key={time.value}
                      className={`flex items-center gap-3 p-3 border-2 rounded-[12px] cursor-pointer transition-all ${
                        selectedCallTime === time.value
                          ? 'border-[#008095] bg-[#e6f7fa]'
                          : 'border-[#e9ebf1] hover:border-[#008095] hover:bg-[#f8f9fc]'
                      }`}
                    >
                      <input
                        type="radio"
                        name="callTime"
                        value={time.value}
                        checked={selectedCallTime === time.value}
                        onChange={(e) => setSelectedCallTime(e.target.value)}
                        className="w-5 h-5 text-[#008095] border-gray-300 focus:ring-[#008095]"
                      />
                      <span className="font-['Pretendard_JP'] font-medium text-[14px] text-[#292a2f] tracking-[-0.28px]">
                        {time.label}
                      </span>
                    </label>
                  ))}
                </div>

                <button
                  onClick={handleTimeSelectConfirm}
                  disabled={!selectedCallTime}
                  className="w-full py-4 bg-[#008095] text-white rounded-[12px] font-['Pretendard_JP'] font-bold text-[15px] tracking-[-0.3px] hover:bg-[#006B7A] transition-colors active:scale-[0.98] disabled:bg-[#d2d6e1] disabled:cursor-not-allowed"
                >
                  {texts.confirmButton}
                </button>
              </>
            )}
          </div>
        )}

        {/* 예약 완료 메시지 */}
        {isConsultationEnded && bookingStep === 'complete' && (
          <div className="mt-4 bg-[#e6f7fa] rounded-[20px] p-4 mx-1 text-center">
            <div className="mb-2 flex justify-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <p className="font-['Pretendard_JP'] font-semibold text-[15px] text-[#292a2f] tracking-[-0.3px] whitespace-pre-line">
              {selectedBookingType === 'naver' ? texts.naverThankYouMessage : texts.thankYouMessage}
            </p>
            {/* 전화 상담 + 영업시간일 때 직접 통화 안내 */}
            {selectedBookingType === 'phone' && isWithinBusinessHours() && (
              <div className="mt-3 pt-3 border-t border-[#d4e2f7]">
                <p className="font-['Pretendard_JP'] font-medium text-[14px] text-[#008095] tracking-[-0.28px] whitespace-pre-line">
                  {texts.directCallMessage.split('031-611-3222').map((part, idx, arr) => (
                    <span key={idx}>
                      {part}
                      {idx < arr.length - 1 && <strong className="font-bold">031-611-3222</strong>}
                    </span>
                  ))}
                </p>
              </div>
            )}
          </div>
        )}

        {/* 전화번호 안내 카드 - 상담 종료 후 항상 표시 */}
        {isConsultationEnded && (
          <div className="mt-3 bg-white border border-[#e9ebf1] rounded-[16px] p-4 mx-1">
            <div className="flex items-center gap-3">
              {/* 전화 아이콘 */}
              <div className="w-10 h-10 bg-[#008095]/10 rounded-full flex items-center justify-center flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7294C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1468 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5342 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.19 12.85C3.49997 10.2412 2.44824 7.27099 2.12 4.18C2.09501 3.90347 2.12787 3.62476 2.2165 3.36162C2.30513 3.09849 2.44757 2.85669 2.63477 2.65162C2.82196 2.44655 3.04981 2.28271 3.30379 2.17052C3.55778 2.05833 3.83234 2.00026 4.11 2H7.11C7.59531 1.99522 8.06579 2.16708 8.43376 2.48353C8.80173 2.79999 9.04208 3.23945 9.11 3.72C9.23662 4.68007 9.47145 5.62273 9.81 6.53C9.94455 6.88792 9.97366 7.27691 9.89391 7.65088C9.81415 8.02485 9.62886 8.36811 9.36 8.64L8.09 9.91C9.51355 12.4135 11.5865 14.4865 14.09 15.91L15.36 14.64C15.6319 14.3711 15.9752 14.1859 16.3491 14.1061C16.7231 14.0263 17.1121 14.0555 17.47 14.19C18.3773 14.5286 19.3199 14.7634 20.28 14.89C20.7658 14.9585 21.2094 15.2032 21.5265 15.5775C21.8437 15.9518 22.0122 16.4296 22 16.92Z" stroke="#008095" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="flex-1">
                <p className="font-['Pretendard_JP'] font-medium text-[12px] text-[#5d5f6d] tracking-[-0.24px] mb-1">
                  {texts.recommendationPopupPhoneLabel}
                </p>
                <a
                  href="tel:031-611-3222"
                  className="font-['Pretendard_JP'] font-bold text-[18px] text-[#008095] tracking-[-0.36px] hover:underline"
                >
                  031-611-3222
                </a>
              </div>
            </div>
            <div className="mt-3 pt-3 border-t border-[#e9ebf1]">
              <p className="font-['Pretendard_JP'] font-medium text-[13px] text-[#5d5f6d] tracking-[-0.26px] text-center">
                {texts.recommendationPopupHours}
              </p>
            </div>
          </div>
        )}

        {isLoading && (
          <div className="flex gap-3 items-start">
            <div className="w-[30px] h-[30px] flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                <circle cx="15" cy="15" r="15" fill="white"/>
                <mask id="mask0_loading" style={{maskType: "alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="30" height="30">
                  <circle cx="15" cy="15" r="15" fill="#D9D9D9"/>
                </mask>
                <g mask="url(#mask0_loading)">
                  <path d="M9.43949 6.84286C9.70916 5.71905 11.2908 5.71904 11.5605 6.84286L12.3025 9.93512C12.3988 10.3364 12.7088 10.6496 13.1059 10.7469L16.1659 11.4967C17.278 11.7693 17.278 13.3676 16.1659 13.6401L13.1059 14.3899C12.7088 14.4872 12.3988 14.8005 12.3025 15.2017L11.5605 18.294C11.2908 19.4178 9.70916 19.4178 9.43949 18.294L8.69748 15.2017C8.6012 14.8005 8.29118 14.4872 7.89413 14.3899L4.83408 13.6401C3.72197 13.3676 3.72197 11.7693 4.83408 11.4967L7.89413 10.7469C8.29118 10.6496 8.6012 10.3364 8.69748 9.93512L9.43949 6.84286Z" fill="#006AFF"/>
                  <path d="M18.3474 17.6345C18.5133 16.9429 19.4867 16.9429 19.6526 17.6345L20.1092 19.5374C20.1685 19.7843 20.3593 19.9771 20.6036 20.037L22.4867 20.4984C23.1711 20.6661 23.1711 21.6497 22.4867 21.8174L20.6036 22.2788C20.3593 22.3387 20.1685 22.5315 20.1092 22.7784L19.6526 24.6813C19.4867 25.3729 18.5133 25.3729 18.3474 24.6813L17.8908 22.7784C17.8315 22.5315 17.6407 22.3387 17.3964 22.2788L15.5133 21.8174C14.8289 21.6497 14.8289 20.6661 15.5133 20.4984L17.3964 20.037C17.6407 19.9771 17.8315 19.7843 17.8908 19.5374L18.3474 17.6345Z" fill="#006AFF"/>
                  <path d="M21.5717 6.71933C21.6806 6.26549 22.3194 6.26549 22.4283 6.71933L22.7279 7.96813C22.7668 8.13017 22.892 8.25668 23.0524 8.29597L24.2882 8.59879C24.7373 8.70884 24.7373 9.35432 24.2882 9.46437L23.0524 9.76718C22.892 9.80648 22.7668 9.93299 22.7279 10.095L22.4283 11.3438C22.3194 11.7977 21.6806 11.7977 21.5717 11.3438L21.2721 10.095C21.2332 9.93299 21.108 9.80648 20.9476 9.76718L19.7118 9.46437C19.2627 9.35432 19.2627 8.70884 19.7118 8.59879L20.9476 8.29597C21.108 8.25668 21.2332 8.13017 21.2721 7.96813L21.5717 6.71933Z" fill="#006AFF"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M22 6.94089L21.7554 7.96013C21.6577 8.36754 21.3429 8.68564 20.9397 8.78443L19.9311 9.03158L20.9397 9.27873C21.3429 9.37752 21.6577 9.69562 21.7554 10.103L22 11.1223L22.2446 10.103C22.3423 9.69562 22.6571 9.37752 23.0603 9.27873L24.0689 9.03158L23.0603 8.78443C22.6571 8.68564 22.3423 8.36754 22.2446 7.96013L22 6.94089ZM22.4895 6.38901C22.365 5.87033 21.635 5.87033 21.5105 6.38901L21.1681 7.81621C21.1236 8.00139 20.9805 8.14598 20.7973 8.19089L19.385 8.53696C18.8717 8.66274 18.8717 9.40042 19.385 9.5262L20.7973 9.87227C20.9805 9.91718 21.1236 10.0618 21.1681 10.2469L21.5105 11.6741C21.635 12.1928 22.365 12.1928 22.4895 11.6741L22.8319 10.2469C22.8764 10.0618 23.0195 9.91718 23.2027 9.87227L24.615 9.5262C25.1283 9.40042 25.1283 8.66274 24.615 8.53696L23.2027 8.19089C23.0195 8.14598 22.8764 8.00139 22.8319 7.81621L22.4895 6.38901Z" fill="#006AFF"/>
                </g>
              </svg>
            </div>
            <div className="pt-1">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-[#aab2c1] rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-[#aab2c1] rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-[#aab2c1] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="border-t border-[#e9ebf1] px-4 py-3 flex items-center gap-[10px]">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={isConsultationEnded ? '상담이 종료되었습니다' : texts.inputPlaceholder}
          className={`flex-1 border border-[#e9ebf1] rounded-[10px] px-3 py-[10px] font-['Pretendard_JP'] font-medium text-[14px] tracking-[-0.28px] leading-[1.4] placeholder:text-[#aab2c1] focus:outline-none focus:border-[#008095] ${isConsultationEnded ? 'bg-gray-100 cursor-not-allowed' : ''}`}
          disabled={isLoading || isConsultationEnded}
        />
        <button
          onClick={sendMessage}
          disabled={!input.trim() || isLoading || isConsultationEnded}
          className="w-10 h-10 flex-shrink-0"
        >
          {input.trim() && !isLoading ? (
            // Active state
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
              <g clipPath="url(#clip0_1_6024)">
                <circle cx="20" cy="20" r="20" fill="#006AFF"/>
                <path d="M20 28V12" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 20L20 12L28 20" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </g>
              <defs>
                <clipPath id="clip0_1_6024">
                  <rect width="40" height="40" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          ) : (
            // Inactive state
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
              <g clipPath="url(#clip0_1_5617)">
                <circle cx="20" cy="20" r="20" fill="#D2D6E1"/>
                <path d="M20 28V12" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 20L20 12L28 20" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </g>
              <defs>
                <clipPath id="clip0_1_5617">
                  <rect width="40" height="40" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          )}
        </button>
      </div>

      {/* iOS Home Indicator */}
      <div className="bg-white px-4 py-2 flex items-center justify-center">
        <div className="w-[134px] h-[5px] bg-black rounded-full" />
      </div>

      {/* 최종 추천 후 예약 유도 팝업 */}
      {showRecommendationPopup && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-[24px] max-w-sm w-full p-6 shadow-2xl animate-fade-in max-h-[90vh] overflow-y-auto">
            <div className="text-center">
              {/* 타이틀 */}
              <h2 className="font-['Pretendard_JP'] font-bold text-[20px] text-[#292a2f] tracking-[-0.4px] leading-[1.4] mb-3 whitespace-pre-line">
                {texts.recommendationPopupTitle}
              </h2>

              {/* 메시지 */}
              <p className="font-['Pretendard_JP'] font-medium text-[15px] text-[#5d5f6d] tracking-[-0.3px] leading-[1.6] mb-5 whitespace-pre-line">
                {texts.recommendationPopupMessage}
              </p>

              {/* 네이버 예약 버튼 */}
              <button
                onClick={() => {
                  window.open('https://m.place.naver.com/dentist/1127408286/home', '_blank');
                  setShowRecommendationPopup(false);
                }}
                className="w-full py-4 bg-[#03C75A] text-white rounded-[12px] font-['Pretendard_JP'] font-bold text-[15px] tracking-[-0.3px] hover:bg-[#02b351] transition-colors active:scale-[0.98] flex items-center justify-center gap-2 mb-4"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="20" height="20" rx="4" fill="white"/>
                  <path d="M13.5 6.5V13.5H11.5L8.5 9.5V13.5H6.5V6.5H8.5L11.5 10.5V6.5H13.5Z" fill="#03C75A"/>
                </svg>
                {texts.recommendationPopupNaverButton}
              </button>

              {/* 바로 전화하기 버튼 */}
              <button
                onClick={() => {
                  window.location.href = 'tel:031-611-3222';
                  setShowRecommendationPopup(false);
                }}
                className="w-full py-4 bg-[#008095] text-white rounded-[12px] font-['Pretendard_JP'] font-bold text-[15px] tracking-[-0.3px] hover:bg-[#006B7A] transition-colors active:scale-[0.98] flex items-center justify-center gap-2 mb-3"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7294C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1468 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5342 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.19 12.85C3.49997 10.2412 2.44824 7.27099 2.12 4.18C2.09501 3.90347 2.12787 3.62476 2.2165 3.36162C2.30513 3.09849 2.44757 2.85669 2.63477 2.65162C2.82196 2.44655 3.04981 2.28271 3.30379 2.17052C3.55778 2.05833 3.83234 2.00026 4.11 2H7.11C7.59531 1.99522 8.06579 2.16708 8.43376 2.48353C8.80173 2.79999 9.04208 3.23945 9.11 3.72C9.23662 4.68007 9.47145 5.62273 9.81 6.53C9.94455 6.88792 9.97366 7.27691 9.89391 7.65088C9.81415 8.02485 9.62886 8.36811 9.36 8.64L8.09 9.91C9.51355 12.4135 11.5865 14.4865 14.09 15.91L15.36 14.64C15.6319 14.3711 15.9752 14.1859 16.3491 14.1061C16.7231 14.0263 17.1121 14.0555 17.47 14.19C18.3773 14.5286 19.3199 14.7634 20.28 14.89C20.7658 14.9585 21.2094 15.2032 21.5265 15.5775C21.8437 15.9518 22.0122 16.4296 22 16.92Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                바로 전화하기
              </button>

              {/* 전화번호 안내 섹션 */}
              <div className="bg-[#f8f9fc] rounded-[12px] p-3 mb-4 text-center">
                <p className="font-['Pretendard_JP'] font-medium text-[12px] text-[#5d5f6d] tracking-[-0.24px] mb-1">
                  {texts.recommendationPopupPhoneLabel}: <span className="font-bold text-[#008095]">031-611-3222</span>
                </p>
                <p className="font-['Pretendard_JP'] font-medium text-[11px] text-[#8b939f] tracking-[-0.22px]">
                  {texts.recommendationPopupHours}
                </p>
              </div>

              {/* 병원 소개 */}
              <div className="bg-[#fff8e6] rounded-[16px] p-4 mb-4">
                <p className="font-['Pretendard_JP'] font-medium text-[13px] text-[#8b7355] tracking-[-0.26px] leading-[1.6] whitespace-pre-line text-left">
                  {texts.recommendationPopupCredentials}
                </p>
              </div>

              {/* 격려 메시지 */}
              <p className="font-['Pretendard_JP'] font-medium text-[14px] text-[#5d5f6d] tracking-[-0.28px] leading-[1.6] mb-5 whitespace-pre-line">
                {texts.recommendationPopupEncouragement}
              </p>

              {/* 확인 버튼 */}
              <button
                onClick={() => setShowRecommendationPopup(false)}
                className="w-full py-3 bg-[#292a2f] text-white rounded-[12px] font-['Pretendard_JP'] font-semibold text-[15px] tracking-[-0.3px] hover:bg-[#1a1b1f] transition-colors active:scale-[0.98]"
              >
                {texts.recommendationPopupClose}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 상담 종료 모달 */}
      {showEndModal && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-[24px] max-w-sm w-full p-6 shadow-2xl animate-fade-in">
            <div className="text-center">
              {/* 체크 아이콘 */}
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>

              {/* 제목 */}
              <h2 className="font-['Pretendard_JP'] font-bold text-[20px] text-black tracking-[-0.4px] leading-[1.4] mb-3">
                {texts.endModalTitle}
              </h2>

              {/* 예약 선택 UI */}
              {bookingStep === 'options' && (
                <>
                  <p className="font-['Pretendard_JP'] font-medium text-[15px] text-[#5d5f6d] tracking-[-0.3px] leading-[1.6] mb-4">
                    {texts.bookingTitle}
                  </p>
                  <div className="flex flex-col gap-3 mb-4">
                    {/* 네이버 예약 버튼 */}
                    <button
                      onClick={handleNaverReservation}
                      className="w-full py-4 bg-[#03C75A] text-white rounded-[12px] font-['Pretendard_JP'] font-bold text-[15px] tracking-[-0.3px] hover:bg-[#02b351] transition-colors active:scale-[0.98] flex items-center justify-center gap-2"
                    >
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="20" height="20" rx="4" fill="white"/>
                        <path d="M13.5 6.5V13.5H11.5L8.5 9.5V13.5H6.5V6.5H8.5L11.5 10.5V6.5H13.5Z" fill="#03C75A"/>
                      </svg>
                      {texts.naverButton}
                    </button>
                    <p className="text-center text-[12px] text-[#03C75A] font-medium -mt-1 mb-1">
                      💡 {texts.naverHint}
                    </p>

                    {/* 전화 상담 버튼 - 임플란트 상담일 때만 표시 */}
                    {initialMessage?.toLowerCase().includes('임플란트') && (
                      <button
                        onClick={handlePhoneConsultation}
                        className="w-full py-4 bg-[#008095] text-white rounded-[12px] font-['Pretendard_JP'] font-bold text-[15px] tracking-[-0.3px] hover:bg-[#006B7A] transition-colors active:scale-[0.98] flex items-center justify-center gap-2"
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7294C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1468 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5342 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.19 12.85C3.49997 10.2412 2.44824 7.27099 2.12 4.18C2.09501 3.90347 2.12787 3.62476 2.2165 3.36162C2.30513 3.09849 2.44757 2.85669 2.63477 2.65162C2.82196 2.44655 3.04981 2.28271 3.30379 2.17052C3.55778 2.05833 3.83234 2.00026 4.11 2H7.11C7.59531 1.99522 8.06579 2.16708 8.43376 2.48353C8.80173 2.79999 9.04208 3.23945 9.11 3.72C9.23662 4.68007 9.47145 5.62273 9.81 6.53C9.94455 6.88792 9.97366 7.27691 9.89391 7.65088C9.81415 8.02485 9.62886 8.36811 9.36 8.64L8.09 9.91C9.51355 12.4135 11.5865 14.4865 14.09 15.91L15.36 14.64C15.6319 14.3711 15.9752 14.1859 16.3491 14.1061C16.7231 14.0263 17.1121 14.0555 17.47 14.19C18.3773 14.5286 19.3199 14.7634 20.28 14.89C20.7658 14.9585 21.2094 15.2032 21.5265 15.5775C21.8437 15.9518 22.0122 16.4296 22 16.92Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        {texts.phoneButton}
                      </button>
                    )}
                  </div>
                </>
              )}

              {/* 전화 시간 선택 UI */}
              {bookingStep === 'time_select' && (
                <>
                  <div className="text-center mb-4">
                    <p className="font-['Pretendard_JP'] font-bold text-[16px] text-[#292a2f] tracking-[-0.32px] mb-2">
                      {texts.phoneTitle}
                    </p>
                    <p className="font-['Pretendard_JP'] font-medium text-[14px] text-[#5d5f6d] tracking-[-0.28px] whitespace-pre-line">
                      {texts.phoneMessage}
                    </p>
                  </div>

                  <p className="font-['Pretendard_JP'] font-semibold text-[14px] text-[#292a2f] tracking-[-0.28px] mb-3 text-left">
                    {texts.timeSelectTitle}
                  </p>

                  <div className="flex flex-col gap-2 mb-4">
                    {[
                      { value: texts.morning, label: texts.morning },
                      { value: texts.lunch, label: texts.lunch },
                      { value: texts.afternoon, label: texts.afternoon }
                    ].map((time) => (
                      <label
                        key={time.value}
                        className={`flex items-center gap-3 p-3 border-2 rounded-[12px] cursor-pointer transition-all ${
                          selectedCallTime === time.value
                            ? 'border-[#008095] bg-[#e6f7fa]'
                            : 'border-[#e9ebf1] hover:border-[#008095] hover:bg-[#f8f9fc]'
                        }`}
                      >
                        <input
                          type="radio"
                          name="modalCallTime"
                          value={time.value}
                          checked={selectedCallTime === time.value}
                          onChange={(e) => setSelectedCallTime(e.target.value)}
                          className="w-5 h-5 text-[#008095] border-gray-300 focus:ring-[#008095]"
                        />
                        <span className="font-['Pretendard_JP'] font-medium text-[14px] text-[#292a2f] tracking-[-0.28px]">
                          {time.label}
                        </span>
                      </label>
                    ))}
                  </div>

                  <button
                    onClick={handleTimeSelectConfirm}
                    disabled={!selectedCallTime}
                    className="w-full py-4 bg-[#008095] text-white rounded-[12px] font-['Pretendard_JP'] font-bold text-[15px] tracking-[-0.3px] hover:bg-[#006B7A] transition-colors active:scale-[0.98] disabled:bg-[#d2d6e1] disabled:cursor-not-allowed mb-4"
                  >
                    {texts.confirmButton}
                  </button>
                </>
              )}

              {/* 예약 완료 메시지 */}
              {bookingStep === 'complete' && (
                <div className="mb-4">
                  <p className="font-['Pretendard_JP'] font-semibold text-[15px] text-[#292a2f] tracking-[-0.3px] whitespace-pre-line">
                    {selectedBookingType === 'naver' ? texts.naverThankYouMessage : texts.thankYouMessage}
                  </p>
                  {selectedBookingType === 'phone' && isWithinBusinessHours() && (
                    <div className="mt-3 pt-3 border-t border-[#d4e2f7]">
                      <p className="font-['Pretendard_JP'] font-medium text-[14px] text-[#008095] tracking-[-0.28px] whitespace-pre-line">
                        {texts.directCallMessage.split('031-611-3222').map((part, idx, arr) => (
                          <span key={idx}>
                            {part}
                            {idx < arr.length - 1 && <strong className="font-bold">031-611-3222</strong>}
                          </span>
                        ))}
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* 확인 버튼 - 예약 방식 선택 완료 후에만 활성화 */}
              <button
                onClick={() => {
                  if (bookingStep === 'complete') {
                    setShowEndModal(false);
                  }
                }}
                disabled={bookingStep !== 'complete'}
                className={`w-full py-4 rounded-[12px] font-['Pretendard_JP'] font-bold text-[16px] tracking-[-0.32px] transition-colors ${
                  bookingStep === 'complete'
                    ? 'bg-[#008095] text-white hover:bg-[#006B7A] active:scale-[0.98] cursor-pointer'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                {bookingStep === 'complete' ? texts.endModalButton : '예약 방식을 선택해주세요'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
