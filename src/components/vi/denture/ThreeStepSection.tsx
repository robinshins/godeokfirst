import Image from 'next/image';

export default function ThreeStepSection() {
  return (
    <div className="bg-white py-[60px] px-4 relative">
      {/* Background gradient effect */}
      <div className="absolute left-1/2 top-[379px] -translate-x-1/2 w-[480px] h-[636px] pointer-events-none opacity-30">
        <div className="absolute inset-0 bg-gradient-radial from-blue-200/40 to-transparent blur-3xl"></div>
      </div>

      <div className="w-full relative">
        {/* Header */}
        <div className="flex flex-col gap-4 items-center mb-10">
          {/* Logo */}
          <div className="h-6 w-[168px]">
            <svg width="168" height="24" viewBox="0 0 168 24" fill="none">
              <text x="0" y="18" fontFamily="Pretendard" fontSize="18" fontWeight="700" fill="#008095">
                Godeok First Dental
              </text>
            </svg>
          </div>

          {/* Title */}
          <div className="flex flex-col gap-3 text-center">
            <h2 className="text-[32px] font-bold leading-[1.35] tracking-[-0.02em] text-black">
              Hệ thống độc quyền<br />chỉ có tại Godeok First Dental<br />
              Răng tạm 3 giai đoạn
            </h2>
            <p className="text-base font-semibold leading-[1.4] tracking-[-0.02em] text-[#727582]">
              Không chỉ kết thúc với một lần răng tạm<br />
              Qua 3 giai đoạn điều chỉnh chính xác<br />
              tạo sự thoải mái như răng thật
            </p>
          </div>
        </div>

        {/* 4 Step Cards */}
        <div className="flex flex-col gap-6">
          {/* Step 1 */}
          <div className="bg-white rounded-[24px] shadow-[0px_24px_50px_-12px_rgba(45,54,67,0.12)] p-6 flex flex-col gap-[14px] items-center">
            <div className="w-20 h-20">
              <Image
                src="/icons/tooth.svg"
                alt="Tạm thời lần 1"
                width={80}
                height={80}
              />
            </div>
            <p className="text-[17px] font-bold leading-[1.5] tracking-[-0.02em] text-[#008095]">
              Tạm thời lần 1
            </p>
            <p className="text-2xl font-bold leading-[1.35] tracking-[-0.02em] text-black">
              Phục hồi ngay
            </p>
            <p className="text-[17px] font-bold leading-[1.5] tracking-[-0.02em] text-[#5d5f6d] text-center">
              Gắn ngay sau phẫu thuật<br />
              có thể sinh hoạt bình thường ngay
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-[24px] shadow-[0px_24px_50px_-12px_rgba(45,54,67,0.12)] p-6 flex flex-col gap-[14px] items-center">
            <div className="w-20 h-20">
              <Image
                src="/icons/crown.svg"
                alt="Ổn định khớp cắn lần 2"
                width={80}
                height={80}
              />
            </div>
            <p className="text-[17px] font-bold leading-[1.5] tracking-[-0.02em] text-[#008095]">
              Ổn định khớp cắn lần 2
            </p>
            <p className="text-2xl font-bold leading-[1.35] tracking-[-0.02em] text-black">
              Điều chỉnh khớp cắn chính xác
            </p>
            <p className="text-[17px] font-bold leading-[1.5] tracking-[-0.02em] text-[#5d5f6d] text-center">
              Sau 2 tuần, tùy chỉnh<br />
              điều chỉnh tinh vi tình trạng khớp cắn
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-[24px] shadow-[0px_24px_50px_-12px_rgba(45,54,67,0.12)] p-6 flex flex-col gap-[14px] items-center">
            <div className="w-20 h-20">
              <Image
                src="/icons/implant-group.svg"
                alt="Tạm thời cuối cùng lần 3"
                width={80}
                height={80}
              />
            </div>
            <p className="text-[17px] font-bold leading-[1.5] tracking-[-0.02em] text-[#008095]">
              Tạm thời cuối cùng lần 3
            </p>
            <p className="text-2xl font-bold leading-[1.35] tracking-[-0.02em] text-black">
              Xác nhận khớp cắn hoàn hảo
            </p>
            <p className="text-[17px] font-bold leading-[1.5] tracking-[-0.02em] text-[#5d5f6d] text-center">
              Trước khi chế tạo phục hình cuối<br />
              kiểm tra lại khớp cắn hoàn hảo một lần nữa
            </p>
          </div>

          {/* Final Step */}
          <div className="bg-white rounded-[24px] shadow-[0px_24px_50px_-12px_rgba(45,54,67,0.12)] p-6 flex flex-col gap-[14px] items-center">
            <div className="w-20 h-20">
              <Image
                src="/icons/tooth-shine.svg"
                alt="Phục hình cuối"
                width={80}
                height={80}
              />
            </div>
            <p className="text-[17px] font-bold leading-[1.5] tracking-[-0.02em] text-[#008095]">
              Phục hình cuối
            </p>
            <p className="text-2xl font-bold leading-[1.35] tracking-[-0.02em] text-black">
              Răng của tôi suốt đời
            </p>
            <p className="text-[17px] font-bold leading-[1.5] tracking-[-0.02em] text-[#5d5f6d] text-center">
              Phục hình cuối được cá nhân hóa hoàn hảo<br />
              sau khi hoàn tất tất cả điều chỉnh
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
