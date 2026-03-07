'use client';

import GNB from '@/components/home/GNB';
import FixedCTAButton from '@/components/home/FixedCTAButton';
import WisdomToothHero from '@/components/wisdom-tooth/WisdomToothHero';
import WisdomToothStats from '@/components/wisdom-tooth/WisdomToothStats';
import ImportantMomentsSection from '@/components/wisdom-tooth/ImportantMomentsSection';
import SymptomsSection from '@/components/wisdom-tooth/SymptomsSection';
import VideoSection from '@/components/wisdom-tooth/VideoSection';
import CheckupSection from '@/components/wisdom-tooth/CheckupSection';
import RiskLevelsSection from '@/components/wisdom-tooth/RiskLevelsSection';
import FeaturesSection from '@/components/wisdom-tooth/FeaturesSection';
// import SedationSection from '@/components/cavity-treatment/SedationSection';
import WhyNowSection from '@/components/wisdom-tooth/WhyNowSection';
import FooterSection from '@/components/home/FooterSection';
import DoctorSection from '@/components/home/DoctorSection';
import WhyBestSection from '@/components/home/WhyBestSection';
import LocationSection from '@/components/home/LocationSection';
import FAQSection from '@/components/home/FAQSection';
import YouTubeSection from '@/components/home/YouTubeSection';

export default function WisdomToothPage() {

  return (
    <main className="min-h-screen overflow-x-hidden bg-white">
      <GNB />
      <FixedCTAButton />

      {/* Add spacing for fixed GNB */}
      <div className="h-[52px]" />

      {/* Hero Section */}
      <WisdomToothHero />

      {/* Stats Section */}
      <WisdomToothStats />

      {/* Video Section */}
      <VideoSection />

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

      {/* Sedation Section - 의식하진정요법 */}
      {/* <SedationSection /> */}

      {/* Why Now Section */}
      <WhyNowSection />

      {/* Doctor Section. 이 아래부터는 모든 페이지 공통임 */}
      <DoctorSection />
      <WhyBestSection />
      <LocationSection />
      <YouTubeSection />
      <FAQSection page="wisdom-tooth" />

      <FooterSection />


    </main>
  );
}