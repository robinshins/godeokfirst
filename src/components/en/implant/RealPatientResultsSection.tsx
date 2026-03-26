'use client';

import Image from 'next/image';

export default function RealPatientResultsSection() {
  const cases = [
    {
      name: 'Patient J',
      description: 'Molar Implant (X-ray)',
      beforeImage: '/임상사진/지종환_임플란트/지종환_어금니임플란트_엑스레이_before.jpg',
      afterImage: '/임상사진/지종환_임플란트/지종환_어금니임플란트_엑스레이_after.jpg',
    },
    {
      name: 'Patient J',
      description: 'Molar Implant (Actual Photo)',
      beforeImage: '/임상사진/지종환_임플란트/지종환_어금니임플란트_실제사진_before.jpg',
      afterImage: '/임상사진/지종환_임플란트/지종환_어금니임플란트_실제사진_after.jpg',
    },
    {
      name: 'Patient L',
      description: 'Implant (Actual Photo)',
      beforeImage: '/임상사진/이영주_임플란트/이영주_임플란트_실사_before.jpg',
      afterImage: '/임상사진/이영주_임플란트/이영주_임플란트_실사_after.jpg',
    },
  ];

  return (
    <div className="bg-[#0b1727] w-full flex justify-center">
      <div className="box-border flex flex-col gap-[60px] items-center px-4 py-[60px] relative w-full max-w-[430px]">
        {/* Header */}
        <div className="flex flex-col gap-4 items-center justify-center relative shrink-0 w-full">
          <div className="flex flex-col gap-3 items-center justify-center leading-[0] not-italic relative shrink-0 text-center w-full">
            <h2 className="font-bold leading-[1.35] text-[32px] text-white tracking-[-0.64px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              Implant Before & After
            </h2>
          </div>
        </div>

        {/* Cases */}
        <div className="flex flex-col gap-6 items-start relative shrink-0 w-full">
          {cases.map((caseItem, index) => (
            <div key={index} className="bg-white border border-[#f3f6fb] border-solid rounded-[24px] shrink-0 w-full">
              <div className="flex flex-col items-center justify-center overflow-hidden rounded-[inherit] w-full">
                <div className="box-border flex flex-col gap-5 items-center justify-center px-4 py-6 relative shrink-0 w-full">
                  <div className="flex flex-col gap-4 items-center justify-center relative shrink-0 w-full">
                    {/* Before */}
                    <div className="bg-[#f3f6fb] h-[192px] overflow-hidden relative rounded-[20px] shrink-0 w-full">
                      <div className="relative w-full h-full">
                        <Image
                          src={caseItem.beforeImage}
                          alt="Before"
                          fill
                          className="object-cover"
                        />
                      </div>
                      {/* Before Badge */}
                      <div className="absolute box-border flex flex-col gap-2.5 items-start left-0 p-3 top-0 z-10">
                        <div className="bg-[#292a2f] box-border flex flex-col gap-2.5 items-center justify-center px-2.5 py-[5px] relative rounded-[10px] shrink-0">
                          <p className="font-semibold leading-[1.4] not-italic text-[13px] text-nowrap text-white tracking-[-0.26px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                            Before
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* After */}
                    <div className="bg-[#f3f6fb] h-[192px] overflow-hidden relative rounded-[20px] shrink-0 w-full">
                      <div className="relative w-full h-full">
                        <Image
                          src={caseItem.afterImage}
                          alt="After"
                          fill
                          className="object-cover"
                        />
                      </div>
                      {/* After Badge */}
                      <div className="absolute box-border flex flex-col gap-2.5 items-start left-0 p-3 top-0 z-10">
                        <div className="bg-[#008095] box-border flex flex-col gap-2.5 items-center justify-center px-2.5 py-[5px] relative rounded-[10px] shrink-0">
                          <p className="font-semibold leading-[1.4] not-italic text-[13px] text-nowrap text-white tracking-[-0.26px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                            After
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 items-start relative shrink-0 w-full">
                    <p className="font-semibold leading-[1.4] not-italic text-[#9298a6] text-[15px] text-center tracking-[-0.3px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                      {caseItem.name} · {caseItem.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
