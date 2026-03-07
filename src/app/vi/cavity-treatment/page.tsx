import { Metadata } from 'next';
import GNB from '@/components/vi/GNB';
import FixedCTAButton from '@/components/vi/FixedCTAButton';
import FooterSection from '@/components/vi/FooterSection';

import HeroSection from '@/components/vi/cavity-treatment/HeroSection';
import BeforeAfterSection from '@/components/vi/cavity-treatment/BeforeAfterSection';
import QuestionSection from '@/components/vi/cavity-treatment/QuestionSection';
import TreatmentMethodsSection from '@/components/vi/cavity-treatment/TreatmentMethodsSection';
import OneDayInlaySection from '@/components/vi/cavity-treatment/OneDayInlaySection';
// import SedationSection from '@/components/vi/cavity-treatment/SedationSection';
import DoctorProfileSection from '@/components/vi/cavity-treatment/DoctorProfileSection';
import ComparisonSection from '@/components/vi/cavity-treatment/ComparisonSection';
import DoctorSection from '@/components/vi/DoctorSection';
import WhyBestSection from '@/components/vi/WhyBestSection';
import LocationSection from '@/components/vi/LocationSection';
import FAQSection from '@/components/vi/FAQSection';
import VideoSection from '@/components/vi/cavity-treatment/VideoSection';

export const metadata: Metadata = {
  title: 'Nha khoa Điều trị sâu răng Busan Hàn Quốc | Kyungsung Medis Dental',
  description: 'Điều trị sâu răng và chữa tủy tiên tiến. Số 1 quận Nam Busan. Bác sĩ trưởng trực tiếp điều trị với kính hiển vi và thiết bị kỹ thuật số cấp bệnh viện đại học.',
  keywords: [
    'điều trị sâu răng Hàn Quốc',
    'điều trị sâu răng Busan',
    'chữa tủy Hàn Quốc',
    'inlay nha khoa Busan',
    'nội nha Hàn Quốc',
    'trám răng Busan',
    'nha khoa kính hiển vi Busan',
    'du lịch nha khoa Hàn Quốc',
    'điều trị sâu răng tiếng Việt Busan'
  ],
  alternates: {
    canonical: 'https://gdfirstdent.com/vi/cavity-treatment',
  },
  openGraph: {
    title: 'Nha khoa Điều trị sâu răng Busan Hàn Quốc | Kyungsung Medis Dental',
    description: 'Điều trị sâu răng và chữa tủy tiên tiến. Số 1 quận Nam Busan. Bác sĩ trưởng trực tiếp điều trị với kính hiển vi.',
    url: 'https://gdfirstdent.com/vi/cavity-treatment',
    type: 'website',
    locale: 'vi_VN',
  }
};

export default function CavityTreatmentPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <GNB />
      <FixedCTAButton />

      {/* Add spacing for fixed GNB */}
      <div className="h-[52px]" />

      {/* Hero Section */}
      <HeroSection />

      {/* Video Section */}
      <VideoSection />

      {/* Before/After Section */}
      <BeforeAfterSection />

      {/* Question Section */}
      <QuestionSection />

      {/* Treatment Methods Section */}
      <TreatmentMethodsSection />

      {/* One Day Inlay Section */}
      <OneDayInlaySection />

      {/* Sedation Section */}
      {/* <SedationSection /> */}

      {/* Doctor Profile Section */}
      <DoctorProfileSection />

      {/* Comparison Section */}
      <ComparisonSection />

      <DoctorSection />
      <WhyBestSection />
      <LocationSection />
      <FAQSection page="cavity-treatment" />

      {/* Footer */}
      <FooterSection />

      {/* Add spacing for fixed bottom button */}
      <div className="h-[88px]" />
    </main>
  );
}
