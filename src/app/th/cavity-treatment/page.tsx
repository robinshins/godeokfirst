import type { Metadata } from 'next';
import GNB from '@/components/th/GNB';
import FixedCTAButton from '@/components/th/FixedCTAButton';
import FooterSection from '@/components/th/FooterSection';

import HeroSection from '@/components/th/cavity-treatment/HeroSection';
// import SedationSection from '@/components/th/cavity-treatment/SedationSection';
import TreatmentMethodsSection from '@/components/th/cavity-treatment/TreatmentMethodsSection';
import OneDayInlaySection from '@/components/th/cavity-treatment/OneDayInlaySection';
import DoctorProfileSection from '@/components/th/cavity-treatment/DoctorProfileSection';
import ComparisonSection from '@/components/th/cavity-treatment/ComparisonSection';
import BeforeAfterSection from '@/components/th/cavity-treatment/BeforeAfterSection';
import QuestionSection from '@/components/th/cavity-treatment/QuestionSection';

import DoctorSection from '@/components/th/DoctorSection';
import WhyBestSection from '@/components/th/WhyBestSection';
import LocationSection from '@/components/th/LocationSection';
import YouTubeSection from '@/components/th/YouTubeSection';
import FAQSection from '@/components/th/FAQSection';
import VideoSection from '@/components/th/cavity-treatment/VideoSection';

export const metadata: Metadata = {
  title: 'รักษาฟันผุปูซาน | Kyungsung Medis Dental',
  description: 'รักษาฟันธรรมชาติของคุณไว้ด้วยกล้องไมโครสโคปและการรักษาอินเลย์ในวันเดียว โดยผู้เชี่ยวชาญด้านการอนุรักษ์ฟัน ลดความเจ็บปวดด้วยระบบการดมยาที่ปลอดภัย',
  keywords: [
    'รักษาฟันผุปูซาน',
    'รักษารากฟันปูซาน',
    'อุดฟันปูซาน',
    'อินเลย์ปูซาน',
    'ทันตกรรมปูซาน',
    'หมอฟันปูซาน',
    'คลินิกทันตกรรมปูซาน'
  ],
  alternates: {
    canonical: 'https://gdfirstdent.com/th/cavity-treatment',
  },
  openGraph: {
    title: 'รักษาฟันผุปูซาน | Kyungsung Medis Dental',
    description: 'รักษาฟันธรรมชาติของคุณไว้ด้วยกล้องไมโครสโคปและการรักษาอินเลย์ในวันเดียว',
    url: 'https://gdfirstdent.com/th/cavity-treatment',
    siteName: 'Kyungsung Medis Dental Clinic',
    locale: 'th_TH',
    type: 'website',
  },
};

export default function CavityTreatmentPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <GNB />
      <FixedCTAButton />

      {/* Add spacing for fixed GNB */}
      <div className="h-[52px]" />

      <HeroSection />
      <VideoSection />
      {/* <SedationSection /> */}
      <TreatmentMethodsSection />
      <OneDayInlaySection />
      <DoctorProfileSection />
      <ComparisonSection />
      <BeforeAfterSection />
      <QuestionSection />

      <DoctorSection />
      <WhyBestSection />
      <LocationSection />
      <YouTubeSection />
      <FAQSection page="cavity-treatment" />

      {/* Footer */}
      <FooterSection />

      {/* Add spacing for fixed bottom button */}
      <div className="h-[88px]" />
    </main>
  );
}

