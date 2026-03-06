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
  name: z.string().min(1, '请输入您的姓名'),
  gender: z.enum(['男', '女'], { required_error: '请选择性别' }),
  residentNumber: z.string().optional(),
  passportNumber: z.string().optional(),
  birthdate: z.string().optional(),
  address: z.string().min(1, '请输入您的地址'),
  phoneNumber: z.string().regex(/^010-\d{4}-\d{4}$/, '电话号码格式无效 (010-0000-0000)'),
  guardianPhoneNumber: z.string().optional(),
  howDidYouKnow: z.string().min(1, '请选择您如何了解到庆星美迪牙科'),
  howDidYouKnowOther: z.string().optional(),
  whyVisit: z.string().min(1, '请选择您来院的原因'),
  whyVisitOther: z.string().optional(),
  consultationTypes: z.array(z.string()).min(1, '请至少选择一种咨询类型'),
  otherConsultation: z.string().optional(),
  lastDentalVisit: z.enum(['1年以内', '2年以内', '2年以上', '从未接受过']),
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
  symptoms: z.string().min(1, '请输入您的症状'),
  painLevel: z.number().min(0).max(10),
  privacyConsent: z.boolean().refine((val) => val === true, {
    message: '请同意收集和使用个人信息',
  }),
  signature: z.string().min(1, '请输入您的签名'),
  guardianName: z.string().optional(),
  guardianRelationship: z.string().optional(),
  guardianSignature: z.string().optional(),
}).refine((data) => data.signature === data.name, {
  message: '签名必须与上面输入的姓名完全一致',
  path: ['signature'],
}).refine((data) => {
  // 如果有监护人签名，则必须与监护人姓名一致
  if (data.guardianSignature && data.guardianName) {
    return data.guardianSignature === data.guardianName;
  }
  return true;
}, {
  message: '监护人签名必须与监护人姓名完全一致',
  path: ['guardianSignature'],
});

type FormData = z.infer<typeof patientIntakeSchema>;

const TOTAL_STEPS = 6;

export default function PatientIntakePageCN() {
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
        throw new Error('提交患者信息失败');
      }

      const result = await response.json();
      console.log('Submission successful:', result);
      setShowSuccessModal(true);
    } catch (error) {
      console.error('Error submitting patient intake:', error);
      alert('提交过程中发生错误，请重试。');
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
          <StepContainer title="请输入您的基本信息">
            <div className="space-y-5">
              {/* Name */}
              <div>
                <label className="block text-base font-semibold text-gray-700 mb-2">
                  姓名 <span className="text-red-600">*</span>
                </label>
                <input
                  {...register('name')}
                  type="text"
                  placeholder="张三"
                  className="step-input"
                />
                {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
              </div>

              {/* Gender */}
              <div>
                <label className="block text-base font-semibold text-gray-700 mb-2">
                  性别 <span className="text-red-600">*</span>
                </label>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setValue('gender', '男')}
                    className={`flex-1 py-4 rounded-xl text-lg font-bold transition-all ${
                      watch('gender') === '男'
                        ? 'bg-[#006aff] text-white'
                        : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    男
                  </button>
                  <button
                    type="button"
                    onClick={() => setValue('gender', '女')}
                    className={`flex-1 py-4 rounded-xl text-lg font-bold transition-all ${
                      watch('gender') === '女'
                        ? 'bg-[#006aff] text-white'
                        : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    女
                  </button>
                </div>
                {errors.gender && <ErrorMessage>{errors.gender.message}</ErrorMessage>}
              </div>

              {/* Resident Number (Optional for foreigners) */}
              <div>
                <label className="block text-base font-semibold text-gray-700 mb-2">
                  身份证号码 <span className="text-gray-400 text-xs">(可选 - 韩国国民)</span>
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
                  护照号码 <span className="text-gray-400 text-xs">(外国人)</span>
                </label>
                <input
                  {...register('passportNumber')}
                  type="text"
                  placeholder="请输入护照号码"
                  className="step-input"
                />
                {errors.passportNumber && <ErrorMessage>{errors.passportNumber.message}</ErrorMessage>}
              </div>

              {/* Birthdate */}
              <div>
                <label className="block text-base font-semibold text-gray-700 mb-2">
                  出生日期 <span className="text-gray-400 text-xs">(如无身份证号码)</span>
                </label>
                <input
                  {...register('birthdate')}
                  type="text"
                  className="step-input"
                  placeholder="YYYY-MM-DD (例如: 1990-01-15)"
                  onChange={handleBirthdateChange}
                  maxLength={10}
                />
                {errors.birthdate && <ErrorMessage>{errors.birthdate.message}</ErrorMessage>}
              </div>

              {/* Address */}
              <div>
                <label className="block text-base font-semibold text-gray-700 mb-2">
                  地址 <span className="text-red-600">*</span>
                </label>
                <input
                  {...register('address')}
                  type="text"
                  placeholder="XX路123号，XX市..."
                  className="step-input"
                />
                {errors.address && <ErrorMessage>{errors.address.message}</ErrorMessage>}
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-base font-semibold text-gray-700 mb-2">
                  您的电话号码 <span className="text-red-600">*</span>
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
                  监护人电话号码（可选）
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
          <StepContainer title="请告诉我们您是如何了解我们的">
            <div className="space-y-6">
              {/* How did you know */}
              <div>
                <label className="block text-lg font-semibold text-gray-800 mb-3">
                  您是如何了解到庆星美迪牙科的？ <span className="text-red-600">*</span>
                </label>
                <div className="space-y-2">
                  {[
                    '在Naver搜索',
                    '在Naver地图搜索',
                    '在Google Maps搜索',
                    'YouTube/Instagram',
                    '看到招牌/地铁广告',
                    '朋友推荐',
                    '其他',
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
                {watchedValues.howDidYouKnow === '其他' && (
                  <input
                    {...register('howDidYouKnowOther')}
                    type="text"
                    placeholder="请具体说明"
                    className="step-input mt-3"
                  />
                )}
                {errors.howDidYouKnow && <ErrorMessage>{errors.howDidYouKnow.message}</ErrorMessage>}
              </div>

              {/* Why visit */}
              <div>
                <label className="block text-lg font-semibold text-gray-800 mb-3">
                  是什么让您决定来庆星美迪牙科就诊？<br />
                  <span className="text-sm font-normal text-gray-600">(请选择主要原因)</span> <span className="text-red-600">*</span>
                </label>
                <div className="space-y-2">
                  {[
                    'Naver地图好评',
                    'Naver咖啡厅好评',
                    '网站信息丰富',
                    '博客文章有帮助',
                    'YouTube/Instagram视频',
                    '朋友推荐',
                    '离家近',
                    '其他',
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
                {watchedValues.whyVisit === '其他' && (
                  <input
                    {...register('whyVisitOther')}
                    type="text"
                    placeholder="请具体说明"
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
          <StepContainer title="请输入咨询信息">
            <div className="space-y-6">
              {/* Consultation types */}
              <div>
                <label className="block text-lg font-semibold text-gray-800 mb-3">
                  咨询类型（可多选） <span className="text-red-600">*</span>
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {(
                    [
                      '种植牙',
                      '一般治疗',
                      '智齿',
                      '口腔检查',
                      '贴面',
                      '镇静治疗',
                      '洗牙',
                      '其他',
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
                {watchedValues.consultationTypes.includes('其他') && (
                  <input
                    {...register('otherConsultation')}
                    type="text"
                    placeholder="请具体说明"
                    className="step-input mt-3"
                  />
                )}
                {errors.consultationTypes && <ErrorMessage>{errors.consultationTypes.message}</ErrorMessage>}
              </div>

              {/* Last dental visit */}
              <div>
                <label className="block text-lg font-semibold text-gray-800 mb-3">
                  您上次看牙是什么时候？ <span className="text-red-600">*</span>
                </label>
                <div className="space-y-2">
                  {(['1年以内', '2年以内', '2年以上', '从未接受过'] as const).map((option) => (
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
                  您有牙科保险吗？ <span className="text-red-600">*</span>
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
                    没有
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
                    有
                  </button>
                </div>
                {watchedValues.hasDentalInsurance && (
                  <input
                    {...register('insuranceYear', { valueAsNumber: true })}
                    type="number"
                    placeholder="投保年份（例如：2020）"
                    className="step-input"
                  />
                )}
              </div>
            </div>
          </StepContainer>
        );

      case 4:
        return (
          <StepContainer title="请告诉我们您的健康状况">
            <div className="space-y-6">
              {/* Drug allergy */}
              <div>
                <label className="block text-lg font-semibold text-gray-800 mb-3">
                  您有药物过敏史吗？ <span className="text-red-600">*</span>
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
                    没有
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
                    有
                  </button>
                </div>
                {watchedValues.drugAllergy && (
                  <input
                    {...register('drugAllergyDetails')}
                    type="text"
                    placeholder="请具体说明"
                    className="step-input"
                  />
                )}
              </div>

              {/* Medical conditions */}
              <div>
                <label className="block text-lg font-semibold text-gray-800 mb-3">
                  您有以下疾病吗？（可多选） <span className="text-red-600">*</span>
                </label>
                <div className="grid grid-cols-2 gap-2 max-h-[50vh] overflow-y-auto p-1">
                  {(
                    [
                      '无',
                      '高血压',
                      '糖尿病',
                      '服用阿司匹林',
                      '出血性疾病',
                      '服用骨质疏松药物',
                      '利多卡因过敏',
                      '慢性肾功能衰竭',
                      '哺乳期',
                      'B型/C型肝炎',
                      '胃病',
                      '肾透析',
                      '青霉素过敏',
                      '慢性肝硬化',
                      '怀孕/可能怀孕',
                      '甲状腺功能亢进',
                      '慢性心脏瓣膜病',
                      '心绞痛/心肌梗死/中风',
                      '心内膜炎风险',
                      '高脂血症',
                      '其他',
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
                {watchedValues.medicalConditions.includes('其他') && (
                  <input
                    {...register('otherCondition')}
                    type="text"
                    placeholder="请具体说明"
                    className="step-input mt-3"
                  />
                )}
              </div>

              {/* Dental history */}
              <div>
                <label className="block text-lg font-semibold text-gray-800 mb-3">
                  您有牙科治疗或手术史吗？
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
                    没有
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
                    有
                  </button>
                </div>
                {watchedValues.hasDentalHistory && (
                  <textarea
                    {...register('dentalHistoryDetails')}
                    placeholder="请具体说明"
                    className="step-input min-h-[100px]"
                  />
                )}
              </div>

              {/* Smoking/Drinking */}
              <div>
                <label className="block text-lg font-semibold text-gray-800 mb-3">
                  您的吸烟和饮酒习惯是什么？
                </label>
                <div className="flex items-center gap-3 mb-3">
                  <input
                    id="no-smoking-drinking"
                    type="checkbox"
                    checked={watchedValues.noSmokingDrinking}
                    onChange={(e) => setValue('noSmokingDrinking', e.target.checked)}
                    className="w-5 h-5"
                  />
                  <label htmlFor="no-smoking-drinking" className="text-base font-semibold cursor-pointer">不适用</label>
                </div>
                {!watchedValues.noSmokingDrinking && (
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-sm text-gray-600 mb-2">吸烟（包/天）</label>
                      <input
                        {...register('smokingAmount', { valueAsNumber: true })}
                        type="number"
                        step="0.5"
                        placeholder="0"
                        className="step-input"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-2">饮酒（次/周）</label>
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
          <StepContainer title="请告诉我们您的症状">
            <div className="space-y-6">
              {/* Symptoms */}
              <div>
                <label className="block text-lg font-semibold text-gray-800 mb-3">
                  请详细描述您的牙科症状 <span className="text-red-600">*</span>
                </label>
                <textarea
                  {...register('symptoms')}
                  placeholder="例如：左侧臼齿咀嚼时疼痛"
                  className="step-input min-h-[120px]"
                />
                {errors.symptoms && <ErrorMessage>{errors.symptoms.message}</ErrorMessage>}
              </div>

              {/* Pain level */}
              <div>
                <label className="block text-lg font-semibold text-gray-800 mb-3">
                  疼痛程度（0-10） <span className="text-red-600">*</span>
                </label>
                <div className="space-y-3">
                  <div className="bg-gray-50 p-6 rounded-xl text-center">
                    <div className="text-5xl font-bold text-[#006aff] mb-2">
                      {watch('painLevel') || 0}
                    </div>
                    <div className="text-sm text-gray-600">
                      {watch('painLevel') === 0 && '无疼痛'}
                      {watch('painLevel') >= 1 && watch('painLevel') <= 2 && '轻微疼痛'}
                      {watch('painLevel') >= 3 && watch('painLevel') <= 4 && '中度疼痛'}
                      {watch('painLevel') >= 5 && watch('painLevel') <= 6 && '重度疼痛'}
                      {watch('painLevel') >= 7 && watch('painLevel') <= 8 && '非常严重疼痛'}
                      {watch('painLevel') >= 9 && '无法忍受的疼痛'}
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
          <StepContainer title="隐私政策同意">
            <div className="space-y-6">
              {/* Privacy policy */}
              <div className="bg-gray-50 p-5 rounded-xl text-sm leading-relaxed">
                <h3 className="font-bold text-lg mb-3 text-gray-900">隐私政策同意书</h3>

                <p className="mb-3 text-gray-700">
                  庆星美迪牙科重视您的隐私，并遵守隐私保护法律。
                </p>

                <p className="mb-4 text-gray-700">
                  通过本隐私政策，我们告知您个人信息的使用方式以及为保护信息所采取的措施。
                </p>

                <h4 className="font-bold mt-5 mb-2 text-gray-900">个人信息的收集和使用</h4>

                <h5 className="font-semibold mt-3 mb-2 text-gray-800">【收集的个人信息】</h5>
                <ul className="list-disc pl-5 space-y-1.5 text-gray-700">
                  <li>必需项：姓名、出生日期、性别、地址、年龄、联系电话、手机、电子邮件、医院注册号、服务申请状态</li>
                  <li>健康信息：就诊信息、诊断信息、处方信息、入院/出院信息、检查信息</li>
                  <li>支付信息：银行卡公司名称、卡号及其他卡支付批准信息</li>
                  <li>为防止犯罪、设施安全和防火而运营的闭路电视</li>
                </ul>

                <h5 className="font-semibold mt-4 mb-2 text-gray-800">【使用个人信息的目的】</h5>
                <ul className="list-disc pl-5 space-y-1.5 text-gray-700">
                  <li>医疗护理：检查预约、预约查询以及会员服务的身份验证</li>
                  <li>检查结果和个性化短信、电子邮件信息及差异化内容提供</li>
                  <li>新服务和活动信息，以及客户满意度调查</li>
                  <li>新服务开发的医疗服务以及账单、支付和退款等行政服务</li>
                  <li>外部委托检查请求的基础数据</li>
                  <li>根据《消费者基本法》第52条收集消费者危害信息</li>
                  <li>为检查和治疗拍摄口内和口外照片及X光片，用于研究、咨询和宣传（院内、网站、其他医院宣传媒体等）</li>
                </ul>

                <h4 className="font-bold mt-5 mb-2 text-gray-900">个人信息的保留和使用期限</h4>
                <ul className="list-disc pl-5 space-y-1.5 text-gray-700">
                  <li>医院仅在法定期限（5年）内保留收集的客户个人信息和医疗信息，然后从数据库中删除。</li>
                  <li>如果信息提供者要求删除个人信息，将立即删除。但是，在其他法律要求的期限内可能会保留。</li>
                  <li>消费者投诉或争议解决记录：3年（《电子商务等消费者保护法》）</li>
                  <li>信用信息收集/处理和使用记录：3年（《信用信息使用和保护法》）</li>
                  <li>身份验证记录：6个月（《信息通信网络利用促进和信息保护法》等）</li>
                </ul>

                <h4 className="font-bold mt-5 mb-2 text-gray-900">拒绝同意的权利和拒绝的不利后果</h4>
                <p className="text-gray-700 mb-3">
                  您有权拒绝同意提供个人信息，拒绝不会有任何不利后果。
                  但是，您将无法接受医疗服务。
                </p>

                <div className="bg-yellow-50 p-4 rounded-lg mt-4 mb-4">
                  <p className="font-semibold text-gray-800 mb-2">※ 对于14岁以下儿童，需要法定监护人的同意。</p>
                  <p className="text-gray-700 text-sm">
                    【法定监护人同意】作为未成年人的法定监护人，我同意申请庆星美迪牙科服务。
                  </p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg mt-4">
                  <p className="text-gray-700 text-sm mb-2">
                    ※ 个人信息不会用于约定目的以外的用途，
                    当您希望拒绝使用所提供的个人信息时，可以通过个人信息管理员请求查看、更正或删除。
                  </p>
                  <p className="text-gray-800 font-semibold text-sm">
                    【个人信息保护法】根据上述相关法律，我同意收集和使用个人信息。
                  </p>
                </div>
              </div>

              {/* Consent date */}
              <div className="bg-blue-50 p-4 rounded-xl">
                <p className="text-sm text-gray-700">
                  同意日期：<span className="font-semibold">{new Date().toLocaleDateString('zh-CN')}</span>
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
                  我同意收集和使用个人信息 <span className="text-red-600">*</span>
                </label>
              </div>
              {errors.privacyConsent && <ErrorMessage>{errors.privacyConsent.message}</ErrorMessage>}

              {/* Signature */}
              <div>
                <label className="block text-lg font-semibold text-gray-800 mb-3">
                  请用您的姓名签名 <span className="text-red-600">*</span>
                </label>
                <input
                  {...register('signature')}
                  type="text"
                  placeholder="张三"
                  className="step-input text-center text-2xl font-bold"
                />
                {errors.signature && <ErrorMessage>{errors.signature.message}</ErrorMessage>}
              </div>

              {/* Guardian info for minors */}
              {isMinor && (
                <div className="bg-yellow-50 p-5 rounded-xl space-y-4">
                  <p className="text-sm font-semibold text-gray-800">
                    ⚠️ 14岁以下儿童需要法定监护人同意
                  </p>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      法定监护人姓名 <span className="text-red-600">*</span>
                    </label>
                    <input
                      {...register('guardianName')}
                      type="text"
                      placeholder="监护人姓名"
                      className="step-input"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      关系 <span className="text-red-600">*</span>
                    </label>
                    <input
                      {...register('guardianRelationship')}
                      type="text"
                      placeholder="父亲、母亲等"
                      className="step-input"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      法定监护人签名 <span className="text-red-600">*</span>
                    </label>
                    <input
                      {...register('guardianSignature')}
                      type="text"
                      placeholder="监护人姓名"
                      className="step-input text-center text-xl font-bold"
                    />
                    {errors.guardianSignature && <ErrorMessage>{errors.guardianSignature.message}</ErrorMessage>}
                  </div>
                </div>
              )}

              {/* Completion date */}
              <div className="bg-blue-50 p-4 rounded-xl text-center">
                <p className="text-sm text-gray-700">
                  完成日期：{new Date().toLocaleDateString('zh-CN', {
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
          <Link href="/cn" className="flex items-center" style={{ height: '32px' }}>
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
              <CN className="w-4 h-3 rounded-sm" title="中文" />
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
                      {lang.code === 'cn' && (
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
            <span className="text-sm font-semibold text-gray-600">患者信息表</span>
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
              上一步
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
              下一步
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
              {isSubmitting ? '提交中...' : '提交'}
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
              <h3 className="text-2xl font-bold text-gray-800 mb-2">提交完成</h3>
              <p className="text-gray-600 mb-6">
                您的信息表已提交成功。<br />
                请到前台办理登记。
              </p>
            </div>

            {/* Review Event Notice */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-5 mb-6 border-2 border-blue-200">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">🎁</span>
                <h4 className="text-lg font-bold text-gray-800">评价活动</h4>
              </div>
              <div className="space-y-2 text-sm text-gray-700 mb-3">
                <p className="font-semibold text-base text-blue-600">
                  治疗后在Naver地图写评价
                </p>
                <p className="font-bold text-gray-800">
                  🎉 获得5,000韩元礼品券！
                </p>
              </div>
              <div className="bg-white/80 rounded-lg p-3 space-y-1.5 text-xs text-gray-600">
                <div className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  <span>GS25手机礼品券</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  <span>配民外卖优惠券</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  <span>星巴克优惠券</span>
                </div>
                <p className="text-center pt-2 text-gray-500 italic">
                  ※ 3选1
                </p>
              </div>
              <p className="text-xs text-gray-500 mt-3 text-center">
                详情请咨询前台
              </p>
            </div>

            <button
              onClick={() => window.location.href = '/cn'}
              className="w-full py-3 bg-[#006aff] text-white rounded-xl font-bold hover:bg-[#0058d6] transition-colors"
            >
              确认
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
