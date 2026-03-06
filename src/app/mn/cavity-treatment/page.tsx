import type { Metadata } from 'next';
import GNB from '@/components/mn/GNB';
import FixedCTAButton from '@/components/mn/FixedCTAButton';
import FooterSection from '@/components/mn/FooterSection';

import HeroSection from '@/components/mn/cavity-treatment/HeroSection';
import SedationSection from '@/components/mn/cavity-treatment/SedationSection';
import ComparisonSection from '@/components/mn/cavity-treatment/ComparisonSection';
import OneDayInlaySection from '@/components/mn/cavity-treatment/OneDayInlaySection';
import DoctorProfileSection from '@/components/mn/cavity-treatment/DoctorProfileSection';
import BeforeAfterSection from '@/components/mn/cavity-treatment/BeforeAfterSection';
import QuestionSection from '@/components/mn/cavity-treatment/QuestionSection';
import TreatmentMethodsSection from '@/components/mn/cavity-treatment/TreatmentMethodsSection';
import FAQSection from '@/components/mn/FAQSection';
import CTASection from '@/components/mn/CTASection';
import VideoSection from '@/components/mn/cavity-treatment/VideoSection';

export const metadata: Metadata = {
  title: 'Солонгос Пусан Цоорол Эмчилгээ Шүдний Эмнэлэг | Кёнсон Мэдиш',
  description: 'Орчин үеийн цоорол ба сувгийн эмчилгээ. Пусан Нам-гу 1-рт. Эрхлэгч эмч их сургуулийн түвшний микроскоп ба дижитал тоног төхөөрөмжөөр шууд эмчилнэ.',
  keywords: [
    'Солонгос цоорол эмчилгээ',
    'Пусан цоорол',
    'Солонгос сувгийн эмчилгээ',
    'Шүдний инлей Солонгос',
    'Эндодонт Солонгос',
    'Микроскоп шүдний эмчилгээ Солонгос',
    'Монгол цоорол Пусан',
    'Солонгос шүдний аялал'
  ],
  alternates: {
    canonical: 'https://medisksu.co.kr/mn/cavity-treatment',
  },
  openGraph: {
    title: 'Солонгос Пусан Цоорол Эмчилгээ Шүдний Эмнэлэг | Кёнсон Мэдиш',
    description: 'Орчин үеийн цоорол ба сувгийн эмчилгээ. Пусан Нам-гу 1-рт. Эрхлэгч эмч микроскопоор шууд эмчилнэ.',
    url: 'https://medisksu.co.kr/mn/cavity-treatment',
    type: 'website',
    locale: 'mn_MN',
  }
};

export default function CavityTreatmentPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <GNB />
      <FixedCTAButton />

      {/* Spacing for fixed GNB */}
      <div className="h-[52px]" />

      <HeroSection />
      <VideoSection />
      <SedationSection />
      <ComparisonSection />
      <OneDayInlaySection />
      <DoctorProfileSection />
      <TreatmentMethodsSection />
      <BeforeAfterSection />
      <QuestionSection />
      <FAQSection page="home" />
      <CTASection />
      <FooterSection />

      {/* Spacing for fixed bottom button */}
      <div className="h-[88px]" />
    </main>
  );
}

