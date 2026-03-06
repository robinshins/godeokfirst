'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { createClient } from '@/lib/supabase/client';

export default function ComparisonSection() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const supabase = createClient();

    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setIsLoggedIn(!!user);
    };

    checkUser();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsLoggedIn(!!session?.user);
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <div className="bg-[#f8f9fb] w-full py-[60px] px-4">
      <div className="max-w-[375px] mx-auto">
        <div className="flex flex-col gap-10 items-start w-full">
          {/* Title */}
          <div className="flex flex-col gap-3 items-center justify-center text-center w-full">
            <h2 className="font-['Pretendard_JP'] font-bold text-[32px] leading-[1.35] tracking-[-0.64px] text-black w-full">
              Бусад эмнэлгээс<br />
              авахыг санал болгосон шүд
            </h2>
            <p className="font-['Pretendard_JP'] font-semibold text-base leading-[1.4] tracking-[-0.32px] text-[#727582] w-full">
              Мэдиш Шүдний Эмнэлэгт эмчилж хадгалсан
            </p>
          </div>

          {/* Before/After Image */}
          <div className="w-full rounded-[24px] overflow-hidden shadow-[0px_24px_50px_-12px_rgba(45,54,67,0.12)]">
            <div className="relative w-full aspect-[4/3]">
              <Image
                src="/images/cavity-before-after.png"
                alt="Эмчилгээний өмнө дараа харьцуулалт"
                fill
                className="object-cover"
              />
              {/* After badge */}
              <div className="absolute top-0 right-0 w-[140px] h-[62px]">
                <Image
                  src="/images/after-badge.svg"
                  alt=""
                  fill
                  className="object-contain"
                  style={{ transform: 'scaleX(-1)' }}
                />
              </div>
              <div className="absolute top-3 right-3">
                <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-white">
                  Дараа
                </p>
              </div>
              {/* Before label */}
              <div className="absolute top-3 left-3 bg-[#292a2f] rounded-[10px] px-2.5 py-[5px]">
                <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-white">
                  Өмнө
                </p>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white p-5">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <div className="bg-[#fff4e5] px-3 py-1 rounded-full">
                    <p className="font-['Pretendard_JP'] font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#f57400]">
                      Дахин сувгийн эмчилгээ
                    </p>
                  </div>
                </div>
                <p className="font-['Pretendard_JP'] font-bold text-[20px] leading-[1.35] tracking-[-0.4px] text-black">
                  Бусад эмнэлгээс авахыг санал болгосон шүдийг<br />
                  дахин сувгийн эмчилгээгээр хадгалсан
                </p>
                <p className="font-['Pretendard_JP'] font-medium text-[15px] leading-[1.6] tracking-[-0.3px] text-[#5d5f6d]">
                  Бусад эмнэлгээс авахыг санал болгосон байсан ч манай эмнэлэгт микроскоп ашиглан дахин сувгийн эмчилгээ хийж төрөлх шүдийг хадгалж чадсан
                </p>
              </div>
            </div>
          </div>

          {/* Info Box */}
          <div className="bg-gradient-to-r from-[#006aff]/10 to-[#0099ff]/10 p-5 rounded-2xl w-full border border-[#006aff]/20">
            <div className="flex flex-col gap-3 items-start w-full">
              <p className="font-['Pretendard_JP'] font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-[#006aff]">
                💡 Шүд авах нь хамгийн сүүлчийн сонголт
              </p>
              <p className="font-['Pretendard_JP'] font-medium text-[15px] leading-[1.6] tracking-[-0.3px] text-[#2d3643]">
                Шүд авсны дараа имплант эсвэл гүүр хийх шаардлагатай болдог. Төрөлх шүдийг хадгалах боломжтой бол <span className="font-bold text-[#006aff]">хадгалах нь хамгийн сайн сонголт</span> юм.
              </p>
            </div>
          </div>

          {/* CTA */}
          {!isLoggedIn && (
            <div className="bg-white p-6 rounded-[24px] shadow-[0px_24px_50px_-12px_rgba(45,54,67,0.12)] w-full">
              <div className="flex flex-col gap-4 items-center">
                <p className="font-['Pretendard_JP'] font-bold text-[20px] leading-[1.35] tracking-[-0.4px] text-black text-center">
                  Илүү олон тохиолдлыг үзэхийг хүсч байна уу?
                </p>
                <p className="font-['Pretendard_JP'] font-medium text-[15px] leading-[1.6] tracking-[-0.3px] text-[#5d5f6d] text-center">
                  Нэвтэрсний дараа эмчилгээний өмнө/дараа<br />
                  илүү олон зургийг үзэх боломжтой
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
