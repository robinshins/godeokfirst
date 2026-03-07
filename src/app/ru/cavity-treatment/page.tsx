import type { Metadata } from 'next';
import GNB from '@/components/ru/GNB';
import FixedCTAButton from '@/components/ru/FixedCTAButton';
import FooterSection from '@/components/ru/FooterSection';
import HeroSection from '@/components/ru/cavity-treatment/HeroSection';
// import SedationSection from '@/components/ru/cavity-treatment/SedationSection';
import TreatmentMethodsSection from '@/components/ru/cavity-treatment/TreatmentMethodsSection';
import OneDayInlaySection from '@/components/ru/cavity-treatment/OneDayInlaySection';
import BeforeAfterSection from '@/components/ru/cavity-treatment/BeforeAfterSection';
import DoctorProfileSection from '@/components/ru/cavity-treatment/DoctorProfileSection';
import ComparisonSection from '@/components/ru/cavity-treatment/ComparisonSection';
import QuestionSection from '@/components/ru/cavity-treatment/QuestionSection';
import DoctorSection from '@/components/ru/DoctorSection';
import WhyBestSection from '@/components/ru/WhyBestSection';
import LocationSection from '@/components/ru/LocationSection';
import FAQSection from '@/components/ru/FAQSection';
import YouTubeSection from '@/components/ru/YouTubeSection';
import VideoSection from '@/components/ru/cavity-treatment/VideoSection';

export const metadata: Metadata = {
  title: 'Корея Пусан Лечение Кариеса Стоматология | Кёнсон Медис',
  description: 'Современное лечение кариеса и корневых каналов. №1 в Намгу Пусан. Главный врач лечит лично, микроскоп и цифровое оборудование университетского уровня.',
  keywords: [
    'лечение кариеса Корея',
    'лечение кариеса Пусан',
    'лечение корневых каналов Корея',
    'вкладки Корея',
    'эндодонтия Корея',
    'микроскоп стоматология Корея',
    'русскоговорящий стоматолог Корея',
    'стоматологический туризм Корея'
  ],
  alternates: {
    canonical: 'https://medisksu.co.kr/ru/cavity-treatment',
  },
  openGraph: {
    title: 'Корея Пусан Лечение Кариеса Стоматология | Кёнсон Медис',
    description: 'Современное лечение кариеса и корневых каналов. №1 в Намгу Пусан. Микроскоп.',
    url: 'https://medisksu.co.kr/ru/cavity-treatment',
    type: 'website',
    locale: 'ru_RU',
  },
};

export default function CavityTreatmentPage() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <GNB />
      <FixedCTAButton />

      {/* Add spacing for fixed GNB */}
      <div className="h-[52px]" />

      <HeroSection />
      <VideoSection />
      {/* <SedationSection /> */}
      <TreatmentMethodsSection />
      <OneDayInlaySection />
      <BeforeAfterSection />
      <ComparisonSection />
      <DoctorProfileSection />
      <QuestionSection />

      <DoctorSection />
      <WhyBestSection />
      <LocationSection />
      <YouTubeSection />
      <FAQSection page="cavity-treatment" />

      {/* Footer */}
      <FooterSection />
    </main>
  );
}

