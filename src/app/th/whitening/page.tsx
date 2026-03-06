import type { Metadata } from 'next';
import GNB from '@/components/th/GNB';
import FixedCTAButton from '@/components/th/FixedCTAButton';
import FooterSection from '@/components/th/FooterSection';

import WhiteningHero from '@/components/th/whitening/WhiteningHero';
import WhiteningStats from '@/components/th/whitening/WhiteningStats';
import ToothDiscolorationSection from '@/components/th/whitening/ToothDiscolorationSection';
import WhiteningVideoSection from '@/components/th/whitening/WhiteningVideoSection';
import WhiteningLaminateSection from '@/components/th/whitening/WhiteningLaminateSection';
import WhiteningPeroxideSection from '@/components/th/whitening/WhiteningPeroxideSection';
import SelfVsProfessionalSection from '@/components/th/whitening/SelfVsProfessionalSection';
import WhiteningComparisonSection from '@/components/th/whitening/WhiteningComparisonSection';
import CaseStudySection from '@/components/th/whitening/CaseStudySection';
import PromotionSection from '@/components/th/whitening/PromotionSection';

import DoctorSection from '@/components/th/DoctorSection';
import WhyBestSection from '@/components/th/WhyBestSection';
import LocationSection from '@/components/th/LocationSection';
import YouTubeSection from '@/components/th/YouTubeSection';
import FAQSection from '@/components/th/FAQSection';

export const metadata: Metadata = {
  title: 'ฟอกสีฟัน & วีเนียร์ปูซาน | Kyungsung Medis Dental',
  description: 'คืนรอยยิ้มขาวสะอาดอย่างมั่นใจด้วยเทคโนโลยีการฟอกสีฟันที่เห็นผลทันที และวีเนียร์ดีไซน์เฉพาะบุคคล 0 เคสผ่าตัดซ้ำใน 10 ปี ปลอดภัยและไม่ทำลายเนื้อฟัน',
  keywords: [
    'ฟอกสีฟันปูซาน',
    'วีเนียร์ปูซาน',
    'ฟันขาวปูซาน',
    'ทันตกรรมความงามปูซาน',
    'หมอฟันปูซาน',
    'คลินิกทันตกรรมปูซาน'
  ],
  alternates: {
    canonical: 'https://medisksu.co.kr/th/whitening',
  },
  openGraph: {
    title: 'ฟอกสีฟัน & วีเนียร์ปูซาน | Kyungsung Medis Dental',
    description: 'คืนรอยยิ้มขาวสะอาดอย่างมั่นใจด้วยเทคโนโลยีการฟอกสีฟันที่เห็นผลทันที',
    url: 'https://medisksu.co.kr/th/whitening',
    siteName: 'Kyungsung Medis Dental Clinic',
    locale: 'th_TH',
    type: 'website',
  },
};

export default function WhiteningPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <GNB />
      <FixedCTAButton />

      {/* Add spacing for fixed GNB */}
      <div className="h-[52px]" />

      <WhiteningHero />
      <WhiteningStats />
      <ToothDiscolorationSection />
      <WhiteningVideoSection />
      <WhiteningLaminateSection />
      <WhiteningPeroxideSection />
      <SelfVsProfessionalSection />
      <WhiteningComparisonSection />
      <CaseStudySection />
      <PromotionSection />

      <DoctorSection />
      <WhyBestSection />
      <LocationSection />
      <YouTubeSection />
      <FAQSection page="whitening" />

      {/* Footer */}
      <FooterSection />

      {/* Add spacing for fixed bottom button */}
      <div className="h-[88px]" />
    </main>
  );
}

