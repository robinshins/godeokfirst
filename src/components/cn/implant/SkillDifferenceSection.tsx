'use client';

export default function SkillDifferenceSection() {
  const generalClinic = [
    {
      title: '没有自营技工所',
      description: '委托外部技工所增加费用和时间，\n无法进行精细作业'
    },
    {
      title: '1阶段临时牙',
      description: '未经咬合调整直接制作最终修复体'
    },
    {
      title: '存在再次手术可能性',
      description: '缺乏专业设备和适当的后期护理，\n存在再次手术的可能性'
    }
  ];

  const medisClinic = [
    {
      title: '完美技术',
      description: '牙医们来此学习，\n院长亲自培训其他牙医'
    },
    {
      title: '3阶段临时牙系统',
      description: '分阶段精密调整，打造完美咬合'
    },
    {
      title: '零再次手术记录',
      description: '凭借卓越技术实力，一次手术完美完成'
    }
  ];

  return (
    <div className="bg-[#f3f6fb] w-full flex justify-center">
      <div className="box-border flex flex-col gap-[50px] items-start px-4 py-[60px] relative w-full max-w-[430px]">
        {/* Header */}
        <div className="flex flex-col gap-3 items-start relative shrink-0 w-full">
          <div className="flex flex-col gap-4 items-center justify-center relative shrink-0 w-full">
            <div className="flex flex-col gap-3 items-center justify-center relative shrink-0 w-full">
              <h2 className="font-bold leading-[1.35] not-italic text-[32px] text-black text-center tracking-[-0.64px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                不同的技术<br />
                不同的结果
              </h2>
            </div>
          </div>
          <div className="font-semibold leading-[1.4] not-italic text-[#727582] text-base text-center tracking-[-0.32px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            第一次就做对是最明智的选择<br />
            无需再次手术的完美治疗，才是真正的技术
          </div>
        </div>

        {/* Comparison */}
        <div className="flex flex-col gap-6 items-start relative shrink-0 w-full">
          {/* General Clinic */}
          <div className="flex flex-col gap-10 items-start relative shrink-0 w-full">
            <div className="flex flex-col gap-6 items-start relative shrink-0 w-full">
              <div className="bg-white box-border flex flex-col gap-5 items-center justify-center p-6 relative rounded-[24px] shadow-[0px_24px_50px_-12px_rgba(45,54,67,0.12)] shrink-0 w-full">
                <div className="flex flex-col gap-[14px] items-start relative shrink-0 w-full">
                  <div className="flex flex-col gap-4 items-start not-italic relative shrink-0 text-center w-full">
                    <p className="font-bold leading-[1.35] text-2xl text-black tracking-[-0.48px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                      普通牙科
                    </p>
                    <p className="font-semibold leading-[1.4] text-[#727582] text-base tracking-[-0.32px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                      治疗后仍存在不安
                    </p>
                  </div>
                </div>
                {generalClinic.map((item, index) => (
                  <div key={index} className="bg-[#f3f6fb] box-border flex flex-col gap-[14px] items-start p-5 relative rounded-2xl shrink-0 w-full">
                    <div className="flex flex-col gap-1.5 items-start justify-center not-italic relative shrink-0 text-center w-full">
                      <p className="font-bold leading-[1.5] text-[17px] text-black tracking-[-0.34px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                        {item.title}
                      </p>
                      <p className="font-semibold leading-[1.4] text-[#727582] text-[15px] tracking-[-0.3px] w-full whitespace-pre-line" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Medis Clinic */}
          <div className="flex flex-col gap-10 items-start relative shrink-0 w-full">
            <div className="flex flex-col gap-6 items-start relative shrink-0 w-full">
              <div className="bg-[#006aff] box-border flex flex-col gap-5 items-center justify-center p-6 relative rounded-[24px] shadow-[0px_24px_50px_-12px_rgba(45,54,67,0.12)] shrink-0 w-full">
                <div className="flex flex-col gap-[14px] items-start relative shrink-0 w-full">
                  <div className="flex flex-col gap-4 items-start not-italic relative shrink-0 text-center text-white w-full">
                    <p className="font-bold leading-[1.35] text-2xl tracking-[-0.48px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                      庆星美迪斯牙科
                    </p>
                    <p className="font-semibold leading-[1.4] text-base tracking-[-0.32px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                      庆星美迪斯牙科承诺<br />
                      凭借卓越技术实现一生一次的治疗
                    </p>
                  </div>
                </div>
                {medisClinic.map((item, index) => (
                  <div key={index} className="bg-white box-border flex flex-col gap-[14px] items-start p-5 relative rounded-2xl shrink-0 w-full">
                    <div className="flex flex-col gap-1.5 items-start justify-center not-italic relative shrink-0 text-center w-full">
                      <p className="font-bold leading-[1.5] text-[17px] text-black tracking-[-0.34px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                        {item.title}
                      </p>
                      <p className="font-semibold leading-[1.4] text-[#727582] text-[15px] tracking-[-0.3px] w-full whitespace-pre-line" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
