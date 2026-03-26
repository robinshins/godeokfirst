'use client';

import GNB from '@/components/th/GNB';
import FixedCTAButton from '@/components/th/FixedCTAButton';
import WisdomToothHero from '@/components/th/wisdom-tooth/WisdomToothHero';
import WisdomToothStats from '@/components/th/wisdom-tooth/WisdomToothStats';
import BeforeAfterSection from '@/components/th/wisdom-tooth/BeforeAfterSection';
import ImportantMomentsSection from '@/components/th/wisdom-tooth/ImportantMomentsSection';
import SymptomsSection from '@/components/th/wisdom-tooth/SymptomsSection';
import CheckupSection from '@/components/th/wisdom-tooth/CheckupSection';
import RiskLevelsSection from '@/components/th/wisdom-tooth/RiskLevelsSection';
import FeaturesSection from '@/components/th/wisdom-tooth/FeaturesSection';
import WhyNowSection from '@/components/th/wisdom-tooth/WhyNowSection';
import FooterSection from '@/components/th/FooterSection';
import DoctorSection from '@/components/th/DoctorSection';
import SloganSection from '@/components/th/SloganSection';
import WhyBestSection from '@/components/th/WhyBestSection';
import LocationSection from '@/components/th/LocationSection';
import FAQSection from '@/components/th/FAQSection';

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
