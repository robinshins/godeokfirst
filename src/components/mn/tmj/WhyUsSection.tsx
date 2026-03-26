'use client';

export default function TmjWhyUsSection() {
  return (
    <div className="bg-white w-full py-[80px] px-5 relative overflow-hidden">

      <div className="absolute top-0 right-[-100px] w-[300px] h-[300px] bg-[#008095]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[430px] mx-auto flex flex-col gap-[60px] relative z-10">

        {/* Header */}
        <div className="flex flex-col gap-5 text-center">
          <p
            className="text-[#008095] font-bold text-[13px] tracking-[0.2em] uppercase"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            Why Us
          </p>
          <h2
            className="font-bold text-[32px] leading-[1.3] tracking-[-0.04em] text-black"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            Godeok First Dental-д<br />
            Эрүүний үений эмчилгээ<br />
 <span className="text-[#008095]"> </span>
          </h2>
        </div>

        {/* Reasons */}
        <div className="flex flex-col gap-5">
          {[
            {
              num: '01',
 title:'Нийлмэл шүдний мэргэжилтэн',
 desc:'эрүүний үе зуун, хиймэл шүд, буйлны гэх мэт минут. Нийлмэл шүдний мэргэжилтэн бүрэн шалтгаан боломжтой.',
            },
            {
              num: '02',
 title:'мэс засал эмчилгээ',
 desc:'минут эрүүний үе эмгэг мэс засал эмчилгээ., эмчилгээ, сплинт гэх мэт эмчилгээ өвчтөн хамгийн бага.',
            },
            {
              num: '03',
 title:'төрөл сплинт нарийвчилсан үйлдвэрлэл',
 desc:'дижитал зуун минут өвчтөн сплинт нарийвчилсан үйлдвэрлэл. зуун тохируулга эмчилгээ.',
            },
            {
              num: '04',
 title:'шалтгаан шийдвэрлэх',
 desc:'өвдөлт, буруузуун·гэмтэл шүд· гэх мэт шалтгаан шийдвэрлэх дахин.',
            },
          ].map((reason, idx) => (
            <div key={idx} className="bg-[#f8f9fb] rounded-[24px] p-6 flex flex-col gap-4 border border-[#e9ebf1]">
              <div className="flex items-center gap-3">
                <span
                  className="text-[#008095] font-bold text-[28px] tracking-[-0.03em]"
                  style={{ fontFamily: 'Pretendard, sans-serif' }}
                >
                  {reason.num}
                </span>
                <h3
                  className="font-bold text-[18px] text-black tracking-[-0.02em] leading-[1.3]"
                  style={{ fontFamily: 'Pretendard, sans-serif' }}
                >
                  {reason.title}
                </h3>
              </div>
              <p
                className="text-[#727582] text-[14px] leading-[1.7] tracking-[-0.01em]"
                style={{ fontFamily: 'Pretendard, sans-serif' }}
              >
                {reason.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-8 shadow-xl text-center">
          <p
            className="text-[22px] font-bold text-white leading-[1.4]"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            эрүүний үе өвдөлт,<br />
 <span className="text-[#4DC8D8]"> нас </span>
          </p>
          <p className="text-white/50 text-[14px] mt-2">
 эхний эмчилгээ.
          </p>
        </div>

      </div>
    </div>
  );
}
