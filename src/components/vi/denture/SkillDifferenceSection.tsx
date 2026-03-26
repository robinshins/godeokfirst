'use client';

export default function SkillDifferenceSection() {
  const generalClinic = [
    {
      title: 'Không có phòng lab nội bộ',
      description: 'Ủy thác cho phòng lab bên ngoài tăng chi phí và thời gian,\nkhông thể làm chi tiết'
    },
    {
      title: 'Răng tạm 1 giai đoạn',
      description: 'Phục hình cuối ngay không điều chỉnh khớp cắn'
    },
    {
      title: 'Có khả năng tái phẫu thuật',
      description: 'Nếu không có thiết bị chuyên dụng và\nchăm sóc sau không đúng cách, có khả năng tái phẫu thuật'
    }
  ];

  const medisClinic = [
    {
      title: 'Tay nghề hoàn hảo',
      description: 'Nha sĩ đến học hỏi,\nBác sĩ trưởng đào tạo cho các nha sĩ khác'
    },
    {
      title: 'Hệ thống răng tạm 3 giai đoạn',
      description: 'Điều chỉnh chính xác từng bước để khớp cắn hoàn hảo'
    },
    {
      title: 'Kỷ lục 0 ca tái phẫu thuật',
      description: 'Hoàn hảo chỉ trong một lần với kỹ thuật vượt trội'
    }
  ];

  return (
    <div className="bg-[#f3f6fb] w-full flex justify-center">
      <div className="box-border flex flex-col gap-[50px] items-start px-4 py-[60px] relative w-full max-w-[430px]">
        {/* Header */}
        <div className="flex flex-col gap-3 items-start relative shrink-0 w-full">
          <div className="flex flex-col gap-4 items-center justify-center relative shrink-0 w-full">
            <div className="flex flex-col gap-3 items-center justify-center relative shrink-0 w-full">
              <h2 className="font-bold leading-[1.35] not-italic text-[32px] text-black text-center tracking-[-0.64px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                Khi tay nghề khác biệt<br />
                kết quả cũng khác biệt
              </h2>
            </div>
          </div>
          <div className="font-semibold leading-[1.4] not-italic text-[#727582] text-base text-center tracking-[-0.32px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            Làm đúng ngay từ đầu là lựa chọn khôn ngoan nhất<br />
            Thủ thuật hoàn hảo không cần tái phẫu thuật, đó mới là tay nghề thực sự
          </div>
        </div>

        {/* Comparison */}
        <div className="flex flex-col gap-6 items-start relative shrink-0 w-full">
          {/* General Clinic */}
          <div className="flex flex-col gap-10 items-start relative shrink-0 w-full">
            <div className="flex flex-col gap-6 items-start relative shrink-0 w-full">
              <div className="bg-white box-border flex flex-col gap-5 items-center justify-center p-6 relative rounded-[24px] shadow-[0px_24px_50px_-12px_rgba(45,54,67,0.12)] shrink-0 w-full">
                <div className="flex flex-col gap-[14px] items-start relative shrink-0 w-full">
                  <div className="flex flex-col gap-4 items-start not-italic relative shrink-0 text-center w-full">
                    <p className="font-bold leading-[1.35] text-2xl text-black tracking-[-0.48px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                      Nha khoa thông thường
                    </p>
                    <p className="font-semibold leading-[1.4] text-[#727582] text-base tracking-[-0.32px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                      Vẫn lo lắng sau thủ thuật
                    </p>
                  </div>
                </div>
                {generalClinic.map((item, index) => (
                  <div key={index} className="bg-[#f3f6fb] box-border flex flex-col gap-[14px] items-start p-5 relative rounded-2xl shrink-0 w-full">
                    <div className="flex flex-col gap-1.5 items-start justify-center not-italic relative shrink-0 text-center w-full">
                      <p className="font-bold leading-[1.5] text-[17px] text-black tracking-[-0.34px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                        {item.title}
                      </p>
                      <p className="font-semibold leading-[1.4] text-[#727582] text-[15px] tracking-[-0.3px] w-full whitespace-pre-line" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Godeok First */}
          <div className="flex flex-col gap-10 items-start relative shrink-0 w-full">
            <div className="flex flex-col gap-6 items-start relative shrink-0 w-full">
              <div className="bg-[#008095] box-border flex flex-col gap-5 items-center justify-center p-6 relative rounded-[24px] shadow-[0px_24px_50px_-12px_rgba(45,54,67,0.12)] shrink-0 w-full">
                <div className="flex flex-col gap-[14px] items-start relative shrink-0 w-full">
                  <div className="flex flex-col gap-4 items-start not-italic relative shrink-0 text-center text-white w-full">
                    <p className="font-bold leading-[1.35] text-2xl tracking-[-0.48px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                      Godeok First Dental
                    </p>
                    <p className="font-semibold leading-[1.4] text-base tracking-[-0.32px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                      Godeok First Dental với tay nghề vượt trội<br />
                      cam kết chỉ một lần thủ thuật suốt đời
                    </p>
                  </div>
                </div>
                {medisClinic.map((item, index) => (
                  <div key={index} className="bg-white box-border flex flex-col gap-[14px] items-start p-5 relative rounded-2xl shrink-0 w-full">
                    <div className="flex flex-col gap-1.5 items-start justify-center not-italic relative shrink-0 text-center w-full">
                      <p className="font-bold leading-[1.5] text-[17px] text-black tracking-[-0.34px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                        {item.title}
                      </p>
                      <p className="font-semibold leading-[1.4] text-[#727582] text-[15px] tracking-[-0.3px] w-full whitespace-pre-line" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
