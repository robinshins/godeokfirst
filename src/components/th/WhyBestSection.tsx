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
            Godeok First Dental
            <br />
            เหตุผลที่เราดีที่สุด
          </h2>
        </div>

        {/* Reason 1: ผู้เชี่ยวชาญทันตกรรมบูรณาการ */}
        <div className="px-4 py-8 bg-white">
          <div className="text-center mb-10">
            <p className="text-3xl font-bold text-[#008095] mb-3">1</p>
            <h3 className="text-3xl font-bold text-[#21314E] mb-3 leading-[1.35]">
              กระทรวงสาธารณสุข รับรอง
              <br />
              ผู้เชี่ยวชาญทันตกรรมบูรณาการ
            </h3>
            <p className="text-[14px] font-semibold text-[#727582]">
              ทันตแพทย์หัวหน้า รับผิดชอบตั้งแต่ปรึกษา ผ่าตัด จนถึงดูแลหลังการรักษา
            </p>
          </div>

          {/* ภาพการรับรองจากกระทรวงสาธารณสุข */}
          <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-md">
            <Image
              src="/images/goduk_images/ทันตแพทย์หัวหน้าประวัติ 등 걸려있는ภาพถ่าย.jpg"
              alt="ผู้เชี่ยวชาญทันตกรรมบูรณาการรับรองจากกระทรวงสาธารณสุขและประวัติทันตแพทย์หัวหน้า"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Reason 2: ที่ปรึกษาวิจัยรากฟันเทียม */}
        <div className="px-4 py-8 bg-gradient-to-b from-[#331f0c] via-[#584025] to-[#866947]">
          <div className="text-center mb-10">
            <p className="text-3xl font-bold text-white mb-3">2</p>
            <h3 className="text-3xl font-bold text-[#f3f6fb] mb-3 leading-[1.35]">
              Osstem, Point, Dentis
              <br />
              ที่ปรึกษาวิจัยรากฟันเทียม
            </h3>
            <p className="text-[14px] font-semibold text-[#e9ebf1]">
              ทำหน้าที่เป็นที่ปรึกษาวิจัยของบริษัทรากฟันเทียมชั้นนำในประเทศ
              <br />
              ใช้เทคโนโลยีและอุปกรณ์ล่าสุดโดยตรง
            </p>
          </div>

          {/* ภาพใบรับรองต่างๆ */}
          <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-md">
            <Image
              src="/images/goduk_images/각종ใบรับรอง.png"
              alt="ใบรับรองต่างๆ ที่ปรึกษาวิจัยรากฟันเทียม Osstem·Point·Dentis"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Reason 3: อุปกรณ์ดิจิทัลล่าสุด */}
        <div className="px-2 py-8 bg-white">
          <div className="text-center mb-10">
            <p className="text-3xl font-bold text-[#008095] mb-3">3</p>
            <h3 className="text-3xl font-bold text-[#21314E] mb-3 leading-[1.35]">
              ครบครันอุปกรณ์ดิจิทัลล่าสุด
            </h3>
            <p className="text-base font-semibold text-[#727582]">
              3D CT, สแกนเนอร์ดิจิทัล, ระบบการผ่าตัดแบบดิจิทัลไกด์ ฯลฯ
              <br />
              ให้การรักษาที่แม่นยำด้วยอุปกรณ์ล้ำสมัย
            </p>
          </div>

          {/* ภาพสิ่งอำนวยความสะดวก เลื่อนได้ */}
          <div className="overflow-x-auto flex gap-3 pb-4">
            <div className="flex-none w-[320px] aspect-[4/3] rounded-xl overflow-hidden relative shadow-md">
              <Image
                src="/images/goduk_images/스캐너ภาพถ่าย.jpg"
                alt="อุปกรณ์สแกนเนอร์ CT 3D"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-none w-[320px] aspect-[4/3] rounded-xl overflow-hidden relative shadow-md">
              <Image
                src="/images/goduk_images/진료실ภาพถ่าย.jpg"
                alt="ห้องตรวจพร้อมสแกนเนอร์ดิจิทัลและจอ X-ray"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-none w-[320px] aspect-[4/3] rounded-xl overflow-hidden relative shadow-md">
              <Image
                src="/images/goduk_images/수술실.jpg"
                alt="ห้องผ่าตัดพร้อมอุปกรณ์ล่าสุด"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-none w-[320px] aspect-[4/3] rounded-xl overflow-hidden relative shadow-md">
              <Image
                src="/images/goduk_images/진료실.jpg"
                alt="ห้องตรวจพร้อมยูนิต OSSTEM ครบครัน"
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
