export default function DoctorMessageSection() {
  return (
    <div className="bg-white w-full">
      <div className="w-full flex justify-center">
        <div className="px-5 py-[60px] w-full max-w-[430px] flex flex-col gap-10">

          {/* Nhãn trên */}
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
              Chỉ cần chăm sóc nướu tốt<br />
              răng tự nhiên có thể dùng cả đời
            </h2>
          </div>

          {/* Card tin nhắn Bác sĩ trưởng */}
          <div
            className="bg-[#f8f9fb] rounded-[24px] p-6 flex flex-col gap-5"
          >
            {/* Văn bản trích dẫn */}
            <div className="flex flex-col gap-4">
              <p
                className="font-semibold text-[16px] leading-[1.75] tracking-[-0.02em] text-[#2d3340]"
                style={{ fontFamily: 'Pretendard, sans-serif' }}
              >
                Mỗi lần gặp bệnh nhân đến làm Implant, lòng tôi nặng trĩu.<br /><br />
                Hầu hết không phải vì răng tự thân xấu. <span className="text-[#008095] font-bold">Không chăm sóc nướu kịp thời kịp thời</span> cuối cùng phải nhổ nhiều hơn rất nhiều.
              </p>
              <p
                className="font-semibold text-[16px] leading-[1.75] tracking-[-0.02em] text-[#2d3340]"
                style={{ fontFamily: 'Pretendard, sans-serif' }}
              >
                Điều trị nướu dễ bị trì hoãn vì đau và phiền. Nhưng chỉ cần lấy cao răng 1 lần/năm, đến ngay khi cảm thấy bất thường cũng <span className="text-[#008095] font-bold">có thể sử dụng răng tự nhiên thêm 20~30 năm.</span>
              </p>
              <p
                className="font-semibold text-[16px] leading-[1.75] tracking-[-0.02em] text-[#2d3340]"
                style={{ fontFamily: 'Pretendard, sans-serif' }}
              >
                Dù Implant tốt đến đâu, không có phục hình nào tốt hơn răng tự nhiên.
              </p>
            </div>

            {/* Chữ ký */}
            <div className="flex items-center gap-3 pt-2 border-t border-[#e9ebf1]">
              <div className="flex flex-col gap-0.5">
                <p
                  className="font-bold text-[15px] text-black tracking-[-0.02em]"
                  style={{ fontFamily: 'Pretendard, sans-serif' }}
                >
                  Bác sĩ Lee Dong-hyun
                </p>
                <p
                  className="font-medium text-[13px] text-[#9298a6] tracking-[-0.01em]"
                  style={{ fontFamily: 'Pretendard, sans-serif' }}
                >
                  Chuyên gia Nha khoa Tổng hợp · Godeok First Dental Bác sĩ trưởng
                </p>
              </div>
            </div>
          </div>

          {/* 3 số liệu chính */}
          <div className="flex flex-col gap-3">
            {[
              { num: '1 lần/năm', desc: 'Chỉ lấy cao răng đã giảm 14% nguy cơ bệnh tim mạch' },
              { num: '80%', desc: 'Người lớn mắc bệnh nướu — hầu hết không có triệu chứng' },
              { num: '3 lần', desc: 'Nguy cơ cần Implant khi bỏ quên viêm nha chu' },
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
