import type { Metadata } from 'next';
import GNB from '@/components/th/GNB';
import FixedCTAButton from '@/components/th/FixedCTAButton';
import FooterSection from '@/components/th/FooterSection';

import WisdomToothHero from '@/components/th/wisdom-tooth/WisdomToothHero';
import WisdomToothStats from '@/components/th/wisdom-tooth/WisdomToothStats';
import VideoSection from '@/components/th/wisdom-tooth/VideoSection';
import ImportantMomentsSection from '@/components/th/wisdom-tooth/ImportantMomentsSection';
import SymptomsSection from '@/components/th/wisdom-tooth/SymptomsSection';
import CheckupSection from '@/components/th/wisdom-tooth/CheckupSection';
import RiskLevelsSection from '@/components/th/wisdom-tooth/RiskLevelsSection';
import FeaturesSection from '@/components/th/wisdom-tooth/FeaturesSection';
import WhyNowSection from '@/components/th/wisdom-tooth/WhyNowSection';

import DoctorSection from '@/components/th/DoctorSection';
import WhyBestSection from '@/components/th/WhyBestSection';
import LocationSection from '@/components/th/LocationSection';
import YouTubeSection from '@/components/th/YouTubeSection';
import FAQSection from '@/components/th/FAQSection';

export const metadata: Metadata = {
  title: 'ถอนฟันคุดปูซาน | Kyungsung Medis Dental',
  description: 'ผู้เชี่ยวชาญการถอนฟันคุดในปูซาน ประสบการณ์ 2,700+ เคส ถอนฟันคุดยากๆ ได้อย่างปลอดภัยและรวดเร็วด้วย 3D CT และระบบยาชาลดความเจ็บปวด 0 เคสผ่าตัดซ้ำใน 10 ปี',
  keywords: [
    'ถอนฟันคุดปูซาน',
    'ผ่าฟันคุดปูซาน',
    'หมอฟันปูซาน',
    'ทันตกรรมปูซาน',
    'คลินิกทันตกรรมปูซาน',
    'ถอนฟันคุดไม่เจ็บปูซาน'
  ],
  alternates: {
    canonical: 'https://gdfirstdent.com/th/wisdom-tooth',
  },
  openGraph: {
    title: 'ถอนฟันคุดปูซาน | Kyungsung Medis Dental',
    description: 'ผู้เชี่ยวชาญการถอนฟันคุดในปูซาน ประสบการณ์ 2,700+ เคส ถอนฟันคุดยากๆ ได้อย่างปลอดภัยและรวดเร็ว',
    url: 'https://gdfirstdent.com/th/wisdom-tooth',
    siteName: 'Kyungsung Medis Dental Clinic',
    locale: 'th_TH',
    type: 'website',
  },
};

export default function WisdomToothPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <GNB />
      <FixedCTAButton />

      {/* Add spacing for fixed GNB */}
      <div className="h-[52px]" />

      <WisdomToothHero />
      <WisdomToothStats />
      <VideoSection />
      <ImportantMomentsSection />
      <SymptomsSection />
      <CheckupSection />
      <RiskLevelsSection />
      <FeaturesSection />
      <WhyNowSection />

      <DoctorSection />
      <WhyBestSection />
      <LocationSection />
      <YouTubeSection />
      <FAQSection page="wisdom-tooth" />

      {/* Footer */}
      <FooterSection />

      {/* Add spacing for fixed bottom button */}
      <div className="h-[88px]" />
    </main>
  );
}

