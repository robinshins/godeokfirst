import type { Metadata } from 'next';
import GNB from '@/components/ru/GNB';
import FixedCTAButton from '@/components/ru/FixedCTAButton';
import FooterSection from '@/components/ru/FooterSection';
import HeroSection from '@/components/ru/gum-care/HeroSection';
import StatsSection from '@/components/ru/gum-care/StatsSection';
import VideoSection from '@/components/ru/gum-care/VideoSection';
import RiskSection from '@/components/ru/gum-care/RiskSection';
import PhilosophySection from '@/components/ru/gum-care/PhilosophySection';
import ComparisonSection from '@/components/ru/gum-care/ComparisonSection';
import TreatmentSystemSection from '@/components/ru/gum-care/TreatmentSystemSection';
import CaseStudiesSection from '@/components/ru/gum-care/CaseStudiesSection';
import DoctorSection from '@/components/ru/DoctorSection';
import WhyBestSection from '@/components/ru/WhyBestSection';
import LocationSection from '@/components/ru/LocationSection';
import FAQSection from '@/components/ru/FAQSection';
import YouTubeSection from '@/components/ru/YouTubeSection';

export const metadata: Metadata = {
  title: 'Корея Пусан Лечение Десен Стоматология | Кёнсон Медис',
  description: 'Профессиональное лечение пародонтита и десен. №1 в Намгу Пусан. Главный врач проводит скейлинг, глубокую чистку, современное цифровое оборудование.',
  keywords: [
    'лечение десен Корея',
    'лечение десен Пусан',
    'пародонтит Корея',
    'скейлинг Корея',
    'лечение пародонтоза Корея',
    'гингивит лечение Корея',
    'русскоговорящий стоматолог Корея',
    'стоматологический туризм Корея'
  ],
  alternates: {
    canonical: 'https://gdfirstdent.com/ru/gum-care',
  },
  openGraph: {
    title: 'Корея Пусан Лечение Десен Стоматология | Кёнсон Медис',
    description: 'Профессиональное лечение пародонтита и десен. №1 в Намгу Пусан.',
    url: 'https://gdfirstdent.com/ru/gum-care',
    type: 'website',
    locale: 'ru_RU',
  },
};

export default function GumCarePage() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <GNB />
      <FixedCTAButton />

      {/* Add spacing for fixed GNB */}
      <div className="h-[52px]" />

      <HeroSection />
      <StatsSection />
      <VideoSection />
      <RiskSection />
      <PhilosophySection />
      <ComparisonSection />
      <TreatmentSystemSection />
      <CaseStudiesSection />

      <DoctorSection />
      <WhyBestSection />
      <LocationSection />
      <YouTubeSection />
      <FAQSection page="gum-care" />

      {/* Footer */}
      <FooterSection />
    </main>
  );
}

