import Image from 'next/image';

export default function ThreeStepNewSection() {
  const steps = [
    {
      title: 'Raqamli tahlil',
      description: '3D CT va skaner yordamida jag\' suyagi holati va asab tolalari joylashuvi aniq belgilanadi.',
      image: '/images/step-01.jpg'
    },
    {
      title: 'Virtual operatsiya',
      description: 'Kompyuterda operatsiyani oldindan bajarib, eng xavfsiz joylashuv va burchak tanlanadi.',
      image: '/images/step-02.jpg'
    },
    {
      title: 'Aniq operatsiya',
      description: 'Navigatsiya yo\'riqnomasi yordamida rejalashtirilgan joyga implant aniq o\'rnatiladi.',
      image: '/images/step-03.jpg'
    }
  ];

  return (
    <div className="bg-[#f8f9fa] w-full">
      <div className="max-w-[430px] mx-auto px-4 py-16">
        <div className="flex flex-col gap-12">
          <div className="text-center flex flex-col gap-3">
            <h2 className="text-[28px] font-bold text-[#111827] leading-[1.3]">Xavfsiz 3 qadam</h2>
            <p className="text-[#6b7280]">Medis raqamli navigatsiya tizimi</p>
          </div>

          <div className="flex flex-col gap-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col gap-6">
                <div className="relative w-full aspect-[16/9] rounded-[24px] overflow-hidden shadow-sm">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 w-10 h-10 bg-[#006aff] text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {index + 1}
                  </div>
                </div>
                <div className="px-2 flex flex-col gap-2">
                  <h3 className="text-2xl font-bold text-[#374151]">{step.title}</h3>
                  <p className="text-[#6b7280] text-lg leading-[1.6]">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

