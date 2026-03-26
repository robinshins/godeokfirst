import GNB from '@/components/en/GNB';
import FixedCTAButton from '@/components/en/FixedCTAButton';
import FooterSection from '@/components/en/FooterSection';
import TmjHeroSection from '@/components/en/tmj/HeroSection';
import TmjDoctorMessageSection from '@/components/en/tmj/DoctorMessageSection';
import TmjSymptomsSection from '@/components/en/tmj/SymptomsSection';
import TmjCausesSection from '@/components/en/tmj/CausesSection';
import TmjTreatmentSection from '@/components/en/tmj/TreatmentSection';
import TmjWhyUsSection from '@/components/en/tmj/WhyUsSection';
import DoctorSection from '@/components/en/DoctorSection';
import WhyBestSection from '@/components/en/WhyBestSection';
import LocationSection from '@/components/en/LocationSection';
import FAQSection from '@/components/en/FAQSection';

export default function TmjPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <GNB />
      <FixedCTAButton />

      <div className="h-[52px]" />

      <TmjHeroSection />
      <TmjDoctorMessageSection />
      <TmjSymptomsSection />
      <TmjCausesSection />
      <TmjTreatmentSection />
      <TmjWhyUsSection />

      <DoctorSection />
      <WhyBestSection />
      <LocationSection />
      <FAQSection page="tmj" />

      <FooterSection />
      <div className="h-[88px]" />
    </main>
  );
}
