'use client';

import { useState } from 'react';

type ModalType = 'privacy' | 'terms' | 'rights' | 'prices' | null;

export default function FooterSection() {
  const [openModal, setOpenModal] = useState<ModalType>(null);

  return (
    <footer className="bg-white border-t border-[#e9ebf1]">
      <div className="max-w-[430px] mx-auto px-4 py-10">
        <div className="space-y-20">
          {/* Footer Links */}
          <div className="flex justify-between text-[13px] font-semibold text-[#37373e]">
            <button onClick={() => setOpenModal('privacy')} className="hover:text-gray-900">Chinh sach bao mat</button>
            <button onClick={() => setOpenModal('terms')} className="hover:text-gray-900">Dieu khoan</button>
            <button onClick={() => setOpenModal('rights')} className="hover:text-gray-900">Quyen benh nhan</button>
            <button onClick={() => setOpenModal('prices')} className="hover:text-gray-900">Bang gia</button>
          </div>

          {/* Company Info */}
          <div className="space-y-8">
            <div className="space-y-3.5">
              <div className="text-xl font-bold text-gray-900">Nha khoa Medis</div>
              <p className="text-[15px] font-semibold text-[#292a2f]">
                Nha khoa Kyungsung Medis
              </p>
            </div>

            <div className="space-y-2 text-[15px] text-[#292a2f]">
              <p>
                Dai dien: <span className="font-semibold">Kim Dong Seok</span>
              </p>
              <p>
                Ma so doanh nghiep: <span className="font-semibold">484-31-00750</span>
              </p>
              <p>
                Dia chi: <span className="font-semibold">Tang 4, Toa nha Sewoong, 295 Suyeong-ro, Nam-gu, Busan</span>
              </p>
              <p>
                So dien thoai: <span className="font-semibold">0507-1315-7475</span>
              </p>
              <p>
                Email: <span className="font-semibold">gdfst111@naver.com</span>
              </p>
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
                {openModal === 'privacy' && 'Chinh sach bao mat'}
                {openModal === 'terms' && 'Dieu khoan su dung'}
                {openModal === 'rights' && 'Quyen va nghia vu cua benh nhan'}
                {openModal === 'prices' && 'Chi phi dieu tri khong bao hiem'}
              </h2>
              <button onClick={() => setOpenModal(null)} className="text-2xl text-gray-500 hover:text-gray-900">x</button>
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

// Chinh sach bao mat
function PrivacyPolicy() {
  return (
    <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
      <section>
        <h3 className="font-bold text-base text-black mb-3">1. Muc dich thu thap va su dung thong tin ca nhan</h3>
        <p>Nha khoa Kyungsung Medis (sau day goi la &apos;Phong kham&apos;) xu ly thong tin ca nhan cho cac muc dich sau. Thong tin ca nhan duoc xu ly se khong duoc su dung cho bat ky muc dich nao khac ngoai cac muc dich sau, va neu muc dich su dung thay doi, chung toi se thuc hien cac bien phap can thiet nhu xin dong y rieng theo Luat Bao ve thong tin ca nhan.</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Dat lich kham va tu van</li>
          <li>Quan ly ho so benh an va cung cap dich vu y te</li>
          <li>Thanh toan va thu phi dieu tri</li>
          <li>Huong dan ve viec su dung phong kham va dieu tri</li>
        </ul>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3">2. Hang muc thong tin ca nhan duoc thu thap</h3>
        <p className="mb-2">Phong kham thu thap thong tin ca nhan sau day cho viec kham va tu van.</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Bat buoc: Ho ten, ngay sinh, so dien thoai, dia chi</li>
          <li>Thong tin dieu tri: Ho so benh an, ket qua xet nghiem, lich su dieu tri</li>
          <li>Tu dong thu thap: Dia chi IP, cookie, nhat ky truy cap, lich su su dung dich vu</li>
        </ul>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3">3. Thoi gian luu giu va su dung thong tin ca nhan</h3>
        <p>Phong kham xu ly va luu giu thong tin ca nhan trong thoi gian luu giu va su dung theo quy dinh cua phap luat hoac trong thoi gian dong y khi thu thap thong tin tu chu the du lieu.</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Ho so benh an: 10 nam theo Luat Y te</li>
          <li>Danh sach benh nhan: 5 nam</li>
          <li>Don thuoc: 2 nam</li>
          <li>Ho so thanh toan chi phi dieu tri: 5 nam</li>
        </ul>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3">4. Cung cap thong tin ca nhan cho ben thu ba</h3>
        <p>Phong kham ve nguyen tac xu ly thong tin ca nhan cua chu the du lieu trong pham vi muc dich thu thap va su dung da neu, va se khong xu ly vuot qua pham vi ban dau hoac cung cap cho ben thu ba ma khong co su dong y truoc cua chu the du lieu, ngoai tru cac truong hop sau:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Khi nhan duoc su dong y rieng tu chu the du lieu</li>
          <li>Khi co quy dinh dac biet trong phap luat</li>
          <li>Khi chu the du lieu hoac nguoi dai dien hop phap khong the bay to y chi hoac khong the lien lac truoc do vi dia chi khong ro, va can thiet cho loi ich cap bach cua tinh mang, than the hoac tai san cua chu the du lieu hoac ben thu ba</li>
        </ul>
      </section>

      <section className="text-xs text-gray-500 pt-4 border-t">
        <p>Chinh sach bao mat thong tin ca nhan nay co hieu luc tu ngay 1 thang 1 nam 2024.</p>
      </section>
    </div>
  );
}

// Dieu khoan su dung
function TermsOfService() {
  return (
    <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
      <section>
        <h3 className="font-bold text-base text-black mb-3">Dieu 1 (Muc dich)</h3>
        <p>Dieu khoan nay quy dinh quyen loi, nghia vu va trach nhiem cua phong kham va nguoi su dung lien quan den viec su dung cac dich vu y te va dich vu bo sung do Nha khoa Kyungsung Medis (sau day goi la &quot;Phong kham&quot;) cung cap.</p>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3">Dieu 2 (Noi dung dich vu)</h3>
        <p>Cac dich vu do phong kham cung cap bao gom:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Dich vu kham rang (Kham tong quat, implant, chinh nha, tham my rang, v.v.)</li>
          <li>Dich vu dat lich kham va tu van</li>
          <li>Dich vu tu van AI truc tuyen</li>
          <li>Dich vu cung cap thong tin lien quan den kham chua benh</li>
        </ul>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3">Dieu 3 (Dat lich va huy)</h3>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Dat lich kham co the duoc thuc hien qua dien thoai, truc tiep hoac tu van truc tuyen.</li>
          <li>Huy hoac thay doi lich hen co the duoc thuc hien truoc 24 gio truoc gio hen.</li>
          <li>Neu khong den kham dung gio da hen ma khong co ly do chinh dang, hoac huy trong vong 24 gio nhieu lan, viec dat lich trong tuong lai co the bi han che.</li>
        </ol>
      </section>

      <section className="text-xs text-gray-500 pt-4 border-t">
        <p>Dieu khoan nay co hieu luc tu ngay 1 thang 1 nam 2024.</p>
      </section>
    </div>
  );
}

// Quyen va nghia vu cua benh nhan
function PatientRights() {
  return (
    <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
      <section>
        <h3 className="font-bold text-base text-black mb-3">Quyen cua benh nhan</h3>

        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-black mb-2">1. Quyen duoc kham benh</h4>
            <p>Benh nhan co quyen nhan duoc dich vu y te phu hop de bao ve suc khoe cua minh.</p>
          </div>

          <div>
            <h4 className="font-semibold text-black mb-2">2. Quyen duoc biet</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Quyen biet ten cua bac si, y ta va nhan vien y te truc tiep tham gia dieu tri cho minh</li>
              <li>Quyen duoc giai thich day du ve tinh trang suc khoe hien tai, phuong phap dieu tri, co tham gia nghien cuu y hoc hay khong, ghep tang hay khong, tac dung phu va ket qua du kien, chi phi dieu tri</li>
              <li>Quyen yeu cau xem va sao chep ho so benh an</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-black mb-2">3. Quyen tu quyet dinh</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Quyen chon, dong y hoac tu choi phuong phap dieu tri</li>
              <li>Quyen dong y hoac tu choi tham gia nghien cuu y hoc</li>
              <li>Quyen tim y kien bac si thu hai</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-black mb-2">4. Quyen duoc bao mat</h4>
            <p>Quyen khong bi xam pham bi mat ve than the, suc khoe va doi tu lien quan den kham chua benh.</p>
          </div>
        </div>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3 pt-6 border-t">Nghia vu cua benh nhan</h3>

        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-black mb-2">1. Nghia vu cung cap thong tin</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Phai cung cap thong tin chinh xac ve suc khoe cua minh cho doi ngu y te.</li>
              <li>Phai thong bao trung thuc ve tien su benh, thuoc dang uong, di ung, v.v.</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-black mb-2">2. Tuan thu chi dan cua doi ngu y te</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Phai tuan thu chi dan dieu tri va don thuoc cua doi ngu y te.</li>
              <li>Phai den dung gio hen va lien he truoc neu co truong hop bat kha khang.</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-black mb-2">3. Nghia vu thanh toan chi phi dieu tri</h4>
            <p>Phai thanh toan chi phi dieu tri chinh dang cho cac dich vu y te da nhan.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

// Chi phi dieu tri khong bao hiem
function NonInsurancePrices() {
  const prices = [
    { code: 'UW3021017', item: 'Xu ly rang: Phi phau thuat/Lay cao rang/1/3 ham', classification: 'Lay cao rang 1/3', price: '10,000', minPrice: '', maxPrice: '', note: '', updated: '2021-11-18' },
    { code: 'UW3021027', item: 'Xu ly rang: Phi phau thuat/Lay cao rang/Ham tren', classification: 'Lay cao rang ham tren', price: '25,000', minPrice: '', maxPrice: '', note: '', updated: '2021-11-19' },
    { code: 'UW3021037', item: 'Xu ly rang: Phi phau thuat/Lay cao rang/Ham duoi', classification: 'Lay cao rang ham duoi', price: '25,000', minPrice: '', maxPrice: '', note: '', updated: '2021-11-20' },
    { code: 'UW3021047', item: 'Xu ly rang: Phi phau thuat/Lay cao rang/Toan ham', classification: 'Lay cao rang toan ham', price: '70,000', minPrice: '', maxPrice: '', note: '', updated: '2021-11-21' },
    { code: 'UZ0040014', item: 'Xu ly rang: Inlay va Onlay (tram gian tiep bang vang, v.v.)-Inlay', classification: 'Ceramic inlay', price: '300,000', minPrice: '', maxPrice: '', note: '', updated: '2021-11-24' },
    { code: 'U02390000', item: 'Xu ly rang: Tram resin quang trung hop/Sau rang-1 mat', classification: 'Resin sau rang 1 mat', price: '100,000', minPrice: '', maxPrice: '', note: '', updated: '2021-11-25' },
    { code: 'U02400000', item: 'Xu ly rang: Tram resin quang trung hop/Sau rang-2 mat', classification: 'Resin 2 mat', price: '100,000', minPrice: '', maxPrice: '', note: '', updated: '2021-11-26' },
    { code: 'U02410000', item: 'Xu ly rang: Tram resin quang trung hop/Sau rang-3 mat tro len', classification: 'Resin 3 mat tro len', price: '150,000', minPrice: '', maxPrice: '', note: '', updated: '2021-11-27' },
    { code: 'UB0010051', item: 'Phi phuc hinh rang/Implant nha khoa(1 rang)/Zirconia', classification: 'Implant zir', price: '', minPrice: '890,000', maxPrice: '1,290,000', note: '', updated: '2021-12-01' },
    { code: 'UW609F350', item: 'Phi phuc hinh rang/Crown/Zirconia', classification: 'Zirconia', price: '500,000', minPrice: '', maxPrice: '', note: 'Core rieng', updated: '2021-12-04' },
  ];

  return (
    <div className="space-y-4">
      <div className="bg-blue-50 p-4 rounded-lg text-sm text-gray-700">
        <p className="font-semibold mb-2">Huong dan chi phi dieu tri khong bao hiem</p>
        <p className="text-xs leading-relaxed">
          Chi phi dieu tri khong bao hiem nay duoc lap vao thang 11 nam 2021 va co the thay doi tuy theo tinh trang mieng va vat lieu su dung cua benh nhan.
          Chi phi dieu tri chinh xac se duoc huong dan khi den kham tu van.
        </p>
      </div>

      <div className="overflow-x-auto -mx-6 px-6">
        <table className="w-full text-xs border-collapse">
          <thead>
            <tr className="bg-[#6b8cce] text-white">
              <th className="border border-gray-300 px-2 py-2 text-left min-w-[100px]">Ma</th>
              <th className="border border-gray-300 px-2 py-2 text-left min-w-[200px]">Phan loai</th>
              <th className="border border-gray-300 px-2 py-2 text-left min-w-[120px]">Ten su dung</th>
              <th className="border border-gray-300 px-2 py-2 text-right min-w-[80px]">Chi phi</th>
              <th className="border border-gray-300 px-2 py-2 text-right min-w-[80px]">Chi phi toi thieu</th>
              <th className="border border-gray-300 px-2 py-2 text-right min-w-[80px]">Chi phi toi da</th>
              <th className="border border-gray-300 px-2 py-2 text-left min-w-[150px]">Ghi chu</th>
              <th className="border border-gray-300 px-2 py-2 text-center min-w-[90px]">Ngay cap nhat</th>
            </tr>
          </thead>
          <tbody>
            {prices.map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="border border-gray-300 px-2 py-2 text-gray-600">{item.code}</td>
                <td className="border border-gray-300 px-2 py-2">{item.item}</td>
                <td className="border border-gray-300 px-2 py-2">{item.classification}</td>
                <td className="border border-gray-300 px-2 py-2 text-right font-semibold">
                  {item.price ? `${item.price} won` : '-'}
                </td>
                <td className="border border-gray-300 px-2 py-2 text-right">
                  {item.minPrice ? `${item.minPrice} won` : '-'}
                </td>
                <td className="border border-gray-300 px-2 py-2 text-right">
                  {item.maxPrice ? `${item.maxPrice} won` : '-'}
                </td>
                <td className="border border-gray-300 px-2 py-2 text-xs text-gray-600">{item.note}</td>
                <td className="border border-gray-300 px-2 py-2 text-center text-gray-500">{item.updated}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="text-xs text-gray-500 space-y-1 pt-4">
        <p>* Chi phi nay la cac hang muc khong bao hiem y te.</p>
        <p>* Chi phi thuc te co the thay doi tuy theo noi dung dieu tri va vat lieu su dung.</p>
        <p>* Chi phi chinh xac se duoc huong dan khi tu van kham benh.</p>
      </div>
    </div>
  );
}
