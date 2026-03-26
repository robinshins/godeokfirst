import Image from 'next/image';

export default function CaseStudySection() {
  return (
    <div className="bg-[#f8f9fb] w-full py-[60px]">
      <div className="max-w-[430px] mx-auto px-4">
        <div className="flex flex-col gap-8 items-center w-full">

          {/* Title */}
          <div className="flex flex-col gap-3 items-center text-center w-full">
            <p className="text-[#008095] font-bold text-[13px] tracking-[0.2em] uppercase" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              Clinical Case
            </p>
            <h2 className="font-bold text-[32px] leading-[1.35] tracking-[-0.64px] text-black w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              จริง ฟอกสีฟัน กรณี
            </h2>
            <p className="font-semibold text-base leading-[1.4] tracking-[-0.32px] text-[#727582] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              ระบบ Osstem Beautisด้วย การรักษาของ Godeok First Dentalจริงของ กรณีค่ะ
            </p>
          </div>

          {/* Case Card 1 */}
          <div
            className="bg-white rounded-[24px] w-full overflow-hidden"
            style={{ boxShadow: '0 4px 20px -4px rgba(21,26,36,0.08)' }}
          >
            <div className="p-5 flex flex-col gap-4">
              {/* Before */}
              <div className="relative w-full">
                <div className="bg-[#f3f6fb] h-[220px] overflow-hidden relative rounded-[20px] w-full">
                  <Image
                    src="/ทางคลินิกภาพถ่าย/미백/양해영_미백_before.jpg"
                    alt="ฟอกสีฟัน ก่อน"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute left-3 top-3 bg-[#292a2f] px-2.5 py-[5px] rounded-[10px] z-10">
                  <p className="font-semibold text-[13px] leading-[1.4] text-white tracking-[-0.26px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                    Before
                  </p>
                </div>
              </div>

              {/* After */}
              <div className="relative w-full">
                <div className="bg-[#f3f6fb] h-[220px] overflow-hidden relative rounded-[20px] w-full">
                  <Image
                    src="/ทางคลินิกภาพถ่าย/미백/양해영_미백_after.jpg"
                    alt="ฟอกสีฟัน หลัง"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute left-3 top-3 bg-[#008095] px-2.5 py-[5px] rounded-[10px] z-10">
                  <p className="font-semibold text-[13px] leading-[1.4] text-white tracking-[-0.26px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                    After
                  </p>
                </div>
              </div>

              {/* Description */}
              <div className="flex flex-col gap-1.5 pt-2">
                <p className="font-bold text-[16px] text-black tracking-[-0.32px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                  ฟอกสีฟันเฉพาะทาง Osstem Beautis · คุณ ย●●
                </p>
                <p className="font-semibold text-[14px] text-[#727582] leading-[1.5]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                  รักษาเสร็จภายใน 1~2 ชม.ในวันเดียว · รวมสารป้องกันเสียวฟัน · ลดอาการเสียวฟัน
                </p>
              </div>
            </div>
          </div>

          {/* Case Card 2 */}
          <div
            className="bg-white rounded-[24px] w-full overflow-hidden"
            style={{ boxShadow: '0 4px 20px -4px rgba(21,26,36,0.08)' }}
          >
            <div className="p-5 flex flex-col gap-4">
              {/* Before */}
              <div className="relative w-full">
                <div className="bg-[#f3f6fb] h-[220px] overflow-hidden relative rounded-[20px] w-full">
                  <Image
                    src="/ทางคลินิกภาพถ่าย/ใน동건_미백/ใน동건_미백_before.jpg"
                    alt="ฟอกสีฟัน ก่อน"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute left-3 top-3 bg-[#292a2f] px-2.5 py-[5px] rounded-[10px] z-10">
                  <p className="font-semibold text-[13px] leading-[1.4] text-white tracking-[-0.26px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                    Before
                  </p>
                </div>
              </div>

              {/* After */}
              <div className="relative w-full">
                <div className="bg-[#f3f6fb] h-[220px] overflow-hidden relative rounded-[20px] w-full">
                  <Image
                    src="/ทางคลินิกภาพถ่าย/ใน동건_미백/ใน동건_미백_after.jpg"
                    alt="ฟอกสีฟัน หลัง"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute left-3 top-3 bg-[#008095] px-2.5 py-[5px] rounded-[10px] z-10">
                  <p className="font-semibold text-[13px] leading-[1.4] text-white tracking-[-0.26px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                    After
                  </p>
                </div>
              </div>

              {/* Description */}
              <div className="flex flex-col gap-1.5 pt-2">
                <p className="font-bold text-[16px] text-black tracking-[-0.32px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                  ฟอกสีฟันเฉพาะทาง · คุณ อ●●
                </p>
                <p className="font-semibold text-[14px] text-[#727582] leading-[1.5]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                  ฟอกสีฟันเฉพาะทาง 2 สัปดาห์ · เปลี่ยนโทนสว่างเป็นธรรมชาติ
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
