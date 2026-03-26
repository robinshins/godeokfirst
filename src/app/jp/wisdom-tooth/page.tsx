'use client';

import GNB from '@/components/jp/GNB';
import FixedCTAButton from '@/components/jp/FixedCTAButton';
import WisdomToothHero from '@/components/jp/wisdom-tooth/WisdomToothHero';
import WisdomToothStats from '@/components/jp/wisdom-tooth/WisdomToothStats';
import BeforeAfterSection from '@/components/jp/wisdom-tooth/BeforeAfterSection';
import ImportantMomentsSection from '@/components/jp/wisdom-tooth/ImportantMomentsSection';
import SymptomsSection from '@/components/jp/wisdom-tooth/SymptomsSection';
import CheckupSection from '@/components/jp/wisdom-tooth/CheckupSection';
import RiskLevelsSection from '@/components/jp/wisdom-tooth/RiskLevelsSection';
import FeaturesSection from '@/components/jp/wisdom-tooth/FeaturesSection';
import WhyNowSection from '@/components/jp/wisdom-tooth/WhyNowSection';
import FooterSection from '@/components/jp/FooterSection';
import DoctorSection from '@/components/jp/DoctorSection';
import SloganSection from '@/components/jp/SloganSection';
import WhyBestSection from '@/components/jp/WhyBestSection';
import LocationSection from '@/components/jp/LocationSection';
import FAQSection from '@/components/jp/FAQSection';

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
