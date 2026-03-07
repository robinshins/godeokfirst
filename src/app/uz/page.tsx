import { Metadata } from 'next';
import GNB from '@/components/uz/GNB';
import HeroSection from '@/components/uz/HeroSection';
import StatsSection from '@/components/uz/StatsSection';
import TreatmentSection from '@/components/uz/TreatmentSection';
import DoctorSection from '@/components/uz/DoctorSection';
import FAQSection from '@/components/uz/FAQSection';
import WhyBestSection from '@/components/uz/WhyBestSection';
import LocationSection from '@/components/uz/LocationSection';
import YouTubeSection from '@/components/uz/YouTubeSection';
import CTASection from '@/components/uz/CTASection';
import FooterSection from '@/components/uz/FooterSection';
import FixedCTAButton from '@/components/uz/FixedCTAButton';

export const metadata: Metadata = {
  title: 'Koreya Pusan Stomatologiya | Kyungsung Medis Dental',
  description: '10 yil davomida 0 ta qayta operatsiya. Pusan Nam-gu 1-o\'rin, 1,500+ implant va 2,700+ donolik tishi operatsiyasi. Bosh shifokor bevosita davolaydi.',
  keywords: [
    'Koreya Pusan stomatologiya',
    'Pusan stomatologiya',
    'Koreya stomatologiya klinikasi',
    'O\'zbek stomatologiya Pusan',
    'Koreya implant',
    'Pusan implant',
    'Pusan tish oqartirish',
    'Pusan donolik tishi',
    'Koreya stomatologiya turizmi'
  ],
  alternates: {
    canonical: 'https://gdfirstdent.com/uz',
  },
  openGraph: {
    title: 'Koreya Pusan Stomatologiya | Kyungsung Medis Dental',
    description: '10 yil davomida 0 ta qayta operatsiya. Pusan Nam-gu 1-o\'rin, 1,500+ implant va 2,700+ donolik tishi operatsiyasi.',
    url: 'https://gdfirstdent.com/uz',
    locale: 'uz_UZ'
  }
};

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <GNB />
      <FixedCTAButton />

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

      <div className="h-[88px]" />
    </main>
  );
}

