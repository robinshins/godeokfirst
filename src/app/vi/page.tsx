import { Metadata } from 'next';
import GNB from '@/components/vi/GNB';
import HeroSection from '@/components/vi/HeroSection';
import StatsSection from '@/components/vi/StatsSection';
import TreatmentSection from '@/components/vi/TreatmentSection';
import DoctorSection from '@/components/vi/DoctorSection';
import FAQSection from '@/components/vi/FAQSection';
import WhyBestSection from '@/components/vi/WhyBestSection';
import LocationSection from '@/components/vi/LocationSection';
import YouTubeSection from '@/components/vi/YouTubeSection';
import CTASection from '@/components/vi/CTASection';
import FooterSection from '@/components/vi/FooterSection';
import FixedCTAButton from '@/components/vi/FixedCTAButton';

export const metadata: Metadata = {
  title: 'Nha khoa Busan Hàn Quốc | Kyungsung Medis Dental',
  description: '10 năm 0 ca tái phẫu thuật. Số 1 quận Nam Busan với 1,500+ ca implant và 2,700+ ca nhổ răng khôn. Bác sĩ trưởng trực tiếp điều trị với công nghệ kỹ thuật số tiên tiến.',
  keywords: [
    'nha khoa Busan',
    'nha khoa Hàn Quốc',
    'nha khoa tiếng Việt Busan',
    'cấy ghép implant Hàn Quốc',
    'implant Busan',
    'tẩy trắng răng Busan',
    'nhổ răng khôn Busan',
    'điều trị nha khoa Busan',
    'du lịch nha khoa Hàn Quốc'
  ],
  alternates: {
    canonical: 'https://medisksu.co.kr/vi',
  },
  openGraph: {
    title: 'Nha khoa Busan Hàn Quốc | Kyungsung Medis Dental',
    description: '10 năm 0 ca tái phẫu thuật. Số 1 quận Nam Busan với 1,500+ ca implant và 2,700+ ca nhổ răng khôn. Bác sĩ trưởng trực tiếp điều trị.',
    url: 'https://medisksu.co.kr/vi',
    locale: 'vi_VN'
  }
};

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <GNB />
      <FixedCTAButton />

      {/* Add spacing for fixed GNB */}
      <div className="h-[52px]" />

      <HeroSection />
      <StatsSection />
      <TreatmentSection />
      <DoctorSection />
      <WhyBestSection />
      <LocationSection />
      <YouTubeSection />
      <FAQSection page="home" />
      <CTASection />
      <FooterSection />

      {/* Add spacing for fixed bottom button */}
      <div className="h-[88px]" />
    </main>
  );
}
