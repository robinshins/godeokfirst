import type { Metadata } from 'next';
import GNB from '@/components/en/GNB';
import FixedCTAButton from '@/components/en/FixedCTAButton';
import FooterSection from '@/components/en/FooterSection';
import WhiteningHero from '@/components/en/whitening/WhiteningHero';
import WhiteningStats from '@/components/en/whitening/WhiteningStats';
import ToothDiscolorationSection from '@/components/en/whitening/ToothDiscolorationSection';
import WhiteningPeroxideSection from '@/components/en/whitening/WhiteningPeroxideSection';
import SelfVsProfessionalSection from '@/components/en/whitening/SelfVsProfessionalSection';
import CaseStudySection from '@/components/en/whitening/CaseStudySection';
import PromotionSection from '@/components/en/whitening/PromotionSection';
import DoctorSection from '@/components/en/DoctorSection';
import WhyBestSection from '@/components/en/WhyBestSection';
import LocationSection from '@/components/en/LocationSection';

export const metadata: Metadata = {
  title: 'Teeth Whitening | Godeok First Dental',
  description: 'Safe teeth whitening with Osstem Beautis System. No sensitivity. Specialist performs directly.',
  alternates: {
    canonical: 'https://gdfirstdent.co.kr/en/whitening',
  },
  openGraph: {
    title: 'Teeth Whitening | Godeok First Dental',
    description: 'Safe teeth whitening with Osstem Beautis System at Godeok First Dental.',
    url: 'https://gdfirstdent.co.kr/en/whitening',
    siteName: 'Godeok First Dental',
    type: 'website',
    images: [
      {
        url: '/고덕og이미지.png',
        width: 1200,
        height: 630,
        alt: 'Godeok First Dental - Teeth Whitening',
      },
    ],
  },
};

export default function WhiteningPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white">
      <GNB />
      <FixedCTAButton />

      <div className="h-[52px]" />

      <WhiteningHero />
      <ToothDiscolorationSection />
      <WhiteningPeroxideSection />
      <SelfVsProfessionalSection />
      <CaseStudySection />
      <PromotionSection />

      <DoctorSection />
      <WhyBestSection />
      <LocationSection />
      <FooterSection />
      <div className="h-[88px]" />
    </main>
  );
}
