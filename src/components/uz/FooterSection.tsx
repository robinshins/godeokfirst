'use client';

import { useState } from 'react';
import Link from 'next/link';

type ModalType = 'privacy' | 'terms' | 'rights' | 'prices' | null;

export default function FooterSection() {
  const [openModal, setOpenModal] = useState<ModalType>(null);

  return (
    <footer className="bg-white border-t border-[#e9ebf1]">
      {/* Tibbiyot qonuniga muvofiq ogohlantirish */}
      <div className="bg-gray-100 py-4 px-4">
        <div className="max-w-[430px] mx-auto">
          <p className="text-[10px] text-gray-500 leading-relaxed text-center">
            Ushbu veb-saytdagi davolash holatlari va sharhlar shaxsiy tajribaga asoslangan boʼlib, davolash natijasi har bir shaxsda farq qilishi mumkin.
            Barcha tibbiy amaliyotlarda qon ketish, infektsiya, shish kabi nojo&apos;ya taʼsirlar yuzaga kelishi mumkin, aniq tashxis va davolash rejasi albatta mutaxassis bilan maslahat qilgandan keyin belgilanishi kerak.
          </p>
        </div>
      </div>

      <div className="max-w-[430px] mx-auto px-4 py-10">
        <div className="space-y-20">
          {/* Footer Links */}
          <div className="flex justify-between text-[13px] font-semibold text-[#37373e]">
            <button onClick={() => setOpenModal('privacy')} className="hover:text-gray-900">Maxfiylik siyosati</button>
            <button onClick={() => setOpenModal('terms')} className="hover:text-gray-900">Foydalanish shartlari</button>
            <button onClick={() => setOpenModal('rights')} className="hover:text-gray-900">Bemor huquqlari</button>
            <button onClick={() => setOpenModal('prices')} className="hover:text-gray-900">Narxlar roʼyxati</button>
          </div>

          {/* Company Info */}
          <div className="space-y-8">
            <div className="space-y-3.5">
              <div className="text-xl font-bold text-gray-900">Godeok First Dental</div>
              <p className="text-[15px] font-semibold text-[#292a2f]">
                Godeok First Dental klinikasi
              </p>
            </div>

            <div className="space-y-2 text-[15px] text-[#292a2f]">
              <p>
                Rahbar : <span className="font-semibold">Li Donghyun</span>
              </p>
              <p>
                Biznes roʼyxat raqami : <span className="font-semibold">210-49-03603</span>
              </p>
              <p>
                Manzil : <span className="font-semibold">Kyonggi, Pyongtaek, Godeok-ro 250, Edusky, 4-qavat, 401, 402</span>
              </p>
              <p>
                Telefon : <span className="font-semibold">031-611-3222</span>
              </p>
            </div>
          </div>

          {/* Hududlar boʼyicha davolash yoʼriqnomasi */}
          <div className="pt-6 border-t border-gray-200">
            <p className="text-[11px] text-gray-400 mb-2">Hududlar boʼyicha davolash yoʼriqnomasi</p>
            <div className="flex flex-wrap gap-x-3 gap-y-1">
              {[
                { name: 'Godeok-dong', slug: 'godeok' },
                { name: 'Godeok-myeon', slug: 'godeok-myeon' },
                { name: 'Seojeong-dong', slug: 'seojeong' },
                { name: 'Ichung-dong', slug: 'ichung' },
                { name: 'Jangdang-dong', slug: 'jangdang' },
                { name: 'Dongsak-dong', slug: 'dongsak' },
                { name: 'Jije-dong', slug: 'jije' },
                { name: 'Segyo-dong', slug: 'segyo' },
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
                {openModal === 'privacy' && 'Maxfiylik siyosati'}
                {openModal === 'terms' && 'Foydalanish shartlari'}
                {openModal === 'rights' && 'Bemor huquqlari va majburiyatlari'}
                {openModal === 'prices' && 'Sugʼurtasiz davolash narxlari'}
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

// Maxfiylik siyosati
function PrivacyPolicy() {
  return (
    <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
      <section>
        <h3 className="font-bold text-base text-black mb-3">1. Shaxsiy maʼlumotlarni yigʼish va foydalanish maqsadi</h3>
        <p>Godeok First Dental klinikasi (bundan keyin &apos;klinika&apos;) quyidagi maqsadlarda shaxsiy maʼlumotlarni qayta ishlaydi. Qayta ishlanayotgan shaxsiy maʼlumotlar quyidagi maqsadlardan boshqa maqsadlarda foydalanilmaydi.</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Davolash uchun band qilish va maslahat</li>
          <li>Davolash yozuvlarini boshqarish va tibbiy xizmatlar koʼrsatish</li>
          <li>Davolash toʼlovlarini hisoblash va qabul qilish</li>
          <li>Klinikadan foydalanish va davolash haqida maʼlumot berish</li>
        </ul>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3">2. Yigʼiladigan shaxsiy maʼlumotlar</h3>
        <p className="mb-2">Klinika davolash va maslahat uchun quyidagi shaxsiy maʼlumotlarni yigʼadi.</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Majburiy: Ism, tugʼilgan sana, telefon raqami, manzil</li>
          <li>Davolash maʼlumotlari: Davolash yozuvlari, tekshiruv natijalari, davolash tarixi</li>
          <li>Avtomatik yigʼish: IP manzil, cookie, kirish jurnallari</li>
        </ul>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3">3. Shaxsiy maʼlumotlarni saqlash muddati</h3>
        <p>Klinika qonun talablariga muvofiq shaxsiy maʼlumotlarni saqlaydi va qayta ishlaydi.</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Davolash yozuvlari: Tibbiyot qonuniga koʼra 10 yil</li>
          <li>Bemorlar roʼyxati: 5 yil</li>
          <li>Retseptlar: 2 yil</li>
          <li>Davolash toʼlovlari yozuvlari: 5 yil</li>
        </ul>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3">4. Shaxsiy maʼlumotlarni uchinchi tomonlarga berish</h3>
        <p>Klinika printsipial ravishda maʼlumot egasining roziligisiz shaxsiy maʼlumotlarni uchinchi tomonlarga bermaydi, quyidagi holatlar bundan mustasno.</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Maʼlumot egasidan alohida rozilik olingan holat</li>
          <li>Qonunda maxsus qoida mavjud holat</li>
          <li>Maʼlumot egasi yoki qonuniy vakili rozlik bildira olmasa va hayot, jismoniy yoki mulkiy manfaatlar uchun zarur deb topilgan holat</li>
        </ul>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3">5. Maʼlumot egasining huquqlari</h3>
        <p>Maʼlumot egasi klinikaga nisbatan istalgan vaqtda quyidagi huquqlarni amalga oshirishi mumkin.</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Shaxsiy maʼlumotlarni koʼrish talabi</li>
          <li>Xatoliklar boʼlsa tuzatish talabi</li>
          <li>Oʼchirish talabi</li>
          <li>Qayta ishlashni toʼxtatish talabi</li>
        </ul>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3">6. Shaxsiy maʼlumotlar xavfsizligi choralari</h3>
        <p>Klinika shaxsiy maʼlumotlar xavfsizligini taʼminlash uchun quyidagi choralarni koʼradi.</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Boshqaruv choralari: Ichki boshqaruv rejasi, muntazam xodimlar taʼlimi</li>
          <li>Texnik choralar: Tizimga kirish huquqlarini boshqarish, shifrlash, xavfsizlik dasturlari</li>
          <li>Jismoniy choralar: Server xonasi va maʼlumotlar omboriga kirishni nazorat qilish</li>
        </ul>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3">7. Shaxsiy maʼlumotlar himoyasi masʼul shaxsi</h3>
        <div className="bg-gray-50 p-4 rounded-lg mt-2">
          <p><strong>Ism:</strong> Li Donghyun</p>
          <p><strong>Lavozim:</strong> Bosh shifokor</p>
          <p><strong>Telefon:</strong> 031-611-3222</p>
        </div>
      </section>

      <section className="text-xs text-gray-500 pt-4 border-t">
        <p>Ushbu maxfiylik siyosati 2024-yil 1-yanvardan kuchga kiradi.</p>
      </section>
    </div>
  );
}

// Foydalanish shartlari
function TermsOfService() {
  return (
    <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
      <section>
        <h3 className="font-bold text-base text-black mb-3">1-modda (Maqsad)</h3>
        <p>Ushbu shartlar Godeok First Dental klinikasi (bundan keyin &quot;klinika&quot;) tomonidan koʼrsatiladigan tibbiy xizmatlar va qoʼshimcha xizmatlardan foydalanish bilan bogʼliq klinika va foydalanuvchining huquqlari, majburiyatlari va javobgarliklari tartibga solishni maqsad qiladi.</p>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3">2-modda (Xizmatlar mazmuni)</h3>
        <p>Klinika tomonidan koʼrsatiladigan xizmatlar quyidagilardir.</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Stomatologik davolash xizmatlari (umumiy davolash, implant, estetik davolash va boshqalar)</li>
          <li>Davolash uchun band qilish va maslahat xizmatlari</li>
          <li>Onlayn AI maslahat xizmati</li>
          <li>Davolash bilan bogʼliq maʼlumot berish xizmati</li>
        </ul>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3">3-modda (Band qilish va bekor qilish)</h3>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Davolash uchun band qilish telefon, tashrif yoki onlayn maslahat orqali amalga oshiriladi.</li>
          <li>Band qilishni bekor qilish yoki oʼzgartirish belgilangan vaqtdan 24 soat oldin mumkin.</li>
          <li>Asossiz ravishda belgilangan vaqtda kelmasa yoki 24 soat ichida bekor qilish takrorlansa, keyingi band qilish cheklanishi mumkin.</li>
        </ol>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3">4-modda (Davolash toʼlovi va hisob-kitob)</h3>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Davolash toʼlovi sogʼliq sugʼurtasi va sugʼurtasiz davolash narxlariga muvofiq hisoblanadi.</li>
          <li>Davolash toʼlovi davolashdan keyin darhol toʼlanishi kerak, naqd, kredit karta, bank oʼtkazmasi orqali toʼlash mumkin.</li>
          <li>Sugʼurta talabi kerak boʼlsa, bemor zarur hujjatlarni topshirishi kerak.</li>
        </ol>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3">5-modda (Bemor majburiyatlari)</h3>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Bemor aniq shaxsiy maʼlumotlar va kasallik tarixini taqdim etishi kerak.</li>
          <li>Bemor shifokorlarning davolash koʼrsatmalariga rioya qilishi kerak.</li>
          <li>Bemor boshqa bemorlar va shifokorlarning davolash muhitini hurmat qilishi kerak.</li>
          <li>Bemor klinika jihozlari va mulkiga zarar yetkazmaslik uchun ehtiyot boʼlishi kerak.</li>
        </ol>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3">6-modda (Klinika majburiyatlari)</h3>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Klinika bemorlarga sifatli tibbiy xizmat koʼrsatishga intiladi.</li>
          <li>Klinika bemorlarning shaxsiy maʼlumotlarini qonunga muvofiq xavfsiz boshqaradi.</li>
          <li>Klinika davolashdan oldin yetarli tushuntirish va rozilik jarayonini oʼtkazadi.</li>
          <li>Klinika bemorlarning huquqlarini hurmat qiladi va himoya qiladi.</li>
        </ol>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3">7-modda (Javobgarlik cheklovi)</h3>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Klinika bemor tomonidan taqdim etilgan notoʼgʼri maʼlumotlar tufayli yuzaga kelgan muammolar uchun javob bermaydi.</li>
          <li>Klinika bemor aybi tufayli davolashning kechikishi yoki muvaffaqiyatsizligi uchun javob bermaydi.</li>
          <li>Fors-major holatlarda xizmat koʼrsatish imkonsiz boʼlsa, klinika javob bermaydi.</li>
        </ol>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3">8-modda (Nizolarni hal qilish)</h3>
        <p>Ushbu shartlar bilan bogʼliq nizo yuzaga kelsa, klinika va bemor oʼzaro kelishuv orqali hal qilishga intiladi, kelishilmasa vakolatli sud qaroriga muvofiq hal qilinadi.</p>
      </section>

      <section className="text-xs text-gray-500 pt-4 border-t">
        <p>Ushbu shartlar 2024-yil 1-yanvardan kuchga kiradi.</p>
      </section>
    </div>
  );
}

// Bemor huquqlari va majburiyatlari
function PatientRights() {
  return (
    <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
      <section>
        <h3 className="font-bold text-base text-black mb-3">Bemor huquqlari</h3>

        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-black mb-2">1. Davolash olish huquqi</h4>
            <p>Bemor oʼz sogʼligʼini himoya qilish uchun tegishli tibbiy xizmatlardan foydalanish huquqiga ega.</p>
          </div>

          <div>
            <h4 className="font-semibold text-black mb-2">2. Bilish huquqi</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Masʼul shifokor, hamshira va boshqa tibbiy xodimlarning ismini bilish huquqi</li>
              <li>Hozirgi sogʼliq holati, davolash usuli, nojo&apos;ya taʼsirlar va davolash xarajatlari haqida toʼliq tushuntirish olish huquqi</li>
              <li>Davolash yozuvlarini koʼrish va nusxa olishni soʼrash huquqi</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-black mb-2">3. Oʼz-oʼzini belgilash huquqi</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Davolash usulini tanlash va rozilik berish yoki rad etish huquqi</li>
              <li>Tibbiy tadqiqot obʼyekti boʼlishga rozilik berish yoki rad etish huquqi</li>
              <li>Boshqa shifokor fikrini (ikkinchi fikr) soʼrash huquqi</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-black mb-2">4. Maxfiylik huquqi</h4>
            <p>Davolash bilan bogʼliq jismoniy, sogʼliq va shaxsiy sirlar buzilmaslik huquqiga ega.</p>
          </div>

          <div>
            <h4 className="font-semibold text-black mb-2">5. Maslahat va vositachilik huquqi</h4>
            <p>Tibbiy xizmat jarayonida yuzaga kelgan nizolar boʼyicha Koreya Tibbiy nizolarni hal qilish markaziga murojaat qilish huquqiga ega.</p>
          </div>
        </div>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3 pt-6 border-t">Bemor majburiyatlari</h3>

        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-black mb-2">1. Maʼlumot berish majburiyati</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Oʼz sogʼligʼi bilan bogʼliq maʼlumotlarni shifokorlarga aniq taqdim etishi kerak.</li>
              <li>Oldingi kasallik tarixi, hozirda ichilayotgan dorilar, allergiyalar haqida toʼliq xabar berishi kerak.</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-black mb-2">2. Shifokor koʼrsatmalariga rioya qilish</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Shifokorlarning davolash koʼrsatmalari va retseptlariga sadoqat bilan rioya qilishi kerak.</li>
              <li>Band qilish vaqtiga rioya qilishi va zarur hollarda oldindan xabar berishi kerak.</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-black mb-2">3. Davolash toʼlovini toʼlash majburiyati</h4>
            <p>Koʼrsatilgan tibbiy xizmatlar uchun davolash toʼlovini adolatli ravishda toʼlashi kerak.</p>
          </div>

          <div>
            <h4 className="font-semibold text-black mb-2">4. Boshqalarni hurmat qilish majburiyati</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Boshqa bemorlarning davolashiga xalaqit beradigan harakatlardan tiyilishi kerak.</li>
              <li>Klinika ichida jimlikni saqlashi va tartibga rioya qilishi kerak.</li>
              <li>Shifokorlar va klinika xodimlarini hurmat qilishi va odobli boʼlishi kerak.</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-black mb-2">5. Jihozlarni saqlash majburiyati</h4>
            <p>Klinika jihozlari va tibbiy uskunalarni ehtiyotkorlik bilan ishlatishi va ataylab yoki beparvolik bilan buzmaslik uchun ehtiyot boʼlishi kerak.</p>
          </div>
        </div>
      </section>

      <section className="bg-blue-50 p-4 rounded-lg mt-6">
        <h4 className="font-semibold text-black mb-2">Soʼrov va maslahat</h4>
        <p className="text-sm">Bemor huquqlari himoyasi va tibbiy nizolar bilan bogʼliq savollaringiz boʼlsa</p>
        <div className="mt-2 space-y-1">
          <p><strong>Klinika telefoni:</strong> 031-611-3222</p>
          <p><strong>Koreya Tibbiy nizolarni hal qilish markazi:</strong> 1670-2545</p>
        </div>
      </section>
    </div>
  );
}

// Sugʼurtasiz davolash narxlari
function NonInsurancePrices() {
  const prices = [
    { code: 'UW3021017', item: 'Stomatologik muolaja: Tosh tozalash/1/3 jagʼ', classification: 'Tosh tozalash 1/3', price: '10,000', minPrice: '', maxPrice: '', note: '', updated: '2024-01-01' },
    { code: 'UW3021027', item: 'Stomatologik muolaja: Tosh tozalash/yuqori jagʼ', classification: 'Tosh tozalash yuqori', price: '25,000', minPrice: '', maxPrice: '', note: '', updated: '2024-01-01' },
    { code: 'UW3021037', item: 'Stomatologik muolaja: Tosh tozalash/pastki jagʼ', classification: 'Tosh tozalash pastki', price: '25,000', minPrice: '', maxPrice: '', note: '', updated: '2024-01-01' },
    { code: 'UW3021047', item: 'Stomatologik muolaja: Tosh tozalash/toʼliq jagʼ', classification: 'Tosh tozalash toʼliq', price: '70,000', minPrice: '', maxPrice: '', note: '', updated: '2024-01-01' },
    { code: 'UZ0040014', item: 'Stomatologik muolaja: Inley (Inlay) va Onley (Onlay)', classification: 'ceramic inlay', price: '300,000', minPrice: '', maxPrice: '', note: '', updated: '2024-01-01' },
    { code: 'U02390000', item: 'Stomatologik muolaja: Kompozit rezin plomba/kariyes-1 yuz', classification: 'Rezin kariyes 1 yuz', price: '100,000', minPrice: '', maxPrice: '', note: '', updated: '2024-01-01' },
    { code: 'U02400000', item: 'Stomatologik muolaja: Kompozit rezin plomba/kariyes-2 yuz', classification: 'Rezin 2 yuz', price: '100,000', minPrice: '', maxPrice: '', note: '', updated: '2024-01-01' },
    { code: 'U02410000', item: 'Stomatologik muolaja: Kompozit rezin plomba/kariyes-3+ yuz', classification: 'Rezin 3+ yuz', price: '150,000', minPrice: '', maxPrice: '', note: '', updated: '2024-01-01' },
    { code: 'UB0010051', item: 'Protez narxi/Stomatologik implant (1 tish)/Zirconia', classification: 'Implant zir', price: '', minPrice: '890,000', maxPrice: '1,290,000', note: '', updated: '2024-01-01' },
    { code: 'UW609F350', item: 'Protez narxi/Toj (Crown)/Zirconia', classification: 'zirconia', price: '500,000', minPrice: '', maxPrice: '', note: 'core alohida', updated: '2024-01-01' },
    { code: 'PDZ010000', item: 'Guvohnoma toʼlovi/Tashxis guvohnomalari/Umumiy', classification: 'Umumiy tashxis', price: '20,000', minPrice: '', maxPrice: '', note: '', updated: '2024-01-01' },
    { code: 'PDZ090007', item: 'Guvohnoma toʼlovi/Tasdiqlash/Davolash', classification: 'Davolash tasdig`i', price: '3,000', minPrice: '', maxPrice: '', note: '', updated: '2024-01-01' },
  ];

  return (
    <div className="space-y-4">
      <div className="bg-blue-50 p-4 rounded-lg text-sm text-gray-700">
        <p className="font-semibold mb-2">Sugʼurtasiz davolash narxlari haqida</p>
        <p className="text-xs leading-relaxed">
          Ushbu sugʼurtasiz davolash narxlari 2024-yil asosida tuzilgan boʼlib, bemorning ogʼiz holati va ishlatiladigan materiallarga qarab oʼzgarishi mumkin.
          Aniq davolash narxlari klinikaga tashrif buyurganingizda maslahat orqali maʼlum qilinadi.
        </p>
      </div>

      <div className="overflow-x-auto -mx-6 px-6">
        <table className="w-full text-xs border-collapse">
          <thead>
            <tr className="bg-[#008095] text-white">
              <th className="border border-gray-300 px-2 py-2 text-left min-w-[100px]">Kod</th>
              <th className="border border-gray-300 px-2 py-2 text-left min-w-[200px]">Turkum / Kichik turkum</th>
              <th className="border border-gray-300 px-2 py-2 text-left min-w-[120px]">Nomi</th>
              <th className="border border-gray-300 px-2 py-2 text-right min-w-[80px]">Narx</th>
              <th className="border border-gray-300 px-2 py-2 text-right min-w-[80px]">Min narx</th>
              <th className="border border-gray-300 px-2 py-2 text-right min-w-[80px]">Maks narx</th>
              <th className="border border-gray-300 px-2 py-2 text-left min-w-[80px]">Izoh</th>
            </tr>
          </thead>
          <tbody>
            {prices.map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="border border-gray-300 px-2 py-2 text-gray-600">{item.code}</td>
                <td className="border border-gray-300 px-2 py-2">{item.item}</td>
                <td className="border border-gray-300 px-2 py-2">{item.classification}</td>
                <td className="border border-gray-300 px-2 py-2 text-right font-semibold">
                  {item.price ? `${item.price}von` : '-'}
                </td>
                <td className="border border-gray-300 px-2 py-2 text-right">
                  {item.minPrice ? `${item.minPrice}von` : '-'}
                </td>
                <td className="border border-gray-300 px-2 py-2 text-right">
                  {item.maxPrice ? `${item.maxPrice}von` : '-'}
                </td>
                <td className="border border-gray-300 px-2 py-2 text-xs text-gray-600">{item.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="text-xs text-gray-500 space-y-1 pt-4">
        <p>※ Ushbu narxlar sogʼliq sugʼurtasi qoʼllanilmaydigan sugʼurtasiz bandlar uchun.</p>
        <p>※ Davolash mazmuni va ishlatiladigan materiallarga qarab haqiqiy narx farq qilishi mumkin.</p>
        <p>※ Aniq narxlar davolash maslahati vaqtida maʼlum qilinadi.</p>
      </div>
    </div>
  );
}
