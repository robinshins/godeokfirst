'use client';

import Image from 'next/image';

const cases = [
  {
    name: 'Kim●●',
    type: 'Kariyes rezin tiklash',
    badgeColor: 'bg-[#fff9ec]',
    badgeTextColor: 'text-[#ffc53d]',
    title: 'Kariyes sababli shikastlangan tishni rezin bilan tiklash',
    before: '/임상사진/충치/김효연_충치_before.jpg',
    after: '/임상사진/충치/김효연_충치_after.jpg',
    description: 'Kariyes olib tashlanganidan soʼng tabiiy tish rangiga mos rezin bilan tiklash tugallandi',
  },
  {
    name: 'Kim●●',
    type: 'Yoriq toj bilan tiklash',
    badgeColor: 'bg-[#fef1e5]',
    badgeTextColor: 'text-[#f57400]',
    title: 'Tish yorilishi sababli ogʼriq, toj bilan himoya',
    before: '/임상사진/크랙/김고운_크랙_실사_before.jpg',
    after: '/임상사진/크랙/김고운_크랙_실사_after.jpg',
    description: 'Yoriq rivojlangan tishni toj bilan xavfsiz tiklash',
  },
  {
    name: 'Jeong●●',
    type: 'Old tish protez tiklash',
    badgeColor: 'bg-[#e8f4fd]',
    badgeTextColor: 'text-[#0088cc]',
    title: 'Shikastlangan old tishni protez bilan tabiiy tiklash',
    before: '/임상사진/정재윤_앞니보철/정재윤_앞니보철_실제사진_before.jpg',
    after: '/임상사진/정재윤_앞니보철/정재윤_앞니보철_실제사진_after.jpg',
    description: 'Old tish protezi bilan estetika va funksiya tiklantirildi',
  },
  {
    name: 'Jeong●●',
    type: 'Old tish estetik protez toj',
    badgeColor: 'bg-[#ffebed]',
    badgeTextColor: 'text-[#ff1616]',
    title: 'Rangi oʼzgargan old tishni estetik protez bilan yaxshilash',
    before: '/임상사진/정민아B_앞니 보철/정민아B_앞니심미보철크라운_before.jpg',
    after: '/임상사진/정민아B_앞니 보철/정민아B_앞니심미보철크라운_after.jpg',
    description: 'Estetik protez toj bilan tabiiy old tish yaratildi',
  },
];

export default function BeforeAfterSection() {
  return (
    <div className="bg-gradient-to-b from-[#21314E] from-[0.541%] to-white w-full py-[60px] px-4 relative">
      {/* Background gradient ellipse */}
      <div className="absolute h-[711px] left-[calc(50%+5.5px)] top-[217.35px] -translate-x-1/2 w-[480px] pointer-events-none">
        <div className="absolute inset-[-56.26%_-83.33%]">
          <Image
            src="/images/cavity-gradient.svg"
            alt=""
            fill
            className="block max-w-none object-contain"
          />
        </div>
      </div>

      <div className="max-w-[375px] mx-auto relative z-10">
        <div className="flex flex-col gap-[60px] items-start w-full">
          {/* Title */}
          <div className="flex flex-col gap-4 items-center justify-center w-full">
            <div className="flex flex-col gap-3 items-center justify-center text-center w-full">
              <h2 className="font-['Pretendard_JP'] font-bold text-[32px] leading-[1.35] tracking-[-0.64px] text-white w-full">
                Kariyes va protez davolash,<br />
                oldin va keyin holatlari bilan tekshiring
              </h2>
              <p className="font-['Pretendard_JP'] font-semibold text-base leading-[1.4] tracking-[-0.32px] text-[#e9ebf1] w-full">
                Haqiqiy bemorlarning davolashdan oldin va keyin<br />
                klinik suratlari
              </p>
            </div>
          </div>

          {/* Before/After Cards */}
          <div className="flex flex-col gap-6 items-start w-full">
            {cases.map((c, i) => (
              <div key={i} className="bg-white border border-[#f3f6fb] rounded-[24px] w-full overflow-hidden">
                <div className="flex flex-col gap-4 items-center justify-center px-4 py-6 w-full">
                  <div className="flex flex-col gap-3 items-center justify-center w-full">
                    <div className={`${c.badgeColor} px-3 py-1.5 rounded-lg`}>
                      <p className={`font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] ${c.badgeTextColor} text-center`}>
                        {c.type}
                      </p>
                    </div>
                    <p className="font-bold text-[20px] leading-[1.35] tracking-[-0.4px] text-black text-center w-full">
                      {c.title}
                    </p>
                  </div>

                  {/* Before/After Images */}
                  <div className="flex flex-col gap-3 w-full">
                    {/* Before */}
                    <div className="relative w-full">
                      <div className="h-[192px] w-full rounded-[20px] overflow-hidden relative bg-[#f3f6fb]">
                        <Image
                          src={c.before}
                          alt="Davolashdan oldin"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="absolute top-3 left-3 bg-[#292a2f] rounded-[10px] px-2.5 py-[5px] z-10">
                        <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-white">
                          Before
                        </p>
                      </div>
                    </div>

                    {/* After */}
                    <div className="relative w-full">
                      <div className="h-[192px] w-full rounded-[20px] overflow-hidden relative bg-[#f3f6fb]">
                        <Image
                          src={c.after}
                          alt="Davolashdan keyin"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="absolute top-0 left-0 w-[196px] h-[86px]">
                        <Image
                          src="/images/after-badge.svg"
                          alt=""
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div className="absolute top-3 left-3">
                        <div className="rounded-[10px] px-2.5 py-[5px]">
                          <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-white">
                            After
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#5d5f6d] text-center">
                    {c.name} | {c.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
