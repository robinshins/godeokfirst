'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ConsultationType } from '@/lib/patient-intake-types';
import { KR, US, JP, CN, VN, MN, UZ, RU, TH } from 'country-flag-icons/react/3x2';

// Validation schema (age is calculated from resident number)
const patientIntakeSchema = z.object({
  name: z.string().min(1, 'Please enter your name'),
  gender: z.enum(['남', '여'], { required_error: 'Please select your gender' }),
  residentNumber: z.string().regex(/^\d{6}-\d{7}$/, 'Invalid resident registration number format (000000-0000000)'),
  address: z.string().min(1, 'Please enter your address'),
  phoneNumber: z.string().regex(/^010-\d{4}-\d{4}$/, 'Invalid mobile number format (010-0000-0000)'),
  guardianPhoneNumber: z.string().optional(),
  howDidYouKnow: z.string().min(1, 'Please select how you heard about Godeok First Dental Clinic'),
  howDidYouKnowOther: z.string().optional(),
  howDidYouKnowSearch: z.string().optional(),
  howDidYouKnowPartner: z.string().optional(),
  referrerName: z.string().optional(),
  whyVisit: z.string().min(1, 'Please select your reason for visiting'),
  whyVisitOther: z.string().optional(),
  consultationTypes: z.array(z.string()).min(1, 'Please select at least one consultation topic'),
  otherConsultation: z.string().optional(),
  lastDentalVisit: z.enum(['1년 이내', '1년 이상', '받은 적 없다']),
  drugAllergy: z.boolean().optional(),
  drugAllergyDetails: z.string().optional(),
  medicalConditions: z.array(z.string()),
  otherCondition: z.string().optional(),
  hasDentalHistory: z.boolean().optional(),
  dentalHistoryDetails: z.string().optional(),
  hasDentalInsurance: z.enum(['없다', '있다', '모른다'], { required_error: 'Please select whether you have dental insurance' }),
  insuranceCompany: z.string().optional(),
  insuranceYear: z.number().optional().or(z.nan()).transform((val) => (isNaN(val as number) ? undefined : val)),
  symptoms: z.string().min(1, 'Please describe your symptoms'),
  privacyConsent: z.boolean().refine((val) => val === true, {
    message: 'Please consent to the collection and use of your personal information',
  }),
  signature: z.string().min(1, 'Please enter your signature'),
  guardianName: z.string().optional(),
  guardianRelationship: z.string().optional(),
  guardianSignature: z.string().optional(),
}).refine((data) => data.signature === data.name, {
  message: 'Signature must exactly match the name entered above',
  path: ['signature'],
}).refine((data) => {
  if (data.guardianSignature && data.guardianName) {
    return data.guardianSignature === data.guardianName;
  }
  return true;
}, {
  message: 'Guardian signature must exactly match the guardian name',
  path: ['guardianSignature'],
});

type FormData = z.infer<typeof patientIntakeSchema>;

const TOTAL_STEPS = 6;

// Display label maps (internal enum values stay in Korean for backend compatibility)
const GENDER_LABEL: Record<'남' | '여', string> = { '남': 'Male', '여': 'Female' };
const LAST_VISIT_LABEL: Record<'1년 이내' | '1년 이상' | '받은 적 없다', string> = {
  '1년 이내': 'Within 1 year',
  '1년 이상': 'More than 1 year ago',
  '받은 적 없다': 'Never',
};
const INSURANCE_LABEL: Record<'없다' | '있다' | '모른다', string> = {
  '없다': 'No',
  '있다': 'Yes',
  '모른다': "Don't know",
};
const HOW_OPTIONS: { key: string; label: string }[] = [
  { key: '네이버/네이버지도에서 검색해서', label: 'Searched on Naver / Naver Maps' },
  { key: '카카오맵에 검색해서', label: 'Searched on KakaoMap' },
  { key: '유튜브/인스타그램을 보고', label: 'Saw on YouTube / Instagram' },
  { key: '지나가다가 간판을 보고', label: 'Saw the signboard while passing by' },
  { key: '전단지/칫솔 등을 보고', label: 'Saw a flyer / toothbrush, etc.' },
  { key: 'AI(챗GPT, 제미니 등)에서 추천받아서', label: 'Recommended by AI (ChatGPT, Gemini, etc.)' },
  { key: '지인/주변 추천 (지인, 이웃, 직원, 원장님 등)', label: 'Recommended by acquaintance (friend, neighbor, staff, director, etc.)' },
  { key: '기타', label: 'Other' },
];
const WHY_OPTIONS: { key: string; label: string }[] = [
  { key: '네이버 지도 리뷰가 좋아보여서', label: 'Naver Map reviews looked good' },
  { key: '네이버 카페에서 평가가 좋아 보여서', label: 'Reviews on Naver Cafe looked good' },
  { key: '홈페이지를 봤더니 설명이 잘 되어 있어서', label: 'The website explanations were clear' },
  { key: '블로그글을 봤더니 설명이 잘 되어 있어서', label: 'The blog posts were well-explained' },
  { key: '유튜브/인스타그램 영상을 보고 신뢰가 가서', label: 'Gained trust from YouTube / Instagram videos' },
  { key: 'AI(챗GPT, 제미니 등)에 추천이라 신뢰가 가서', label: 'Trusted because recommended by AI (ChatGPT, Gemini, etc.)' },
  { key: '지인/주변 추천이라 신뢰가 가서', label: 'Trusted an acquaintance recommendation' },
  { key: '집이랑 가까워서', label: 'Close to home' },
  { key: '기타', label: 'Other' },
];
const CONSULTATION_LABEL: Record<string, string> = {
  '임플란트': 'Implant',
  '일반진료(충치, 잇몸, 보철 등)': 'General (Cavity, Gums, Prosthetics, etc.)',
  '사랑니': 'Wisdom Tooth',
  '구강건강검진': 'Oral Health Checkup',
  '라미네이트': 'Laminate',
  '스케일링': 'Scaling',
  '턱관절': 'TMJ',
  '기타': 'Other',
};
const CONDITION_LABEL: Record<string, string> = {
  '고혈압': 'Hypertension',
  '당뇨': 'Diabetes',
  '골다공증': 'Osteoporosis',
  '간염': 'Hepatitis',
  '결핵': 'Tuberculosis',
  '심장질환': 'Heart Disease',
  '신장질환': 'Kidney Disease',
  '갑상선질환': 'Thyroid Disease',
  '아스피린 혈전제 복용중': 'Taking Aspirin / Blood Thinner',
  '뇌혈관 질환': 'Cerebrovascular Disease',
  '임신 관련': 'Pregnancy-related',
};

export default function PatientIntakePage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  // Step 4 sub-option state (serialized into medicalConditions on submit)
  const [hypertensionMed, setHypertensionMed] = useState<'유' | '무' | null>(null);
  const [diabetesMed, setDiabetesMed] = useState<'유' | '무' | null>(null);
  const [osteoporosisType, setOsteoporosisType] = useState<'주사' | '약' | null>(null);
  const [hepatitisType, setHepatitisType] = useState<'B' | 'C' | null>(null);
  const [pregnancyStatus, setPregnancyStatus] = useState<'준비중' | '임신중' | '수유중' | null>(null);
  const [smokingDetails, setSmokingDetails] = useState('');

  // Redirect Korean browsers to the Korean page
  useEffect(() => {
    const browserLang = navigator.language.toLowerCase();
    const hasRedirected = sessionStorage.getItem('langRedirected');

    if (!hasRedirected && browserLang.startsWith('ko')) {
      sessionStorage.setItem('langRedirected', 'true');
      router.push('/patient-intake');
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

  const watchedValues = {
    consultationTypes: watch('consultationTypes') || [],
    medicalConditions: watch('medicalConditions') || [],
    hasDentalInsurance: watch('hasDentalInsurance'),
    residentNumber: watch('residentNumber'),
    howDidYouKnow: watch('howDidYouKnow'),
    whyVisit: watch('whyVisit'),
  };

  const calculateAge = (residentNumber?: string, birthdate?: string): number => {
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

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 100);
  }, [currentStep]);

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

  const formatResidentNumber = (value: string): string => {
    const numbers = value.replace(/\D/g, '');
    const limitedNumbers = numbers.slice(0, 13);

    if (limitedNumbers.length <= 6) {
      return limitedNumbers;
    } else {
      return `${limitedNumbers.slice(0, 6)}-${limitedNumbers.slice(6)}`;
    }
  };

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
    setIsSubmitting(true);
    try {
      const serializedConditions = (data.medicalConditions || []).map((c) => {
        if (c === '고혈압' && hypertensionMed) return `고혈압(약복용 ${hypertensionMed})`;
        if (c === '당뇨' && diabetesMed) return `당뇨(약복용 ${diabetesMed})`;
        if (c === '골다공증' && osteoporosisType) return `골다공증(${osteoporosisType})`;
        if (c === '간염' && hepatitisType) return `간염(${hepatitisType}형)`;
        if (c === '임신 관련' && pregnancyStatus) return `임신 관련(${pregnancyStatus})`;
        return c;
      });

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

      setShowSuccessModal(true);
    } catch (error) {
      console.error('Error submitting patient intake:', error);
      alert('An error occurred while submitting. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
        return true;
      case 5:
        return !!values.symptoms;
      case 6: {
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
      }
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
        return (
          <StepContainer title="Please enter your basic information">
            <div className="space-y-5">
              <div>
                <label className="block text-base font-semibold text-gray-700 mb-2">
                  Name <span className="text-red-600">*</span>
                </label>
                <input
                  {...register('name')}
                  type="text"
                  placeholder="John Doe"
                  className="step-input"
                />
                {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
              </div>

              <div>
                <label className="block text-base font-semibold text-gray-700 mb-2">
                  Gender <span className="text-red-600">*</span>
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
                    {GENDER_LABEL['남']}
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
                    {GENDER_LABEL['여']}
                  </button>
                </div>
                {errors.gender && <ErrorMessage>{errors.gender.message}</ErrorMessage>}
              </div>

              <div>
                <label className="block text-base font-semibold text-gray-700 mb-2">
                  Resident Registration Number <span className="text-red-600">*</span>
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

              <div>
                <label className="block text-base font-semibold text-gray-700 mb-2">
                  Address <span className="text-red-600">*</span>
                </label>
                <input
                  {...register('address')}
                  type="text"
                  placeholder="Godeok-dong, Pyeongtaek-si, Gyeonggi-do..."
                  className="step-input"
                />
                {errors.address && <ErrorMessage>{errors.address.message}</ErrorMessage>}
              </div>

              <div>
                <label className="block text-base font-semibold text-gray-700 mb-2">
                  Mobile Phone <span className="text-red-600">*</span>
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

              <div>
                <label className="block text-base font-semibold text-gray-700 mb-2">
                  Guardian&apos;s Phone (Optional)
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
        return (
          <StepContainer title="How did you find us?">
            <div className="space-y-6">
              <div>
                <label className="block text-lg font-semibold text-gray-800 mb-3">
                  How did you hear about Godeok First Dental Clinic? <span className="text-red-600">*</span>
                </label>
                <div className="space-y-2">
                  {HOW_OPTIONS.map(({ key, label }) => (
                    <div key={key}>
                      <button
                        type="button"
                        onClick={() => setValue('howDidYouKnow', key)}
                        className={`w-full py-4 rounded-xl text-base font-semibold transition-all ${
                          watchedValues.howDidYouKnow === key
                            ? 'bg-[#008095] text-white'
                            : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        {label}
                      </button>
                      {watchedValues.howDidYouKnow === key && key === '네이버/네이버지도에서 검색해서' && (
                        <input
                          {...register('howDidYouKnowSearch')}
                          type="text"
                          placeholder="Search keyword (optional)"
                          className="step-input mt-3"
                        />
                      )}
                      {watchedValues.howDidYouKnow === key && key === '지인/주변 추천 (지인, 이웃, 직원, 원장님 등)' && (
                        <input
                          {...register('referrerName')}
                          type="text"
                          placeholder="Name of the person who referred you (optional)"
                          className="step-input mt-3"
                        />
                      )}
                      {watchedValues.howDidYouKnow === key && key === '기타' && (
                        <input
                          {...register('howDidYouKnowOther')}
                          type="text"
                          placeholder="Please describe"
                          className="step-input mt-3"
                        />
                      )}
                    </div>
                  ))}
                </div>
                {errors.howDidYouKnow && <ErrorMessage>{errors.howDidYouKnow.message}</ErrorMessage>}
              </div>

              <div>
                <label className="block text-lg font-semibold text-gray-800 mb-3">
                  What made you decide to visit Godeok First Dental Clinic?<br />
                  <span className="text-sm font-normal text-gray-600">(Select the single biggest reason)</span> <span className="text-red-600">*</span>
                </label>
                <div className="space-y-2">
                  {WHY_OPTIONS.map(({ key, label }) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setValue('whyVisit', key)}
                      className={`w-full py-4 rounded-xl text-base font-semibold transition-all text-left px-4 ${
                        watchedValues.whyVisit === key
                          ? 'bg-[#008095] text-white'
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
                {watchedValues.whyVisit === '기타' && (
                  <input
                    {...register('whyVisitOther')}
                    type="text"
                    placeholder="Please describe"
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
          <StepContainer title="Consultation information">
            <div className="space-y-6">
              <div>
                <label className="block text-lg font-semibold text-gray-800 mb-3">
                  Consultation topics (multiple selections allowed) <span className="text-red-600">*</span>
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
                      {CONSULTATION_LABEL[type] ?? type}
                    </button>
                  ))}
                </div>
                {watchedValues.consultationTypes.includes('기타') && (
                  <input
                    {...register('otherConsultation')}
                    type="text"
                    placeholder="Please describe"
                    className="step-input mt-3"
                  />
                )}
                {errors.consultationTypes && <ErrorMessage>{errors.consultationTypes.message}</ErrorMessage>}
              </div>

              <div>
                <label className="block text-lg font-semibold text-gray-800 mb-3">
                  When was your last dental visit (including scaling)? <span className="text-red-600">*</span>
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
                      {LAST_VISIT_LABEL[option]}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-lg font-semibold text-gray-800 mb-3">
                  Do you have dental insurance? <span className="text-red-600">*</span>
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
                    {INSURANCE_LABEL['없다']}
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
                      {INSURANCE_LABEL['있다']}
                    </button>
                    {watchedValues.hasDentalInsurance === '있다' && (
                      <div className="space-y-3 mt-3">
                        <input
                          {...register('insuranceCompany')}
                          type="text"
                          placeholder="Insurance company (optional)"
                          className="step-input"
                        />
                        <input
                          {...register('insuranceYear', { valueAsNumber: true })}
                          type="number"
                          inputMode="numeric"
                          placeholder="Enrollment year (e.g., 2020, optional)"
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
                    {INSURANCE_LABEL['모른다']}
                  </button>
                </div>
              </div>
            </div>
          </StepContainer>
        );

      case 4:
        return (
          <StepContainer title="Please tell us about your health" subtitle="Select only applicable items (you may skip if none apply)">
            <div className="space-y-6">
              <div>
                <label className="block text-lg font-semibold text-gray-800 mb-3">
                  Medical conditions (multiple selections allowed)
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
                          {CONDITION_LABEL[condition] ?? condition}
                        </button>

                        {isSelected && condition === '고혈압' && (
                          <SubOptionRow label="Medication">
                            {(['유', '무'] as const).map((opt) => (
                              <SubOptionButton
                                key={opt}
                                active={hypertensionMed === opt}
                                onClick={() => setHypertensionMed(opt)}
                              >
                                {opt === '유' ? 'Taking' : 'Not taking'}
                              </SubOptionButton>
                            ))}
                          </SubOptionRow>
                        )}

                        {isSelected && condition === '당뇨' && (
                          <SubOptionRow label="Medication">
                            {(['유', '무'] as const).map((opt) => (
                              <SubOptionButton
                                key={opt}
                                active={diabetesMed === opt}
                                onClick={() => setDiabetesMed(opt)}
                              >
                                {opt === '유' ? 'Taking' : 'Not taking'}
                              </SubOptionButton>
                            ))}
                          </SubOptionRow>
                        )}

                        {isSelected && condition === '골다공증' && (
                          <SubOptionRow label="Type">
                            {(['주사', '약'] as const).map((opt) => (
                              <SubOptionButton
                                key={opt}
                                active={osteoporosisType === opt}
                                onClick={() => setOsteoporosisType(opt)}
                              >
                                {opt === '주사' ? 'Injection' : 'Pill'}
                              </SubOptionButton>
                            ))}
                          </SubOptionRow>
                        )}

                        {isSelected && condition === '간염' && (
                          <SubOptionRow label="Type">
                            {(['B', 'C'] as const).map((opt) => (
                              <SubOptionButton
                                key={opt}
                                active={hepatitisType === opt}
                                onClick={() => setHepatitisType(opt)}
                              >
                                Type {opt}
                              </SubOptionButton>
                            ))}
                          </SubOptionRow>
                        )}

                        {isSelected && condition === '임신 관련' && (
                          <SubOptionRow label="Status">
                            {(['준비중', '임신중', '수유중'] as const).map((opt) => (
                              <SubOptionButton
                                key={opt}
                                active={pregnancyStatus === opt}
                                onClick={() => setPregnancyStatus(opt)}
                              >
                                {opt === '준비중' ? 'Planning' : opt === '임신중' ? 'Pregnant' : 'Breastfeeding'}
                              </SubOptionButton>
                            ))}
                          </SubOptionRow>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="block text-lg font-semibold text-gray-800 mb-3">
                  Drug allergies
                </label>
                <input
                  {...register('drugAllergyDetails')}
                  type="text"
                  placeholder="e.g., Penicillin"
                  className="step-input"
                />
              </div>

              <div>
                <label className="block text-lg font-semibold text-gray-800 mb-3">
                  Surgery or procedure history
                </label>
                <textarea
                  {...register('dentalHistoryDetails')}
                  placeholder="Please describe in detail"
                  className="step-input min-h-[80px]"
                />
              </div>

              <div>
                <label className="block text-lg font-semibold text-gray-800 mb-3">
                  Smoking
                </label>
                <input
                  type="text"
                  value={smokingDetails}
                  onChange={(e) => setSmokingDetails(e.target.value)}
                  placeholder="e.g., 10 cigarettes per day"
                  className="step-input"
                />
              </div>
            </div>
          </StepContainer>
        );

      case 5:
        return (
          <StepContainer title="Please describe your symptoms">
            <div className="space-y-6">
              <div>
                <label className="block text-lg font-semibold text-gray-800 mb-3">
                  Describe your dental symptoms in detail <span className="text-red-600">*</span>
                </label>
                <textarea
                  {...register('symptoms')}
                  placeholder="e.g., My left back tooth hurts when I chew"
                  className="step-input min-h-[120px]"
                />
                {errors.symptoms && <ErrorMessage>{errors.symptoms.message}</ErrorMessage>}
              </div>
            </div>
          </StepContainer>
        );

      case 6:
        return (
          <StepContainer title="Consent to Collection and Use of Personal Information">
            <div className="space-y-6">
              <div className="bg-gray-50 p-5 rounded-xl text-sm leading-relaxed">
                <h3 className="font-bold text-lg mb-3 text-gray-900">Consent to Collection and Use of Personal Information</h3>

                <p className="mb-3 text-gray-700">
                  Godeok First Dental Clinic treats your personal information with the utmost importance and complies with the Personal Information Protection Act.
                </p>

                <p className="mb-4 text-gray-700">
                  Through this Privacy Policy, we inform you of the purposes and methods for which the personal information you provide is used,
                  and the measures taken to protect your personal information.
                </p>

                <h4 className="font-bold mt-5 mb-2 text-gray-900">Purpose of Collection and Use</h4>

                <h5 className="font-semibold mt-3 mb-2 text-gray-800">[Items Collected]</h5>
                <ul className="list-disc pl-5 space-y-1.5 text-gray-700">
                  <li>Required: name, date of birth, gender, address, age, contact number, mobile phone, email, hospital registration number, service application status</li>
                  <li>Health information: visit records, diagnosis, prescription, admission/discharge, and checkup information</li>
                  <li>Payment information: card company name, card number, and other card payment authorization data</li>
                  <li>CCTV operation for crime prevention, facility safety, and fire prevention</li>
                </ul>

                <h5 className="font-semibold mt-4 mb-2 text-gray-800">[Purposes of Use]</h5>
                <ul className="list-disc pl-5 space-y-1.5 text-gray-700">
                  <li>Treatment: appointment booking and identity verification for member services</li>
                  <li>Providing personalized SMS/email information and differentiated content based on test results</li>
                  <li>Guidance on new services and events, and customer satisfaction surveys</li>
                  <li>Development of new services including treatment, reception, billing, and refund services</li>
                  <li>Basis for external test referrals</li>
                  <li>Collection of consumer harm information as per Article 52 of the Framework Act on Consumers</li>
                  <li>Intraoral/extraoral photos and X-rays for examination and treatment. Photos may be used for research, consultation, and promotion (in-clinic, website, or other promotional channels).</li>
                </ul>

                <h4 className="font-bold mt-5 mb-2 text-gray-900">Retention and Use Period</h4>
                <ul className="list-disc pl-5 space-y-1.5 text-gray-700">
                  <li>Personal and medical information is retained only for the legally prescribed period (5 years) and is then deleted from the database.</li>
                  <li>If you request deletion, it will be carried out immediately, except where retention is required by other laws.</li>
                  <li>Records of consumer complaints or dispute resolution: 3 years (Act on Consumer Protection in Electronic Commerce)</li>
                  <li>Records on collection/processing and use of credit information: 3 years (Credit Information Use and Protection Act)</li>
                  <li>Records of identity verification: 6 months (Act on Promotion of Information and Communications Network Utilization)</li>
                </ul>

                <h4 className="font-bold mt-5 mb-2 text-gray-900">Right to Refuse Consent</h4>
                <p className="text-gray-700 mb-3">
                  You have the right to refuse consent. The only consequence of refusal is that you will not be able to receive treatment-related services.
                </p>

                <div className="bg-yellow-50 p-4 rounded-lg mt-4 mb-4">
                  <p className="font-semibold text-gray-800 mb-2">※ For minors under 14 years of age, the consent of a legal guardian is required.</p>
                  <p className="text-gray-700 text-sm">
                    [Guardian Consent] As the legal guardian of a minor, I consent to the use of Godeok First Dental Clinic services.
                  </p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg mt-4">
                  <p className="text-gray-700 text-sm mb-2">
                    ※ Personal information will not be used for purposes other than those consented to.
                    You may request access, correction, or deletion at any time through the Personal Information Officer.
                  </p>
                  <p className="text-gray-800 font-semibold text-sm">
                    Pursuant to the Personal Information Protection Act and related laws, I hereby consent to the collection and use of my personal information as described above.
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-xl">
                <p className="text-sm text-gray-700">
                  Consent date: <span className="font-semibold">{new Date().toLocaleDateString('en-US')}</span>
                </p>
              </div>

              <div className="flex items-start gap-3 bg-white border-2 border-[#008095] p-4 rounded-xl">
                <input
                  id="privacy-consent"
                  type="checkbox"
                  checked={watch('privacyConsent')}
                  onChange={(e) => setValue('privacyConsent', e.target.checked)}
                  className="w-6 h-6 mt-0.5"
                />
                <label htmlFor="privacy-consent" className="text-base font-semibold text-gray-800 cursor-pointer">
                  I consent to the collection and use of my personal information <span className="text-red-600">*</span>
                </label>
              </div>
              {errors.privacyConsent && <ErrorMessage>{errors.privacyConsent.message}</ErrorMessage>}

              <div>
                <label className="block text-lg font-semibold text-gray-800 mb-3">
                  Please sign with your own name <span className="text-red-600">*</span>
                </label>
                <input
                  {...register('signature')}
                  type="text"
                  placeholder="John Doe"
                  className="step-input text-center text-2xl font-bold"
                />
                {errors.signature && <ErrorMessage>{errors.signature.message}</ErrorMessage>}
              </div>

              {isMinor && (
                <div className="bg-yellow-50 p-5 rounded-xl space-y-4">
                  <p className="text-sm font-semibold text-gray-800">
                    ⚠️ Legal guardian consent is required for minors under 14
                  </p>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Legal guardian&apos;s name <span className="text-red-600">*</span>
                    </label>
                    <input
                      {...register('guardianName')}
                      type="text"
                      placeholder="Guardian's name"
                      className="step-input"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Relationship <span className="text-red-600">*</span>
                    </label>
                    <input
                      {...register('guardianRelationship')}
                      type="text"
                      placeholder="Father, Mother, etc."
                      className="step-input"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Legal guardian&apos;s signature <span className="text-red-600">*</span>
                    </label>
                    <input
                      {...register('guardianSignature')}
                      type="text"
                      placeholder="Guardian's name"
                      className="step-input text-center text-xl font-bold"
                    />
                    {errors.guardianSignature && <ErrorMessage>{errors.guardianSignature.message}</ErrorMessage>}
                  </div>
                </div>
              )}

              <div className="bg-blue-50 p-4 rounded-xl text-center">
                <p className="text-sm text-gray-700">
                  Date: {new Date().toLocaleDateString('en-US', {
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
      <header
        className="bg-white fixed top-0 left-0 right-0 shadow-sm"
        style={{
          height: '52px',
          minHeight: '52px',
          maxHeight: '52px',
          overflow: 'visible',
          zIndex: 9999,
        }}
      >
        <div
          className="w-full max-w-[430px] mx-auto flex items-center justify-between px-4"
          style={{ height: '52px' }}
        >
          <Link href="/" className="flex items-center" style={{ height: '32px' }}>
            <img
              src="/images/goduk_images/고덕퍼스트치과로고 1.svg"
              alt="Godeok First Dental Clinic"
              style={{ height: '32px', width: 'auto' }}
            />
          </Link>

          <div className="relative">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="bg-white border border-gray-200 rounded-md flex items-center gap-1"
              style={{ height: '28px', padding: '4px 8px' }}
            >
              <US className="w-4 h-3 rounded-sm" title="English" />
              <svg width="10" height="10" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {isLangOpen && (
              <>
                <div
                  className="fixed inset-0 bg-black/20"
                  style={{ zIndex: 9998 }}
                  onClick={() => setIsLangOpen(false)}
                />
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
                      {lang.code === 'us' && (
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

      <div className="sticky bg-white shadow-sm z-10" style={{ top: '52px' }}>
        <div className="max-w-[430px] mx-auto px-5 py-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-gray-600">Patient Intake Form</span>
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

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-[430px] mx-auto px-5 py-8"
        style={{ marginTop: '60px' }}
      >
        {renderStep()}

        <div className="flex gap-3 mt-8">
          {currentStep > 1 && (
            <button
              type="button"
              onClick={prevStep}
              className="flex-1 py-4 bg-gray-200 text-gray-700 rounded-2xl font-bold text-lg hover:bg-gray-300 transition-colors"
            >
              Back
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
              Next
            </button>
          )}
          {currentStep === TOTAL_STEPS && (
            <button
              type="submit"
              disabled={!isCurrentStepValid || isSubmitting}
              className={`flex-1 py-4 rounded-2xl font-bold text-lg transition-colors ${
                isCurrentStepValid && !isSubmitting
                  ? 'bg-[#008095] text-white hover:bg-[#0058d6]'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          )}
        </div>
      </form>

      {showSuccessModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-5">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Submission complete</h3>
              <p className="text-gray-600 mb-6">
                Your patient intake form has been submitted.<br />
                You will be guided at the reception desk.
              </p>
            </div>

            <button
              onClick={() => (window.location.href = '/')}
              className="w-full py-3 bg-[#008095] text-white rounded-xl font-bold hover:bg-[#0058d6] transition-colors"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

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
