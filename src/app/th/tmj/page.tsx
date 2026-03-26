import GNB from '@/components/th/GNB';
import FixedCTAButton from '@/components/th/FixedCTAButton';
import FooterSection from '@/components/th/FooterSection';
import TmjHeroSection from '@/components/th/tmj/HeroSection';
import TmjDoctorMessageSection from '@/components/th/tmj/DoctorMessageSection';
import TmjSymptomsSection from '@/components/th/tmj/SymptomsSection';
import TmjCausesSection from '@/components/th/tmj/CausesSection';
import TmjTreatmentSection from '@/components/th/tmj/TreatmentSection';
import TmjWhyUsSection from '@/components/th/tmj/WhyUsSection';
import DoctorSection from '@/components/th/DoctorSection';
import WhyBestSection from '@/components/th/WhyBestSection';
import LocationSection from '@/components/th/LocationSection';
import FAQSection from '@/components/th/FAQSection';

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
