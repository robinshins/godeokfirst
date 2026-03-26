'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import {
  ConsultationType,
  MedicalCondition,
} from '@/lib/patient-intake-types';
import { KR, US, JP, CN, VN, MN, UZ, RU, TH } from 'country-flag-icons/react/3x2';

// Validation schema (age field removed since it's calculated from resident number)
const patientIntakeSchema = z.object({
  name: z.string().min(1, '이름을 입력해주세요'),
  gender: z.enum(['남', '여'], { required_error: '성별을 선택해주세요' }),
  residentNumber: z.string().regex(/^\d{6}-\d{7}$/, '올바른 주민등록번호 형식이 아닙니다 (000000-0000000)'),
  address: z.string().min(1, '주소를 입력해주세요'),
  phoneNumber: z.string().regex(/^010-\d{4}-\d{4}$/, '올바른 휴대폰 번호 형식이 아닙니다 (010-0000-0000)'),
  guardianPhoneNumber: z.string().optional(),
  howDidYouKnow: z.string().min(1, '고덕퍼스트치과를 알게 된 경로를 선택해주세요'),
  howDidYouKnowOther: z.string().optional(),
  howDidYouKnowSearch: z.string().optional(),
  howDidYouKnowPartner: z.string().optional(),
  referrerName: z.string().optional(),
  whyVisit: z.string().min(1, '방문하게 된 이유를 선택해주세요'),
  whyVisitOther: z.string().optional(),
  consultationTypes: z.array(z.string()).min(1, '최소 하나의 상담과목을 선택해주세요'),
  otherConsultation: z.string().optional(),
  lastDentalVisit: z.enum(['1년 이내', '2년 이내', '2년 이상', '받은 적 없다']),
  drugAllergy: z.boolean(),
  drugAllergyDetails: z.string().optional(),
  medicalConditions: z.array(z.string()),
  otherCondition: z.string().optional(),
  hasDentalHistory: z.boolean(),
  dentalHistoryDetails: z.string().optional(),
  smokingAmount: z.number().optional().or(z.nan()).transform((val) => (isNaN(val as number) ? undefined : val)),
  drinkingFrequency: z.number().optional().or(z.nan()).transform((val) => (isNaN(val as number) ? undefined : val)),
  noSmokingDrinking: z.boolean(),
  hasDentalInsurance: z.enum(['없다', '있다', '모른다'], { required_error: '치과 보험 가입 유무를 선택해주세요' }),
  insuranceCompany: z.string().optional(),
  insuranceYear: z.number().optional().or(z.nan()).transform((val) => (isNaN(val as number) ? undefined : val)),
  symptoms: z.string().min(1, '증상을 입력해주세요'),
  painLevel: z.number().min(0).max(10),
  privacyConsent: z.boolean().refine((val) => val === true, {
    message: '개인정보 수집·활용에 동의해주세요',
  }),
  signature: z.string().min(1, '서명을 입력해주세요'),
  guardianName: z.string().optional(),
  guardianRelationship: z.string().optional(),
  guardianSignature: z.string().optional(),
}).refine((data) => data.signature === data.name, {
  message: '서명은 위에 입력한 이름과 정확히 일치해야 합니다',
  path: ['signature'],
}).refine((data) => {
  // 보호자 서명이 있으면 보호자 이름과 일치해야 함
  if (data.guardianSignature && data.guardianName) {
    return data.guardianSignature === data.guardianName;
  }
  return true;
}, {
  message: '보호자 서명은 보호자 이름과 정확히 일치해야 합니다',
  path: ['guardianSignature'],
});

type FormData = z.infer<typeof patientIntakeSchema>;

const TOTAL_STEPS = 6;

export default function PatientIntakePage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  // Auto-redirect based on browser language
  useEffect(() => {
    const browserLang = navigator.language.toLowerCase();

    // Check if already redirected (to prevent infinite loop)
    const hasRedirected = sessionStorage.getItem('langRedirected');

    if (!hasRedirected) {
      if (browserLang.startsWith('en')) {
        sessionStorage.setItem('langRedirected', 'true');
        router.push('/en/patient-intake');
      } else if (browserLang.startsWith('ja')) {
        sessionStorage.setItem('langRedirected', 'true');
        router.push('/jp/patient-intake');
      } else if (browserLang.startsWith('zh')) {
        sessionStorage.setItem('langRedirected', 'true');
        router.push('/cn/patient-intake');
      } else if (browserLang.startsWith('vi')) {
        sessionStorage.setItem('langRedirected', 'true');
        router.push('/vi/patient-intake');
      } else if (browserLang.startsWith('mn')) {
        sessionStorage.setItem('langRedirected', 'true');
        router.push('/mn/patient-intake');
      } else if (browserLang.startsWith('uz')) {
        sessionStorage.setItem('langRedirected', 'true');
        router.push('/uz/patient-intake');
      } else if (browserLang.startsWith('ru')) {
        sessionStorage.setItem('langRedirected', 'true');
        router.push('/ru/patient-intake');
      } else if (browserLang.startsWith('th')) {
        sessionStorage.setItem('langRedirected', 'true');
        router.push('/th/patient-intake');
      }
    }
  }, [router]);

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

  const age = calculateAge(watchedValues.residentNumber || '');
  const isMinor = age > 0 && age < 14;

  // Scroll to top when step changes
  useEffect(() => {
    // Use setTimeout to ensure DOM has updated
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      // Fallback for Safari
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 100);
  }, [currentStep]);

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
    console.log('폼 제출 시작:', data);
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/patient-intake', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          age: calculateAge(data.residentNumber),
          consentDate: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit patient intake data');
      }

      const result = await response.json();
      console.log('제출 성공:', result);
      setShowSuccessModal(true);
    } catch (error) {
      console.error('Error submitting patient intake:', error);
      alert('제출 중 오류가 발생했습니다. 다시 시도해주세요.');
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
          values.residentNumber &&
          /^\d{6}-\d{7}$/.test(values.residentNumber) &&
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
        // 만 14세 미만이면 법정대리인 정보도 필수
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
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        // 기본정보: 이름, 성별, 주민번호, 주소, 연락처
        return (
          <StepContainer title="기본정보를 입력해주세요">
            <div className="space-y-5">
              {/* 이름 */}
              <div>
                <label className="block text-base font-semibold text-gray-700 mb-2">
                  이름 <span className="text-red-600">*</span>
                </label>
                <input
                  {...register('name')}
                  type="text"
                  placeholder="홍길동"
                  className="step-input"
                />
                {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
              </div>

              {/* 성별 */}
              <div>
                <label className="block text-base font-semibold text-gray-700 mb-2">
                  성별 <span className="text-red-600">*</span>
                </label>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setValue('gender', '남')}
                    className={`flex-1 py-4 rounded-xl text-lg font-bold transition-all ${
                      watch('gender') === '남'
                        ? 'bg-[#008095] text-white'
                        : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    남성
                  </button>
                  <button
                    type="button"
                    onClick={() => setValue('gender', '여')}
                    className={`flex-1 py-4 rounded-xl text-lg font-bold transition-all ${
                      watch('gender') === '여'
                        ? 'bg-[#008095] text-white'
                        : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    여성
                  </button>
                </div>
                {errors.gender && <ErrorMessage>{errors.gender.message}</ErrorMessage>}
              </div>

              {/* 주민등록번호 */}
              <div>
                <label className="block text-base font-semibold text-gray-700 mb-2">
                  주민등록번호 <span className="text-red-600">*</span>
                </label>
                <input
                  {...register('residentNumber')}
                  type="text"
                  inputMode="numeric"
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

              {/* 주소 */}
              <div>
                <label className="block text-base font-semibold text-gray-700 mb-2">
                  주소 <span className="text-red-600">*</span>
                </label>
                <input
                  {...register('address')}
                  type="text"
                  placeholder="경기 평택시 고덕동..."
                  className="step-input"
                />
                {errors.address && <ErrorMessage>{errors.address.message}</ErrorMessage>}
              </div>

              {/* 연락처 */}
              <div>
                <label className="block text-base font-semibold text-gray-700 mb-2">
                  본인 연락처 <span className="text-red-600">*</span>
                </label>
                <input
                  {...register('phoneNumber')}
                  type="tel"
                  inputMode="numeric"
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

              {/* 보호자 연락처 */}
              <div>
                <label className="block text-base font-semibold text-gray-700 mb-2">
                  보호자 연락처 (선택)
                </label>
                <input
                  {...register('guardianPhoneNumber')}
                  type="tel"
                  inputMode="numeric"
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
        // 내원경로
        return (
          <StepContainer title="내원 경로를 알려주세요">
            <div className="space-y-6">
              {/* 어떻게 알게 되셨나요 */}
              <div>
                <label className="block text-lg font-semibold text-gray-800 mb-3">
                  고덕퍼스트치과는 어떻게 알게 되셨나요? <span className="text-red-600">*</span>
                </label>
                <div className="space-y-2">
                  {[
                    '네이버에 검색해서',
                    '카카오맵에 검색해서',
                    '네이버지도에 검색해서',
                    '유튜브/인스타그램을 보고',
                    '지나가다가 간판(지하철광고)을 보고',
                    'AI(챗GPT, 제미니 등)에서 추천받아서',
                    '주변 추천(지인, 이웃 등)',
                    '지인 추천 (직원, 원장님 포함)',
                    '기타',
                  ].map((option) => (
                    <div key={option}>
                      <button
                        type="button"
                        onClick={() => setValue('howDidYouKnow', option)}
                        className={`w-full py-4 rounded-xl text-base font-semibold transition-all ${
                          watchedValues.howDidYouKnow === option
                            ? 'bg-[#008095] text-white'
                            : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        {option}
                      </button>
                      {watchedValues.howDidYouKnow === option && option === '네이버에 검색해서' && (
                        <input
                          {...register('howDidYouKnowSearch')}
                          type="text"
                          placeholder="검색어를 입력해주세요 (선택사항)"
                          className="step-input mt-3"
                        />
                      )}
                      {watchedValues.howDidYouKnow === option && option === '주변 추천(지인, 이웃 등)' && (
                        <input
                          {...register('howDidYouKnowPartner')}
                          type="text"
                          placeholder="추천인 또는 경로를 입력해주세요 (선택사항)"
                          className="step-input mt-3"
                        />
                      )}
                      {watchedValues.howDidYouKnow === option && option === '기타' && (
                        <input
                          {...register('howDidYouKnowOther')}
                          type="text"
                          placeholder="기타 경로를 입력해주세요"
                          className="step-input mt-3"
                        />
                      )}
                      {watchedValues.howDidYouKnow === option && option === '지인 추천 (직원, 원장님 포함)' && (
                        <div className="mt-3">
                          <input
                            {...register('referrerName')}
                            type="text"
                            placeholder="지인의 성함을 입력해주세요 (선택사항)"
                            className="step-input"
                          />
                          <p className="text-sm text-gray-500 mt-2">
                            * 선택사항입니다.
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                {errors.howDidYouKnow && <ErrorMessage>{errors.howDidYouKnow.message}</ErrorMessage>}
              </div>

              {/* 방문하게 된 이유 */}
              <div>
                <label className="block text-lg font-semibold text-gray-800 mb-3">
                  고덕퍼스트치과에 방문해야겠다는 생각은 어떻게 하시게 되었나요?<br />
                  <span className="text-sm font-normal text-gray-600">(제일 컸던 이유 1개만 선택)</span> <span className="text-red-600">*</span>
                </label>
                <div className="space-y-2">
                  {[
                    '네이버 지도 리뷰가 좋아보여서',
                    '네이버 카페에서 평가가 좋아 보여서',
                    '홈페이지를 봤더니 설명이 잘 되어 있어서',
                    '블로그글을 봤더니 설명이 잘 되어 있어서',
                    '유튜브/인스타그램 영상을 보고 신뢰가 가서',
                    'AI(챗GPT, 제미니 등)에 추천이라 신뢰가 가서',
                    '지인소개라 신뢰가 가서',
                    '주변 추천(지인, 이웃 등)라서',
                    '집이랑 가까워서',
                    '기타',
                  ].map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setValue('whyVisit', option)}
                      className={`w-full py-4 rounded-xl text-base font-semibold transition-all text-left px-4 ${
                        watchedValues.whyVisit === option
                          ? 'bg-[#008095] text-white'
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
                {watchedValues.whyVisit === '기타' && (
                  <input
                    {...register('whyVisitOther')}
                    type="text"
                    placeholder="기타 이유를 입력해주세요"
                    className="step-input mt-3"
                  />
                )}
                {errors.whyVisit && <ErrorMessage>{errors.whyVisit.message}</ErrorMessage>}
              </div>
            </div>
          </StepContainer>
        );

      case 3:
        // 상담과목 및 치과 방문 이력
        return (
          <StepContainer title="상담 정보를 입력해주세요">
            <div className="space-y-6">
              {/* 상담과목 */}
              <div>
                <label className="block text-lg font-semibold text-gray-800 mb-3">
                  상담과목 (중복 선택 가능) <span className="text-red-600">*</span>
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {(
                    [
                      '임플란트',
                      '일반진료(충치, 잇몸, 보철 등)',
                      '사랑니',
                      '구강건강검진',
                      '라미네이트',
                      '스케일링',
                      '기타',
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
                          ? 'bg-[#008095] text-white'
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
                {watchedValues.consultationTypes.includes('기타') && (
                  <input
                    {...register('otherConsultation')}
                    type="text"
                    placeholder="기타 상담 내용을 입력해주세요"
                    className="step-input mt-3"
                  />
                )}
                {errors.consultationTypes && <ErrorMessage>{errors.consultationTypes.message}</ErrorMessage>}
              </div>

              {/* 최근 치과 진료 */}
              <div>
                <label className="block text-lg font-semibold text-gray-800 mb-3">
                  최근 치과 진료는 언제 받으셨나요? <span className="text-red-600">*</span>
                </label>
                <div className="space-y-2">
                  {(['1년 이내', '2년 이내', '2년 이상', '받은 적 없다'] as const).map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setValue('lastDentalVisit', option)}
                      className={`w-full py-4 rounded-xl text-base font-semibold transition-all ${
                        watch('lastDentalVisit') === option
                          ? 'bg-[#008095] text-white'
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              {/* 치과 보험 */}
              <div>
                <label className="block text-lg font-semibold text-gray-800 mb-3">
                  치과 보험 가입이 되셨나요? <span className="text-red-600">*</span>
                </label>
                <div className="space-y-3">
                  <button
                    type="button"
                    onClick={() => setValue('hasDentalInsurance', '없다')}
                    className={`w-full py-4 rounded-xl text-base font-bold transition-all ${
                      watchedValues.hasDentalInsurance === '없다'
                        ? 'bg-[#008095] text-white'
                        : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    없다
                  </button>

                  <div>
                    <button
                      type="button"
                      onClick={() => setValue('hasDentalInsurance', '있다')}
                      className={`w-full py-4 rounded-xl text-base font-bold transition-all ${
                        watchedValues.hasDentalInsurance === '있다'
                          ? 'bg-[#008095] text-white'
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      있다
                    </button>
                    {watchedValues.hasDentalInsurance === '있다' && (
                      <div className="space-y-3 mt-3">
                        <input
                          {...register('insuranceCompany')}
                          type="text"
                          placeholder="보험 회사명을 입력해주세요 (선택사항)"
                          className="step-input"
                        />
                        <input
                          {...register('insuranceYear', { valueAsNumber: true })}
                          type="number"
                          inputMode="numeric"
                          placeholder="가입연도 (예: 2020, 선택사항)"
                          className="step-input"
                        />
                      </div>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={() => setValue('hasDentalInsurance', '모른다')}
                    className={`w-full py-4 rounded-xl text-base font-bold transition-all ${
                      watchedValues.hasDentalInsurance === '모른다'
                        ? 'bg-[#008095] text-white'
                        : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    모른다
                  </button>
                </div>
              </div>
            </div>
          </StepContainer>
        );

      case 4:
        // 건강 상태 및 약물
        return (
          <StepContainer title="건강 상태를 알려주세요">
            <div className="space-y-6">
              {/* 약 부작용 */}
              <div>
                <label className="block text-lg font-semibold text-gray-800 mb-3">
                  약에 대한 부작용이 있나요? <span className="text-red-600">*</span>
                </label>
                <div className="flex gap-3 mb-3">
                  <button
                    type="button"
                    onClick={() => setValue('drugAllergy', false)}
                    className={`flex-1 py-4 rounded-xl text-lg font-bold transition-all ${
                      !watchedValues.drugAllergy
                        ? 'bg-[#008095] text-white'
                        : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    없다
                  </button>
                  <button
                    type="button"
                    onClick={() => setValue('drugAllergy', true)}
                    className={`flex-1 py-4 rounded-xl text-lg font-bold transition-all ${
                      watchedValues.drugAllergy
                        ? 'bg-[#008095] text-white'
                        : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    있다
                  </button>
                </div>
                {watchedValues.drugAllergy && (
                  <input
                    {...register('drugAllergyDetails')}
                    type="text"
                    placeholder="구체적으로 입력해주세요"
                    className="step-input"
                  />
                )}
              </div>

              {/* 질환 */}
              <div>
                <label className="block text-lg font-semibold text-gray-800 mb-3">
                  앓았거나 앓고 있는 질환이 있나요? (중복 선택 가능) <span className="text-red-600">*</span>
                </label>
                <div className="grid grid-cols-2 gap-2 max-h-[50vh] overflow-y-auto p-1">
                  {(
                    [
                      '없음',
                      '고혈압',
                      '당뇨',
                      '아스피린 복용중',
                      '출혈성 질환',
                      '골다공증약 장기 복용',
                      '리트케인 알러지',
                      '만성신부전',
                      '수유증',
                      'B, C형 간염',
                      '위장 장애',
                      '신장 투석',
                      '폐니실린 알러지',
                      '만성간경화',
                      '임신중, 임신가능성',
                      '갑상선 기능 항진증',
                      '만성 심장판막 질환',
                      '혈심증, 심근, 뇌경색',
                      '갑염성심내막염 위험환자',
                      '고지혈증',
                      '기타',
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
                          ? 'bg-[#008095] text-white'
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {condition}
                    </button>
                  ))}
                </div>
                {watchedValues.medicalConditions.includes('기타') && (
                  <input
                    {...register('otherCondition')}
                    type="text"
                    placeholder="기타 질환을 입력해주세요"
                    className="step-input mt-3"
                  />
                )}
              </div>

              {/* 치과 진료 이력 */}
              <div>
                <label className="block text-lg font-semibold text-gray-800 mb-3">
                  치과 진료 및 수술 이력이 있나요?
                </label>
                <div className="flex gap-3 mb-3">
                  <button
                    type="button"
                    onClick={() => setValue('hasDentalHistory', false)}
                    className={`flex-1 py-4 rounded-xl text-base font-bold transition-all ${
                      !watchedValues.hasDentalHistory
                        ? 'bg-[#008095] text-white'
                        : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    없음
                  </button>
                  <button
                    type="button"
                    onClick={() => setValue('hasDentalHistory', true)}
                    className={`flex-1 py-4 rounded-xl text-base font-bold transition-all ${
                      watchedValues.hasDentalHistory
                        ? 'bg-[#008095] text-white'
                        : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    있음
                  </button>
                </div>
                {watchedValues.hasDentalHistory && (
                  <textarea
                    {...register('dentalHistoryDetails')}
                    placeholder="구체적으로 입력해주세요"
                    className="step-input min-h-[100px]"
                  />
                )}
              </div>

              {/* 흡연/음주 */}
              <div>
                <label className="block text-lg font-semibold text-gray-800 mb-3">
                  흡연 및 음주 정도는 어떻게 되시나요?
                </label>
                <div className="flex items-center gap-3 mb-3">
                  <input
                    id="no-smoking-drinking"
                    type="checkbox"
                    checked={watchedValues.noSmokingDrinking}
                    onChange={(e) => setValue('noSmokingDrinking', e.target.checked)}
                    className="w-5 h-5"
                  />
                  <label htmlFor="no-smoking-drinking" className="text-base font-semibold cursor-pointer">해당 없음</label>
                </div>
                {!watchedValues.noSmokingDrinking && (
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-sm text-gray-600 mb-2">흡연 (하루 갑수)</label>
                      <input
                        {...register('smokingAmount', { valueAsNumber: true })}
                        type="number"
                        inputMode="decimal"
                        step="0.5"
                        placeholder="0"
                        className="step-input"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-2">음주 (주 횟수)</label>
                      <input
                        {...register('drinkingFrequency', { valueAsNumber: true })}
                        type="number"
                        inputMode="numeric"
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
        // 증상 및 통증
        return (
          <StepContainer title="불편하신 증상을 알려주세요">
            <div className="space-y-6">
              {/* 증상 */}
              <div>
                <label className="block text-lg font-semibold text-gray-800 mb-3">
                  치아의 증상을 자세히 적어주세요 <span className="text-red-600">*</span>
                </label>
                <textarea
                  {...register('symptoms')}
                  placeholder="예: 왼쪽 어금니가 씹을 때 아파요"
                  className="step-input min-h-[120px]"
                />
                {errors.symptoms && <ErrorMessage>{errors.symptoms.message}</ErrorMessage>}
              </div>

              {/* 통증 정도 */}
              <div>
                <label className="block text-lg font-semibold text-gray-800 mb-3">
                  통증의 정도 (0-10) <span className="text-red-600">*</span>
                </label>
                <div className="space-y-3">
                  <div className="bg-gray-50 p-6 rounded-xl text-center">
                    <div className="text-5xl font-bold text-[#008095] mb-2">
                      {watch('painLevel') || 0}
                    </div>
                    <div className="text-sm text-gray-600">
                      {watch('painLevel') === 0 && '통증 없음'}
                      {watch('painLevel') >= 1 && watch('painLevel') <= 2 && '약한 통증'}
                      {watch('painLevel') >= 3 && watch('painLevel') <= 4 && '중등도 통증'}
                      {watch('painLevel') >= 5 && watch('painLevel') <= 6 && '심한 통증'}
                      {watch('painLevel') >= 7 && watch('painLevel') <= 8 && '극심한 통증'}
                      {watch('painLevel') >= 9 && '참을 수 없는 통증'}
                    </div>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="10"
                    value={watch('painLevel') || 0}
                    onChange={(e) => setValue('painLevel', parseInt(e.target.value))}
                    className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#008095]"
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
        // 개인정보 동의 및 서명
        return (
          <StepContainer title="개인정보 수집·활용 동의">
            <div className="space-y-6">
              {/* 동의서 내용 */}
              <div className="bg-gray-50 p-5 rounded-xl text-sm leading-relaxed">
                <h3 className="font-bold text-lg mb-3 text-gray-900">개인정보 수집·활용 동의서</h3>

                <p className="mb-3 text-gray-700">
                  고덕퍼스트치과는 귀하의 개인정보를 매우 중요시 하며 개인정보 보호법을 준수하고 있습니다.
                </p>

                <p className="mb-4 text-gray-700">
                  고덕퍼스트치과는 개인정보처리방침을 통하여 귀하께서 제공하시는 개인정보가 어떠한 용도와 방식으로 이용되고 있으며
                  개인정보 보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다. 이 개인정보처리방침의 순서는 다음과 같습니다.
                </p>

                <h4 className="font-bold mt-5 mb-2 text-gray-900">개인정보의 수집 및 이용목적</h4>

                <h5 className="font-semibold mt-3 mb-2 text-gray-800">[개인정보 수집항목]</h5>
                <ul className="list-disc pl-5 space-y-1.5 text-gray-700">
                  <li>필수항목: 성명, 생년월일, 성별, 주소, 연령, 연락처, 휴대전화, 이메일, 병원등록번호, 서비스 신청여부</li>
                  <li>건강정보: 내원정보, 상병정보, 치방정보, 입퇴원정보, 검진정보</li>
                  <li>수납정보: 카드사명, 카드번호 등 카드결제 승인정보</li>
                  <li>법죄예방, 시설안전 및 화재예방을 위한 영상정보처리기(CCTV) 운영관련</li>
                </ul>

                <h5 className="font-semibold mt-4 mb-2 text-gray-800">[개인정보 이용목적]</h5>
                <ul className="list-disc pl-5 space-y-1.5 text-gray-700">
                  <li>진료: 검진 예약, 예약조회 및 회원제 서비스 이용에 따른 본인 확인 절차에 이용</li>
                  <li>검사결과 및 개인별 맞춤 SMS, E-mail 정보 및 차별화된 컨텐츠 제공에 이용</li>
                  <li>새로운 서비스와 행사정보에 대한 안내 및 고객만족도조사에 이용</li>
                  <li>신규 서비스 개발을 위한 진료서비스와 접구, 수납 및 환급 등의 원무서비스 제공</li>
                  <li>외부 수탁 검사 의뢰를 위한 기초자료</li>
                  <li>소비자 기본법 제52조에 의거한 소비자 위해 정보 수집</li>
                  <li>검사 및 치료를 등을 위한 구강내외 사진 및 X-ray를 촬영, 촬영한 사진은 더 나은 진료를 위한 연구 및 상담, 홍보(원내, 홈페이지, 기타 병원 홍보매체 등) 목적으로 활용</li>
                </ul>

                <h4 className="font-bold mt-5 mb-2 text-gray-900">개인정보의 보유 및 이용기간</h4>
                <ul className="list-disc pl-5 space-y-1.5 text-gray-700">
                  <li>법원은 수집된 고객의 개인정보 및 진료정보를 보관하는 법정 기간(5년)동안만 보유하며, 그 이후에는 DB에서 삭제하고 있습니다.</li>
                  <li>정보제공자가 개인정보 삭제를 요청할 경우 즉시 삭제합니다. 단, 타 법령의 규정에 의해 보유하도록 한 기간 동안은 보관할 수 있습니다.</li>
                  <li>소비자의 불만 또는 분쟁처리에 관한 기록: 3년 (전자상거래등에서의 소비자보호에 관한 법률)</li>
                  <li>신용정보의 수집/처리 및 이용 등에 관한 기록: 3년 (신용정보의 이용 및 보호에 관한 법률)</li>
                  <li>본인 확인에 관한 기록: 6개월 (정보통신망 이용촉진 및 정보보호 등에 관한 법률)</li>
                </ul>

                <h4 className="font-bold mt-5 mb-2 text-gray-900">개인정보 제공 동의 거부 권리 및 동의 거부에 따른 불이익 내용 또는 제한사항</h4>
                <p className="text-gray-700 mb-3">
                  귀하는 개인정보 제공 동의를 거부할 권리가 있으며, 동의 거부에 따른 불이익은 없습니다.
                  다만, 진료관련 서비스를 받을 수 없습니다.
                </p>

                <div className="bg-yellow-50 p-4 rounded-lg mt-4 mb-4">
                  <p className="font-semibold text-gray-800 mb-2">※ 만14세 미만 아동인 경우 반드시 법정 대리인의 동의가 필요합니다.</p>
                  <p className="text-gray-700 text-sm">
                    [법적대리인 동의서] 본인은 미성년자의 법정대리인으로 고덕퍼스트치과 서비스 이용 신청에 동의합니다.
                  </p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg mt-4">
                  <p className="text-gray-700 text-sm mb-2">
                    ※ 개인정보 제공자가 동의한 내용 외의 다른 목적으로 활용하지 않으며,
                    제공된 개인정보의 이용을 거부하고자 할 때에는 개인정보 관리 책임자를 통해 열람, 정정, 삭제를 요구할 수 있습니다.
                  </p>
                  <p className="text-gray-800 font-semibold text-sm">
                    [개인정보보호법] 등 관련 법규에 의거하여 상기 본인은 위와 같이 개인정보 수집 및 활용에 동의합니다.
                  </p>
                </div>
              </div>

              {/* 동의일 */}
              <div className="bg-blue-50 p-4 rounded-xl">
                <p className="text-sm text-gray-700">
                  동의일: <span className="font-semibold">{new Date().toLocaleDateString('ko-KR')}</span>
                </p>
              </div>

              {/* 동의 체크박스 */}
              <div className="flex items-start gap-3 bg-white border-2 border-[#008095] p-4 rounded-xl">
                <input
                  id="privacy-consent"
                  type="checkbox"
                  checked={watch('privacyConsent')}
                  onChange={(e) => setValue('privacyConsent', e.target.checked)}
                  className="w-6 h-6 mt-0.5"
                />
                <label htmlFor="privacy-consent" className="text-base font-semibold text-gray-800 cursor-pointer">
                  개인정보 수집 및 활용에 동의합니다 <span className="text-red-600">*</span>
                </label>
              </div>
              {errors.privacyConsent && <ErrorMessage>{errors.privacyConsent.message}</ErrorMessage>}

              {/* 서명 */}
              <div>
                <label className="block text-lg font-semibold text-gray-800 mb-3">
                  본인 이름으로 서명해주세요 <span className="text-red-600">*</span>
                </label>
                <input
                  {...register('signature')}
                  type="text"
                  placeholder="홍길동"
                  className="step-input text-center text-2xl font-bold"
                />
                {errors.signature && <ErrorMessage>{errors.signature.message}</ErrorMessage>}
              </div>

              {/* 만 14세 미만 법정대리인 */}
              {isMinor && (
                <div className="bg-yellow-50 p-5 rounded-xl space-y-4">
                  <p className="text-sm font-semibold text-gray-800">
                    ⚠️ 만 14세 미만으로 법정대리인 동의가 필요합니다
                  </p>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      법정대리인 성명 <span className="text-red-600">*</span>
                    </label>
                    <input
                      {...register('guardianName')}
                      type="text"
                      placeholder="법정대리인 이름"
                      className="step-input"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      관계 <span className="text-red-600">*</span>
                    </label>
                    <input
                      {...register('guardianRelationship')}
                      type="text"
                      placeholder="부, 모 등"
                      className="step-input"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      법정대리인 서명 <span className="text-red-600">*</span>
                    </label>
                    <input
                      {...register('guardianSignature')}
                      type="text"
                      placeholder="법정대리인 이름"
                      className="step-input text-center text-xl font-bold"
                    />
                    {errors.guardianSignature && <ErrorMessage>{errors.guardianSignature.message}</ErrorMessage>}
                  </div>
                </div>
              )}

              {/* 작성일 */}
              <div className="bg-blue-50 p-4 rounded-xl text-center">
                <p className="text-sm text-gray-700">
                  작성일: {new Date().toLocaleDateString('ko-KR', {
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
          <Link href="/" className="flex items-center" style={{ height: '32px' }}>
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
              <KR className="w-4 h-3 rounded-sm" title="한국어" />
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
                      {lang.code === 'kr' && (
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
            <span className="text-sm font-semibold text-gray-600">환자 문진표</span>
            <span className="text-sm font-bold text-[#008095]">
              {currentStep} / {TOTAL_STEPS}
            </span>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#008095] transition-all duration-300 ease-out"
              style={{ width: `${(currentStep / TOTAL_STEPS) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Form Content */}
      <form
        onSubmit={handleSubmit(onSubmit, (errors) => {
          console.log('폼 유효성 검사 실패:', errors);
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
              이전
            </button>
          )}
          {currentStep < TOTAL_STEPS && (
            <button
              type="button"
              onClick={nextStep}
              disabled={!isCurrentStepValid}
              className={`flex-1 py-4 rounded-2xl font-bold text-lg transition-colors ${
                isCurrentStepValid
                  ? 'bg-[#008095] text-white hover:bg-[#0058d6]'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              다음
            </button>
          )}
          {currentStep === TOTAL_STEPS && (
            <button
              type="submit"
              disabled={!isCurrentStepValid || isSubmitting}
              onClick={() => console.log('제출 버튼 클릭됨, 유효성:', isCurrentStepValid, '제출중:', isSubmitting)}
              className={`flex-1 py-4 rounded-2xl font-bold text-lg transition-colors ${
                isCurrentStepValid && !isSubmitting
                  ? 'bg-[#008095] text-white hover:bg-[#0058d6]'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              {isSubmitting ? '제출 중...' : '제출하기'}
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
              <h3 className="text-2xl font-bold text-gray-800 mb-2">제출 완료</h3>
              <p className="text-gray-600 mb-6">
                문진표 작성이 완료되었습니다.<br />
                접수대에서 안내받으실 수 있습니다.
              </p>
            </div>

            {/* 리뷰 이벤트 안내 */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-5 mb-6 border-2 border-blue-200">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">🎁</span>
                <h4 className="text-lg font-bold text-gray-800">리뷰 이벤트</h4>
              </div>
              <div className="space-y-2 text-sm text-gray-700 mb-3">
                <p className="font-semibold text-base text-blue-600">
                  진료 후 네이버 지도 리뷰 작성 시
                </p>
                <p className="font-bold text-gray-800">
                  🎉 5,000원 상품권 증정!
                </p>
              </div>
              <div className="bg-white/80 rounded-lg p-3 space-y-1.5 text-xs text-gray-600">
                <div className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  <span>GS25 모바일 상품권</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  <span>배달의민족 쿠폰</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  <span>스타벅스 쿠폰</span>
                </div>
                <p className="text-center pt-2 text-gray-500 italic">
                  ※ 3가지 중 1개 선택 가능
                </p>
              </div>
              <p className="text-xs text-gray-500 mt-3 text-center">
                자세한 사항은 접수대에서 안내받으실 수 있습니다
              </p>
            </div>

            <button
              onClick={() => window.location.href = '/'}
              className="w-full py-3 bg-[#008095] text-white rounded-xl font-bold hover:bg-[#0058d6] transition-colors"
            >
              확인
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
