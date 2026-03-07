import type { Metadata } from 'next';
import GNB from '@/components/mn/GNB';
import FixedCTAButton from '@/components/mn/FixedCTAButton';
import FooterSection from '@/components/mn/FooterSection';

import ImplantHero from '@/components/mn/implant/ImplantHero';
import StatsSection from '@/components/mn/implant/StatsSection';
import VideoSection from '@/components/mn/implant/VideoSection';
import ThreeStepNewSection from '@/components/mn/implant/ThreeStepNewSection';
import WhyBestNewSection from '@/components/mn/implant/WhyBestNewSection';
import InHouseLabSection from '@/components/mn/implant/InHouseLabSection';
import AfterCareSection from '@/components/mn/implant/AfterCareSection';
import SpecialTechSection from '@/components/mn/implant/SpecialTechSection';
import SpeedSection from '@/components/mn/implant/SpeedSection';
import DigitalGuideSection from '@/components/mn/implant/DigitalGuideSection';
import BeforeAfterSection from '@/components/mn/implant/BeforeAfterSection';
import RealPatientResultsSection from '@/components/mn/implant/RealPatientResultsSection';
import SkillDifferenceSection from '@/components/mn/implant/SkillDifferenceSection';
import WarrantySection from '@/components/mn/implant/WarrantySection';
import DoctorSection from '@/components/mn/DoctorSection';
import WhyBestSection from '@/components/mn/WhyBestSection';
import LocationSection from '@/components/mn/LocationSection';
import YouTubeSection from '@/components/mn/YouTubeSection';
import FAQSection from '@/components/mn/FAQSection';

export const metadata: Metadata = {
  title: 'Солонгос Пусан Имплант Шүдний Эмнэлэг | Кёнсон Мэдиш',
  description: '10 жилийн турш 0 удаагийн давтан имплант хагалгаа. Пусан Нам-гу 1-рт, 1,500+ дижитал имплант хагалгаа. Эрхлэгч эмч 3 шатлалт түр шүдний системээр шууд эмчилнэ.',
  keywords: [
    'Солонгос имплант',
    'Пусан имплант',
    'Солонгос имплант мэргэжилтэн',
    'Дижитал имплант',
    'Имплант хагалгаа Солонгос',
    'Солонгос шүдний имплант',
    'Монгол имплант Пусан',
    'Солонгос шүдний аялал'
  ],
  alternates: {
    canonical: 'https://gdfirstdent.com/mn/implant',
  },
  openGraph: {
    title: 'Солонгос Пусан Имплант Шүдний Эмнэлэг | Кёнсон Мэдиш',
    description: '10 жилийн турш 0 удаагийн давтан имплант хагалгаа. Пусан Нам-гу 1-рт, 1,500+ дижитал имплант хагалгаа.',
    url: 'https://gdfirstdent.com/mn/implant',
    type: 'website',
    locale: 'mn_MN',
  }
};

export default function ImplantPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <GNB />
      <FixedCTAButton />

      {/* Spacing for fixed GNB */}
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

      {/* Spacing for fixed bottom button */}
      <div className="h-[88px]" />
    </main>
  );
}

