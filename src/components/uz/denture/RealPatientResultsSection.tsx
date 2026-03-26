'use client';

import Image from 'next/image';
import FadeInSection from '@/components/common/FadeInSection';

export default function RealPatientResultsSection() {
  const cases = [
    {
      name: 'Pak●●',
      gender: 'Erkak',
      type: 'Toʼliq implant · Rentgen',
      beforeImage: '/임상사진/박균조_toʼliq jagʼimplant/박균조_전체implant_rentgen_before.jpg',
      afterImage: '/임상사진/박균조_toʼliq jagʼimplant/박균조_전체implant_rentgen_after.jpg'
    },
    {
      name: 'Pak●●',
      gender: 'Erkak',
      type: 'Toʼliq implant · Haqiqiy surat',
      beforeImage: '/임상사진/박균조_toʼliq jagʼimplant/박균조_전체implant_haqiqiy surat_before.jpg',
      afterImage: '/임상사진/박균조_toʼliq jagʼimplant/박균조_전체implant_haqiqiy surat_after.jpg'
    }
  ];

  return (
    <div className="bg-[#0b1727] w-full flex flex-col items-center">
      <div className="box-border flex flex-col gap-[50px] items-center px-4 py-[60px] relative w-full max-w-[430px]">
        {/* Header */}
        <FadeInSection className="flex flex-col gap-4 items-center justify-center relative shrink-0 w-full">
          <div className="flex flex-col gap-3 items-center justify-center relative shrink-0 text-center w-full">
            <p className="text-[14px] font-bold text-[#6eb7bc] tracking-[3px] uppercase">
              REAL PATIENT RESULTS
            </p>
            <h2 className="font-bold leading-[1.35] text-[32px] text-white tracking-[-0.64px] w-full" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
              Toʼliq implant oldin/keyin holatlari
            </h2>
            <p className="font-medium leading-[1.6] text-[#a0c4d4] text-[15px] text-center tracking-[-0.32px] w-full" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
              Haqiqiy bemorlarning ajoyib oʼzgarishlarini koʼring
            </p>
          </div>
        </FadeInSection>

        {/* Cases */}
        <div className="flex flex-col gap-6 items-start relative shrink-0 w-full">
          {cases.map((caseItem, index) => (
            <FadeInSection key={index} delay={100 + index * 100} className="bg-white border border-[#d2e9f3] border-solid rounded-[24px] shrink-0 w-full shadow-[0px_4px_20px_-4px_rgba(0,143,210,0.15)]">
              <div className="flex flex-col items-center justify-center overflow-hidden rounded-[inherit] w-full">
                <div className="box-border flex flex-col gap-5 items-center justify-center px-4 py-6 relative shrink-0 w-full">
                  <div className="flex flex-col gap-4 items-center justify-center relative shrink-0 w-full">
                    {/* Before */}
                    <div className="bg-[#f8fbfd] h-[192px] overflow-hidden relative rounded-[20px] shrink-0 w-full">
                      <div className="relative w-full h-full">
                        <Image
                          src={caseItem.beforeImage}
                          alt="Before"
                          fill
                          className="object-cover"
                          sizes="400px"
                          loading="eager"
                        />
                      </div>
                      {/* Before Badge */}
                      <div className="absolute box-border flex flex-col gap-2.5 items-start left-0 p-3 top-0 z-10">
                        <div className="bg-[#3e3a3a] box-border flex flex-col gap-2.5 items-center justify-center px-3 py-[6px] relative rounded-xl shrink-0">
                          <p className="font-bold leading-[1.4] not-italic text-[13px] text-nowrap text-white tracking-[-0.26px]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                            Before
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* After */}
                    <div className="bg-[#f8fbfd] h-[192px] overflow-hidden relative rounded-[20px] shrink-0 w-full">
                      <div className="relative w-full h-full">
                        <Image
                          src={caseItem.afterImage}
                          alt="After"
                          fill
                          className="object-cover"
                          sizes="400px"
                          loading="eager"
                        />
                      </div>
                      {/* After Badge */}
                      <div className="absolute box-border flex flex-col gap-2.5 items-start left-0 p-3 top-0 z-10">
                        <div className="bg-gradient-to-r from-[#008fd2] to-[#6eb7bc] box-border flex flex-col gap-2.5 items-center justify-center px-3 py-[6px] relative rounded-xl shrink-0 shadow-md">
                          <p className="font-bold leading-[1.4] not-italic text-[13px] text-nowrap text-white tracking-[-0.26px]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                            After ✨
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 items-center relative shrink-0 w-full">
                    <p className="font-semibold leading-[1.4] not-italic text-[#008fd2] text-[15px] text-center tracking-[-0.3px] w-full" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                      {caseItem.name} · {caseItem.gender}
                    </p>
                    <p className="font-medium leading-[1.4] not-italic text-[#666] text-[13px] text-center tracking-[-0.26px] w-full" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                      {caseItem.type}
                    </p>
                  </div>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </div>
  );
}
