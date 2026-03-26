import Image from 'next/image';

export default function WhyBestSection() {
  return (
    <div className="bg-white">
      <div className="max-w-[430px] mx-auto">
        {/* Section Header */}
        <div className="text-center py-[60px]">
          <div className="flex justify-center items-center mb-4">
            <div className="h-11 relative shrink-0 overflow-hidden">
              <Image
                src="/고덕퍼스트치과-로고-(블랙).png"
                alt="Godeok First Dental"
                width={375}
                height={84}
                className="h-20 w-auto object-contain -mt-[18px]"
              />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-black leading-[1.35]">
            Why Godeok First Dental
            <br />
            is the Best
          </h2>
        </div>

        {/* Reason 1: 통합치의학전문의 */}
        <div className="px-4 py-8 bg-white">
          <div className="text-center mb-10">
            <p className="text-3xl font-bold text-[#008095] mb-3">1</p>
            <h3 className="text-3xl font-bold text-[#21314E] mb-3 leading-[1.35]">
              Government Certified
              <br />
              Comprehensive Dentistry Specialist
            </h3>
            <p className="text-[14px] font-semibold text-[#727582]">
              The head doctor handles consultation, surgery, and aftercare
            </p>
          </div>

          {/* 보건복지부 인증 이미지 */}
          <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-md">
            <Image
              src="/images/goduk_images/원장이력 등 걸려있는사진.jpg"
              alt="Government certified specialist credentials"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Reason 2: 임플란트 연구자문위원 */}
        <div className="px-4 py-8 bg-gradient-to-b from-[#331f0c] via-[#584025] to-[#866947]">
          <div className="text-center mb-10">
            <p className="text-3xl font-bold text-white mb-3">2</p>
            <h3 className="text-3xl font-bold text-[#f3f6fb] mb-3 leading-[1.35]">
              Osstem, Point, Dentis
              <br />
              Implant Research Advisor
            </h3>
            <p className="text-[14px] font-semibold text-[#e9ebf1]">
              Research advisor for Korea&apos;s leading implant companies,
              <br />
              utilizing the latest technology and equipment
            </p>
          </div>

          {/* 각종 인증서 이미지 */}
          <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-md">
            <Image
              src="/images/goduk_images/각종인증서.png"
              alt="Various implant company certifications"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Reason 3: 최신 디지털 장비 */}
        <div className="px-2 py-8 bg-white">
          <div className="text-center mb-10">
            <p className="text-3xl font-bold text-[#008095] mb-3">3</p>
            <h3 className="text-3xl font-bold text-[#21314E] mb-3 leading-[1.35]">
              State-of-the-Art Digital Equipment
            </h3>
            <p className="text-base font-semibold text-[#727582]">
              3D CT, digital scanner, digital guide surgery system
              <br />
              providing precise treatment with cutting-edge equipment
            </p>
          </div>

          {/* 시설 이미지 스크롤 */}
          <div className="overflow-x-auto flex gap-3 pb-4">
            <div className="flex-none w-[320px] aspect-[4/3] rounded-xl overflow-hidden relative shadow-md">
              <Image
                src="/images/goduk_images/스캐너사진.jpg"
                alt="3D CT Scanner"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-none w-[320px] aspect-[4/3] rounded-xl overflow-hidden relative shadow-md">
              <Image
                src="/images/goduk_images/진료실사진.jpg"
                alt="Treatment room with digital equipment"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-none w-[320px] aspect-[4/3] rounded-xl overflow-hidden relative shadow-md">
              <Image
                src="/images/goduk_images/수술실.jpg"
                alt="Surgery room"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-none w-[320px] aspect-[4/3] rounded-xl overflow-hidden relative shadow-md">
              <Image
                src="/images/goduk_images/진료실.jpg"
                alt="OSSTEM equipped treatment room"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
