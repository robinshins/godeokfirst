import GNB from '@/components/uz/GNB';
import FixedCTAButton from '@/components/uz/FixedCTAButton';
import FooterSection from '@/components/uz/FooterSection';
import TmjHeroSection from '@/components/uz/tmj/HeroSection';
import TmjDoctorMessageSection from '@/components/uz/tmj/DoctorMessageSection';
import TmjSymptomsSection from '@/components/uz/tmj/SymptomsSection';
import TmjCausesSection from '@/components/uz/tmj/CausesSection';
import TmjTreatmentSection from '@/components/uz/tmj/TreatmentSection';
import TmjWhyUsSection from '@/components/uz/tmj/WhyUsSection';
import DoctorSection from '@/components/uz/DoctorSection';
import WhyBestSection from '@/components/uz/WhyBestSection';
import LocationSection from '@/components/uz/LocationSection';
import FAQSection from '@/components/uz/FAQSection';

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
