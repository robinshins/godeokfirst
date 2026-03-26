'use client';

import GNB from '@/components/vi/GNB';
import FixedCTAButton from '@/components/vi/FixedCTAButton';
import WisdomToothHero from '@/components/vi/wisdom-tooth/WisdomToothHero';
import WisdomToothStats from '@/components/vi/wisdom-tooth/WisdomToothStats';
import BeforeAfterSection from '@/components/vi/wisdom-tooth/BeforeAfterSection';
import ImportantMomentsSection from '@/components/vi/wisdom-tooth/ImportantMomentsSection';
import SymptomsSection from '@/components/vi/wisdom-tooth/SymptomsSection';
import CheckupSection from '@/components/vi/wisdom-tooth/CheckupSection';
import RiskLevelsSection from '@/components/vi/wisdom-tooth/RiskLevelsSection';
import FeaturesSection from '@/components/vi/wisdom-tooth/FeaturesSection';
import WhyNowSection from '@/components/vi/wisdom-tooth/WhyNowSection';
import FooterSection from '@/components/vi/FooterSection';
import DoctorSection from '@/components/vi/DoctorSection';
import SloganSection from '@/components/vi/SloganSection';
import WhyBestSection from '@/components/vi/WhyBestSection';
import LocationSection from '@/components/vi/LocationSection';
import FAQSection from '@/components/vi/FAQSection';

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
