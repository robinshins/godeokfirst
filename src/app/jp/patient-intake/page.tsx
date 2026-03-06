'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Link from 'next/link';
import Image from 'next/image';
import {
  ConsultationType,
  MedicalCondition,
} from '@/lib/patient-intake-types';
import { KR, US, JP, CN, VN, MN, UZ, RU, TH } from 'country-flag-icons/react/3x2';

// Validation schema (age field removed since it's calculated from resident number)
const patientIntakeSchema = z.object({
  name: z.string().min(1, 'お名前を入力してください'),
  gender: z.enum(['男性', '女性'], { required_error: '性別を選択してください' }),
  residentNumber: z.string().optional(),
  passportNumber: z.string().optional(),
  birthdate: z.string().optional(),
  address: z.string().min(1, '住所を入力してください'),
  phoneNumber: z.string().regex(/^010-\d{4}-\d{4}$/, '電話番号の形式が正しくありません（010-0000-0000）'),
  guardianPhoneNumber: z.string().optional(),
  howDidYouKnow: z.string().min(1, '京城メディスデンタルをどのように知ったか選択してください'),
  howDidYouKnowOther: z.string().optional(),
  whyVisit: z.string().min(1, '来院理由を選択してください'),
  whyVisitOther: z.string().optional(),
  consultationTypes: z.array(z.string()).min(1, '相談内容を少なくとも1つ選択してください'),
  otherConsultation: z.string().optional(),
  lastDentalVisit: z.enum(['1年以内', '2年以内', '2年以上', '受けたことがない']),
  drugAllergy: z.boolean(),
  drugAllergyDetails: z.string().optional(),
  medicalConditions: z.array(z.string()),
  otherCondition: z.string().optional(),
  hasDentalHistory: z.boolean(),
  dentalHistoryDetails: z.string().optional(),
  smokingAmount: z.number().optional().or(z.nan()).transform((val) => (isNaN(val as number) ? undefined : val)),
  drinkingFrequency: z.number().optional().or(z.nan()).transform((val) => (isNaN(val as number) ? undefined : val)),
  noSmokingDrinking: z.boolean(),
  hasDentalInsurance: z.boolean(),
  insuranceYear: z.number().optional().or(z.nan()).transform((val) => (isNaN(val as number) ? undefined : val)),
  symptoms: z.string().min(1, '症状を入力してください'),
  painLevel: z.number().min(0).max(10),
  privacyConsent: z.boolean().refine((val) => val === true, {
    message: '個人情報の収集・利用に同意してください',
  }),
  signature: z.string().min(1, '署名を入力してください'),
  guardianName: z.string().optional(),
  guardianRelationship: z.string().optional(),
  guardianSignature: z.string().optional(),
}).refine((data) => data.signature === data.name, {
  message: '署名は上記で入力した名前と正確に一致する必要があります',
  path: ['signature'],
}).refine((data) => {
  // 保護者署名がある場合は保護者名と一致する必要があります
  if (data.guardianSignature && data.guardianName) {
    return data.guardianSignature === data.guardianName;
  }
  return true;
}, {
  message: '保護者署名は保護者名と正確に一致する必要があります',
  path: ['guardianSignature'],
});

type FormData = z.infer<typeof patientIntakeSchema>;

const TOTAL_STEPS = 6;

export default function PatientIntakePageJP() {
  const [currentStep, setCurrentStep] = useState(1);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(patientIntakeSchema),
    defaultValues: {
      consultationTypes: [],
      medicalConditions: [],
      drugAllergy: false,
      hasDentalHistory: false,
      noSmokingDrinking: false,
      hasDentalInsurance: false,
      privacyConsent: false,
      painLevel: 0,
    },
  });

  // Watch values for conditional rendering
  const watchedValues = {
    consultationTypes: watch('consultationTypes') || [],
    medicalConditions: watch('medicalConditions') || [],
    drugAllergy: watch('drugAllergy'),
    hasDentalHistory: watch('hasDentalHistory'),
    noSmokingDrinking: watch('noSmokingDrinking'),
    hasDentalInsurance: watch('hasDentalInsurance'),
    residentNumber: watch('residentNumber'),
    howDidYouKnow: watch('howDidYouKnow'),
    whyVisit: watch('whyVisit'),
  };

  // Auto-format birthdate input
  const handleBirthdateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, ''); // Remove non-digits

    if (value.length >= 4) {
      value = value.slice(0, 4) + '-' + value.slice(4);
    }
    if (value.length >= 7) {
      value = value.slice(0, 7) + '-' + value.slice(7);
    }
    if (value.length > 10) {
      value = value.slice(0, 10);
    }

    setValue('birthdate', value);
  };

  // Calculate if minor from resident number or birthdate
  const calculateAge = (residentNumber?: string, birthdate?: string): number => {
    // Try to calculate from birthdate first
    if (birthdate) {
      const birth = new Date(birthdate);
      const today = new Date();
      let age = today.getFullYear() - birth.getFullYear();
      const monthDiff = today.getMonth() - birth.getMonth();
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
        age--;
      }
      return age;
    }

    // Fall back to resident number
    if (!residentNumber || residentNumber.length < 7) return 0;

    const birthYear = parseInt(residentNumber.substring(0, 2));
    const genderDigit = parseInt(residentNumber.charAt(7));

    let fullYear = 0;
    if (genderDigit === 1 || genderDigit === 2) {
      fullYear = 1900 + birthYear;
    } else if (genderDigit === 3 || genderDigit === 4) {
      fullYear = 2000 + birthYear;
    }

    const currentYear = new Date().getFullYear();
    return currentYear - fullYear;
  };

  const age = calculateAge(watchedValues.residentNumber, watch('birthdate'));
  const isMinor = age > 0 && age < 14;

  // Phone number formatting
  const formatPhoneNumber = (value: string): string => {
    const numbers = value.replace(/\D/g, '');
    const limitedNumbers = numbers.slice(0, 11);

    if (limitedNumbers.length <= 3) {
      return limitedNumbers;
    } else if (limitedNumbers.length <= 7) {
      return `${limitedNumbers.slice(0, 3)}-${limitedNumbers.slice(3)}`;
    } else {
      return `${limitedNumbers.slice(0, 3)}-${limitedNumbers.slice(3, 7)}-${limitedNumbers.slice(7)}`;
    }
  };

  // Resident number formatting
  const formatResidentNumber = (value: string): string => {
    const numbers = value.replace(/\D/g, '');
    const limitedNumbers = numbers.slice(0, 13);

    if (limitedNumbers.length <= 6) {
      return limitedNumbers;
    } else {
      return `${limitedNumbers.slice(0, 6)}-${limitedNumbers.slice(6)}`;
    }
  };

  // Toggle handlers
  const toggleArrayValue = <T extends string>(
    array: T[],
    value: T,
    fieldName: 'consultationTypes' | 'medicalConditions'
  ) => {
    const newArray = array.includes(value)
      ? array.filter((item) => item !== value)
      : [...array, value];
    setValue(fieldName, newArray as string[]);
  };

  const onSubmit = async (data: FormData) => {
    console.log('Form submission started:', data);
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/patient-intake', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          age: calculateAge(data.residentNumber, data.birthdate),
          consentDate: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit patient intake data');
      }

      const result = await response.json();
      console.log('Submission successful:', result);
      setShowSuccessModal(true);
    } catch (error) {
      console.error('Error submitting patient intake:', error);
      alert('送信中にエラーが発生しました。もう一度お試しください。');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Validate current step before proceeding
  const validateCurrentStep = (): boolean => {
    const values = watch();

    switch (currentStep) {
      case 1:
        return !!(
          values.name &&
          values.gender &&
          values.address &&
          values.phoneNumber &&
          /^010-\d{4}-\d{4}$/.test(values.phoneNumber)
        );
      case 2:
        return !!(values.howDidYouKnow && values.whyVisit);
      case 3:
        return !!(
          values.consultationTypes &&
          values.consultationTypes.length > 0 &&
          values.lastDentalVisit &&
          values.hasDentalInsurance !== undefined
        );
      case 4:
        return !!(
          values.drugAllergy !== undefined &&
          values.medicalConditions &&
          values.hasDentalHistory !== undefined &&
          values.noSmokingDrinking !== undefined
        );
      case 5:
        return !!(values.symptoms && values.painLevel !== undefined);
      case 6:
        const basicConsent = !!(values.privacyConsent && values.signature);
        if (isMinor) {
          return !!(
            basicConsent &&
            values.guardianName &&
            values.guardianRelationship &&
            values.guardianSignature
          );
        }
        return basicConsent;
      default:
        return true;
    }
  };

  const isCurrentStepValid = validateCurrentStep();

  const nextStep = () => {
    if (currentStep < TOTAL_STEPS && isCurrentStepValid) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <StepContainer title="基本情報を入力してください">
            <div className="space-y-5">
              {/* Name */}
              <div>
                <label className="block text-base font-semibold text-gray-700 mb-2">
                  お名前 <span className="text-red-600">*</span>
                </label>
                <input
                  {...register('name')}
                  type="text"
                  placeholder="山田太郎"
                  className="step-input"
                />
                {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
              </div>

              {/* Gender */}
              <div>
                <label className="block text-base font-semibold text-gray-700 mb-2">
                  性別 <span className="text-red-600">*</span>
                </label>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setValue('gender', '男性')}
                    className={`flex-1 py-4 rounded-xl text-lg font-bold transition-all ${
                      watch('gender') === '男性'
                        ? 'bg-[#006aff] text-white'
                        : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    男性
                  </button>
                  <button
                    type="button"
                    onClick={() => setValue('gender', '女性')}
                    className={`flex-1 py-4 rounded-xl text-lg font-bold transition-all ${
                      watch('gender') === '女性'
                        ? 'bg-[#006aff] text-white'
                        : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    女性
                  </button>
                </div>
                {errors.gender && <ErrorMessage>{errors.gender.message}</ErrorMessage>}
              </div>

              {/* Resident Number (Optional for foreigners) */}
              <div>
                <label className="block text-base font-semibold text-gray-700 mb-2">
                  住民登録番号 <span className="text-gray-400 text-xs">(任意 - 韓国国籍の方)</span>
                </label>
                <input
                  {...register('residentNumber')}
                  type="text"
                  placeholder="000000-0000000"
                  maxLength={14}
                  className="step-input"
                  onChange={(e) => {
                    const formatted = formatResidentNumber(e.target.value);
                    setValue('residentNumber', formatted);
                  }}
                />
                {errors.residentNumber && <ErrorMessage>{errors.residentNumber.message}</ErrorMessage>}
              </div>

              {/* Passport Number */}
              <div>
                <label className="block text-base font-semibold text-gray-700 mb-2">
                  パスポート番号 <span className="text-gray-400 text-xs">(外国人の方)</span>
                </label>
                <input
                  {...register('passportNumber')}
                  type="text"
                  placeholder="パスポート番号を入力してください"
                  className="step-input"
                />
                {errors.passportNumber && <ErrorMessage>{errors.passportNumber.message}</ErrorMessage>}
              </div>

              {/* Birthdate */}
              <div>
                <label className="block text-base font-semibold text-gray-700 mb-2">
                  生年月日 <span className="text-gray-400 text-xs">(住民登録番号がない場合)</span>
                </label>
                <input
                  {...register('birthdate')}
                  type="text"
                  className="step-input"
                  placeholder="YYYY-MM-DD (例: 1990-01-15)"
                  onChange={handleBirthdateChange}
                  maxLength={10}
                />
                {errors.birthdate && <ErrorMessage>{errors.birthdate.message}</ErrorMessage>}
              </div>

              {/* Address */}
              <div>
                <label className="block text-base font-semibold text-gray-700 mb-2">
                  住所 <span className="text-red-600">*</span>
                </label>
                <input
                  {...register('address')}
                  type="text"
                  placeholder="東京都渋谷区..."
                  className="step-input"
                />
                {errors.address && <ErrorMessage>{errors.address.message}</ErrorMessage>}
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-base font-semibold text-gray-700 mb-2">
                  電話番号 <span className="text-red-600">*</span>
                </label>
                <input
                  {...register('phoneNumber')}
                  type="tel"
                  placeholder="010-0000-0000"
                  maxLength={13}
                  className="step-input"
                  onChange={(e) => {
                    const formatted = formatPhoneNumber(e.target.value);
                    setValue('phoneNumber', formatted);
                  }}
                />
                {errors.phoneNumber && <ErrorMessage>{errors.phoneNumber.message}</ErrorMessage>}
              </div>

              {/* Guardian Phone */}
              <div>
                <label className="block text-base font-semibold text-gray-700 mb-2">
                  保護者の電話番号（任意）
                </label>
                <input
                  {...register('guardianPhoneNumber')}
                  type="tel"
                  placeholder="010-0000-0000"
                  maxLength={13}
                  className="step-input"
                  onChange={(e) => {
                    const formatted = formatPhoneNumber(e.target.value);
                    setValue('guardianPhoneNumber', formatted);
                  }}
                />
              </div>
            </div>
          </StepContainer>
        );

      case 2:
        return (
          <StepContainer title="当院を知ったきっかけを教えてください">
            <div className="space-y-6">
              {/* How did you know */}
              <div>
                <label className="block text-lg font-semibold text-gray-800 mb-3">
                  京城メディスデンタルをどのように知りましたか？ <span className="text-red-600">*</span>
                </label>
                <div className="space-y-2">
                  {[
                    'ネイバー検索',
                    'ネイバー地図で検索',
                    'Google Mapsで検索',
                    'YouTube/Instagram',
                    '看板/地下鉄広告',
                    '友人の紹介',
                    'その他',
                  ].map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setValue('howDidYouKnow', option)}
                      className={`w-full py-4 rounded-xl text-base font-semibold transition-all ${
                        watchedValues.howDidYouKnow === option
                          ? 'bg-[#006aff] text-white'
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
                {watchedValues.howDidYouKnow === 'その他' && (
                  <input
                    {...register('howDidYouKnowOther')}
                    type="text"
                    placeholder="詳細を入力してください"
                    className="step-input mt-3"
                  />
                )}
                {errors.howDidYouKnow && <ErrorMessage>{errors.howDidYouKnow.message}</ErrorMessage>}
              </div>

              {/* Why visit */}
              <div>
                <label className="block text-lg font-semibold text-gray-800 mb-3">
                  京城メディスデンタルを選んだ理由は何ですか？<br />
                  <span className="text-sm font-normal text-gray-600">（主な理由を選択してください）</span> <span className="text-red-600">*</span>
                </label>
                <div className="space-y-2">
                  {[
                    'ネイバー地図の良い評価',
                    'ネイバーカフェの肯定的な意見',
                    'ウェブサイトが参考になった',
                    'ブログ記事が役立った',
                    'YouTube/Instagram動画',
                    '友人の推薦',
                    '家から近い',
                    'その他',
                  ].map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setValue('whyVisit', option)}
                      className={`w-full py-4 rounded-xl text-base font-semibold transition-all text-left px-4 ${
                        watchedValues.whyVisit === option
                          ? 'bg-[#006aff] text-white'
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
                {watchedValues.whyVisit === 'その他' && (
                  <input
                    {...register('whyVisitOther')}
                    type="text"
                    placeholder="詳細を入力してください"
                    className="step-input mt-3"
                  />
                )}
                {errors.whyVisit && <ErrorMessage>{errors.whyVisit.message}</ErrorMessage>}
              </div>
            </div>
          </StepContainer>
        );

      case 3:
        return (
          <StepContainer title="相談内容を入力してください">
            <div className="space-y-6">
              {/* Consultation types */}
              <div>
                <label className="block text-lg font-semibold text-gray-800 mb-3">
                  相談内容（複数選択可） <span className="text-red-600">*</span>
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {(
                    [
                      'インプラント',
                      '一般診療',
                      '親知らず',
                      '口腔検診',
                      'ラミネート',
                      '睡眠麻酔',
                      'スケーリング',
                      'その他',
                    ] as ConsultationType[]
                  ).map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() =>
                        toggleArrayValue(watchedValues.consultationTypes, type, 'consultationTypes')
                      }
                      className={`py-4 px-3 rounded-xl text-sm font-semibold transition-all ${
                        watchedValues.consultationTypes.includes(type)
                          ? 'bg-[#006aff] text-white'
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
                {watchedValues.consultationTypes.includes('その他') && (
                  <input
                    {...register('otherConsultation')}
                    type="text"
                    placeholder="詳細を入力してください"
                    className="step-input mt-3"
                  />
                )}
                {errors.consultationTypes && <ErrorMessage>{errors.consultationTypes.message}</ErrorMessage>}
              </div>

              {/* Last dental visit */}
              <div>
                <label className="block text-lg font-semibold text-gray-800 mb-3">
                  最後に歯科を受診したのはいつですか？ <span className="text-red-600">*</span>
                </label>
                <div className="space-y-2">
                  {(['1年以内', '2年以内', '2年以上', '受けたことがない'] as const).map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setValue('lastDentalVisit', option)}
                      className={`w-full py-4 rounded-xl text-base font-semibold transition-all ${
                        watch('lastDentalVisit') === option
                          ? 'bg-[#006aff] text-white'
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              {/* Dental insurance */}
              <div>
                <label className="block text-lg font-semibold text-gray-800 mb-3">
                  歯科保険に加入していますか？ <span className="text-red-600">*</span>
                </label>
                <div className="flex gap-3 mb-3">
                  <button
                    type="button"
                    onClick={() => setValue('hasDentalInsurance', false)}
                    className={`flex-1 py-4 rounded-xl text-base font-bold transition-all ${
                      !watchedValues.hasDentalInsurance
                        ? 'bg-[#006aff] text-white'
                        : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    いいえ
                  </button>
                  <button
                    type="button"
                    onClick={() => setValue('hasDentalInsurance', true)}
                    className={`flex-1 py-4 rounded-xl text-base font-bold transition-all ${
                      watchedValues.hasDentalInsurance
                        ? 'bg-[#006aff] text-white'
                        : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    はい
                  </button>
                </div>
                {watchedValues.hasDentalInsurance && (
                  <input
                    {...register('insuranceYear', { valueAsNumber: true })}
                    type="number"
                    placeholder="加入年（例：2020）"
                    className="step-input"
                  />
                )}
              </div>
            </div>
          </StepContainer>
        );

      case 4:
        return (
          <StepContainer title="健康状態について教えてください">
            <div className="space-y-6">
              {/* Drug allergy */}
              <div>
                <label className="block text-lg font-semibold text-gray-800 mb-3">
                  薬物アレルギーはありますか？ <span className="text-red-600">*</span>
                </label>
                <div className="flex gap-3 mb-3">
                  <button
                    type="button"
                    onClick={() => setValue('drugAllergy', false)}
                    className={`flex-1 py-4 rounded-xl text-lg font-bold transition-all ${
                      !watchedValues.drugAllergy
                        ? 'bg-[#006aff] text-white'
                        : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    いいえ
                  </button>
                  <button
                    type="button"
                    onClick={() => setValue('drugAllergy', true)}
                    className={`flex-1 py-4 rounded-xl text-lg font-bold transition-all ${
                      watchedValues.drugAllergy
                        ? 'bg-[#006aff] text-white'
                        : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    はい
                  </button>
                </div>
                {watchedValues.drugAllergy && (
                  <input
                    {...register('drugAllergyDetails')}
                    type="text"
                    placeholder="詳細を入力してください"
                    className="step-input"
                  />
                )}
              </div>

              {/* Medical conditions */}
              <div>
                <label className="block text-lg font-semibold text-gray-800 mb-3">
                  既往症はありますか？（複数選択可） <span className="text-red-600">*</span>
                </label>
                <div className="grid grid-cols-2 gap-2 max-h-[50vh] overflow-y-auto p-1">
                  {(
                    [
                      'なし',
                      '高血圧',
                      '糖尿病',
                      'アスピリン服用中',
                      '出血性疾患',
                      '骨粗鬆症薬服用中',
                      'リドカインアレルギー',
                      '慢性腎不全',
                      '授乳中',
                      'B型/C型肝炎',
                      '胃疾患',
                      '腎臓透析',
                      'ペニシリンアレルギー',
                      '慢性肝硬変',
                      '妊娠中/妊娠の可能性',
                      '甲状腺機能亢進症',
                      '慢性心臓弁膜症',
                      '狭心症/心筋梗塞/脳卒中',
                      '心内膜炎リスク',
                      '高脂血症',
                      'その他',
                    ] as MedicalCondition[]
                  ).map((condition) => (
                    <button
                      key={condition}
                      type="button"
                      onClick={() =>
                        toggleArrayValue(watchedValues.medicalConditions, condition, 'medicalConditions')
                      }
                      className={`py-3 px-2 rounded-lg text-xs font-semibold transition-all ${
                        watchedValues.medicalConditions.includes(condition)
                          ? 'bg-[#006aff] text-white'
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {condition}
                    </button>
                  ))}
                </div>
                {watchedValues.medicalConditions.includes('その他') && (
                  <input
                    {...register('otherCondition')}
                    type="text"
                    placeholder="詳細を入力してください"
                    className="step-input mt-3"
                  />
                )}
              </div>

              {/* Dental history */}
              <div>
                <label className="block text-lg font-semibold text-gray-800 mb-3">
                  歯科治療や手術の履歴はありますか？
                </label>
                <div className="flex gap-3 mb-3">
                  <button
                    type="button"
                    onClick={() => setValue('hasDentalHistory', false)}
                    className={`flex-1 py-4 rounded-xl text-base font-bold transition-all ${
                      !watchedValues.hasDentalHistory
                        ? 'bg-[#006aff] text-white'
                        : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    いいえ
                  </button>
                  <button
                    type="button"
                    onClick={() => setValue('hasDentalHistory', true)}
                    className={`flex-1 py-4 rounded-xl text-base font-bold transition-all ${
                      watchedValues.hasDentalHistory
                        ? 'bg-[#006aff] text-white'
                        : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    はい
                  </button>
                </div>
                {watchedValues.hasDentalHistory && (
                  <textarea
                    {...register('dentalHistoryDetails')}
                    placeholder="詳細を入力してください"
                    className="step-input min-h-[100px]"
                  />
                )}
              </div>

              {/* Smoking/Drinking */}
              <div>
                <label className="block text-lg font-semibold text-gray-800 mb-3">
                  喫煙・飲酒の習慣について教えてください
                </label>
                <div className="flex items-center gap-3 mb-3">
                  <input
                    id="no-smoking-drinking"
                    type="checkbox"
                    checked={watchedValues.noSmokingDrinking}
                    onChange={(e) => setValue('noSmokingDrinking', e.target.checked)}
                    className="w-5 h-5"
                  />
                  <label htmlFor="no-smoking-drinking" className="text-base font-semibold cursor-pointer">該当なし</label>
                </div>
                {!watchedValues.noSmokingDrinking && (
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-sm text-gray-600 mb-2">喫煙（箱/日）</label>
                      <input
                        {...register('smokingAmount', { valueAsNumber: true })}
                        type="number"
                        step="0.5"
                        placeholder="0"
                        className="step-input"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-2">飲酒（回/週）</label>
                      <input
                        {...register('drinkingFrequency', { valueAsNumber: true })}
                        type="number"
                        placeholder="0"
                        className="step-input"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </StepContainer>
        );

      case 5:
        return (
          <StepContainer title="症状について教えてください">
            <div className="space-y-6">
              {/* Symptoms */}
              <div>
                <label className="block text-lg font-semibold text-gray-800 mb-3">
                  歯の症状を詳しく説明してください <span className="text-red-600">*</span>
                </label>
                <textarea
                  {...register('symptoms')}
                  placeholder="例：左奥歯が噛むと痛い"
                  className="step-input min-h-[120px]"
                />
                {errors.symptoms && <ErrorMessage>{errors.symptoms.message}</ErrorMessage>}
              </div>

              {/* Pain level */}
              <div>
                <label className="block text-lg font-semibold text-gray-800 mb-3">
                  痛みのレベル（0-10） <span className="text-red-600">*</span>
                </label>
                <div className="space-y-3">
                  <div className="bg-gray-50 p-6 rounded-xl text-center">
                    <div className="text-5xl font-bold text-[#006aff] mb-2">
                      {watch('painLevel') || 0}
                    </div>
                    <div className="text-sm text-gray-600">
                      {watch('painLevel') === 0 && '痛みなし'}
                      {watch('painLevel') >= 1 && watch('painLevel') <= 2 && '軽い痛み'}
                      {watch('painLevel') >= 3 && watch('painLevel') <= 4 && '中程度の痛み'}
                      {watch('painLevel') >= 5 && watch('painLevel') <= 6 && '強い痛み'}
                      {watch('painLevel') >= 7 && watch('painLevel') <= 8 && '非常に強い痛み'}
                      {watch('painLevel') >= 9 && '耐えられない痛み'}
                    </div>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="10"
                    value={watch('painLevel') || 0}
                    onChange={(e) => setValue('painLevel', parseInt(e.target.value))}
                    className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#006aff]"
                  />
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>0</span>
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>5</span>
                    <span>6</span>
                    <span>7</span>
                    <span>8</span>
                    <span>9</span>
                    <span>10</span>
                  </div>
                </div>
              </div>
            </div>
          </StepContainer>
        );

      case 6:
        return (
          <StepContainer title="個人情報保護方針への同意">
            <div className="space-y-6">
              {/* Privacy policy */}
              <div className="bg-gray-50 p-5 rounded-xl text-sm leading-relaxed">
                <h3 className="font-bold text-lg mb-3 text-gray-900">個人情報保護方針同意書</h3>

                <p className="mb-3 text-gray-700">
                  京城メディスデンタルはお客様のプライバシーを大切にし、個人情報保護法を遵守しています。
                </p>

                <p className="mb-4 text-gray-700">
                  本プライバシーポリシーにより、お客様の個人情報がどのように使用され、どのような保護措置が取られているかをお知らせします。
                </p>

                <h4 className="font-bold mt-5 mb-2 text-gray-900">個人情報の収集と利用</h4>

                <h5 className="font-semibold mt-3 mb-2 text-gray-800">【収集する個人情報】</h5>
                <ul className="list-disc pl-5 space-y-1.5 text-gray-700">
                  <li>必須項目：氏名、生年月日、性別、住所、年齢、連絡先、携帯電話、メール、病院登録番号、サービス申請状況</li>
                  <li>健康情報：来院情報、診断情報、処方情報、入退院情報、検査情報</li>
                  <li>決済情報：カード会社名、カード番号など決済承認情報</li>
                  <li>防犯、施設安全、防火のためのCCTV運営</li>
                </ul>

                <h5 className="font-semibold mt-4 mb-2 text-gray-800">【個人情報の利用目的】</h5>
                <ul className="list-disc pl-5 space-y-1.5 text-gray-700">
                  <li>医療サービス：検査予約、予約照会、会員サービスの本人確認</li>
                  <li>検査結果および個別SMS、メール情報、差別化されたコンテンツの提供</li>
                  <li>新サービスやイベント情報の提供、顧客満足度調査</li>
                  <li>新サービス開発のための医療サービスと請求、決済、返金などの管理業務</li>
                  <li>外部委託検査依頼のための基礎データ</li>
                  <li>消費者基本法第52条に基づく消費者危害情報の収集</li>
                  <li>診療のための口腔内外写真およびX線撮影、研究、相談、広報用写真の使用（院内、ウェブサイト、その他病院広報媒体など）</li>
                </ul>

                <h4 className="font-bold mt-5 mb-2 text-gray-900">個人情報の保有・利用期間</h4>
                <ul className="list-disc pl-5 space-y-1.5 text-gray-700">
                  <li>病院は収集した顧客の個人情報と医療情報を法定期間（5年）のみ保管し、その後データベースから削除します。</li>
                  <li>情報提供者が個人情報の削除を要請した場合、直ちに削除されます。ただし、他の法律で定める期間は保有される場合があります。</li>
                  <li>消費者の不満または紛争解決に関する記録：3年（電子商取引等における消費者保護に関する法律等）</li>
                  <li>信用情報の収集・処理及び利用等に関する記録：3年（信用情報の利用及び保護に関する法律）</li>
                  <li>本人確認に関する記録：6ヶ月（情報通信網の利用促進及び情報保護等に関する法律等）</li>
                </ul>

                <h4 className="font-bold mt-5 mb-2 text-gray-900">同意拒否権および拒否による不利益</h4>
                <p className="text-gray-700 mb-3">
                  個人情報の提供に対する同意を拒否する権利があり、拒否による不利益はありません。
                  ただし、医療サービスを受けることができなくなります。
                </p>

                <div className="bg-yellow-50 p-4 rounded-lg mt-4 mb-4">
                  <p className="font-semibold text-gray-800 mb-2">※ 14歳未満の児童の場合、法定代理人の同意が必要です。</p>
                  <p className="text-gray-700 text-sm">
                    【法定代理人同意】私は未成年者の法定代理人として、京城メディスデンタルのサービス申請に同意します。
                  </p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg mt-4">
                  <p className="text-gray-700 text-sm mb-2">
                    ※ 個人情報は同意した目的以外には使用されません。
                    提供された個人情報の使用を拒否したい場合は、個人情報管理者を通じて閲覧、訂正、削除を要請できます。
                  </p>
                  <p className="text-gray-800 font-semibold text-sm">
                    【個人情報保護法】上記のような関連法令に基づき、個人情報の収集・利用に同意します。
                  </p>
                </div>
              </div>

              {/* Consent date */}
              <div className="bg-blue-50 p-4 rounded-xl">
                <p className="text-sm text-gray-700">
                  同意日：<span className="font-semibold">{new Date().toLocaleDateString('ja-JP')}</span>
                </p>
              </div>

              {/* Consent checkbox */}
              <div className="flex items-start gap-3 bg-white border-2 border-[#006aff] p-4 rounded-xl">
                <input
                  id="privacy-consent"
                  type="checkbox"
                  checked={watch('privacyConsent')}
                  onChange={(e) => setValue('privacyConsent', e.target.checked)}
                  className="w-6 h-6 mt-0.5"
                />
                <label htmlFor="privacy-consent" className="text-base font-semibold text-gray-800 cursor-pointer">
                  個人情報の収集・利用に同意します <span className="text-red-600">*</span>
                </label>
              </div>
              {errors.privacyConsent && <ErrorMessage>{errors.privacyConsent.message}</ErrorMessage>}

              {/* Signature */}
              <div>
                <label className="block text-lg font-semibold text-gray-800 mb-3">
                  お名前を署名してください <span className="text-red-600">*</span>
                </label>
                <input
                  {...register('signature')}
                  type="text"
                  placeholder="山田太郎"
                  className="step-input text-center text-2xl font-bold"
                />
                {errors.signature && <ErrorMessage>{errors.signature.message}</ErrorMessage>}
              </div>

              {/* Guardian info for minors */}
              {isMinor && (
                <div className="bg-yellow-50 p-5 rounded-xl space-y-4">
                  <p className="text-sm font-semibold text-gray-800">
                    ⚠️ 14歳未満の児童には法定代理人の同意が必要です
                  </p>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      法定代理人氏名 <span className="text-red-600">*</span>
                    </label>
                    <input
                      {...register('guardianName')}
                      type="text"
                      placeholder="保護者の氏名"
                      className="step-input"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      続柄 <span className="text-red-600">*</span>
                    </label>
                    <input
                      {...register('guardianRelationship')}
                      type="text"
                      placeholder="父、母など"
                      className="step-input"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      法定代理人署名 <span className="text-red-600">*</span>
                    </label>
                    <input
                      {...register('guardianSignature')}
                      type="text"
                      placeholder="保護者の氏名"
                      className="step-input text-center text-xl font-bold"
                    />
                    {errors.guardianSignature && <ErrorMessage>{errors.guardianSignature.message}</ErrorMessage>}
                  </div>
                </div>
              )}

              {/* Completion date */}
              <div className="bg-blue-50 p-4 rounded-xl text-center">
                <p className="text-sm text-gray-700">
                  記入日：{new Date().toLocaleDateString('ja-JP', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              </div>
            </div>
          </StepContainer>
        );

      default:
        return null;
    }
  };

  const languages = [
    { code: 'kr', name: '한국어', Flag: KR, href: '/patient-intake' },
    { code: 'us', name: 'English', Flag: US, href: '/en/patient-intake' },
    { code: 'jp', name: '日本語', Flag: JP, href: '/jp/patient-intake' },
    { code: 'cn', name: '中文', Flag: CN, href: '/cn/patient-intake' },
    { code: 'vn', name: 'Tiếng Việt', Flag: VN, href: '/vi/patient-intake' },
    { code: 'mn', name: 'Монгол', Flag: MN, href: '/mn/patient-intake' },
    { code: 'uz', name: "O'zbek", Flag: UZ, href: '/uz/patient-intake' },
    { code: 'ru', name: 'Русский', Flag: RU, href: '/ru/patient-intake' },
    { code: 'th', name: 'ไทย', Flag: TH, href: '/th/patient-intake' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Top Navigation Bar */}
      <header
        className="bg-white fixed top-0 left-0 right-0 shadow-sm"
        style={{
          height: '52px',
          minHeight: '52px',
          maxHeight: '52px',
          overflow: 'visible',
          zIndex: 9999
        }}
      >
        <div
          className="w-full max-w-[430px] mx-auto flex items-center justify-between px-4"
          style={{ height: '52px' }}
        >
          {/* Logo */}
          <Link href="/jp" className="flex items-center" style={{ height: '32px' }}>
            <svg width="168" height="32" viewBox="0 0 168 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_1_4305)">
                <path d="M24 16C24 9.37234 18.6271 4 12 4C7.5641 4 3.69091 6.40734 1.61377 9.98645L5.2815 13.0158C5.67266 13.407 6.30709 13.407 6.69881 13.0158L13.445 7.44365C14.3921 6.49652 16.0109 7.16764 16.0109 8.50649V27.3125C20.6659 25.6621 24 21.2211 24 16.0006V16Z" fill="#398BFF"/>
                <path d="M7.40715 18.3193C6.62427 19.1021 5.35541 19.1021 4.57253 18.3193L0.0462841 14.9496C0.0163688 15.2956 0 15.6461 0 16C0 22.6271 5.37234 28 12 28C12.0011 28 12.0017 28 12.0028 28V14.8982L7.40715 18.3198V18.3193Z" fill="#398BFF"/>
                <path d="M13.4451 7.44319L6.69888 13.0153C6.30772 13.4065 5.67329 13.4065 5.28157 13.0153L1.61384 9.98655C0.75363 11.4688 0.202172 13.1525 0.0463867 14.9497L4.5732 18.3199C5.35608 19.1028 6.62494 19.1028 7.40782 18.3199L12.0035 14.8983V28.0001C13.4095 28.0001 14.7585 27.7568 16.0121 27.3126V8.50603C16.0121 7.16661 14.3933 6.49605 13.4462 7.44319H13.4451Z" fill="white"/>
                <path d="M147.982 7.19971C147.319 7.19971 146.782 7.73705 146.782 8.39971V23.5995C146.782 24.2622 147.319 24.7995 147.982 24.7995C148.644 24.7995 149.182 24.2622 149.182 23.5995V8.39971C149.182 7.73705 148.644 7.19971 147.982 7.19971Z" fill="black"/>
                <path d="M143.982 10.4002H140.782V9.20024C140.782 8.53759 140.245 8.00024 139.582 8.00024C138.92 8.00024 138.382 8.53759 138.382 9.20024V10.4002H135.182C134.52 10.4002 133.982 10.9376 133.982 11.6002C133.982 12.2629 134.52 12.8002 135.182 12.8002H138.382V13.7959C138.382 17.3056 136.848 20.2283 134.817 20.8667C134.32 21.023 133.982 21.4842 133.982 22.0051C133.982 22.8202 134.781 23.3965 135.554 23.1385C137.216 22.5837 138.641 21.1675 139.582 19.2428C140.523 21.1675 141.948 22.5831 143.61 23.1385C144.383 23.397 145.182 22.8202 145.182 22.0051C145.182 21.4842 144.844 21.023 144.347 20.8667C142.316 20.2288 140.781 17.3056 140.781 13.7959V12.8002H143.981C144.644 12.8002 145.181 12.2629 145.181 11.6002C145.181 10.9376 144.644 10.4002 143.981 10.4002H143.982Z" fill="black"/>
                <path d="M166.781 14.3997H165.581V8.39971C165.581 7.73705 165.044 7.19971 164.381 7.19971C163.719 7.19971 163.181 7.73705 163.181 8.39971V19.9995C161.164 20.3901 159.116 20.6475 157.057 20.7717V15.9999C157.057 15.4106 156.579 14.9331 155.99 14.9331C155.401 14.9331 154.923 15.4106 154.923 15.9999V20.8513C154.685 20.8546 154.447 20.8575 154.208 20.8575H152.248C151.659 20.8575 151.181 21.3818 151.181 22.0287C151.181 22.6755 151.659 23.1999 152.248 23.1999H154.208C157.227 23.1999 160.236 22.9126 163.181 22.3425V23.6001C163.181 24.2627 163.719 24.8001 164.381 24.8001C165.044 24.8001 165.581 24.2627 165.581 23.6001V16.8003H166.781C167.444 16.8003 167.981 16.2629 167.981 15.6003C167.981 14.9376 167.444 14.4003 166.781 14.4003V14.3997Z" fill="black"/>
                <path d="M153.057 11.1312H159.409C159.334 13.385 159.148 15.6315 158.853 17.8582C158.763 18.5417 159.206 19.162 159.837 19.1982C160.382 19.2298 160.857 18.8053 160.937 18.2222C161.284 15.7009 161.492 13.1541 161.558 10.5989C161.584 9.61397 160.86 8.80005 159.959 8.80005H153.057C152.467 8.80005 151.99 9.32159 151.99 9.96562C151.99 10.6091 152.467 11.1312 153.057 11.1312H153.057Z" fill="black"/>
                <path d="M112.782 7.19971C112.119 7.19971 111.582 7.73705 111.582 8.39971V23.5995C111.582 24.2622 112.119 24.7995 112.782 24.7995C113.445 24.7995 113.982 24.2622 113.982 23.5995V8.39971C113.982 7.73705 113.445 7.19971 112.782 7.19971Z" fill="#398BFF"/>
                <path d="M109.527 20.2531C106.922 20.7876 105.085 21.0586 102.436 21.0619V11.2H107.983C108.645 11.2 109.183 10.6627 109.183 10C109.183 9.3374 108.645 8.80005 107.983 8.80005H101.412C100.845 8.80005 100.382 9.32949 100.382 9.97804V21.6241C100.382 22.4922 101.099 23.1955 101.983 23.1955H102.436C105.085 23.1916 106.922 22.9207 109.527 22.3861L109.947 22.2998C110.433 22.1999 110.782 21.7726 110.782 21.2764C110.782 20.6149 110.175 20.1199 109.527 20.2531Z" fill="#398BFF"/>
                <path d="M96.3821 7.19971C95.7195 7.19971 95.1821 7.73705 95.1821 8.39971V23.5786C95.1821 24.2413 95.7195 24.7786 96.3821 24.7786C97.0448 24.7786 97.5821 24.2413 97.5821 23.5786V8.39971C97.5821 7.73705 97.0448 7.19971 96.3821 7.19971Z" fill="#398BFF"/>
                <path d="M93.1824 7.19971C92.5197 7.19971 91.9824 7.73705 91.9824 8.39971V14.3997H90.3822V10.2923C90.3822 9.46819 89.6659 8.7999 88.782 8.7999H83.982C83.0981 8.7999 82.3818 9.46819 82.3818 10.2923V21.707C82.3818 22.531 83.0981 23.1993 83.982 23.1993H88.782C89.6659 23.1993 90.3822 22.531 90.3822 21.707V16.7997H91.9824V23.5786C91.9824 24.2413 92.5197 24.7786 93.1824 24.7786C93.8451 24.7786 94.3824 24.2413 94.3824 23.5786V8.39971C94.3824 7.73705 93.8451 7.19971 93.1824 7.19971ZM87.9822 20.7993H84.7824V11.1564H87.9822V20.7999V20.7993Z" fill="#398BFF"/>
                <path d="M130.902 21.04H117.062C116.465 21.04 115.982 21.5235 115.982 22.1198V22.1204C115.982 22.7167 116.465 23.2002 117.062 23.2002H130.902C131.498 23.2002 131.982 22.7167 131.982 22.1204V22.1198C131.982 21.5235 131.498 21.04 130.902 21.04Z" fill="#398BFF"/>
                <path d="M117.588 18.0315C117.917 18.3752 118.409 18.4921 118.845 18.3233C121.034 17.4778 122.861 15.689 123.982 13.3641C125.103 15.689 126.93 17.4778 129.118 18.3233C129.555 18.4921 130.046 18.3758 130.375 18.0315C130.995 17.3841 130.761 16.2874 129.939 15.9701C127.478 15.0191 125.62 12.3938 125.249 9.18105C125.172 8.50993 124.635 8.00024 123.988 8.00024H123.977C123.336 8.00024 122.791 8.49752 122.716 9.16186C122.35 12.3837 120.49 15.0174 118.024 15.9701C117.202 16.2879 116.969 17.3846 117.588 18.0315Z" fill="#398BFF"/>
                <path d="M78.3821 7.19971C77.7194 7.19971 77.1821 7.73705 77.1821 8.39971V14.2665H76.5279V8.39971C76.5279 7.73705 75.9906 7.19971 75.3279 7.19971C74.6653 7.19971 74.1279 7.73705 74.1279 8.39971V20.2253C73.984 20.1903 73.8299 20.1858 73.673 20.218C71.1827 20.7288 69.3939 20.9991 66.9279 21.0251V11.1999H72.1275C72.7902 11.1999 73.3275 10.6625 73.3275 9.9999C73.3275 9.33724 72.7902 8.7999 72.1275 8.7999H65.5574C64.9902 8.7999 64.5273 9.32934 64.5273 9.97788V21.589C64.5273 22.4571 65.2436 23.1604 66.1275 23.1604H66.9273V23.1581C69.3934 23.1322 71.1821 22.8618 73.6724 22.351L74.0924 22.2646C74.1042 22.2624 74.1155 22.2584 74.1273 22.2556V23.5781C74.1273 24.2407 74.6647 24.7781 75.3273 24.7781C75.99 24.7781 76.5273 24.2407 76.5273 23.5781V16.6654H77.1815V23.5781C77.1815 24.2407 77.7189 24.7781 78.3815 24.7781C79.0442 24.7781 79.5815 24.2407 79.5815 23.5781V8.39971C79.5815 7.73705 79.0442 7.19971 78.3815 7.19971H78.3821Z" fill="black"/>
                <path d="M38.9701 11.1993H42V12.7995H39.4657C38.8031 12.7995 38.2657 13.3369 38.2657 13.9995C38.2657 14.6622 38.8031 15.1995 39.4657 15.1995H42V16.3329C42 16.9956 42.5374 17.5329 43.2 17.5329C43.8627 17.5329 44.4 16.9956 44.4 16.3329V8.39971C44.4 7.73705 43.8627 7.19971 43.2 7.19971C42.5374 7.19971 42 7.73705 42 8.39971V8.79933H39.1829C38.9097 8.32746 38.4023 7.99952 37.8 7.99952H36.9991H30.4002C29.7376 7.99952 29.2002 8.53687 29.2002 9.19952C29.2002 9.86217 29.7376 10.3995 30.4002 10.3995H36.4843C35.3865 12.8972 32.6823 14.7626 29.8397 15.1323C29.2431 15.2102 28.8 15.725 28.8 16.3267C28.8 17.0486 29.43 17.6046 30.1474 17.525C34.248 17.0701 37.6335 14.5651 38.9701 11.1988V11.1993Z" fill="black"/>
                <path d="M41.1816 17.5996H34.0183C32.0202 17.5996 30.3997 19.2043 30.3997 21.1844C30.3997 23.1639 32.0196 24.7691 34.0183 24.7691H41.1816C43.1797 24.7691 44.7997 23.1644 44.7997 21.1844C44.7997 19.2049 43.1797 17.5996 41.1816 17.5996ZM42.4002 21.1996C42.4002 21.8623 41.8629 22.3996 41.2002 22.3996H34.0002C33.3376 22.3996 32.8002 21.8623 32.8002 21.1996C32.8002 20.537 33.3376 19.9996 34.0002 19.9996H41.2002C41.8629 19.9996 42.4002 20.537 42.4002 21.1996Z" fill="black"/>
                <path d="M47.8369 16.7417C49.4986 16.2224 50.9238 14.8971 51.8647 13.0966C52.8056 14.8977 54.2314 16.2224 55.8926 16.7417C56.6641 16.9827 57.4617 16.446 57.4645 15.6857C57.4662 15.1986 57.1219 14.7617 56.6258 14.6149C54.8224 14.0821 53.4113 11.8633 53.12 9.07212C53.0568 8.46534 52.5161 8.00024 51.8647 8.00024C51.2133 8.00024 50.6726 8.46534 50.6094 9.07212C50.3181 11.8633 48.907 14.0821 47.1037 14.6149C46.6075 14.7617 46.2632 15.1986 46.2649 15.6857C46.2677 16.446 47.0653 16.9833 47.8369 16.7417Z" fill="black"/>
                <path d="M56.5281 12.8001H59.3283V16.4001C59.3283 17.0627 59.8657 17.6001 60.5283 17.6001C61.191 17.6001 61.7283 17.0627 61.7283 16.4001V8.39971C61.7283 7.73705 61.191 7.19971 60.5283 7.19971C59.8657 7.19971 59.3283 7.73705 59.3283 8.39971V10.3995H56.5281C55.8655 10.3995 55.3281 10.9369 55.3281 11.5995C55.3281 12.2622 55.8655 12.7995 56.5281 12.7995V12.8001Z" fill="black"/>
                <path d="M58.3952 17.5996H51.1331C49.1074 17.5996 47.4648 19.2043 47.4648 21.1844C47.4648 23.1639 49.1074 24.7691 51.1331 24.7691H58.3952C60.421 24.7691 62.0635 23.1644 62.0635 21.1844C62.0635 19.2049 60.421 17.5996 58.3952 17.5996ZM59.6635 21.1996C59.6635 21.8623 59.1262 22.3996 58.4635 22.3996H51.0648C50.4022 22.3996 49.8648 21.8623 49.8648 21.1996C49.8648 20.537 50.4022 19.9996 51.0648 19.9996H58.4635C59.1262 19.9996 59.6635 20.537 59.6635 21.1996Z" fill="black"/>
              </g>
              <defs>
                <clipPath id="clip0_1_4305">
                  <rect width="167.981" height="24" fill="white" transform="translate(0 4)"/>
                </clipPath>
              </defs>
            </svg>
          </Link>

          {/* Language Toggle */}
          <div className="relative">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="bg-white border border-gray-200 rounded-md flex items-center gap-1"
              style={{ height: '28px', padding: '4px 8px' }}
            >
              <JP className="w-4 h-3 rounded-sm" title="日本語" />
              <svg width="10" height="10" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Language Dropdown */}
            {isLangOpen && (
              <>
                {/* Backdrop */}
                <div
                  className="fixed inset-0 bg-black/20"
                  style={{ zIndex: 9998 }}
                  onClick={() => setIsLangOpen(false)}
                />

                {/* Dropdown Menu */}
                <div
                  className="absolute bg-white border border-[#f3f6fb] rounded-[20px] flex flex-col shadow-lg"
                  style={{ zIndex: 9999, padding: '24px 20px', width: '200px', gap: '16px', top: '36px', right: '0' }}
                >
                  {languages.map((lang) => (
                    <Link
                      key={lang.code}
                      href={lang.href}
                      onClick={() => setIsLangOpen(false)}
                      className="flex items-center justify-between w-full"
                    >
                      <div className="flex items-center gap-3">
                        <lang.Flag className="w-6 h-[18px] rounded-sm shrink-0" title={lang.name} />
                        <p className="font-medium text-[#292a2f] text-[16px]">
                          {lang.name}
                        </p>
                      </div>
                      {lang.code === 'jp' && (
                        <div className="w-5 h-5 shrink-0">
                          <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                          </svg>
                        </div>
                      )}
                    </Link>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="sticky bg-white shadow-sm z-10" style={{ top: '52px' }}>
        <div className="max-w-[430px] mx-auto px-5 py-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-gray-600">患者情報登録フォーム</span>
            <span className="text-sm font-bold text-[#006aff]">
              {currentStep} / {TOTAL_STEPS}
            </span>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#006aff] transition-all duration-300 ease-out"
              style={{ width: `${(currentStep / TOTAL_STEPS) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Form Content */}
      <form
        onSubmit={handleSubmit(onSubmit, (errors) => {
          console.log('Form validation failed:', errors);
        })}
        className="max-w-[430px] mx-auto px-5 py-8"
        style={{ marginTop: '60px' }}
      >
        {renderStep()}

        {/* Navigation Buttons */}
        <div className="flex gap-3 mt-8">
          {currentStep > 1 && (
            <button
              type="button"
              onClick={prevStep}
              className="flex-1 py-4 bg-gray-200 text-gray-700 rounded-2xl font-bold text-lg hover:bg-gray-300 transition-colors"
            >
              前へ
            </button>
          )}
          {currentStep < TOTAL_STEPS && (
            <button
              type="button"
              onClick={nextStep}
              disabled={!isCurrentStepValid}
              className={`flex-1 py-4 rounded-2xl font-bold text-lg transition-colors ${
                isCurrentStepValid
                  ? 'bg-[#006aff] text-white hover:bg-[#0058d6]'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              次へ
            </button>
          )}
          {currentStep === TOTAL_STEPS && (
            <button
              type="submit"
              disabled={!isCurrentStepValid || isSubmitting}
              onClick={() => console.log('Submit button clicked, valid:', isCurrentStepValid, 'submitting:', isSubmitting)}
              className={`flex-1 py-4 rounded-2xl font-bold text-lg transition-colors ${
                isCurrentStepValid && !isSubmitting
                  ? 'bg-[#006aff] text-white hover:bg-[#0058d6]'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              {isSubmitting ? '送信中...' : '送信'}
            </button>
          )}
        </div>
      </form>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-5">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">送信完了</h3>
              <p className="text-gray-600 mb-6">
                登録フォームの送信が完了しました。<br />
                受付でチェックインしてください。
              </p>
            </div>

            {/* Review Event Notice */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-5 mb-6 border-2 border-blue-200">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">🎁</span>
                <h4 className="text-lg font-bold text-gray-800">レビューイベント</h4>
              </div>
              <div className="space-y-2 text-sm text-gray-700 mb-3">
                <p className="font-semibold text-base text-blue-600">
                  治療後ネイバー地図にレビューを書く
                </p>
                <p className="font-bold text-gray-800">
                  🎉 5,000ウォン商品券プレゼント！
                </p>
              </div>
              <div className="bg-white/80 rounded-lg p-3 space-y-1.5 text-xs text-gray-600">
                <div className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  <span>GS25モバイル商品券</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  <span>配達の民族クーポン</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  <span>スターバックスクーポン</span>
                </div>
                <p className="text-center pt-2 text-gray-500 italic">
                  ※ 3つの中から1つ選択
                </p>
              </div>
              <p className="text-xs text-gray-500 mt-3 text-center">
                詳細は受付でご確認ください
              </p>
            </div>

            <button
              onClick={() => window.location.href = '/jp'}
              className="w-full py-3 bg-[#006aff] text-white rounded-xl font-bold hover:bg-[#0058d6] transition-colors"
            >
              確認
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// Helper Components
function StepContainer({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2 leading-tight">{title}</h2>
        {subtitle && <p className="text-base text-gray-500">{subtitle}</p>}
      </div>
      {children}
    </div>
  );
}

function ErrorMessage({ children }: { children: React.ReactNode }) {
  return <p className="text-sm text-red-600 mt-2 font-semibold">{children}</p>;
}
