import GNB from '@/components/ru/GNB';
import HeroSection from '@/components/ru/HeroSection';
import StatsSection from '@/components/ru/StatsSection';
import TreatmentSection from '@/components/ru/TreatmentSection';
import DoctorSection from '@/components/ru/DoctorSection';
import FAQSection from '@/components/ru/FAQSection';
import WhyBestSection from '@/components/ru/WhyBestSection';
import LocationSection from '@/components/ru/LocationSection';
import YouTubeSection from '@/components/ru/YouTubeSection';
import CTASection from '@/components/ru/CTASection';
import FooterSection from '@/components/ru/FooterSection';
import FixedCTAButton from '@/components/ru/FixedCTAButton';

export const metadata = {
  title: 'Корея Пусан Стоматология | Кёнсон Медис',
  description: '0 повторных операций за 10 лет, №1 в Намгу Пусан. 1,500+ имплантаций, 2,700+ удалений зубов мудрости. Главный врач лечит лично.',
  keywords: [
    'стоматология Корея',
    'стоматология Пусан',
    'имплантация зубов Корея',
    'имплантация Пусан',
    'корейская стоматология',
    'стоматологический туризм Корея',
    'русскоговорящий стоматолог Корея',
    'стоматологическая клиника Корея'
  ],
  alternates: {
    canonical: 'https://gdfirstdent.com/ru',
  },
  openGraph: {
    title: 'Корея Пусан Стоматология | Кёнсон Медис',
    description: '0 повторных операций за 10 лет, №1 в Намгу Пусан. Главный врач лечит лично.',
    url: 'https://gdfirstdent.com/ru',
    type: 'website',
    locale: 'ru_RU'
  }
};

export default function RuHome() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <GNB />
      <FixedCTAButton />

      {/* Add spacing for fixed GNB */}
      <div className="h-[52px]" />

      {/* <Banner /> */}
      <HeroSection />
      <StatsSection />
      <TreatmentSection />
      <DoctorSection />
      <WhyBestSection />
      <LocationSection />
      <YouTubeSection />
      <FAQSection />
      <CTASection />
      <FooterSection />

      {/* Add spacing for fixed bottom button */}
      <div className="h-[88px]" />
    </main>
  );
}
