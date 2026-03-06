'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useRouter } from 'next/navigation';
import { ConsultationData } from '@/lib/types';
import { getReferrerFromSession } from '@/lib/referrer-tracker';

const consultationSchema = z.object({
  name: z.string().min(1, 'Please enter your name'),
  contactType: z.enum(['phone', 'email', 'instagram'], {
    required_error: 'Please select a contact method'
  }),
  contact: z.string().min(1, 'Please enter your contact information'),
  age: z.number().min(1, 'Please enter your age').max(120, 'Please enter a valid age'),
  consultationContent: z.string().min(1, 'Please select a consultation topic')
});

type ConsultationFormData = z.infer<typeof consultationSchema>;

const presetOptions = [
  { main: 'Implant', sub: '' },
  { main: 'Root Canal', sub: '' },
  { main: 'Prosthetics', sub: 'Crown' },
  { main: 'Cosmetic', sub: 'Whitening, Laminate' },
  { main: 'Wisdom Tooth', sub: '' },
  { main: 'Gum Care', sub: '' },
  { main: 'Cavity', sub: 'Resin, Inlay' },
  { main: 'TMJ', sub: '' }
];

export default function ConsultationForm() {
  const router = useRouter();
  const [selectedPreset, setSelectedPreset] = useState<string>('');
  const [showLoadingOverlay, setShowLoadingOverlay] = useState(false);
  const [contactType, setContactType] = useState<'phone' | 'email' | 'instagram'>('phone');
  const [showInstagramGuide, setShowInstagramGuide] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting }
  } = useForm<ConsultationFormData>({
    resolver: zodResolver(consultationSchema),
    defaultValues: {
      contactType: 'phone'
    }
  });

  const handlePresetSelect = (preset: string) => {
    setSelectedPreset(preset);
    setValue('consultationContent', preset);
  };

  const handleContactTypeChange = (type: 'phone' | 'email' | 'instagram') => {
    setContactType(type);
    setValue('contactType', type);
    setValue('contact', ''); // Clear contact field when type changes
  };

  const formatPhoneNumber = (value: string) => {
    // Remove all non-digit characters
    const cleaned = value.replace(/\D/g, '');

    // Remove leading 0 if present (for international format)
    const withoutLeadingZero = cleaned.startsWith('0') ? cleaned.substring(1) : cleaned;

    // Format based on length
    if (withoutLeadingZero.length <= 2) {
      return withoutLeadingZero;
    } else if (withoutLeadingZero.length <= 6) {
      return `${withoutLeadingZero.slice(0, 2)}-${withoutLeadingZero.slice(2)}`;
    } else if (withoutLeadingZero.length <= 10) {
      return `${withoutLeadingZero.slice(0, 2)}-${withoutLeadingZero.slice(2, 6)}-${withoutLeadingZero.slice(6)}`;
    } else {
      // Limit to 10 digits after formatting
      return `${withoutLeadingZero.slice(0, 2)}-${withoutLeadingZero.slice(2, 6)}-${withoutLeadingZero.slice(6, 10)}`;
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setValue('contact', formatted);
  };

  const getContactPlaceholder = () => {
    switch (contactType) {
      case 'phone':
        return '10-1234-5678';
      case 'email':
        return 'your@email.com';
      case 'instagram':
        return '@your_instagram';
      default:
        return '';
    }
  };

  const getContactLabel = () => {
    switch (contactType) {
      case 'phone':
        return 'Phone Number';
      case 'email':
        return 'Email Address';
      case 'instagram':
        return 'Instagram ID';
      default:
        return 'Contact';
    }
  };

  const onSubmit = async (data: ConsultationFormData) => {
    try {
      // 인스타그램인 경우 가이드 표시
      if (data.contactType === 'instagram') {
        setShowInstagramGuide(true);

        // 3초 후 자동으로 채팅 페이지로 이동
        setTimeout(() => {
          proceedToChat(data);
        }, 3000);
      } else {
        proceedToChat(data);
      }
    } catch (error) {
      console.error('Error submitting consultation:', error);
      setShowLoadingOverlay(false);
    }
  };

  const proceedToChat = async (data: ConsultationFormData) => {
    setShowLoadingOverlay(true);

    try {
      const referrerData = getReferrerFromSession();

      // Supabase에 즉시 저장
      console.log('💾 상담 신청서 제출 - Supabase에 저장 시작');
      try {
        const logData = {
          name: data.name,
          phone: data.contact,
          age: data.age,
          consultation_content: data.consultationContent,
          contact_type: data.contactType,
          contact_value: data.contact,
          referrer_url: referrerData?.referrerUrl || '',
          referrer_source: referrerData?.referrerSource || 'direct',
          utm_source: referrerData?.utmSource || null,
          utm_medium: referrerData?.utmMedium || null,
          utm_campaign: referrerData?.utmCampaign || null,
          search_query: referrerData?.searchQuery || null,
          chat_history: [],
          status: '대기중',
        };

        const response = await fetch('/api/consultations', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(logData),
        });

        if (response.ok) {
          const result = await response.json();
          const logId = result.data?.id;
          console.log('✅ 상담 로그 생성 완료, ID:', logId);

          if (logId) {
            localStorage.setItem('consultationLogId', logId);
            console.log('📝 로그 ID localStorage에 저장:', logId);

            // Meta Pixel: Lead 이벤트 전송
            // 파라미터 없이 기본 이벤트만 전송 (의료 정보 차단 방지)
            if (typeof window !== 'undefined') {
              const fbq = (window as { fbq?: (...args: unknown[]) => void }).fbq;
              if (fbq) {
                fbq('track', 'Lead');
                console.log('✅ Meta Pixel: Lead 이벤트 전송');
              }

              // TikTok Pixel: SubmitForm 이벤트 전송
              const ttq = (window as { ttq?: { track: (eventName: string) => void } }).ttq;
              if (ttq && typeof ttq.track === 'function') {
                ttq.track('SubmitForm');
                console.log('✅ TikTok Pixel: SubmitForm 이벤트 전송');
              }
            }
          }
        } else {
          console.error('❌ 상담 로그 생성 실패:', response.status, await response.text());
        }
      } catch (error) {
        console.error('❌ 상담 로그 생성 중 오류:', error);
      }

      // localStorage에 consultationData 저장
      const consultationData: ConsultationData = {
        name: data.name,
        phone: data.contact,
        contactType: data.contactType,
        contactValue: data.contact,
        age: data.age,
        gender: 'male',
        consultationContent: data.consultationContent,
        referrerData: referrerData || undefined
      };

      localStorage.setItem('consultationData', JSON.stringify(consultationData));

      router.push('/en/chat');
    } catch (error) {
      console.error('상담 신청 중 오류:', error);
      setShowLoadingOverlay(false);
    }
  };

  return (
    <div className="bg-white w-full px-4 py-[50px] mb-[50px]">
      <div className="max-w-[375px] mx-auto">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-[30px]">
          {/* Input Fields Section */}
          <div className="flex flex-col gap-[30px]">
            {/* Name */}
            <div className="flex flex-col gap-[6px]">
              <label className="font-['Pretendard'] font-semibold text-[13px] text-[#727582] tracking-[-0.26px] leading-[1.4]">
                Name<span className="text-[#ff1616]">*</span>
              </label>
              <input
                {...register('name')}
                type="text"
                placeholder="Enter your name"
                className={`w-full bg-white border ${errors.name ? 'border-red-400' : 'border-[#e9ebf1]'} rounded-[16px] px-4 py-[17px] font-['Pretendard'] font-semibold text-[16px] tracking-[-0.32px] leading-[1.4] placeholder:text-[#aab2c1] focus:outline-none focus:border-[#006aff]`}
              />
              {errors.name && (
                <p className="text-xs text-red-600">{errors.name.message}</p>
              )}
            </div>

            {/* Contact Type Selector */}
            <div className="flex flex-col gap-[6px]">
              <label className="font-['Pretendard'] font-semibold text-[13px] text-[#727582] tracking-[-0.26px] leading-[1.4]">
                Contact Method<span className="text-[#ff1616]">*</span>
              </label>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => handleContactTypeChange('phone')}
                  className={`flex-1 py-3 rounded-[12px] font-['Pretendard'] font-semibold text-[14px] tracking-[-0.28px] transition-colors ${
                    contactType === 'phone'
                      ? 'bg-[#006aff] text-white'
                      : 'bg-white border border-[#e9ebf1] text-[#5d5f6d]'
                  }`}
                >
                  Phone
                </button>
                <button
                  type="button"
                  onClick={() => handleContactTypeChange('email')}
                  className={`flex-1 py-3 rounded-[12px] font-['Pretendard'] font-semibold text-[14px] tracking-[-0.28px] transition-colors ${
                    contactType === 'email'
                      ? 'bg-[#006aff] text-white'
                      : 'bg-white border border-[#e9ebf1] text-[#5d5f6d]'
                  }`}
                >
                  Email
                </button>
                <button
                  type="button"
                  onClick={() => handleContactTypeChange('instagram')}
                  className={`flex-1 py-3 rounded-[12px] font-['Pretendard'] font-semibold text-[14px] tracking-[-0.28px] transition-colors ${
                    contactType === 'instagram'
                      ? 'bg-[#006aff] text-white'
                      : 'bg-white border border-[#e9ebf1] text-[#5d5f6d]'
                  }`}
                >
                  Instagram
                </button>
              </div>
            </div>

            {/* Contact Input */}
            <div className="flex flex-col gap-[6px]">
              <label className="font-['Pretendard'] font-semibold text-[13px] text-[#727582] tracking-[-0.26px] leading-[1.4]">
                {getContactLabel()}<span className="text-[#ff1616]">*</span>
              </label>
              {contactType === 'phone' ? (
                <div className={`flex items-center w-full bg-white border ${errors.contact ? 'border-red-400' : 'border-[#e9ebf1]'} rounded-[16px] px-4 focus-within:border-[#006aff]`}>
                  <span className="font-['Pretendard'] font-semibold text-[16px] tracking-[-0.32px] leading-[1.4] text-black pr-2">
                    +82
                  </span>
                  <input
                    {...register('contact')}
                    type="text"
                    placeholder={getContactPlaceholder()}
                    onChange={handlePhoneChange}
                    className="flex-1 bg-transparent py-[17px] font-['Pretendard'] font-semibold text-[16px] tracking-[-0.32px] leading-[1.4] placeholder:text-[#aab2c1] focus:outline-none"
                  />
                </div>
              ) : (
                <input
                  {...register('contact')}
                  type="text"
                  placeholder={getContactPlaceholder()}
                  className={`w-full bg-white border ${errors.contact ? 'border-red-400' : 'border-[#e9ebf1]'} rounded-[16px] px-4 py-[17px] font-['Pretendard'] font-semibold text-[16px] tracking-[-0.32px] leading-[1.4] placeholder:text-[#aab2c1] focus:outline-none focus:border-[#006aff]`}
                />
              )}
              {errors.contact && (
                <p className="text-xs text-red-600">{errors.contact.message}</p>
              )}
              {contactType === 'instagram' && (
                <p className="text-xs text-[#727582] mt-1">
                  Please enter your Instagram ID (e.g., @username)
                </p>
              )}
            </div>

            {/* Age */}
            <div className="flex flex-col gap-[6px]">
              <label className="font-['Pretendard'] font-semibold text-[13px] text-[#727582] tracking-[-0.26px] leading-[1.4]">
                Age<span className="text-[#ff1616]">*</span>
              </label>
              <input
                {...register('age', { valueAsNumber: true })}
                type="number"
                placeholder="0"
                className={`w-full bg-white border ${errors.age ? 'border-red-400' : 'border-[#e9ebf1]'} rounded-[16px] px-4 py-[17px] font-['Pretendard'] font-semibold text-[16px] tracking-[-0.32px] leading-[1.4] placeholder:text-[#aab2c1] focus:outline-none focus:border-[#006aff]`}
              />
              {errors.age && (
                <p className="text-xs text-red-600">{errors.age.message}</p>
              )}
            </div>

            {/* Consultation Topic */}
            <div className="flex flex-col gap-[6px]">
              <input
                type="hidden"
                {...register('consultationContent')}
              />
              <label className="font-['Pretendard'] font-semibold text-[13px] text-[#727582] tracking-[-0.26px] leading-[1.4]">
                Consultation Topic<span className="text-[#ff1616]">*</span>
              </label>
              <div className="flex flex-col gap-[6px]">
                {/* Row 1 */}
                <div className="flex gap-[7px]">
                  {presetOptions.slice(0, 3).map((option, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => handlePresetSelect(option.main)}
                      className={`flex-1 h-[69px] bg-white border ${selectedPreset === option.main ? 'border-[#006aff]' : 'border-[#e9ebf1]'} rounded-[14px] px-[14px] py-[13px] flex flex-col items-center justify-center`}
                    >
                      <p className="font-['Pretendard'] font-semibold text-[15px] text-black tracking-[-0.3px] leading-[1.4]">
                        {option.main}
                      </p>
                      {option.sub && (
                        <p className="font-['Pretendard'] font-normal text-[12px] text-[#5d5f6d] tracking-[-0.24px] leading-[1.4]">
                          {option.sub}
                        </p>
                      )}
                    </button>
                  ))}
                </div>

                {/* Row 2 */}
                <div className="flex gap-[7px]">
                  {presetOptions.slice(3, 6).map((option, index) => (
                    <button
                      key={index + 3}
                      type="button"
                      onClick={() => handlePresetSelect(option.main)}
                      className={`flex-1 h-[69px] bg-white border ${selectedPreset === option.main ? 'border-[#006aff]' : 'border-[#e9ebf1]'} rounded-[14px] px-[14px] py-[13px] flex items-center justify-center`}
                    >
                      <p className="font-['Pretendard'] font-semibold text-[15px] text-black tracking-[-0.3px] leading-[1.4]">
                        {option.main}
                      </p>
                    </button>
                  ))}
                </div>

                {/* Row 3 */}
                <div className="flex gap-[7px]">
                  {presetOptions.slice(6, 9).map((option, index) => (
                    <button
                      key={index + 6}
                      type="button"
                      onClick={() => handlePresetSelect(option.main)}
                      className={`flex-1 h-[69px] bg-white border ${selectedPreset === option.main ? 'border-[#006aff]' : 'border-[#e9ebf1]'} rounded-[14px] px-[14px] py-[13px] flex items-center justify-center`}
                    >
                      <p className="font-['Pretendard'] font-semibold text-[15px] text-black tracking-[-0.3px] leading-[1.4]">
                        {option.main}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
              {errors.consultationContent && (
                <p className="text-xs text-red-600 mt-1">{errors.consultationContent.message}</p>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#006aff] rounded-[16px] py-4 font-['Pretendard'] font-bold text-[18px] text-white tracking-[-0.36px] leading-[1.5] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#0058d6] transition-colors"
          >
            {isSubmitting ? 'Submitting...' : 'Start Consultation'}
          </button>
        </form>
      </div>

      {/* Instagram DM Guide Overlay */}
      {showInstagramGuide && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-[24px] p-6 max-w-[340px] w-full">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 rounded-[16px] mx-auto mb-4 flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/>
                </svg>
              </div>
              <h3 className="font-['Pretendard'] font-bold text-[20px] text-black tracking-[-0.4px] mb-2">
                Please send us a DM!
              </h3>
              <p className="font-['Pretendard'] font-medium text-[14px] text-[#5d5f6d] tracking-[-0.28px] leading-[1.6] mb-4">
                To ensure our reply doesn&apos;t get buried, please send us a DM at:
              </p>
              <a
                href="https://www.instagram.com/dr_kimplant/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 text-white font-['Pretendard'] font-bold text-[16px] tracking-[-0.32px] px-6 py-3 rounded-[12px] mb-4 hover:opacity-90 transition-opacity"
              >
                @dr_kimplant
              </a>
              <p className="font-['Pretendard'] font-normal text-[12px] text-[#727582] tracking-[-0.24px]">
                Redirecting to AI consultation...
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Loading Overlay */}
      {showLoadingOverlay && !showInstagramGuide && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col">
          {/* Skeleton header */}
          <div className="bg-white px-4 py-[7px] flex items-center gap-3 justify-between border-b border-[#e9ebf1]">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gray-100 animate-pulse"></div>
              <div className="h-5 w-40 bg-gray-100 rounded animate-pulse"></div>
            </div>
          </div>

          {/* AI icon with pulse animation */}
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <div className="relative">
                  <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 30 30" fill="none" className="animate-pulse">
                    <circle cx="15" cy="15" r="15" fill="white"/>
                    <mask id="mask_loading" style={{maskType: "alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="30" height="30">
                      <circle cx="15" cy="15" r="15" fill="#D9D9D9"/>
                    </mask>
                    <g mask="url(#mask_loading)">
                      <path d="M9.43949 6.84286C9.70916 5.71905 11.2908 5.71904 11.5605 6.84286L12.3025 9.93512C12.3988 10.3364 12.7088 10.6496 13.1059 10.7469L16.1659 11.4967C17.278 11.7693 17.278 13.3676 16.1659 13.6401L13.1059 14.3899C12.7088 14.4872 12.3988 14.8005 12.3025 15.2017L11.5605 18.294C11.2908 19.4178 9.70916 19.4178 9.43949 18.294L8.69748 15.2017C8.6012 14.8005 8.29118 14.4872 7.89413 14.3899L4.83408 13.6401C3.72197 13.3676 3.72197 11.7693 4.83408 11.4967L7.89413 10.7469C8.29118 10.6496 8.6012 10.3364 8.69748 9.93512L9.43949 6.84286Z" fill="#006AFF"/>
                      <path d="M18.3474 17.6345C18.5133 16.9429 19.4867 16.9429 19.6526 17.6345L20.1092 19.5374C20.1685 19.7843 20.3593 19.9771 20.6036 20.037L22.4867 20.4984C23.1711 20.6661 23.1711 21.6497 22.4867 21.8174L20.6036 22.2788C20.3593 22.3387 20.1685 22.5315 20.1092 22.7784L19.6526 24.6813C19.4867 25.3729 18.5133 25.3729 18.3474 24.6813L17.8908 22.7784C17.8315 22.5315 17.6407 22.3387 17.3964 22.2788L15.5133 21.8174C14.8289 21.6497 14.8289 20.6661 15.5133 20.4984L17.3964 20.037C17.6407 19.9771 17.8315 19.7843 17.8908 19.5374L18.3474 17.6345Z" fill="#006AFF"/>
                      <path d="M21.5717 6.71933C21.6806 6.26549 22.3194 6.26549 22.4283 6.71933L22.7279 7.96813C22.7668 8.13017 22.892 8.25668 23.0524 8.29597L24.2882 8.59879C24.7373 8.70884 24.7373 9.35432 24.2882 9.46437L23.0524 9.76718C22.892 9.80648 22.7668 9.93299 22.7279 10.095L22.4283 11.3438C22.3194 11.7977 21.6806 11.7977 21.5717 11.3438L21.2721 10.095C21.2332 9.93299 21.108 9.80648 20.9476 9.76718L19.7118 9.46437C19.2627 9.35432 19.2627 8.70884 19.7118 8.59879L20.9476 8.29597C21.108 8.25668 21.2332 8.13017 21.2721 7.96813L21.5717 6.71933Z" fill="#006AFF"/>
                    </g>
                  </svg>
                </div>
              </div>

              <p className="font-['Pretendard'] font-semibold text-[16px] text-[#292a2f] tracking-[-0.32px] mb-2">
                Preparing AI Consultant
              </p>
              <p className="font-['Pretendard'] font-normal text-[14px] text-[#727582] tracking-[-0.28px]">
                Please wait a moment...
              </p>

              {/* Dots animation */}
              <div className="flex justify-center gap-1 mt-4">
                <div className="w-2 h-2 bg-[#006aff] rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-[#006aff] rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-[#006aff] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
