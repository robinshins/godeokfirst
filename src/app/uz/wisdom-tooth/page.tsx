'use client';

import GNB from '@/components/uz/GNB';
import FixedCTAButton from '@/components/uz/FixedCTAButton';
import WisdomToothHero from '@/components/uz/wisdom-tooth/WisdomToothHero';
import WisdomToothStats from '@/components/uz/wisdom-tooth/WisdomToothStats';
import BeforeAfterSection from '@/components/uz/wisdom-tooth/BeforeAfterSection';
import ImportantMomentsSection from '@/components/uz/wisdom-tooth/ImportantMomentsSection';
import SymptomsSection from '@/components/uz/wisdom-tooth/SymptomsSection';
import CheckupSection from '@/components/uz/wisdom-tooth/CheckupSection';
import RiskLevelsSection from '@/components/uz/wisdom-tooth/RiskLevelsSection';
import FeaturesSection from '@/components/uz/wisdom-tooth/FeaturesSection';
import WhyNowSection from '@/components/uz/wisdom-tooth/WhyNowSection';
import FooterSection from '@/components/uz/FooterSection';
import DoctorSection from '@/components/uz/DoctorSection';
import SloganSection from '@/components/uz/SloganSection';
import WhyBestSection from '@/components/uz/WhyBestSection';
import LocationSection from '@/components/uz/LocationSection';
import FAQSection from '@/components/uz/FAQSection';

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
