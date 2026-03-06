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

// Validation schema
const patientIntakeSchema = z.object({
  name: z.string().min(1, 'Нэрээ оруулна уу'),
  gender: z.enum(['Male', 'Female'], { required_error: 'Хүйсээ сонгоно уу' }),
  residentNumber: z.string().optional(),
  passportNumber: z.string().optional(),
  birthdate: z.string().optional(),
  address: z.string().min(1, 'Хаягаа оруулна уу'),
  phoneNumber: z.string().regex(/^010-\d{4}-\d{4}$/, 'Утасны дугаарын формат буруу байна (010-0000-0000)'),
  guardianPhoneNumber: z.string().optional(),
  howDidYouKnow: z.string().min(1, 'Кёнсүн Медис Шүдний Эмнэлгийг хэрхэн мэдсэнээ сонгоно уу'),
  howDidYouKnowOther: z.string().optional(),
  whyVisit: z.string().min(1, 'Ирсэн шалтгаанаа сонгоно уу'),
  whyVisitOther: z.string().optional(),
  consultationTypes: z.array(z.string()).min(1, 'Дор хаяж нэг зөвлөгөөний төрлийг сонгоно уу'),
  otherConsultation: z.string().optional(),
  lastDentalVisit: z.enum(['1 жилийн дотор', '2 жилийн дотор', '2-оос дээш жил', 'Хэзээ ч очоогүй']),
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
  symptoms: z.string().min(1, 'Шинж тэмдгээ оруулна уу'),
  painLevel: z.number().min(0).max(10),
  privacyConsent: z.boolean().refine((val) => val === true, {
    message: 'Хувийн мэдээлэл цуглуулах, ашиглахыг зөвшөөрнө үү',
  }),
  signature: z.string().min(1, 'Гарын үсгээ оруулна уу'),
  guardianName: z.string().optional(),
  guardianRelationship: z.string().optional(),
  guardianSignature: z.string().optional(),
}).refine((data) => data.signature === data.name, {
  message: 'Гарын үсэг дээр оруулсан нэртэй яг таарах ёстой',
  path: ['signature'],
}).refine((data) => {
  if (data.guardianSignature && data.guardianName) {
    return data.guardianSignature === data.guardianName;
  }
  return true;
}, {
  message: 'Асран хамгаалагчийн гарын үсэг асран хамгаалагчийн нэртэй яг таарах ёстой',
  path: ['guardianSignature'],
});

type FormData = z.infer<typeof patientIntakeSchema>;

const TOTAL_STEPS = 6;

export default function PatientIntakePage() {
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

  const handleBirthdateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');

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

  const age = calculateAge(watchedValues.residentNumber, watch('birthdate'));
  const isMinor = age > 0 && age < 14;

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
    console.log('Маягтыг илгээж эхэллээ:', data);
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
        throw new Error('Өвчтөний мэдээллийг илгээхэд алдаа гарлаа');
      }

      const result = await response.json();
      console.log('Амжилттай илгээгдлээ:', result);
      setShowSuccessModal(true);
    } catch (error) {
      console.error('Өвчтөний мэдээллийг илгээхэд алдаа гарлаа:', error);
      alert('Илгээх явцад алдаа гарлаа. Дахин оролдоно уу.');
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
          <StepContainer title="Үндсэн мэдээллээ оруулна уу">
            <div className="space-y-5">
              <div>
                <label className="block text-base font-semibold text-gray-700 mb-2">
                  Нэр <span className="text-red-600">*</span>
                </label>
                <input
                  {...register('name')}
                  type="text"
                  placeholder="Болд"
                  className="step-input"
                />
                {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
              </div>

              <div>
                <label className="block text-base font-semibold text-gray-700 mb-2">
                  Хүйс <span className="text-red-600">*</span>
                </label>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setValue('gender', 'Male')}
                    className={`flex-1 py-4 rounded-xl text-lg font-bold transition-all ${
                      watch('gender') === 'Male'
                        ? 'bg-[#006aff] text-white'
                        : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    Эрэгтэй
                  </button>
                  <button
                    type="button"
                    onClick={() => setValue('gender', 'Female')}
                    className={`flex-1 py-4 rounded-xl text-lg font-bold transition-all ${
                      watch('gender') === 'Female'
                        ? 'bg-[#006aff] text-white'
                        : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    Эмэгтэй
                  </button>
                </div>
                {errors.gender && <ErrorMessage>{errors.gender.message}</ErrorMessage>}
              </div>

              <div>
                <label className="block text-base font-semibold text-gray-700 mb-2">
                  Гадаад паспортын дугаар <span className="text-gray-400 text-xs">(Гадаадын иргэдэд)</span>
                </label>
                <input
                  {...register('passportNumber')}
                  type="text"
                  placeholder="Паспортын дугаараа оруулна уу"
                  className="step-input"
                />
              </div>

              <div>
                <label className="block text-base font-semibold text-gray-700 mb-2">
                  Төрсөн огноо <span className="text-gray-400 text-xs">(Оршин суугчийн дугаар байхгүй бол)</span>
                </label>
                <input
                  {...register('birthdate')}
                  type="text"
                  className="step-input"
                  placeholder="YYYY-MM-DD (жишээ нь: 1990-01-15)"
                  onChange={handleBirthdateChange}
                  maxLength={10}
                />
              </div>

              <div>
                <label className="block text-base font-semibold text-gray-700 mb-2">
                  Хаяг <span className="text-red-600">*</span>
                </label>
                <input
                  {...register('address')}
                  type="text"
                  placeholder="123 ABC гудамж, Хот..."
                  className="step-input"
                />
                {errors.address && <ErrorMessage>{errors.address.message}</ErrorMessage>}
              </div>

              <div>
                <label className="block text-base font-semibold text-gray-700 mb-2">
                  Утасны дугаар <span className="text-red-600">*</span>
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
            </div>
          </StepContainer>
        );

      case 2:
        return (
          <StepContainer title="Биднийг хэрхэн олсноо хэлнэ үү">
            <div className="space-y-6">
              <div>
                <label className="block text-lg font-semibold text-gray-800 mb-3">
                  Кёнсүн Медис Шүдний Эмнэлгийг хэрхэн мэдсэн бэ? <span className="text-red-600">*</span>
                </label>
                <div className="space-y-2">
                  {[
                    'Naver хайлт',
                    'Naver Map хайлт',
                    'Google Maps хайлт',
                    'YouTube/Instagram',
                    'Самбар/Метроны зар',
                    'Найз танилын санал болгосноор',
                    'Бусад',
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
                {watchedValues.howDidYouKnow === 'Бусад' && (
                  <input
                    {...register('howDidYouKnowOther')}
                    type="text"
                    placeholder="Тодруулна уу"
                    className="step-input mt-3"
                  />
                )}
              </div>

              <div>
                <label className="block text-lg font-semibold text-gray-800 mb-3">
                  Кёнсүн Медис Шүдний Эмнэлэгт ирэхээр шийдсэн шалтгаан? <span className="text-red-600">*</span>
                </label>
                <div className="space-y-2">
                  {[
                    'Naver Maps дээр сайн үнэлгээ',
                    'Naver Cafe дээр эерэг сэтгэгдэл',
                    'Вебсайт мэдээлэл их байсан',
                    'Хэрэгтэй блог нийтлэл',
                    'YouTube/Instagram видео',
                    'Найз танилын санал болгосноор',
                    'Ойрхон байршилтай',
                    'Бусад',
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
              </div>
            </div>
          </StepContainer>
        );

      case 3:
        return (
          <StepContainer title="Зөвлөгөөний мэдээллээ оруулна уу">
            <div className="space-y-6">
              <div>
                <label className="block text-lg font-semibold text-gray-800 mb-3">
                  Зөвлөгөөний төрөл (Олон сонголт) <span className="text-red-600">*</span>
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {(
                    [
                      'Имплант',
                      'Ерөнхий эмчилгээ',
                      'Сойз шүд',
                      'Эрүүл мэндийн үзлэг',
                      'Ламинат',
                      'Унтуулгын эмчилгээ',
                      'Чулуу цэвэрлэгээ',
                      'Бусад',
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
              </div>

              <div>
                <label className="block text-lg font-semibold text-gray-800 mb-3">
                  Сүүлд хэзээ шүдний эмчид очсон бэ? <span className="text-red-600">*</span>
                </label>
                <div className="space-y-2">
                  {(['1 жилийн дотор', '2 жилийн дотор', '2-оос дээш жил', 'Хэзээ ч очоогүй'] as const).map((option) => (
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

              <div>
                <label className="block text-lg font-semibold text-gray-800 mb-3">
                  Шүдний даатгалтай юу? <span className="text-red-600">*</span>
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
                    Үгүй
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
                    Тийм
                  </button>
                </div>
              </div>
            </div>
          </StepContainer>
        );

      case 4:
        return (
          <StepContainer title="Эрүүл мэндийн талаар хэлнэ үү">
            <div className="space-y-6">
              <div>
                <label className="block text-lg font-semibold text-gray-800 mb-3">
                  Эмийн харшилтай юу? <span className="text-red-600">*</span>
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
                    Үгүй
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
                    Тийм
                  </button>
                </div>
                {watchedValues.drugAllergy && (
                  <input
                    {...register('drugAllergyDetails')}
                    type="text"
                    placeholder="Тодруулна уу"
                    className="step-input"
                  />
                )}
              </div>

              <div>
                <label className="block text-lg font-semibold text-gray-800 mb-3">
                  Ямар нэгэн өвчин эмгэгтэй юу? (Олон сонголт) <span className="text-red-600">*</span>
                </label>
                <div className="grid grid-cols-2 gap-2 max-h-[50vh] overflow-y-auto p-1">
                  {(
                    [
                      'Байхгүй',
                      'Цусны даралт ихсэлт',
                      'Чихрийн шижин',
                      'Аспирин хэрэглэж байгаа',
                      'Цус алдалтын эмгэг',
                      'Ясны сийрэгжилт',
                      'Лидокаин харшил',
                      'Архаг бөөрний дутагдал',
                      'Хөхүүл эх',
                      'В/С гепатит',
                      'Ходоодны эмгэг',
                      'Бусад',
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
              </div>

              <div>
                <label className="block text-lg font-semibold text-gray-800 mb-3">
                  Өмнө нь шүдний эмчилгээ эсвэл мэс засал хийлгэж байсан уу?
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
                    Үгүй
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
                    Тийм
                  </button>
                </div>
                {watchedValues.hasDentalHistory && (
                  <textarea
                    {...register('dentalHistoryDetails')}
                    placeholder="Тодруулна уу"
                    className="step-input min-h-[100px]"
                  />
                )}
              </div>

              <div>
                <label className="block text-lg font-semibold text-gray-800 mb-3">
                  Тамхи татах, архи ууна уу?
                </label>
                <div className="flex items-center gap-3 mb-3">
                  <input
                    id="no-smoking-drinking"
                    type="checkbox"
                    checked={watchedValues.noSmokingDrinking}
                    onChange={(e) => setValue('noSmokingDrinking', e.target.checked)}
                    className="w-5 h-5"
                  />
                  <label htmlFor="no-smoking-drinking" className="text-base font-semibold cursor-pointer">Хамаарахгүй</label>
                </div>
              </div>
            </div>
          </StepContainer>
        );

      case 5:
        return (
          <StepContainer title="Шинж тэмдгийн талаар хэлнэ үү">
            <div className="space-y-6">
              <div>
                <label className="block text-lg font-semibold text-gray-800 mb-3">
                  Шүдний шинж тэмдгээ дэлгэрэнгүй тайлбарлана уу <span className="text-red-600">*</span>
                </label>
                <textarea
                  {...register('symptoms')}
                  placeholder="Жишээ нь: Зүүн талын араа шүд зажлахад өвддөг"
                  className="step-input min-h-[120px]"
                />
                {errors.symptoms && <ErrorMessage>{errors.symptoms.message}</ErrorMessage>}
              </div>

              <div>
                <label className="block text-lg font-semibold text-gray-800 mb-3">
                  Өвдөлтийн түвшин (0-10) <span className="text-red-600">*</span>
                </label>
                <div className="space-y-3">
                  <div className="bg-gray-50 p-6 rounded-xl text-center">
                    <div className="text-5xl font-bold text-[#006aff] mb-2">
                      {watch('painLevel') || 0}
                    </div>
                    <div className="text-sm text-gray-600">
                      {watch('painLevel') === 0 && 'Өвдөлтгүй'}
                      {watch('painLevel') >= 1 && watch('painLevel') <= 2 && 'Бага зэрэг өвддөг'}
                      {watch('painLevel') >= 3 && watch('painLevel') <= 4 && 'Дунд зэрэг өвддөг'}
                      {watch('painLevel') >= 5 && watch('painLevel') <= 6 && 'Хүчтэй өвддөг'}
                      {watch('painLevel') >= 7 && watch('painLevel') <= 8 && 'Маш хүчтэй өвддөг'}
                      {watch('painLevel') >= 9 && 'Тэсэхийн аргагүй'}
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
                </div>
              </div>
            </div>
          </StepContainer>
        );

      case 6:
        return (
          <StepContainer title="Нууцлалын бодлогын зөвшөөрөл">
            <div className="space-y-6">
              <div className="bg-gray-50 p-5 rounded-xl text-sm leading-relaxed">
                <h3 className="font-bold text-lg mb-3 text-gray-900">Нууцлалын бодлогын зөвшөөрлийн маягт</h3>
                <p className="mb-3 text-gray-700">
                  Кёнсүн Медис Шүдний Эмнэлэг таны нууцлалыг хамгаалах хуулийг чанд мөрддөг.
                </p>
                <p className="mb-4 text-gray-700">
                  Энэхүү нууцлалын бодлогоор таны хувийн мэдээллийг хэрхэн ашиглах, хамгаалах талаар мэдээлэл өгч байна.
                </p>
              </div>

              <div className="bg-blue-50 p-4 rounded-xl">
                <p className="text-sm text-gray-700">
                  Зөвшөөрлийн огноо: <span className="font-semibold">{new Date().toLocaleDateString('mn-MN')}</span>
                </p>
              </div>

              <div className="flex items-start gap-3 bg-white border-2 border-[#006aff] p-4 rounded-xl">
                <input
                  id="privacy-consent"
                  type="checkbox"
                  checked={watch('privacyConsent')}
                  onChange={(e) => setValue('privacyConsent', e.target.checked)}
                  className="w-6 h-6 mt-0.5"
                />
                <label htmlFor="privacy-consent" className="text-base font-semibold text-gray-800 cursor-pointer">
                  Хувийн мэдээлэл цуглуулах, ашиглахыг зөвшөөрч байна <span className="text-red-600">*</span>
                </label>
              </div>
              {errors.privacyConsent && <ErrorMessage>{errors.privacyConsent.message}</ErrorMessage>}

              <div>
                <label className="block text-lg font-semibold text-gray-800 mb-3">
                  Гарын үсгээ оруулна уу <span className="text-red-600">*</span>
                </label>
                <input
                  {...register('signature')}
                  type="text"
                  placeholder="Болд"
                  className="step-input text-center text-2xl font-bold"
                />
                {errors.signature && <ErrorMessage>{errors.signature.message}</ErrorMessage>}
              </div>

              {isMinor && (
                <div className="bg-yellow-50 p-5 rounded-xl space-y-4">
                  <p className="text-sm font-semibold text-gray-800">
                    14 наснаас доош хүүхдийн хувьд хууль ёсны асран хамгаалагчийн зөвшөөрөл шаардлагатай
                  </p>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Хууль ёсны асран хамгаалагчийн нэр <span className="text-red-600">*</span>
                    </label>
                    <input
                      {...register('guardianName')}
                      type="text"
                      placeholder="Асран хамгаалагчийн нэр"
                      className="step-input"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Хамаарал <span className="text-red-600">*</span>
                    </label>
                    <input
                      {...register('guardianRelationship')}
                      type="text"
                      placeholder="Аав, Ээж гэх мэт"
                      className="step-input"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Хууль ёсны асран хамгаалагчийн гарын үсэг <span className="text-red-600">*</span>
                    </label>
                    <input
                      {...register('guardianSignature')}
                      type="text"
                      placeholder="Асран хамгаалагчийн нэр"
                      className="step-input text-center text-xl font-bold"
                    />
                    {errors.guardianSignature && <ErrorMessage>{errors.guardianSignature.message}</ErrorMessage>}
                  </div>
                </div>
              )}

              <div className="bg-blue-50 p-4 rounded-xl text-center">
                <p className="text-sm text-gray-700">
                  Бөглөсөн огноо: {new Date().toLocaleDateString('mn-MN', {
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
          <Link href="/mn" className="flex items-center" style={{ height: '32px' }}>
            <Image
              src="/icons/Logo_black.svg"
              alt="Медис Шүдний Эмнэлэг"
              width={168}
              height={32}
            />
          </Link>

          <div className="relative">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="bg-white border border-gray-200 rounded-md flex items-center gap-1"
              style={{ height: '28px', padding: '4px 8px' }}
            >
              <MN className="w-4 h-3 rounded-sm" title="Монгол" />
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
                      {lang.code === 'mn' && (
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
            <span className="text-sm font-semibold text-gray-600">Өвчтөний бүртгэлийн маягт</span>
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
          console.log('Маягтын баталгаажуулалт амжилтгүй болсон:', errors);
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
              Өмнөх
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
              Дараах
            </button>
          )}
          {currentStep === TOTAL_STEPS && (
            <button
              type="submit"
              disabled={!isCurrentStepValid || isSubmitting}
              className={`flex-1 py-4 rounded-2xl font-bold text-lg transition-colors ${
                isCurrentStepValid && !isSubmitting
                  ? 'bg-[#006aff] text-white hover:bg-[#0058d6]'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              {isSubmitting ? 'Илгээж байна...' : 'Илгээх'}
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
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Амжилттай илгээгдлээ</h3>
              <p className="text-gray-600 mb-6">
                Таны бүртгэлийн маягт илгээгдлээ.<br />
                Хүлээн авах тасаг дээр бүртгэлээ хийнэ үү.
              </p>
            </div>

            <button
              onClick={() => window.location.href = '/mn'}
              className="w-full py-3 bg-[#006aff] text-white rounded-xl font-bold hover:bg-[#0058d6] transition-colors"
            >
              Баталгаажуулах
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
