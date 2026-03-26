'use client';

import { useState } from 'react';
import Link from 'next/link';

type ModalType = 'privacy' | 'terms' | 'rights' | 'prices' | null;

export default function FooterSection() {
  const [openModal, setOpenModal] = useState<ModalType>(null);

  return (
    <footer className="bg-white border-t border-[#e9ebf1]">
      {/* 의료법 준수 면책조항 */}
      <div className="bg-gray-100 py-4 px-4">
        <div className="max-w-[430px] mx-auto">
          <p className="text-[10px] text-gray-500 leading-relaxed text-center">
            本网站的治疗案例及后记为个人经验，治疗效果因人而异。
            所有医疗行为可能出现出血、感染、肿胀等副作用，确切的诊断和治疗计划请务必咨询专家后决定。
          </p>
        </div>
      </div>

      <div className="max-w-[430px] mx-auto px-4 py-10">
        <div className="space-y-20">
          {/* Footer Links */}
          <div className="flex justify-between text-[13px] font-semibold text-[#37373e]">
            <button onClick={() => setOpenModal('privacy')} className="hover:text-gray-900">隐私政策</button>
            <button onClick={() => setOpenModal('terms')} className="hover:text-gray-900">会员条款</button>
            <button onClick={() => setOpenModal('rights')} className="hover:text-gray-900">患者权利与义务</button>
            <button onClick={() => setOpenModal('prices')} className="hover:text-gray-900">非保险项目</button>
          </div>

          {/* Company Info */}
          <div className="space-y-8">
            <div className="space-y-3.5">
              <div className="text-xl font-bold text-gray-900">高德First牙科</div>
              <p className="text-[15px] font-semibold text-[#292a2f]">
                高德First牙科医院
              </p>
            </div>

            <div className="space-y-2 text-[15px] text-[#292a2f]">
              <p>
                代表：<span className="font-semibold">李东贤</span>
              </p>
              <p>
                营业执照号：<span className="font-semibold">210-49-03603</span>
              </p>
              <p>
                地址：<span className="font-semibold">京畿道平泽市高德面高德路250号 EduSky 4楼 401,402号</span>
              </p>
              <p>
                代表电话：<span className="font-semibold">031-611-3222</span>
              </p>
            </div>
          </div>

          {/* 지역별 진료 안내 */}
          <div className="pt-6 border-t border-gray-200">
            <p className="text-[11px] text-gray-400 mb-2">各地区诊疗指南</p>
            <div className="flex flex-wrap gap-x-3 gap-y-1">
              {[
                { name: '高德洞', slug: 'godeok' },
                { name: '高德面', slug: 'godeok-myeon' },
                { name: '西井洞', slug: 'seojeong' },
                { name: '二忠洞', slug: 'ichung' },
                { name: '长堂洞', slug: 'jangdang' },
                { name: '东朔洞', slug: 'dongsak' },
                { name: '芝制洞', slug: 'jije' },
                { name: '世桥洞', slug: 'segyo' },
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
                {openModal === 'privacy' && '隐私政策'}
                {openModal === 'terms' && '会员条款'}
                {openModal === 'rights' && '患者权利与义务'}
                {openModal === 'prices' && '非保险诊疗费用'}
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

// 개인정보처리방침
function PrivacyPolicy() {
  return (
    <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
      <section>
        <h3 className="font-bold text-base text-black mb-3">1. 个人信息收集及使用目的</h3>
        <p>高德First牙科医院（以下简称&apos;医院&apos;）为以下目的处理个人信息。所处理的个人信息不会用于以下目的以外的用途，如使用目的发生变更，将根据个人信息保护法第18条采取另行同意等必要措施。</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>诊疗预约及咨询</li>
          <li>诊疗记录管理及医疗服务提供</li>
          <li>诊疗费结算及收费</li>
          <li>医院使用及治疗指南</li>
        </ul>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3">2. 收集的个人信息项目</h3>
        <p className="mb-2">医院为诊疗及咨询等目的收集以下个人信息。</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>必填项目：姓名、出生日期、联系方式（电话号码）、地址</li>
          <li>诊疗信息：诊疗记录、检查结果、治疗详情</li>
          <li>自动收集：访问IP、Cookie、访问日志、服务使用记录</li>
        </ul>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3">3. 个人信息的保留及使用期限</h3>
        <p>医院在法令规定的个人信息保留及使用期限内或收集个人信息时获得同意的保留及使用期限内处理和保留个人信息。</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>诊疗记录：根据医疗法保留10年</li>
          <li>患者名册：5年</li>
          <li>处方单：2年</li>
          <li>诊疗费缴纳相关记录：5年</li>
        </ul>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3">4. 个人信息向第三方提供</h3>
        <p>医院原则上在收集和使用目的范围内处理个人信息，除以下情况外，未经信息主体事先同意不会超出原有目的范围处理或向第三方提供。</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>获得信息主体另行同意的情况</li>
          <li>法律有特别规定的情况</li>
          <li>信息主体或法定代理人无法表达意思，或因地址不明等无法获得事先同意，且明显认为是为信息主体或第三方的紧急生命、身体、财产利益所必需的情况</li>
        </ul>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3">5. 信息主体的权利、义务及行使方法</h3>
        <p>信息主体可随时向医院行使以下个人信息保护相关权利。</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>要求查阅个人信息</li>
          <li>有错误时要求更正</li>
          <li>要求删除</li>
          <li>要求停止处理</li>
        </ul>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3">6. 个人信息安全保障措施</h3>
        <p>医院为确保个人信息安全采取以下措施。</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>管理措施：制定并实施内部管理计划、定期员工培训等</li>
          <li>技术措施：个人信息处理系统等的访问权限管理、安装访问控制系统、唯一识别信息等的加密、安装安全程序</li>
          <li>物理措施：计算机室、资料保管室等的访问控制</li>
        </ul>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3">7. 个人信息保护负责人</h3>
        <div className="bg-gray-50 p-4 rounded-lg mt-2">
          <p><strong>姓名：</strong>李东贤</p>
          <p><strong>职务：</strong>代表院长</p>
          <p><strong>联系方式：</strong>031-611-3222</p>
        </div>
      </section>

      <section className="text-xs text-gray-500 pt-4 border-t">
        <p>本隐私政策自2024年1月1日起适用。</p>
      </section>
    </div>
  );
}

// 회원약관
function TermsOfService() {
  return (
    <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
      <section>
        <h3 className="font-bold text-base text-black mb-3">第1条（目的）</h3>
        <p>本条款旨在规定高德First牙科医院（以下简称&quot;医院&quot;）提供的医疗服务及附加服务的使用，以及医院与用户之间的权利、义务和责任事项。</p>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3">第2条（服务内容）</h3>
        <p>医院提供的服务如下。</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>牙科诊疗服务（一般诊疗、种植牙、美容牙科等）</li>
          <li>诊疗预约及咨询服务</li>
          <li>在线AI咨询服务</li>
          <li>诊疗相关信息提供服务</li>
        </ul>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3">第3条（预约及取消）</h3>
        <ol className="list-decimal pl-5 space-y-2">
          <li>诊疗预约可通过电话、来院、在线咨询进行。</li>
          <li>预约取消或变更需在预约时间24小时前进行。</li>
          <li>无正当理由未在预约时间来院或24小时内反复取消，今后预约可能受到限制。</li>
        </ol>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3">第4条（诊疗费及结算）</h3>
        <ol className="list-decimal pl-5 space-y-2">
          <li>诊疗费按健康保险诊疗报酬标准及非保险诊疗费用公告计算。</li>
          <li>诊疗费原则上在诊疗后即时缴纳，可通过现金、信用卡、转账等方式支付。</li>
          <li>如需保险理赔，患者需提交所需文件。</li>
        </ol>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3">第5条（患者义务）</h3>
        <ol className="list-decimal pl-5 space-y-2">
          <li>患者需提供准确的个人信息和病史。</li>
          <li>患者需遵守医疗团队的治疗指示。</li>
          <li>患者需尊重其他患者及医疗团队的诊疗环境。</li>
          <li>患者需注意不损坏医院设施和设备。</li>
        </ol>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3">第6条（医院义务）</h3>
        <ol className="list-decimal pl-5 space-y-2">
          <li>医院努力为患者提供优质医疗服务。</li>
          <li>医院根据相关法律安全管理患者个人信息。</li>
          <li>医院在诊疗前进行充分的说明和同意程序。</li>
          <li>医院尊重和保护患者权利。</li>
        </ol>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3">第7条（责任限制）</h3>
        <ol className="list-decimal pl-5 space-y-2">
          <li>医院对因患者提供不准确信息导致的问题不承担责任。</li>
          <li>医院对因患者过错导致的治疗延误或失败不承担责任。</li>
          <li>因不可抗力无法提供服务时，医院不承担责任。</li>
        </ol>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3">第8条（纠纷解决）</h3>
        <p>与本条款相关的纠纷，医院和患者应通过协商解决，协商不成时依管辖法院判决处理。</p>
      </section>

      <section className="text-xs text-gray-500 pt-4 border-t">
        <p>本条款自2024年1月1日起施行。</p>
      </section>
    </div>
  );
}

// 환자의 권리와 의무
function PatientRights() {
  return (
    <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
      <section>
        <h3 className="font-bold text-base text-black mb-3">患者权利</h3>

        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-black mb-2">1. 接受诊疗的权利</h4>
            <p>患者有权为保护自身健康接受适当的保健医疗服务。</p>
          </div>

          <div>
            <h4 className="font-semibold text-black mb-2">2. 知情权</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>有权知道主治医生、护士等直接参与诊疗的医疗人员的姓名</li>
              <li>有权获得关于当前健康状态、治疗方法、是否为医学研究对象、是否需要器官移植、副作用等预期结果及诊疗费用的充分说明</li>
              <li>有权要求查阅诊疗记录及获取副本</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-black mb-2">3. 自主决定权</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>有权选择、同意或拒绝治疗方法</li>
              <li>有权同意或拒绝成为医学研究对象</li>
              <li>有权征求其他医生的意见（第二意见）</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-black mb-2">4. 隐私保护权</h4>
            <p>有权不受侵犯与诊疗相关的身体、健康秘密和个人隐私。</p>
          </div>

          <div>
            <h4 className="font-semibold text-black mb-2">5. 咨询·调解申请权</h4>
            <p>有权就医疗服务过程中发生的纠纷向韩国医疗纠纷调解仲裁院申请咨询和调解。</p>
          </div>
        </div>
      </section>

      <section>
        <h3 className="font-bold text-base text-black mb-3 pt-6 border-t">患者义务</h3>

        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-black mb-2">1. 提供信息的义务</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>需向医疗团队准确提供自身健康相关信息。</li>
              <li>需如实告知过往病史、目前服用药物、过敏等信息。</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-black mb-2">2. 遵守医嘱</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>需认真遵循医疗团队的治疗指示和处方。</li>
              <li>需遵守预约时间，不得已时需提前联系。</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-black mb-2">3. 缴纳诊疗费的义务</h4>
            <p>需正当缴纳所接受医疗服务的诊疗费。</p>
          </div>

          <div>
            <h4 className="font-semibold text-black mb-2">4. 尊重他人的义务</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>不得进行妨碍其他患者诊疗和治疗的行为。</li>
              <li>需在医院内保持安静和秩序。</li>
              <li>需尊重医疗团队及医院工作人员，保持礼貌。</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-black mb-2">5. 保护设施的义务</h4>
            <p>需爱护医院设施和医疗器械，注意不因故意或过失造成损坏。</p>
          </div>
        </div>
      </section>

      <section className="bg-blue-50 p-4 rounded-lg mt-6">
        <h4 className="font-semibold text-black mb-2">咨询及商谈</h4>
        <p className="text-sm">如有关于患者权利保护及医疗纠纷的咨询</p>
        <div className="mt-2 space-y-1">
          <p><strong>医院代表电话：</strong>031-611-3222</p>
          <p><strong>韩国医疗纠纷调解仲裁院：</strong>1670-2545</p>
        </div>
      </section>
    </div>
  );
}

// 비급여 진료비용
function NonInsurancePrices() {
  const prices = [
    { code: 'UW3021017', item: '牙科处置：手术费/牙结石清除/1/3颌', classification: '牙结石清除 1/3', price: '10,000', minPrice: '', maxPrice: '', note: '', updated: '2024-01-01' },
    { code: 'UW3021027', item: '牙科处置：手术费/牙结石清除/上颌', classification: '牙结石清除 上颌', price: '25,000', minPrice: '', maxPrice: '', note: '', updated: '2024-01-01' },
    { code: 'UW3021037', item: '牙科处置：手术费/牙结石清除/下颌', classification: '牙结石清除 下颌', price: '25,000', minPrice: '', maxPrice: '', note: '', updated: '2024-01-01' },
    { code: 'UW3021047', item: '牙科处置：手术费/牙结石清除/全颌', classification: '牙结石清除 全颌', price: '70,000', minPrice: '', maxPrice: '', note: '', updated: '2024-01-01' },
    { code: 'UZ0040014', item: '牙科处置：手术费/嵌体(Inlay)及高嵌体(Onlay)', classification: 'ceramic inlay', price: '300,000', minPrice: '', maxPrice: '', note: '', updated: '2024-01-01' },
    { code: 'U02390000', item: '牙科处置：手术费/光固化复合树脂充填/龋齿-1面', classification: '树脂 龋齿1面', price: '100,000', minPrice: '', maxPrice: '', note: '', updated: '2024-01-01' },
    { code: 'U02400000', item: '牙科处置：手术费/光固化复合树脂充填/龋齿-2面', classification: '树脂 2面', price: '100,000', minPrice: '', maxPrice: '', note: '', updated: '2024-01-01' },
    { code: 'U02410000', item: '牙科处置：手术费/光固化复合树脂充填/龋齿-3面以上', classification: '树脂 3面以上', price: '150,000', minPrice: '', maxPrice: '', note: '', updated: '2024-01-01' },
    { code: 'UB0010051', item: '牙冠修复费/牙科种植体(每颗)/Zirconia', classification: '种植牙 zir', price: '', minPrice: '890,000', maxPrice: '1,290,000', note: '', updated: '2024-01-01' },
    { code: 'UW609F350', item: '牙冠修复费/牙冠/Zirconia', classification: 'zirconia', price: '500,000', minPrice: '', maxPrice: '', note: 'core另算', updated: '2024-01-01' },
    { code: 'PDZ010000', item: '各类证明手续费/诊断书/一般', classification: '一般诊断书', price: '20,000', minPrice: '', maxPrice: '', note: '', updated: '2024-01-01' },
    { code: 'PDZ090007', item: '各类证明手续费/确认书/诊疗', classification: '诊疗确认书', price: '3,000', minPrice: '', maxPrice: '', note: '', updated: '2024-01-01' },
  ];

  return (
    <div className="space-y-4">
      <div className="bg-blue-50 p-4 rounded-lg text-sm text-gray-700">
        <p className="font-semibold mb-2">非保险诊疗费用说明</p>
        <p className="text-xs leading-relaxed">
          本非保险诊疗费用以2024年标准编制，根据患者口腔状态及使用材料可能有所变动。
          确切的诊疗费用请来院咨询时告知。
        </p>
      </div>

      <div className="overflow-x-auto -mx-6 px-6">
        <table className="w-full text-xs border-collapse">
          <thead>
            <tr className="bg-[#008095] text-white">
              <th className="border border-gray-300 px-2 py-2 text-left min-w-[100px]">代码</th>
              <th className="border border-gray-300 px-2 py-2 text-left min-w-[200px]">中分类 / 小分类</th>
              <th className="border border-gray-300 px-2 py-2 text-left min-w-[120px]">使用名称</th>
              <th className="border border-gray-300 px-2 py-2 text-right min-w-[80px]">费用</th>
              <th className="border border-gray-300 px-2 py-2 text-right min-w-[80px]">最低费用</th>
              <th className="border border-gray-300 px-2 py-2 text-right min-w-[80px]">最高费用</th>
              <th className="border border-gray-300 px-2 py-2 text-left min-w-[80px]">备注</th>
            </tr>
          </thead>
          <tbody>
            {prices.map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="border border-gray-300 px-2 py-2 text-gray-600">{item.code}</td>
                <td className="border border-gray-300 px-2 py-2">{item.item}</td>
                <td className="border border-gray-300 px-2 py-2">{item.classification}</td>
                <td className="border border-gray-300 px-2 py-2 text-right font-semibold">
                  {item.price ? `${item.price}韩元` : '-'}
                </td>
                <td className="border border-gray-300 px-2 py-2 text-right">
                  {item.minPrice ? `${item.minPrice}韩元` : '-'}
                </td>
                <td className="border border-gray-300 px-2 py-2 text-right">
                  {item.maxPrice ? `${item.maxPrice}韩元` : '-'}
                </td>
                <td className="border border-gray-300 px-2 py-2 text-xs text-gray-600">{item.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="text-xs text-gray-500 space-y-1 pt-4">
        <p>※ 本费用为不适用健康保险的非保险项目。</p>
        <p>※ 根据诊疗内容及使用材料，实际费用可能有所不同。</p>
        <p>※ 确切费用将在诊疗咨询时告知。</p>
      </div>
    </div>
  );
}
