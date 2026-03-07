'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useRouter } from 'next/navigation';
import { ConsultationData } from '@/lib/types';
import { getReferrerFromSession } from '@/lib/referrer-tracker';

const consultationSchema = z.object({
  name: z.string().min(1, '이름을 입력해주세요'),
  phone: z.string().regex(/^010\s\d{4}\s\d{4}$/, '올바른 휴대폰 번호를 입력해주세요 (010 0000 0000)'),
  age: z.number().min(1, '나이를 입력해주세요').max(120, '올바른 나이를 입력해주세요'),
  consultationContent: z.string().min(1, '상담 내용을 입력해주세요')
});

type ConsultationFormData = z.infer<typeof consultationSchema>;

const presetOptions = [
  { main: '임플란트', sub: '' },
  { main: '신경치료', sub: '' },
  { main: '보철 치료', sub: '크라운' },
  { main: '심미 치료', sub: '미백' },
  { main: '사랑니 발치', sub: '' },
  { main: '잇몸 케어', sub: '' },
  { main: '충치 치료', sub: '레진, 인레이' },
  { main: '턱관절 치료', sub: '' }
];

export default function ConsultationForm() {
  const router = useRouter();
  const [selectedPreset, setSelectedPreset] = useState<string>('');
  const [showLoadingOverlay, setShowLoadingOverlay] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting }
  } = useForm<ConsultationFormData>({
    resolver: zodResolver(consultationSchema)
  });

  const handlePresetSelect = (preset: string) => {
    setSelectedPreset(preset);
    setValue('consultationContent', preset);
  };

  // 전화번호 포매팅 함수
  const formatPhoneNumber = (value: string): string => {
    // 숫자만 추출
    const numbers = value.replace(/\D/g, '');

    // 11자리로 제한
    const limitedNumbers = numbers.slice(0, 11);

    // 010 0000 0000 형식으로 포매팅
    if (limitedNumbers.length <= 3) {
      return limitedNumbers;
    } else if (limitedNumbers.length <= 7) {
      return `${limitedNumbers.slice(0, 3)} ${limitedNumbers.slice(3)}`;
    } else {
      return `${limitedNumbers.slice(0, 3)} ${limitedNumbers.slice(3, 7)} ${limitedNumbers.slice(7)}`;
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatPhoneNumber(e.target.value);
    setValue('phone', formattedValue, { shouldValidate: true });
  };

  const onSubmit = async (data: ConsultationFormData) => {
    try {
      // 즉시 로딩 오버레이 표시
      setShowLoadingOverlay(true);

      // sessionStorage에서 referrer 데이터 가져오기
      const referrerData = getReferrerFromSession();

      const consultationData: ConsultationData = {
        name: data.name,
        phone: data.phone,
        age: data.age,
        gender: 'male', // 성별 필드 제거됨
        consultationContent: data.consultationContent,
        referrerData: referrerData || undefined
      };

      localStorage.setItem('consultationData', JSON.stringify(consultationData));

      // Supabase에 상담 로그 즉시 생성
      console.log('💾 상담 신청서 제출 - Supabase에 저장 시작');
      try {
        const logData = {
          name: data.name,
          phone: data.phone,
          age: data.age,
          consultation_content: data.consultationContent,
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
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(logData),
        });

        if (response.ok) {
          const result = await response.json();
          const logId = result.data?.id;
          console.log('✅ 상담 로그 생성 완료, ID:', logId);

          // 생성된 로그 ID를 localStorage에 저장
          if (logId) {
            localStorage.setItem('consultationLogId', logId);
            console.log('📝 로그 ID localStorage에 저장:', logId);

            // TikTok Pixel: SubmitForm 이벤트 전송
            if (typeof window !== 'undefined') {
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
        // 저장 실패해도 채팅은 계속 진행
      }

      // TikTok Pixel: CompleteRegistration 이벤트 전송
      if (typeof window !== 'undefined') {
        const ttq = (window as { ttq?: { track: (eventName: string) => void } }).ttq;
        if (ttq && typeof ttq.track === 'function') {
          ttq.track('CompleteRegistration');
          console.log('✅ TikTok Pixel: CompleteRegistration 이벤트 전송');
        }
      }

      router.push('/chat');
    } catch (error) {
      console.error('상담 신청 중 오류가 발생했습니다:', error);
      setShowLoadingOverlay(false);
    }
  };

  return (
    <div className="bg-white w-full px-4 py-[50px] mb-[50px]">
      <div className="max-w-[375px] mx-auto">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-[30px]">
          {/* Input Fields Section */}
          <div className="flex flex-col gap-[30px]">
            {/* 이름 */}
            <div className="flex flex-col gap-[6px]">
              <label className="font-['Pretendard_JP'] font-semibold text-[13px] text-[#727582] tracking-[-0.26px] leading-[1.4]">
                이름<span className="text-[#ff1616]">*</span>
              </label>
              <input
                {...register('name')}
                type="text"
                placeholder="성함을 입력해 주세요"
                className={`w-full bg-white border ${errors.name ? 'border-red-400' : 'border-[#e9ebf1]'} rounded-[16px] px-4 py-[17px] font-['Pretendard_JP'] font-semibold text-[16px] tracking-[-0.32px] leading-[1.4] placeholder:text-[#aab2c1] focus:outline-none focus:border-[#006aff]`}
              />
              {errors.name && (
                <p className="text-xs text-red-600">{errors.name.message}</p>
              )}
            </div>

            {/* 전화번호 */}
            <div className="flex flex-col gap-[6px]">
              <label className="font-['Pretendard_JP'] font-semibold text-[13px] text-[#727582] tracking-[-0.26px] leading-[1.4]">
                전화번호<span className="text-[#ff1616]">*</span>
              </label>
              <input
                {...register('phone')}
                type="tel"
                placeholder="010 0000 0000"
                maxLength={13}
                onChange={handlePhoneChange}
                className={`w-full bg-white border ${errors.phone ? 'border-red-400' : 'border-[#e9ebf1]'} rounded-[16px] px-4 py-[17px] font-['Pretendard_JP'] font-semibold text-[16px] tracking-[-0.32px] leading-[1.4] placeholder:text-[#aab2c1] focus:outline-none focus:border-[#006aff]`}
              />
              {errors.phone && (
                <p className="text-xs text-red-600">{errors.phone.message}</p>
              )}
            </div>

            {/* 나이 */}
            <div className="flex flex-col gap-[6px]">
              <label className="font-['Pretendard_JP'] font-semibold text-[13px] text-[#727582] tracking-[-0.26px] leading-[1.4]">
                나이<span className="text-[#ff1616]">*</span>
              </label>
              <input
                {...register('age', { valueAsNumber: true })}
                type="number"
                placeholder="0세"
                maxLength={3}
                onInput={(e) => {
                  const target = e.target as HTMLInputElement;
                  if (target.value.length > 3) {
                    target.value = target.value.slice(0, 3);
                  }
                }}
                className={`w-full bg-white border ${errors.age ? 'border-red-400' : 'border-[#e9ebf1]'} rounded-[16px] px-4 py-[17px] font-['Pretendard_JP'] font-semibold text-[16px] tracking-[-0.32px] leading-[1.4] placeholder:text-[#aab2c1] focus:outline-none focus:border-[#006aff]`}
              />
              {errors.age && (
                <p className="text-xs text-red-600">{errors.age.message}</p>
              )}
            </div>

            {/* 상담 희망 내용 (객관식 선택만) */}
            <div className="flex flex-col gap-[6px]">
              <input
                type="hidden"
                {...register('consultationContent')}
              />
              <label className="font-['Pretendard_JP'] font-semibold text-[13px] text-[#727582] tracking-[-0.26px] leading-[1.4]">
                상담 희망 내용<span className="text-[#ff1616]">*</span>
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
                      <p className="font-['Pretendard_JP'] font-semibold text-[15px] text-black tracking-[-0.3px] leading-[1.4]">
                        {option.main}
                      </p>
                      {option.sub && (
                        <p className="font-['Pretendard_JP'] font-normal text-[12px] text-[#5d5f6d] tracking-[-0.24px] leading-[1.4]">
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
                      className={`flex-1 h-[69px] bg-white border ${selectedPreset === option.main ? 'border-[#006aff]' : 'border-[#e9ebf1]'} rounded-[14px] px-[14px] py-[13px] flex flex-col items-center justify-center`}
                    >
                      <p className="font-['Pretendard_JP'] font-semibold text-[15px] text-black tracking-[-0.3px] leading-[1.4]">
                        {option.main}
                      </p>
                      {option.sub && (
                        <p className="font-['Pretendard_JP'] font-normal text-[12px] text-[#5d5f6d] tracking-[-0.24px] leading-[1.4]">
                          {option.sub}
                        </p>
                      )}
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
                      className={`flex-1 h-[69px] bg-white border ${selectedPreset === option.main ? 'border-[#006aff]' : 'border-[#e9ebf1]'} rounded-[14px] px-[14px] py-[13px] flex flex-col items-center justify-center`}
                    >
                      <p className="font-['Pretendard_JP'] font-semibold text-[15px] text-black tracking-[-0.3px] leading-[1.4]">
                        {option.main}
                      </p>
                      {option.sub && (
                        <p className="font-['Pretendard_JP'] font-normal text-[12px] text-[#5d5f6d] tracking-[-0.24px] leading-[1.4]">
                          {option.sub}
                        </p>
                      )}
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
            className="w-full bg-[#006aff] rounded-[16px] py-4 font-['Pretendard_JP'] font-bold text-[18px] text-white tracking-[-0.36px] leading-[1.5] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#0058d6] transition-colors"
          >
            {isSubmitting ? '신청 중...' : '상담 시작하기'}
          </button>
        </form>
      </div>

      {/* 로딩 오버레이 - 즉시 표시 */}
      {showLoadingOverlay && (
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

              <p className="font-['Pretendard_JP'] font-semibold text-[16px] text-[#292a2f] tracking-[-0.32px] mb-2">
                AI 상담사 준비 중
              </p>
              <p className="font-['Pretendard_JP'] font-normal text-[14px] text-[#727582] tracking-[-0.28px]">
                잠시만 기다려주세요...
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
