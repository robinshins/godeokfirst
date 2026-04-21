'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ConsultationType } from '@/lib/patient-intake-types';
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
  lastDentalVisit: z.enum(['1년 이내', '1년 이상', '받은 적 없다']),
  drugAllergy: z.boolean().optional(),
  drugAllergyDetails: z.string().optional(),
  medicalConditions: z.array(z.string()),
  otherCondition: z.string().optional(),
  hasDentalHistory: z.boolean().optional(),
  dentalHistoryDetails: z.string().optional(),
  hasDentalInsurance: z.enum(['없다', '있다', '모른다'], { required_error: '치과 보험 가입 유무를 선택해주세요' }),
  insuranceCompany: z.string().optional(),
  insuranceYear: z.number().optional().or(z.nan()).transform((val) => (isNaN(val as number) ? undefined : val)),
  symptoms: z.string().min(1, '증상을 입력해주세요'),
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

  // Step 4 sub-option state (not part of form schema; serialized into medicalConditions on submit)
  const [hypertensionMed, setHypertensionMed] = useState<'유' | '무' | null>(null);
  const [diabetesMed, setDiabetesMed] = useState<'유' | '무' | null>(null);
  const [osteoporosisType, setOsteoporosisType] = useState<'주사' | '약' | null>(null);
  const [hepatitisType, setHepatitisType] = useState<'B' | 'C' | null>(null);
  const [pregnancyStatus, setPregnancyStatus] = useState<'준비중' | '임신중' | '수유중' | null>(null);
  const [smokingDetails, setSmokingDetails] = useState('');

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
      privacyConsent: false,
    },
  });

  // Watch values for conditional rendering
  const watchedValues = {
    consultationTypes: watch('consultationTypes') || [],
    medicalConditions: watch('medicalConditions') || [],
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

  // Sync browser back/forward with step navigation
  useEffect(() => {
    window.history.replaceState({ intakeStep: 1 }, '');

    const handlePopState = (e: PopStateEvent) => {
      if (e.state && typeof e.state.intakeStep === 'number') {
        setCurrentStep(e.state.intakeStep);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

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
      // Serialize sub-options into medicalConditions strings
      const serializedConditions = (data.medicalConditions || []).map((c) => {
        if (c === '고혈압' && hypertensionMed) return `고혈압(약복용 ${hypertensionMed})`;
        if (c === '당뇨' && diabetesMed) return `당뇨(약복용 ${diabetesMed})`;
        if (c === '골다공증' && osteoporosisType) return `골다공증(${osteoporosisType})`;
        if (c === '간염' && hepatitisType) return `간염(${hepatitisType}형)`;
        if (c === '임신 관련' && pregnancyStatus) return `임신 관련(${pregnancyStatus})`;
        return c;
      });

      // Derive boolean flags from text details + pack smoking into otherCondition
      const derivedDrugAllergy = !!(data.drugAllergyDetails && data.drugAllergyDetails.trim());
      const derivedHasDentalHistory = !!(data.dentalHistoryDetails && data.dentalHistoryDetails.trim());
      const smokingPayload = smokingDetails.trim() ? `흡연: ${smokingDetails.trim()}` : '';

      const response = await fetch('/api/patient-intake', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          medicalConditions: serializedConditions,
          drugAllergy: derivedDrugAllergy,
          hasDentalHistory: derivedHasDentalHistory,
          otherCondition: smokingPayload || data.otherCondition || '',
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
        // 모든 항목이 선택사항(특이사항 없음일 수 있음)
        return true;
      case 5:
        return !!values.symptoms;
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
      const newStep = currentStep + 1;
      window.history.pushState({ intakeStep: newStep }, '');
      setCurrentStep(newStep);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      window.history.back();
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
                    '네이버/네이버지도에서 검색해서',
                    '카카오맵에 검색해서',
                    '유튜브/인스타그램을 보고',
                    '지나가다가 간판을 보고',
                    '전단지/칫솔 등을 보고',
                    'AI(챗GPT, 제미니 등)에서 추천받아서',
                    '지인/주변 추천 (지인, 이웃, 직원, 원장님 등)',
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
                      {watchedValues.howDidYouKnow === option && option === '네이버/네이버지도에서 검색해서' && (
                        <input
                          {...register('howDidYouKnowSearch')}
                          type="text"
                          placeholder="검색어를 입력해주세요 (선택사항)"
                          className="step-input mt-3"
                        />
                      )}
                      {watchedValues.howDidYouKnow === option && option === '지인/주변 추천 (지인, 이웃, 직원, 원장님 등)' && (
                        <input
                          {...register('referrerName')}
                          type="text"
                          placeholder="추천인 성함 또는 경로를 입력해주세요 (선택사항)"
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
                    '지인/주변 추천이라 신뢰가 가서',
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
                      '턱관절',
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
                  최근 치과 진료(스케일링 포함)는 언제 받으셨나요? <span className="text-red-600">*</span>
                </label>
                <div className="space-y-2">
                  {(['1년 이내', '1년 이상', '받은 적 없다'] as const).map((option) => (
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
        // 건강 상태
        return (
          <StepContainer title="건강 상태를 알려주세요" subtitle="해당되는 항목만 선택해주세요 (없으면 건너뛰셔도 됩니다)">
            <div className="space-y-6">
              {/* 질환 */}
              <div>
                <label className="block text-lg font-semibold text-gray-800 mb-3">
                  앓고 있는 질환 (중복 선택 가능)
                </label>
                <div className="space-y-3">
                  {(['고혈압', '당뇨', '골다공증', '간염', '결핵', '심장질환', '신장질환', '갑상선질환', '아스피린 혈전제 복용중', '뇌혈관 질환', '임신 관련'] as const).map((condition) => {
                    const isSelected = watchedValues.medicalConditions.includes(condition);
                    return (
                      <div key={condition}>
                        <button
                          type="button"
                          onClick={() =>
                            toggleArrayValue(watchedValues.medicalConditions, condition, 'medicalConditions')
                          }
                          className={`w-full py-4 rounded-xl text-base font-semibold transition-all ${
                            isSelected ? 'bg-[#008095] text-white' : 'bg-gray-100 text-gray-700'
                          }`}
                        >
                          {condition}
                        </button>

                        {/* 고혈압 서브옵션 */}
                        {isSelected && condition === '고혈압' && (
                          <SubOptionRow label="약복용">
                            {(['유', '무'] as const).map((opt) => (
                              <SubOptionButton
                                key={opt}
                                active={hypertensionMed === opt}
                                onClick={() => setHypertensionMed(opt)}
                              >
                                {opt}
                              </SubOptionButton>
                            ))}
                          </SubOptionRow>
                        )}

                        {/* 당뇨 서브옵션 */}
                        {isSelected && condition === '당뇨' && (
                          <SubOptionRow label="약복용">
                            {(['유', '무'] as const).map((opt) => (
                              <SubOptionButton
                                key={opt}
                                active={diabetesMed === opt}
                                onClick={() => setDiabetesMed(opt)}
                              >
                                {opt}
                              </SubOptionButton>
                            ))}
                          </SubOptionRow>
                        )}

                        {/* 골다공증 서브옵션 */}
                        {isSelected && condition === '골다공증' && (
                          <SubOptionRow label="종류">
                            {(['주사', '약'] as const).map((opt) => (
                              <SubOptionButton
                                key={opt}
                                active={osteoporosisType === opt}
                                onClick={() => setOsteoporosisType(opt)}
                              >
                                {opt}
                              </SubOptionButton>
                            ))}
                          </SubOptionRow>
                        )}

                        {/* 간염 서브옵션 */}
                        {isSelected && condition === '간염' && (
                          <SubOptionRow label="종류">
                            {(['B', 'C'] as const).map((opt) => (
                              <SubOptionButton
                                key={opt}
                                active={hepatitisType === opt}
                                onClick={() => setHepatitisType(opt)}
                              >
                                {opt}형
                              </SubOptionButton>
                            ))}
                          </SubOptionRow>
                        )}

                        {/* 임신 관련 서브옵션 */}
                        {isSelected && condition === '임신 관련' && (
                          <SubOptionRow label="상태">
                            {(['준비중', '임신중', '수유중'] as const).map((opt) => (
                              <SubOptionButton
                                key={opt}
                                active={pregnancyStatus === opt}
                                onClick={() => setPregnancyStatus(opt)}
                              >
                                {opt}
                              </SubOptionButton>
                            ))}
                          </SubOptionRow>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* 약물 알러지 */}
              <div>
                <label className="block text-lg font-semibold text-gray-800 mb-3">
                  약물 알러지
                </label>
                <input
                  {...register('drugAllergyDetails')}
                  type="text"
                  placeholder="예: 페니실린"
                  className="step-input"
                />
              </div>

              {/* 수술(또는 시술) 받은 경력 */}
              <div>
                <label className="block text-lg font-semibold text-gray-800 mb-3">
                  수술(또는 시술) 받은 경력
                </label>
                <textarea
                  {...register('dentalHistoryDetails')}
                  placeholder="구체적으로 입력해주세요"
                  className="step-input min-h-[80px]"
                />
              </div>

              {/* 흡연 */}
              <div>
                <label className="block text-lg font-semibold text-gray-800 mb-3">
                  흡연
                </label>
                <input
                  type="text"
                  value={smokingDetails}
                  onChange={(e) => setSmokingDetails(e.target.value)}
                  placeholder="예: 하루 10개비"
                  className="step-input"
                />
              </div>
            </div>
          </StepContainer>
        );

      case 5:
        // 증상
        return (
          <StepContainer title="불편하신 증상을 알려주세요">
            <div className="space-y-6">
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
            <img
              src="/images/goduk_images/고덕퍼스트치과로고 1.svg"
              alt="고덕퍼스트치과"
              style={{ height: '32px', width: 'auto' }}
            />
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

function SubOptionRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mt-2 ml-3 pl-3 border-l-2 border-[#008095]/40">
      <span className="text-sm font-semibold text-gray-600 shrink-0">{label}</span>
      <div className="flex gap-2 flex-1">{children}</div>
    </div>
  );
}

function SubOptionButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-all ${
        active ? 'bg-[#008095] text-white' : 'bg-gray-100 text-gray-700'
      }`}
    >
      {children}
    </button>
  );
}
