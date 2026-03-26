'use client';

import { useState } from 'react';
import Link from 'next/link';

type ModalType = 'privacy' | 'terms' | 'rights' | 'prices' | null;

export default function FooterSection() {
  const [openModal, setOpenModal] = useState<ModalType>(null);

  return (
    <footer className="bg-white border-t border-[#e9ebf1]">
      {/* 医療法遵守免責条項 */}
      <div className="bg-gray-100 py-4 px-4">
        <div className="max-w-[430px] mx-auto">
          <p className="text-[10px] text-gray-500 leading-relaxed text-center">
            本ウェブサイトの治療事例およびレビューは個人の経験によるもので、治療効果は個人により異なる場合があります。
            全ての医療行為には出血、感染、腫れなどの副作用が発生する可能性があり、正確な診断と治療計画は必ず専門医と相談後に決定してください。
          </p>
        </div>
      </div>

      <div className="max-w-[430px] mx-auto px-4 py-10">
        <div className="space-y-20">
          {/* Footer Links */}
          <div className="flex justify-between text-[13px] font-semibold text-[#37373e]">
            <button onClick={() => setOpenModal('privacy')} className="hover:text-gray-900">個人情報保護方針</button>
            <button onClick={() => setOpenModal('terms')} className="hover:text-gray-900">会員規約</button>
            <button onClick={() => setOpenModal('rights')} className="hover:text-gray-900">患者の権利と義務</button>
            <button onClick={() => setOpenModal('prices')} className="hover:text-gray-900">非保険項目</button>
          </div>

          {/* Company Info */}
          <div className="space-y-8">
            <div className="space-y-3.5">
              <div className="text-xl font-bold text-gray-900">コドクファースト歯科</div>
              <p className="text-[15px] font-semibold text-[#292a2f]">
                コドクファースト歯科医院
              </p>
            </div>

            <div className="space-y-2 text-[15px] text-[#292a2f]">
              <p>
                代表 : <span className="font-semibold">イ・ドンヒョン</span>
              </p>
              <p>
                事業者登録番号 : <span className="font-semibold">210-49-03603</span>
              </p>
              <p>
                住所 : <span className="font-semibold">京畿道 平沢市 コドク面 コドクロ 250, エデュスカイ 4階 401,402号</span>
              </p>
              <p>
                代表番号 : <span className="font-semibold">031-611-3222</span>
              </p>
            </div>
          </div>

          {/* 地域別診療案内 */}
          <div className="pt-6 border-t border-gray-200">
            <p className="text-[11px] text-gray-400 mb-2">地域別診療案内</p>
            <div className="flex flex-wrap gap-x-3 gap-y-1">
              {[
                { name: 'コドク洞', slug: 'godeok' },
                { name: 'コドク面', slug: 'godeok-myeon' },
                { name: 'ソジョン洞', slug: 'seojeong' },
                { name: 'イチュン洞', slug: 'ichung' },
                { name: 'チャンダン洞', slug: 'jangdang' },
                { name: 'ドンサク洞', slug: 'dongsak' },
                { name: 'チジェ洞', slug: 'jije' },
                { name: 'セギョ洞', slug: 'segyo' },
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
                {openModal === 'privacy' && '個人情報保護方針'}
                {openModal === 'terms' && '会員規約'}
                {openModal === 'rights' && '患者の権利と義務'}
                {openModal === 'prices' && '非保険診療費用'}
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

// 個人情報保護方針
function PrivacyPolicy() {
  return (
    <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
      <section>
        <h3 className="font-bold text-base text-black mb-3">1. 個人情報の収集および利用目的</h3>
        <p>コドクファースト歯科医院（以下「病院」）は次の目的のために個人情報を処理します。処理している個人情報は次の目的以外の用途には利用されず、利用目的が変更される場合は個人情報保護法第18条に従い別途の同意を得るなど必要な措置を行います。</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>診療予約および相談</li>
          <li>診療記録管理および医療サービス提供</li>
          <li>診療費請求および収納</li>
          <li>病院利用および治療に関する案内</li>
        </ul>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3">2. 収集する個人情報の項目</h3>
        <p className="mb-2">病院は診療および相談などのために以下の個人情報を収集しています。</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>必須項目：氏名、生年月日、連絡先（電話番号）、住所</li>
          <li>診療情報：診療記録、検査結果、治療内容</li>
          <li>自動収集：接続IP、クッキー、接続ログ、サービス利用記録</li>
        </ul>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3">3. 個人情報の保有および利用期間</h3>
        <p>病院は法令に従った個人情報の保有・利用期間または情報主体から個人情報を収集する際に同意を得た個人情報の保有・利用期間内で個人情報を処理・保有します。</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>診療記録：医療法に従い10年</li>
          <li>患者名簿：5年</li>
          <li>処方箋：2年</li>
          <li>診療費納入関連記録：5年</li>
        </ul>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3">4. 個人情報の第三者提供</h3>
        <p>病院は原則として情報主体の個人情報を収集・利用目的で明示した範囲内で処理し、次の場合を除いては情報主体の事前同意なしには本来の目的範囲を超えて処理したり第三者に提供しません。</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>情報主体から別途の同意を得た場合</li>
          <li>法律に特別な規定がある場合</li>
          <li>情報主体または法定代理人が意思表示できない状態であるか住所不明等で事前同意を得られない場合で、明らかに情報主体または第三者の急迫した生命、身体、財産の利益のために必要と認められる場合</li>
        </ul>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3">5. 情報主体の権利・義務および行使方法</h3>
        <p>情報主体は病院に対していつでも次の各号の個人情報保護関連の権利を行使できます。</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>個人情報の閲覧要求</li>
          <li>誤りなどがある場合の訂正要求</li>
          <li>削除要求</li>
          <li>処理停止要求</li>
        </ul>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3">6. 個人情報の安全性確保措置</h3>
        <p>病院は個人情報の安全性確保のために次のような措置を取っています。</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>管理的措置：内部管理計画の樹立・施行、定期的な職員教育など</li>
          <li>技術的措置：個人情報処理システムなどのアクセス権限管理、アクセス制御システム設置、固有識別情報などの暗号化、セキュリティプログラム設置</li>
          <li>物理的措置：サーバー室、資料保管室などのアクセス制御</li>
        </ul>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3">7. 個人情報保護責任者</h3>
        <div className="bg-gray-50 p-4 rounded-lg mt-2">
          <p><strong>氏名：</strong> イ・ドンヒョン</p>
          <p><strong>役職：</strong> 代表院長</p>
          <p><strong>連絡先：</strong> 031-611-3222</p>
        </div>
      </section>

      <section className="text-xs text-gray-500 pt-4 border-t">
        <p>本個人情報保護方針は2024年1月1日から適用されます。</p>
      </section>
    </div>
  );
}

// 会員規約
function TermsOfService() {
  return (
    <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
      <section>
        <h3 className="font-bold text-base text-black mb-3">第1条（目的）</h3>
        <p>この規約はコドクファースト歯科医院（以下「病院」）が提供する医療サービスおよび付加サービスの利用に関して病院と利用者の権利、義務および責任事項を規定することを目的とします。</p>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3">第2条（サービスの内容）</h3>
        <p>病院が提供するサービスは次の各号の通りです。</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>歯科診療サービス（一般診療、インプラント、審美治療など）</li>
          <li>診療予約およびカウンセリングサービス</li>
          <li>オンラインAIカウンセリングサービス</li>
          <li>診療関連情報提供サービス</li>
        </ul>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3">第3条（予約およびキャンセル）</h3>
        <ol className="list-decimal pl-5 space-y-2">
          <li>診療予約は電話、来院、オンラインカウンセリングを通じて可能です。</li>
          <li>予約キャンセルまたは変更は予約時間の24時間前まで可能です。</li>
          <li>正当な理由なく予約時間に来院しなかったり、24時間以内のキャンセルが繰り返される場合、今後の予約が制限される場合があります。</li>
        </ol>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3">第4条（診療費および決済）</h3>
        <ol className="list-decimal pl-5 space-y-2">
          <li>診療費は健康保険療養給付基準および非保険診療費用告示に従い算定されます。</li>
          <li>診療費は診療後即時収納を原則とし、現金、クレジットカード、口座振替などの方法で納付できます。</li>
          <li>保険請求が必要な場合、患者は必要な書類を提出する必要があります。</li>
        </ol>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3">第5条（患者の義務）</h3>
        <ol className="list-decimal pl-5 space-y-2">
          <li>患者は正確な個人情報および病歴を提供する必要があります。</li>
          <li>患者は医療チームの治療指示を遵守する必要があります。</li>
          <li>患者は他の患者および医療チームの診療環境を尊重する必要があります。</li>
          <li>患者は病院施設および器物を破損しないよう注意する必要があります。</li>
        </ol>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3">第6条（病院の義務）</h3>
        <ol className="list-decimal pl-5 space-y-2">
          <li>病院は患者に良質の医療サービスを提供するよう努めます。</li>
          <li>病院は患者の個人情報を関連法令に従い安全に管理します。</li>
          <li>病院は診療前に十分な説明と同意手続きを経ます。</li>
          <li>病院は患者の権利を尊重し保護します。</li>
        </ol>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3">第7条（責任の制限）</h3>
        <ol className="list-decimal pl-5 space-y-2">
          <li>病院は患者が提供した不正確な情報による問題に対して責任を負いません。</li>
          <li>病院は患者の帰責事由による治療遅延または失敗に対して責任を負いません。</li>
          <li>不可抗力的な事由でサービス提供が不可能な場合、病院は責任を負いません。</li>
        </ol>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3">第8条（紛争解決）</h3>
        <p>本規約に関連して紛争が発生した場合、病院と患者は相互協議を通じて解決するよう努め、協議が成立しない場合は管轄裁判所の判決に従います。</p>
      </section>

      <section className="text-xs text-gray-500 pt-4 border-t">
        <p>本規約は2024年1月1日から施行されます。</p>
      </section>
    </div>
  );
}

// 患者の権利と義務
function PatientRights() {
  return (
    <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
      <section>
        <h3 className="font-bold text-base text-black mb-3">患者の権利</h3>

        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-black mb-2">1. 診療を受ける権利</h4>
            <p>患者は自身の健康保護のために適切な保健医療サービスを受ける権利があります。</p>
          </div>

          <div>
            <h4 className="font-semibold text-black mb-2">2. 知る権利</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>担当医師、看護師など自身の診療に直接従事する医療人の氏名を知る権利</li>
              <li>現在の健康状態、治療方法、医学的研究対象の有無、臓器移植の有無、副作用など予想結果および診療費用に関して十分な説明を受ける権利</li>
              <li>診療記録の閲覧および写しの交付を要請する権利</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-black mb-2">3. 自己決定権</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>治療方法を選択し同意または拒否する権利</li>
              <li>医学的研究対象になることに対する同意または拒否の権利</li>
              <li>他の医師の意見（セカンドオピニオン）を求める権利</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-black mb-2">4. 秘密を保護される権利</h4>
            <p>診療に関連した身体上・健康上の秘密と私生活の秘密を侵害されない権利があります。</p>
          </div>

          <div>
            <h4 className="font-semibold text-black mb-2">5. 相談・調停申請権</h4>
            <p>医療サービス過程で発生した紛争について韓国医療紛争調停仲裁院に相談および調停を申請する権利があります。</p>
          </div>
        </div>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3 pt-6 border-t">患者の義務</h3>

        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-black mb-2">1. 情報提供の義務</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>自身の健康関連情報を医療チームに正確に提供する必要があります。</li>
              <li>過去の病歴、現在服用中の薬物、アレルギーなどを誠実に伝える必要があります。</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-black mb-2">2. 医療チームの指示遵守</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>医療チームの治療指示と処方を誠実に守る必要があります。</li>
              <li>予約時間を遵守し、やむを得ない場合は事前に連絡する必要があります。</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-black mb-2">3. 診療費納付義務</h4>
            <p>提供を受けた医療サービスに対する診療費を正当に納付する必要があります。</p>
          </div>

          <div>
            <h4 className="font-semibold text-black mb-2">4. 他者への配慮の義務</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>他の患者の診療と治療の妨げになる行為をしてはいけません。</li>
              <li>病院内で静粛を保ち、秩序を守る必要があります。</li>
              <li>医療チームおよび病院職員を尊重し礼儀を守る必要があります。</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-black mb-2">5. 施設保護義務</h4>
            <p>病院施設および医療機器を大切に扱い、故意または過失で破損しないよう注意する必要があります。</p>
          </div>
        </div>
      </section>

      <section className="bg-blue-50 p-4 rounded-lg mt-6">
        <h4 className="font-semibold text-black mb-2">お問い合わせ</h4>
        <p className="text-sm">患者の権利保護および医療紛争に関するお問い合わせ</p>
        <div className="mt-2 space-y-1">
          <p><strong>病院代表番号：</strong> 031-611-3222</p>
          <p><strong>韓国医療紛争調停仲裁院：</strong> 1670-2545</p>
        </div>
      </section>
    </div>
  );
}

// 非保険診療費用
function NonInsurancePrices() {
  const prices = [
    { code: 'UW3021017', item: '歯科処置：手術料/歯石除去/1/3顎当たり', classification: '歯石除去 1/3', price: '10,000', minPrice: '', maxPrice: '', note: '', updated: '2024-01-01' },
    { code: 'UW3021027', item: '歯科処置：手術料/歯石除去/上顎', classification: '歯石除去 上顎', price: '25,000', minPrice: '', maxPrice: '', note: '', updated: '2024-01-01' },
    { code: 'UW3021037', item: '歯科処置：手術料/歯石除去/下顎', classification: '歯石除去 下顎', price: '25,000', minPrice: '', maxPrice: '', note: '', updated: '2024-01-01' },
    { code: 'UW3021047', item: '歯科処置：手術料/歯石除去/全顎', classification: '歯石除去 全顎', price: '70,000', minPrice: '', maxPrice: '', note: '', updated: '2024-01-01' },
    { code: 'UZ0040014', item: '歯科処置：手術料/インレー(Inlay)およびオンレー(Onlay)', classification: 'ceramic inlay', price: '300,000', minPrice: '', maxPrice: '', note: '', updated: '2024-01-01' },
    { code: 'U02390000', item: '歯科処置：手術料/光重合型コンポジットレジン充填/う蝕-1面', classification: 'レジン う蝕1面', price: '100,000', minPrice: '', maxPrice: '', note: '', updated: '2024-01-01' },
    { code: 'U02400000', item: '歯科処置：手術料/光重合型コンポジットレジン充填/う蝕-2面', classification: 'レジン 2面', price: '100,000', minPrice: '', maxPrice: '', note: '', updated: '2024-01-01' },
    { code: 'U02410000', item: '歯科処置：手術料/光重合型コンポジットレジン充填/う蝕-3面以上', classification: 'レジン 3面以上', price: '150,000', minPrice: '', maxPrice: '', note: '', updated: '2024-01-01' },
    { code: 'UB0010051', item: '歯冠の補綴料/歯科インプラント(1歯当たり)/Zirconia', classification: 'インプラント zir', price: '', minPrice: '890,000', maxPrice: '1,290,000', note: '', updated: '2024-01-01' },
    { code: 'UW609F350', item: '歯冠の補綴料/クラウン/Zirconia', classification: 'zirconia', price: '500,000', minPrice: '', maxPrice: '', note: 'core別途', updated: '2024-01-01' },
    { code: 'PDZ010000', item: '各種証明書手数料/診断書/一般', classification: '一般診断書', price: '20,000', minPrice: '', maxPrice: '', note: '', updated: '2024-01-01' },
    { code: 'PDZ090007', item: '各種証明書手数料/確認書/診療', classification: '診療確認書', price: '3,000', minPrice: '', maxPrice: '', note: '', updated: '2024-01-01' },
  ];

  return (
    <div className="space-y-4">
      <div className="bg-blue-50 p-4 rounded-lg text-sm text-gray-700">
        <p className="font-semibold mb-2">非保険診療費用のご案内</p>
        <p className="text-xs leading-relaxed">
          本非保険診療費用は2024年基準で作成されており、患者の口腔状態および使用材料により変動する場合があります。
          正確な診療費用は来院時のカウンセリングでご案内します。
        </p>
      </div>

      <div className="overflow-x-auto -mx-6 px-6">
        <table className="w-full text-xs border-collapse">
          <thead>
            <tr className="bg-[#008095] text-white">
              <th className="border border-gray-300 px-2 py-2 text-left min-w-[100px]">コード</th>
              <th className="border border-gray-300 px-2 py-2 text-left min-w-[200px]">中分類 / 小分類</th>
              <th className="border border-gray-300 px-2 py-2 text-left min-w-[120px]">使用名称</th>
              <th className="border border-gray-300 px-2 py-2 text-right min-w-[80px]">費用</th>
              <th className="border border-gray-300 px-2 py-2 text-right min-w-[80px]">最低費用</th>
              <th className="border border-gray-300 px-2 py-2 text-right min-w-[80px]">最高費用</th>
              <th className="border border-gray-300 px-2 py-2 text-left min-w-[80px]">特記事項</th>
            </tr>
          </thead>
          <tbody>
            {prices.map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="border border-gray-300 px-2 py-2 text-gray-600">{item.code}</td>
                <td className="border border-gray-300 px-2 py-2">{item.item}</td>
                <td className="border border-gray-300 px-2 py-2">{item.classification}</td>
                <td className="border border-gray-300 px-2 py-2 text-right font-semibold">
                  {item.price ? `${item.price}ウォン` : '-'}
                </td>
                <td className="border border-gray-300 px-2 py-2 text-right">
                  {item.minPrice ? `${item.minPrice}ウォン` : '-'}
                </td>
                <td className="border border-gray-300 px-2 py-2 text-right">
                  {item.maxPrice ? `${item.maxPrice}ウォン` : '-'}
                </td>
                <td className="border border-gray-300 px-2 py-2 text-xs text-gray-600">{item.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="text-xs text-gray-500 space-y-1 pt-4">
        <p>※ 本費用は健康保険が適用されない非保険項目です。</p>
        <p>※ 診療内容および使用材料により実際の費用は異なる場合があります。</p>
        <p>※ 正確な費用は診療カウンセリング時にご案内します。</p>
      </div>
    </div>
  );
}
