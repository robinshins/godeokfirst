import type { Metadata } from 'next';
import GNB from '@/components/ru/GNB';
import FixedCTAButton from '@/components/ru/FixedCTAButton';
import FooterSection from '@/components/ru/FooterSection';
import WisdomToothHero from '@/components/ru/wisdom-tooth/WisdomToothHero';
import WisdomToothStats from '@/components/ru/wisdom-tooth/WisdomToothStats';
import VideoSection from '@/components/ru/wisdom-tooth/VideoSection';
import ImportantMomentsSection from '@/components/ru/wisdom-tooth/ImportantMomentsSection';
import SymptomsSection from '@/components/ru/wisdom-tooth/SymptomsSection';
import CheckupSection from '@/components/ru/wisdom-tooth/CheckupSection';
import RiskLevelsSection from '@/components/ru/wisdom-tooth/RiskLevelsSection';
import FeaturesSection from '@/components/ru/wisdom-tooth/FeaturesSection';
import WhyNowSection from '@/components/ru/wisdom-tooth/WhyNowSection';
import DoctorSection from '@/components/ru/DoctorSection';
import WhyBestSection from '@/components/ru/WhyBestSection';
import LocationSection from '@/components/ru/LocationSection';
import FAQSection from '@/components/ru/FAQSection';
import YouTubeSection from '@/components/ru/YouTubeSection';

export const metadata: Metadata = {
  title: 'Корея Пусан Удаление Зуба Мудрости Стоматология | Кёнсон Медис',
  description: '2,700+ удалений зубов мудрости, 0 осложнений. №1 в Намгу Пусан. Главный врач проводит удаление ретинированных зубов с седацией.',
  keywords: [
    'удаление зуба мудрости Корея',
    'зуб мудрости Пусан',
    'удаление зубов Корея',
    'ретинированный зуб мудрости Корея',
    'седация удаление зуба Корея',
    'хирургия зубов Корея',
    'русскоговорящий стоматолог Корея',
    'стоматологический туризм Корея'
  ],
  alternates: {
    canonical: 'https://medisksu.co.kr/ru/wisdom-tooth',
  },
  openGraph: {
    title: 'Корея Пусан Удаление Зуба Мудрости Стоматология | Кёнсон Медис',
    description: '2,700+ удалений зубов мудрости, 0 осложнений. №1 в Намгу Пусан.',
    url: 'https://medisksu.co.kr/ru/wisdom-tooth',
    type: 'website',
    locale: 'ru_RU',
  },
};

export default function WisdomToothPage() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <GNB />
      <FixedCTAButton />

      {/* Add spacing for fixed GNB */}
      <div className="h-[52px]" />

      <WisdomToothHero />
      <WisdomToothStats />
      <VideoSection />
      <ImportantMomentsSection />
      <SymptomsSection />
      <CheckupSection />
      <RiskLevelsSection />
      <FeaturesSection />
      <WhyNowSection />

      <DoctorSection />
      <WhyBestSection />
      <LocationSection />
      <YouTubeSection />
      <FAQSection page="wisdom-tooth" />

      {/* Footer */}
      <FooterSection />
    </main>
  );
}

