import GNB from '@/components/jp/GNB';
import FixedCTAButton from '@/components/jp/FixedCTAButton';
import FooterSection from '@/components/jp/FooterSection';
import TmjHeroSection from '@/components/jp/tmj/HeroSection';
import TmjDoctorMessageSection from '@/components/jp/tmj/DoctorMessageSection';
import TmjSymptomsSection from '@/components/jp/tmj/SymptomsSection';
import TmjCausesSection from '@/components/jp/tmj/CausesSection';
import TmjTreatmentSection from '@/components/jp/tmj/TreatmentSection';
import TmjWhyUsSection from '@/components/jp/tmj/WhyUsSection';
import DoctorSection from '@/components/jp/DoctorSection';
import WhyBestSection from '@/components/jp/WhyBestSection';
import LocationSection from '@/components/jp/LocationSection';
import FAQSection from '@/components/jp/FAQSection';

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
