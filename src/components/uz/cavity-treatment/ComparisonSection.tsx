'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { createClient } from '@/lib/supabase/client';
import { User } from '@supabase/supabase-js';

export default function ComparisonSection() {
  const [user, setUser] = useState<User | null>(null);
  const supabase = createClient();

  useEffect(() => {
    // onAuthStateChange만 사용 (getUser 호출 제거로 egress 절약)
    // INITIAL_SESSION 이벤트가 현재 세션 상태를 제공
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, [supabase.auth]);
  return (
    <div className="bg-[#f3f6fb] w-full py-[60px] px-4">
      <div className="max-w-[375px] mx-auto">
        <div className="flex flex-col gap-[50px] items-start w-full">
          {/* Title */}
          <div className="flex flex-col gap-3 items-start w-full">
            <div className="flex flex-col gap-4 items-center justify-center w-full">
              <div className="flex flex-col gap-3 items-center justify-center w-full">
                <h2 className="font-['Pretendard_JP'] font-bold text-[32px] leading-[1.35] tracking-[-0.64px] text-black text-center w-full">
                  Saqlash falsafasiga amal qiluvchi klinika
                </h2>
              </div>
            </div>
            <p className="font-['Pretendard_JP'] font-semibold text-base leading-[1.4] tracking-[-0.32px] text-[#727582] text-center w-full">
              Tish bir marta yo'qolsa, qaytib kelmaydi<br />
              1 ta tishni ham saqlash haqiqiy mutaxassisning vazifasidir
            </p>
          </div>

          {/* Comparison Table */}
          <div className="relative w-full h-[263px]">
            {/* Oddiy stomatologiya */}
            <div className="absolute left-[10px] top-[20.21px] w-[133px]">
              <div className="flex flex-col gap-[10px] items-start w-full">
                <div className="flex gap-[10.671px] items-start w-full">
                  <h3 className="font-['Pretendard_JP'] font-bold text-[22px] leading-[1.4] tracking-[-0.44px] text-[#37373e] flex-1">
                    Oddiy klinika
                  </h3>
                </div>
                <div className="flex flex-col items-start w-full">
                  <div className="border-b border-[#e9ebf1] py-3 w-full">
                    <p className="font-['Pretendard_JP'] font-bold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#5d5f6d] w-full">
                      Daromadga yo'naltirilgan
                    </p>
                    <p className="font-['Pretendard_JP'] font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#727582] w-full">
                      Sug'urish/implant tavsiya
                    </p>
                  </div>
                  <div className="border-b border-[#e9ebf1] py-3 w-full">
                    <p className="font-['Pretendard_JP'] font-bold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#5d5f6d]">
                      Tezkor davolash
                    </p>
                  </div>
                  <div className="border-b border-[#e9ebf1] py-3 w-full">
                    <p className="font-['Pretendard_JP'] font-bold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#5d5f6d]">
                      Umumiy shifokor
                    </p>
                  </div>
                  <div className="py-3 w-full">
                    <p className="font-['Pretendard_JP'] font-bold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#5d5f6d]">
                      Qimmat implant tavsiya
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Medis stomatologiyasi */}
            <div className="absolute left-[157px] top-[-13px] w-[186px] bg-white border-2 border-[#006aff] rounded-2xl p-5">
              <div className="flex flex-col gap-[10px] items-center justify-center w-full">
                <div className="flex gap-[10.671px] items-start w-full">
                  <h3 className="font-['Pretendard_JP'] font-bold text-[22px] leading-[1.4] tracking-[-0.44px] text-black flex-1">
                    Medis klinikasi
                  </h3>
                </div>
                <div className="flex flex-col items-start w-full">
                  <div className="border-b border-[#e9ebf1] py-3 w-full">
                    <p className="font-['Pretendard_JP'] font-bold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#37373e] w-full">
                      Saqlashga yo'naltirilgan
                    </p>
                    <p className="font-['Pretendard_JP'] font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#006aff] w-full">
                      Tabiiy tishni saqlash birinchi
                    </p>
                  </div>
                  <div className="border-b border-[#e9ebf1] py-3 w-full">
                    <p className="font-['Pretendard_JP'] font-bold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#37373e]">
                      Aniq diagnostika bosqichli davolash
                    </p>
                  </div>
                  <div className="border-b border-[#e9ebf1] py-3 w-full">
                    <p className="font-['Pretendard_JP'] font-bold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#37373e]">
                      Konservativ mutaxassis
                    </p>
                  </div>
                  <div className="py-3 w-full">
                    <p className="font-['Pretendard_JP'] font-bold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#37373e] w-full">
                      Sug'urta qoplanadigan davolash
                    </p>
                    <p className="font-['Pretendard_JP'] font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#006aff] w-full">
                      Bemor xarajatini kamaytirish
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Review Cards */}
          <div className="flex flex-col gap-6 items-start w-full">
            {/* Review 1 */}
            <div className="bg-white border border-[#f3f6fb] rounded-[24px] w-full overflow-hidden">
              <div className="flex flex-col items-center justify-center w-full">
                <div className="flex flex-col gap-5 items-center justify-center px-4 py-6 w-full">
                  <h3 className="font-['Pretendard_JP'] font-bold text-[22px] leading-[1.4] tracking-[-0.44px] text-black text-center w-full">
                    &ldquo;Sug'urilishi kerak degan tishni<br />
                    saqlab bergani uchun juda minnatdorman&rdquo;
                  </h3>
                  <div className="flex flex-col gap-2 items-center justify-center w-full">
                    <div className="flex flex-col gap-4 items-start w-full">
                      {/* Before Image */}
                      <div className="bg-[#f3f6fb] h-48 overflow-hidden relative rounded-[20px] w-full">
                        <div className="absolute h-[227px] left-[-15px] top-[-16px] w-[340px]">
                          <Image
                            src="/images/cavity-before-after.png"
                            alt="Davolashdan oldin"
                            fill
                            className="object-cover"
                            style={{ objectPosition: 'center 0%' }}
                          />
                        </div>

                        {!user && (
                          <Link href="/login" className="absolute inset-0 cursor-pointer z-20">
                            <div className="absolute backdrop-blur-[10px] bg-white/10 inset-0" />
                            <div className="absolute bg-black/40 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full w-[52px] h-[52px] flex items-center justify-center">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17 11H7C5.89543 11 5 11.8954 5 13V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V13C19 11.8954 18.1046 11 17 11Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17Z" fill="white"/>
                                <path d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </div>
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 px-4 py-2 rounded-full">
                              <p className="text-white text-xs font-medium whitespace-nowrap">Before rasmini ko'rish uchun tizimga kiring</p>
                            </div>
                          </Link>
                        )}

                        {/* Before Badge */}
                        <div className="absolute left-0 top-0 p-3 z-10">
                          <div className="bg-[#292a2f] px-2.5 py-1.5 rounded-[10px]">
                            <p className="font-['Pretendard_JP'] font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-white">
                              Before
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* After Image */}
                      <div className="bg-[#f3f6fb] h-48 overflow-hidden relative rounded-[20px] w-full">
                        <div className="absolute h-[221px] left-[-18px] top-[-17px] w-[359px]">
                          <Image
                            src="/images/cavity-before-after.png"
                            alt="Davolashdan keyin"
                            fill
                            className="object-cover"
                            style={{ objectPosition: 'center 100%' }}
                          />
                        </div>

                        {/* After Badge with Gradient */}
                        <div className="absolute left-0 top-0 p-3">
                          <div className="relative">
                            <Image
                              src="/images/after-badge.svg"
                              alt=""
                              width={196}
                              height={86}
                              className="absolute inset-0 rounded-[10px]"
                            />
                            <div className="relative px-2.5 py-1.5">
                              <p className="font-['Pretendard_JP'] font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-white">
                                After
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 items-start text-center w-full">
                    <p className="font-['Pretendard_JP'] font-bold text-base leading-[1.4] tracking-[-0.32px] text-black w-full">
                      Nerv davolash bilan 5 yildan beri tabiiy tishni saqlayapman
                    </p>
                    <p className="font-['Pretendard_JP'] font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#9298a6] w-full">
                      Kim** / 60 yoshli ayol
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Review 2 */}
            <div className="bg-white border border-[#f3f6fb] rounded-[24px] w-full overflow-hidden">
              <div className="flex flex-col items-center justify-center w-full">
                <div className="flex flex-col gap-[19px] items-center justify-center px-4 py-6 w-full">
                  <h3 className="font-['Pretendard_JP'] font-bold text-[22px] leading-[1.4] tracking-[-0.44px] text-black text-center w-full">
                    &ldquo;Implantdan ko'ra tabiiy tish<br />
                    ancha yaxshi&rdquo;
                  </h3>
                  <div className="flex flex-col gap-2 items-center justify-center w-full">
                    <div className="flex flex-col gap-4 items-start w-full">
                      {/* Before Image */}
                      <div className="bg-[#f3f6fb] h-48 overflow-hidden relative rounded-[20px] w-full">
                        <div className="absolute h-[227px] left-[-15px] top-[-16px] w-[340px]">
                          <Image
                            src="/images/cavity-before-after.png"
                            alt="Davolashdan oldin"
                            fill
                            className="object-cover"
                            style={{ objectPosition: 'center 0%' }}
                          />
                        </div>

                        {!user && (
                          <Link href="/login" className="absolute inset-0 cursor-pointer z-20">
                            <div className="absolute backdrop-blur-[10px] bg-white/10 inset-0" />
                            <div className="absolute bg-black/40 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full w-[52px] h-[52px] flex items-center justify-center">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17 11H7C5.89543 11 5 11.8954 5 13V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V13C19 11.8954 18.1046 11 17 11Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17Z" fill="white"/>
                                <path d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </div>
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 px-4 py-2 rounded-full">
                              <p className="text-white text-xs font-medium whitespace-nowrap">Before rasmini ko'rish uchun tizimga kiring</p>
                            </div>
                          </Link>
                        )}

                        {/* Before Badge */}
                        <div className="absolute left-0 top-0 p-3 z-10">
                          <div className="bg-[#292a2f] px-2.5 py-1.5 rounded-[10px]">
                            <p className="font-['Pretendard_JP'] font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-white">
                              Before
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* After Image */}
                      <div className="bg-[#f3f6fb] h-48 overflow-hidden relative rounded-[20px] w-full">
                        <div className="absolute h-[221px] left-[-18px] top-[-17px] w-[359px]">
                          <Image
                            src="/images/cavity-before-after.png"
                            alt="Davolashdan keyin"
                            fill
                            className="object-cover"
                            style={{ objectPosition: 'center 100%' }}
                          />
                        </div>

                        {/* After Badge with Gradient */}
                        <div className="absolute left-0 top-0 p-3">
                          <div className="relative">
                            <Image
                              src="/images/after-badge.svg"
                              alt=""
                              width={196}
                              height={86}
                              className="absolute inset-0 rounded-[10px]"
                            />
                            <div className="relative px-2.5 py-1.5">
                              <p className="font-['Pretendard_JP'] font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-white">
                                After
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 items-start text-center w-full">
                    <p className="font-['Pretendard_JP'] font-bold text-base leading-[1.4] tracking-[-0.32px] text-black w-full">
                      Milk davolash bilan sug'urilish xavfini yengdim
                    </p>
                    <p className="font-['Pretendard_JP'] font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#9298a6] w-full">
                      Lee** / 60 yoshli erkak
                    </p>
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
