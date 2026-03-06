'use client';

import Image from 'next/image';

export default function DoctorProfileSection() {
  return (
    <div className="w-full py-[60px] px-4" style={{ background: 'linear-gradient(161deg, #021847 13.86%, #0B255C 19.07%, #000 28.55%)' }}>
      <div className="max-w-[375px] mx-auto">
        <div className="flex flex-col gap-10 items-start w-full">
          {/* Title */}
          <div className="flex flex-col gap-3 items-start text-center text-white w-full">
            <h2 className="font-['Pretendard'] font-bold text-[36px] leading-[1.35] tracking-[-0.72px] w-full">
              Extraction?<br />
              It&apos;s too early!
            </h2>
            <p className="font-['Pretendard'] font-semibold text-[24px] leading-[1.6] tracking-[-0.48px] w-full">
              Our preservation specialist saves teeth to the end
            </p>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-8 items-start justify-center w-full">
            {/* Doctor Image Card */}
            <div className="bg-white rounded-[20px] shadow-[0px_13px_19px_0px_rgba(0,0,0,0.07)] w-full overflow-hidden">
              <div className="h-[280px] w-full relative overflow-hidden">
                <Image
                  src="/images/cavity-doctor-profile.png"
                  alt="Dr. Bae In-hye, Preservation Specialist"
                  fill
                  className="object-cover"
                  style={{ objectPosition: 'center center' }}
                />
              </div>
            </div>

            {/* Doctor Info */}
            <div className="flex flex-col gap-10 items-start text-white w-full">
              {/* Name and Title */}
              <div className="flex flex-col gap-5 items-start w-full">
                <div className="flex gap-[10px] items-center text-center w-full">
                  <h3 className="font-['Pretendard'] font-bold text-[32px] leading-[1.35] tracking-[-0.64px] whitespace-nowrap">
                    Bae In-hye
                  </h3>
                  <div className="flex flex-col h-full justify-end w-[77px]">
                    <p className="font-['Pretendard'] font-bold text-[18px] leading-[1.5] tracking-[-0.36px]">
                      Preservation Director
                    </p>
                  </div>
                </div>
                <div className="font-['Pretendard'] font-bold text-[24px] leading-[1.6] tracking-[-0.48px] whitespace-nowrap">
                  <p>Dual licensed Dentist and Pharmacist</p>
                  <p>Ministry of Health certified Dental Preservation Specialist</p>
                </div>
              </div>

              {/* Credentials List */}
              <ul className="font-['Pretendard'] font-medium text-[15px] leading-[1.4] tracking-[-0.3px] opacity-80 w-full space-y-[10px] list-disc pl-[22.5px]">
                <li>Completed Residency in Conservative Dentistry, Pusan National University Dental Hospital</li>
                <li>PhD Candidate, Pusan National University School of Dentistry<br />(Conservative Dentistry)</li>
                <li>Master of Dentistry, Graduated Top of Class, School of Dentistry</li>
                <li>Member, Korean Academy of Conservative Dentistry</li>
                <li>Member, Korean Academy of Endodontics</li>
                <li>Member, Korean Academy of Adhesive Dentistry</li>
                <li>Member, Korean Academy of Dental Materials</li>
                <li>Member, Korean Academy of Esthetic Dentistry</li>
                <li>Former Director, Good Smile Dental Clinic</li>
                <li>Former Director, Plante Dental Clinic</li>
              </ul>

              {/* Preservation Treatment Introduction */}
              <div className="flex flex-col gap-6 items-start w-full">
                <div className="flex flex-col gap-3 items-start w-full">
                  <h4 className="font-['Pretendard'] font-bold text-[24px] leading-[1.35] tracking-[-0.48px]">
                    Special Preservation Treatment<br />to Protect Natural Teeth
                  </h4>
                  <p className="font-['Pretendard'] font-medium text-[15px] leading-[1.6] tracking-[-0.3px] opacity-80">
                    We consider saving natural teeth as our mission as dentists and strive to preserve them as much as possible.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm p-5 rounded-2xl w-full">
                  <div className="flex flex-col gap-4 items-start w-full">
                    {/* Treatment Services */}
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
                        <div className="flex flex-col gap-1">
                          <p className="font-['Pretendard'] font-bold text-[16px] leading-[1.5] tracking-[-0.32px]">
                            Root Canal Treatment, Re-treatment
                          </p>
                          <p className="font-['Pretendard'] font-medium text-[14px] leading-[1.5] tracking-[-0.28px] opacity-80">
                            Root canal treatment requiring delicate technique is a specialty of conservative dentistry.
                          </p>
                        </div>
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
                        <div className="flex flex-col gap-1">
                          <p className="font-['Pretendard'] font-bold text-[16px] leading-[1.5] tracking-[-0.32px]">
                            Pulp Regeneration
                          </p>
                          <p className="font-['Pretendard'] font-medium text-[14px] leading-[1.5] tracking-[-0.28px] opacity-80">
                            Also known as pediatric root canal treatment, pulp regeneration revives the nerve of stopped permanent teeth to continue root growth.
                          </p>
                        </div>
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
                        <div className="flex flex-col gap-1">
                          <p className="font-['Pretendard'] font-bold text-[16px] leading-[1.5] tracking-[-0.32px]">
                            Traumatic Tooth Treatment
                          </p>
                          <p className="font-['Pretendard'] font-medium text-[14px] leading-[1.5] tracking-[-0.28px] opacity-80">
                            Through diverse clinical experience, we diagnose the prognosis of traumatized teeth in advance and respond quickly.
                          </p>
                        </div>
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
                        <div className="flex flex-col gap-1">
                          <p className="font-['Pretendard'] font-bold text-[16px] leading-[1.5] tracking-[-0.32px]">
                            Apicoectomy
                          </p>
                          <p className="font-['Pretendard'] font-medium text-[14px] leading-[1.5] tracking-[-0.28px] opacity-80">
                            Using a microscope, we remove inflammation from tooth roots that previously required extraction, preserving the tooth.
                          </p>
                        </div>
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
                        <div className="flex flex-col gap-1">
                          <p className="font-['Pretendard'] font-bold text-[16px] leading-[1.5] tracking-[-0.32px]">
                            Tooth Replantation
                          </p>
                          <p className="font-['Pretendard'] font-medium text-[14px] leading-[1.5] tracking-[-0.28px] opacity-80">
                            After extraction, we remove the cause of inflammation and replant the tooth.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Patient Consultation Emphasis */}
                    <div className="bg-[#006aff]/20 backdrop-blur-sm px-4 py-3 rounded-xl w-full border border-[#006aff]/30">
                      <p className="font-['Pretendard'] font-semibold text-[14px] leading-[1.5] tracking-[-0.28px] text-white">
                        💡 As a preservation specialist, we provide the most necessary treatment through thorough consultation with patients based on extensive experience in all procedures.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Microscope Treatment Photo */}
          <div className="bg-white rounded-[20px] shadow-[0px_13px_19px_0px_rgba(0,0,0,0.07)] w-full overflow-hidden">
            <div className="h-[280px] w-full relative overflow-hidden">
              <Image
                src="/images/microscope-treatment-photo.jpg"
                alt="Dr. Bae In-hye performing microscopic treatment"
                fill
                className="object-cover"
                style={{ objectPosition: 'center center' }}
              />
            </div>
            <div className="px-5 py-4 bg-gradient-to-r from-blue-50 to-purple-50">
              <p className="font-['Pretendard'] font-bold text-[16px] leading-[1.5] tracking-[-0.32px] text-[#006aff] text-center">
                The Choice to Save Natural Teeth
              </p>
              <p className="font-['Pretendard'] font-medium text-[14px] leading-[1.5] tracking-[-0.28px] text-[#5d5f6d] text-center mt-1">
                To preserve without extraction to the end<br />we treat precisely with university hospital-grade microscope
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
