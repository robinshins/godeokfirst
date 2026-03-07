import GNB from '@/components/en/GNB';
import HeroSection from '@/components/en/HeroSection';
import StatsSection from '@/components/en/StatsSection';
import TreatmentSection from '@/components/en/TreatmentSection';
import DoctorSection from '@/components/en/DoctorSection';
import FAQSection from '@/components/en/FAQSection';
import WhyBestSection from '@/components/en/WhyBestSection';
import LocationSection from '@/components/en/LocationSection';
import YouTubeSection from '@/components/en/YouTubeSection';
import CTASection from '@/components/en/CTASection';
import FooterSection from '@/components/en/FooterSection';
import FixedCTAButton from '@/components/en/FixedCTAButton';

export const metadata = {
  title: 'Korean Dental Clinic Busan Korea | Kyungsung Medis Dental',
  description: '10 years with 0 re-surgeries. #1 in Busan Nam-gu with 1,500+ implants and 2,700+ wisdom tooth extractions. Head doctor performs all treatments with advanced digital technology.',
  keywords: [
    'Korean dental clinic Busan',
    'dentist Korea Busan',
    'English speaking dentist Korea',
    'dental implant Korea',
    'dental tourism Korea',
    'international dental clinic Korea',
    'Busan dentist English',
    'teeth whitening Korea',
    'wisdom tooth extraction Korea',
    'Korean dentist for foreigners'
  ],
  alternates: {
    canonical: 'https://gdfirstdent.com/en',
  },
  openGraph: {
    title: 'Korean Dental Clinic Busan Korea | Kyungsung Medis Dental',
    description: '10 years with 0 re-surgeries. #1 in Busan Nam-gu with 1,500+ implants and 2,700+ wisdom tooth extractions. Head doctor performs all treatments.',
    url: 'https://gdfirstdent.com/en',
    locale: 'en_US'
  }
};

export default function EnHome() {
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
