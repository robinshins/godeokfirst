import GNB from '@/components/mn/GNB';
import FixedCTAButton from '@/components/mn/FixedCTAButton';
import FooterSection from '@/components/mn/FooterSection';
import TmjHeroSection from '@/components/mn/tmj/HeroSection';
import TmjDoctorMessageSection from '@/components/mn/tmj/DoctorMessageSection';
import TmjSymptomsSection from '@/components/mn/tmj/SymptomsSection';
import TmjCausesSection from '@/components/mn/tmj/CausesSection';
import TmjTreatmentSection from '@/components/mn/tmj/TreatmentSection';
import TmjWhyUsSection from '@/components/mn/tmj/WhyUsSection';
import DoctorSection from '@/components/mn/DoctorSection';
import WhyBestSection from '@/components/mn/WhyBestSection';
import LocationSection from '@/components/mn/LocationSection';
import FAQSection from '@/components/mn/FAQSection';

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
