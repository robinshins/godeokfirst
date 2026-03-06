import type { Metadata } from 'next';
import GNB from '@/components/uz/GNB';
import FixedCTAButton from '@/components/uz/FixedCTAButton';
import FooterSection from '@/components/uz/FooterSection';

import WisdomToothHero from '@/components/uz/wisdom-tooth/WisdomToothHero';
import WisdomToothStats from '@/components/uz/wisdom-tooth/WisdomToothStats';
import VideoSection from '@/components/uz/wisdom-tooth/VideoSection';
import ImportantMomentsSection from '@/components/uz/wisdom-tooth/ImportantMomentsSection';
import SymptomsSection from '@/components/uz/wisdom-tooth/SymptomsSection';
import CheckupSection from '@/components/uz/wisdom-tooth/CheckupSection';
import RiskLevelsSection from '@/components/uz/wisdom-tooth/RiskLevelsSection';
import FeaturesSection from '@/components/uz/wisdom-tooth/FeaturesSection';
import WhyNowSection from '@/components/uz/wisdom-tooth/WhyNowSection';
import FAQSection from '@/components/uz/FAQSection';
import CTASection from '@/components/uz/CTASection';

export const metadata: Metadata = {
  title: 'Koreya Pusan Donolik Tishi Stomatologiya | Kyungsung Medis Dental',
  description: '2,700+ murakkab donolik tishi operatsiyasi 0 ta asorat bilan. Pusan Nam-gu 1-o\'rin. Bosh shifokor bevosita uyqu sedatsiyasi bilan ko\'milgan donolik tishini oladi.',
  keywords: [
    'Koreya donolik tishi',
    'Pusan donolik tishi',
    'Ko\'milgan donolik tishi Koreya',
    'Donolik tishi operatsiyasi Koreya',
    'Uyqu sedatsiyasi Koreya',
    'Koreya stomatologiya operatsiyasi',
    'O\'zbek donolik tishi Pusan',
    'Koreya stomatologiya turizmi'
  ],
  alternates: {
    canonical: 'https://medisksu.co.kr/uz/wisdom-tooth',
  },
  openGraph: {
    title: 'Koreya Pusan Donolik Tishi Stomatologiya | Kyungsung Medis Dental',
    description: '2,700+ murakkab donolik tishi operatsiyasi 0 ta asorat bilan. Pusan Nam-gu 1-o\'rin.',
    url: 'https://medisksu.co.kr/uz/wisdom-tooth',
    type: 'website',
    locale: 'uz_UZ',
  }
};

export default function WisdomToothPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <GNB />
      <FixedCTAButton />

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
      <FAQSection page="home" />
      <CTASection />
      <FooterSection />

      <div className="h-[88px]" />
    </main>
  );
}

