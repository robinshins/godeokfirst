import { Metadata } from 'next';
import GNB from '@/components/cn/GNB';
import FixedCTAButton from '@/components/cn/FixedCTAButton';
import FooterSection from '@/components/cn/FooterSection';

import HeroSection from '@/components/cn/cavity-treatment/HeroSection';
import BeforeAfterSection from '@/components/cn/cavity-treatment/BeforeAfterSection';
import QuestionSection from '@/components/cn/cavity-treatment/QuestionSection';
import TreatmentMethodsSection from '@/components/cn/cavity-treatment/TreatmentMethodsSection';
import OneDayInlaySection from '@/components/cn/cavity-treatment/OneDayInlaySection';
import SedationSection from '@/components/cn/cavity-treatment/SedationSection';
import DoctorProfileSection from '@/components/cn/cavity-treatment/DoctorProfileSection';
import ComparisonSection from '@/components/cn/cavity-treatment/ComparisonSection';
import DoctorSection from '@/components/cn/DoctorSection';
import WhyBestSection from '@/components/cn/WhyBestSection';
import LocationSection from '@/components/cn/LocationSection';
import FAQSection from '@/components/cn/FAQSection';
import VideoSection from '@/components/cn/cavity-treatment/VideoSection';

export const metadata: Metadata = {
  title: '韩国釜山龋齿治疗牙科 | 庆星美迪斯牙科',
  description: '先进龋齿和根管治疗。釜山南区第一。院长亲自施术，配备大学医院级显微镜和数字化设备。',
  keywords: [
    '韩国龋齿治疗',
    '釜山龋齿',
    '韩国根管治疗',
    '牙科嵌体韩国',
    '牙髓治疗韩国',
    '显微镜牙科韩国',
    '釜山龋齿治疗',
    '中文龋齿釜山',
    '韩国牙科旅游'
  ],
  alternates: {
    canonical: 'https://medisksu.co.kr/cn/cavity-treatment',
  },
  openGraph: {
    title: '韩国釜山龋齿治疗牙科 | 庆星美迪斯牙科',
    description: '先进龋齿和根管治疗。釜山南区第一。院长亲自施术，配备显微镜。',
    url: 'https://medisksu.co.kr/cn/cavity-treatment',
    type: 'website',
    locale: 'zh_CN',
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
      <SedationSection />

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
