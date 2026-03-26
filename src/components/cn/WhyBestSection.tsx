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
                alt="高德First牙科"
                width={375}
                height={84}
                className="h-20 w-auto object-contain -mt-[18px]"
              />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-black leading-[1.35]">
            高德First牙科
            <br />
            最好的理由
          </h2>
        </div>

        {/* Reason 1: 통합치의학전문의 */}
        <div className="px-4 py-8 bg-white">
          <div className="text-center mb-10">
            <p className="text-3xl font-bold text-[#008095] mb-3">1</p>
            <h3 className="text-3xl font-bold text-[#21314E] mb-3 leading-[1.35]">
              保健福利部认证
              <br />
              综合牙科专家
            </h3>
            <p className="text-[14px] font-semibold text-[#727582]">
              代表院长亲自咨询、手术、术后管理全程负责
            </p>
          </div>

          {/* 보건복지부 인증 이미지 */}
          <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-md">
            <Image
              src="/images/goduk_images/원장이력 등 걸려있는사진.jpg"
              alt="保健福利部认证综合牙科专家及院长履历"
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
              奥齿泰、Point、Dentis
              <br />
              种植牙研究顾问
            </h3>
            <p className="text-[14px] font-semibold text-[#e9ebf1]">
              作为韩国代表性种植牙企业的研究顾问
              <br />
              直接运用最新技术和设备
            </p>
          </div>

          {/* 각종 인증서 이미지 */}
          <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-md">
            <Image
              src="/images/goduk_images/각종인증서.png"
              alt="奥齿泰·Point·Dentis种植牙研究顾问各类证书"
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
              配备最新数字化设备
            </h3>
            <p className="text-base font-semibold text-[#727582]">
              3D CT、数字扫描仪、数字化引导手术系统等
              <br />
              以尖端设备提供精密诊疗
            </p>
          </div>

          {/* 시설 이미지 스크롤 */}
          <div className="overflow-x-auto flex gap-3 pb-4">
            <div className="flex-none w-[320px] aspect-[4/3] rounded-xl overflow-hidden relative shadow-md">
              <Image
                src="/images/goduk_images/스캐너사진.jpg"
                alt="3D CT扫描设备"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-none w-[320px] aspect-[4/3] rounded-xl overflow-hidden relative shadow-md">
              <Image
                src="/images/goduk_images/진료실사진.jpg"
                alt="配备数字扫描仪和X光监视器的诊疗室"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-none w-[320px] aspect-[4/3] rounded-xl overflow-hidden relative shadow-md">
              <Image
                src="/images/goduk_images/수술실.jpg"
                alt="配备最新设备的手术室"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-none w-[320px] aspect-[4/3] rounded-xl overflow-hidden relative shadow-md">
              <Image
                src="/images/goduk_images/진료실.jpg"
                alt="配备OSSTEM设备的诊疗室"
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
