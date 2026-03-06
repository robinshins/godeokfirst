export interface PatientIntakeData {
  // 기본정보
  id?: string;
  created_at?: string;
  updated_at?: string;
  memo?: string;
  patientNumber?: string;
  assignedDoctor?: string;
  appointmentTime?: string;
  name: string;
  gender: '남' | '여' | 'Male' | 'Female' | '男性' | '女性' | '男' | '女';
  residentNumber?: string;
  passportNumber?: string;
  birthdate?: string;
  age: number;
  address: string;
  phoneNumber: string;
  guardianPhoneNumber?: string;

  // 내원경로
  howDidYouKnow: string;
  howDidYouKnowOther?: string;
  howDidYouKnowSearch?: string;
  howDidYouKnowPartner?: string;
  referrerName?: string;
  whyVisit: string;
  whyVisitOther?: string;

  // 상담과목
  consultationTypes: ConsultationType[];
  otherConsultation?: string;

  // 설문내용
  lastDentalVisit: '1년 이내' | '2년 이내' | '2년 이상' | '받은 적 없다';
  drugAllergy: boolean;
  drugAllergyDetails?: string;

  // 질환 및 복용약
  medicalConditions: MedicalCondition[];
  otherCondition?: string;

  // 치과 진료 및 수술 이력
  hasDentalHistory: boolean;
  dentalHistoryDetails?: string;
  isPregnant?: boolean;
  isBreastfeeding?: boolean;
  otherMedicalHistory?: string;

  // 흡연 및 음주
  smokingAmount?: number; // 하루 갑수
  drinkingFrequency?: number; // 주 횟수
  noSmokingDrinking: boolean;

  // 이전 치과 불편사항
  previousDentalIssues: DentalIssue[];
  otherDentalIssue?: string;

  // 중요한 점
  importantFactors: ImportantFactor[];
  otherImportantFactor?: string;

  // 치과 보험
  hasDentalInsurance: '없다' | '있다' | '모른다';
  insuranceCompany?: string;
  insuranceYear?: number;

  // 증상
  symptoms: string;
  painLevel: number; // 0-10

  // 개인정보 동의
  privacyConsent: boolean;
  consentDate: string;
  signature: string;

  // 법정대리인 (만 14세 미만)
  isMinor?: boolean;
  guardianName?: string;
  guardianRelationship?: string;
  guardianSignature?: string;

  // 채팅 상담 연동
  hasChatConsultation?: boolean;
  chatConsultations?: Array<{
    id: string;
    createdAt: string;
    consultationContent?: string;
    chatHistory?: unknown;
    status?: string;
    referrerSource?: string;
  }>;
}

export type ConsultationType =
  | '임플란트'
  | '일반진료(충치, 잇몸, 보철 등)'
  | '사랑니'
  | '구강건강검진'
  | '라미네이트'
  | '수면치료'
  | '스케일링'
  | '기타'
  // English
  | 'Implants'
  | 'General treatment'
  | 'Wisdom teeth'
  | 'Oral health exam'
  | 'Veneers'
  | 'Sedation treatment'
  | 'Scaling'
  | 'Other'
  // Japanese
  | 'インプラント'
  | '一般診療'
  | '親知らず'
  | '口腔検診'
  | 'ラミネート'
  | '睡眠麻酔'
  | 'スケーリング'
  | 'その他'
  // Chinese
  | '种植牙'
  | '一般治疗'
  | '智齿'
  | '口腔检查'
  | '贴面'
  | '镇静治疗'
  | '洗牙'
  | '其他'
  // Vietnamese
  | 'Implant'
  | 'Dieu tri tong quat'
  | 'Rang khon'
  | 'Kham suc khoe rang mieng'
  | 'Veneer'
  | 'Dieu tri gay me'
  | 'Lay cao rang'
  | 'Khac'
  // Mongolian
  | 'Имплант'
  | 'Ерөнхий эмчилгээ'
  | 'Сойз шүд'
  | 'Эрүүл мэндийн үзлэг'
  | 'Ламинат'
  | 'Унтуулгын эмчилгээ'
  | 'Чулуу цэвэрлэгээ'
  | 'Бусад'
  // Uzbek
  | 'Umumiy davolash'
  | 'Aql tishi'
  | "Og'iz sog'ligi tekshiruvi"
  | "Og'riqsiz davolash"
  | 'Tish tozalash'
  | 'Boshqa'
  // Russian
  | 'Имплантация'
  | 'Общее лечение'
  | 'Зуб мудрости'
  | 'Осмотр полости рта'
  | 'Виниры'
  | 'Лечение под седацией'
  | 'Чистка зубов'
  | 'Другое'
  // Thai
  | 'รากฟันเทียม'
  | 'การรักษาทั่วไป'
  | 'ฟันคุด'
  | 'ตรวจสุขภาพช่องปาก'
  | 'วีเนียร์'
  | 'การรักษาแบบดมยาสลบ'
  | 'ขูดหินปูน'
  | 'อื่นๆ';

export type MedicalCondition =
  | '없음'
  | '만성신부전'
  | '만성간경화'
  | '고혈압'
  | '수유증'
  | '임신중, 임신가능성'
  | '당뇨'
  | 'B, C형 간염'
  | '갑상선 기능 항진증'
  | '아스피린 복용중'
  | '위장 장애'
  | '만성 심장판막 질환'
  | '출혈성 질환'
  | '신장 투석'
  | '혈심증, 심근, 뇌경색'
  | '골다공증약 장기 복용'
  | '폐니실린 알러지'
  | '갑염성심내막염 위험환자'
  | '리트케인 알러지'
  | '고지혈증'
  | '기타'
  // English
  | 'None'
  | 'Hypertension'
  | 'Diabetes'
  | 'Taking aspirin'
  | 'Bleeding disorder'
  | 'Osteoporosis medication'
  | 'Lidocaine allergy'
  | 'Chronic renal failure'
  | 'Lactation'
  | 'Hepatitis B/C'
  | 'Gastric disorder'
  | 'Kidney dialysis'
  | 'Penicillin allergy'
  | 'Chronic liver cirrhosis'
  | 'Pregnant/possibly pregnant'
  | 'Hyperthyroidism'
  | 'Chronic heart valve disease'
  | 'Angina/MI/stroke'
  | 'Endocarditis risk'
  | 'Hyperlipidemia'
  | 'Other'
  // Japanese
  | 'なし'
  | '高血圧'
  | '糖尿病'
  | 'アスピリン服用中'
  | '出血性疾患'
  | '骨粗鬆症薬服用中'
  | 'リドカインアレルギー'
  | '慢性腎不全'
  | '授乳中'
  | 'B型/C型肝炎'
  | '胃疾患'
  | '腎臓透析'
  | 'ペニシリンアレルギー'
  | '慢性肝硬変'
  | '妊娠中/妊娠の可能性'
  | '甲状腺機能亢進症'
  | '慢性心臓弁膜症'
  | '狭心症/心筋梗塞/脳卒中'
  | '心内膜炎リスク'
  | '高脂血症'
  | 'その他'
  // Chinese
  | '无'
  | '高血压'
  | '糖尿病'
  | '服用阿司匹林'
  | '出血性疾病'
  | '骨质疏松症药物'
  | '利多卡因过敏'
  | '慢性肾衰竭'
  | '哺乳期'
  | 'B型/C型肝炎'
  | '胃病'
  | '肾透析'
  | '青霉素过敏'
  | '慢性肝硬化'
  | '怀孕/可能怀孕'
  | '甲状腺功能亢进'
  | '慢性心脏瓣膜病'
  | '心绞痛/心肌梗塞/中风'
  | '心内膜炎风险'
  | '高血脂'
  | '其他'
  // Vietnamese
  | 'Khong co'
  | 'Huyet ap cao'
  | 'Tieu duong'
  | 'Dang uong aspirin'
  | 'Roi loan dong mau'
  | 'Thuoc loang xuong'
  | 'Di ung Lidocaine'
  | 'Suy than man'
  | 'Dang cho con bu'
  | 'Viem gan B/C'
  | 'Roi loan da day'
  | 'Khac'
  // Mongolian
  | 'Байхгүй'
  | 'Цусны даралт ихсэлт'
  | 'Чихрийн шижин'
  | 'Аспирин хэрэглэж байгаа'
  | 'Цус алдалтын эмгэг'
  | 'Ясны сийрэгжилт'
  | 'Лидокаин харшил'
  | 'Архаг бөөрний дутагдал'
  | 'Хөхүүл эх'
  | 'В/С гепатит'
  | 'Ходоодны эмгэг'
  // Uzbek
  | "Yo'q"
  | 'Yuqori qon bosimi'
  | 'Diabet'
  | 'Aspirin qabul qilish'
  | 'Qon ivish buzilishi'
  | 'Osteoporoz dorilari'
  | 'Lidokain allergiyasi'
  | 'Surunkali buyrak kasalligi'
  | 'Emizish davri'
  | 'Gepatit B/C'
  | 'Oshqozon kasalliklari'
  // Russian
  | 'Нет'
  | 'Гипертония'
  | 'Сахарный диабет'
  | 'Прием аспирина'
  | 'Нарушение свертываемости'
  | 'Остеопороз'
  | 'Аллергия на лидокаин'
  | 'Хроническая почечная недостаточность'
  | 'Кормление грудью'
  | 'Гепатит B/C'
  | 'Заболевания желудка'
  | 'Другое'
  // Thai
  | 'ไม่มี'
  | 'ความดันโลหิตสูง'
  | 'เบาหวาน'
  | 'กำลังรับประทานแอสไพริน'
  | 'โรคเลือดไหลไม่หยุด'
  | 'ยารักษาโรคกระดูกพรุน'
  | 'แพ้ยาชา Lidocaine'
  | 'โรคไตเรื้อรัง'
  | 'กำลังให้นมบุตร'
  | 'ไวรัสตับอักเสบ B/C'
  | 'โรคกระเพาะ'
  | 'อื่นๆ';

export type DentalIssue =
  | '비싼 비용'
  | '신뢰감 부족(설명 부족)'
  | '치료 시 통증'
  | '의사의 불친절'
  | '직원의 불친절'
  | '기타';

export type ImportantFactor =
  | '진료의 안정성'
  | '의료진의 신뢰감'
  | '비용'
  | '아프지 않은 것'
  | '가까움'
  | '최신 시설과 장비'
  | '연락 편의성'
  | '기타';
