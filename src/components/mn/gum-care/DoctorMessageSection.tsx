export default function DoctorMessageSection() {
  return (
    <div className="bg-white w-full">
      <div className="w-full flex justify-center">
        <div className="px-5 py-[60px] w-full max-w-[430px] flex flex-col gap-10">

 {/* */}
          <div className="flex flex-col gap-2 items-center text-center">
            <p
              className="text-[#008095] font-bold text-[13px] tracking-[0.2em] uppercase"
              style={{ fontFamily: 'Pretendard, sans-serif' }}
            >
              From the Doctor
            </p>
            <h2
              className="font-bold text-[28px] leading-[1.35] tracking-[-0.03em] text-black"
              style={{ fontFamily: 'Pretendard, sans-serif' }}
            >
 буйл арчилгаа <br />
 байгалийн шүд, насан туршдаа 
            </h2>
          </div>

 {/* эмч */}
          <div
            className="bg-[#f8f9fb] rounded-[24px] p-6 flex flex-col gap-5"
          >
 {/* */}
            <div className="flex flex-col gap-4">
              <p
                className="font-semibold text-[16px] leading-[1.75] tracking-[-0.02em] text-[#2d3340]"
                style={{ fontFamily: 'Pretendard, sans-serif' }}
              >
 Имплант өвчтөнминут.<br /><br />
 минут шүд Үгүй. <span className="text-[#008095] font-bold">буйл арчилгаа </span> олон.
              </p>
              <p
                className="font-semibold text-[16px] leading-[1.75] tracking-[-0.02em] text-[#2d3340]"
                style={{ fontFamily: 'Pretendard, sans-serif' }}
              >
 буйл эмчилгээ. Гэхдээ 1жил цэвэрлэгээ, ирэлт <span className="text-[#008095] font-bold">байгалийн шүд 20~30жил.</span>
              </p>
              <p
                className="font-semibold text-[16px] leading-[1.75] tracking-[-0.02em] text-[#2d3340]"
                style={{ fontFamily: 'Pretendard, sans-serif' }}
              >
 Имплант, байгалийн шүд хиймэл шүд.
              </p>
            </div>

 {/* */}
            <div className="flex items-center gap-3 pt-2 border-t border-[#e9ebf1]">
              <div className="flex flex-col gap-0.5">
                <p
                  className="font-bold text-[15px] text-black tracking-[-0.02em]"
                  style={{ fontFamily: 'Pretendard, sans-serif' }}
                >
                  Эмч Ли Донхён
                </p>
                <p
                  className="font-medium text-[13px] text-[#9298a6] tracking-[-0.01em]"
                  style={{ fontFamily: 'Pretendard, sans-serif' }}
                >
                  Нийлмэл шүдний мэргэжилтэн · Godeok First Dental Ерөнхий эмч
                </p>
              </div>
            </div>
          </div>

 {/* 3 */}
          <div className="flex flex-col gap-3">
            {[
 { num:'1жил 1удаа', desc:'цэвэрлэгээ 14%'},
 { num:'80%', desc:'буйл — минут байхгүй'},
 { num:'3дахин', desc:'буйлны Имплант шаардлагатай'},
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 bg-white border border-[#e9ebf1] rounded-2xl px-5 py-4"
              >
                <p
                  className="font-bold text-[22px] text-[#008095] tracking-[-0.03em] shrink-0 w-[72px]"
                  style={{ fontFamily: 'Pretendard, sans-serif' }}
                >
                  {item.num}
                </p>
                <p
                  className="font-semibold text-[14px] leading-[1.5] text-[#3e3a3a] tracking-[-0.01em]"
                  style={{ fontFamily: 'Pretendard, sans-serif' }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
