import GNB from '@/components/vi/GNB';
import FixedCTAButton from '@/components/vi/FixedCTAButton';
import FooterSection from '@/components/vi/FooterSection';
import TmjHeroSection from '@/components/vi/tmj/HeroSection';
import TmjDoctorMessageSection from '@/components/vi/tmj/DoctorMessageSection';
import TmjSymptomsSection from '@/components/vi/tmj/SymptomsSection';
import TmjCausesSection from '@/components/vi/tmj/CausesSection';
import TmjTreatmentSection from '@/components/vi/tmj/TreatmentSection';
import TmjWhyUsSection from '@/components/vi/tmj/WhyUsSection';
import DoctorSection from '@/components/vi/DoctorSection';
import WhyBestSection from '@/components/vi/WhyBestSection';
import LocationSection from '@/components/vi/LocationSection';
import FAQSection from '@/components/vi/FAQSection';

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
