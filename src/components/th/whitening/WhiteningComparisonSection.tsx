export default function WhiteningComparisonSection() {
  return (
    <div className="bg-white w-full py-[60px]">
      <div className="max-w-[375px] mx-auto px-4">
        <div className="flex flex-col gap-10 w-full">
          {/* Title */}
          <div className="flex flex-col gap-3 items-center justify-center w-full">
            <h2 className="font-bold text-[32px] leading-[1.35] tracking-[-0.64px] text-black text-center w-full">
              วิธีไหน<br />
              เหมาะกับคุณ?
            </h2>
            <p className="font-semibold text-base leading-[1.4] tracking-[-0.32px] text-[#727582] text-center w-full">
              เปรียบเทียบ 2 ตัวเลือก
            </p>
          </div>

          {/* Comparison Table */}
          <div className="bg-white border border-[#f3f6fb] rounded-[20px] w-full">
            <div className="flex flex-col gap-4 overflow-hidden rounded-[inherit] w-full">
              <div className="flex flex-col gap-[30px] px-4 py-6 w-full">
                <p className="font-bold text-[24px] leading-[1.35] tracking-[-0.48px] text-black text-center w-full">
                  เปรียบเทียบตัวเลือกฟอกสีฟัน
                </p>

                <div className="bg-white border border-[#008095] rounded-[10.671px] overflow-hidden w-full">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-[#e9ebf1]">
                        <th className="font-bold text-[14px] leading-[1.4] tracking-[-0.28px] text-[#5d5f6d] px-2 py-[12px] w-[70px] text-left">&nbsp;</th>
                        <th className="font-bold text-[14px] leading-[1.4] tracking-[-0.56px] text-[#5d5f6d] text-center px-2 py-[12px] w-[45%]">ฟอกสีฟัน<br />เปอร์ออกไซด์</th>
                        <th className="font-bold text-[14px] leading-[1.4] tracking-[-0.28px] text-[#5d5f6d] text-center px-2 py-[12px]">ลามิเนต</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-[#e9ebf1]">
                        <td className="font-semibold text-[15px] leading-[1.5] tracking-[-0.3px] text-[#5d5f6d] px-2 py-[8.536px] align-middle">เวลา</td>
                        <td className="font-bold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#5d5f6d] text-center px-2 py-[8.536px] align-middle">1-2 ชม.<br />(เสร็จวันเดียว)</td>
                        <td className="font-bold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#5d5f6d] text-center px-2 py-[8.536px] align-middle">มา 2-3 ครั้ง<br />(1-2 สัปดาห์)</td>
                      </tr>
                      <tr className="border-b border-[#e9ebf1]">
                        <td className="font-semibold text-[15px] leading-[1.5] tracking-[-0.3px] text-[#5d5f6d] px-2 py-[8.536px] align-middle">คงทน</td>
                        <td className="font-bold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#5d5f6d] text-center px-2 py-[8.536px] align-middle">1-2 ปี<br />(ดูแลยืดได้)</td>
                        <td className="font-bold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#5d5f6d] text-center px-2 py-[8.536px] align-middle">10-15 ปี<br />(กึ่งถาวร)</td>
                      </tr>
                      <tr className="border-b border-[#e9ebf1]">
                        <td className="font-semibold text-[15px] leading-[1.5] tracking-[-0.3px] text-[#5d5f6d] px-2 py-[8.536px] align-middle">กรอฟัน</td>
                        <td className="font-bold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#5d5f6d] text-center px-2 py-[8.536px] align-middle">ไม่กรอ<br />(0mm)</td>
                        <td className="font-bold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#5d5f6d] text-center px-2 py-[8.536px] align-middle">กรอน้อย<br />(0.3mm)</td>
                      </tr>
                      <tr className="border-b border-[#e9ebf1]">
                        <td className="font-semibold text-[15px] leading-[1.5] tracking-[-0.3px] text-[#5d5f6d] px-2 py-[8.536px] align-middle">ราคา</td>
                        <td className="font-bold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#5d5f6d] text-center px-2 py-[8.536px] align-middle">200-300K<br />(ทั้งปาก)</td>
                        <td className="font-bold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#5d5f6d] text-center px-2 py-[8.536px] align-middle">ซี่ละ<br />500-800K</td>
                      </tr>
                      <tr className="border-b border-[#e9ebf1]">
                        <td className="font-semibold text-[15px] leading-[1.5] tracking-[-0.3px] text-[#5d5f6d] px-2 py-[8.536px] align-middle">แนะนำ</td>
                        <td className="font-bold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#5d5f6d] text-center px-2 py-[8.536px] align-middle">ต้องการ<br />ฟันขาวธรรมชาติ</td>
                        <td className="font-bold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#5d5f6d] text-center px-2 py-[8.536px] align-middle">ต้องการ<br />ฟันสมบูรณ์แบบ</td>
                      </tr>
                      <tr>
                        <td className="font-semibold text-[15px] leading-[1.5] tracking-[-0.3px] text-[#5d5f6d] px-2 py-[8.536px] align-middle">ข้อควรระวัง</td>
                        <td className="font-bold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#5d5f6d] text-center px-2 py-[8.536px] align-middle">24 ชม.<br />ระวังอาหารย้อมสี</td>
                        <td className="font-bold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#5d5f6d] text-center px-2 py-[8.536px] align-middle">ระวัง<br />อาหารแข็ง</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
