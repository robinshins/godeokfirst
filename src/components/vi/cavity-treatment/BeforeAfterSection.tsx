'use client';

import Image from 'next/image';

const cases = [
  {
    name: 'Kim●●',
    type: 'sâu răng resin phục hồi',
    badgeColor: 'bg-[#fff9ec]',
    badgeTextColor: 'text-[#ffc53d]',
    title: 'Phục hồi răng bị tổn thương do sâu răng bằng resin',
    before: '/임상사진/sâu răng/김효연_sâu răng_before.jpg',
    after: '/임상사진/sâu răng/김효연_sâu răng_after.jpg',
    description: 'Hoàn thành phục hồi resin phù hợp màu răng tự nhiên sau khi loại bỏ sâu răng',
  },
  {
    name: 'Kim●●',
    type: 'Phục hồi mão răng vết nứt',
    badgeColor: 'bg-[#fef1e5]',
    badgeTextColor: 'text-[#f57400]',
    title: 'Bảo vệ bằng mão răng khi đau do nứt răng',
    before: '/임상사진/vết nứt/김고운_vết nứt_실사_before.jpg',
    after: '/임상사진/vết nứt/김고운_vết nứt_실사_after.jpg',
    description: 'Phục hồi an toàn răng bị nứt tiến triển bằng mão răng',
  },
  {
    name: 'chính●●',
    type: 'Phục hồi phục hình răng cửa',
    badgeColor: 'bg-[#e8f4fd]',
    badgeTextColor: 'text-[#0088cc]',
    title: 'Phục hồi tự nhiên răng cửa bị tổn thương bằng phục hình',
    before: '/임상사진/chính재윤_앞니보철/chính재윤_앞니보철_실제사진_before.jpg',
    after: '/임상사진/chính재윤_앞니보철/chính재윤_앞니보철_실제사진_after.jpg',
    description: 'Phục hồi cả thẩm mỹ và chức năng bằng phục hình răng cửa',
  },
  {
    name: 'chính●●',
    type: 'Mão răng thẩm mỹ răng cửa',
    badgeColor: 'bg-[#ffebed]',
    badgeTextColor: 'text-[#ff1616]',
    title: 'Cải thiện răng cửa đổi màu bằng phục hình thẩm mỹ',
    before: '/임상사진/chính민아B_앞니 보철/chính민아B_앞니심미보철크라운_before.jpg',
    after: '/임상사진/chính민아B_앞니 보철/chính민아B_앞니심미보철크라운_after.jpg',
    description: 'Hoàn thành răng cửa tự nhiên bằng mão răng thẩm mỹ',
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
                Điều trị sâu răng·phục hình,<br />
                Trường hợp trước sau để xác nhận
              </h2>
              <p className="font-['Pretendard_JP'] font-semibold text-base leading-[1.4] tracking-[-0.32px] text-[#e9ebf1] w-full">
                Ảnh lâm sàng trước·sau điều trị<br />
                của bệnh nhân thực tế
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
                          alt="điều trị trước"
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
                          alt="điều trị sau"
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
                    {c.name}  | {c.description}
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
