'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import ChatInterface from '@/components/ChatInterface';
import { ConsultationData } from '@/lib/types';

export default function ChatPage() {
  const router = useRouter();
  const [consultationData, setConsultationData] = useState<ConsultationData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const data = localStorage.getItem('consultationData');
    if (!data) {
      router.push('/th');
      return;
    }

    try {
      const parsedData: ConsultationData = JSON.parse(data);
      setConsultationData(parsedData);
    } catch (error) {
      console.error('เกิดข้อผิดพลาดในการแยกวิเคราะห์ข้อมูล:', error);
      router.push('/th');
      return;
    }

    setIsLoading(false);
  }, [router]);

  if (isLoading) {
    return (
      <div className="flex flex-col h-screen bg-white w-full sm:max-w-[375px] mx-auto">
        {/* Header placeholder */}
        <div className="bg-white px-4 py-[7px] flex items-center gap-3 justify-between border-b border-[#e9ebf1]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gray-100 animate-pulse"></div>
            <div className="h-5 w-40 bg-gray-100 rounded animate-pulse"></div>
          </div>
        </div>

        {/* Loading content */}
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            {/* AI icon animation */}
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
              กำลังเตรียมที่ปรึกษา AI
            </p>
            <p className="font-['Pretendard'] font-normal text-[14px] text-[#727582] tracking-[-0.28px]">
              กรุณารอสักครู่...
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
    );
  }

  if (!consultationData) {
    return null;
  }

  return (
    <ChatInterface
      initialMessage={consultationData.consultationContent}
      language="th"
    />
  );
}
