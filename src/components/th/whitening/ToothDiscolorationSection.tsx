import Image from 'next/image';

export default function ToothDiscolorationSection() {
  const causes = [
    {
      title: 'กาแฟและเครื่องดื่ม',
      description: 'สารแทนนินในชา กาแฟ และไวน์แดง ซึมเข้าสู่เนื้อฟัน',
      image: '/images/cause-coffee.jpg'
    },
    {
      title: 'การสูบบุหรี่',
      description: 'คราบน้ำมันและนิโคตินทำให้ฟันเหลืองและหมองคล้ำ',
      image: '/images/cause-smoking.jpg'
    },
    {
      title: 'อายุที่มากขึ้น',
      description: 'เคลือบฟันบางลงทำให้เห็นเนื้อฟันสีเหลืองด้านในชัดขึ้น',
      image: '/images/cause-aging.jpg'
    }
  ];

  return (
    <div className="bg-[#f8f9fa] w-full">
      <div className="box-border flex flex-col gap-10 items-start px-4 py-[60px] relative w-full max-w-[430px] mx-auto">
        <h2 className="font-bold leading-[1.35] text-[32px] text-black tracking-[-0.64px] text-center w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
          สาเหตุที่ทำให้<br />ฟันของคุณเปลี่ยนสี
        </h2>

        <div className="flex flex-col gap-8 w-full">
          {causes.map((cause, index) => (
            <div key={index} className="flex gap-4 p-4 rounded-2xl bg-white items-center shadow-sm">
              <div className="w-24 h-24 shrink-0 rounded-xl overflow-hidden">
                <Image src={cause.image} alt={cause.title} width={96} height={96} className="object-cover h-full" />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-bold text-lg text-[#292a2f]" style={{ fontFamily: 'Pretendard, sans-serif' }}>{cause.title}</h3>
                <p className="text-sm text-[#5d5f6d] leading-[1.4]" style={{ fontFamily: 'Pretendard, sans-serif' }}>{cause.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

