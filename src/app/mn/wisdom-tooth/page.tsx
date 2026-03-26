'use client';

import GNB from '@/components/mn/GNB';
import FixedCTAButton from '@/components/mn/FixedCTAButton';
import WisdomToothHero from '@/components/mn/wisdom-tooth/WisdomToothHero';
import WisdomToothStats from '@/components/mn/wisdom-tooth/WisdomToothStats';
import BeforeAfterSection from '@/components/mn/wisdom-tooth/BeforeAfterSection';
import ImportantMomentsSection from '@/components/mn/wisdom-tooth/ImportantMomentsSection';
import SymptomsSection from '@/components/mn/wisdom-tooth/SymptomsSection';
import CheckupSection from '@/components/mn/wisdom-tooth/CheckupSection';
import RiskLevelsSection from '@/components/mn/wisdom-tooth/RiskLevelsSection';
import FeaturesSection from '@/components/mn/wisdom-tooth/FeaturesSection';
import WhyNowSection from '@/components/mn/wisdom-tooth/WhyNowSection';
import FooterSection from '@/components/mn/FooterSection';
import DoctorSection from '@/components/mn/DoctorSection';
import SloganSection from '@/components/mn/SloganSection';
import WhyBestSection from '@/components/mn/WhyBestSection';
import LocationSection from '@/components/mn/LocationSection';
import FAQSection from '@/components/mn/FAQSection';

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
