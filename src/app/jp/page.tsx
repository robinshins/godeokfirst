import GNB from '@/components/jp/GNB';
import HeroSection from '@/components/jp/HeroSection';
import StatsSection from '@/components/jp/StatsSection';
import TreatmentSection from '@/components/jp/TreatmentSection';
import DoctorSection from '@/components/jp/DoctorSection';
import FAQSection from '@/components/jp/FAQSection';
import WhyBestSection from '@/components/jp/WhyBestSection';
import LocationSection from '@/components/jp/LocationSection';
import YouTubeSection from '@/components/jp/YouTubeSection';
import CTASection from '@/components/jp/CTASection';
import FooterSection from '@/components/jp/FooterSection';
import FixedCTAButton from '@/components/jp/FixedCTAButton';

export const metadata = {
  title: '韓国釜山歯科 | 慶星メディス歯科',
  description: '10年間再手術ゼロ、釜山南区No.1。1,500件以上のインプラント、2,700件以上の親知らず抜歯実績。院長が直接治療する韓国歯科クリニック。',
  keywords: [
    '韓国歯科',
    '釜山歯科',
    '韓国インプラント',
    '釜山インプラント',
    '韓国歯科クリニック',
    '韓国歯科治療',
    '韓国デンタルツーリズム',
    '日本語対応歯科韓国'
  ],
  alternates: {
    canonical: 'https://gdfirstdent.com/jp',
  },
  openGraph: {
    title: '韓国釜山歯科 | 慶星メディス歯科',
    description: '10年間再手術ゼロ、釜山南区No.1。院長が直接治療。',
    url: 'https://gdfirstdent.com/jp',
    type: 'website',
    locale: 'ja_JP'
  }
};

export default function JpHome() {
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
