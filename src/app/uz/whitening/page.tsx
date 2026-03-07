import type { Metadata } from 'next';
import GNB from '@/components/uz/GNB';
import FixedCTAButton from '@/components/uz/FixedCTAButton';
import FooterSection from '@/components/uz/FooterSection';

import WhiteningHero from '@/components/uz/whitening/WhiteningHero';
import WhiteningStats from '@/components/uz/whitening/WhiteningStats';
import ToothDiscolorationSection from '@/components/uz/whitening/ToothDiscolorationSection';
import WhiteningVideoSection from '@/components/uz/whitening/WhiteningVideoSection';
import WhiteningLaminateSection from '@/components/uz/whitening/WhiteningLaminateSection';
import WhiteningPeroxideSection from '@/components/uz/whitening/WhiteningPeroxideSection';
import SelfVsProfessionalSection from '@/components/uz/whitening/SelfVsProfessionalSection';
import WhiteningComparisonSection from '@/components/uz/whitening/WhiteningComparisonSection';
import CaseStudySection from '@/components/uz/whitening/CaseStudySection';
import PromotionSection from '@/components/uz/whitening/PromotionSection';
import FAQSection from '@/components/uz/FAQSection';
import CTASection from '@/components/uz/CTASection';

export const metadata: Metadata = {
  title: 'Koreya Pusan Tish Oqartirish Stomatologiya | Kyungsung Medis Dental',
  description: '1,000+ oqartirish operatsiyasi 0 ta yon ta\'sir bilan. Pusan Nam-gu 1-o\'rin. Bosh shifokor bevosita professional oqartirish va raqamli laminat qiladi.',
  keywords: [
    'Koreya tish oqartirish',
    'Pusan tish oqartirish',
    'Koreya laminat',
    'Koreya vinir',
    'Professional oqartirish Pusan',
    'Koreya stomatologiya oqartirish',
    'O\'zbek oqartirish Pusan',
    'Koreya stomatologiya turizmi'
  ],
  alternates: {
    canonical: 'https://gdfirstdent.com/uz/whitening',
  },
  openGraph: {
    title: 'Koreya Pusan Tish Oqartirish Stomatologiya | Kyungsung Medis Dental',
    description: '1,000+ oqartirish operatsiyasi 0 ta yon ta\'sir bilan. Pusan Nam-gu 1-o\'rin.',
    url: 'https://gdfirstdent.com/uz/whitening',
    type: 'website',
    locale: 'uz_UZ',
  }
};

export default function WhiteningPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <GNB />
      <FixedCTAButton />

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

      <div className="h-[88px]" />
    </main>
  );
}

