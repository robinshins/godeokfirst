import GNB from '@/components/cn/GNB';
import HeroSection from '@/components/cn/HeroSection';
import StatsSection from '@/components/cn/StatsSection';
import TreatmentSection from '@/components/cn/TreatmentSection';
import DoctorSection from '@/components/cn/DoctorSection';
import FAQSection from '@/components/cn/FAQSection';
import WhyBestSection from '@/components/cn/WhyBestSection';
import LocationSection from '@/components/cn/LocationSection';
import YouTubeSection from '@/components/cn/YouTubeSection';
import CTASection from '@/components/cn/CTASection';
import FooterSection from '@/components/cn/FooterSection';
import FixedCTAButton from '@/components/cn/FixedCTAButton';

export const metadata = {
  title: '韩国釜山牙科 | 庆星美迪斯牙科',
  description: '10年零返修记录。釜山南区第一，1,500件以上种植牙，2,700件以上智齿拔除。院长亲自施术，配备先进数字化设备。',
  keywords: [
    '韩国釜山牙科',
    '釜山牙科',
    '韩国牙科诊所',
    '中文牙科釜山',
    '韩国种植牙',
    '釜山种植牙',
    '釜山美白',
    '釜山智齿',
    '韩国牙科旅游'
  ],
  alternates: {
    canonical: 'https://medisksu.co.kr/cn',
  },
  openGraph: {
    title: '韩国釜山牙科 | 庆星美迪斯牙科',
    description: '10年零返修记录。釜山南区第一，1,500件以上种植牙，2,700件以上智齿拔除。院长亲自施术。',
    url: 'https://medisksu.co.kr/cn',
    locale: 'zh_CN'
  }
};

export default function CnHome() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <GNB />
      <FixedCTAButton />

      {/* Add spacing for fixed GNB */}
      <div className="h-[52px]" />

      {/* <Banner /> */}
      <HeroSection />
      <StatsSection />
      <TreatmentSection />
      <DoctorSection />
      <WhyBestSection />
      <LocationSection />
      <YouTubeSection />
      <FAQSection />
      <CTASection />
      <FooterSection />

      {/* Add spacing for fixed bottom button */}
      <div className="h-[88px]" />
    </main>
  );
}
