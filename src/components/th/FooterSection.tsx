'use client';

import { useState } from 'react';
import Link from 'next/link';

type ModalType = 'privacy' | 'terms' | 'rights' | 'prices' | null;

export default function FooterSection() {
  const [openModal, setOpenModal] = useState<ModalType>(null);

  return (
    <footer className="bg-white border-t border-[#e9ebf1]">
      {/* ข้อจำกัดความรับผิดชอบตามกฎหมายการแพทย์ */}
      <div className="bg-gray-100 py-4 px-4">
        <div className="max-w-[430px] mx-auto">
          <p className="text-[10px] text-gray-500 leading-relaxed text-center">
            กรณีการรักษาและรีวิวบนเว็บไซต์นี้เป็นประสบการณ์ส่วนบุคคล ผลการรักษาอาจแตกต่างกันไปในแต่ละบุคคล
            ทุกขั้นตอนทางการแพทย์อาจมีผลข้างเคียง เช่น เลือดออก การติดเชื้อ บวม กรุณาปรึกษาแพทย์เฉพาะทางเพื่อวินิจฉัยและวางแผนการรักษาที่ถูกต้อง
          </p>
        </div>
      </div>

      <div className="max-w-[430px] mx-auto px-4 py-10">
        <div className="space-y-20">
          {/* Footer Links */}
          <div className="flex justify-between text-[13px] font-semibold text-[#37373e]">
            <button onClick={() => setOpenModal('privacy')} className="hover:text-gray-900">นโยบายความเป็นส่วนตัว</button>
            <button onClick={() => setOpenModal('terms')} className="hover:text-gray-900">ข้อกำหนดการใช้งาน</button>
            <button onClick={() => setOpenModal('rights')} className="hover:text-gray-900">สิทธิและหน้าที่ของผู้ป่วย</button>
            <button onClick={() => setOpenModal('prices')} className="hover:text-gray-900">รายการไม่ครอบคลุมประกัน</button>
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
                ตัวแทน : <span className="font-semibold">ลี ดงฮยอน</span>
              </p>
              <p>
                เลขทะเบียนธุรกิจ : <span className="font-semibold">210-49-03603</span>
              </p>
              <p>
                ที่อยู่ : <span className="font-semibold">ชั้น 4, 401, 402 EduSky, 250 Godeok-ro, Pyeongtaek, Gyeonggi</span>
              </p>
              <p>
                โทรศัพท์ : <span className="font-semibold">031-611-3222</span>
              </p>
            </div>
          </div>

          {/* คำแนะนำการรักษาตามพื้นที่ */}
          <div className="pt-6 border-t border-gray-200">
            <p className="text-[11px] text-gray-400 mb-2">คำแนะนำการรักษาตามพื้นที่</p>
            <div className="flex flex-wrap gap-x-3 gap-y-1">
              {[
                { name: 'โกด็อกดง', slug: 'godeok' },
                { name: 'โกด็อกมยอน', slug: 'godeok-myeon' },
                { name: 'ซอจองดง', slug: 'seojeong' },
                { name: 'อีชุงดง', slug: 'ichung' },
                { name: 'จังดังดง', slug: 'jangdang' },
                { name: 'ทงซักดง', slug: 'dongsak' },
                { name: 'ชีเจดง', slug: 'jije' },
                { name: 'เซเกียวดง', slug: 'segyo' },
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
                {openModal === 'privacy' && 'นโยบายความเป็นส่วนตัว'}
                {openModal === 'terms' && 'ข้อกำหนดการใช้งาน'}
                {openModal === 'rights' && 'สิทธิและหน้าที่ของผู้ป่วย'}
                {openModal === 'prices' && 'ค่ารักษาที่ไม่ครอบคลุมประกัน'}
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

// นโยบายความเป็นส่วนตัว
function PrivacyPolicy() {
  return (
    <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
      <section>
        <h3 className="font-bold text-base text-black mb-3">1. วัตถุประสงค์ในการเก็บรวบรวมและใช้ข้อมูลส่วนบุคคล</h3>
        <p>Godeok First Dental Clinic (ต่อไปนี้เรียกว่า &apos;โรงพยาบาล&apos;) ประมวลผลข้อมูลส่วนบุคคลเพื่อวัตถุประสงค์ต่อไปนี้. ข้อมูลส่วนบุคคลที่ประมวลผลจะไม่ถูกใช้เพื่อวัตถุประสงค์อื่นนอกเหนือจากต่อไปนี้, หากวัตถุประสงค์เปลี่ยนแปลง จะดำเนินมาตรการที่จำเป็นเช่น ขอความยินยอมแยกต่างหากตามมาตรา 18 พ.ร.บ.คุ้มครองข้อมูลส่วนบุคคล.</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>นัดหมายการรักษาและปรึกษา</li>
          <li>จัดการประวัติการรักษาและให้บริการทางการแพทย์</li>
          <li>เรียกเก็บและชำระค่ารักษา</li>
          <li>ข้อมูลเกี่ยวกับการใช้บริการโรงพยาบาลและการรักษา</li>
        </ul>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3">2. รายการข้อมูลส่วนบุคคลที่เก็บรวบรวม</h3>
        <p className="mb-2">โรงพยาบาลเก็บรวบรวมข้อมูลส่วนบุคคลดังต่อไปนี้เพื่อการรักษาและปรึกษา.</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>รายการบังคับ: ชื่อ วันเกิด เบอร์ติดต่อ (โทรศัพท์) ที่อยู่</li>
          <li>ข้อมูลการรักษา: ประวัติการรักษา, ผลตรวจ, รายละเอียดการรักษา</li>
          <li>เก็บอัตโนมัติ: IP เข้าถึง คุกกี้ บันทึกการเข้าถึง ประวัติการใช้บริการ</li>
        </ul>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3">3. ระยะเวลาเก็บรักษาและใช้ข้อมูลส่วนบุคคล</h3>
        <p>โรงพยาบาลประมวลผลและเก็บรักษาข้อมูลส่วนบุคคลภายในระยะเวลาที่กฎหมายกำหนดหรือที่ได้รับความยินยอม.</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>ประวัติการรักษา: 10 ปี ตามกฎหมายการแพทย์</li>
          <li>ทะเบียนผู้ป่วย: 5 ปี</li>
          <li>ใบสั่งยา: 2 ปี</li>
          <li>บันทึกการชำระค่ารักษา: 5 ปี</li>
        </ul>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3">4. การให้ข้อมูลส่วนบุคคลแก่บุคคลที่สาม</h3>
        <p>โรงพยาบาลโดยหลักการประมวลผลข้อมูลส่วนบุคคลภายในขอบเขตที่ระบุไว้, ยกเว้นกรณีต่อไปนี้ จะไม่ประมวลผลเกินขอบเขตหรือให้บุคคลที่สามโดยไม่ได้รับความยินยอมล่วงหน้า.</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>กรณีได้รับความยินยอมแยกต่างหากจากเจ้าของข้อมูล</li>
          <li>กรณีมีข้อกำหนดพิเศษในกฎหมาย</li>
          <li>กรณีที่เจ้าของข้อมูลหรือผู้แทนตามกฎหมายไม่สามารถแสดงเจตนาได้ หรือไม่สามารถขอความยินยอมล่วงหน้าได้เนื่องจากไม่ทราบที่อยู่ และเป็นที่ชัดเจนว่าจำเป็นเพื่อผลประโยชน์เร่งด่วนต่อชีวิต ร่างกาย หรือทรัพย์สินของเจ้าของข้อมูลหรือบุคคลที่สาม</li>
        </ul>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3">5. สิทธิ หน้าที่ และวิธีการใช้สิทธิของเจ้าของข้อมูล</h3>
        <p>เจ้าของข้อมูล โรงพยาบาลสามารถใช้สิทธิ์คุ้มครองข้อมูลส่วนบุคคลได้ตลอดเวลา.</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>ขอดูข้อมูลส่วนบุคคล</li>
          <li>ขอแก้ไขเมื่อมีข้อผิดพลาด</li>
          <li>ขอลบ</li>
          <li>ขอหยุดประมวลผล</li>
        </ul>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3">6. มาตรการรักษาความปลอดภัยข้อมูลส่วนบุคคล</h3>
        <p>โรงพยาบาลดำเนินมาตรการต่อไปนี้เพื่อรักษาความปลอดภัยข้อมูลส่วนบุคคล.</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>มาตรการจัดการ: จัดทำและดำเนินแผนจัดการภายใน ฝึกอบรมพนักงานเป็นประจำ</li>
          <li>มาตรการทางเทคนิค: จัดการสิทธิ์เข้าถึงระบบ ติดตั้งระบบควบคุม เข้ารหัส ติดตั้งโปรแกรมรักษาความปลอดภัย</li>
          <li>มาตรการทางกายภาพ: ควบคุมการเข้าถึงห้องคอมพิวเตอร์ ห้องเก็บเอกสาร</li>
        </ul>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3">7. ผู้รับผิดชอบคุ้มครองข้อมูลส่วนบุคคล</h3>
        <div className="bg-gray-50 p-4 rounded-lg mt-2">
          <p><strong>ชื่อ:</strong> ลี ดงฮยอน</p>
          <p><strong>ตำแหน่ง:</strong> ทันตแพทย์หัวหน้า</p>
          <p><strong>ติดต่อ:</strong> 031-611-3222</p>
        </div>
      </section>

      <section className="text-xs text-gray-500 pt-4 border-t">
        <p>นโยบายความเป็นส่วนตัวฉบับนี้มีผลบังคับใช้ตั้งแต่วันที่ 1 มกราคม 2024.</p>
      </section>
    </div>
  );
}

// ข้อกำหนดการใช้งาน
function TermsOfService() {
  return (
    <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
      <section>
        <h3 className="font-bold text-base text-black mb-3">มาตรา 1 (วัตถุประสงค์)</h3>
        <p>ข้อกำหนดนี้มีวัตถุประสงค์เพื่อกำหนดสิทธิ หน้าที่ และความรับผิดชอบของ Godeok First Dental Clinic (ต่อไปนี้เรียกว่า &quot;โรงพยาบาล&quot;) และผู้ใช้ เกี่ยวกับการใช้บริการทางการแพทย์และบริการเสริมที่ให้บริการ.</p>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3">มาตรา 2 (เนื้อหาบริการ)</h3>
        <p>โรงพยาบาลบริการที่ให้บริการมีดังนี้.</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>บริการรักษาทันตกรรม (รักษาทั่วไป, รากฟันเทียม, ทันตกรรมเสริมสวย ฯลฯ)</li>
          <li>บริการนัดหมายและปรึกษาการรักษา</li>
          <li>บริการปรึกษา AI ออนไลน์</li>
          <li>บริการให้ข้อมูลเกี่ยวกับการรักษา</li>
        </ul>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3">มาตรา 3 (การนัดหมายและการยกเลิก)</h3>
        <ol className="list-decimal pl-5 space-y-2">
          <li>สามารถนัดหมายการรักษาผ่านโทรศัพท์ มาที่คลินิก หรือปรึกษาออนไลน์.</li>
          <li>สามารถยกเลิกหรือเปลี่ยนแปลงนัดหมายได้ภายใน 24 ชั่วโมงก่อนเวลานัด.</li>
          <li>หากไม่มาตามเวลานัดโดยไม่มีเหตุผลอันควร, หรือยกเลิกซ้ำภายใน 24 ชั่วโมง การนัดในอนาคตอาจถูกจำกัด.</li>
        </ol>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3">มาตรา 4 (ค่ารักษาและการชำระเงิน)</h3>
        <ol className="list-decimal pl-5 space-y-2">
          <li>ค่ารักษาเป็นไปตามเกณฑ์ประกันสุขภาพและประกาศค่ารักษาที่ไม่ครอบคลุมประกัน.</li>
          <li>โดยหลักการค่ารักษาชำระทันทีหลังรักษา สามารถชำระด้วยเงินสด บัตรเครดิต โอนเงิน ฯลฯ.</li>
          <li>หากต้องเบิกประกัน ผู้ป่วยต้องยื่นเอกสารที่จำเป็น.</li>
        </ol>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3">มาตรา 5 (หน้าที่ของผู้ป่วย)</h3>
        <ol className="list-decimal pl-5 space-y-2">
          <li>ผู้ป่วยต้องให้ข้อมูลส่วนบุคคลและประวัติการเจ็บป่วยอย่างถูกต้อง.</li>
          <li>ผู้ป่วยต้องปฏิบัติตามคำแนะนำการรักษาของทีมแพทย์.</li>
          <li>ผู้ป่วยต้องเคารพสภาพแวดล้อมการรักษาของผู้ป่วยอื่นและทีมแพทย์.</li>
          <li>ผู้ป่วยต้องดูแลสิ่งอำนวยความสะดวกของคลินิกและระวังไม่ทำลายทรัพย์สิน.</li>
        </ol>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3">มาตรา 6 (โรงพยาบาลของผู้ป่วย)</h3>
        <ol className="list-decimal pl-5 space-y-2">
          <li>โรงพยาบาลพยายามให้บริการทางการแพทย์คุณภาพดีแก่ผู้ป่วย.</li>
          <li>โรงพยาบาลจัดการข้อมูลส่วนบุคคลของผู้ป่วยอย่างปลอดภัยตามกฎหมายที่เกี่ยวข้อง.</li>
          <li>โรงพยาบาลดำเนินขั้นตอนอธิบายและขอความยินยอมอย่างเพียงพอก่อนการรักษา.</li>
          <li>โรงพยาบาลเคารพและปกป้องสิทธิ์ของผู้ป่วย.</li>
        </ol>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3">มาตรา 7 (ข้อจำกัดความรับผิดชอบ)</h3>
        <ol className="list-decimal pl-5 space-y-2">
          <li>โรงพยาบาลไม่รับผิดชอบต่อปัญหาที่เกิดจากข้อมูลที่ไม่ถูกต้องที่ผู้ป่วยให้มา.</li>
          <li>โรงพยาบาลไม่รับผิดชอบต่อการรักษาล่าช้าหรือล้มเหลวที่เกิดจากความผิดของผู้ป่วย.</li>
          <li>กรณีไม่สามารถให้บริการได้เนื่องจากเหตุสุดวิสัย โรงพยาบาลไม่รับผิดชอบ.</li>
        </ol>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3">มาตรา 8 (การระงับข้อพิพาท)</h3>
        <p>กรณีเกิดข้อพิพาทเกี่ยวกับข้อกำหนดนี้, โรงพยาบาลและผู้ป่วยจะพยายามแก้ไขผ่านการเจรจาร่วมกัน, หากไม่สามารถตกลงได้ จะเป็นไปตามคำพิพากษาของศาลที่มีเขตอำนาจ.</p>
      </section>

      <section className="text-xs text-gray-500 pt-4 border-t">
        <p>ข้อกำหนดนี้มีผลบังคับใช้ตั้งแต่วันที่ 1 มกราคม 2024.</p>
      </section>
    </div>
  );
}

// สิทธิและหน้าที่ของผู้ป่วย
function PatientRights() {
  return (
    <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
      <section>
        <h3 className="font-bold text-base text-black mb-3">สิทธิ์ของผู้ป่วย</h3>

        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-black mb-2">1. สิทธิ์ในการรับการรักษา</h4>
            <p>ผู้ป่วยมีสิทธิ์ได้รับบริการทางการแพทย์ที่เหมาะสมเพื่อปกป้องสุขภาพของตนเอง.</p>
          </div>

          <div>
            <h4 className="font-semibold text-black mb-2">2. สิทธิ์ในการรับรู้</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>สิทธิ์ทราบชื่อแพทย์ พยาบาล ฯลฯ ที่เกี่ยวข้องโดยตรงกับการรักษาของตน</li>
              <li>สิทธิ์ได้รับคำอธิบายอย่างเพียงพอเกี่ยวกับสภาพสุขภาพปัจจุบัน วิธีรักษา การเป็นเป้าหมายวิจัยทางการแพทย์ การปลูกถ่ายอวัยวะ ผลข้างเคียง ผลที่คาดว่าจะเกิด และค่ารักษา</li>
              <li>สิทธิ์ขอดูประวัติการรักษาและขอสำเนาเอกสาร</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-black mb-2">3. สิทธิ์ในการตัดสินใจด้วยตนเอง</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>สิทธิ์เลือกวิธีรักษา ยินยอมหรือปฏิเสธ</li>
              <li>สิทธิ์ยินยอมหรือปฏิเสธการเป็นเป้าหมายวิจัยทางการแพทย์</li>
              <li>สิทธิ์ขอความเห็นแพทย์อื่น (Second Opinion)</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-black mb-2">4. สิทธิ์ในการรักษาความลับ</h4>
            <p>มีสิทธิ์ที่จะไม่ถูกละเมิดความลับทางร่างกาย สุขภาพ และชีวิตส่วนตัวที่เกี่ยวข้องกับการรักษา.</p>
          </div>

          <div>
            <h4 className="font-semibold text-black mb-2">5. สิทธิ์ร้องขอปรึกษาและไกล่เกลี่ย</h4>
            <p>มีสิทธิ์ยื่นขอปรึกษาและไกล่เกลี่ยต่อสถาบันไกล่เกลี่ยข้อพิพาททางการแพทย์เกาหลี สำหรับข้อพิพาทที่เกิดขึ้นในกระบวนการบริการทางการแพทย์.</p>
          </div>
        </div>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3 pt-6 border-t">หน้าที่ของผู้ป่วย</h3>

        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-black mb-2">1. หน้าที่ให้ข้อมูล</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>ต้องให้ข้อมูลเกี่ยวกับสุขภาพของตนเองแก่ทีมแพทย์อย่างถูกต้อง.</li>
              <li>ต้องแจ้งประวัติการเจ็บป่วย ยาที่รับประทานอยู่ อาการแพ้ ฯลฯ อย่างซื่อสัตย์.</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-black mb-2">2. ปฏิบัติตามคำแนะนำทีมแพทย์</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>ต้องปฏิบัติตามคำแนะนำการรักษาและใบสั่งยาอย่างเคร่งครัด.</li>
              <li>ต้องรักษาเวลานัด และติดต่อล่วงหน้าหากจำเป็น.</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-black mb-2">3. หน้าที่ชำระค่ารักษา</h4>
            <p>ต้องชำระค่ารักษาสำหรับบริการทางการแพทย์ที่ได้รับอย่างถูกต้อง.</p>
          </div>

          <div>
            <h4 className="font-semibold text-black mb-2">4. หน้าที่เคารพผู้อื่น</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>ต้องไม่กระทำการที่รบกวนการรักษาของผู้ป่วยอื่น.</li>
              <li>โรงพยาบาล ต้องรักษาความเงียบและความเป็นระเบียบ.</li>
              <li>ต้องเคารพทีมแพทย์และพนักงานโรงพยาบาล.</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-black mb-2">5. หน้าที่ปกป้องสิ่งอำนวยความสะดวก</h4>
            <p>สิ่งอำนวยความสะดวกของคลินิก ต้องดูแลอุปกรณ์การแพทย์และระวังไม่ทำลาย.</p>
          </div>
        </div>
      </section>

      <section className="bg-blue-50 p-4 rounded-lg mt-6">
        <h4 className="font-semibold text-black mb-2">สอบถามและปรึกษา</h4>
        <p className="text-sm">หากผู้ป่วยมีคำถามเกี่ยวกับการคุ้มครองสิทธิ์และข้อพิพาททางการแพทย์</p>
        <div className="mt-2 space-y-1">
          <p><strong>เบอร์โทรโรงพยาบาล:</strong> 031-611-3222</p>
          <p><strong>สถาบันไกล่เกลี่ยข้อพิพาททางการแพทย์เกาหลี:</strong> 1670-2545</p>
        </div>
      </section>
    </div>
  );
}

// ค่ารักษาที่ไม่ครอบคลุมประกัน
function NonInsurancePrices() {
  const prices = [
    { code: 'UW3021017', item: 'ทันตกรรม: ค่าผ่าตัด/กำจัดหินปูน/1/3 ขากรรไกร', classification: 'กำจัดหินปูน 1/3', price: '10,000', minPrice: '', maxPrice: '', note: '', updated: '2024-01-01' },
    { code: 'UW3021027', item: 'ทันตกรรม: ค่าผ่าตัด/กำจัดหินปูน/ขากรรไกรบน', classification: 'กำจัดหินปูน ขากรรไกรบน', price: '25,000', minPrice: '', maxPrice: '', note: '', updated: '2024-01-01' },
    { code: 'UW3021037', item: 'ทันตกรรม: ค่าผ่าตัด/กำจัดหินปูน/ขากรรไกรล่าง', classification: 'กำจัดหินปูน ขากรรไกรล่าง', price: '25,000', minPrice: '', maxPrice: '', note: '', updated: '2024-01-01' },
    { code: 'UW3021047', item: 'ทันตกรรม: ค่าผ่าตัด/กำจัดหินปูน/ทั้งปาก', classification: 'กำจัดหินปูน ทั้งปาก', price: '70,000', minPrice: '', maxPrice: '', note: '', updated: '2024-01-01' },
    { code: 'UZ0040014', item: 'ทันตกรรม: ค่าผ่าตัด/อินเลย์(Inlay) และออนเลย์(Onlay)', classification: 'ceramic inlay', price: '300,000', minPrice: '', maxPrice: '', note: '', updated: '2024-01-01' },
    { code: 'U02390000', item: 'ทันตกรรม: ค่าผ่าตัด/อุดเรซินคอมโพสิตบ่มด้วยแสง/ผุ-1 ด้าน', classification: 'เรซิน ผุ1ด้าน', price: '100,000', minPrice: '', maxPrice: '', note: '', updated: '2024-01-01' },
    { code: 'U02400000', item: 'ทันตกรรม: ค่าผ่าตัด/อุดเรซินคอมโพสิตบ่มด้วยแสง/ผุ-2 ด้าน', classification: 'เรซิน 2 ด้าน', price: '100,000', minPrice: '', maxPrice: '', note: '', updated: '2024-01-01' },
    { code: 'U02410000', item: 'ทันตกรรม: ค่าผ่าตัด/อุดเรซินคอมโพสิตบ่มด้วยแสง/ผุ-3 ด้านขึ้นไป', classification: 'เรซิน 3 ด้านขึ้นไป', price: '150,000', minPrice: '', maxPrice: '', note: '', updated: '2024-01-01' },
    { code: 'UB0010051', item: 'ค่าครอบฟัน/รากฟันเทียมทันตกรรม(ต่อ 1 ซี่)/Zirconia', classification: 'รากฟันเทียม zir', price: '', minPrice: '890,000', maxPrice: '1,290,000', note: '', updated: '2024-01-01' },
    { code: 'UW609F350', item: 'ค่าครอบฟัน/ครอบฟัน/Zirconia', classification: 'zirconia', price: '500,000', minPrice: '', maxPrice: '', note: 'core แยกต่างหาก', updated: '2024-01-01' },
    { code: 'PDZ010000', item: 'ค่าธรรมเนียมใบรับรอง/ใบวินิจฉัย/ทั่วไป', classification: 'ใบวินิจฉัยทั่วไป', price: '20,000', minPrice: '', maxPrice: '', note: '', updated: '2024-01-01' },
    { code: 'PDZ090007', item: 'ค่าธรรมเนียมใบรับรอง/ใบยืนยัน/การรักษา', classification: 'ใบยืนยันการรักษา', price: '3,000', minPrice: '', maxPrice: '', note: '', updated: '2024-01-01' },
  ];

  return (
    <div className="space-y-4">
      <div className="bg-blue-50 p-4 rounded-lg text-sm text-gray-700">
        <p className="font-semibold mb-2">ค่ารักษาที่ไม่ครอบคลุมประกัน ข้อมูล</p>
        <p className="text-xs leading-relaxed">
          รายการค่ารักษาที่ไม่ครอบคลุมประกันจัดทำตามมาตรฐานปี 2024, อาจเปลี่ยนแปลงตามสภาพช่องปากของผู้ป่วยและวัสดุที่ใช้.
          ค่ารักษาที่แน่นอนจะแจ้งผ่านการปรึกษาเมื่อมาที่คลินิก.
        </p>
      </div>

      <div className="overflow-x-auto -mx-6 px-6">
        <table className="w-full text-xs border-collapse">
          <thead>
            <tr className="bg-[#008095] text-white">
              <th className="border border-gray-300 px-2 py-2 text-left min-w-[100px]">รหัส</th>
              <th className="border border-gray-300 px-2 py-2 text-left min-w-[200px]">หมวดหมู่</th>
              <th className="border border-gray-300 px-2 py-2 text-left min-w-[120px]">ชื่อที่ใช้</th>
              <th className="border border-gray-300 px-2 py-2 text-right min-w-[80px]">ค่าใช้จ่าย</th>
              <th className="border border-gray-300 px-2 py-2 text-right min-w-[80px]">ค่าใช้จ่ายต่ำสุด</th>
              <th className="border border-gray-300 px-2 py-2 text-right min-w-[80px]">ค่าใช้จ่ายสูงสุด</th>
              <th className="border border-gray-300 px-2 py-2 text-left min-w-[80px]">หมายเหตุ</th>
            </tr>
          </thead>
          <tbody>
            {prices.map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="border border-gray-300 px-2 py-2 text-gray-600">{item.code}</td>
                <td className="border border-gray-300 px-2 py-2">{item.item}</td>
                <td className="border border-gray-300 px-2 py-2">{item.classification}</td>
                <td className="border border-gray-300 px-2 py-2 text-right font-semibold">
                  {item.price ? `${item.price}₩` : '-'}
                </td>
                <td className="border border-gray-300 px-2 py-2 text-right">
                  {item.minPrice ? `${item.minPrice}₩` : '-'}
                </td>
                <td className="border border-gray-300 px-2 py-2 text-right">
                  {item.maxPrice ? `${item.maxPrice}₩` : '-'}
                </td>
                <td className="border border-gray-300 px-2 py-2 text-xs text-gray-600">{item.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="text-xs text-gray-500 space-y-1 pt-4">
        <p>※ ค่าใช้จ่ายเหล่านี้เป็นรายการนอกประกันที่ไม่ได้รับความคุ้มครองจากประกันสุขภาพ.</p>
        <p>※ ค่าใช้จ่ายจริงอาจแตกต่างตามเนื้อหาการรักษาและวัสดุที่ใช้.</p>
        <p>※ ค่าใช้จ่ายที่แน่นอนจะแจ้งเมื่อมาปรึกษาการรักษา.</p>
      </div>
    </div>
  );
}
