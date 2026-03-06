'use client';

import Image from 'next/image';
import { SedationCard } from '@/lib/types';

interface SedationAppealCardProps {
  sedationCard: SedationCard;
}

export default function SedationAppealCard({ sedationCard }: SedationAppealCardProps) {
  const { images, highlights, headerText, emphasisText } = sedationCard;

  return (
    <div className="w-full mt-4 mb-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
      {/* 메인 카드 */}
      <div className="bg-white border border-[#e5e7eb] rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
        
        {/* 상단 라벨 */}
        <div className="px-5 pt-5 pb-2">
          <div className="flex items-center gap-1.5 mb-1.5">
            <div className="w-1 h-3 bg-[#006aff] rounded-full"></div>
            <span className="text-[#006aff] text-[12px] font-bold tracking-tight uppercase">무통/수면 치료</span>
          </div>
          <h3 className="text-[#1a1c21] font-bold text-[20px] tracking-[-0.5px] leading-[1.3]">
            {headerText}
          </h3>
        </div>

        {/* 이미지 슬라이더 영역 - 가독성을 위해 배경 단순화 */}
        <div className="py-4">
          <div
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-3 px-5"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {images.map((img, index) => (
              <div
                key={index}
                className="flex-shrink-0 snap-center w-[220px]"
              >
                <div className="bg-white rounded-xl overflow-hidden border border-[#f0f2f7]">
                  <div className="relative w-full h-[140px]">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent h-10 flex items-end px-3 pb-2">
                      <p className="text-[11px] font-medium text-white">
                        {img.title}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 체크리스트 영역 - 가독성 중심의 간결한 레이아웃 */}
        <div className="px-5 py-2 space-y-3">
          {highlights.map((text, index) => (
            <div key={index} className="flex items-start gap-2.5">
              <svg 
                className="mt-1 flex-shrink-0" 
                width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20 6L9 17L4 12" stroke="#006aff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p className="text-[#374151] text-[15px] font-medium leading-[1.45] tracking-[-0.2px]">
                {text}
              </p>
            </div>
          ))}
        </div>

        {/* 하단 강조 박스 - 이모티콘 제거 및 가독성 높은 디자인 */}
        <div className="p-5">
          <div className="bg-[#f9fafb] border border-[#f3f4f6] rounded-xl px-4 py-4">
            <p className="text-[#111827] font-bold text-[15px] text-center tracking-[-0.3px] leading-[1.5]">
              {emphasisText}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
