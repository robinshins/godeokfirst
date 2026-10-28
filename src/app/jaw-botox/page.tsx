import GNB from '@/components/home/GNB';
import FixedCTAButton from '@/components/home/FixedCTAButton';
import FooterSection from '@/components/home/FooterSection';
import JawBotoxHeroSection from '@/components/jaw-botox/HeroSection';
import JawBotoxDoctorMessageSection from '@/components/jaw-botox/DoctorMessageSection';
import JawBotoxWhoNeedsSection from '@/components/jaw-botox/WhoNeedsSection';
import JawBotoxWhyDentistSection from '@/components/jaw-botox/WhyDentistSection';
import JawBotoxHowItWorksSection from '@/components/jaw-botox/HowItWorksSection';
import JawBotoxProcessSection from '@/components/jaw-botox/ProcessSection';
import DoctorSection from '@/components/home/DoctorSection';
import WhyBestSection from '@/components/home/WhyBestSection';
import LocationSection from '@/components/home/LocationSection';
import FAQSection from '@/components/home/FAQSection';

export default function JawBotoxPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <GNB />
      <FixedCTAButton />

      <div className="h-[52px]" />

      <JawBotoxHeroSection />
      <JawBotoxDoctorMessageSection />
      <JawBotoxWhoNeedsSection />
      <JawBotoxWhyDentistSection />
      <JawBotoxHowItWorksSection />
      <JawBotoxProcessSection />

      <DoctorSection />
      <WhyBestSection />
      <LocationSection />
      <FAQSection page="jaw-botox" />

      <FooterSection />
      <div className="h-[88px]" />
    </main>
  );
}
