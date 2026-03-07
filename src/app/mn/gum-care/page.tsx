import type { Metadata } from 'next';
import GNB from '@/components/mn/GNB';
import FixedCTAButton from '@/components/mn/FixedCTAButton';
import FooterSection from '@/components/mn/FooterSection';

import HeroSection from '@/components/mn/gum-care/HeroSection';
import StatsSection from '@/components/mn/gum-care/StatsSection';
import VideoSection from '@/components/mn/gum-care/VideoSection';
import RiskSection from '@/components/mn/gum-care/RiskSection';
import PhilosophySection from '@/components/mn/gum-care/PhilosophySection';
import ComparisonSection from '@/components/mn/gum-care/ComparisonSection';
import TreatmentSystemSection from '@/components/mn/gum-care/TreatmentSystemSection';
import CaseStudiesSection from '@/components/mn/gum-care/CaseStudiesSection';
import FAQSection from '@/components/mn/FAQSection';
import CTASection from '@/components/mn/CTASection';

export const metadata: Metadata = {
  title: 'Солонгос Пусан Буйлны Эмчилгээ Шүдний Эмнэлэг | Кёнсон Мэдиш',
  description: 'Мэргэжлийн буйлны өвчин ба парадонтын эмчилгээ. Пусан Нам-гу 1-рт. Эрхлэгч эмч орчин үеийн дижитал тоног төхөөрөмжөөр шууд эмчилнэ.',
  keywords: [
    'Солонгос буйлны эмчилгээ',
    'Пусан буйлны эмчилгээ',
    'Солонгос парадонт',
    'Шүдний чулуу цэвэрлэгээ Солонгос',
    'Буйлны хагалгаа Солонгос',
    'Солонгос шүдний буйл',
    'Монгол буйл Пусан',
    'Солонгос шүдний аялал'
  ],
  alternates: {
    canonical: 'https://gdfirstdent.com/mn/gum-care',
  },
  openGraph: {
    title: 'Солонгос Пусан Буйлны Эмчилгээ Шүдний Эмнэлэг | Кёнсон Мэдиш',
    description: 'Мэргэжлийн буйлны өвчин ба парадонтын эмчилгээ. Пусан Нам-гу 1-рт.',
    url: 'https://gdfirstdent.com/mn/gum-care',
    type: 'website',
    locale: 'mn_MN',
  }
};

export default function GumCarePage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <GNB />
      <FixedCTAButton />

      {/* Spacing for fixed GNB */}
      <div className="h-[52px]" />

      <HeroSection />
      <StatsSection />
      <VideoSection />
      <RiskSection />
      <PhilosophySection />
      <ComparisonSection />
      <TreatmentSystemSection />
      <CaseStudiesSection />
      <FAQSection page="gum" />
      <CTASection />
      <FooterSection />

      {/* Spacing for fixed bottom button */}
      <div className="h-[88px]" />
    </main>
  );
}

