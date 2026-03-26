'use client';

import { useState } from 'react';
import Link from 'next/link';

type ModalType = 'privacy' | 'terms' | 'rights' | 'prices' | null;

export default function FooterSection() {
  const [openModal, setOpenModal] = useState<ModalType>(null);

  return (
    <footer className="bg-white border-t border-[#e9ebf1]">
      {/* Эмнэлгийн анхааруулга */}
      <div className="bg-gray-100 py-4 px-4">
        <div className="max-w-[430px] mx-auto">
          <p className="text-[10px] text-gray-500 leading-relaxed text-center">
            Энэ вэбсайт дахь эмчилгээний үр дүн, сэтгэгдэл нь хувь хүний туршлагад суурилсан бөгөөд үр дүн өөр байж болно.
            Бүх эмнэлгийн процедурт цус алдалт, халдвар, хавагнал зэрэг гаж нөлөө дагалдаж болно. Нарийвчилсан оношлогоо, эмчилгээний төлөвлөгөөг мэргэжилтэнтэй зөвлөсний дараа тодорхойлно.
          </p>
        </div>
      </div>

      <div className="max-w-[430px] mx-auto px-4 py-10">
        <div className="space-y-20">
          {/* Footer Links */}
          <div className="flex justify-between text-[13px] font-semibold text-[#37373e]">
            <button onClick={() => setOpenModal('privacy')} className="hover:text-gray-900">Нууцлалын бодлого</button>
            <button onClick={() => setOpenModal('terms')} className="hover:text-gray-900">Ашиглалтын нөхцөл</button>
            <button onClick={() => setOpenModal('rights')} className="hover:text-gray-900">Өвчтөний эрх, үүрэг</button>
            <button onClick={() => setOpenModal('prices')} className="hover:text-gray-900">Үнийн жагсаалт</button>
          </div>

          {/* Company Info */}
          <div className="space-y-8">
            <div className="space-y-3.5">
              <div className="text-xl font-bold text-gray-900">Godeok First Dental</div>
              <p className="text-[15px] font-semibold text-[#292a2f]">
                Godeok First Dental Clinic
              </p>
            </div>

            <div className="space-y-2 text-[15px] text-[#292a2f]">
              <p>
                Төлөөлөгч : <span className="font-semibold">Ли Донхён</span>
              </p>
              <p>
                Бүртгэлийн дугаар : <span className="font-semibold">210-49-03603</span>
              </p>
              <p>
                Хаяг : <span className="font-semibold">Кёнги, Пхёнтхэк, Годок-ро 250, Эдуcкай, 4 давхар, 401, 402</span>
              </p>
              <p>
                Утас : <span className="font-semibold">031-611-3222</span>
              </p>
            </div>
          </div>

          {/* Бүс нутгийн мэдээлэл */}
          <div className="pt-6 border-t border-gray-200">
            <p className="text-[11px] text-gray-400 mb-2">Бүс нутгийн мэдээлэл</p>
            <div className="flex flex-wrap gap-x-3 gap-y-1">
              {[
                { name: 'Годок-дон', slug: 'godeok' },
                { name: 'Годок-мён', slug: 'godeok-myeon' },
                { name: 'Сожон-дон', slug: 'seojeong' },
                { name: 'Ичхун-дон', slug: 'ichung' },
                { name: 'Жандан-дон', slug: 'jangdang' },
                { name: 'Донсак-дон', slug: 'dongsak' },
                { name: 'Жижэ-дон', slug: 'jije' },
                { name: 'Сегё-дон', slug: 'segyo' },
              ].map((region) => (
                <Link
                  key={region.slug}
                  href={`/${region.slug}`}
                  className="text-[11px] text-gray-400 hover:text-gray-600"
                >
                  {region.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      {openModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setOpenModal(null)}>
          <div className="bg-white rounded-2xl max-w-[430px] w-full max-h-[80vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex justify-between items-center">
              <h2 className="text-xl font-bold">
                {openModal === 'privacy' && 'Нууцлалын бодлого'}
                {openModal === 'terms' && 'Ашиглалтын нөхцөл'}
                {openModal === 'rights' && 'Өвчтөний эрх, үүрэг'}
                {openModal === 'prices' && 'Даатгалд хамрагддаггүй үнэ'}
              </h2>
              <button onClick={() => setOpenModal(null)} className="text-2xl text-gray-500 hover:text-gray-900">&times;</button>
            </div>

            <div className="p-6">
              {openModal === 'privacy' && <PrivacyPolicy />}
              {openModal === 'terms' && <TermsOfService />}
              {openModal === 'rights' && <PatientRights />}
              {openModal === 'prices' && <NonInsurancePrices />}
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}

function PrivacyPolicy() {
  return (
    <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
      <section>
        <h3 className="font-bold text-base text-black mb-3">1. Хувийн мэдээлэл цуглуулах, ашиглах зорилго</h3>
        <p>Godeok First Dental Clinic (цаашид &apos;эмнэлэг&apos;) хувийн мэдээллийг дараах зорилгоор боловсруулна. Хувийн мэдээллийг бусад зорилгоор ашиглахгүй бөгөөд зорилго өөрчлөгдвөл Хувийн мэдээлэл хамгаалах хуулийн 18 дугаар зүйлд заасны дагуу шаардлагатай арга хэмжээ авна.</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Эмчилгээний цаг захиалга, зөвлөгөө</li>
          <li>Эмчилгээний бүртгэл хөтлөх, эрүүл мэндийн үйлчилгээ үзүүлэх</li>
          <li>Эмчилгээний зардал нэхэмжлэх, төлбөр хүлээн авах</li>
          <li>Эмнэлгийн ашиглалт, эмчилгээний талаар мэдээлэх</li>
        </ul>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3">2. Цуглуулах хувийн мэдээллийн зүйл</h3>
        <p className="mb-2">Эмнэлэг эмчилгээ, зөвлөгөөний зорилгоор дараах хувийн мэдээллийг цуглуулна.</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Заавал: Овог нэр, төрсөн он сар өдөр, холбоо барих (утас), хаяг</li>
          <li>Эмчилгээний мэдээлэл: Эмчилгээний түүх, шинжилгээний үр дүн, эмчилгээний дэлгэрэнгүй</li>
          <li>Автоматаар цуглуулах: IP, cookies, лог, ашиглалтын бүртгэл</li>
        </ul>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3">3. Мэдээлэл хадгалах хугацаа</h3>
        <p>Эмнэлэг хуулиар тогтоосон хугацаа эсвэл мэдээлэл цуглуулахдаа зөвшөөрөл авсан хугацааны дотор хувийн мэдээллийг боловсруулж хадгална.</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Эмчилгээний бүртгэл: Эмнэлгийн тухай хуулийн дагуу 10 жил</li>
          <li>Өвчтөний бүртгэл: 5 жил</li>
          <li>Жор: 2 жил</li>
          <li>Эмчилгээний төлбөрийн бүртгэл: 5 жил</li>
        </ul>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3">4. Гуравдагч этгээдэд мэдээлэл өгөх</h3>
        <p>Эмнэлэг зарчмын хувьд хувийн мэдээллийг цуглуулсан зорилгын хүрээнд боловсруулах бөгөөд дараах тохиолдлоос бусад үед урьдчилсан зөвшөөрөлгүйгээр зорилгоос хэтрүүлэн боловсруулахгүй, гуравдагч этгээдэд өгөхгүй.</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Тусдаа зөвшөөрөл авсан</li>
          <li>Хуулиар тусгайлан заасан</li>
          <li>Мэдээллийн субъект эсвэл хуулийн төлөөлөгч хүсэл зоригоо илэрхийлэх боломжгүй буюу хаяг тодорхойгүй зэрэг шалтгаанаар урьдчилсан зөвшөөрөл авах боломжгүй бөгөөд амь нас, бие, эд хөрөнгийг хамгаалах зайлшгүй шаардлагатай тохиолдолд</li>
        </ul>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3">5. Мэдээллийн субъектийн эрх, үүрэг</h3>
        <p>Мэдээллийн субъект эмнэлгээс хувийн мэдээлэл хамгаалахтай холбоотой дараах эрхийг хэдийд ч хэрэгжүүлж болно.</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Мэдээлэл үзэх хүсэлт</li>
          <li>Алдаа засварлах хүсэлт</li>
          <li>Устгах хүсэлт</li>
          <li>Боловсруулалт зогсоох хүсэлт</li>
        </ul>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3">6. Мэдээллийн аюулгүй байдлын арга хэмжээ</h3>
        <p>Эмнэлэг хувийн мэдээллийн аюулгүй байдлыг хангахын тулд дараах арга хэмжээг авдаг.</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Удирдлагын арга хэмжээ: Дотоод удирдлагын төлөвлөгөө, ажилтнуудын тогтмол сургалт</li>
          <li>Техникийн арга хэмжээ: Хандалтын хяналт, шифрлэлт, вирусын эсрэг хамгаалалт</li>
          <li>Физик арга хэмжээ: Серверийн өрөө, архивын хандалтын хяналт</li>
        </ul>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3">7. Мэдээлэл хамгаалах хариуцлагатай этгээд</h3>
        <div className="bg-gray-50 p-4 rounded-lg mt-2">
          <p><strong>Нэр:</strong> Ли Донхён</p>
          <p><strong>Албан тушаал:</strong> Ерөнхий эмч</p>
          <p><strong>Холбоо барих:</strong> 031-611-3222</p>
        </div>
      </section>

      <section className="text-xs text-gray-500 pt-4 border-t">
        <p>Энэхүү нууцлалын бодлого 2024 оны 1 дүгээр сарын 1-ээс хүчин төгөлдөр.</p>
      </section>
    </div>
  );
}

function TermsOfService() {
  return (
    <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
      <section>
        <h3 className="font-bold text-base text-black mb-3">1 дүгээр зүйл (Зорилго)</h3>
        <p>Энэхүү нөхцөл нь Godeok First Dental Clinic (цаашид &quot;эмнэлэг&quot;)-ийн үзүүлэх эмнэлгийн болон нэмэлт үйлчилгээг ашиглахтай холбогдсон эмнэлэг, хэрэглэгчийн эрх, үүрэг, хариуцлагыг зохицуулна.</p>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3">2 дугаар зүйл (Үйлчилгээний агуулга)</h3>
        <p>Эмнэлэг дараах үйлчилгээг үзүүлнэ.</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Шүдний эмчилгээний үйлчилгээ (ерөнхий эмчилгээ, имплант, гоо сайхны эмчилгээ гэх мэт)</li>
          <li>Эмчилгээний цаг захиалга, зөвлөгөө</li>
          <li>Онлайн AI зөвлөгөө</li>
          <li>Эмчилгээтэй холбоотой мэдээлэл өгөх</li>
        </ul>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3">3 дугаар зүйл (Захиалга, цуцлалт)</h3>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Эмчилгээний захиалгыг утас, ирэлт, онлайн зөвлөгөөгөөр хийж болно.</li>
          <li>Захиалга цуцлах, өөрчлөхийг товлосон цагаас 24 цагийн өмнө хийж болно.</li>
          <li>Зүй ёсны шалтгаангүйгээр ирэхгүй байх, 24 цагийн дотор давтан цуцлах тохиолдолд цаг захиалга хязгаарлагдаж болно.</li>
        </ol>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3">4 дүгээр зүйл (Эмчилгээний төлбөр)</h3>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Эмчилгээний зардлыг эрүүл мэндийн даатгалын стандарт болон даатгалд хамрагддаггүй үнийн жагсаалтын дагуу тооцно.</li>
          <li>Төлбөрийг эмчилгээний дараа шууд бэлэн мөнгө, карт, шилжүүлгээр хийнэ.</li>
          <li>Даатгалын нэхэмжлэл шаардлагатай бол өвчтөн шаардлагатай бичиг баримтыг бүрдүүлнэ.</li>
        </ol>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3">5 дугаар зүйл (Өвчтөний үүрэг)</h3>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Өвчтөн нарийвчилсан хувийн мэдээлэл, өвчний түүхийг үнэн зөв өгнө.</li>
          <li>Өвчтөн эмнэлгийн ажилтнуудын эмчилгээний заавар, зааврыг дагана.</li>
          <li>Өвчтөн бусад өвчтөн, эмнэлгийн ажилтнуудын эмчилгээний орчинг хүндэтгэнэ.</li>
          <li>Өвчтөн эмнэлгийн байр, тоног төхөөрөмжийг гамтай ашиглана.</li>
        </ol>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3">6 дугаар зүйл (Эмнэлгийн үүрэг)</h3>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Эмнэлэг өвчтөнд чанартай эрүүл мэндийн үйлчилгээ үзүүлэхийг хичээнэ.</li>
          <li>Эмнэлэг өвчтөний хувийн мэдээллийг хуулийн дагуу аюулгүй хадгална.</li>
          <li>Эмнэлэг эмчилгээний өмнө хангалттай тайлбар, зөвшөөрлийн процедур хийнэ.</li>
          <li>Эмнэлэг өвчтөний эрхийг хүндэтгэж хамгаална.</li>
        </ol>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3">7 дугаар зүйл (Хариуцлагын хязгаар)</h3>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Эмнэлэг өвчтөний өгсөн буруу мэдээллээс үүссэн асуудалд хариуцлага хүлээхгүй.</li>
          <li>Эмнэлэг өвчтөний буруугаас эмчилгээ удааширсан, амжилтгүй болсон тохиолдолд хариуцлага хүлээхгүй.</li>
          <li>Давагдашгүй хүчин зүйлээс үйлчилгээ үзүүлэх боломжгүй болсон тохиолдолд эмнэлэг хариуцлага хүлээхгүй.</li>
        </ol>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3">8 дугаар зүйл (Маргаан шийдвэрлэх)</h3>
        <p>Энэхүү нөхцөлтэй холбоотой маргаан гарвал эмнэлэг, өвчтөн харилцан тохиролцоогоор шийдвэрлэхийг хичээнэ. Тохиролцоонд хүрэхгүй бол шүүхийн шийдвэрээр шийднэ.</p>
      </section>

      <section className="text-xs text-gray-500 pt-4 border-t">
        <p>Энэхүү нөхцөл 2024 оны 1 дүгээр сарын 1-ээс хүчин төгөлдөр.</p>
      </section>
    </div>
  );
}

function PatientRights() {
  return (
    <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
      <section>
        <h3 className="font-bold text-base text-black mb-3">Өвчтөний эрх</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-black mb-2">1. Эмчилгээ авах эрх</h4>
            <p>Өвчтөн эрүүл мэндээ хамгаалахын тулд зохих эрүүл мэндийн үйлчилгээ авах эрхтэй.</p>
          </div>
          <div>
            <h4 className="font-semibold text-black mb-2">2. Мэдээлэл авах эрх</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Хариуцсан эмч, сувилагч зэрэг эмчилгээнд оролцож буй эмнэлгийн ажилтнуудын нэрийг мэдэх эрх</li>
              <li>Одоогийн эрүүл мэндийн байдал, эмчилгээний арга, эмнэлгийн судалгаанд оролцох эсэх, гаж нөлөө, зардлын талаар хангалттай тайлбар авах эрх</li>
              <li>Эмчилгээний бүртгэлийг үзэх, хуулбар авах эрх</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-black mb-2">3. Өөрөө шийдвэрлэх эрх</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Эмчилгээний аргыг сонгох, зөвшөөрөх эсвэл татгалзах эрх</li>
              <li>Эмнэлгийн судалгаанд оролцохыг зөвшөөрөх эсвэл татгалзах эрх</li>
              <li>Өөр эмчийн санал авах эрх</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-black mb-2">4. Нууцлалын эрх</h4>
            <p>Өвчтөн эмчилгээтэй холбоотой биеийн болон эрүүл мэндийн нууц, хувийн амьдралын нууцыг зөрчүүлэхгүй байх эрхтэй.</p>
          </div>
          <div>
            <h4 className="font-semibold text-black mb-2">5. Гомдол гаргах, зуучлах эрх</h4>
            <p>Өвчтөн эрүүл мэндийн үйлчилгээний явцад үүссэн маргааны талаар Солонгосын эрүүл мэндийн маргааны зуучлалын төвд хандах эрхтэй.</p>
          </div>
        </div>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3 pt-6 border-t">Өвчтөний үүрэг</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-black mb-2">1. Мэдээлэл өгөх үүрэг</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Өвчтөн эрүүл мэндтэй холбоотой мэдээллийг эмнэлгийн ажилтанд нарийвчлан өгнө.</li>
              <li>Өвчний түүх, хэрэглэж буй эм, харшлын мэдээллийг мэдэгдэнэ.</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-black mb-2">2. Эмчийн заавар дагах үүрэг</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Өвчтөн эмнэлгийн ажилтнуудын эмчилгээний заавар, тогтоолыг шударгаар дагана.</li>
              <li>Захиалсан цагаа баримтлах, боломжгүй бол урьдчилж мэдэгдэнэ.</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-black mb-2">3. Төлбөр хийх үүрэг</h4>
            <p>Өвчтөн авсан эрүүл мэндийн үйлчилгээний төлбөрийг цаг хугацаанд нь төлнө.</p>
          </div>
          <div>
            <h4 className="font-semibold text-black mb-2">4. Бусдыг хүндэтгэх үүрэг</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Бусад өвчтөний эмчилгээнд саад учруулахгүй.</li>
              <li>Эмнэлэгт чимээгүй, дэг журам сахина.</li>
              <li>Эмнэлгийн ажилтнуудыг хүндэтгэнэ.</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-black mb-2">5. Хайр халамжтай хандах үүрэг</h4>
            <p>Өвчтөн эмнэлгийн байр, эмнэлгийн тоног төхөөрөмжийг гамтай ашиглаж, санаатай болон болгоомжгүйгээр эвдэхгүй.</p>
          </div>
        </div>
      </section>

      <section className="bg-blue-50 p-4 rounded-lg mt-6">
        <h4 className="font-semibold text-black mb-2">Асуулт, зөвлөгөө</h4>
        <p className="text-sm">Өвчтөний эрх хамгаалал, эрүүл мэндийн маргааны талаар асуух зүйл байвал</p>
        <div className="mt-2 space-y-1">
          <p><strong>Эмнэлгийн утас:</strong> 031-611-3222</p>
          <p><strong>Солонгосын эрүүл мэндийн маргааны зуучлалын төв:</strong> 1670-2545</p>
        </div>
      </section>
    </div>
  );
}

function NonInsurancePrices() {
  const prices = [
    { code: 'UW3021017', item: 'Шүдний процедур: Чулуу цэвэрлэх / 1/3 эрүү', classification: 'Чулуу цэвэрлэх 1/3', price: '10,000', minPrice: '', maxPrice: '', note: '', updated: '2024-01-01' },
    { code: 'UW3021027', item: 'Шүдний процедур: Чулуу цэвэрлэх / Дээд эрүү', classification: 'Чулуу цэвэрлэх дээд', price: '25,000', minPrice: '', maxPrice: '', note: '', updated: '2024-01-01' },
    { code: 'UW3021037', item: 'Шүдний процедур: Чулуу цэвэрлэх / Доод эрүү', classification: 'Чулуу цэвэрлэх доод', price: '25,000', minPrice: '', maxPrice: '', note: '', updated: '2024-01-01' },
    { code: 'UW3021047', item: 'Шүдний процедур: Чулуу цэвэрлэх / Бүрэн', classification: 'Чулуу цэвэрлэх бүрэн', price: '70,000', minPrice: '', maxPrice: '', note: '', updated: '2024-01-01' },
    { code: 'UZ0040014', item: 'Шүдний процедур: Инлэй (Inlay) ба Онлэй (Onlay)', classification: 'Ceramic inlay', price: '300,000', minPrice: '', maxPrice: '', note: '', updated: '2024-01-01' },
    { code: 'U02390000', item: 'Шүдний процедур: Композит пломбо / цоорол 1 гадаргуу', classification: 'Композит 1 гадаргуу', price: '100,000', minPrice: '', maxPrice: '', note: '', updated: '2024-01-01' },
    { code: 'U02400000', item: 'Шүдний процедур: Композит пломбо / цоорол 2 гадаргуу', classification: 'Композит 2 гадаргуу', price: '100,000', minPrice: '', maxPrice: '', note: '', updated: '2024-01-01' },
    { code: 'U02410000', item: 'Шүдний процедур: Композит пломбо / цоорол 3+ гадаргуу', classification: 'Композит 3+ гадаргуу', price: '150,000', minPrice: '', maxPrice: '', note: '', updated: '2024-01-01' },
    { code: 'UB0010051', item: 'Хиймэл шүд: Имплант (1 шүд) / Zirconia', classification: 'Имплант Zirconia', price: '', minPrice: '890,000', maxPrice: '1,290,000', note: '', updated: '2024-01-01' },
    { code: 'UW609F350', item: 'Хиймэл шүд: Титэм / Zirconia', classification: 'Zirconia', price: '500,000', minPrice: '', maxPrice: '', note: 'core тусдаа', updated: '2024-01-01' },
    { code: 'PDZ010000', item: 'Тодорхойлолт: Оношлогооны дүгнэлт / Энгийн', classification: 'Энгийн дүгнэлт', price: '20,000', minPrice: '', maxPrice: '', note: '', updated: '2024-01-01' },
    { code: 'PDZ090007', item: 'Тодорхойлолт: Эмчилгээний баталгаа', classification: 'Эмчилгээний баталгаа', price: '3,000', minPrice: '', maxPrice: '', note: '', updated: '2024-01-01' },
  ];

  return (
    <div className="space-y-4">
      <div className="bg-blue-50 p-4 rounded-lg text-sm text-gray-700">
        <p className="font-semibold mb-2">Даатгалд хамрагддаггүй үнийн мэдээлэл</p>
        <p className="text-xs leading-relaxed">
          Энэхүү үнийн жагсаалт 2024 оны стандартаар бэлтгэгдсэн. Өвчтөний амны хөндийн байдал, ашигласан материалаас хамаарч зардал өөрчлөгдөж болно.
          Нарийн эмчилгээний зардлыг ирэхэд зөвлөгөөгөөр мэдээлнэ.
        </p>
      </div>

      <div className="overflow-x-auto -mx-6 px-6">
        <table className="w-full text-xs border-collapse">
          <thead>
            <tr className="bg-[#008095] text-white">
              <th className="border border-gray-300 px-2 py-2 text-left min-w-[100px]">Код</th>
              <th className="border border-gray-300 px-2 py-2 text-left min-w-[200px]">Ангилал</th>
              <th className="border border-gray-300 px-2 py-2 text-left min-w-[120px]">Нэр</th>
              <th className="border border-gray-300 px-2 py-2 text-right min-w-[80px]">Үнэ</th>
              <th className="border border-gray-300 px-2 py-2 text-right min-w-[80px]">Хамгийн бага</th>
              <th className="border border-gray-300 px-2 py-2 text-right min-w-[80px]">Хамгийн их</th>
              <th className="border border-gray-300 px-2 py-2 text-left min-w-[80px]">Тэмдэглэл</th>
            </tr>
          </thead>
          <tbody>
            {prices.map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="border border-gray-300 px-2 py-2 text-gray-600">{item.code}</td>
                <td className="border border-gray-300 px-2 py-2">{item.item}</td>
                <td className="border border-gray-300 px-2 py-2">{item.classification}</td>
                <td className="border border-gray-300 px-2 py-2 text-right font-semibold">
                  {item.price ? `${item.price} вон` : '-'}
                </td>
                <td className="border border-gray-300 px-2 py-2 text-right">
                  {item.minPrice ? `${item.minPrice} вон` : '-'}
                </td>
                <td className="border border-gray-300 px-2 py-2 text-right">
                  {item.maxPrice ? `${item.maxPrice} вон` : '-'}
                </td>
                <td className="border border-gray-300 px-2 py-2 text-xs text-gray-600">{item.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="text-xs text-gray-500 space-y-1 pt-4">
        <p>※ Дээрх үнэ нь эрүүл мэндийн даатгалд хамрагддаггүй зүйлс.</p>
        <p>※ Эмчилгээний хэмжээ, материалаас хамаарч бодит зардал өөр байж болно.</p>
        <p>※ Нарийн зардлыг зөвлөгөөн дээр мэдэгдэнэ.</p>
      </div>
    </div>
  );
}
