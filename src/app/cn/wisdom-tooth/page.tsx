'use client';

import GNB from '@/components/cn/GNB';
import FixedCTAButton from '@/components/cn/FixedCTAButton';
import WisdomToothHero from '@/components/cn/wisdom-tooth/WisdomToothHero';
import WisdomToothStats from '@/components/cn/wisdom-tooth/WisdomToothStats';
import BeforeAfterSection from '@/components/cn/wisdom-tooth/BeforeAfterSection';
import ImportantMomentsSection from '@/components/cn/wisdom-tooth/ImportantMomentsSection';
import SymptomsSection from '@/components/cn/wisdom-tooth/SymptomsSection';
import CheckupSection from '@/components/cn/wisdom-tooth/CheckupSection';
import RiskLevelsSection from '@/components/cn/wisdom-tooth/RiskLevelsSection';
import FeaturesSection from '@/components/cn/wisdom-tooth/FeaturesSection';
import WhyNowSection from '@/components/cn/wisdom-tooth/WhyNowSection';
import FooterSection from '@/components/cn/FooterSection';
import DoctorSection from '@/components/cn/DoctorSection';
import SloganSection from '@/components/cn/SloganSection';
import WhyBestSection from '@/components/cn/WhyBestSection';
import LocationSection from '@/components/cn/LocationSection';
import FAQSection from '@/components/cn/FAQSection';

export default function WisdomToothPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <GNB />
      <FixedCTAButton />
      <div className="h-[52px]" />
      <WisdomToothHero />
      <WisdomToothStats />
      <BeforeAfterSection />
      <ImportantMomentsSection />
      <SymptomsSection />
      <CheckupSection />
      <RiskLevelsSection />
      <FeaturesSection />
      <WhyNowSection />
      <DoctorSection />
      <SloganSection />
      <WhyBestSection />
      <LocationSection />
      <FAQSection page="home" />
      <FooterSection />
      <div className="h-[88px]" />
    </main>
  );
}
