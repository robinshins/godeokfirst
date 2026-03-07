import GNB from '@/components/home/GNB';
import FixedCTAButton from '@/components/home/FixedCTAButton';
import FooterSection from '@/components/home/FooterSection';
import TmjHeroSection from '@/components/tmj/HeroSection';
import TmjDoctorMessageSection from '@/components/tmj/DoctorMessageSection';
import TmjSymptomsSection from '@/components/tmj/SymptomsSection';
import TmjCausesSection from '@/components/tmj/CausesSection';
import TmjTreatmentSection from '@/components/tmj/TreatmentSection';
import TmjWhyUsSection from '@/components/tmj/WhyUsSection';
import DoctorSection from '@/components/home/DoctorSection';
import WhyBestSection from '@/components/home/WhyBestSection';
import LocationSection from '@/components/home/LocationSection';
import FAQSection from '@/components/home/FAQSection';

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
