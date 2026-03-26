'use client';

import GNB from '@/components/ru/GNB';
import FixedCTAButton from '@/components/ru/FixedCTAButton';
import WisdomToothHero from '@/components/ru/wisdom-tooth/WisdomToothHero';
import WisdomToothStats from '@/components/ru/wisdom-tooth/WisdomToothStats';
import BeforeAfterSection from '@/components/ru/wisdom-tooth/BeforeAfterSection';
import ImportantMomentsSection from '@/components/ru/wisdom-tooth/ImportantMomentsSection';
import SymptomsSection from '@/components/ru/wisdom-tooth/SymptomsSection';
import CheckupSection from '@/components/ru/wisdom-tooth/CheckupSection';
import RiskLevelsSection from '@/components/ru/wisdom-tooth/RiskLevelsSection';
import FeaturesSection from '@/components/ru/wisdom-tooth/FeaturesSection';
import WhyNowSection from '@/components/ru/wisdom-tooth/WhyNowSection';
import FooterSection from '@/components/ru/FooterSection';
import DoctorSection from '@/components/ru/DoctorSection';
import SloganSection from '@/components/ru/SloganSection';
import WhyBestSection from '@/components/ru/WhyBestSection';
import LocationSection from '@/components/ru/LocationSection';
import FAQSection from '@/components/ru/FAQSection';

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
