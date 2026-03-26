'use client';

export default function TmjSymptomsSection() {
  const symptoms = [
    {
      icon: '🔊',
      title: 'Clicking sounds in the jaw',
      desc: 'Repeated "click" or "pop" sounds when opening or closing your mouth.',
    },
    {
      icon: '😣',
      title: 'Jaw pain',
      desc: 'Pain around the jaw when chewing, yawning, or speaking.',
    },
    {
      icon: '😶',
      title: 'Difficulty opening mouth',
      desc: 'Difficulty opening your mouth wide, or the jaw shifts to one side when opening.',
    },
    {
      icon: '🤕',
      title: 'Headaches · Ear pain',
      desc: 'Recurring unexplained headaches or pain in front of the ears.',
    },
    {
      icon: '💤',
      title: 'Teeth Grinding · Teeth Clenching',
      desc: 'Grinding teeth during sleep or unconsciously clenching teeth during the day.',
    },
    {
      icon: '🦴',
      title: 'Neck · Shoulder stiffness',
      desc: 'TMJ problems lead to tension and pain in the neck and shoulder muscles.',
    },
  ];

  return (
    <div className="bg-[#21314E] w-full py-[80px] px-5">
      <div className="max-w-[430px] mx-auto flex flex-col gap-12">

        {/* Header */}
        <div className="flex flex-col gap-4 text-center">
          <p
            className="text-[#4DC8D8] font-bold text-[13px] tracking-[0.2em] uppercase"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            Self Check
          </p>
          <h2
            className="font-bold text-[30px] leading-[1.3] tracking-[-0.04em] text-white"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            If you have these symptoms,<br />suspect a TMJ disorder
          </h2>
          <p
            className="font-medium text-white/60 text-[16px] leading-[1.6] tracking-[-0.02em]"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            If 2 or more of the symptoms below apply,<br />we recommend getting a specialist examination.
          </p>
        </div>

        {/* Symptom Cards */}
        <div className="flex flex-col gap-4">
          {symptoms.map((symptom, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 rounded-[20px] p-5 flex items-start gap-4">
              <div className="text-2xl shrink-0 mt-[2px]">{symptom.icon}</div>
              <div className="flex flex-col gap-1">
                <h3
                  className="font-bold text-[17px] text-white tracking-[-0.02em] leading-[1.3]"
                  style={{ fontFamily: 'Pretendard, sans-serif' }}
                >
                  {symptom.title}
                </h3>
                <p
                  className="text-white/60 text-[14px] leading-[1.6] tracking-[-0.01em]"
                  style={{ fontFamily: 'Pretendard, sans-serif' }}
                >
                  {symptom.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="bg-[#008095]/10 border border-[#008095]/30 rounded-2xl p-6 flex flex-col gap-2 text-center">
          <p
            className="text-[#4DC8D8] font-bold text-[16px] leading-[1.5]"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            TMJ disorders rarely heal on their own.<br />Early treatment is the most effective.
          </p>
          <p className="text-white/40 text-[13px]">
            The longer it is left untreated, the more the joint disc deteriorates, making treatment more complex.
          </p>
        </div>

      </div>
    </div>
  );
}
