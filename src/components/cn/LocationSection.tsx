import Image from 'next/image';
import Link from 'next/link';

export default function LocationSection() {
  return (
    <div className="bg-gradient-to-b from-white to-[#d8e2fa]">
      <div className="max-w-[430px] mx-auto px-4 py-[60px]">
        {/* Section Header */}
        <div className="text-center mb-[60px]">
          <div className="flex justify-center mb-6">
            <Image
              src="/icons/Logo_black.svg"
              alt="Medis Dental Clinic"
              width={168}
              height={40}
              className="object-contain"
            />
          </div>
          <h2 className="text-4xl font-bold text-[#292a2f] leading-[1.35] mb-8">
            迈出健康牙齿
            <br />
            幸福笑容的第一步
          </h2>
          <Link href="/cn/consultation" className="block w-full">
            <button className="w-full bg-[#006aff] text-white text-xl font-bold py-4 rounded-[18px] hover:bg-[#0050c0] transition-colors">
            🤖 免费AI咨询
            </button>
          </Link>
        </div>

        {/* Interior Photos */}
        <div className="mb-10">
          <h3 className="text-2xl font-bold text-[#292a2f] mb-4">医院设施</h3>
          <div className="overflow-x-auto flex gap-3 pb-4">
          <div className="flex-none w-[320px] aspect-[4/3] rounded-xl overflow-hidden relative shadow-md">
              <Image
                src="/images/building-exterior.png"
                alt="Medis Dental Clinic Building"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-none w-[320px] aspect-[4/3] rounded-xl overflow-hidden relative shadow-md">
              <Image
                src="/images/interior-lobby.webp"
                alt="Medis Dental Clinic Lobby"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-none w-[320px] aspect-[4/3] rounded-xl overflow-hidden relative shadow-md">
              <Image
                src="/images/interior-waiting-room.webp"
                alt="Medis Dental Clinic Waiting Room"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-none w-[320px] aspect-[4/3] rounded-xl overflow-hidden relative shadow-md">
              <Image
                src="/images/interior-consultation.webp"
                alt="Medis Dental Clinic Consultation Room"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-none w-[320px] aspect-[4/3] rounded-xl overflow-hidden relative shadow-md">
              <Image
                src="/images/interior-treatment-room.webp"
                alt="Medis Dental Clinic Treatment Room"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-none w-[320px] aspect-[4/3] rounded-xl overflow-hidden relative shadow-md">
              <Image
                src="/images/interior-private-room.webp"
                alt="Medis Dental Clinic Private Treatment Room"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-none w-[320px] aspect-[4/3] rounded-xl overflow-hidden relative shadow-md">
              <Image
                src="/images/interior-sterilization.webp"
                alt="Medis Dental Clinic Sterilization Room"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Map & Contact Info */}
        <div className="space-y-6">
          {/* Map */}
          <div className="relative border-[5px] border-white rounded-2xl overflow-hidden h-[480px]">
            <Image
              src="/images/map-screenshot.png"
              alt="Kyungsung Medis Dental Clinic Location"
              fill
              className="object-cover"
            />

            {/* Gradient Overlay at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-[205px] bg-gradient-to-t from-white to-transparent pointer-events-none" />

            {/* Address & CTA */}
            <div className="absolute bottom-4 left-4 right-4 space-y-3">
              <div className="text-black font-semibold text-[15px] leading-[1.6]">
                <p className="mb-0">釜山市南区龙所路45号</p>
                <p>庆星大·釜大地铁站3号出口步行5分钟</p>
              </div>
              <Link
                href="https://m.place.naver.com/hospital/1201116357/home"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-white shadow-md text-[#01c17e] font-bold text-base py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
              >
                查看路线
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M15 3h6v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 14L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link
                href="https://maps.app.goo.gl/hNbGVXnhd9zLKrBe9"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-white shadow-md text-[#4285F4] font-bold text-base py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
              >
                谷歌地图
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M15 3h6v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 14L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-10">
            {/* Parking Facilities */}
            <div className="bg-white rounded-2xl p-5 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#006aff] rounded-full flex items-center justify-center">
                  <span className="text-2xl">🚗</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-black">便利的停车设施</h4>
                  <p className="text-sm text-[#727582]">宽敞舒适的停车场</p>
                </div>
              </div>

              {/* Parking Image */}
              <div className="relative w-full h-[200px] rounded-xl overflow-hidden">
                <Image
                  src="/images/parking.jpg"
                  alt="Medis Dental Clinic Underground Parking"
                  fill
                  className="object-cover"
                />
              </div>

              <p className="text-[15px] text-[#727582] leading-[1.6]">
                美迪斯牙科把患者的便利放在第一位。<br />
                从舒适的停车场到舒适的治疗空间，<br />
                我们打造<span className="font-semibold text-[#006aff]">以患者为中心的牙科诊所</span>。
              </p>
            </div>

            {/* Operating Hours */}
            <div className="space-y-3">
              <p className="text-base font-semibold text-[#727582]">营业时间</p>
              <div className="text-[15px] font-semibold text-black leading-[1.8] space-y-1">
                <div className="flex">
                  <span className="min-w-[140px]">周一 / 周三 (夜间) :</span>
                  <span className="whitespace-nowrap">10:00 AM – 8:00 PM</span>
                </div>
                <div className="flex">
                  <span className="min-w-[140px]">周二 / 周四 / 周五 :</span>
                  <span className="whitespace-nowrap">10:00 AM – 7:00 PM</span>
                </div>
                <div className="flex">
                  <span className="min-w-[140px]">周六 :</span>
                  <span className="whitespace-nowrap">10:00 AM – 2:00 PM</span>
                </div>
                <div className="flex">
                  <span className="min-w-[140px]"></span>
                  <span className="text-[13px] text-[#727582]">(无午休)</span>
                </div>
                <div className="flex">
                  <span className="min-w-[140px]">午休时间 :</span>
                  <span className="whitespace-nowrap">1:00 PM – 2:00 PM</span>
                </div>
                <div className="flex">
                  <span className="min-w-[140px]"></span>
                  <span className="text-[13px] text-[#727582]">(周一至周五)</span>
                </div>
                <div className="flex">
                  <span className="min-w-[140px]">休息日 :</span>
                  <span>周日及公众假日</span>
                </div>
              </div>
            </div>

            {/* Appointment Inquiry */}
            <div className="space-y-4">
              <div className="space-y-3">
                <p className="text-base font-semibold text-[#727582]">预约咨询</p>
                <p className="text-[15px] text-[#727582] leading-[1.6]">
                  请使用下方按钮进行AI咨询、电话咨询或Naver预约。
                </p>
              </div>

              {/* Booking Buttons */}
              <div className="space-y-3">
                {/* AI Booking Button */}
                <Link
                  href="/cn/consultation"
                  className="w-full h-[56px] bg-[#006aff] rounded-2xl flex items-center justify-center gap-2 hover:bg-[#0056cc] transition-colors"
                >
                  <span className="text-2xl">🤖</span>
                  <span className="text-lg font-bold text-white">AI咨询</span>
                </Link>

                {/* Phone Button */}
                <Link
                  href="tel:0507-1315-7475"
                  className="w-full h-[56px] bg-white border-2 border-[#006aff] rounded-2xl flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
                >
                  <span className="text-2xl">📞</span>
                  <div className="flex flex-col items-center">
                    <span className="text-lg font-bold text-[#006aff]">电话咨询</span>
                    <span className="text-sm font-semibold text-[#727582]">0507-1315-7475</span>
                  </div>
                </Link>

                {/* Naver Booking Button */}
                <Link
                  href="https://m.booking.naver.com/booking/13/bizes/948237?theme=place&lang=zh&area=pll"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-[56px] bg-[#03c75a] rounded-2xl flex items-center justify-center gap-2 hover:bg-[#02b350] transition-colors"
                >
                  <span className="text-2xl font-bold text-white">N</span>
                  <span className="text-lg font-bold text-white">Naver预约</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
