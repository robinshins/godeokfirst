import type { Metadata } from 'next';
import GNB from '@/components/cn/GNB';
import FixedCTAButton from '@/components/cn/FixedCTAButton';
import FooterSection from '@/components/cn/FooterSection';

import HeroSection from '@/components/cn/cavity-treatment/HeroSection';
import BeforeAfterSection from '@/components/cn/cavity-treatment/BeforeAfterSection';
import QuestionSection from '@/components/cn/cavity-treatment/QuestionSection';
import TreatmentMethodsSection from '@/components/cn/cavity-treatment/TreatmentMethodsSection';
import OneDayInlaySection from '@/components/cn/cavity-treatment/OneDayInlaySection';
// import SedationSection from '@/components/cn/cavity-treatment/SedationSection';
import DoctorProfileSection from '@/components/cn/cavity-treatment/DoctorProfileSection';
import ComparisonSection from '@/components/cn/cavity-treatment/ComparisonSection';
import CasesSection from '@/components/cn/cavity-treatment/CasesSection';
import BlogColumnSection from '@/components/cn/cavity-treatment/BlogColumnSection';
import DoctorSection from '@/components/cn/DoctorSection';
import WhyBestSection from '@/components/cn/WhyBestSection';
import LocationSection from '@/components/cn/LocationSection';
import FAQSection from '@/components/cn/FAQSection';
// import VideoSection from '@/components/cn/cavity-treatment/VideoSection';

export const metadata: Metadata = {
  title: '高德龋齿治疗 | 高德First牙科',
  description: '平泽·高德 龋齿治疗专业牙科. 综合牙科专家亲自治疗. 树脂、嵌体、根管治疗、TRIOS5数字扫描.',
  alternates: {
    canonical: 'https://gdfirstdent.co.kr/cn/cavity-treatment',
  },
  openGraph: {
    title: '高德龋齿治疗 | 高德First牙科',
    description: '平泽·高德 龋齿治疗专业牙科. 综合牙科专家亲自治疗.',
    url: 'https://gdfirstdent.co.kr/cn/cavity-treatment',
    siteName: '高德First牙科',
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

      {/* Hero Section */}
      <HeroSection />

      {/* Video Section */}
      {/* <VideoSection /> */}

      {/* Cases Section */}
      <CasesSection />


      {/* Blog Column Section */}
      <BlogColumnSection />


      {/* Question Section */}
      <QuestionSection />

      {/* Treatment Methods Section */}
      <TreatmentMethodsSection />

      {/* One Day Inlay Section */}
      <OneDayInlaySection />


      {/* Sedation Section */}
      {/* <SedationSection /> */}

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
