'use client';

export default function TmjSymptomsSection() {
  const symptoms = [
    {
      icon: '🔊',
      title: 'Hàm phát ra tiếng',
      desc: 'Tiếng "click", "tách" lặp đi lặp lại khi há hoặc ngậm miệng.',
    },
    {
      icon: '😣',
      title: 'Hàm đau',
      desc: 'Đau xung quanh hàm khi nhai, ngáp, nói chuyện.',
    },
    {
      icon: '😶',
      title: 'Khó mở miệng',
      desc: 'Khó mở miệng rộng, hoặc hàm lệch sang một bên khi mở.',
    },
    {
      icon: '🤕',
      title: 'Đau đầu · Đau tai',
      desc: 'Đau đầu không rõ nguyên nhân hoặc đau trước tai lặp lại.',
    },
    {
      icon: '💤',
      title: 'Nghiến răng · Siết chặt răng',
      desc: 'Nghiến răng khi ngủ hoặc vô thức siết chặt răng ban ngày.',
    },
    {
      icon: '🦴',
      title: 'Đau cổ · vai',
      desc: 'Vấn đề khớp thái dương hàm dẫn đến căng thẳng và đau cơ cổ vai.',
    },
  ];

  return (
    <div className="bg-[#21314E] w-full py-[80px] px-5">
      <div className="max-w-[430px] mx-auto flex flex-col gap-12">

        {/* Header */}
        <div className="flex flex-col gap-4 text-center">
          <p
            className="text-[#4DC8D8] font-bold text-[13px] tracking-[0.2em] uppercase"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            Self Check
          </p>
          <h2
            className="font-bold text-[30px] leading-[1.3] tracking-[-0.04em] text-white"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            Nếu có triệu chứng như thế này<br />hãy nghi ngờ rối loạn khớp thái dương hàm
          </h2>
          <p
            className="font-medium text-white/60 text-[16px] leading-[1.6] tracking-[-0.02em]"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            Nếu có từ 2 triệu chứng trở lên<br />khuyến nghị khám chuyên gia.
          </p>
        </div>

        {/* Symptom Cards */}
        <div className="flex flex-col gap-4">
          {symptoms.map((symptom, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 rounded-[20px] p-5 flex items-start gap-4">
              <div className="text-2xl shrink-0 mt-[2px]">{symptom.icon}</div>
              <div className="flex flex-col gap-1">
                <h3
                  className="font-bold text-[17px] text-white tracking-[-0.02em] leading-[1.3]"
                  style={{ fontFamily: 'Pretendard, sans-serif' }}
                >
                  {symptom.title}
                </h3>
                <p
                  className="text-white/60 text-[14px] leading-[1.6] tracking-[-0.01em]"
                  style={{ fontFamily: 'Pretendard, sans-serif' }}
                >
                  {symptom.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="bg-[#008095]/10 border border-[#008095]/30 rounded-2xl p-6 flex flex-col gap-2 text-center">
          <p
            className="text-[#4DC8D8] font-bold text-[16px] leading-[1.5]"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            Rối loạn khớp thái dương hàm khó tự khỏi.<br />Điều trị sớm là hiệu quả nhất.
          </p>
          <p className="text-white/40 text-[13px]">
            Càng bỏ qua, tổn thương đĩa khớp càng tiến triển và điều trị càng phức tạp.
          </p>
        </div>

      </div>
    </div>
  );
}
