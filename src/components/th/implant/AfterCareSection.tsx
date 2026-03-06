import Image from 'next/image';

export default function AfterCareSection() {
  return (
    <div className="bg-white w-full">
      <div className="box-border flex flex-col gap-10 items-start px-4 py-[60px] relative w-full max-w-[430px] mx-auto">
        <div className="flex flex-col gap-4 w-full text-center">
          <h2 className="font-bold leading-[1.35] text-[32px] text-black tracking-[-0.64px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            การดูแลหลังการรักษา<br />ที่เหนือระดับ
          </h2>
          <p className="font-medium text-[#5d5f6d] text-lg" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            การรักษาไม่ได้สิ้นสุดที่ห้องผ่าตัด<br />
            เราดูแลคุณต่อเนื่องเพื่อให้รากเทียมอยู่กับคุณตลอดชีวิต
          </p>
        </div>

        <div className="flex flex-col gap-6 w-full">
          <div className="flex gap-4 items-center bg-[#f3f6fb] p-6 rounded-2xl">
            <div className="w-12 h-12 bg-[#006aff] rounded-full flex items-center justify-center text-white font-bold text-xl">01</div>
            <div>
              <h3 className="font-bold text-[#292a2f]" style={{ fontFamily: 'Pretendard, sans-serif' }}>ตรวจติดตามผลสม่ำเสมอ</h3>
              <p className="text-sm text-[#5d5f6d]" style={{ fontFamily: 'Pretendard, sans-serif' }}>นัดตรวจเช็คทุก 6 เดือนเพื่อความมั่นใจ</p>
            </div>
          </div>
          <div className="flex gap-4 items-center bg-[#f3f6fb] p-6 rounded-2xl">
            <div className="w-12 h-12 bg-[#006aff] rounded-full flex items-center justify-center text-white font-bold text-xl">02</div>
            <div>
              <h3 className="font-bold text-[#292a2f]" style={{ fontFamily: 'Pretendard, sans-serif' }}>ระบบประกันคุณภาพ 10 ปี</h3>
              <p className="text-sm text-[#5d5f6d]" style={{ fontFamily: 'Pretendard, sans-serif' }}>รับผิดชอบผลการรักษาด้วยความจริงใจ</p>
            </div>
          </div>
          <div className="flex gap-4 items-center bg-[#f3f6fb] p-6 rounded-2xl">
            <div className="w-12 h-12 bg-[#006aff] rounded-full flex items-center justify-center text-white font-bold text-xl">03</div>
            <div>
              <h3 className="font-bold text-[#292a2f]" style={{ fontFamily: 'Pretendard, sans-serif' }}>การทำความสะอาดระดับพรีเมียม</h3>
              <p className="text-sm text-[#5d5f6d]" style={{ fontFamily: 'Pretendard, sans-serif' }}>บริการสปาช่องปากเพื่อป้องกันโรคเหงือก</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
