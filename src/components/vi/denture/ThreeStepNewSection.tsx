'use client';

import Image from 'next/image';

export default function ThreeStepNewSection() {
  const steps = [
    {
      icon: '/icons/tooth.svg',
      label: 'Tạm thời lần 1',
      title: 'Phục hồi ngay',
      description: 'Lắp ngay sau phẫu thuật\ncó thể sinh hoạt bình thường ngay'
    },
    {
      icon: '/icons/crown.svg',
      label: 'Ổn định khớp cắn lần 2',
      title: 'Điều chỉnh khớp cắn chính xác',
      description: 'Sau 2 tuần điều chỉnh\nkhớp cắn tinh vi theo yêu cầu'
    },
    {
      icon: '/icons/implant-group.svg',
      label: 'Tạm thời cuối cùng lần 3',
      title: 'Xác nhận khớp cắn hoàn hảo',
      description: 'Xác nhận lại khớp cắn hoàn hảo\ntrước khi chế tạo phục hình cuối'
    },
    {
      icon: '/icons/tooth-shine.svg',
      label: 'Phục hình cuối',
      title: 'Răng của tôi suốt đời',
      description: 'Gắn phục hình cuối được cá nhân hóa hoàn hảo\nsau khi hoàn tất tất cả điều chỉnh'
    }
  ];

  return (
    <div className="bg-white w-full flex justify-center">
      <div className="box-border flex flex-col gap-10 items-start px-4 py-[60px] relative w-full max-w-[430px]">
      {/* Background gradient effect */}
      <div className="absolute h-[636px] left-[calc(50%+5.5px)] top-[379px] -translate-x-1/2 w-[480px] pointer-events-none">
        <div className="absolute inset-[-62.89%_-83.33%]">
          <Image
            src="/images/three-step-gradient.svg"
            alt=""
            fill
            className="block max-w-none object-contain"
          />
        </div>
      </div>

      {/* Header */}
      <div className="flex flex-col gap-4 items-center justify-center relative shrink-0 w-full z-10">
        {/* Logo */}
        <div className="h-6 overflow-clip relative shrink-0 w-[168px]">
          <Image
            src="/고덕퍼스트치과-로고-(블랙).png"
            alt="Godeok First Dental"
            width={375}
            height={84}
            className="w-full h-full"
          />
        </div>

        {/* Title */}
        <div className="flex flex-col gap-3 items-center justify-center leading-[0] not-italic relative shrink-0 text-center w-full">
          <h2 className="font-bold leading-[1.35] text-[32px] text-black tracking-[-0.64px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            Hệ thống độc quyền<br />chỉ có tại Godeok First Dental<br />
            Răng tạm 3 giai đoạn
          </h2>
          <p className="font-semibold leading-[1.4] text-[#727582] text-base tracking-[-0.32px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            Không chỉ kết thúc với một lần răng tạm<br />
            Qua 3 giai đoạn điều chỉnh chính xác<br />
            tạo sự thoải mái như răng thật
          </p>
        </div>
      </div>

      {/* Step Cards */}
      <div className="flex flex-col gap-10 items-start relative shrink-0 w-full z-10">
        <div className="flex flex-col gap-6 items-start relative shrink-0 w-full">
          {steps.map((step, index) => (
            <div key={index} className="bg-white box-border flex flex-col gap-[14px] items-center justify-center p-6 relative rounded-[24px] shadow-[0px_24px_50px_-12px_rgba(45,54,67,0.12)] shrink-0 w-full">
              {/* Icon */}
              <div className="relative shrink-0 size-[80px]">
                <Image
                  src={step.icon}
                  alt={step.label}
                  width={80}
                  height={80}
                  className="w-full h-full"
                />
              </div>

              {/* Label */}
              <p className="font-bold leading-[1.5] not-italic text-[#008095] text-[17px] text-center tracking-[-0.34px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                {step.label}
              </p>

              {/* Title */}
              <p className="font-bold leading-[1.35] not-italic text-2xl text-black text-center tracking-[-0.48px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                {step.title}
              </p>

              {/* Description */}
              <p className="font-bold leading-[1.5] not-italic text-[#5d5f6d] text-[17px] text-center tracking-[-0.34px] w-full whitespace-pre-line" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
}
