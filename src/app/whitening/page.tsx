import type { Metadata } from 'next';
import GNB from '@/components/home/GNB';
import FixedCTAButton from '@/components/home/FixedCTAButton';
import FooterSection from '@/components/home/FooterSection';
import WhiteningHero from '@/components/whitening/WhiteningHero';
import WhiteningStats from '@/components/whitening/WhiteningStats';
import ToothDiscolorationSection from '@/components/whitening/ToothDiscolorationSection';
import WhiteningPeroxideSection from '@/components/whitening/WhiteningPeroxideSection';
import SelfVsProfessionalSection from '@/components/whitening/SelfVsProfessionalSection';
import CaseStudySection from '@/components/whitening/CaseStudySection';
import PromotionSection from '@/components/whitening/PromotionSection';
import DoctorSection from '@/components/home/DoctorSection';
import WhyBestSection from '@/components/home/WhyBestSection';
import LocationSection from '@/components/home/LocationSection';

export const metadata: Metadata = {
  title: '고덕치아미백 | 고덕퍼스트치과',
  description: '강동구 고덕 치아미백 전문 치과. 오스템 뷰티스 시스템으로 시리지 않고 안전하게. 통합치의학과 전문의가 직접 진료합니다.',
  alternates: {
    canonical: 'https://godukfirst.com/whitening',
  },
  openGraph: {
    title: '고덕치아미백 | 고덕퍼스트치과',
    description: '강동구 고덕 치아미백 전문 치과. 오스템 뷰티스 시스템으로 시리지 않고 안전하게.',
    url: 'https://godukfirst.com/whitening',
    siteName: '고덕퍼스트치과',
    type: 'website',
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
