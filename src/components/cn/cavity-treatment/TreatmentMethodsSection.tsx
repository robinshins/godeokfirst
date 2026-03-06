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
              <h2 className="font-['Pretendard,sans-serif'] font-bold text-[32px] leading-[1.35] tracking-[-0.64px] text-black w-full">
                我们保留牙齿的治疗
              </h2>
              <p className="font-['Pretendard,sans-serif'] font-semibold text-base leading-[1.4] tracking-[-0.32px] text-[#727582] w-full">
                仅为患者和牙齿保留<br />
                准备了治疗流程和设备
              </p>
            </div>
          </div>

          {/* Treatment Cards */}
          <div className="flex flex-col gap-10 items-start w-full">
            <div className="flex flex-col gap-6 items-start w-full">
              {/* 龋齿治疗 Card */}
              <div className="bg-white p-6 rounded-[24px] shadow-[0px_24px_50px_-12px_rgba(45,54,67,0.12)] w-full">
                <div className="flex flex-col gap-5 items-center justify-center w-full">
                  <h3 className="font-['Pretendard,sans-serif'] font-bold text-[24px] leading-[1.35] tracking-[-0.48px] text-black text-center w-full">
                    龋齿治疗
                  </h3>
                  <div className="bg-[#f3f6fb] p-5 rounded-2xl w-full">
                    <div className="flex flex-col gap-[14px] items-start w-full">
                      {/* 早期龋齿治疗 */}
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
                          <p className="font-['Pretendard,sans-serif'] font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-black whitespace-nowrap">
                            早期龋齿治疗
                          </p>
                          <p className="font-['Pretendard,sans-serif'] font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#727582] whitespace-nowrap">
                            通过Curay诊断发现隐藏的龋齿
                          </p>
                        </div>
                      </div>

                      {/* 树脂治疗 */}
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
                          <p className="font-['Pretendard,sans-serif'] font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-black whitespace-nowrap">
                            树脂治疗
                          </p>
                          <p className="font-['Pretendard,sans-serif'] font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#727582] whitespace-nowrap">
                            与自然牙齿相同颜色的美观修复
                          </p>
                        </div>
                      </div>

                      {/* 嵌体·高嵌体 */}
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
                          <p className="font-['Pretendard,sans-serif'] font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-black whitespace-nowrap">
                            嵌体·高嵌体
                          </p>
                          <p className="font-['Pretendard,sans-serif'] font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#727582] whitespace-nowrap">
                            大面积龋齿也可无需拔牙的精密保留治疗
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 根管治疗 Card */}
              <div className="bg-white p-6 rounded-[24px] shadow-[0px_24px_50px_-12px_rgba(45,54,67,0.12)] w-full">
                <div className="flex flex-col gap-5 items-center justify-center w-full">
                  <h3 className="font-['Pretendard,sans-serif'] font-bold text-[24px] leading-[1.35] tracking-[-0.48px] text-black text-center w-full">
                    根管治疗
                  </h3>
                  <div className="bg-[#f3f6fb] p-5 rounded-2xl w-full">
                    <div className="flex flex-col gap-[14px] items-start w-full">
                      {/* 缓解疼痛 */}
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
                          <p className="font-['Pretendard,sans-serif'] font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-black whitespace-nowrap">
                            缓解疼痛
                          </p>
                          <p className="font-['Pretendard,sans-serif'] font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#727582] whitespace-nowrap">
                            消除剧烈牙痛，恢复舒适的日常生活
                          </p>
                        </div>
                      </div>

                      {/* 保留牙齿 */}
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
                          <p className="font-['Pretendard,sans-serif'] font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-black whitespace-nowrap">
                            保留牙齿
                          </p>
                          <p className="font-['Pretendard,sans-serif'] font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#727582] whitespace-nowrap">
                            无需拔牙保留自然牙齿
                          </p>
                        </div>
                      </div>

                      {/* 显微镜手术 */}
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
                          <p className="font-['Pretendard,sans-serif'] font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-black whitespace-nowrap">
                            显微镜手术
                          </p>
                          <p className="font-['Pretendard,sans-serif'] font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#727582] whitespace-nowrap">
                            牙体牙髓专科医生的精密治疗
                          </p>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>

              {/* 设备和优势 Card */}
              <div className="bg-white p-6 rounded-[24px] shadow-[0px_24px_50px_-12px_rgba(45,54,67,0.12)] w-full">
                <div className="flex flex-col gap-5 items-center justify-center w-full">
                  <h3 className="font-['Pretendard,sans-serif'] font-bold text-[24px] leading-[1.35] tracking-[-0.48px] text-black text-center w-full">
                    专业设备
                  </h3>

                  {/* Curay诊断设备 */}
                  <div className="flex gap-[22px] items-center w-full">
                    <div className="bg-white border border-[#e9ebf1] rounded-2xl shrink-0 w-[110px] h-[110px] overflow-hidden relative">
                      <div className="">
                        <Image
                          src="/images/qray-photo2.jpg"
                          alt="Curay诊断设备"
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 items-start flex-1">
                      <p className="font-['Pretendard,sans-serif'] font-bold text-[20px] leading-[1.5] tracking-[-0.4px] text-[#006aff] w-full">
                        Curay诊断设备
                      </p>
                      <p className="font-['Pretendard,sans-serif'] font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] text-black w-full">
                        用无害的可见光<br />
                        发现隐藏的龋齿
                      </p>
                    </div>
                  </div>

                  {/* 显微镜 - 强调部分 */}
                  <div className="flex flex-col gap-5 items-start w-full">
                    {/* 标题 */}
                    <div className="flex flex-col gap-3 items-start w-full">
                      <div className="flex gap-[22px] items-center w-full">
                        <div className="bg-white border border-[#e9ebf1] rounded-2xl shrink-0 w-[110px] h-[110px] overflow-hidden relative">
                          <Image
                            src="/images/microscope.jpg"
                            alt="显微镜"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex flex-col gap-2 items-start flex-1">
                          <p className="font-['Pretendard,sans-serif'] font-bold text-[20px] leading-[1.5] tracking-[-0.4px] text-[#006aff] w-full">
                            显微镜治疗
                          </p>
                          <p className="font-['Pretendard,sans-serif'] font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] text-black w-full">
                            牙医肉眼无法确认的<br />
                            细微部分也不会错过
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* 特点列表 */}
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
                          <p className="font-['Pretendard,sans-serif'] font-medium text-[15px] leading-[1.5] tracking-[-0.3px] text-[#2d3643]">
                            准确诊断龋齿/牙齿断裂等
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
                          <p className="font-['Pretendard,sans-serif'] font-medium text-[15px] leading-[1.5] tracking-[-0.3px] text-[#2d3643]">
                            将牙齿放大最多25倍进行精密治疗
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
                          <p className="font-['Pretendard,sans-serif'] font-medium text-[15px] leading-[1.5] tracking-[-0.3px] text-[#2d3643]">
                            最大限度减少治疗牙齿的复发和副作用
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
                          <p className="font-['Pretendard,sans-serif'] font-medium text-[15px] leading-[1.5] tracking-[-0.3px] text-[#2d3643]">
                            通过精密治疗最大限度减少周围组织的损伤
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* 说明框 */}
                    <div className="bg-gradient-to-r from-[#006aff]/10 to-[#0099ff]/10 p-4 rounded-xl w-full border border-[#006aff]/20">
                      <p className="font-['Pretendard,sans-serif'] font-medium text-[14px] leading-[1.6] tracking-[-0.28px] text-[#2d3643]">
                        仅在部分大学医院和牙科诊所拥有的显微镜，可以显示牙医肉眼难以确认的细微部分，使高难度的保留治疗更加高效。
                      </p>
                    </div>

                    {/* 实际治疗案例图片 */}
                    <div className="flex flex-col gap-3 items-start w-full">
                      <h5 className="font-['Pretendard,sans-serif'] font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-black">
                        显微镜下可见的内容
                      </h5>
                      <div className="grid grid-cols-3 gap-2 w-full">
                        <div className="aspect-square rounded-xl overflow-hidden relative border border-[#e9ebf1]">
                          <Image
                            src="/images/microscope-nerve-canal.webp"
                            alt="确保神经管"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="aspect-square rounded-xl overflow-hidden relative border border-[#e9ebf1]">
                          <Image
                            src="/images/microscope-root-inflammation.webp"
                            alt="发现牙根炎症原因"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="aspect-square rounded-xl overflow-hidden relative border border-[#e9ebf1]">
                          <Image
                            src="/images/microscope-crack-found.webp"
                            alt="发现裂纹"
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-2 w-full">
                        <p className="font-['Pretendard,sans-serif'] font-medium text-[12px] leading-[1.4] tracking-[-0.24px] text-[#727582] text-center">
                          确保神经管
                        </p>
                        <p className="font-['Pretendard,sans-serif'] font-medium text-[12px] leading-[1.4] tracking-[-0.24px] text-[#727582] text-center">
                          发现牙根<br />炎症原因
                        </p>
                        <p className="font-['Pretendard,sans-serif'] font-medium text-[12px] leading-[1.4] tracking-[-0.24px] text-[#727582] text-center">
                          发现裂纹
                        </p>
                      </div>
                    </div>

                    {/* 强调信息 */}
                    <div className="bg-[#f0f7ff] px-4 py-3 rounded-xl w-full">
                      <p className="font-['Pretendard,sans-serif'] font-semibold text-[14px] leading-[1.5] tracking-[-0.28px] text-[#006aff]">
                        💡 其他牙科诊所的疑难根管治疗也接受委托治疗
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
