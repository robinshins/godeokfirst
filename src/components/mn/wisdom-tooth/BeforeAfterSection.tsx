'use client';

import Image from 'next/image';

const cases = [
  { type: 'Зүүн доод хүзүү шүд авах', badgeColor: 'bg-[#fff9ec]', badgeTextColor: 'text-[#ffc53d]', title: 'Зүүн доод далд хүзүү шүдийг аюулгүй авсан', before: '/임상사진/사랑니/왼쪽아래사랑니_before.jpeg', after: '/임상사진/사랑니/왼쪽아래사랑니_after.jpeg', description: 'Далд зүүн доод хүзүү шүдийг аюулгүй амжилттай авсан' },
  { type: 'Баруун доод хүзүү шүд авах', badgeColor: 'bg-[#fef1e5]', badgeTextColor: 'text-[#f57400]', title: 'Баруун доод хүзүү шүд авсны дараа цэвэрхэн эдгэрэлт', before: '/임상사진/사랑니/우측아래사랑니_before.jpeg', after: '/임상사진/사랑니/우측아래사랑니_after.jpeg', description: 'Баруун доод хүзүү шүд авсны дараа буйл цэвэрхэн эдгэрсэн' },
  { type: 'Имплант + хүзүү шүд зэрэг авах', badgeColor: 'bg-[#e8f4fd]', badgeTextColor: 'text-[#0088cc]', title: 'Имплант суулгах ба хүзүү шүд авахыг нэг удаад', before: '/임상사진/사랑니/임플란트식립하면서사랑니발치_before.jpeg', after: '/임상사진/사랑니/임플란트하면서발치_after.jpeg', description: 'Зэрэг хийснээр ирэх тоог багасгасан' },
];

export default function BeforeAfterSection() {
  return (
    <div className="bg-gradient-to-b from-[#21314E] from-[0.541%] to-white w-full py-[60px] px-4 relative">
      <div className="absolute h-[711px] left-[calc(50%+5.5px)] top-[217.35px] -translate-x-1/2 w-[480px] pointer-events-none">
        <div className="absolute inset-[-56.26%_-83.33%]"><Image src="/images/cavity-gradient.svg" alt="" fill className="block max-w-none object-contain" /></div>
      </div>
      <div className="max-w-[375px] mx-auto relative z-10">
        <div className="flex flex-col gap-[60px] items-start w-full">
          <div className="flex flex-col gap-4 items-center justify-center w-full">
            <div className="flex flex-col gap-3 items-center justify-center text-center w-full">
              <h2 className="font-bold text-[32px] leading-[1.35] tracking-[-0.64px] text-white w-full">Хүзүү шүд авах<br />Өмнө ба дараах үр дүн</h2>
              <p className="font-semibold text-base leading-[1.4] tracking-[-0.32px] text-[#e9ebf1] w-full">Бодит өвчтөний<br />эмнэлзүйн зураг</p>
            </div>
          </div>
          <div className="flex flex-col gap-6 items-start w-full">
            {cases.map((c, i) => (
              <div key={i} className="bg-white border border-[#f3f6fb] rounded-[24px] w-full overflow-hidden">
                <div className="flex flex-col gap-4 items-center justify-center px-4 py-6 w-full">
                  <div className="flex flex-col gap-3 items-center justify-center w-full">
                    <div className={`${c.badgeColor} px-3 py-1.5 rounded-lg`}><p className={`font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] ${c.badgeTextColor} text-center`}>{c.type}</p></div>
                    <p className="font-bold text-[20px] leading-[1.35] tracking-[-0.4px] text-black text-center w-full">{c.title}</p>
                  </div>
                  <div className="flex flex-col gap-3 w-full">
                    <div className="relative w-full">
                      <div className="h-[192px] w-full rounded-[20px] overflow-hidden relative bg-[#f3f6fb]"><Image src={c.before} alt="Авахаас өмнө" fill className="object-cover" /></div>
                      <div className="absolute top-3 left-3 bg-[#292a2f] rounded-[10px] px-2.5 py-[5px] z-10"><p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-white">Before</p></div>
                    </div>
                    <div className="relative w-full">
                      <div className="h-[192px] w-full rounded-[20px] overflow-hidden relative bg-[#f3f6fb]"><Image src={c.after} alt="Авсны дараа" fill className="object-cover" /></div>
                      <div className="absolute top-0 left-0 w-[196px] h-[86px]"><Image src="/images/after-badge.svg" alt="" fill className="object-contain" /></div>
                      <div className="absolute top-3 left-3"><div className="rounded-[10px] px-2.5 py-[5px]"><p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-white">After</p></div></div>
                    </div>
                  </div>
                  <p className="font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#5d5f6d] text-center">{c.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
