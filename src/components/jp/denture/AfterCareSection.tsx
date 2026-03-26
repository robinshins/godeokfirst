import Image from 'next/image';

export default function AfterCareSection() {
  const careItems = [
    {
      icon: '🔍',
      title: '定期検診システム',
      desc: 'インプラント埋入後3ヶ月、6ヶ月、1年周期で精密検診を行い、異常を早期に発見します。',
    },
    {
      icon: '🦷',
      title: 'インプラント周囲洗浄',
      desc: '専門設備でインプラント周囲の細菌膜を除去し、周囲炎予防のためのオーダーメイドケアを行います。',
    },
    {
      icon: '📋',
      title: '個人オーダーメイド管理計画',
      desc: '口腔状態に応じた個人別管理計画を策定し、正しいブラッシングおよびデンタルフロス使用法をご案内します。',
    },
  ];

  const steps = [
    { step: '1', title: '定期検診', desc: '3・6・12ヶ月周期' },
    { step: '2', title: '専門洗浄', desc: '周囲炎予防' },
    { step: '3', title: '咬合チェック', desc: '噛む力のバランス確認' },
    { step: '4', title: '生涯管理', desc: '継続的アフターケア' },
  ];

  return (
    <div className="bg-[#0b1727] w-full flex justify-center">
      <div className="box-border flex flex-col gap-[50px] items-center px-4 py-[60px] relative w-full max-w-[430px]">
        {/* Header */}
        <div className="flex flex-col gap-4 items-center justify-center relative shrink-0 w-full">
          <div className="h-8 overflow-clip relative shrink-0 w-[180px]">
            <Image
              src="/고덕퍼스트치과-로고-(화이트).png"
              alt="コドクファースト歯科"
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
              埋入よりも重要なのは<br />
              アフターケアです
            </h2>
            <p className="font-medium leading-[1.6] not-italic text-[#a0c4d4] text-[15px] text-center tracking-[-0.32px] w-full">
              &quot;一生お使いいただけるよう<br />
              最後まで責任を持ちます&quot;
            </p>
          </div>
        </div>

        {/* アフターケア項目 */}
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

        {/* 手術室写真 */}
        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
          <Image
            src="/images/goduk_images/수술실.jpg"
            alt="コドクファースト歯科 手術室"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <p className="text-white font-bold text-[15px]">清潔で安全な手術環境</p>
            <p className="text-white/80 text-[13px]">大学病院級感染管理システム</p>
          </div>
        </div>

        {/* 4段階プロセス */}
        <div className="w-full">
          <p className="text-[#4DC8D8] text-[13px] font-bold mb-5 text-center tracking-[2px]">
            コドクファースト歯科 アフターケアプロセス
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

        {/* 強調メッセージ */}
        <div className="bg-gradient-to-r from-[#008095] to-[#006B7A] rounded-2xl p-5 w-full text-center shadow-lg">
          <p className="text-white font-bold text-[16px] leading-[1.5]">
            インプラント手術後も<br />
            代表院長が直接最後まで責任を持ちます
          </p>
        </div>
      </div>
    </div>
  );
}
