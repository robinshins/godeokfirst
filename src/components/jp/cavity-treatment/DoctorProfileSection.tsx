'use client';

import Image from 'next/image';

export default function DoctorProfileSection() {
  return (
    <div className="w-full py-[60px] px-4" style={{ background: 'linear-gradient(161deg, #021847 13.86%, #0B255C 19.07%, #000 28.55%)' }}>
      <div className="max-w-[375px] mx-auto">
        <div className="flex flex-col gap-10 items-start w-full">
          {/* Title */}
          <div className="flex flex-col gap-3 items-start text-center text-white w-full">
            <h2 className="font-['Pretendard_JP'] font-bold text-[36px] leading-[1.35] tracking-[-0.72px] w-full">
              抜歯?<br />
              まだ早いです!
            </h2>
            <p className="font-['Pretendard_JP'] font-semibold text-[24px] leading-[1.6] tracking-[-0.48px] w-full">
              保存科専門医が最後まで守ります
            </p>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-8 items-start justify-center w-full">
            {/* Doctor Image Card */}
            <div className="bg-white rounded-[20px] shadow-[0px_13px_19px_0px_rgba(0,0,0,0.07)] w-full overflow-hidden">
              <div className="h-[280px] w-full relative overflow-hidden">
                <Image
                  src="/images/cavity-doctor-profile.png"
                  alt="ペ・インヘ保存科院長"
                  fill
                  className="object-cover"
                  style={{ objectPosition: 'center center' }}
                />
              </div>
            </div>

            {/* Doctor Info */}
            <div className="flex flex-col gap-10 items-start text-white w-full">
              {/* Name and Title */}
              <div className="flex flex-col gap-5 items-start w-full">
                <div className="flex gap-[10px] items-center text-center w-full">
                  <h3 className="font-['Pretendard_JP'] font-bold text-[32px] leading-[1.35] tracking-[-0.64px] whitespace-nowrap">
                    ペ・インヘ
                  </h3>
                  <div className="flex flex-col h-full justify-end w-[77px]">
                    <p className="font-['Pretendard_JP'] font-bold text-[18px] leading-[1.5] tracking-[-0.36px]">
                      保存科院長
                    </p>
                  </div>
                </div>
                <div className="font-['Pretendard_JP'] font-bold text-[24px] leading-[1.6] tracking-[-0.48px] whitespace-nowrap">
                  <p>歯科医師・薬剤師 複数免許</p>
                  <p>保健福祉部認証 歯科保存科専門医</p>
                </div>
              </div>

              {/* Credentials List */}
              <ul className="font-['Pretendard_JP'] font-medium text-[15px] leading-[1.4] tracking-[-0.3px] opacity-80 w-full space-y-[10px] list-disc pl-[22.5px]">
                <li>釜山大学校歯科病院 歯科保存科レジデント修了</li>
                <li>釜山大学校 歯医学専門大学院 博士課程修了<br />(歯科保存学)</li>
                <li>歯医学専門大学院 歯医学修士、首席卒業</li>
                <li>大韓歯科保存学会 正会員</li>
                <li>大韓歯科根管治療学会 正会員</li>
                <li>韓国接着歯医学会 正会員</li>
                <li>大韓歯科材料学会 会員</li>
                <li>大韓審美歯科学会 会員</li>
                <li>前）グッドスマイル歯科 院長</li>
                <li>前）プラント歯科 院長</li>
              </ul>

              {/* 保存科専門診療紹介 */}
              <div className="flex flex-col gap-6 items-start w-full">
                <div className="flex flex-col gap-3 items-start w-full">
                  <h4 className="font-['Pretendard_JP'] font-bold text-[24px] leading-[1.35] tracking-[-0.48px]">
                    天然歯を守るための<br />特別な保存治療
                  </h4>
                  <p className="font-['Pretendard_JP'] font-medium text-[15px] leading-[1.6] tracking-[-0.3px] opacity-80">
                    天然歯を守ることを歯科医師の使命と考え、天然歯を最大限保存します。
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm p-5 rounded-2xl w-full">
                  <div className="flex flex-col gap-4 items-start w-full">
                    {/* 診療項目 */}
                    <div className="flex flex-col gap-3 items-start w-full">
                      <div className="flex items-start gap-2 w-full">
                        <div className="shrink-0 w-5 h-5 mt-0.5">
                          <Image
                            src="/icons/check-blue.svg"
                            alt=""
                            width={20}
                            height={20}
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <p className="font-['Pretendard_JP'] font-bold text-[16px] leading-[1.5] tracking-[-0.32px]">
                            根管治療、再根管治療
                          </p>
                          <p className="font-['Pretendard_JP'] font-medium text-[14px] leading-[1.5] tracking-[-0.28px] opacity-80">
                            繊細な術式が求められる根管治療は、歯科保存科の専門分野です。
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2 w-full">
                        <div className="shrink-0 w-5 h-5 mt-0.5">
                          <Image
                            src="/icons/check-blue.svg"
                            alt=""
                            width={20}
                            height={20}
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <p className="font-['Pretendard_JP'] font-bold text-[16px] leading-[1.5] tracking-[-0.32px]">
                            歯髄再生術
                          </p>
                          <p className="font-['Pretendard_JP'] font-medium text-[14px] leading-[1.5] tracking-[-0.28px] opacity-80">
                            いわゆる小児根管治療と呼ばれる歯髄再生術は、成長が止まった永久歯の神経を蘇らせ、歯根を成長させ続けます。
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2 w-full">
                        <div className="shrink-0 w-5 h-5 mt-0.5">
                          <Image
                            src="/icons/check-blue.svg"
                            alt=""
                            width={20}
                            height={20}
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <p className="font-['Pretendard_JP'] font-bold text-[16px] leading-[1.5] tracking-[-0.32px]">
                            外傷歯処置
                          </p>
                          <p className="font-['Pretendard_JP'] font-medium text-[14px] leading-[1.5] tracking-[-0.28px] opacity-80">
                            豊富な臨床経験を通じて、外傷後の歯の予後を事前に診断し、迅速に対応します。
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2 w-full">
                        <div className="shrink-0 w-5 h-5 mt-0.5">
                          <Image
                            src="/icons/check-blue.svg"
                            alt=""
                            width={20}
                            height={20}
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <p className="font-['Pretendard_JP'] font-bold text-[16px] leading-[1.5] tracking-[-0.32px]">
                            歯根端切除術
                          </p>
                          <p className="font-['Pretendard_JP'] font-medium text-[14px] leading-[1.5] tracking-[-0.28px] opacity-80">
                            マイクロスコープを使用して、従来は抜歯が必要だった歯根の炎症を除去して保存する治療です。
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2 w-full">
                        <div className="shrink-0 w-5 h-5 mt-0.5">
                          <Image
                            src="/icons/check-blue.svg"
                            alt=""
                            width={20}
                            height={20}
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <p className="font-['Pretendard_JP'] font-bold text-[16px] leading-[1.5] tracking-[-0.32px]">
                            歯牙再植術
                          </p>
                          <p className="font-['Pretendard_JP'] font-medium text-[14px] leading-[1.5] tracking-[-0.28px] opacity-80">
                            歯を抜歯後、炎症の原因となる部分を除去し、再び植える治療です。
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* 患者様カスタム相談強調 */}
                    <div className="bg-[#006aff]/20 backdrop-blur-sm px-4 py-3 rounded-xl w-full border border-[#006aff]/30">
                      <p className="font-['Pretendard_JP'] font-semibold text-[14px] leading-[1.5] tracking-[-0.28px] text-white">
                        💡 保存科専門医として、すべての診療に関する豊富な経験を基に、患者様と十分な相談を通じて、最も必要な治療を行います。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Microscope Treatment Photo */}
          <div className="bg-white rounded-[20px] shadow-[0px_13px_19px_0px_rgba(0,0,0,0.07)] w-full overflow-hidden">
            <div className="h-[280px] w-full relative overflow-hidden">
              <Image
                src="/images/microscope-treatment-photo.jpg"
                alt="ペ・インヘ院長マイクロスコープ診療風景"
                fill
                className="object-cover"
                style={{ objectPosition: 'center center' }}
              />
            </div>
            <div className="px-5 py-4 bg-gradient-to-r from-blue-50 to-purple-50">
              <p className="font-['Pretendard_JP'] font-bold text-[16px] leading-[1.5] tracking-[-0.32px] text-[#006aff] text-center">
                天然歯を守るための選択
              </p>
              <p className="font-['Pretendard_JP'] font-medium text-[14px] leading-[1.5] tracking-[-0.28px] text-[#5d5f6d] text-center mt-1">
                抜歯せず最後まで保存するため<br />大学病院級マイクロスコープで精密治療します
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
