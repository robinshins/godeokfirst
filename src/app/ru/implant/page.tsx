import { Metadata } from 'next';
import GNB from '@/components/ru/GNB';
import FixedCTAButton from '@/components/ru/FixedCTAButton';
import FooterSection from '@/components/ru/FooterSection';

import ImplantHero from '@/components/ru/implant/ImplantHero';
import StatsSection from '@/components/ru/implant/StatsSection';
import VideoSection from '@/components/ru/implant/VideoSection';
import ThreeStepNewSection from '@/components/ru/implant/ThreeStepNewSection';
import WhyBestNewSection from '@/components/ru/implant/WhyBestNewSection';
import InHouseLabSection from '@/components/ru/implant/InHouseLabSection';
import AfterCareSection from '@/components/ru/implant/AfterCareSection';
import SpecialTechSection from '@/components/ru/implant/SpecialTechSection';
import SpeedSection from '@/components/ru/implant/SpeedSection';
import DigitalGuideSection from '@/components/ru/implant/DigitalGuideSection';
import BeforeAfterSection from '@/components/ru/implant/BeforeAfterSection';
import RealPatientResultsSection from '@/components/ru/implant/RealPatientResultsSection';
import SkillDifferenceSection from '@/components/ru/implant/SkillDifferenceSection';
import WarrantySection from '@/components/ru/implant/WarrantySection';
import DoctorSection from '@/components/ru/DoctorSection';
import WhyBestSection from '@/components/ru/WhyBestSection';
import LocationSection from '@/components/ru/LocationSection';
import YouTubeSection from '@/components/ru/YouTubeSection';
import FAQSection from '@/components/ru/FAQSection';

export const metadata: Metadata = {
  title: 'Корея Пусан Имплантация Стоматология | Кёнсон Медис',
  description: '0 повторных операций за 10 лет, 1,500+ цифровых имплантаций. №1 в Намгу Пусан. Главный врач проводит 3-этапную систему временных зубов и цифровую навигационную хирургию.',
  keywords: [
    'имплантация зубов Корея',
    'имплантация Пусан',
    'имплантолог Корея',
    'цифровая имплантация',
    'имплантация зубов Корея',
    'корейская имплантация',
    'русскоговорящий имплантолог Корея',
    'стоматологический туризм Корея'
  ],
  alternates: {
    canonical: 'https://gdfirstdent.com/ru/implant',
  },
  openGraph: {
    title: 'Корея Пусан Имплантация Стоматология | Кёнсон Медис',
    description: '0 повторных операций за 10 лет, 1,500+ цифровых имплантаций. №1 в Намгу Пусан.',
    url: 'https://gdfirstdent.com/ru/implant',
    type: 'website',
    locale: 'ru_RU',
  }
};

export default function ImplantPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <GNB />
      <FixedCTAButton />

      {/* Add spacing for fixed GNB */}
      <div className="h-[52px]" />

      {/* Hero Section */}
      <ImplantHero />

      {/* Stats Section */}
      <StatsSection />

      {/* Video Section */}
      <VideoSection />

      {/* Why Best Section */}
      <WhyBestNewSection />

      {/* Three Step Section */}
      <ThreeStepNewSection />

      {/* Speed Section */}
      <SpeedSection />

      {/* In-House Lab Section */}
      <InHouseLabSection />

      {/* After Care Section */}
      <AfterCareSection />

      {/* Special Tech Section */}
      <SpecialTechSection />

      {/* Digital Guide Section */}
      <DigitalGuideSection />

      {/* Before/After Section */}
      <BeforeAfterSection />

      {/* Real Patient Results Section */}
      <RealPatientResultsSection />

      {/* Skill Difference Section */}
      <SkillDifferenceSection />

      {/* Warranty Section */}
      <WarrantySection />

      <DoctorSection />
      <WhyBestSection />
      <LocationSection />
      <YouTubeSection />
      <FAQSection page="implant" />

      {/* Footer */}
      <FooterSection />

      {/* Add spacing for fixed bottom button */}
      <div className="h-[88px]" />
    </main>
  );
}

