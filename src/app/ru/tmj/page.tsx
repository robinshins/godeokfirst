import GNB from '@/components/ru/GNB';
import FixedCTAButton from '@/components/ru/FixedCTAButton';
import FooterSection from '@/components/ru/FooterSection';
import TmjHeroSection from '@/components/ru/tmj/HeroSection';
import TmjDoctorMessageSection from '@/components/ru/tmj/DoctorMessageSection';
import TmjSymptomsSection from '@/components/ru/tmj/SymptomsSection';
import TmjCausesSection from '@/components/ru/tmj/CausesSection';
import TmjTreatmentSection from '@/components/ru/tmj/TreatmentSection';
import TmjWhyUsSection from '@/components/ru/tmj/WhyUsSection';
import DoctorSection from '@/components/ru/DoctorSection';
import WhyBestSection from '@/components/ru/WhyBestSection';
import LocationSection from '@/components/ru/LocationSection';
import FAQSection from '@/components/ru/FAQSection';

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
