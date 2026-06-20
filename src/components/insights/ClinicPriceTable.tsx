import type { InsightTreatment } from '@/lib/insights';
import {
  getPricingGroups,
  getCoveredNote,
  formatPrice,
} from '@/lib/clinicPricing';

/**
 * 비용 관련 인사이트 글 하단에 노출되는 "고덕퍼스트치과 비급여 진료비용 안내" 표.
 * 의료법 제45조(비급여 진료비용 고지) 목적의 사실 기반 표준가 게시.
 * - 할인/이벤트/최상급 표현 없음
 * - 표준가이며 개별 비용은 진단에 따라 달라질 수 있음을 고지
 */
export default function ClinicPriceTable({
  treatment,
}: {
  treatment: InsightTreatment;
}) {
  const groups = getPricingGroups(treatment);
  const coveredNote = getCoveredNote(treatment);
  if (groups.length === 0 && !coveredNote) return null;

  return (
    <section className="px-5 pt-10" aria-label="고덕퍼스트치과 비급여 진료비용 안내">
      <div className="rounded-2xl border border-[#008095]/25 overflow-hidden">
        {/* Header */}
        <div className="bg-[#008095]/[0.06] px-4 py-4 border-b border-[#008095]/15">
          <p className="text-[10px] font-semibold text-[#008095] tracking-wider uppercase mb-1">
            고덕퍼스트치과의원 진료비 안내
          </p>
          <h2 className="text-[15px] font-bold text-gray-900 leading-snug">
            고덕퍼스트치과 비급여 진료비용
          </h2>
          <p className="text-[11.5px] text-gray-500 mt-1.5 leading-relaxed">
            경기 평택시 고덕로 250 에듀스카이 4층 · 통합치의학과 전문의 진료
          </p>
        </div>

        {coveredNote ? (
          <p className="px-4 pt-3 text-[11.5px] text-gray-600 leading-relaxed">
            {coveredNote}
          </p>
        ) : null}

        {/* Groups */}
        <div className="px-4 py-3 space-y-4">
          {groups.map((group) => (
            <div key={group.title}>
              <p className="text-[12px] font-semibold text-gray-800 mb-1.5">
                {group.title}
              </p>
              <ul className="divide-y divide-gray-100">
                {group.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-baseline justify-between gap-3 py-1.5"
                  >
                    <span className="text-[12.5px] text-gray-700 leading-snug">
                      {item.name}
                      {item.note ? (
                        <span className="block text-[10.5px] text-gray-400 mt-0.5">
                          {item.note}
                        </span>
                      ) : null}
                    </span>
                    <span className="shrink-0 text-[12.5px] font-semibold text-gray-900 whitespace-nowrap">
                      {formatPrice(item)}
                      {item.vatExtra ? (
                        <span className="ml-1 text-[10px] font-normal text-gray-400">
                          부가세 별도
                        </span>
                      ) : null}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Statutory notice */}
        <div className="px-4 py-3 bg-gray-50 border-t border-gray-100">
          <p className="text-[10px] text-gray-500 leading-relaxed">
            의료법 제45조에 따른 비급여 진료비용 고지입니다. 위 금액은 표준
            가격으로, 실제 비용은 진단 결과와 구강 상태, 추가 처치 여부에 따라
            달라질 수 있습니다. 부가세 별도 표기 항목 외 의료비는 면세입니다.
            정확한 비용은 내원 상담 후 안내받으시기 바랍니다.
          </p>
        </div>
      </div>
    </section>
  );
}
