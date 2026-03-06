'use client';

import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

export default function WhiteningLaminateSection() {
  const [showImages] = useState(false);

  return (
    <div className="bg-white w-full py-[60px] relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute h-[636px] left-1/2 -translate-x-1/2 w-[375px] pointer-events-none">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-gradient.svg"
            alt=""
            fill
            className="object-contain"
          />
        </div>
      </div>

      <div className="max-w-[375px] mx-auto px-4 relative z-10">
        <div className="flex flex-col gap-10 w-full">
          {/* Title */}
          <div className="flex flex-col gap-3 items-center justify-center w-full">
            <h2 className="font-bold text-[32px] leading-[1.35] tracking-[-0.64px] text-black text-center w-full">
              Why Choose Kyungsung Medis<br />
              <span className="text-[#006aff]">No-Prep/Minimal-Prep Digital Laminates</span>?
            </h2>
            <p className="font-semibold text-base leading-[1.4] tracking-[-0.32px] text-[#727582] text-center">
              State-of-the-art digital equipment with<br />
              2-year warranty for your perfect smile
            </p>
          </div>

          {/* Actual Before/After Images */}
          <div className="flex flex-col gap-4 w-full">
            <h3 className="font-bold text-[20px] leading-[1.4] tracking-[-0.4px] text-black text-center">
              Actual Treatment Cases
            </h3>

            {/* Case 1 */}
            <div className="bg-white rounded-[20px] border border-[#e9ebf1] p-4 w-full">
              <div className="flex flex-col gap-4 w-full">
                {/* Before - Top Half */}
                <div className="bg-[#f3f6fb] h-[192px] overflow-hidden relative rounded-[20px] w-full">
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/laminate-before-after/case1-before.jpg"
                      alt="Laminate Before"
                      fill
                      className={`object-cover ${!showImages ? 'blur-sm' : ''}`}
                    />
                  </div>
                  {!showImages && (
                    <Link href="/login" className="absolute inset-0 cursor-pointer">
                      <div className="absolute inset-0 backdrop-blur-[10px] bg-white/10" />
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/40 rounded-full w-[52px] h-[52px] flex items-center justify-center">
                        <Image
                          src="/icons/lock.svg"
                          alt="Lock"
                          width={24}
                          height={24}
                        />
                      </div>
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 px-4 py-2 rounded-full">
                        <p className="text-white text-xs font-medium whitespace-nowrap">Login to view Before photos</p>
                      </div>
                    </Link>
                  )}
                  {/* Before Badge */}
                  <div className="absolute left-0 top-0 p-3 z-10">
                    <div className="bg-[#292a2f] rounded-[10px] px-2.5 py-[5px]">
                      <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-white">
                        Before
                      </p>
                    </div>
                  </div>
                </div>

                {/* After - Bottom Half */}
                <div className="bg-[#f3f6fb] h-[192px] overflow-hidden relative rounded-[20px] w-full">
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/laminate-before-after/case1-after.jpg"
                      alt="Laminate After"
                      fill
                      className="object-cover"
                    />
                  </div>
                  {/* After Badge SVG */}
                  <div className="absolute left-0 top-0 w-[196px] h-[86px]">
                    <Image
                      src="/images/after-badge.svg"
                      alt=""
                      width={196}
                      height={86}
                    />
                  </div>
                  {/* After Text */}
                  <div className="absolute left-0 top-0 p-3">
                    <div className="rounded-[10px] px-2.5 py-[5px]">
                      <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-white">
                        After
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Case 2 */}
            <div className="bg-white rounded-[20px] border border-[#e9ebf1] p-4 w-full">
              <div className="flex flex-col gap-4 w-full">
                {/* Before - Top Half */}
                <div className="bg-[#f3f6fb] h-[192px] overflow-hidden relative rounded-[20px] w-full">
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/laminate-before-after/case2-before.jpg"
                      alt="Laminate Before"
                      fill
                      className={`object-cover ${!showImages ? 'blur-sm' : ''}`}
                    />
                  </div>
                  {!showImages && (
                    <Link href="/login" className="absolute inset-0 cursor-pointer">
                      <div className="absolute inset-0 backdrop-blur-[10px] bg-white/10" />
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/40 rounded-full w-[52px] h-[52px] flex items-center justify-center">
                        <Image
                          src="/icons/lock.svg"
                          alt="Lock"
                          width={24}
                          height={24}
                        />
                      </div>
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 px-4 py-2 rounded-full">
                        <p className="text-white text-xs font-medium whitespace-nowrap">Login to view Before photos</p>
                      </div>
                    </Link>
                  )}
                  {/* Before Badge */}
                  <div className="absolute left-0 top-0 p-3 z-10">
                    <div className="bg-[#292a2f] rounded-[10px] px-2.5 py-[5px]">
                      <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-white">
                        Before
                      </p>
                    </div>
                  </div>
                </div>

                {/* After - Bottom Half */}
                <div className="bg-[#f3f6fb] h-[192px] overflow-hidden relative rounded-[20px] w-full">
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/laminate-before-after/case2-after.jpg"
                      alt="Laminate After"
                      fill
                      className="object-cover"
                    />
                  </div>
                  {/* After Badge SVG */}
                  <div className="absolute left-0 top-0 w-[196px] h-[86px]">
                    <Image
                      src="/images/after-badge.svg"
                      alt=""
                      width={196}
                      height={86}
                    />
                  </div>
                  {/* After Text */}
                  <div className="absolute left-0 top-0 p-3">
                    <div className="rounded-[10px] px-2.5 py-[5px]">
                      <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-white">
                        After
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Login Button */}
            {!showImages && (
              <Link href="/login" className="w-full">
                <button className="bg-white border border-[#e9ebf1] rounded-[18px] h-14 px-6 py-3 flex items-center justify-center w-full hover:bg-gray-50 transition-colors">
                  <p className="font-bold text-[18px] leading-[1.5] tracking-[-0.36px] text-[#006aff]">
                    Login to View All
                  </p>
                </button>
              </Link>
            )}
          </div>

          {/* Main Card */}
          <div className="bg-white rounded-[24px] shadow-[0px_24px_50px_-12px_rgba(45,54,67,0.12)] p-6 flex flex-col gap-5 w-full">
            {/* What are Laminates? */}
            <div className="bg-[#f3f6fb] rounded-[16px] p-5 flex flex-col gap-[14px] w-full">
              <div className="flex flex-col gap-1.5 w-full">
                <p className="font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-black w-full">
                  What are Laminates?
                </p>
                <p className="font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#727582] w-full">
                  Thin ceramic (porcelain) shells, 0.3-0.7mm thick, bonded to the front surface of teeth<br />
                  Think of it as &apos;permanent whitening coating&apos; for your teeth, like nail art on fingernails
                </p>
              </div>
            </div>

            {/* 3 Key Benefits */}
            <div className="bg-[#006aff] rounded-[16px] p-5 flex flex-col gap-[14px] w-full">
              {[
                { title: '24-Hour Completion', desc: 'Quick procedure for fast return to daily life (Perfect for busy professionals!)' },
                { title: '2-Year Warranty', desc: 'Immediate correction for any damage or discoloration' },
                { title: 'Affordable Price', desc: 'Transparent pricing with installment options available' }
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-0 w-full">
                  <div className="w-6 h-6 shrink-0">
                    <Image
                      src="/icons/check.svg"
                      alt=""
                      width={24}
                      height={24}
                    />
                  </div>
                  <div className="flex flex-col gap-1 text-white whitespace-pre">
                    <p className="font-bold text-[17px] leading-[1.5] tracking-[-0.34px]">
                      {benefit.title}
                    </p>
                    <p className="font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] opacity-60">
                      {benefit.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Digital Manufacturing Process */}
          <div className="flex flex-col gap-5 w-full">
            <h3 className="font-bold text-[24px] leading-[1.35] tracking-[-0.48px] text-black text-center">
              Digital Precision Manufacturing System
            </h3>

            {/* 3D Digital Scan Video */}
            <div className="flex flex-col gap-3">
              <div className="bg-[#f3f6fb] rounded-[20px] overflow-hidden relative w-full aspect-video">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src="/videos/digital-laminate-3d.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="bg-[#f3f6fb] rounded-[16px] p-4 flex flex-col gap-3">
                <div>
                  <p className="font-bold text-[15px] leading-[1.5] tracking-[-0.3px] text-black mb-2">
                    Step 1: Digital Precision Virtual Diagnosis
                  </p>
                  <p className="font-semibold text-[14px] leading-[1.4] tracking-[-0.28px] text-[#727582]">
                    No uncomfortable impressions - we scan your teeth in 3D with an intraoral scanner. Digital data enables accurate diagnosis and simulation.
                  </p>
                </div>

                {/* Virtual Diagnosis Features */}
                <div className="bg-white rounded-[12px] p-3 flex flex-col gap-2">
                  <div className="flex items-start gap-2">
                    <span className="text-[#006aff] text-lg shrink-0">✓</span>
                    <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#37373e]">
                      <span className="font-bold text-[#006aff]">See Results Before Treatment:</span> Preview your results through virtual diagnosis
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#006aff] text-lg shrink-0">✓</span>
                    <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#37373e]">
                      <span className="font-bold text-[#006aff]">Facial Harmony Analysis:</span> Natural smile design that complements your face - no worries about looking too white or artificial
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Milling Machine Production Video */}
            <div className="flex flex-col gap-3">
              <div className="bg-[#f3f6fb] rounded-[20px] overflow-hidden relative w-full aspect-video">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src="/videos/milling-machine.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="bg-[#f3f6fb] rounded-[16px] p-4">
                <p className="font-bold text-[15px] leading-[1.5] tracking-[-0.3px] text-black mb-2">
                  Step 2: Rapid Production with Milling Machine
                </p>
                <p className="font-semibold text-[14px] leading-[1.4] tracking-[-0.28px] text-[#727582]">
                  Advanced milling machine precisely crafts VITA MARK II blocks. Completed within 24 hours using ceramic with strength closest to natural teeth.
                </p>
              </div>
            </div>

            {/* Laminate Bonding Video */}
            <div className="flex flex-col gap-3">
              <div className="bg-[#f3f6fb] rounded-[20px] overflow-hidden relative w-full aspect-video">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src="/videos/laminate-fitting.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="bg-[#f3f6fb] rounded-[16px] p-4">
                <p className="font-bold text-[15px] leading-[1.5] tracking-[-0.3px] text-black mb-2">
                  Step 3: Precision Laminate Bonding
                </p>
                <p className="font-semibold text-[14px] leading-[1.4] tracking-[-0.28px] text-[#727582]">
                  After verifying the prosthetic in advance, precisely bonded with no-prep or minimal-prep using microscope.
                </p>
              </div>
            </div>
          </div>

          {/* Professional Excellence */}
          <div className="bg-white rounded-[24px] border-2 border-[#006aff] p-6 flex flex-col gap-5 w-full">
            <h3 className="font-bold text-[20px] leading-[1.4] tracking-[-0.4px] text-[#006aff] text-center">
              Medis Dental Excellence
            </h3>

            {/* Cosmetic Dentistry Fellow Photo */}
            <div className="bg-[#f3f6fb] rounded-[20px] overflow-hidden relative w-full aspect-[16/10]">
              <div className="relative w-full h-full -translate-x-[5%]">
                <Image
                  src="/images/cosmetic-dentistry-fellow.jpg"
                  alt="Cosmetic Dentistry Fellow Certificate"
                  fill
                  className="object-cover scale-[1.5]"
                />
              </div>
            </div>

            {/* Fellow Explanation */}
            <div className="bg-gradient-to-br from-[#006aff] to-[#0052cc] rounded-[16px] p-5 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <div className="text-2xl">🏆</div>
                <p className="font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-white">
                  Korean Academy of Cosmetic Dentistry Fellow
                </p>
              </div>
              <div className="flex flex-col gap-2 text-white">
                <p className="font-semibold text-[14px] leading-[1.4] tracking-[-0.28px] opacity-90">
                  <span className="font-bold">Fellow</span> is the highest expert level, one rank above general specialists
                </p>
                <div className="bg-white/10 rounded-[10px] p-3 flex flex-col gap-1.5">
                  <div className="flex items-start gap-2">
                    <span className="text-sm shrink-0">•</span>
                    <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px]">
                      <span className="font-bold">10+ years professional experience</span> + 100+ successful cases
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-sm shrink-0">•</span>
                    <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px]">
                      <span className="font-bold">Published research and academic activities</span> recognized expert
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-sm shrink-0">•</span>
                    <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px]">
                      <span className="font-bold">Cosmetic Dentistry Society certified</span> highest level expertise
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              {[
                { icon: '🏭', title: 'In-House Lab Collaboration System', desc: 'Immediate production and adjustments in our own lab' },
                { icon: '🔬', title: 'Microscope No-Prep Procedure', desc: 'Preserving natural teeth with minimal damage' },
                { icon: '💎', title: 'VITA MARK II Premium Block', desc: 'Strength and color closest to natural teeth' }
              ].map((item, index) => (
                <div key={index} className="bg-[#f3f6fb] rounded-[16px] p-4 flex items-start gap-3">
                  <div className="text-2xl shrink-0">{item.icon}</div>
                  <div className="flex flex-col gap-1">
                    <p className="font-bold text-[15px] leading-[1.5] tracking-[-0.3px] text-black">
                      {item.title}
                    </p>
                    <p className="font-semibold text-[14px] leading-[1.4] tracking-[-0.28px] text-[#727582]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <Link href="/en/consultation" className="w-full">
            <button className="bg-[#006aff] h-16 w-full rounded-[18px] px-6 py-4 hover:bg-[#0052cc] transition-colors">
              <p className="font-bold text-[20px] leading-[1.5] tracking-[-0.4px] text-white">
                Book Laminate Consultation
              </p>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
