'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/client';
import { User } from '@supabase/supabase-js';

export default function BeforeAfterSection() {
  const [showMore, setShowMore] = useState(false);
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

  const cases = [
    {
      name: 'Kim ●●',
      gender: 'Female, 60s',
      type: 'Implant',
      beforeImage: '/images/xray-implant-before1.jpg',
      afterImage: '/images/xray-implant-after1.jpg'
    },
    {
      name: 'Lee ●●',
      gender: 'Male, 50s',
      type: 'Implant',
      beforeImage: '/images/xray-implant-before2.jpg',
      afterImage: '/images/xray-implant-after2.jpg'
    },
    {
      name: 'Park ●●',
      gender: 'Female, 60s',
      type: 'Implant',
      beforeImage: '/images/xray-implant-before3.jpg',
      afterImage: '/images/xray-implant-after3.jpg'
    },
    {
      name: 'Choi ●●',
      gender: 'Male, 70s',
      type: 'Implant',
      beforeImage: '/images/xray-implant-before4.jpg',
      afterImage: '/images/xray-implant-after4.jpg'
    },
    {
      name: 'Jung ●●',
      gender: 'Female, 60s',
      type: 'Full Implant',
      beforeImage: '/images/xray-full-implant-before1.jpg',
      afterImage: '/images/xray-full-implant-after1.jpg'
    },
    {
      name: 'Han ●●',
      gender: 'Male, 70s',
      type: 'Full Implant',
      beforeImage: '/images/xray-full-implant-before2.jpg',
      afterImage: '/images/xray-full-implant-after2.jpg'
    },
    {
      name: 'Yoon ●●',
      gender: 'Female, 60s',
      type: 'Full Implant',
      beforeImage: '/images/xray-full-implant-before3.jpg',
      afterImage: '/images/xray-full-implant-after3.jpg'
    },
    {
      name: 'Kang ●●',
      gender: 'Female, 70s',
      type: 'Full Implant',
      beforeImage: '/images/xray-full-implant-before4.jpg',
      afterImage: '/images/xray-full-implant-after4.jpg'
    }
  ];

  const displayedCases = showMore ? cases : cases.slice(0, 3);

  return (
    <div className="bg-[#f3f6fb] w-full flex justify-center">
      <div className="box-border flex flex-col gap-[50px] items-start px-4 py-[60px] relative w-full max-w-[430px]">
        {/* Header */}
        <div className="flex flex-col gap-3 items-start relative shrink-0 w-full">
          <div className="flex flex-col gap-4 items-center justify-center relative shrink-0 w-full">
            <div className="flex flex-col gap-3 items-center justify-center relative shrink-0 w-full">
              <h2 className="font-bold leading-[1.35] not-italic text-[32px] text-black text-center tracking-[-0.64px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                Digital Guide<br />
                Implant Before/After Cases
              </h2>
            </div>
          </div>
        </div>

        {/* Cases */}
        <div className="flex flex-col gap-6 items-start relative shrink-0 w-full">
          {displayedCases.map((caseItem, index) => (
            <div key={index} className="bg-white border border-[#f3f6fb] border-solid rounded-[24px] shrink-0 w-full">
              <div className="flex flex-col items-center justify-center overflow-hidden rounded-[inherit] w-full">
                <div className="box-border flex flex-col gap-5 items-center justify-center px-4 py-6 relative shrink-0 w-full">
                  <div className="flex flex-col gap-2 items-center justify-center relative shrink-0 w-full">
                    <div className="flex flex-col gap-2 items-center justify-center relative shrink-0 w-full">
                      <div className="flex flex-col gap-4 items-start relative shrink-0 w-full">
                        {/* Before Image */}
                        <div className="bg-[#f3f6fb] h-[192px] overflow-hidden relative rounded-[20px] shrink-0 w-full">
                          <div className="relative w-full h-full">
                            <Image
                              src={caseItem.beforeImage}
                              alt="Before"
                              fill
                              className="object-cover"
                            />
                          </div>
                          {/* Blur overlay for non-logged in users */}
                          {!user && (
                            <Link href="/en/login" className="absolute inset-0 cursor-pointer">
                              <div className="absolute backdrop-blur-[10px] bg-[rgba(255,255,255,0.1)] inset-0" />
                              <div className="absolute bg-black/40 left-1/2 overflow-hidden rounded-full w-[52px] h-[52px] top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M17 11H7C5.89543 11 5 11.8954 5 13V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V13C19 11.8954 18.1046 11 17 11Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                  <path d="M12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17Z" fill="white"/>
                                  <path d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                              </div>
                              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 px-4 py-2 rounded-full">
                                <p className="text-white text-xs font-medium whitespace-nowrap">Login to see Before photo</p>
                              </div>
                            </Link>
                          )}
                          {/* Before Badge */}
                          <div className="absolute box-border flex flex-col gap-2.5 items-start left-0 p-3 top-0 z-10">
                            <div className="bg-[#292a2f] box-border flex flex-col gap-2.5 items-center justify-center px-2.5 py-[5px] relative rounded-[10px] shrink-0">
                              <p className="font-semibold leading-[1.4] not-italic text-[13px] text-nowrap text-white tracking-[-0.26px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                                Before
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* After Image */}
                        <div className="bg-[#f3f6fb] h-[192px] overflow-hidden relative rounded-[20px] shrink-0 w-full">
                          <div className="relative w-full h-full">
                            <Image
                              src={caseItem.afterImage}
                              alt="After"
                              fill
                              className="object-cover"
                            />
                          </div>
                          {/* After Badge SVG */}
                          <div className="absolute h-[86px] left-[-5px] top-[-2px] w-[196px]">
                            <Image
                              src="/images/after-badge.svg"
                              alt=""
                              width={196}
                              height={86}
                              className="w-full h-full"
                            />
                          </div>
                          {/* After Text */}
                          <div className="absolute box-border flex flex-col gap-2.5 items-start left-0 p-3 top-0">
                            <div className="box-border flex flex-col gap-2.5 items-center justify-center px-2.5 py-[5px] relative rounded-[10px] shrink-0">
                              <p className="font-semibold leading-[1.4] not-italic text-[13px] text-nowrap text-white tracking-[-0.26px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                                After
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 items-start relative shrink-0 w-full">
                    <p className="font-semibold leading-[1.4] not-italic text-[#9298a6] text-[15px] text-center tracking-[-0.3px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                      {caseItem.type} · {caseItem.name} · {caseItem.gender}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* More Button */}
          {!showMore && (
            <button
              onClick={() => setShowMore(true)}
              className="bg-white border border-[#e9ebf1] border-solid box-border flex h-16 items-center justify-center px-6 py-4 relative rounded-[18px] shrink-0 w-full hover:bg-gray-50 transition-colors"
            >
              <span className="font-bold leading-[1.5] not-italic text-[#006aff] text-xl text-nowrap tracking-[-0.4px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                View More Reviews
              </span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
