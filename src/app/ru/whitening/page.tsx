import type { Metadata } from 'next';
import GNB from '@/components/ru/GNB';
import FixedCTAButton from '@/components/ru/FixedCTAButton';
import FooterSection from '@/components/ru/FooterSection';
import WhiteningHero from '@/components/ru/whitening/WhiteningHero';
import WhiteningStats from '@/components/ru/whitening/WhiteningStats';
import ToothDiscolorationSection from '@/components/ru/whitening/ToothDiscolorationSection';
import WhiteningVideoSection from '@/components/ru/whitening/WhiteningVideoSection';
import WhiteningLaminateSection from '@/components/ru/whitening/WhiteningLaminateSection';
import WhiteningPeroxideSection from '@/components/ru/whitening/WhiteningPeroxideSection';
import SelfVsProfessionalSection from '@/components/ru/whitening/SelfVsProfessionalSection';
import WhiteningComparisonSection from '@/components/ru/whitening/WhiteningComparisonSection';
import CaseStudySection from '@/components/ru/whitening/CaseStudySection';
import PromotionSection from '@/components/ru/whitening/PromotionSection';
import DoctorSection from '@/components/ru/DoctorSection';
import WhyBestSection from '@/components/ru/WhyBestSection';
import LocationSection from '@/components/ru/LocationSection';
import FAQSection from '@/components/ru/FAQSection';
import YouTubeSection from '@/components/ru/YouTubeSection';

export const metadata: Metadata = {
  title: 'Корея Пусан Отбеливание Стоматология | Кёнсон Медис',
  description: '1,000+ процедур отбеливания, 0 побочных эффектов. №1 в Намгу Пусан. Главный врач проводит профессиональное отбеливание и цифровые ламинаты.',
  keywords: [
    'отбеливание зубов Корея',
    'отбеливание Пусан',
    'ламинаты Корея',
    'виниры Корея',
    'отбеливание зубов Корея',
    'профессиональное отбеливание Корея',
    'русскоговорящий стоматолог Корея',
    'стоматологический туризм Корея'
  ],
  alternates: {
    canonical: 'https://medisksu.co.kr/ru/whitening',
  },
  openGraph: {
    title: 'Корея Пусан Отбеливание Стоматология | Кёнсон Медис',
    description: '1,000+ процедур отбеливания, 0 побочных эффектов. №1 в Намгу Пусан.',
    url: 'https://medisksu.co.kr/ru/whitening',
    type: 'website',
    locale: 'ru_RU',
  },
};

export default function WhiteningPage() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <GNB />
      <FixedCTAButton />

      {/* Add spacing for fixed GNB */}
      <div className="h-[52px]" />

      <WhiteningHero />
      <WhiteningStats />
      <ToothDiscolorationSection />
      <WhiteningVideoSection />
      <WhiteningLaminateSection />
      <WhiteningPeroxideSection />
      <SelfVsProfessionalSection />
      <WhiteningComparisonSection />
      <CaseStudySection />
      <PromotionSection />

      <DoctorSection />
      <WhyBestSection />
      <LocationSection />
      <YouTubeSection />
      <FAQSection page="whitening" />

      {/* Footer */}
      <FooterSection />
    </main>
  );
}

