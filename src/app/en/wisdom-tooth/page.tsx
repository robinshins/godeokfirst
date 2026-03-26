'use client';

import GNB from '@/components/en/GNB';
import FixedCTAButton from '@/components/en/FixedCTAButton';
import WisdomToothHero from '@/components/en/wisdom-tooth/WisdomToothHero';
import WisdomToothStats from '@/components/en/wisdom-tooth/WisdomToothStats';
import BeforeAfterSection from '@/components/en/wisdom-tooth/BeforeAfterSection';
import ImportantMomentsSection from '@/components/en/wisdom-tooth/ImportantMomentsSection';
import SymptomsSection from '@/components/en/wisdom-tooth/SymptomsSection';
import CheckupSection from '@/components/en/wisdom-tooth/CheckupSection';
import RiskLevelsSection from '@/components/en/wisdom-tooth/RiskLevelsSection';
import FeaturesSection from '@/components/en/wisdom-tooth/FeaturesSection';
import WhyNowSection from '@/components/en/wisdom-tooth/WhyNowSection';
import FooterSection from '@/components/en/FooterSection';
import DoctorSection from '@/components/en/DoctorSection';
import SloganSection from '@/components/en/SloganSection';
import WhyBestSection from '@/components/en/WhyBestSection';
import LocationSection from '@/components/en/LocationSection';
import FAQSection from '@/components/en/FAQSection';

export default function WisdomToothPage() {

  return (
    <main className="min-h-screen overflow-x-hidden">
      <GNB />
      <FixedCTAButton />

      {/* Add spacing for fixed GNB */}
      <div className="h-[52px]" />

      {/* Hero Section */}
      <WisdomToothHero />

      {/* Stats Section */}
      <WisdomToothStats />

      {/* Before/After Section */}
      <BeforeAfterSection />

      {/* Important Moments Section */}
      <ImportantMomentsSection />

      {/* Symptoms Section */}
      <SymptomsSection />

      {/* Checkup Section */}
      <CheckupSection />

      {/* Risk Levels Section */}
      <RiskLevelsSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Why Now Section */}
      <WhyNowSection />

      {/* Common Sections */}
      <DoctorSection />
      <SloganSection />
      <WhyBestSection />
      <LocationSection />
      <FAQSection page="home" />

      {/* Footer */}
      <FooterSection />

      {/* Add spacing for fixed bottom button */}
      <div className="h-[88px]" />
    </main>
  );
}
