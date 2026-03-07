import { Metadata } from 'next';
import GNB from '@/components/vi/GNB';
import FixedCTAButton from '@/components/vi/FixedCTAButton';
import WisdomToothHero from '@/components/vi/wisdom-tooth/WisdomToothHero';
import WisdomToothStats from '@/components/vi/wisdom-tooth/WisdomToothStats';
import ImportantMomentsSection from '@/components/vi/wisdom-tooth/ImportantMomentsSection';
import SymptomsSection from '@/components/vi/wisdom-tooth/SymptomsSection';
import VideoSection from '@/components/vi/wisdom-tooth/VideoSection';
import CheckupSection from '@/components/vi/wisdom-tooth/CheckupSection';
import RiskLevelsSection from '@/components/vi/wisdom-tooth/RiskLevelsSection';
import FeaturesSection from '@/components/vi/wisdom-tooth/FeaturesSection';
// import SedationSection from '@/components/vi/cavity-treatment/SedationSection';
import WhyNowSection from '@/components/vi/wisdom-tooth/WhyNowSection';
import FooterSection from '@/components/vi/FooterSection';
import DoctorSection from '@/components/vi/DoctorSection';
import WhyBestSection from '@/components/vi/WhyBestSection';
import LocationSection from '@/components/vi/LocationSection';
import FAQSection from '@/components/vi/FAQSection';
import YouTubeSection from '@/components/vi/YouTubeSection';

export const metadata: Metadata = {
  title: 'Nha khoa Nhổ răng khôn Busan Hàn Quốc | Kyungsung Medis Dental',
  description: '2,700+ ca nhổ răng khôn độ khó cao với 0 biến chứng. Số 1 quận Nam Busan. Bác sĩ trưởng trực tiếp nhổ răng khôn ngầm với tùy chọn gây mê nhẹ.',
  keywords: [
    'nhổ răng khôn Hàn Quốc',
    'nhổ răng khôn Busan',
    'răng khôn ngầm Hàn Quốc',
    'phẫu thuật răng khôn Busan',
    'gây mê nhẹ Hàn Quốc',
    'nha khoa răng khôn Busan',
    'nhổ răng khôn an toàn',
    'du lịch nha khoa Hàn Quốc',
    'răng khôn tiếng Việt Busan'
  ],
  alternates: {
    canonical: 'https://medisksu.co.kr/vi/wisdom-tooth',
  },
  openGraph: {
    title: 'Nha khoa Nhổ răng khôn Busan Hàn Quốc | Kyungsung Medis Dental',
    description: '2,700+ ca nhổ răng khôn độ khó cao với 0 biến chứng. Số 1 quận Nam Busan. Bác sĩ trưởng trực tiếp điều trị.',
    url: 'https://medisksu.co.kr/vi/wisdom-tooth',
    type: 'website',
    locale: 'vi_VN',
  }
};

export default function WisdomToothPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white">
      <GNB />
      <FixedCTAButton />

      {/* Add spacing for fixed GNB */}
      <div className="h-[52px]" />

      {/* Hero Section */}
      <WisdomToothHero />

      {/* Stats Section */}
      <WisdomToothStats />

      {/* Video Section */}
      <VideoSection />

      {/* Important Moments Section */}
      <ImportantMomentsSection />

      {/* Symptoms Section */}
      <SymptomsSection />

      {/* Checkup Section */}
      <CheckupSection />

      {/* Risk Levels Section */}
      <RiskLevelsSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Sedation Section - Conscious Sedation */}
      {/* <SedationSection /> */}

      {/* Why Now Section */}
      <WhyNowSection />

      {/* Doctor Section */}
      <DoctorSection />
      <WhyBestSection />
      <LocationSection />
      <YouTubeSection />
      <FAQSection page="wisdom-tooth" />

      <FooterSection />
    </main>
  );
}
