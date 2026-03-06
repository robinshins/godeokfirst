'use client';

import Image from 'next/image';

export default function TreatmentMethodsSection() {
  return (
    <div className="bg-white w-full py-[60px] px-4 relative">
      {/* Background gradient */}
      <div className="absolute h-[636px] left-[calc(50%+5.5px)] top-[149px] -translate-x-1/2 w-[480px] pointer-events-none">
        <div className="absolute inset-[-62.89%_-83.33%]">
          <Image
            src="/images/cavity-treatment-gradient.svg"
            alt=""
            fill
            className="block max-w-none object-contain"
          />
        </div>
      </div>

      <div className="max-w-[375px] mx-auto relative z-10">
        <div className="flex flex-col gap-10 items-start w-full">
          {/* Title */}
          <div className="flex flex-col gap-4 items-center justify-center w-full">
            <div className="flex flex-col gap-3 items-center justify-center text-center w-full">
              <h2 className="font-['Pretendard_JP'] font-bold text-[32px] leading-[1.35] tracking-[-0.64px] text-black w-full">
                私たちが守る治療
              </h2>
              <p className="font-['Pretendard_JP'] font-semibold text-base leading-[1.4] tracking-[-0.32px] text-[#727582] w-full">
                患者様と歯の保存のみのための<br />
                治療過程と設備が整っています
              </p>
            </div>
          </div>

          {/* Treatment Cards */}
          <div className="flex flex-col gap-10 items-start w-full">
            <div className="flex flex-col gap-6 items-start w-full">
              {/* 虫歯治療 Card */}
              <div className="bg-white p-6 rounded-[24px] shadow-[0px_24px_50px_-12px_rgba(45,54,67,0.12)] w-full">
                <div className="flex flex-col gap-5 items-center justify-center w-full">
                  <h3 className="font-['Pretendard_JP'] font-bold text-[24px] leading-[1.35] tracking-[-0.48px] text-black text-center w-full">
                    虫歯治療
                  </h3>
                  <div className="bg-[#f3f6fb] p-5 rounded-2xl w-full">
                    <div className="flex flex-col gap-[14px] items-start w-full">
                      {/* 初期虫歯治療 */}
                      <div className="flex items-start gap-0 w-full">
                        <div className="shrink-0 w-6 h-6">
                          <Image
                            src="/icons/check-blue.svg"
                            alt=""
                            width={24}
                            height={24}
                          />
                        </div>
                        <div className="flex flex-col gap-1 items-start justify-center">
                          <p className="font-['Pretendard_JP'] font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-black whitespace-nowrap">
                            初期虫歯治療
                          </p>
                          <p className="font-['Pretendard_JP'] font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#727582] whitespace-nowrap">
                            Qrayカメラで隠れた虫歯まで発見
                          </p>
                        </div>
                      </div>

                      {/* レジン治療 */}
                      <div className="flex items-start gap-0 w-full">
                        <div className="shrink-0 w-6 h-6">
                          <Image
                            src="/icons/check-gray.svg"
                            alt=""
                            width={24}
                            height={24}
                          />
                        </div>
                        <div className="flex flex-col gap-1 items-start justify-center">
                          <p className="font-['Pretendard_JP'] font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-black whitespace-nowrap">
                            レジン治療
                          </p>
                          <p className="font-['Pretendard_JP'] font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#727582] whitespace-nowrap">
                            天然歯と同じ色で審美的に修復
                          </p>
                        </div>
                      </div>

                      {/* インレー・アンレー */}
                      <div className="flex items-start gap-0 w-full">
                        <div className="shrink-0 w-6 h-6">
                          <Image
                            src="/icons/check-gray.svg"
                            alt=""
                            width={24}
                            height={24}
                          />
                        </div>
                        <div className="flex flex-col gap-1 items-start justify-center">
                          <p className="font-['Pretendard_JP'] font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-black whitespace-nowrap">
                            インレー・アンレー
                          </p>
                          <p className="font-['Pretendard_JP'] font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#727582] whitespace-nowrap">
                            広範囲の虫歯も抜歯なしで精密保存治療
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 根管治療 Card */}
              <div className="bg-white p-6 rounded-[24px] shadow-[0px_24px_50px_-12px_rgba(45,54,67,0.12)] w-full">
                <div className="flex flex-col gap-5 items-center justify-center w-full">
                  <h3 className="font-['Pretendard_JP'] font-bold text-[24px] leading-[1.35] tracking-[-0.48px] text-black text-center w-full">
                    根管治療
                  </h3>
                  <div className="bg-[#f3f6fb] p-5 rounded-2xl w-full">
                    <div className="flex flex-col gap-[14px] items-start w-full">
                      {/* 痛みの緩和 */}
                      <div className="flex items-start gap-0 w-full">
                        <div className="shrink-0 w-6 h-6">
                          <Image
                            src="/icons/check-blue.svg"
                            alt=""
                            width={24}
                            height={24}
                          />
                        </div>
                        <div className="flex flex-col gap-1 items-start justify-center flex-1">
                          <p className="font-['Pretendard_JP'] font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-black whitespace-nowrap">
                            痛みの緩和
                          </p>
                          <p className="font-['Pretendard_JP'] font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#727582] whitespace-nowrap">
                            ひどい歯痛を除去し快適な日常を回復
                          </p>
                        </div>
                      </div>

                      {/* 歯の保存 */}
                      <div className="flex items-start gap-0 w-full">
                        <div className="shrink-0 w-6 h-6">
                          <Image
                            src="/icons/check-gray.svg"
                            alt=""
                            width={24}
                            height={24}
                          />
                        </div>
                        <div className="flex flex-col gap-1 items-start justify-center flex-1">
                          <p className="font-['Pretendard_JP'] font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-black whitespace-nowrap">
                            歯の保存
                          </p>
                          <p className="font-['Pretendard_JP'] font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#727582] whitespace-nowrap">
                            抜歯なしで天然歯を守る
                          </p>
                        </div>
                      </div>

                      {/* マイクロスコープ治療 */}
                      <div className="flex items-start gap-0 w-full">
                        <div className="shrink-0 w-6 h-6">
                          <Image
                            src="/icons/check-gray.svg"
                            alt=""
                            width={24}
                            height={24}
                          />
                        </div>
                        <div className="flex flex-col gap-1 items-start justify-center flex-1">
                          <p className="font-['Pretendard_JP'] font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-black whitespace-nowrap">
                            マイクロスコープ治療
                          </p>
                          <p className="font-['Pretendard_JP'] font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#727582] whitespace-nowrap">
                            保存科専門医による精密治療
                          </p>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>

              {/* 専門設備 Card */}
              <div className="bg-white p-6 rounded-[24px] shadow-[0px_24px_50px_-12px_rgba(45,54,67,0.12)] w-full">
                <div className="flex flex-col gap-5 items-center justify-center w-full">
                  <h3 className="font-['Pretendard_JP'] font-bold text-[24px] leading-[1.35] tracking-[-0.48px] text-black text-center w-full">
                    専門設備
                  </h3>

                  {/* Qrayカメラ診断機器 */}
                  <div className="flex gap-[22px] items-center w-full">
                    <div className="bg-white border border-[#e9ebf1] rounded-2xl shrink-0 w-[110px] h-[110px] overflow-hidden relative">
                      <div className="">
                        <Image
                          src="/images/qray-photo2.jpg"
                          alt="Qrayカメラ診断機器"
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 items-start flex-1">
                      <p className="font-['Pretendard_JP'] font-bold text-[20px] leading-[1.5] tracking-[-0.4px] text-[#006aff] w-full">
                        Qrayカメラ診断機器
                      </p>
                      <p className="font-['Pretendard_JP'] font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] text-black w-full">
                        無害な可視光線で<br />
                        隠れた虫歯を発見
                      </p>
                    </div>
                  </div>

                  {/* マイクロスコープ - 強調セクション */}
                  <div className="flex flex-col gap-5 items-start w-full">
                    {/* ヘッダー */}
                    <div className="flex flex-col gap-3 items-start w-full">
                      <div className="flex gap-[22px] items-center w-full">
                        <div className="bg-white border border-[#e9ebf1] rounded-2xl shrink-0 w-[110px] h-[110px] overflow-hidden relative">
                          <Image
                            src="/images/microscope.jpg"
                            alt="マイクロスコープ"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex flex-col gap-2 items-start flex-1">
                          <p className="font-['Pretendard_JP'] font-bold text-[20px] leading-[1.5] tracking-[-0.4px] text-[#006aff] w-full">
                            マイクロスコープ治療
                          </p>
                          <p className="font-['Pretendard_JP'] font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] text-black w-full">
                            歯科医師の目では確認できない<br />
                            小さな部分も見逃しません
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* 特徴リスト */}
                    <div className="bg-[#f3f6fb] p-5 rounded-2xl w-full">
                      <div className="flex flex-col gap-3 items-start w-full">
                        <div className="flex items-start gap-2 w-full">
                          <div className="shrink-0 w-5 h-5 mt-0.5">
                            <Image
                              src="/icons/check-blue.svg"
                              alt=""
                              width={20}
                              height={20}
                            />
                          </div>
                          <p className="font-['Pretendard_JP'] font-medium text-[15px] leading-[1.5] tracking-[-0.3px] text-[#2d3643]">
                            虫歯・歯牙破折などを正確に診断します
                          </p>
                        </div>
                        <div className="flex items-start gap-2 w-full">
                          <div className="shrink-0 w-5 h-5 mt-0.5">
                            <Image
                              src="/icons/check-blue.svg"
                              alt=""
                              width={20}
                              height={20}
                            />
                          </div>
                          <p className="font-['Pretendard_JP'] font-medium text-[15px] leading-[1.5] tracking-[-0.3px] text-[#2d3643]">
                            歯を最大25倍まで拡大して精密に治療します
                          </p>
                        </div>
                        <div className="flex items-start gap-2 w-full">
                          <div className="shrink-0 w-5 h-5 mt-0.5">
                            <Image
                              src="/icons/check-blue.svg"
                              alt=""
                              width={20}
                              height={20}
                            />
                          </div>
                          <p className="font-['Pretendard_JP'] font-medium text-[15px] leading-[1.5] tracking-[-0.3px] text-[#2d3643]">
                            治療した歯の再発と副作用を最小限に抑えます
                          </p>
                        </div>
                        <div className="flex items-start gap-2 w-full">
                          <div className="shrink-0 w-5 h-5 mt-0.5">
                            <Image
                              src="/icons/check-blue.svg"
                              alt=""
                              width={20}
                              height={20}
                            />
                          </div>
                          <p className="font-['Pretendard_JP'] font-medium text-[15px] leading-[1.5] tracking-[-0.3px] text-[#2d3643]">
                            精密治療で周辺組織の損傷を最小限に抑えます
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* 説明ボックス */}
                    <div className="bg-gradient-to-r from-[#006aff]/10 to-[#0099ff]/10 p-4 rounded-xl w-full border border-[#006aff]/20">
                      <p className="font-['Pretendard_JP'] font-medium text-[14px] leading-[1.6] tracking-[-0.28px] text-[#2d3643]">
                        一部の大学病院と歯科医院のみが所有しているマイクロスコープは、歯科医師の目では確認しにくい小さな部分まで見せてくれるため、難易度の高い保存治療を効率的に行うことができます。
                      </p>
                    </div>

                    {/* 実際の治療ケース画像 */}
                    <div className="flex flex-col gap-3 items-start w-full">
                      <h5 className="font-['Pretendard_JP'] font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-black">
                        マイクロスコープで見えるもの
                      </h5>
                      <div className="grid grid-cols-3 gap-2 w-full">
                        <div className="aspect-square rounded-xl overflow-hidden relative border border-[#e9ebf1]">
                          <Image
                            src="/images/microscope-nerve-canal.webp"
                            alt="根管確保"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="aspect-square rounded-xl overflow-hidden relative border border-[#e9ebf1]">
                          <Image
                            src="/images/microscope-root-inflammation.webp"
                            alt="歯根炎症原因発見"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="aspect-square rounded-xl overflow-hidden relative border border-[#e9ebf1]">
                          <Image
                            src="/images/microscope-crack-found.webp"
                            alt="クラック発見"
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-2 w-full">
                        <p className="font-['Pretendard_JP'] font-medium text-[12px] leading-[1.4] tracking-[-0.24px] text-[#727582] text-center">
                          根管確保
                        </p>
                        <p className="font-['Pretendard_JP'] font-medium text-[12px] leading-[1.4] tracking-[-0.24px] text-[#727582] text-center">
                          歯根<br />炎症原因発見
                        </p>
                        <p className="font-['Pretendard_JP'] font-medium text-[12px] leading-[1.4] tracking-[-0.24px] text-[#727582] text-center">
                          クラック発見
                        </p>
                      </div>
                    </div>

                    {/* 強調メッセージ */}
                    <div className="bg-[#f0f7ff] px-4 py-3 rounded-xl w-full">
                      <p className="font-['Pretendard_JP'] font-semibold text-[14px] leading-[1.5] tracking-[-0.28px] text-[#006aff]">
                        💡 他院で困難な根管治療も紹介を受けて治療します
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
