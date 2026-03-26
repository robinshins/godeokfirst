import GNB from '@/components/cn/GNB';
import FixedCTAButton from '@/components/cn/FixedCTAButton';
import FooterSection from '@/components/cn/FooterSection';
import TmjHeroSection from '@/components/cn/tmj/HeroSection';
import TmjDoctorMessageSection from '@/components/cn/tmj/DoctorMessageSection';
import TmjSymptomsSection from '@/components/cn/tmj/SymptomsSection';
import TmjCausesSection from '@/components/cn/tmj/CausesSection';
import TmjTreatmentSection from '@/components/cn/tmj/TreatmentSection';
import TmjWhyUsSection from '@/components/cn/tmj/WhyUsSection';
import DoctorSection from '@/components/cn/DoctorSection';
import WhyBestSection from '@/components/cn/WhyBestSection';
import LocationSection from '@/components/cn/LocationSection';
import FAQSection from '@/components/cn/FAQSection';

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
