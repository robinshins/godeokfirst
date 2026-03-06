import { Metadata } from 'next';
import GNB from '@/components/mn/GNB';
import HeroSection from '@/components/mn/HeroSection';
import StatsSection from '@/components/mn/StatsSection';
import TreatmentSection from '@/components/mn/TreatmentSection';
import DoctorSection from '@/components/mn/DoctorSection';
import FAQSection from '@/components/mn/FAQSection';
import WhyBestSection from '@/components/mn/WhyBestSection';
import LocationSection from '@/components/mn/LocationSection';
import YouTubeSection from '@/components/mn/YouTubeSection';
import CTASection from '@/components/mn/CTASection';
import FooterSection from '@/components/mn/FooterSection';
import FixedCTAButton from '@/components/mn/FixedCTAButton';

export const metadata: Metadata = {
  title: 'Солонгос Пусан Шүдний Эмнэлэг | Кёнсон Мэдиш',
  description: '10 жилийн турш 0 удаагийн давтан хагалгаа. Пусан Нам-гу 1-рт, 1,500+ имплант ба 2,700+ хавирга шүд авалт. Эрхлэгч эмч шууд эмчилнэ.',
  keywords: [
    'Солонгос Пусан шүдний эмнэлэг',
    'Пусан шүдний эмнэлэг',
    'Солонгос шүдний эмнэлэг',
    'Монгол шүдний эмнэлэг Пусан',
    'Солонгос имплант',
    'Пусан имплант',
    'Пусан шүд цайруулах',
    'Пусан хавирга шүд',
    'Солонгос шүдний аялал'
  ],
  alternates: {
    canonical: 'https://medisksu.co.kr/mn',
  },
  openGraph: {
    title: 'Солонгос Пусан Шүдний Эмнэлэг | Кёнсон Мэдиш',
    description: '10 жилийн турш 0 удаагийн давтан хагалгаа. Пусан Нам-гу 1-рт, 1,500+ имплант ба 2,700+ хавирга шүд авалт.',
    url: 'https://medisksu.co.kr/mn',
    locale: 'mn_MN'
  }
};

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <GNB />
      <FixedCTAButton />

      {/* Add spacing for fixed GNB */}
      <div className="h-[52px]" />

      <HeroSection />
      <StatsSection />
      <TreatmentSection />
      <DoctorSection />
      <WhyBestSection />
      <LocationSection />
      <YouTubeSection />
      <FAQSection page="home" />
      <CTASection />
      <FooterSection />

      {/* Add spacing for fixed bottom button */}
      <div className="h-[88px]" />
    </main>
  );
}

