'use client';

import { CostWarningCard as CostWarningCardType } from '@/lib/types';

interface CostWarningCardProps {
  costWarningCard: CostWarningCardType;
}

export default function CostWarningCard({ costWarningCard }: CostWarningCardProps) {
  const { headerText, subHeaderText, checkItems, footerText } = costWarningCard;

  return (
    <div className="w-full mt-4 mb-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
      {/* 메인 카드 */}
      <div className="bg-white border border-[#f1f5f9] rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.04)]">

        {/* 상단 헤더 */}
        <div className="px-6 pt-7 pb-5 bg-gradient-to-b from-[#f8fafc] to-white">
          <div className="flex items-center gap-2 mb-3">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
              <line x1="12" y1="9" x2="12" y2="13" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
            <span className="text-[#64748b] text-[11px] font-bold tracking-[0.05em] uppercase">Security Check</span>
          </div>
          <h3 className="text-[#0f172a] font-bold text-[19px] tracking-[-0.03em] leading-[1.3]">
            {headerText}
          </h3>
          <p className="text-[#475569] text-[14.5px] mt-2.5 leading-[1.6] break-keep">
            {subHeaderText}
          </p>
        </div>

        {/* 체크리스트 영역 */}
        <div className="px-6 py-6 space-y-5">
          {checkItems.map((item, index) => (
            <div key={index} className="flex gap-4 items-start">
              {/* 번호 인디케이터 */}
              <div className="flex-shrink-0 mt-0.5">
                <div className="w-[22px] h-[22px] rounded-md bg-[#f1f5f9] flex items-center justify-center">
                  <span className="text-[#475569] text-[11px] font-bold">{index + 1}</span>
                </div>
              </div>
              {/* 내용 */}
              <div className="flex-1 min-w-0 border-b border-[#f8fafc] pb-4 last:border-0 last:pb-0">
                <p className="text-[#1e293b] text-[15px] font-bold leading-[1.4] mb-1.5 break-keep">
                  {item.title}
                </p>
                <p className="text-[#64748b] text-[13.5px] leading-[1.6] break-keep">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 하단 메시지 */}
        <div className="px-6 pb-7">
          <div className="bg-[#f8fafc] rounded-xl px-5 py-5 border border-[#f1f5f9]">
            <p className="text-[#475569] font-medium text-[13.5px] text-center leading-[1.7] whitespace-pre-line break-keep">
              {footerText}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
