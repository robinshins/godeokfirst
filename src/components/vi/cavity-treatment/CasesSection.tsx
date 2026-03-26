'use client';

import Image from 'next/image';
import { useState, useRef } from 'react';

const cases = [
  {
    num: '01',
    tag: 'Điều trị sâu răng',
    title: 'răng hàm sâu răng, resin phục hồi',
    summary: 'sâu răng loại bỏ chính xác phần bệnh và dùng resinphục hồi gọn gàng bằng phục hồi',
    steps: [
      {
        img: '/임상사진/sâu răng/김효연_sâu răng_before.jpg',
        label: 'Trước điều trị',
        desc: 'răng hàmđang trong tình trạng sâu răng tiến triển. Xác nhận đổi màu và tổn thương do sâu răng trên bề mặt răng.',
      },
      {
        img: '/임상사진/sâu răng/김효연_sâu răng_after.jpg',
        label: 'Hoàn thành điều trị',
        desc: 'sâu răngloại bỏ hoàn toàn và dùng resinđể phục hồi. Hình dạng răng được phục hồi gọn gàng.',
      },
    ],
  },
  {
    num: '02',
    tag: 'Điều trị sâu răng',
    title: 'Nhiều sâu răng, phục hồi chính xác',
    summary: 'Phát sinh ở nhiều răng sâu răngloại bỏ chính xác theo từng bước phục hồi',
    steps: [
      {
        img: '/임상사진/sâu răng-1/방준영_sâu răng_before.jpg',
        label: 'Trước điều trị',
        desc: 'Sâu răng tiến triển ở nhiều răng hàm. Xác nhận sâu răng thứ phát quanh phục hồi cũ.',
      },
      {
        img: '/임상사진/sâu răng-1/방준영_sâu răng_after.jpg',
        label: 'Hoàn thành điều trị',
        desc: 'Loại bỏ tất cả sâu răng và hoàn thành tự nhiên bằng phục hồi phù hợp mỗi răng.',
      },
    ],
  },
  {
    num: '03',
    tag: 'vết nứt điều trị',
    title: 'Nứt răng, phục hồi mão răng vàng',
    summary: 'Bảo vệ răng bị nứt bằng mão vàng sau chẩn đoán chính xác',
    steps: [
      {
        img: '/임상사진/vết nứt/김고운_vết nứt_실사_before.jpg',
        label: 'Chẩn đoán X-ray',
        desc: 'Xác nhận chính xác vị trí và phạm vi vết nứt răng bằng chụp X-ray.',
      },
      {
        img: '/임상사진/vết nứt/김고운_vết nứt_실사_after.jpg',
        label: 'Hoàn thành lắp mão răng vàng',
        desc: 'Bảo vệ răng nứt bằng mão răng vàng để ngăn gãy thêm. Với chất liệu vàng bền bỉ, có thể sử dụng ổn định lâu dài.',
      },
    ],
  },
  {
    num: '04',
    tag: 'Phục hình răng cửa',
    title: 'Phục hồi phục hình răng cửa',
    summary: 'Phục hồi phục hình răng cửa bị tổn thương chính xác, khôi phục thẩm mỹ tự nhiên',
    steps: [
      {
        img: '/임상사진/chính재윤_앞니보철/chính재윤_앞니보철_실제사진_before.jpg',
        label: 'Trước điều trị',
        desc: 'Răng cửa bị tổn thương cần cải thiện thẩm mỹ và chức năng.',
      },
      {
        img: '/임상사진/chính재윤_앞니보철/chính재윤_앞니보철_실제사진_after.jpg',
        label: 'Hoàn thành phục hồi phục hình',
        desc: 'Tái hiện hình dạng và màu sắc tương tự răng tự nhiên bằng phục hồi phục hình chính xác.',
      },
    ],
  },
  {
    num: '05',
    tag: 'Tái phục hình răng cửa',
    title: 'Tái phục hình răng cửa điều trị',
    summary: 'Loại bỏ phục hình cũ và tái phục hồi bằng phục hình mới để cải thiện thẩm mỹ và chức năng',
    steps: [
      {
        img: '/임상사진/Tái phục hình răng cửa/앞니재보철_실사_before.jpg',
        label: 'Trước điều trị',
        desc: 'Cần tái phục hình do đổi màu và giảm độ khít của phục hình cũ.',
      },
      {
        img: '/임상사진/Tái phục hình răng cửa/앞니재보철_실사_after.jpg',
        label: 'Hoàn thành tái phục hình',
        desc: 'Loại bỏ phục hình cũ và phục hồi tự nhiên bằng phục hình mới.',
      },
    ],
  },
  {
    num: '06',
    tag: 'Phục hình thẩm mỹ răng cửa',
    title: 'Mão răng thẩm mỹ răng cửa',
    summary: 'Cải thiện thẩm mỹ răng cửa bằng mão răng, phục hồi nụ cười tự nhiên',
    steps: [
      {
        img: '/임상사진/chính민아B_앞니 보철/chính민아B_앞니심미보철크라운_before.jpg',
        label: 'Trước điều trị',
        desc: 'Cần cải thiện hình dạng và màu sắc răng cửa.',
      },
      {
        img: '/임상사진/chính민아B_앞니 보철/chính민아B_앞니심미보철크라운_after.jpg',
        label: 'Hoàn thành phục hình thẩm mỹ',
        desc: 'Tái hiện hình dạng và màu sắc tự nhiên bằng mão răng thẩm mỹ.',
      },
    ],
  },
];

export default function CasesSection() {
  const [openSet, setOpenSet] = useState<Set<number>>(new Set([0]));
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleToggle = (idx: number) => {
    setOpenSet((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) {
        next.delete(idx);
      } else {
        next.add(idx);
      }
      return next;
    });
  };

  return (
    <div className="bg-[#f8f9fb] w-full py-[60px]">
      <div className="px-5 max-w-[430px] mx-auto flex flex-col gap-10">

        {/* Header */}
        <div className="flex flex-col gap-3">
          <p
            className="text-[#008095] font-bold text-xs tracking-[0.12em] uppercase"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            Clinical Results
          </p>
          <h2
            className="font-bold text-[28px] leading-[1.35] tracking-[-0.56px] text-[#151a24]"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            Điều trị sâu răng  lâm sàng,<br />
            Từ quy trình đến hoàn thành
          </h2>
          <p
            className="font-semibold text-[15px] leading-[1.6] text-[#727582]"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            Từng bước từ chẩn đoán đến hoàn thành<br />
            Hãy xác nhận quy trình điều trị thực tế
          </p>
        </div>

        {/* Case Accordion */}
        <div className="flex flex-col gap-3">
          {cases.map((c, idx) => {
            const isOpen = openSet.has(idx);
            return (
              <div
                key={c.num}
                ref={(el) => { cardRefs.current[idx] = el; }}
                className="bg-white rounded-2xl overflow-hidden"
                style={{ boxShadow: '0 4px 20px -4px rgba(21,26,36,0.08)', scrollMarginTop: '64px' }}
              >
                {/* Accordion Header */}
                <button
                  onClick={() => handleToggle(idx)}
                  className="w-full px-5 py-4 flex items-center gap-3 text-left"
                >
                  <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-[#e6f7f8] flex items-center justify-center">
                    <span
                      className="text-[#008095] font-bold text-[13px]"
                      style={{ fontFamily: 'Pretendard, sans-serif' }}
                    >
                      {c.num}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <span
                      className="text-[#008095] text-[11px] font-bold"
                      style={{ fontFamily: 'Pretendard, sans-serif' }}
                    >
                      {c.tag}
                    </span>
                    <p
                      className="font-bold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#151a24] mt-0.5"
                      style={{ fontFamily: 'Pretendard, sans-serif' }}
                    >
                      {c.title}
                    </p>
                  </div>
                  <div className="flex-shrink-0 ml-1">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    >
                      <path d="M5 7.5L10 12.5L15 7.5" stroke="#9298a6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </button>

                {/* Accordion Content */}
                {isOpen && (
                  <div className="px-5 pb-6 flex flex-col gap-1">
                    {/* Summary */}
                    <p
                      className="text-[13px] font-medium text-[#727582] leading-[1.6] mb-5 pb-4 border-b border-[#f0f3f8]"
                      style={{ fontFamily: 'Pretendard, sans-serif' }}
                    >
                      {c.summary}
                    </p>

                    {/* Steps */}
                    <div className="flex flex-col">
                      {c.steps.map((step, sIdx) => (
                        <div key={sIdx} className="flex gap-0">
                          {/* Timeline */}
                          <div className="flex flex-col items-center w-8 flex-shrink-0">
                            <div className="w-6 h-6 rounded-full bg-[#008095] flex items-center justify-center flex-shrink-0 z-10">
                              <span
                                className="text-white font-bold text-[10px]"
                                style={{ fontFamily: 'Pretendard, sans-serif' }}
                              >
                                {sIdx + 1}
                              </span>
                            </div>
                            {sIdx < c.steps.length - 1 && (
                              <div className="w-px flex-1 bg-[#d1e8eb] my-1" />
                            )}
                          </div>

                          {/* Content */}
                          <div className={`flex-1 pl-3 ${sIdx < c.steps.length - 1 ? 'pb-6' : ''}`}>
                            <p
                              className="font-bold text-[14px] leading-[1.4] tracking-[-0.28px] text-[#151a24] mb-2"
                              style={{ fontFamily: 'Pretendard, sans-serif' }}
                            >
                              {step.label}
                            </p>
                            <div className="w-full aspect-[4/3] relative rounded-xl overflow-hidden bg-[#f3f6fb] mb-2">
                              <Image
                                src={step.img}
                                alt={step.label}
                                fill
                                className="object-cover"
                                sizes="(max-width: 430px) 100vw, 390px"
                              />
                            </div>
                            <p
                              className="text-[13px] font-medium text-[#727582] leading-[1.6]"
                              style={{ fontFamily: 'Pretendard, sans-serif' }}
                            >
                              {step.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Step count badge */}
                    <div className="mt-4 flex items-center gap-2 pt-4 border-t border-[#f0f3f8]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#008095]" />
                      <span
                        className="text-[#008095] text-[12px] font-semibold"
                        style={{ fontFamily: 'Pretendard, sans-serif' }}
                      >
                        Tổng {c.steps.length} bước quy trình điều trị
                      </span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom note */}
        <div className="bg-white rounded-2xl px-5 py-4 flex items-start gap-3" style={{ boxShadow: '0 2px 12px -4px rgba(21,26,36,0.08)' }}>
          <div className="w-8 h-8 rounded-xl bg-[#e6f7f8] flex items-center justify-center flex-shrink-0 mt-0.5">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 1.5C4.41 1.5 1.5 4.41 1.5 8C1.5 11.59 4.41 14.5 8 14.5C11.59 14.5 14.5 11.59 14.5 8C14.5 4.41 11.59 1.5 8 1.5ZM8.5 11H7.5V7H8.5V11ZM8.5 6H7.5V5H8.5V6Z" fill="#008095" />
            </svg>
          </div>
          <p
            className="font-medium text-[13px] leading-[1.6] text-[#5d5f6d]"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            Tất cả là ca lâm sàng thực tế của Godeok First Dental. Lấy dấu chính xác bằng máy quét miệng Trios5, Chuyên gia Nha khoa Tổng hợp trực tiếp khám.
          </p>
        </div>
      </div>
    </div>
  );
}
