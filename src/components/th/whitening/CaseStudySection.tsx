import Image from 'next/image';

export default function CaseStudySection() {
  const cases = [
    {
      title: 'เคสฟันเหลืองจากการดื่มกาแฟ',
      result: 'ขาวขึ้น 5 ระดับหลังฟอกสีฟันแบบ Best',
      before: '/images/whitening-ba-1-before.jpg',
      after: '/images/whitening-ba-1-after.jpg'
    },
    {
      title: 'เคสปรับรอยยิ้มด้วยวีเนียร์',
      result: 'แก้ไขฟันเหลืองและฟันห่างด้วยวีเนียร์ 6 ซี่บน',
      before: '/images/whitening-ba-2-before.jpg',
      after: '/images/whitening-ba-2-after.jpg'
    }
  ];

  return (
    <div className="bg-white w-full">
      <div className="box-border flex flex-col gap-10 items-start px-4 py-[60px] relative w-full max-w-[430px] mx-auto">
        <h2 className="font-bold leading-[1.35] text-[32px] text-black tracking-[-0.64px] text-center w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
          ความเปลี่ยนแปลงที่<br />น่าประทับใจ
        </h2>

        <div className="flex flex-col gap-10 w-full">
          {cases.map((item, index) => (
            <div key={index} className="flex flex-col gap-6 w-full">
              <div className="flex flex-col gap-2 px-2">
                <h3 className="font-bold text-xl text-[#292a2f]" style={{ fontFamily: 'Pretendard, sans-serif' }}>{item.title}</h3>
                <p className="text-[#006aff] font-medium" style={{ fontFamily: 'Pretendard, sans-serif' }}>{item.result}</p>
              </div>
              <div className="grid grid-cols-2 gap-4 w-full">
                <div className="flex flex-col gap-2">
                  <div className="relative aspect-video rounded-xl overflow-hidden shadow-sm">
                    <Image src={item.before} alt="Before" fill className="object-cover" />
                  </div>
                  <p className="text-center text-xs font-bold text-[#9a9ca8]" style={{ fontFamily: 'Pretendard, sans-serif' }}>ก่อนทำ</p>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="relative aspect-video rounded-xl overflow-hidden border-2 border-[#006aff] shadow-sm">
                    <Image src={item.after} alt="After" fill className="object-cover" />
                  </div>
                  <p className="text-center text-xs font-bold text-[#006aff]" style={{ fontFamily: 'Pretendard, sans-serif' }}>หลังทำ</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

