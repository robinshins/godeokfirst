import { Metadata } from 'next';
import GNB from '@/components/th/GNB';
import HeroSection from '@/components/th/HeroSection';
import StatsSection from '@/components/th/StatsSection';
import TreatmentSection from '@/components/th/TreatmentSection';
import DoctorSection from '@/components/th/DoctorSection';
import FAQSection from '@/components/th/FAQSection';
import WhyBestSection from '@/components/th/WhyBestSection';
import LocationSection from '@/components/th/LocationSection';
import YouTubeSection from '@/components/th/YouTubeSection';
import CTASection from '@/components/th/CTASection';
import FooterSection from '@/components/th/FooterSection';
import FixedCTAButton from '@/components/th/FixedCTAButton';

export const metadata: Metadata = {
  title: 'รากเทียม ปูซาน เกาหลี | Medis Dental Clinic',
  description: 'คลินิกทันตกรรมในปูซาน เกาหลีใต้ เชี่ยวชาญด้านรากเทียม ฟอกสีฟัน และการดูแลฟันครบวงจร 0 เคสการผ่าตัดซ้ำใน 10 ปี อันดับ 1 ด้านรากเทียมในเขตนัมกู ปูซาน',
  keywords: [
    'ทันตกรรมปูซาน',
    'รากเทียมเกาหลี',
    'ทำฟันที่เกาหลี',
    'รากเทียมปูซาน',
    'ฟอกสีฟันปูซาน',
    'ถอนฟันคุดปูซาน',
    'ทำฟันที่ปูซาน',
    'ทันตกรรมภาษาไทยปูซาน'
  ],
  alternates: {
    canonical: 'https://medisksu.co.kr/th',
  },
  openGraph: {
    title: 'รากเทียม ปูซาน เกาหลี | Medis Dental Clinic',
    description: 'คลินิกทันตกรรมมืออาชีพในปูซาน 0 เคสการผ่าตัดซ้ำใน 10 ปี',
    url: 'https://medisksu.co.kr/th',
    locale: 'th_TH'
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

