import type { Metadata } from 'next';
import GNB from '@/components/uz/GNB';
import FixedCTAButton from '@/components/uz/FixedCTAButton';
import FooterSection from '@/components/uz/FooterSection';

import ImplantHero from '@/components/uz/implant/ImplantHero';
import StatsSection from '@/components/uz/implant/StatsSection';
import VideoSection from '@/components/uz/implant/VideoSection';
import ThreeStepNewSection from '@/components/uz/implant/ThreeStepNewSection';
import WhyBestNewSection from '@/components/uz/implant/WhyBestNewSection';
import InHouseLabSection from '@/components/uz/implant/InHouseLabSection';
import AfterCareSection from '@/components/uz/implant/AfterCareSection';
import SpecialTechSection from '@/components/uz/implant/SpecialTechSection';
import SpeedSection from '@/components/uz/implant/SpeedSection';
import DigitalGuideSection from '@/components/uz/implant/DigitalGuideSection';
import BeforeAfterSection from '@/components/uz/implant/BeforeAfterSection';
import RealPatientResultsSection from '@/components/uz/implant/RealPatientResultsSection';
import SkillDifferenceSection from '@/components/uz/implant/SkillDifferenceSection';
import WarrantySection from '@/components/uz/implant/WarrantySection';
import DoctorSection from '@/components/uz/DoctorSection';
import WhyBestSection from '@/components/uz/WhyBestSection';
import LocationSection from '@/components/uz/LocationSection';
import YouTubeSection from '@/components/uz/YouTubeSection';
import FAQSection from '@/components/uz/FAQSection';

export const metadata: Metadata = {
  title: 'Koreya Pusan Implant Stomatologiya | Kyungsung Medis Dental',
  description: '10 yil davomida 0 ta qayta implant operatsiyasi. Pusan Nam-gu 1-o\'rin, 1,500+ raqamli implant operatsiyasi. Bosh shifokor 3 bosqichli vaqtinchalik tish tizimi bilan bevosita davolaydi.',
  keywords: [
    'Koreya implant',
    'Pusan implant',
    'Koreya implant mutaxassisi',
    'Raqamli implant',
    'Implant operatsiyasi Koreya',
    'Koreya stomatologiya implant',
    'Pusan stomatologiya implant',
    'O\'zbek implant Pusan',
    'Koreya stomatologiya turizmi'
  ],
  alternates: {
    canonical: 'https://medisksu.co.kr/uz/implant',
  },
  openGraph: {
    title: 'Koreya Pusan Implant Stomatologiya | Kyungsung Medis Dental',
    description: '10 yil davomida 0 ta qayta implant operatsiyasi. Pusan Nam-gu 1-o\'rin, 1,500+ raqamli implant operatsiyasi.',
    url: 'https://medisksu.co.kr/uz/implant',
    type: 'website',
    locale: 'uz_UZ',
  }
};

export default function ImplantPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <GNB />
      <FixedCTAButton />

      <div className="h-[52px]" />

      <ImplantHero />
      <StatsSection />
      <VideoSection />
      <ThreeStepNewSection />
      <WhyBestNewSection />
      <InHouseLabSection />
      <AfterCareSection />
      <SpecialTechSection />
      <SpeedSection />
      <DigitalGuideSection />
      <BeforeAfterSection />
      <RealPatientResultsSection />
      <SkillDifferenceSection />
      <WarrantySection />
      <DoctorSection />
      <WhyBestSection />
      <LocationSection />
      <YouTubeSection />
      <FAQSection page="home" />
      <FooterSection />

      <div className="h-[88px]" />
    </main>
  );
}

