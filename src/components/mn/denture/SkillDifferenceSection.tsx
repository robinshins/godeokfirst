'use client';

export default function SkillDifferenceSection() {
  const generalClinic = [
    {
      title: 'Дотоод лаборатори байхгүй',
      description: 'Гадны лабораторид захиалгадаг тул зардал, хугацаа нэмэгддэг,\nнарийн ажил хийх боломжгүй'
    },
    {
      title: '1 шатлалт түр шүд',
      description: 'Зуурлын тохируулгагүйгээр шууд эцсийн сэргээн засал'
    },
    {
      title: 'Дахин мэс засал хийх магадлалтай',
      description: 'Мэргэжлийн тоног төхөөрөмжгүй, дараах арчилгаа\nзохих ёсоор хийгдэхгүй бол дахин мэс засал хийх магадлалтай'
    }
  ];

  const medisClinic = [
    {
      title: 'Төгс ур чадвар',
      description: 'Шүдний эмч нар суралцахаар ирдэг,\nерөнхий эмч бусад шүдний эмч нарт сургалт явуулдаг'
    },
    {
      title: '3 шатлалт түр шүдний систем',
      description: 'Төгс зуурлын тохиргоонд зориулсан шатлал тус бүрийн нарийвчилсан тохируулга'
    },
    {
      title: 'Дахин мэс засал 0 удаагийн бүртгэл',
      description: 'Давамгайлсан ур чадвараар нэг л удаад төгс хийнэ'
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
                Ур чадвар өөр бол<br />
                үр дүн өөр байна
              </h2>
            </div>
          </div>
          <div className="font-semibold leading-[1.4] not-italic text-[#727582] text-base text-center tracking-[-0.32px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            Эхнээсээ зөв хийх нь хамгийн ухаалаг сонголт<br />
            Дахин мэс заслын шаардлагагүй төгс эмчилгээ, энэ бол жинхэнэ ур чадвар
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
                      Энгийн шүдний эмнэлэг
                    </p>
                    <p className="font-semibold leading-[1.4] text-[#727582] text-base tracking-[-0.32px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                      Эмчилгээний дараа ч санаа зовсоор байна
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
                      고덕퍼스트치과
                    </p>
                    <p className="font-semibold leading-[1.4] text-base tracking-[-0.32px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                      고덕퍼스트치과는 압도적인 실력으로<br />
                      Насан туршдаа нэг удаагийн эмчилгээг амлана
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
