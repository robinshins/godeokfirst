'use client';

import Image from 'next/image';

export default function AfterCareSection() {
  const benefits = [
    {
      title: 'Người cần chăm sóc Implant',
      desc: 'Phân tích vi khuẩn có hại để phòng ngừa viêm quanh Implant'
    },
    {
      title: 'Người bị bệnh nướu · hơi thở nặng',
      desc: 'Phân tích chính xác vi khuẩn gây bệnh nha chu và chăm sóc cá nhân'
    },
    {
      title: 'Người lo lắng về sức khỏe toàn thân',
      desc: 'Kiểm tra sức khỏe toàn thân qua phân tích trục miệng-ruột'
    }
  ];

  return (
    <div className="bg-[#0b1727] w-full flex justify-center">
      <div className="box-border flex flex-col gap-[50px] items-center px-4 py-[60px] relative w-full max-w-[430px]">
        {/* Header */}
        <div className="flex flex-col gap-4 items-center justify-center relative shrink-0 w-full">
          <div className="h-6 overflow-clip relative shrink-0 w-[168px]">
            <Image
              src="/고덕퍼스트치과-로고-(화트).png"
              alt="Godeok First Dental"
              width={168}
              height={24}
              className="w-full h-full brightness-0 invert"
            />
          </div>
          <div className="flex flex-col gap-4 items-center justify-center relative shrink-0 w-full">
            <p className="text-[14px] font-bold text-[#6eb7bc] tracking-[3px] uppercase">
              SCIENTIFIC AFTERCARE
            </p>
            <h2 className="font-bold leading-[1.35] not-italic text-[32px] text-white text-center tracking-[-0.64px] w-full" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
              Điều quan trọng hơn cấy ghép là<br />
              chăm sóc sau điều trị
            </h2>
            <p className="font-medium leading-[1.6] not-italic text-[#a0c4d4] text-[15px] text-center tracking-[-0.32px] w-full" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
              &quot;Chúng tôi chịu trách nhiệm đến cùng để bạn sử dụng suốt đời&quot;<br />
              <span className="text-white/70 text-[14px]">Nha khoa đầu tiên tại Hàn Quốc áp dụng xét nghiệm vi sinh NGS</span>
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col gap-6 items-start relative shrink-0 w-full">

          {/* Huy hiệu hợp tác Macrogen */}
          <div className="w-full flex justify-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-5 py-2 border border-white/20">
              <p className="text-[#6eb7bc] text-[13px] font-bold" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                🧬 Công ty phân tích gen toàn cầu <span className="text-white">Macrogen</span> hợp tác
              </p>
            </div>
          </div>

          {/* Ảnh xét nghiệm vi sinh vật */}
          <div className="flex flex-col items-center overflow-hidden rounded-2xl relative shrink-0 w-full">
            <div className="h-[380px] relative shrink-0 w-full bg-white">
              <Image
                src="/images_official/macrogen-microbiome-test.png"
                alt="Xét nghiệm vi sinh vật Macrogen NGS"
                fill
                className="object-contain"
              />
            </div>
            <div className="bg-gradient-to-br from-[#008fd2] to-[#006aaa] box-border flex flex-col gap-3 items-start p-5 relative shrink-0 w-full">
              <p className="font-bold leading-[1.35] not-italic text-[20px] text-white tracking-[-0.4px] w-full" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                Phân tích trình tự gen thế hệ mới NGS
              </p>
              <p className="font-medium leading-[1.6] not-italic text-white/90 text-[14px] tracking-[-0.28px] w-full" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                Phân tích chính xác hơn 700 loại vi sinh vật trong miệng<br />
                Xác định trước vi khuẩn gây sâu răng·viêm nha chu
              </p>
            </div>
          </div>

          {/* Tại sao xét nghiệm vi sinh tại nha khoa? */}
          <div className="w-full bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10">
            <p className="text-[#6eb7bc] text-[13px] font-bold mb-3" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
              Tại sao xét nghiệm vi sinh tại nha khoa?
            </p>
            <p className="text-white/90 text-[14px] leading-[1.7]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
              Miệng là <span className="text-[#6eb7bc] font-bold">&quot;cửa ngõ nơi sức khỏe cơ thể bắt đầu&quot;</span>. Vi khuẩn có hại trong miệng không chỉ ở trong miệng mà còn lan ra toàn thân qua máu <span className="text-white font-bold">bệnh tim mạch, tiểu đường, sa sút trí tuệ</span> v.v.
            </p>
          </div>

          {/* 검사 결과지 hình ảnh */}
          <div className="flex flex-col items-center overflow-hidden rounded-2xl relative shrink-0 w-full">
            <div className="h-[250px] relative shrink-0 w-full">
              <Image
                src="/images_official/macrogen-test-result.png"
                alt="Kết quả xét nghiệm vi sinh vật"
                fill
                className="object-contain bg-white"
              />
            </div>
            <div className="bg-[#1a2a3a] box-border flex flex-col gap-2 items-center p-4 relative shrink-0 w-full">
              <p className="font-bold text-white text-[15px]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                Cung cấp báo cáo phân tích cá nhân
              </p>
              <p className="text-[#a0c4d4] text-[13px]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                Kết quả chi tiết trong 2-3 tuần sau xét nghiệm
              </p>
            </div>
          </div>

          {/* Ảnh hưởng sức khỏe toàn thân */}
          <div className="flex flex-col items-center overflow-hidden rounded-2xl relative shrink-0 w-full">
            <div className="h-[340px] relative shrink-0 w-full bg-white">
              <Image
                src="/images_official/microbiome-health-impact.png"
                alt="Ảnh hưởng của vi sinh vật đến sức khỏe toàn thân"
                fill
                className="object-contain"
              />
            </div>
            <div className="bg-[#1a2a3a] box-border flex flex-col gap-2 items-start p-5 relative shrink-0 w-full">
              <p className="font-bold text-white text-[16px]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                Vi sinh vật miệng → Kết nối sức khỏe toàn thân
              </p>
              <p className="text-[#a0c4d4] text-[13px] leading-[1.6]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                Vi khuẩn có hại trong miệng lan qua mạch máu ra toàn thân<br />
                ảnh hưởng đến nhiều bệnh toàn thân
              </p>
            </div>
          </div>

          {/* Đối tượng khuyến nghị xét nghiệm */}
          <div className="w-full">
            <p className="text-[#6eb7bc] text-[13px] font-bold mb-4 text-center" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
              Khuyến nghị cho những người
            </p>
            <div className="flex flex-col gap-3">
              {benefits.map((item, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <div className="flex items-start gap-3">
                    <div className="bg-[#008fd2] rounded-lg w-8 h-8 flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-white text-[15px] mb-1" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                        {item.title}
                      </p>
                      <p className="text-[#a0c4d4] text-[13px]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quy trình xét nghiệm */}
          <div className="w-full">
            <p className="text-[#6eb7bc] text-[13px] font-bold mb-4 text-center" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
              Xét nghiệm rất đơn giản
            </p>
            <div className="flex justify-between items-center">
              <div className="flex flex-col items-center gap-2 flex-1">
                <div className="bg-[#008fd2] rounded-full w-12 h-12 flex items-center justify-center">
                  <span className="text-white text-lg">💧</span>
                </div>
                <p className="text-white text-[13px] font-bold text-center" style={{ fontFamily: '"NanumSquare", sans-serif' }}>Lấy nước bọt</p>
                <p className="text-[#a0c4d4] text-[11px] text-center" style={{ fontFamily: '"NanumSquare", sans-serif' }}>Mất 3 phút</p>
              </div>
              <div className="text-[#6eb7bc]">→</div>
              <div className="flex flex-col items-center gap-2 flex-1">
                <div className="bg-[#008fd2] rounded-full w-12 h-12 flex items-center justify-center">
                  <span className="text-white text-lg">🧬</span>
                </div>
                <p className="text-white text-[13px] font-bold text-center" style={{ fontFamily: '"NanumSquare", sans-serif' }}>Phân tích NGS</p>
                <p className="text-[#a0c4d4] text-[11px] text-center" style={{ fontFamily: '"NanumSquare", sans-serif' }}>Macrogen</p>
              </div>
              <div className="text-[#6eb7bc]">→</div>
              <div className="flex flex-col items-center gap-2 flex-1">
                <div className="bg-[#008fd2] rounded-full w-12 h-12 flex items-center justify-center">
                  <span className="text-white text-lg">📋</span>
                </div>
                <p className="text-white text-[13px] font-bold text-center" style={{ fontFamily: '"NanumSquare", sans-serif' }}>Tư vấn kết quả</p>
                <p className="text-[#a0c4d4] text-[11px] text-center" style={{ fontFamily: '"NanumSquare", sans-serif' }}>Sau 2-3 tuần</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
