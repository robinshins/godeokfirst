'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { createClient } from '@/lib/supabase/client';
import { User } from '@supabase/supabase-js';

export default function CaseStudySection() {
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
    <div className="w-full py-[60px]">
      <div className="max-w-[375px] mx-auto px-4">
        <div className="flex flex-col gap-10 items-center w-full">
          {/* Title */}
          <div className="flex flex-col gap-4 items-center justify-center w-full">
            <div className="flex flex-col gap-3 items-center justify-center text-center w-full">
              <h2 className="font-bold text-[32px] leading-[1.35] tracking-[-0.64px] text-black w-full">
                Особенность нашего отбеливания<br />
                Реальные случаи
              </h2>
              <p className="font-semibold text-base leading-[1.4] tracking-[-0.32px] text-[#727582] w-full">
                Более 1,000 процедур отбеливания подтверждают эффективность
              </p>
            </div>
          </div>

          {/* Case Cards Container */}
          <div className="flex flex-col gap-4 w-full">
            {/* Case Card 1 */}
            <div className="bg-white border border-[#f3f6fb] rounded-[20px] w-full">
              <div className="flex flex-col items-center justify-center overflow-hidden rounded-[inherit] w-full">
                <div className="bg-white flex flex-col gap-6 items-end justify-center p-6 w-full">
                  <div className="flex flex-col gap-2 items-center justify-center w-full">
                    <div className="flex flex-col gap-2 items-center justify-center w-full">
                      <div className="flex flex-col gap-4 items-start w-full">
                        {/* Before Image */}
                        <div className="bg-[#f3f6fb] h-[192px] overflow-hidden relative rounded-[20px] w-full">
                          <Image
                            src="/images/whitening-before-after/pre-treatment.jpg"
                            alt="До отбеливания"
                            fill
                            className="object-cover"
                          />
                          {!user && (
                            <Link href="/ru/login" className="absolute inset-0 cursor-pointer">
                              <div className="absolute inset-0 backdrop-blur-[10px] bg-white/10" />
                              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/40 rounded-full w-[52px] h-[52px] flex items-center justify-center">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M17 11H7C5.89543 11 5 11.8954 5 13V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V13C19 11.8954 18.1046 11 17 11Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                  <path d="M12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17Z" fill="white"/>
                                  <path d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                              </div>
                              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 px-4 py-2 rounded-full">
                                <p className="text-white text-xs font-medium whitespace-nowrap">Войдите, чтобы увидеть До</p>
                              </div>
                            </Link>
                          )}
                          <div className="absolute top-0 left-0 p-3 z-10">
                            <div className="bg-[#292a2f] rounded-[10px] px-2.5 py-[5px]">
                              <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-white whitespace-pre">
                                До
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* After Image */}
                        <div className="bg-[#f3f6fb] h-[192px] overflow-hidden relative rounded-[20px] w-full">
                          <Image
                            src="/images/whitening-before-after/post-treatment.jpg"
                            alt="После отбеливания"
                            fill
                            className="object-cover"
                          />
                          <div className="absolute top-0 left-0 w-[196px] h-[86px]">
                            <Image
                              src="/images/after-badge.svg"
                              alt=""
                              fill
                              className="object-contain"
                            />
                          </div>
                          <div className="absolute top-0 left-0 p-3">
                            <div className="rounded-[10px] px-2.5 py-[5px]">
                              <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-white whitespace-pre">
                                После
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

            {/* Case Card 2 */}
            <div className="bg-white border border-[#f3f6fb] rounded-[20px] w-full">
              <div className="flex flex-col items-center justify-center overflow-hidden rounded-[inherit] w-full">
                <div className="bg-white flex flex-col gap-6 items-end justify-center p-6 w-full">
                  <div className="flex flex-col gap-2 items-center justify-center w-full">
                    <div className="flex flex-col gap-2 items-center justify-center w-full">
                      <div className="flex flex-col gap-4 items-start w-full">
                        {/* Before Image */}
                        <div className="bg-[#f3f6fb] h-[192px] overflow-hidden relative rounded-[20px] w-full">
                          <Image
                            src="/images/whitening-before-after/pre-treatment2.jpg"
                            alt="До отбеливания"
                            fill
                            className="object-cover"
                          />
                          {!user && (
                            <Link href="/ru/login" className="absolute inset-0 cursor-pointer">
                              <div className="absolute inset-0 backdrop-blur-[10px] bg-white/10" />
                              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/40 rounded-full w-[52px] h-[52px] flex items-center justify-center">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M17 11H7C5.89543 11 5 11.8954 5 13V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V13C19 11.8954 18.1046 11 17 11Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                  <path d="M12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17Z" fill="white"/>
                                  <path d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                              </div>
                              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 px-4 py-2 rounded-full">
                                <p className="text-white text-xs font-medium whitespace-nowrap">Войдите, чтобы увидеть До</p>
                              </div>
                            </Link>
                          )}
                          <div className="absolute top-0 left-0 p-3 z-10">
                            <div className="bg-[#292a2f] rounded-[10px] px-2.5 py-[5px]">
                              <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-white whitespace-pre">
                                До
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* After Image */}
                        <div className="bg-[#f3f6fb] h-[192px] overflow-hidden relative rounded-[20px] w-full">
                          <Image
                            src="/images/whitening-before-after/post-treatment2.jpg"
                            alt="После отбеливания"
                            fill
                            className="object-cover"
                          />
                          <div className="absolute top-0 left-0 w-[196px] h-[86px]">
                            <Image
                              src="/images/after-badge.svg"
                              alt=""
                              fill
                              className="object-contain"
                            />
                          </div>
                          <div className="absolute top-0 left-0 p-3">
                            <div className="rounded-[10px] px-2.5 py-[5px]">
                              <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-white whitespace-pre">
                                После
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

            {/* Button */}
            {!user && (
              <Link href="/ru/login" className="w-full">
                <button className="bg-white border border-[#e9ebf1] rounded-[18px] h-16 px-6 py-4 flex items-center justify-center w-full hover:bg-gray-50 transition-colors">
                  <p className="font-bold text-[20px] leading-[1.5] tracking-[-0.4px] text-[#006aff] whitespace-pre">
                    Войти и посмотреть все
                  </p>
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
