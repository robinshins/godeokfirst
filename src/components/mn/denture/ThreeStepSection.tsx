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
 Godeok First Dental-ийн онцгой <br />
              3шатлалын түр шүд
            </h2>
            <p className="text-base font-semibold leading-[1.4] tracking-[-0.02em] text-[#727582]">
 түршүд <br />
 3шатлал нарийвчилсан тохируулга <br />
 шүд тухтай байдал 
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
                alt="1зөрүү түр"
                width={80}
                height={80}
              />
            </div>
            <p className="text-[17px] font-bold leading-[1.5] tracking-[-0.02em] text-[#008095]">
              1зөрүү түр
            </p>
            <p className="text-2xl font-bold leading-[1.35] tracking-[-0.02em] text-black">
 даруй удаа 
            </p>
            <p className="text-[17px] font-bold leading-[1.5] tracking-[-0.02em] text-[#5d5f6d] text-center">
 мэс заслын дараа шууд, шууд суулгалт <br />
 боломжтой
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-[24px] shadow-[0px_24px_50px_-12px_rgba(45,54,67,0.12)] p-6 flex flex-col gap-[14px] items-center">
            <div className="w-20 h-20">
              <Image
                src="/icons/crown.svg"
 alt="2зөрүү зуун"
                width={80}
                height={80}
              />
            </div>
            <p className="text-[17px] font-bold leading-[1.5] tracking-[-0.02em] text-[#008095]">
 2зөрүү зуун 
            </p>
            <p className="text-2xl font-bold leading-[1.35] tracking-[-0.02em] text-black">
              нарийвчилсан зуун тохируулга
            </p>
            <p className="text-[17px] font-bold leading-[1.5] tracking-[-0.02em] text-[#5d5f6d] text-center">
 2 төрөл <br />
 зуун нас тохируулга
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-[24px] shadow-[0px_24px_50px_-12px_rgba(45,54,67,0.12)] p-6 flex flex-col gap-[14px] items-center">
            <div className="w-20 h-20">
              <Image
                src="/icons/implant-group.svg"
                alt="3зөрүү эцсийн түр"
                width={80}
                height={80}
              />
            </div>
            <p className="text-[17px] font-bold leading-[1.5] tracking-[-0.02em] text-[#008095]">
              3зөрүү эцсийн түр
            </p>
            <p className="text-2xl font-bold leading-[1.35] tracking-[-0.02em] text-black">
 зуун шалгалт
            </p>
            <p className="text-[17px] font-bold leading-[1.5] tracking-[-0.02em] text-[#5d5f6d] text-center">
 эцсийн хиймэл шүд үйлдвэрлэл <br />
 төгс зуун шалгалт
            </p>
          </div>

          {/* Final Step */}
          <div className="bg-white rounded-[24px] shadow-[0px_24px_50px_-12px_rgba(45,54,67,0.12)] p-6 flex flex-col gap-[14px] items-center">
            <div className="w-20 h-20">
              <Image
                src="/icons/tooth-shine.svg"
                alt="эцсийн хиймэл шүд"
                width={80}
                height={80}
              />
            </div>
            <p className="text-[17px] font-bold leading-[1.5] tracking-[-0.02em] text-[#008095]">
              эцсийн хиймэл шүд
            </p>
            <p className="text-2xl font-bold leading-[1.35] tracking-[-0.02em] text-black">
 насан туршдаа шүд
            </p>
            <p className="text-[17px] font-bold leading-[1.5] tracking-[-0.02em] text-[#5d5f6d] text-center">
 тохируулга дууссан <br />
 эцсийн хиймэл шүд суулгалт
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
