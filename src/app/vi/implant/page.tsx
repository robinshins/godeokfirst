import { Metadata } from 'next';
import GNB from '@/components/vi/GNB';
import FixedCTAButton from '@/components/vi/FixedCTAButton';
import FooterSection from '@/components/vi/FooterSection';

import ImplantHero from '@/components/vi/implant/ImplantHero';
import StatsSection from '@/components/vi/implant/StatsSection';
import VideoSection from '@/components/vi/implant/VideoSection';
import ThreeStepNewSection from '@/components/vi/implant/ThreeStepNewSection';
import WhyBestNewSection from '@/components/vi/implant/WhyBestNewSection';
import InHouseLabSection from '@/components/vi/implant/InHouseLabSection';
import AfterCareSection from '@/components/vi/implant/AfterCareSection';
import SpecialTechSection from '@/components/vi/implant/SpecialTechSection';
import SpeedSection from '@/components/vi/implant/SpeedSection';
import DigitalGuideSection from '@/components/vi/implant/DigitalGuideSection';
import BeforeAfterSection from '@/components/vi/implant/BeforeAfterSection';
import RealPatientResultsSection from '@/components/vi/implant/RealPatientResultsSection';
import SkillDifferenceSection from '@/components/vi/implant/SkillDifferenceSection';
// import SedationSection from '@/components/vi/cavity-treatment/SedationSection';
import WarrantySection from '@/components/vi/implant/WarrantySection';
import DoctorSection from '@/components/vi/DoctorSection';
import WhyBestSection from '@/components/vi/WhyBestSection';
import LocationSection from '@/components/vi/LocationSection';
import YouTubeSection from '@/components/vi/YouTubeSection';
import FAQSection from '@/components/vi/FAQSection';

export const metadata: Metadata = {
  title: 'Nha khoa Cấy ghép Implant Busan Hàn Quốc | Kyungsung Medis Dental',
  description: '10 năm 0 ca tái phẫu thuật implant. Số 1 quận Nam Busan với 1,500+ ca phẫu thuật implant kỹ thuật số. Bác sĩ trưởng trực tiếp điều trị với quy trình răng tạm 3 giai đoạn.',
  keywords: [
    'cấy ghép implant Hàn Quốc',
    'implant Busan',
    'implant Hàn Quốc',
    'phẫu thuật implant Hàn Quốc',
    'implant kỹ thuật số',
    'nha khoa implant Busan',
    'chuyên gia implant Hàn Quốc',
    'du lịch nha khoa Hàn Quốc',
    'implant tiếng Việt Busan'
  ],
  alternates: {
    canonical: 'https://medisksu.co.kr/vi/implant',
  },
  openGraph: {
    title: 'Nha khoa Cấy ghép Implant Busan Hàn Quốc | Kyungsung Medis Dental',
    description: '10 năm 0 ca tái phẫu thuật implant. Số 1 quận Nam Busan với 1,500+ ca phẫu thuật implant kỹ thuật số. Bác sĩ trưởng trực tiếp điều trị.',
    url: 'https://medisksu.co.kr/vi/implant',
    type: 'website',
    locale: 'vi_VN',
  }
};

export default function ImplantPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <GNB />
      <FixedCTAButton />

      {/* Add spacing for fixed GNB */}
      <div className="h-[52px]" />

      {/* Hero Section */}
      <ImplantHero />

      {/* Stats Section */}
      <StatsSection />

      {/* Video Section */}
      <VideoSection />

      {/* Why Best Section */}
      <WhyBestNewSection />

      {/* Sedation Section */}
      {/* <SedationSection /> */}

      {/* Three Step Section */}
      <ThreeStepNewSection />

      {/* Speed Section */}
      <SpeedSection />

      {/* In-House Lab Section */}
      <InHouseLabSection />

      {/* After Care Section */}
      <AfterCareSection />

      {/* Special Tech Section */}
      <SpecialTechSection />

      {/* Digital Guide Section */}
      <DigitalGuideSection />

      {/* Before/After Section */}
      <BeforeAfterSection />

      {/* Real Patient Results Section */}
      <RealPatientResultsSection />

      {/* Skill Difference Section */}
      <SkillDifferenceSection />

      {/* Warranty Section */}
      <WarrantySection />

      <DoctorSection />
      <WhyBestSection />
      <LocationSection />
      <YouTubeSection />
      <FAQSection page="implant" />

      {/* Footer */}
      <FooterSection />

      {/* Add spacing for fixed bottom button */}
      <div className="h-[88px]" />
    </main>
  );
}
