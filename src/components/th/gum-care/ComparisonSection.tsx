'use client';

import Image from 'next/image';

export default function ComparisonSection() {
  const treatments = [
    {
      icon: '/icons/tooth.svg',
      title: 'แปรงฟัน',
      badge: 'จำเป็นทุกวัน',
      items: [
        { icon: '/icons/check-icon.svg', text: 'รักษาความสะอาดผิวฟันได้' },
        { icon: '/icons/x-icon.svg', text: 'ขจัดหินปูนไม่ได้' },
        { icon: '/icons/x-icon.svg', text: 'ไม่สามารถเข้าถึงใต้ขอบเหงือกได้' }
      ]
    },
    {
      icon: '/icons/tooth-shine.svg',
      title: 'ขูดหินปูน',
      badge: 'จำเป็นปีละครั้ง',
      items: [
        { icon: '/icons/check-icon.svg', text: 'ขจัดหินปูนเหนือเหงือก' },
        { icon: '/icons/check-icon.svg', text: 'ป้องกันและรักษาเบื้องต้น' },
        { icon: '/icons/x-icon.svg', text: 'มีข้อจำกัดในบริเวณลึก' }
      ]
    },
    {
      icon: '/icons/tooth-loosen.svg',
      title: 'รักษาเหงือก',
      badge: 'เพิ่มเติมเมื่อจำเป็น',
      items: [
        { icon: '/icons/check-icon.svg', text: 'รักษาลึกใต้เหงือก' },
        { icon: '/icons/check-icon.svg', text: 'ขัดรากฟันให้เรียบ' },
        { icon: '/icons/check-icon.svg', text: 'รักษาโรคที่ลุกลาม' }
      ]
    }
  ];

  return (
    <div className="bg-gradient-to-b from-[#0b1727] to-white w-full px-4 py-[60px] relative">
      {/* Background gradient */}
      <div className="absolute h-[711px] left-[calc(50%+5.5px)] top-[217.35px] -translate-x-1/2 w-[480px] pointer-events-none">
        <div className="absolute inset-[-56.26%_-83.33%]">
          <Image
            src="/images/stats-gradient.svg"
            alt=""
            fill
            className="block max-w-none object-contain"
          />
        </div>
      </div>

      <div className="max-w-[343px] mx-auto flex flex-col gap-[60px] items-start relative z-10">
        {/* Header */}
        <div className="flex flex-col gap-4 items-center justify-center w-full">
          <div className="flex flex-col gap-3 items-center justify-center text-center text-white w-full">
            <div className="font-['Pretendard_JP'] font-bold leading-[1.35] text-[32px] tracking-[-0.64px] w-full">
              <p className="mb-0">แค่แปรงฟันกับขูดหินปูน</p>
              <p>เพียงพอไหม?</p>
            </div>
            <div className="font-['Pretendard_JP'] font-semibold leading-[1.4] text-[#e9ebf1] text-base tracking-[-0.32px] w-full">
              <p className="mb-0">การดูแลทั้งสองอย่างสำคัญมาก</p>
              <p>แต่การดูแลให้สมบูรณ์แบบนั้นยาก</p>
            </div>
          </div>
        </div>

        {/* Treatment Cards */}
        <div className="flex flex-col gap-6 items-start w-full">
          {treatments.map((treatment, index) => (
            <div key={index} className="bg-white border border-[#f3f6fb] box-border flex flex-col gap-4 items-center justify-center p-6 rounded-[20px] w-full">
              {/* Header */}
              <div className="flex items-center justify-between w-full">
                <div className="flex gap-2 items-center">
                  <div className="relative shrink-0 w-8 h-8">
                    <Image
                      src={treatment.icon}
                      alt=""
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="font-['Pretendard_JP'] font-bold leading-[1.35] text-2xl text-black tracking-[-0.48px]">
                    {treatment.title}
                  </p>
                </div>
                <div className="bg-[#e8f8f0] box-border flex items-center justify-center px-2.5 py-1.5 rounded-lg">
                  <p className="font-['Pretendard_JP'] font-bold leading-[1.4] text-[#15bd66] text-sm tracking-[-0.28px]">
                    {treatment.badge}
                  </p>
                </div>
              </div>

              {/* Items */}
              <div className="bg-[#f3f6fb] box-border flex flex-col gap-3.5 items-start p-5 rounded-2xl w-full">
                {treatment.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-center gap-2 w-full">
                    <div className="shrink-0 w-6 h-6 flex items-center justify-center">
                      <Image
                        src={item.icon}
                        alt=""
                        width={20}
                        height={20}
                      />
                    </div>
                    <p className="font-['Pretendard_JP'] font-bold text-[17px] text-black tracking-[-0.34px] leading-[1.5]">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Comparison Table */}
          <div className="bg-white border border-[#f3f6fb] box-border flex flex-col gap-4 items-center justify-center p-6 rounded-[20px] w-full">
            {/* Title */}
            <div className="flex gap-3 items-center justify-center w-full">
              <p className="font-['Pretendard_JP'] font-bold leading-[1.35] text-2xl text-black tracking-[-0.48px]">
                ขูดหินปูน
              </p>
              <div className="bg-[#f3f6fb] box-border flex items-center justify-center px-2 py-1 rounded-lg">
                <p className="font-['Pretendard_JP'] font-bold leading-[1.4] text-[#9298a6] text-[15px] tracking-[-0.3px]">
                  vs
                </p>
              </div>
              <p className="font-['Pretendard_JP'] font-bold leading-[1.35] text-2xl text-black tracking-[-0.48px]">
                รักษาเหงือก
              </p>
            </div>

            {/* Table */}
            <div className="bg-white border border-[#006aff] box-border rounded-2xl overflow-hidden w-full">
              <table className="w-full">
                <tbody>
                  <tr className="border-b border-[#e9ebf1]">
                    <td className="px-2 py-2 w-[52px]"></td>
                    <td className="px-2 py-2 font-['Pretendard_JP'] font-bold text-[#5d5f6d] text-sm text-center tracking-[-0.28px] leading-[1.4]">
                      ขูดหินปูน
                    </td>
                    <td className="px-2 py-2 font-['Pretendard_JP'] font-bold text-[#5d5f6d] text-sm text-center tracking-[-0.28px] leading-[1.4]">
                      รักษาเหงือก
                    </td>
                  </tr>
                  <tr className="border-b border-[#e9ebf1]">
                    <td className="px-2 py-2 font-['Pretendard_JP'] font-semibold text-[#5d5f6d] text-[15px] tracking-[-0.3px] leading-[1.4]">
                      ขอบเขต
                    </td>
                    <td className="px-2 py-2 text-center">
                      <div className="flex flex-col gap-0.5">
                        <p className="font-['Pretendard_JP'] font-bold text-[#5d5f6d] text-[15px] tracking-[-0.3px] leading-[1.4]">
                          เหนือเหงือก
                        </p>
                        <p className="font-['Pretendard_JP'] font-medium text-[#5d5f6d] text-sm tracking-[-0.28px] leading-[1.4]">
                          (ขอบเหงือกขึ้นไป)
                        </p>
                      </div>
                    </td>
                    <td className="px-2 py-2 text-center">
                      <div className="flex flex-col gap-0.5">
                        <p className="font-['Pretendard_JP'] font-bold text-[#5d5f6d] text-[15px] tracking-[-0.3px] leading-[1.4]">
                          ใต้เหงือก
                        </p>
                        <p className="font-['Pretendard_JP'] font-medium text-[#006aff] text-sm tracking-[-0.28px] leading-[1.4]">
                          (ขอบเหงือกลงไป)
                        </p>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-[#e9ebf1]">
                    <td className="px-2 py-2 font-['Pretendard_JP'] font-semibold text-[#5d5f6d] text-[15px] tracking-[-0.3px] leading-[1.4]">
                      เนื้อหา
                    </td>
                    <td className="px-2 py-2">
                      <div className="font-['Pretendard_JP'] font-bold text-[#5d5f6d] text-[15px] text-center tracking-[-0.3px] leading-[1.4]">
                        <p className="mb-0">ขจัดหินปูน</p>
                        <p>และคราบจุลินทรีย์</p>
                      </div>
                    </td>
                    <td className="px-2 py-2 text-center">
                      <div className="flex flex-col gap-0.5">
                        <p className="font-['Pretendard_JP'] font-bold text-[#5d5f6d] text-[15px] tracking-[-0.3px] leading-[1.4]">
                          ใช้เครื่องมือคูเร็ต
                        </p>
                        <p className="font-['Pretendard_JP'] font-medium text-[#006aff] text-sm tracking-[-0.28px] leading-[1.4]">
                          ยาปฏิชีวนะทาเฉพาะที่
                        </p>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-[#e9ebf1]">
                    <td className="px-2 py-2 font-['Pretendard_JP'] font-semibold text-[#5d5f6d] text-[15px] tracking-[-0.3px] leading-[1.4]">
                      วัตถุประสงค์
                    </td>
                    <td className="px-2 py-2">
                      <div className="font-['Pretendard_JP'] font-bold text-[#5d5f6d] text-[15px] text-center tracking-[-0.3px] leading-[1.4]">
                        <p className="mb-0">ป้องกันและ</p>
                        <p>รักษาเบื้องต้น</p>
                      </div>
                    </td>
                    <td className="px-2 py-2">
                      <div className="font-['Pretendard_JP'] font-bold text-[15px] text-center tracking-[-0.3px] leading-[1.4]">
                        <p className="mb-0 text-[#5d5f6d]">ป้องกันและ</p>
                        <p className="text-[#006aff]">ปานกลางขึ้นไป</p>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-[#e9ebf1]">
                    <td className="px-2 py-2 font-['Pretendard_JP'] font-semibold text-[#5d5f6d] text-[15px] tracking-[-0.3px] leading-[1.4]">
                      ความจำเป็น
                    </td>
                    <td className="px-2 py-2">
                      <div className="font-['Pretendard_JP'] font-bold text-[#5d5f6d] text-[15px] text-center tracking-[-0.3px] leading-[1.4]">
                        <p className="mb-0">โดยทั่วไป</p>
                        <p>ไม่จำเป็น</p>
                      </div>
                    </td>
                    <td className="px-2 py-2">
                      <div className="font-['Pretendard_JP'] font-bold text-[#006aff] text-[15px] text-center tracking-[-0.3px] leading-[1.4]">
                        <p className="mb-0">ต้องใช้ยาชา</p>
                        <p>เฉพาะที่</p>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-[#e9ebf1]">
                    <td className="px-2 py-2 font-['Pretendard_JP'] font-semibold text-[#5d5f6d] text-[15px] tracking-[-0.3px] leading-[1.4]">
                      การใช้
                    </td>
                    <td className="px-2 py-2">
                      <div className="font-['Pretendard_JP'] font-bold text-[#5d5f6d] text-[15px] text-center tracking-[-0.3px] leading-[1.4]">
                        <p className="mb-0">ปีละ 1 ครั้ง</p>
                        <p>อายุ 19 ปีขึ้นไป</p>
                      </div>
                    </td>
                    <td className="px-2 py-2">
                      <div className="font-['Pretendard_JP'] font-bold text-[#006aff] text-[15px] text-center tracking-[-0.3px] leading-[1.4]">
                        <p className="mb-0">เมื่อต้องรักษา</p>
                        <p>แบ่งทำหลายครั้ง</p>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-2 py-2 font-['Pretendard_JP'] font-semibold text-[#5d5f6d] text-[15px] tracking-[-0.3px] leading-[1.4]">
                      กลุ่มเป้าหมาย
                    </td>
                    <td className="px-2 py-2">
                      <div className="font-['Pretendard_JP'] font-bold text-[#5d5f6d] text-[15px] text-center tracking-[-0.3px] leading-[1.4]">
                        <p className="mb-0">ผู้ใหญ่ทุกคน</p>
                        <p>การดูแลจำเป็น</p>
                      </div>
                    </td>
                    <td className="px-2 py-2">
                      <div className="font-['Pretendard_JP'] font-bold text-[#006aff] text-[15px] text-center tracking-[-0.3px] leading-[1.4]">
                        <p className="mb-0">กรณีมี</p>
                        <p>โรคเหงือก</p>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
