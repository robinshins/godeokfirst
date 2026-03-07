import { Metadata } from 'next';
import GNB from '@/components/en/GNB';
import FixedCTAButton from '@/components/en/FixedCTAButton';
import WisdomToothHero from '@/components/en/wisdom-tooth/WisdomToothHero';
import WisdomToothStats from '@/components/en/wisdom-tooth/WisdomToothStats';
import ImportantMomentsSection from '@/components/en/wisdom-tooth/ImportantMomentsSection';
import SymptomsSection from '@/components/en/wisdom-tooth/SymptomsSection';
import VideoSection from '@/components/en/wisdom-tooth/VideoSection';
import CheckupSection from '@/components/en/wisdom-tooth/CheckupSection';
import RiskLevelsSection from '@/components/en/wisdom-tooth/RiskLevelsSection';
import FeaturesSection from '@/components/en/wisdom-tooth/FeaturesSection';
// import SedationSection from '@/components/en/cavity-treatment/SedationSection';
import WhyNowSection from '@/components/en/wisdom-tooth/WhyNowSection';
import FooterSection from '@/components/en/FooterSection';
import DoctorSection from '@/components/en/DoctorSection';
import WhyBestSection from '@/components/en/WhyBestSection';
import LocationSection from '@/components/en/LocationSection';
import FAQSection from '@/components/en/FAQSection';
import YouTubeSection from '@/components/en/YouTubeSection';

export const metadata: Metadata = {
  title: 'Korean Wisdom Tooth Extraction Busan Korea | Kyungsung Medis Dental',
  description: '2,700+ complex wisdom tooth extractions with 0 complications. #1 in Busan Nam-gu. Head doctor performs impacted wisdom tooth surgery with conscious sedation option.',
  keywords: [
    'wisdom tooth extraction Korea',
    'wisdom tooth Busan',
    'impacted wisdom tooth Korea',
    'wisdom tooth surgery Korea',
    'conscious sedation Korea',
    'dental surgery Busan',
    'wisdom tooth removal Korea',
    'dental tourism wisdom tooth Korea',
    'English dentist wisdom tooth Korea'
  ],
  alternates: {
    canonical: 'https://gdfirstdent.com/en/wisdom-tooth',
  },
  openGraph: {
    title: 'Korean Wisdom Tooth Extraction Busan Korea | Kyungsung Medis Dental',
    description: '2,700+ complex wisdom tooth extractions with 0 complications. #1 in Busan Nam-gu. Head doctor performs all procedures.',
    url: 'https://gdfirstdent.com/en/wisdom-tooth',
    type: 'website',
    locale: 'en_US',
  }
};

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

      {/* Sedation Section - Conscious Sedation */}
      {/* <SedationSection /> */}

      {/* Why Now Section */}
      <WhyNowSection />

      {/* Doctor Section */}
      <DoctorSection />
      <WhyBestSection />
      <LocationSection />
      <YouTubeSection />
      <FAQSection page="wisdom-tooth" />

      <FooterSection />
    </main>
  );
}
