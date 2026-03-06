import Image from 'next/image';

export default function WhyBestSection() {
  return (
    <div className="bg-white">
      <div className="max-w-[430px] mx-auto">
        {/* Section Header */}
        <div className="text-center py-[60px]">
          <div className="flex justify-center items-center mb-4">
            <div className="h-8 relative shrink-0">
              <Image
                src="/images/goduk_images/고덕퍼스트치과로고 1.svg"
                alt="고덕퍼스트치과"
                width={160}
                height={32}
                className="h-full w-auto object-contain"
              />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-black leading-[1.35]">
            고덕퍼스트치과가
            <br />
            최고인 이유
          </h2>
        </div>

        {/* Reason 1: 통합치의학전문의 */}
        <div className="px-4 py-8 bg-white">
          <div className="text-center mb-10">
            <p className="text-3xl font-bold text-[#008095] mb-3">1</p>
            <h3 className="text-3xl font-bold text-[#21314E] mb-3 leading-[1.35]">
              보건복지부 인증
              <br />
              통합치의학과 전문의
            </h3>
            <p className="text-[14px] font-semibold text-[#727582]">
              대표원장이 직접 상담, 수술, 사후관리까지 책임집니다
            </p>
          </div>

          {/* 보건복지부 인증 이미지 */}
          <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-md">
            <Image
              src="/images/goduk_images/원장이력 등 걸려있는사진.jpg"
              alt="보건복지부 인증 통합치의학과 전문의 및 원장 이력"
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
              오스템, 포인트, 덴티스
              <br />
              임플란트 연구자문위원
            </h3>
            <p className="text-[14px] font-semibold text-[#e9ebf1]">
              국내 대표 임플란트 기업의 연구자문위원으로 활동하며
              <br />
              최신 기술과 장비를 직접 활용합니다
            </p>
          </div>

          {/* 각종 인증서 이미지 */}
          <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-md">
            <Image
              src="/images/goduk_images/각종인증서.png"
              alt="오스템·포인트·덴티스 임플란트 연구자문위원 각종 인증서"
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
              최신 디지털 장비 완비
            </h3>
            <p className="text-base font-semibold text-[#727582]">
              3D CT, 디지털 스캐너, 디지털 가이드 수술 시스템 등
              <br />
              최첨단 장비로 정밀한 진료를 제공합니다
            </p>
          </div>

          {/* 시설 이미지 스크롤 */}
          <div className="overflow-x-auto flex gap-3 pb-4">
            <div className="flex-none w-[320px] aspect-[4/3] rounded-xl overflow-hidden relative shadow-md">
              <Image
                src="/images/goduk_images/스캐너사진.jpg"
                alt="3D CT 스캐너 장비"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-none w-[320px] aspect-[4/3] rounded-xl overflow-hidden relative shadow-md">
              <Image
                src="/images/goduk_images/진료실사진.jpg"
                alt="디지털 스캐너와 X-ray 모니터가 갖춰진 진료실"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-none w-[320px] aspect-[4/3] rounded-xl overflow-hidden relative shadow-md">
              <Image
                src="/images/goduk_images/수술실.jpg"
                alt="최신 장비가 갖춰진 수술실"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-none w-[320px] aspect-[4/3] rounded-xl overflow-hidden relative shadow-md">
              <Image
                src="/images/goduk_images/진료실.jpg"
                alt="OSSTEM 유닛 완비 진료실"
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
