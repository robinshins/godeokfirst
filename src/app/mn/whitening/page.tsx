import type { Metadata } from 'next';
import GNB from '@/components/mn/GNB';
import FixedCTAButton from '@/components/mn/FixedCTAButton';
import FooterSection from '@/components/mn/FooterSection';

import WhiteningHero from '@/components/mn/whitening/WhiteningHero';
import WhiteningStats from '@/components/mn/whitening/WhiteningStats';
import ToothDiscolorationSection from '@/components/mn/whitening/ToothDiscolorationSection';
import WhiteningVideoSection from '@/components/mn/whitening/WhiteningVideoSection';
import WhiteningLaminateSection from '@/components/mn/whitening/WhiteningLaminateSection';
import WhiteningPeroxideSection from '@/components/mn/whitening/WhiteningPeroxideSection';
import SelfVsProfessionalSection from '@/components/mn/whitening/SelfVsProfessionalSection';
import WhiteningComparisonSection from '@/components/mn/whitening/WhiteningComparisonSection';
import CaseStudySection from '@/components/mn/whitening/CaseStudySection';
import PromotionSection from '@/components/mn/whitening/PromotionSection';
import FAQSection from '@/components/mn/FAQSection';
import CTASection from '@/components/mn/CTASection';

export const metadata: Metadata = {
  title: 'Солонгос Пусан Шүд Цайруулах Шүдний Эмнэлэг | Кёнсон Мэдиш',
  description: '1,000+ цайруулах үйлчилгээ 0 гаж нөлөөгүй. Пусан Нам-гу 1-рт. Эрхлэгч эмч мэргэжлийн цайруулах ба дижитал ламинатаар шууд эмчилнэ.',
  keywords: [
    'Солонгос шүд цайруулах',
    'Пусан шүд цайруулах',
    'Солонгос ламинат',
    'Солонгос винир',
    'Мэргэжлийн цайруулах Пусан',
    'Солонгос шүдний цайруулах',
    'Монгол цайруулах Пусан',
    'Солонгос шүдний аялал'
  ],
  alternates: {
    canonical: 'https://gdfirstdent.com/mn/whitening',
  },
  openGraph: {
    title: 'Солонгос Пусан Шүд Цайруулах Шүдний Эмнэлэг | Кёнсон Мэдиш',
    description: '1,000+ цайруулах үйлчилгээ 0 гаж нөлөөгүй. Пусан Нам-гу 1-рт.',
    url: 'https://gdfirstdent.com/mn/whitening',
    type: 'website',
    locale: 'mn_MN',
  }
};

export default function WhiteningPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <GNB />
      <FixedCTAButton />

      {/* Spacing for fixed GNB */}
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
      <FAQSection page="home" />
      <CTASection />
      <FooterSection />

      {/* Spacing for fixed bottom button */}
      <div className="h-[88px]" />
    </main>
  );
}

