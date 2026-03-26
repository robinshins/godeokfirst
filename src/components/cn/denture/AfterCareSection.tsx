import Image from 'next/image';

export default function AfterCareSection() {
  const careItems = [
    {
      icon: '🔍',
      title: '定期检查 时统',
      desc: '种植牙植入后以3个月、6个月、1年周期进行精密检查，早期发现异常。',
    },
    {
      icon: '🦷',
      title: '种植牙周围清洁',
      desc: '用专业设备去除种植牙周围细菌膜，进行预防种植体周围炎的定制管理。',
    },
    {
      icon: '📋',
      title: '个人定制管理计划',
      desc: '根据口腔状态制定个人管理计划，指导正确的刷牙和牙线使用方法。',
    },
  ];

  const steps = [
    { step: '1', title: '定期检查', desc: '3·6·12个月 周期' },
    { step: '2', title: '专业清洁', desc: '预防周围炎' },
    { step: '3', title: '咬合检查', desc: '咀嚼力平衡检查' },
    { step: '4', title: '终身管理', desc: '持续的术后责任' },
  ];

  return (
    <div className="bg-[#0b1727] w-full flex justify-center">
      <div className="box-border flex flex-col gap-[50px] items-center px-4 py-[60px] relative w-full max-w-[430px]">
        {/* Header */}
        <div className="flex flex-col gap-4 items-center justify-center relative shrink-0 w-full">
          <div className="h-8 overflow-clip relative shrink-0 w-[180px]">
            <Image
              src="/고덕퍼스트牙科-로고-(화이트).png"
              alt="高德First牙科"
              width={375}
              height={84}
              className="h-20 w-auto object-contain -mt-[18px]"
            />
          </div>
          <div className="flex flex-col gap-4 items-center justify-center relative shrink-0 w-full">
            <p className="text-[14px] font-bold text-[#4DC8D8] tracking-[3px] uppercase">
              AFTER CARE
            </p>
            <h2 className="font-bold leading-[1.35] not-italic text-[32px] text-white text-center tracking-[-0.64px] w-full">
              比手术更重要的<br />
              术后管理
            </h2>
            <p className="font-medium leading-[1.6] not-italic text-[#a0c4d4] text-[15px] text-center tracking-[-0.32px] w-full">
              &quot;为了让您终身使用<br />
              我们将全程负责。&quot;
            </p>
          </div>
        </div>

        {/* 术后管理 항목 */}
        <div className="flex flex-col gap-4 w-full">
          {careItems.map((item, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#008095]/20 flex items-center justify-center shrink-0 text-2xl">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <p className="font-bold text-white text-[16px] mb-1">{item.title}</p>
                  <p className="text-[#a0c4d4] text-[13px] leading-[1.6]">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 手术室 照片 */}
        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
          <Image
            src="/images/goduk_images/手术室.jpg"
            alt="高德First牙科 手术室"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <p className="text-white font-bold text-[15px]">清洁安全的手术环境</p>
            <p className="text-white/80 text-[13px]">大学医院级感染管理系统</p>
          </div>
        </div>

        {/* 4阶段 流程 */}
        <div className="w-full">
          <p className="text-[#4DC8D8] text-[13px] font-bold mb-5 text-center tracking-[2px]">
            高德First牙科 术后管理 流程
          </p>
          <div className="grid grid-cols-4 gap-2">
            {steps.map((s) => (
              <div key={s.step} className="flex flex-col items-center gap-2">
                <div className="bg-[#008095] rounded-full w-11 h-11 flex items-center justify-center">
                  <span className="text-white font-black text-[16px]">{s.step}</span>
                </div>
                <p className="text-white text-[12px] font-bold text-center">{s.title}</p>
                <p className="text-[#a0c4d4] text-[11px] text-center leading-[1.3]">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 强调 메时지 */}
        <div className="bg-gradient-to-r from-[#008095] to-[#006B7A] rounded-2xl p-5 w-full text-center shadow-lg">
          <p className="text-white font-bold text-[16px] leading-[1.5]">
            种植牙 手术 后也<br />
            代表院长亲自全程负责
          </p>
        </div>
      </div>
    </div>
  );
}
