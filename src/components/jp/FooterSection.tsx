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
            <button onClick={() => setOpenModal('privacy')} className="hover:text-gray-900">個人情報方針</button>
            <button onClick={() => setOpenModal('terms')} className="hover:text-gray-900">利用規約</button>
            <button onClick={() => setOpenModal('rights')} className="hover:text-gray-900">患者の権利</button>
            <button onClick={() => setOpenModal('prices')} className="hover:text-gray-900">料金表</button>
          </div>

          {/* Company Info */}
          <div className="space-y-8">
            <div className="space-y-3.5">
              <div className="text-xl font-bold text-gray-900">メディス歯科クリニック</div>
              <p className="text-[15px] font-semibold text-[#292a2f]">
                慶星メディス歯科医院
              </p>
            </div>

            <div className="space-y-2 text-[15px] text-[#292a2f]">
              <p>
                代表院長 : <span className="font-semibold">金東錫（キム・ドンソク）</span>
              </p>
              <p>
                事業者登録番号 : <span className="font-semibold">484-31-00750</span>
              </p>
              <p>
                住所 : <span className="font-semibold">釜山広域市南区水営路295 勝ビル4階</span>
              </p>
              <p>
                電話 : <span className="font-semibold">0507-1315-7475</span>
              </p>
              <p>
                メール : <span className="font-semibold">medisksu@naver.com</span>
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
                {openModal === 'privacy' && '個人情報処理方針'}
                {openModal === 'terms' && '利用規約'}
                {openModal === 'rights' && '患者の権利と義務'}
                {openModal === 'prices' && '非保険診療費用'}
              </h2>
              <button onClick={() => setOpenModal(null)} className="text-2xl text-gray-500 hover:text-gray-900">×</button>
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

// 개인정보처리방침
function PrivacyPolicy() {
  return (
    <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
      <section>
        <h3 className="font-bold text-base text-black mb-3">1. 개인정보의 수집 및 이용목적</h3>
        <p>경성대 고덕퍼스트치과의원(이하 &apos;병원&apos;)은 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 개인정보 보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>진료 예약 및 상담</li>
          <li>진료기록 관리 및 의료서비스 제공</li>
          <li>진료비 청구 및 수납</li>
          <li>병원 이용 및 치료에 대한 안내</li>
        </ul>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3">2. 수집하는 개인정보의 항목</h3>
        <p className="mb-2">병원은 진료 및 상담 등을 위해 아래와 같은 개인정보를 수집하고 있습니다.</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>필수항목: 성명, 생년월일, 연락처(전화번호), 주소</li>
          <li>진료정보: 진료기록, 검사결과, 치료내역</li>
          <li>자동수집: 접속 IP, 쿠키, 접속 로그, 서비스 이용 기록</li>
        </ul>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3">3. 개인정보의 보유 및 이용기간</h3>
        <p>병원은 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의 받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>진료기록: 의료법에 따라 10년</li>
          <li>환자 명부: 5년</li>
          <li>처방전: 2년</li>
          <li>진료비 납입 관련 기록: 5년</li>
        </ul>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3">4. 개인정보의 제3자 제공</h3>
        <p>병원은 원칙적으로 정보주체의 개인정보를 수집·이용 목적으로 명시한 범위 내에서 처리하며, 다음의 경우를 제외하고는 정보주체의 사전 동의 없이는 본래의 목적 범위를 초과하여 처리하거나 제3자에게 제공하지 않습니다.</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>정보주체로부터 별도의 동의를 받은 경우</li>
          <li>법률에 특별한 규정이 있는 경우</li>
          <li>정보주체 또는 법정대리인이 의사표시를 할 수 없는 상태이거나 주소불명 등으로 사전 동의를 받을 수 없는 경우로서 명백히 정보주체 또는 제3자의 급박한 생명, 신체, 재산의 이익을 위하여 필요하다고 인정되는 경우</li>
        </ul>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3">5. 정보주체의 권리·의무 및 행사방법</h3>
        <p>정보주체는 병원에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다.</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>개인정보 열람 요구</li>
          <li>오류 등이 있을 경우 정정 요구</li>
          <li>삭제 요구</li>
          <li>처리정지 요구</li>
        </ul>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3">6. 개인정보의 안전성 확보조치</h3>
        <p>병원은 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>관리적 조치: 내부관리계획 수립·시행, 정기적 직원 교육 등</li>
          <li>기술적 조치: 개인정보처리시스템 등의 접근권한 관리, 접근통제시스템 설치, 고유식별정보 등의 암호화, 보안프로그램 설치</li>
          <li>물리적 조치: 전산실, 자료보관실 등의 접근통제</li>
        </ul>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3">7. 개인정보 보호책임자</h3>
        <div className="bg-gray-50 p-4 rounded-lg mt-2">
          <p><strong>성명:</strong> 김동석</p>
          <p><strong>직책:</strong> 대표원장</p>
          <p><strong>연락처:</strong> 0507-1315-7475</p>
          <p><strong>이메일:</strong> medisksu@naver.com</p>
        </div>
      </section>

      <section className="text-xs text-gray-500 pt-4 border-t">
        <p>본 개인정보처리방침은 2024년 1월 1일부터 적용됩니다.</p>
      </section>
    </div>
  );
}

// 회원약관
function TermsOfService() {
  return (
    <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
      <section>
        <h3 className="font-bold text-base text-black mb-3">제1조 (목적)</h3>
        <p>이 약관은 경성대 고덕퍼스트치과의원(이하 &quot;병원&quot;)이 제공하는 의료서비스 및 부가서비스의 이용과 관련하여 병원과 이용자의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.</p>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3">제2조 (서비스의 내용)</h3>
        <p>병원이 제공하는 서비스는 다음 각 호와 같습니다.</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>치과 진료 서비스 (일반진료, 임플란트, 치아교정, 심미치료 등)</li>
          <li>진료 예약 및 상담 서비스</li>
          <li>온라인 AI 상담 서비스</li>
          <li>진료 관련 정보 제공 서비스</li>
        </ul>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3">제3조 (예약 및 취소)</h3>
        <ol className="list-decimal pl-5 space-y-2">
          <li>진료 예약은 전화, 방문, 온라인 상담을 통해 가능합니다.</li>
          <li>예약 취소 또는 변경은 예약 시간 24시간 전까지 가능합니다.</li>
          <li>정당한 사유 없이 예약 시간에 내원하지 않거나, 24시간 이내 취소가 반복될 경우 향후 예약이 제한될 수 있습니다.</li>
        </ol>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3">제4조 (진료비 및 결제)</h3>
        <ol className="list-decimal pl-5 space-y-2">
          <li>진료비는 건강보험 요양급여 기준 및 비급여 진료비용 고시에 따라 산정됩니다.</li>
          <li>진료비는 진료 후 즉시 수납을 원칙으로 하며, 현금, 신용카드, 계좌이체 등의 방법으로 납부할 수 있습니다.</li>
          <li>보험청구가 필요한 경우, 환자는 필요한 서류를 제출해야 합니다.</li>
        </ol>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3">제5조 (환자의 의무)</h3>
        <ol className="list-decimal pl-5 space-y-2">
          <li>환자는 정확한 개인정보 및 병력을 제공해야 합니다.</li>
          <li>환자는 의료진의 치료 지시를 준수해야 합니다.</li>
          <li>환자는 다른 환자 및 의료진의 진료 환경을 존중해야 합니다.</li>
          <li>환자는 병원 시설 및 기물을 파손하지 않도록 주의해야 합니다.</li>
        </ol>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3">제6조 (병원의 의무)</h3>
        <ol className="list-decimal pl-5 space-y-2">
          <li>병원은 환자에게 양질의 의료서비스를 제공하기 위해 노력합니다.</li>
          <li>병원은 환자의 개인정보를 관련 법령에 따라 안전하게 관리합니다.</li>
          <li>병원은 진료 전 충분한 설명과 동의 절차를 거칩니다.</li>
          <li>병원은 환자의 권리를 존중하고 보호합니다.</li>
        </ol>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3">제7조 (책임의 제한)</h3>
        <ol className="list-decimal pl-5 space-y-2">
          <li>병원은 환자가 제공한 부정확한 정보로 인한 문제에 대해 책임을 지지 않습니다.</li>
          <li>병원은 환자의 귀책사유로 인한 치료 지연 또는 실패에 대해 책임을 지지 않습니다.</li>
          <li>불가항력적인 사유로 서비스 제공이 불가능한 경우 병원은 책임을 지지 않습니다.</li>
        </ol>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3">제8조 (분쟁 해결)</h3>
        <p>본 약관과 관련하여 분쟁이 발생한 경우, 병원과 환자는 상호 협의를 통해 해결하도록 노력하며, 협의가 이루어지지 않을 경우 관할 법원의 판결에 따릅니다.</p>
      </section>

      <section className="text-xs text-gray-500 pt-4 border-t">
        <p>본 약관은 2024년 1월 1일부터 시행됩니다.</p>
      </section>
    </div>
  );
}

// 환자의 권리와 의무
function PatientRights() {
  return (
    <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
      <section>
        <h3 className="font-bold text-base text-black mb-3">환자의 권리</h3>

        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-black mb-2">1. 진료받을 권리</h4>
            <p>환자는 자신의 건강보호를 위하여 적절한 보건의료서비스를 받을 권리가 있습니다.</p>
          </div>

          <div>
            <h4 className="font-semibold text-black mb-2">2. 알 권리</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>담당 의사, 간호사 등 자신의 진료에 직접 종사하는 의료인의 성명을 알 권리</li>
              <li>현재의 건강상태, 치료 방법, 의학적 연구대상 여부, 장기이식 여부, 부작용 등 예상 결과 및 진료 비용에 관하여 충분한 설명을 들을 권리</li>
              <li>진료기록 열람 및 사본 교부를 요청할 권리</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-black mb-2">3. 자기결정권</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>치료 방법을 선택하고 동의하거나 거부할 권리</li>
              <li>의학적 연구 대상이 되는 것에 대한 동의 또는 거부 권리</li>
              <li>다른 의사의 의견(세컨드 오피니언)을 구할 권리</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-black mb-2">4. 비밀을 보호받을 권리</h4>
            <p>진료와 관련된 신체상·건강상의 비밀과 사생활의 비밀을 침해받지 아니할 권리가 있습니다.</p>
          </div>

          <div>
            <h4 className="font-semibold text-black mb-2">5. 상담·조정 신청권</h4>
            <p>의료서비스 과정에서 발생한 분쟁에 대해 한국의료분쟁조정중재원에 상담 및 조정을 신청할 권리가 있습니다.</p>
          </div>
        </div>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3 pt-6 border-t">환자의 의무</h3>

        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-black mb-2">1. 정보 제공의 의무</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>자신의 건강 관련 정보를 의료진에게 정확하게 제공해야 합니다.</li>
              <li>과거 병력, 현재 복용 중인 약물, 알레르기 등을 성실히 알려야 합니다.</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-black mb-2">2. 의료진 지시 준수</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>의료진의 치료 지시와 처방을 성실히 따라야 합니다.</li>
              <li>예약 시간을 준수하고, 부득이한 경우 사전에 연락해야 합니다.</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-black mb-2">3. 진료비 납부 의무</h4>
            <p>제공받은 의료서비스에 대한 진료비를 정당하게 납부해야 합니다.</p>
          </div>

          <div>
            <h4 className="font-semibold text-black mb-2">4. 타인 배려의 의무</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>다른 환자의 진료와 치료에 방해가 되는 행위를 하지 않아야 합니다.</li>
              <li>병원 내에서 정숙을 유지하고 질서를 지켜야 합니다.</li>
              <li>의료진 및 병원 직원을 존중하고 예의를 지켜야 합니다.</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-black mb-2">5. 시설 보호 의무</h4>
            <p>병원 시설 및 의료 기기를 소중히 다루고, 고의 또는 과실로 파손하지 않도록 주의해야 합니다.</p>
          </div>
        </div>
      </section>

      <section className="bg-blue-50 p-4 rounded-lg mt-6">
        <h4 className="font-semibold text-black mb-2">문의 및 상담</h4>
        <p className="text-sm">환자의 권리 보호 및 의료분쟁과 관련한 문의사항이 있으신 경우</p>
        <div className="mt-2 space-y-1">
          <p><strong>병원 대표번호:</strong> 0507-1315-7475</p>
          <p><strong>한국의료분쟁조정중재원:</strong> 1670-2545</p>
        </div>
      </section>
    </div>
  );
}

// 비급여 진료비용
function NonInsurancePrices() {
  const prices = [
    { code: 'UW3021017', item: '치과 처치: 수술료/치석제거/1/3악당', classification: '치석제거 1/3', price: '10,000', minPrice: '', maxPrice: '', note: '', updated: '2021-11-18' },
    { code: 'UW3021027', item: '치과 처치: 수술료/치석제거/상악', classification: '치석제거 상악', price: '25,000', minPrice: '', maxPrice: '', note: '', updated: '2021-11-19' },
    { code: 'UW3021037', item: '치과 처치: 수술료/치석제거/하악', classification: '치석제거 하악', price: '25,000', minPrice: '', maxPrice: '', note: '', updated: '2021-11-20' },
    { code: 'UW3021047', item: '치과 처치: 수술료/치석제거/전악', classification: '치석제거 전악', price: '70,000', minPrice: '', maxPrice: '', note: '', updated: '2021-11-21' },
    { code: 'UZ0040014', item: '치과 처치: 수술료/인레이(Inlay) 및 온레이(Onlay) 간접충전(금 등을 사용한 충전치료)-인레이', classification: 'ceramic inlay', price: '300,000', minPrice: '', maxPrice: '', note: '', updated: '2021-11-24' },
    { code: 'U02390000', item: '치과 처치: 수술료/광중합형 복합레진 충전/우식-1면', classification: '레진 우식1면', price: '100,000', minPrice: '', maxPrice: '', note: '', updated: '2021-11-25' },
    { code: 'U02400000', item: '치과 처치: 수술료/광중합형 복합레진 충전/우식-2면', classification: '레진 2면', price: '100,000', minPrice: '', maxPrice: '', note: '', updated: '2021-11-26' },
    { code: 'U02410000', item: '치과 처치: 수술료/광중합형 복합레진 충전/우식-3면 이상', classification: '레진 3면이상', price: '150,000', minPrice: '', maxPrice: '', note: '', updated: '2021-11-27' },
    { code: 'UZ0050001', item: '치과 처치: 수술료/광중합형 복합레진 충전/파모', classification: '레진충전(치경부)', price: '80,000', minPrice: '', maxPrice: '', note: '', updated: '2021-11-28' },
    { code: 'UB0010051', item: '치관의 보철료/치과임플란트(1치당)/Zirconia', classification: '임플란트 zir', price: '', minPrice: '890,000', maxPrice: '1,290,000', note: '', updated: '2021-12-01' },
    { code: 'UW609F350', item: '치관의 보철료/크라운/Zirconia', classification: 'zirconia', price: '500,000', minPrice: '', maxPrice: '', note: 'core별도', updated: '2021-12-04' },
    { code: 'PDZ010000', item: '제증명수수료/진단서/일반', classification: '일반진단서', price: '20,000', minPrice: '', maxPrice: '', note: '', updated: '2021-12-05' },
    { code: 'PDZ070003', item: '제증명수수료/후유장애진단서', classification: '후유장애진단서', price: '100,000', minPrice: '', maxPrice: '', note: '', updated: '2021-12-06' },
    { code: 'PDZ020001', item: '제증명수수료/상해진단서/3주미만', classification: '상해진단서 3주미만', price: '100,000', minPrice: '', maxPrice: '', note: '', updated: '2021-12-07' },
    { code: 'PDZ020002', item: '제증명수수료/상해진단서/3주이상', classification: '상해진단서 3주이상', price: '150,000', minPrice: '', maxPrice: '', note: '', updated: '2021-12-08' },
    { code: 'PDZ090007', item: '제증명수수료/확인서/진료', classification: '진료확인서', price: '3,000', minPrice: '', maxPrice: '', note: '', updated: '2021-12-09' },
    { code: 'PDZ140001', item: '제증명수수료/향후진료비추정서/천만원미만', classification: '천만원미만', price: '50,000', minPrice: '', maxPrice: '', note: '', updated: '2021-12-10' },
    { code: 'PDZ140002', item: '제증명수수료/향후진료비추정서/천만원이상', classification: '천만원이상', price: '100,000', minPrice: '', maxPrice: '', note: '', updated: '2021-12-11' },
    { code: 'PDZ110101', item: '제증명수수료/진료기록사본/1~5매', classification: '1-5매', price: '1,000', minPrice: '', maxPrice: '', note: '', updated: '2021-12-12' },
    { code: 'PDZ110003', item: '제증명수수료/진료기록(영상)/필름', classification: '필름', price: '5,000', minPrice: '', maxPrice: '', note: '', updated: '2021-12-13' },
    { code: 'PDZ110004', item: '제증명수수료/진료기록(영상)/CD', classification: 'CD', price: '10,000', minPrice: '', maxPrice: '', note: '', updated: '2021-12-14' },
    { code: 'PDZ160000', item: '제증명수수료/제증명서 사본', classification: '제증명사본', price: '1,000', minPrice: '', maxPrice: '', note: '', updated: '2021-12-15' },
  ];

  return (
    <div className="space-y-4">
      <div className="bg-blue-50 p-4 rounded-lg text-sm text-gray-700">
        <p className="font-semibold mb-2">비급여 진료비용 안내</p>
        <p className="text-xs leading-relaxed">
          본 비급여 진료비용은 2021년 11월 기준으로 작성되었으며, 환자의 구강 상태 및 사용 재료에 따라 변동될 수 있습니다.
          정확한 진료비용은 내원 시 상담을 통해 안내드립니다.
        </p>
      </div>

      <div className="overflow-x-auto -mx-6 px-6">
        <table className="w-full text-xs border-collapse">
          <thead>
            <tr className="bg-[#6b8cce] text-white">
              <th className="border border-gray-300 px-2 py-2 text-left min-w-[100px]">코드</th>
              <th className="border border-gray-300 px-2 py-2 text-left min-w-[200px]">중분류 / 소분류 / 상세분류</th>
              <th className="border border-gray-300 px-2 py-2 text-left min-w-[120px]">의료기관 사용명칭</th>
              <th className="border border-gray-300 px-2 py-2 text-right min-w-[80px]">비용</th>
              <th className="border border-gray-300 px-2 py-2 text-right min-w-[80px]">최저비용</th>
              <th className="border border-gray-300 px-2 py-2 text-right min-w-[80px]">최고비용</th>
              <th className="border border-gray-300 px-2 py-2 text-left min-w-[150px]">특이사항</th>
              <th className="border border-gray-300 px-2 py-2 text-center min-w-[90px]">최종변경일</th>
            </tr>
          </thead>
          <tbody>
            {prices.map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="border border-gray-300 px-2 py-2 text-gray-600">{item.code}</td>
                <td className="border border-gray-300 px-2 py-2">{item.item}</td>
                <td className="border border-gray-300 px-2 py-2">{item.classification}</td>
                <td className="border border-gray-300 px-2 py-2 text-right font-semibold">
                  {item.price ? `${item.price}원` : '-'}
                </td>
                <td className="border border-gray-300 px-2 py-2 text-right">
                  {item.minPrice ? `${item.minPrice}원` : '-'}
                </td>
                <td className="border border-gray-300 px-2 py-2 text-right">
                  {item.maxPrice ? `${item.maxPrice}원` : '-'}
                </td>
                <td className="border border-gray-300 px-2 py-2 text-xs text-gray-600">{item.note}</td>
                <td className="border border-gray-300 px-2 py-2 text-center text-gray-500">{item.updated}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="text-xs text-gray-500 space-y-1 pt-4">
        <p>※ 본 비용은 건강보험이 적용되지 않는 비급여 항목입니다.</p>
        <p>※ 진료 내용 및 사용 재료에 따라 실제 비용은 달라질 수 있습니다.</p>
        <p>※ 정확한 비용은 진료 상담 시 안내해 드립니다.</p>
      </div>
    </div>
  );
}
