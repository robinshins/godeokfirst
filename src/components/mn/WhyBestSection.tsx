import Image from 'next/image';

export default function WhyBestSection() {
  return (
    <div className="bg-white">
      <div className="max-w-[430px] mx-auto">
        {/* Section Header */}
        <div className="text-center py-[60px]">
          <div className="flex justify-center items-center mb-4">
            <div className="h-11 relative shrink-0 overflow-hidden">
              <Image
                src="/고덕퍼스트치과-로고-(블랙).png"
                alt="Godeok First Dental"
                width={375}
                height={84}
                className="h-20 w-auto object-contain -mt-[18px]"
              />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-black leading-[1.35]">
            Godeok First Dental
            <br />
            шилдэг байх шалтгаан
          </h2>
        </div>

        {/* Reason 1: Нийлмэл шүдний мэргэжилтэн */}
        <div className="px-4 py-8 bg-white">
          <div className="text-center mb-10">
            <p className="text-3xl font-bold text-[#008095] mb-3">1</p>
            <h3 className="text-3xl font-bold text-[#21314E] mb-3 leading-[1.35]">
              Эрүүл мэндийн яам баталгаажуулалт
              <br />
              Нийлмэл шүдний мэргэжилтэн
            </h3>
            <p className="text-[14px] font-semibold text-[#727582]">
 Ерөнхий эмч, мэс засал, дараахарчилгаа 
            </p>
          </div>

 {/* Эрүүл мэндийн яам баталгаажуулалт */}
          <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-md">
            <Image
              src="/images/goduk_images/원장이력 등 걸려있는사진.jpg"
              alt="Эрүүл мэндийн яам баталгаажуулалт Нийлмэл шүдний мэргэжилтэн болон эмч ажлын туршлага"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Reason 2: Имплант судалгааны зөвлөлийн гишүүнвон */}
        <div className="px-4 py-8 bg-gradient-to-b from-[#331f0c] via-[#584025] to-[#866947]">
          <div className="text-center mb-10">
            <p className="text-3xl font-bold text-white mb-3">2</p>
            <h3 className="text-3xl font-bold text-[#f3f6fb] mb-3 leading-[1.35]">
              Osstem, Point, Dentis
              <br />
              Имплант судалгааны зөвлөлийн гишүүнвон
            </h3>
            <p className="text-[14px] font-semibold text-[#e9ebf1]">
 Имплант судалгааны зөвлөлийн гишүүнвон 
              <br />
              хамгийн сүүлийн үеийн технологи, тоног төхөөрөмжийг ашигладаг
            </p>
          </div>

 {/* баталгаажуулалт */}
          <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-md">
            <Image
              src="/images/goduk_images/각종인증서.png"
 alt="Osstem·Point·Dentis Имплант судалгааны зөвлөлийн гишүүнвон баталгаажуулалт"
              fill
              className="object-cover"
            />
          </div>
        </div>

 {/* Reason 3: дижитал */}
        <div className="px-2 py-8 bg-white">
          <div className="text-center mb-10">
            <p className="text-3xl font-bold text-[#008095] mb-3">3</p>
            <h3 className="text-3xl font-bold text-[#21314E] mb-3 leading-[1.35]">
              Хамгийн сүүлийн үеийн дижитал тоног төхөөрөмж
            </h3>
            <p className="text-base font-semibold text-[#727582]">
              3D КТ, дижитал сканнер, дижитал чиглүүлэгч мэс заслын систем гэх мэт
              <br />
              Дэвшилтэт тоног төхөөрөмжөөр нарийвчилсан эмчилгээ хийнэ
            </p>
          </div>

 {/* */}
          <div className="overflow-x-auto flex gap-3 pb-4">
            <div className="flex-none w-[320px] aspect-[4/3] rounded-xl overflow-hidden relative shadow-md">
              <Image
                src="/images/goduk_images/스캐너사진.jpg"
 alt="3D CT сканнер"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-none w-[320px] aspect-[4/3] rounded-xl overflow-hidden relative shadow-md">
              <Image
                src="/images/goduk_images/진료실사진.jpg"
 alt="дижитал сканнер X-ray эмчилгээний өрөө"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-none w-[320px] aspect-[4/3] rounded-xl overflow-hidden relative shadow-md">
              <Image
                src="/images/goduk_images/수술실.jpg"
 alt="мэс засал"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-none w-[320px] aspect-[4/3] rounded-xl overflow-hidden relative shadow-md">
              <Image
                src="/images/goduk_images/진료실.jpg"
 alt="OSSTEM эмчилгээний өрөө"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
