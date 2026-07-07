import type { Metadata } from 'next';
import GNB from '@/components/ru/GNB';
import FixedCTAButton from '@/components/ru/FixedCTAButton';
import FooterSection from '@/components/ru/FooterSection';
import WhiteningHero from '@/components/ru/whitening/WhiteningHero';
import WhiteningStats from '@/components/ru/whitening/WhiteningStats';
import ToothDiscolorationSection from '@/components/ru/whitening/ToothDiscolorationSection';
import WhiteningPeroxideSection from '@/components/ru/whitening/WhiteningPeroxideSection';
import SelfVsProfessionalSection from '@/components/ru/whitening/SelfVsProfessionalSection';
import CaseStudySection from '@/components/ru/whitening/CaseStudySection';
import DoctorSection from '@/components/ru/DoctorSection';
import WhyBestSection from '@/components/ru/WhyBestSection';
import LocationSection from '@/components/ru/LocationSection';

export const metadata: Metadata = {
  title: 'Teeth Whitening Godeok | Godeok First Dental',
  description: 'Pyeongtaek Godeok Teeth whitening specialist. Safe with Osstem Beautis system. Comprehensive Dentistry Specialist treats directly.',
  alternates: {
    canonical: 'https://gdfirstdent.co.kr/ru/whitening',
  },
  openGraph: {
    title: 'Teeth Whitening Godeok | Godeok First Dental',
    description: 'Pyeongtaek Godeok Teeth whitening specialist. Safe with Osstem Beautis system.',
    url: 'https://gdfirstdent.co.kr/ru/whitening',
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

      <DoctorSection />
      <WhyBestSection />
      <LocationSection />
      <FooterSection />
      <div className="h-[88px]" />
    </main>
  );
}
