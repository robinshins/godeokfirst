import type { Metadata } from 'next';
import GNB from '@/components/mn/GNB';
import FixedCTAButton from '@/components/mn/FixedCTAButton';
import FooterSection from '@/components/mn/FooterSection';

import WisdomToothHero from '@/components/mn/wisdom-tooth/WisdomToothHero';
import WisdomToothStats from '@/components/mn/wisdom-tooth/WisdomToothStats';
import VideoSection from '@/components/mn/wisdom-tooth/VideoSection';
import ImportantMomentsSection from '@/components/mn/wisdom-tooth/ImportantMomentsSection';
import SymptomsSection from '@/components/mn/wisdom-tooth/SymptomsSection';
import CheckupSection from '@/components/mn/wisdom-tooth/CheckupSection';
import RiskLevelsSection from '@/components/mn/wisdom-tooth/RiskLevelsSection';
import FeaturesSection from '@/components/mn/wisdom-tooth/FeaturesSection';
import WhyNowSection from '@/components/mn/wisdom-tooth/WhyNowSection';
import FAQSection from '@/components/mn/FAQSection';
import CTASection from '@/components/mn/CTASection';

export const metadata: Metadata = {
  title: 'Солонгос Пусан Хавирга Шүд Авалт Шүдний Эмнэлэг | Кёнсон Мэдиш',
  description: '2,700+ хүнд хавирга шүд авалт 0 хүндрэлгүй. Пусан Нам-гу 1-рт. Эрхлэгч эмч унтуулах мэдээгээр дарсан хавирга шүдийг шууд авна.',
  keywords: [
    'Солонгос хавирга шүд',
    'Пусан хавирга шүд',
    'Дарсан хавирга шүд Солонгос',
    'Хавирга шүд хагалгаа Солонгос',
    'Унтуулах мэдээ Солонгос',
    'Солонгос шүдний хагалгаа',
    'Монгол хавирга шүд Пусан',
    'Солонгос шүдний аялал'
  ],
  alternates: {
    canonical: 'https://gdfirstdent.com/mn/wisdom-tooth',
  },
  openGraph: {
    title: 'Солонгос Пусан Хавирга Шүд Авалт Шүдний Эмнэлэг | Кёнсон Мэдиш',
    description: '2,700+ хүнд хавирга шүд авалт 0 хүндрэлгүй. Пусан Нам-гу 1-рт.',
    url: 'https://gdfirstdent.com/mn/wisdom-tooth',
    type: 'website',
    locale: 'mn_MN',
  }
};

export default function WisdomToothPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <GNB />
      <FixedCTAButton />

      {/* Spacing for fixed GNB */}
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

      {/* Spacing for fixed bottom button */}
      <div className="h-[88px]" />
    </main>
  );
}

