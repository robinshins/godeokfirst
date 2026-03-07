import { Metadata } from 'next';
import GNB from '@/components/jp/GNB';
import FixedCTAButton from '@/components/jp/FixedCTAButton';
import WisdomToothHero from '@/components/jp/wisdom-tooth/WisdomToothHero';
import WisdomToothStats from '@/components/jp/wisdom-tooth/WisdomToothStats';
import ImportantMomentsSection from '@/components/jp/wisdom-tooth/ImportantMomentsSection';
import SymptomsSection from '@/components/jp/wisdom-tooth/SymptomsSection';
import VideoSection from '@/components/jp/wisdom-tooth/VideoSection';
import CheckupSection from '@/components/jp/wisdom-tooth/CheckupSection';
import RiskLevelsSection from '@/components/jp/wisdom-tooth/RiskLevelsSection';
import FeaturesSection from '@/components/jp/wisdom-tooth/FeaturesSection';
// import SedationSection from '@/components/jp/cavity-treatment/SedationSection';
import WhyNowSection from '@/components/jp/wisdom-tooth/WhyNowSection';
import FooterSection from '@/components/jp/FooterSection';
import DoctorSection from '@/components/jp/DoctorSection';
import WhyBestSection from '@/components/jp/WhyBestSection';
import LocationSection from '@/components/jp/LocationSection';
import FAQSection from '@/components/jp/FAQSection';
import YouTubeSection from '@/components/jp/YouTubeSection';

export const metadata: Metadata = {
  title: '韓国釜山親知らず抜歯歯科 | 慶星メディス歯科',
  description: '2,700件以上の親知らず抜歯実績、合併症ゼロ。釜山南区No.1。院長が直接施術する埋伏親知らず専門抜歯と意識下鎮静法対応。',
  keywords: [
    '韓国親知らず抜歯',
    '釜山親知らず',
    '韓国親知らず',
    '埋伏親知らず韓国',
    '親知らず手術韓国',
    '意識下鎮静法韓国',
    '日本語対応親知らず抜歯韓国',
    '韓国デンタルツーリズム'
  ],
  alternates: {
    canonical: 'https://gdfirstdent.com/jp/wisdom-tooth',
  },
  openGraph: {
    title: '韓国釜山親知らず抜歯歯科 | 慶星メディス歯科',
    description: '2,700件以上の親知らず抜歯実績、合併症ゼロ。釜山南区No.1。',
    url: 'https://gdfirstdent.com/jp/wisdom-tooth',
    type: 'website',
    locale: 'ja_JP',
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

      {/* Sedation Section - 意識下鎮静法 */}
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
