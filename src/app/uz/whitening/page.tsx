import type { Metadata } from 'next';
import GNB from '@/components/uz/GNB';
import FixedCTAButton from '@/components/uz/FixedCTAButton';
import FooterSection from '@/components/uz/FooterSection';
import WhiteningHero from '@/components/uz/whitening/WhiteningHero';
import WhiteningStats from '@/components/uz/whitening/WhiteningStats';
import ToothDiscolorationSection from '@/components/uz/whitening/ToothDiscolorationSection';
import WhiteningPeroxideSection from '@/components/uz/whitening/WhiteningPeroxideSection';
import SelfVsProfessionalSection from '@/components/uz/whitening/SelfVsProfessionalSection';
import CaseStudySection from '@/components/uz/whitening/CaseStudySection';
import PromotionSection from '@/components/uz/whitening/PromotionSection';
import DoctorSection from '@/components/uz/DoctorSection';
import WhyBestSection from '@/components/uz/WhyBestSection';
import LocationSection from '@/components/uz/LocationSection';

export const metadata: Metadata = {
  title: 'Teeth Whitening Godeok | Godeok First Dental',
  description: 'Pyeongtaek Godeok Teeth whitening specialist. Safe with Osstem Beautis system. Comprehensive Dentistry Specialist treats directly.',
  alternates: {
    canonical: 'https://gdfirstdent.co.kr/uz/whitening',
  },
  openGraph: {
    title: 'Teeth Whitening Godeok | Godeok First Dental',
    description: 'Pyeongtaek Godeok Teeth whitening specialist. Safe with Osstem Beautis system.',
    url: 'https://gdfirstdent.co.kr/uz/whitening',
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
