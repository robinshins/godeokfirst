'use client';

export default function TmjSymptomsSection() {
  const symptoms = [
    { icon: '🔊', title: '顎から音がする', desc: '口を開けたり閉じたりする時に「カチッ」「ポキッ」という音が繰り返しします。' },
    { icon: '😣', title: '顎が痛い', desc: '噛む時、あくびの時、話す時に顎周辺に痛みを感じます。' },
    { icon: '😶', title: '口が開きにくい', desc: '口を大きく開けにくかったり、開ける時に顎が片方に歪みます。' },
    { icon: '🤕', title: '頭痛・耳の痛み', desc: '原因不明の頭痛や耳の前方の痛みが繰り返します。' },
    { icon: '💤', title: '歯ぎしり・食いしばり', desc: '睡眠中に歯ぎしりをしたり、昼間無意識に歯を食いしばっています。' },
    { icon: '🦴', title: '首・肩のこり', desc: '顎関節の問題が首と肩の筋肉の緊張と痛みにつながります。' },
  ];

  return (
    <div className="bg-[#21314E] w-full py-[80px] px-5">
      <div className="max-w-[430px] mx-auto flex flex-col gap-12">
        <div className="flex flex-col gap-4 text-center">
          <p className="text-[#4DC8D8] font-bold text-[13px] tracking-[0.2em] uppercase" style={{ fontFamily: 'Pretendard, sans-serif' }}>Self Check</p>
          <h2 className="font-bold text-[30px] leading-[1.3] tracking-[-0.04em] text-white" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            このような症状があれば<br />顎関節障害を疑ってください
          </h2>
          <p className="font-medium text-white/60 text-[16px] leading-[1.6] tracking-[-0.02em]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            下記の症状のうち2つ以上該当すれば<br />専門医の診断を受けることをお勧めします。
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {symptoms.map((symptom, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 rounded-[20px] p-5 flex items-start gap-4">
              <div className="text-2xl shrink-0 mt-[2px]">{symptom.icon}</div>
              <div className="flex flex-col gap-1">
                <h3 className="font-bold text-[17px] text-white tracking-[-0.02em] leading-[1.3]" style={{ fontFamily: 'Pretendard, sans-serif' }}>{symptom.title}</h3>
                <p className="text-white/60 text-[14px] leading-[1.6] tracking-[-0.01em]" style={{ fontFamily: 'Pretendard, sans-serif' }}>{symptom.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#008095]/10 border border-[#008095]/30 rounded-2xl p-6 flex flex-col gap-2 text-center">
          <p className="text-[#4DC8D8] font-bold text-[16px] leading-[1.5]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            顎関節障害は自然治癒が困難です。<br />初期治療が最も効果的です。
          </p>
          <p className="text-white/40 text-[13px]">
            放置するほど関節ディスクの損傷が進行し治療が複雑になります。
          </p>
        </div>
      </div>
    </div>
  );
}
