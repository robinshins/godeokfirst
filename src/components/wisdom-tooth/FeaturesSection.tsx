'use client';

export default function FeaturesSection() {
  return (
    <div className="bg-white w-full py-[60px] px-4">
      <div className="max-w-[375px] mx-auto">
        <div className="flex flex-col gap-10 items-start w-full">

          {/* Title */}
          <div className="flex flex-col gap-3 items-center justify-center text-center w-full">
            <p className="text-[13px] font-bold text-[#008095] tracking-[3px] uppercase">PAINLESS & PRECISE</p>
            <h2 className="font-bold text-[32px] leading-[1.35] tracking-[-0.64px] text-black">
              안 아프고<br />
              <span className="text-[#008095]">정확하게 뽑습니다</span>
            </h2>
            <p className="font-semibold text-base leading-[1.5] tracking-[-0.32px] text-[#727582]">
              대학병원 외래교수 역임 원장의<br />
              체계적인 통증 완화 시스템
            </p>
          </div>

          {/* 2단계 통증 완화 */}
          <div className="flex flex-col gap-4 w-full">
            {[
              {
                step: '01',
                title: '도포 · 가글 마취',
                desc: '주사 바늘의 따끔함부터 없앱니다. 표면 마취로 마취 주사 자체의 통증을 최소화합니다.',
                color: '#e0f4f6',
                textColor: '#008095',
              },
              {
                step: '02',
                title: '전동 무통 마취기',
                desc: '컴퓨터가 자동으로 주입 속도를 조절해 마취액이 천천히, 균일하게 들어가 통증이 거의 없습니다.',
                color: '#008095',
                textColor: '#ffffff',
                highlight: true,
              },
            ].map((item) => (
              <div
                key={item.step}
                className="rounded-[20px] p-5 flex gap-4 items-start"
                style={{ backgroundColor: item.color }}
              >
                <span
                  className="font-black text-[28px] leading-none flex-shrink-0 mt-1"
                  style={{ color: item.highlight ? 'rgba(255,255,255,0.4)' : '#008095', opacity: item.highlight ? 1 : 0.3 }}
                >
                  {item.step}
                </span>
                <div className="flex flex-col gap-1">
                  <p
                    className="font-bold text-[17px] leading-[1.4] tracking-[-0.34px]"
                    style={{ color: item.textColor }}
                  >
                    {item.title}
                  </p>
                  <p
                    className="font-medium text-[14px] leading-[1.6] tracking-[-0.28px]"
                    style={{ color: item.highlight ? 'rgba(255,255,255,0.85)' : '#555' }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* 대학병원급 난이도 발치 */}
          <div className="rounded-[24px] border-2 border-[#008095] bg-white p-6 flex flex-col gap-5 items-center w-full">
            <div className="flex flex-col gap-3 items-center w-full">
              <div className="w-16 h-16 bg-[#008095] rounded-full flex items-center justify-center">
                <span className="text-[32px]">🏥</span>
              </div>
              <h3 className="font-bold text-[24px] leading-[1.35] tracking-[-0.48px] text-black text-center">
                대학병원급 난이도 발치
              </h3>
              <p className="font-semibold text-[15px] leading-[1.5] tracking-[-0.3px] text-[#727582] text-center">
                일반 치과에서<br />
                &quot;큰 병원 가보세요&quot; 들어보셨나요?
              </p>
            </div>
            <div className="bg-[#f3f6fb] rounded-[16px] p-5 flex flex-col gap-3 w-full">
              {[
                { label: '복잡한 매복 사랑니', desc: '잇몸 속 깊이 묻혀있어도 OK' },
                { label: '신경 근접 사랑니', desc: '신경 손상 걱정 없는 안전한 발치' },
                { label: '수평 매복 사랑니', desc: '옆으로 누워있는 어려운 케이스도 가능' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="text-[#008095] text-lg shrink-0">✓</span>
                  <p className="font-semibold text-[14px] leading-[1.5] tracking-[-0.28px] text-[#37373e]">
                    <span className="font-bold text-[#008095]">{item.label}</span> — {item.desc}
                  </p>
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-br from-[#008095] to-[#006d80] rounded-[16px] p-4 w-full">
              <p className="font-bold text-[15px] leading-[1.5] tracking-[-0.3px] text-white text-center">
                조선대 치과병원 외래교수 역임 원장이<br />
                직접 안전하게 해결합니다
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
