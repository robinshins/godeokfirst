'use client';

import Image from 'next/image';

export default function SedationSection() {
  const certifications = [
    {
      image: '/images/monitoring-equipment.jpg',
      alt: '患者モニタリング設備',
      title: '患者モニタリング設備',
      objectFit: 'object-cover'
    }
  ];

  return (
    <div className="bg-[#f8f9fb] w-full py-[60px] px-4">
      <div className="max-w-[375px] mx-auto">
        <div className="flex flex-col gap-10 items-start w-full">
          <div className="flex flex-col gap-6 items-center justify-center w-full">
            <h2 className="font-['Pretendard_JP'] font-bold text-[36px] leading-[1.3] tracking-[-0.72px] text-black text-center w-full">
              歯科治療、<br />
              痛くないでしょうか？
            </h2>

            <div className="bg-gradient-to-r from-[#d4a574] to-[#c8955e] px-8 py-5 rounded-2xl w-full shadow-lg">
              <div className="flex flex-col gap-2 items-center text-center">
                <p className="font-['Pretendard_JP'] font-semibold text-[18px] leading-[1.4] tracking-[-0.36px] text-white/90">
                  意識下鎮静法で
                </p>
                <p className="font-['Pretendard_JP'] font-bold text-[32px] leading-[1.2] tracking-[-0.64px] text-white">
                  眠りながら治療を受けてください
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-[24px] shadow-[0px_24px_50px_-12px_rgba(45,54,67,0.12)] w-full">
            <div className="flex flex-col gap-6 items-start w-full">
              <div className="flex flex-col gap-4 items-start w-full">
                <h3 className="font-['Pretendard_JP'] font-bold text-[24px] leading-[1.35] tracking-[-0.48px] text-black">
                  意識下鎮静法とは？
                </h3>
                <div className="bg-[#f3f6fb] p-5 rounded-2xl w-full">
                  <p className="font-['Pretendard_JP'] font-medium text-[15px] leading-[1.6] tracking-[-0.3px] text-[#2d3643]">
                    少し眠い状態で施術を受け、施術中に起きたことをあまり記憶しなくなる治療法です。
                    <br /><br />
                    意識がある状態で快適に緊張を解いてくれるため、治療中でも自分の状態を表現し反応できるのでそれだけ安全です。
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-4 items-start w-full">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-6 bg-[#008095] rounded-full" />
                  <h4 className="font-['Pretendard_JP'] font-bold text-[20px] leading-[1.5] tracking-[-0.4px] text-black">
                    安全性
                  </h4>
                </div>
                <div className="flex flex-col gap-3 items-start w-full">
                  {[
                    '意識が維持された状態で施術',
                    '専門医が血圧、脈拍、酸素飽和度チェック',
                    '世界的に認められた薬物使用',
                    '全身麻酔ではないため後遺症と副作用が著しく低い',
                    'いつでも覚醒できる逆転薬物を備蓄',
                    '歯科治療中の恐怖と不安による突然の動きを未然に防止'
                  ].map((text, index) => (
                    <div key={index} className="flex items-start gap-2 w-full">
                      <div className="shrink-0 w-5 h-5 mt-0.5">
                        <Image src="/icons/check-teal.svg" alt="" width={20} height={20} />
                      </div>
                      <p className="font-['Pretendard_JP'] font-medium text-[15px] leading-[1.5] tracking-[-0.3px] text-[#2d3643]">
                        {text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-4 items-start w-full">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-6 bg-[#008095] rounded-full" />
                  <h4 className="font-['Pretendard_JP'] font-bold text-[20px] leading-[1.5] tracking-[-0.4px] text-black">
                    快適さ
                  </h4>
                </div>
                <div className="flex flex-col gap-3 items-start w-full">
                  {[
                    '簡単な注射で鎮静法が可能',
                    '施術が終われば施術中の快適な感覚だけが残る',
                    '快適で安定した記憶だけが残り歯科治療に自信がつく',
                    '費用負担が少なく簡単に施術可能'
                  ].map((text, index) => (
                    <div key={index} className="flex items-start gap-2 w-full">
                      <div className="shrink-0 w-5 h-5 mt-0.5">
                        <Image src="/icons/check-teal.svg" alt="" width={20} height={20} />
                      </div>
                      <p className="font-['Pretendard_JP'] font-medium text-[15px] leading-[1.5] tracking-[-0.3px] text-[#2d3643]">
                        {text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#008095]/10 to-[#006d80]/10 p-5 rounded-2xl w-full border border-[#008095]/20">
                <div className="flex flex-col gap-3 items-start w-full">
                  <p className="font-['Pretendard_JP'] font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-[#008095]">
                    誰でもできるわけではない特別な治療
                  </p>
                  <p className="font-['Pretendard_JP'] font-medium text-[15px] leading-[1.6] tracking-[-0.3px] text-[#2d3643]">
                    意識下鎮静法は単純な治療ではありません。<span className="font-bold text-[#008095]">専門教育を修了した医療チーム</span>と<span className="font-bold text-[#008095]">患者モニタリング設備、救急設備</span>などが備わった歯科でのみ施行できる専門的な治療法です。
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-4 items-start w-full pt-2">
                <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-gray-100">
                  <Image
                    src={certifications[0].image}
                    alt={certifications[0].alt}
                    fill
                    className={certifications[0].objectFit}
                  />
                </div>
                <p className="font-['Pretendard_JP'] font-semibold text-[14px] leading-[1.4] tracking-[-0.28px] text-[#5d5f6d] text-center w-full">
                  {certifications[0].title}
                </p>
              </div>

              <div className="flex flex-col gap-4 items-start w-full pt-4">
                <h4 className="font-['Pretendard_JP'] font-bold text-[20px] leading-[1.35] tracking-[-0.4px] text-black">
                  麻酔進行過程
                </h4>
                <div className="flex flex-col gap-4 w-full">
                  <div className="flex gap-4 items-start w-full">
                    <div className="flex flex-col items-center gap-2 shrink-0">
                      <div className="w-12 h-12 rounded-full bg-[#008095] flex items-center justify-center">
                        <span className="font-['Pretendard_JP'] font-bold text-white text-lg">1</span>
                      </div>
                      <div className="w-0.5 h-12 bg-[#e9ebf1]" />
                    </div>
                    <div className="flex flex-col gap-2 flex-1 pt-2">
                      <p className="font-['Pretendard_JP'] font-bold text-[17px] leading-[1.4] tracking-[-0.34px] text-black">
                        塗布/ガーグル麻酔
                      </p>
                      <p className="font-['Pretendard_JP'] font-medium text-[15px] leading-[1.6] tracking-[-0.3px] text-[#727582]">
                        麻酔前に注射針の痛みを<br />
                        なくすための表面麻酔
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start w-full">
                    <div className="flex flex-col items-center gap-2 shrink-0">
                      <div className="w-12 h-12 rounded-full bg-[#008095] flex items-center justify-center">
                        <span className="font-['Pretendard_JP'] font-bold text-white text-lg">2</span>
                      </div>
                      <div className="w-0.5 h-12 bg-[#e9ebf1]" />
                    </div>
                    <div className="flex flex-col gap-2 flex-1 pt-2">
                      <p className="font-['Pretendard_JP'] font-bold text-[17px] leading-[1.4] tracking-[-0.34px] text-black">
                        痛み緩和電動麻酔器
                      </p>
                      <p className="font-['Pretendard_JP'] font-medium text-[15px] leading-[1.6] tracking-[-0.3px] text-[#727582]">
                        コンピューターが自動で注入速度を調節し<br />
                        痛みを最小化
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start w-full">
                    <div className="flex flex-col items-center shrink-0">
                      <div className="w-12 h-12 rounded-full bg-[#008095] flex items-center justify-center">
                        <span className="font-['Pretendard_JP'] font-bold text-white text-lg">3</span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 flex-1 pt-2">
                      <p className="font-['Pretendard_JP'] font-bold text-[17px] leading-[1.4] tracking-[-0.34px] text-black">
                        神経管麻酔器
                      </p>
                      <p className="font-['Pretendard_JP'] font-medium text-[15px] leading-[1.6] tracking-[-0.3px] text-[#727582]">
                        神経近くに直接麻酔して<br />
                        完璧な痛み緩和治療を完成
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
