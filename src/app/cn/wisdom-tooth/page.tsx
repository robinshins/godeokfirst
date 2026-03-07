import { Metadata } from 'next';
import GNB from '@/components/cn/GNB';
import FixedCTAButton from '@/components/cn/FixedCTAButton';
import WisdomToothHero from '@/components/cn/wisdom-tooth/WisdomToothHero';
import WisdomToothStats from '@/components/cn/wisdom-tooth/WisdomToothStats';
import ImportantMomentsSection from '@/components/cn/wisdom-tooth/ImportantMomentsSection';
import SymptomsSection from '@/components/cn/wisdom-tooth/SymptomsSection';
import VideoSection from '@/components/cn/wisdom-tooth/VideoSection';
import CheckupSection from '@/components/cn/wisdom-tooth/CheckupSection';
import RiskLevelsSection from '@/components/cn/wisdom-tooth/RiskLevelsSection';
import FeaturesSection from '@/components/cn/wisdom-tooth/FeaturesSection';
// import SedationSection from '@/components/cn/cavity-treatment/SedationSection';
import WhyNowSection from '@/components/cn/wisdom-tooth/WhyNowSection';
import FooterSection from '@/components/cn/FooterSection';
import DoctorSection from '@/components/cn/DoctorSection';
import WhyBestSection from '@/components/cn/WhyBestSection';
import LocationSection from '@/components/cn/LocationSection';
import FAQSection from '@/components/cn/FAQSection';
import YouTubeSection from '@/components/cn/YouTubeSection';

export const metadata: Metadata = {
  title: '韩国釜山智齿拔除牙科 | 庆星美迪斯牙科',
  description: '2,700件以上高难度智齿拔除，0例并发症。釜山南区第一。院长亲自拔除埋伏智齿，提供意识镇静法选项。',
  keywords: [
    '韩国智齿拔除',
    '釜山智齿',
    '埋伏智齿韩国',
    '智齿手术韩国',
    '意识镇静法韩国',
    '韩国牙科手术',
    '釜山智齿拔除',
    '中文智齿釜山',
    '韩国牙科旅游'
  ],
  alternates: {
    canonical: 'https://gdfirstdent.com/cn/wisdom-tooth',
  },
  openGraph: {
    title: '韩国釜山智齿拔除牙科 | 庆星美迪斯牙科',
    description: '2,700件以上高难度智齿拔除，0例并发症。釜山南区第一。院长亲自施术。',
    url: 'https://gdfirstdent.com/cn/wisdom-tooth',
    type: 'website',
    locale: 'zh_CN',
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

      {/* Sedation Section - 意识镇静法 */}
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
