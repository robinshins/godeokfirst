import Image from 'next/image';

export default function SkillDifferenceSection() {
  return (
    <div className="bg-[#f8f9fa] w-full">
      <div className="max-w-[430px] mx-auto px-4 py-16">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <h2 className="text-[32px] font-bold text-[#111827] leading-[1.2] tracking-[-0.64px]">
              Tajribadan kelib chiqqan<br />
              <span className="text-[#006aff]">Mahorat farqi</span>
            </h2>
            <p className="text-lg text-[#6b7280] leading-[1.6]">
              Bir xil raqamli uskunalar bo'lsa-da,<br />
              natija shifokorning mahoratiga bog'liq.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="bg-white p-8 rounded-[32px] shadow-sm flex flex-col gap-6 border border-[#e9ebf1]">
              <div className="flex flex-col gap-2">
                <span className="text-[#006aff] font-bold">1,500 + holat</span>
                <h3 className="text-2xl font-bold text-[#111827]">Boy tajriba</h3>
              </div>
              <p className="text-[#6b7280] leading-[1.6]">
                Raqamli navigatsiya operatsiyasi bo'yicha minglab tajribalar asosida har qanday qiyin vaziyatda eng to'g'ri yechimni topamiz.
              </p>
            </div>

            <div className="bg-white p-8 rounded-[32px] shadow-sm flex flex-col gap-6 border border-[#e9ebf1]">
              <div className="flex flex-col gap-2">
                <span className="text-[#006aff] font-bold">Bosh shifokor nazorati</span>
                <h3 className="text-2xl font-bold text-[#111827]">Mas'uliyatli davolash</h3>
              </div>
              <p className="text-[#6b7280] leading-[1.6]">
                Konsultatsiyadan boshlab operatsiya va undan keyingi parvarishgacha bosh shifokor shaxsan mas'ul bo'ladi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

