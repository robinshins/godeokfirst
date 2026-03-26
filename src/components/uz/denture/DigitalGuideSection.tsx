'use client';

import Image from 'next/image';

export default function DigitalGuideSection() {
  const steps = [
    {
      number: 1,
      image: '/images/goduk_images/digital-guide-1.png',
      description: 'Ogʼiz boʼshligʼini skanerlash\n3D ogʼiz skanerlash tizimi bilan aniq tashxis'
    },
    {
      number: 2,
      image: '/images/goduk_images/digital-guide-2.png',
      description: 'Kompyuterda yaratilgan ogʼiz tuzilishini hisobga olib kesimsiz tish oʼrnatish rejasi'
    },
    {
      number: 3,
      image: '/images/goduk_images/digital-guide-3.png',
      description: 'Yoʼnaltiruvchi qurilmani muolaja joyiga oʼrnatib 1mm xatolikni minimallashtirish'
    },
    {
      number: 4,
      image: '/images/goduk_images/4.png',
      description: 'Minimal kesim bilan boshqa muolajaga nisbatan vaqtni qisqartirish va ogʼriq hamda shishni minimallashtirish'
    },
    {
      number: 5,
      image: '/images/goduk_images/digital-guide-5.png',
      description: 'Holatga qarab simulyatsiya operatsiya oʼtkazib xatolikni minimallashtirish va muolaja mamnuniyatini oshirish'
    }
  ];

  return (
    <div className="bg-white w-full flex justify-center">
      <div className="box-border flex flex-col gap-10 items-start px-4 py-[60px] relative w-full max-w-[430px]">
        {/* Header */}
        <div className="flex flex-col gap-4 items-center justify-center relative shrink-0 w-full">
          <div className="flex flex-col gap-3 items-center justify-center leading-[0] not-italic relative shrink-0 text-center w-full">
            <h2 className="font-bold leading-[1.35] text-[32px] text-black tracking-[-0.64px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            Godeok First Dental doimo <br /> 2 marta operatsiya qiladi
            </h2>
            <div className="font-semibold leading-[1.4] text-[#727582] text-base tracking-[-0.32px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              Bosh shifokor shaxsan virtual implant operatsiyasi bilan<br />
              optimal oʼrnatish joyini loyihalagandan keyin<br />
              haqiqiy operatsiyani oʼtkazadi<br />
              <br />
              <span className="font-bold text-[#008095]">Tez va qulay operatsiya</span> bilan<br />
              shish va ogʼriqni minimallashtirib<br />
              suyak koʼchirishni ham minimallashtiradi
            </div>
          </div>
        </div>



        {/* Steps */}
        <div className="flex flex-col gap-4 items-center relative shrink-0 w-full">
          {steps.map((step) => (
            <div key={step.number} className="bg-white border border-[#f3f6fb] rounded-[24px] overflow-hidden w-full">
              {/* Step Image */}
              <div className="relative w-full aspect-[343/200] bg-[#f8f9fa]">
                <Image
                  src={step.image}
                  alt={`Step ${step.number}`}
                  fill
                  className="object-contain"
                />
                {/* Number Badge */}
                <div className="absolute left-4 bottom-4">
                  <div className="bg-[#008095] flex items-center justify-center rounded-lg w-10 h-10">
                    <p className="font-bold text-white text-lg" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                      {step.number}
                    </p>
                  </div>
                </div>
              </div>
              {/* Description */}
              <div className="p-6">
                <p className="font-semibold leading-[1.6] text-[15px] text-black tracking-[-0.3px] whitespace-pre-line" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="flex flex-col gap-6 items-center relative shrink-0 w-full mt-10">
          <h3 className="font-bold leading-[1.35] text-[28px] text-black tracking-[-0.56px] text-center w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            Haqiqiy muolaja holatlari
          </h3>
          <div className="flex flex-col gap-4 w-full">
            {caseStudies.map((image, index) => (
              <div key={index} className="relative w-full aspect-[343/200] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={image}
                  alt={`Toʼliq implant muolaja holati ${index + 1}`}
                  fill
                  className="object-contain bg-white"
                />
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
}
