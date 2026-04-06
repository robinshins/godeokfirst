import type { Metadata } from 'next';
import GNB from '@/components/en/GNB';
import FixedCTAButton from '@/components/en/FixedCTAButton';
import FooterSection from '@/components/en/FooterSection';

import ImplantHero from '@/components/en/implant/ImplantHero';
import { faqData } from '@/lib/faqData';
import { generateFAQSchema, generateBreadcrumbSchema, generateMedicalServiceSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Dental Implant Pyeongtaek | Godeok First Dental',
  description: 'Digital guide implant surgery by a university hospital professor. 1,200+ implant cases. Comprehensive Dentistry Specialist performs all procedures directly.',
  keywords: 'dental implant Korea, dental implant Pyeongtaek, Godeok implant, digital guide implant, implant specialist Korea',
  alternates: {
    canonical: 'https://gdfirstdent.co.kr/en/implant',
  },
  openGraph: {
    title: 'Dental Implant Pyeongtaek | Godeok First Dental',
    description: 'Digital guide implant surgery by a university hospital professor. 1,200+ implant cases.',
    url: 'https://gdfirstdent.co.kr/en/implant',
    siteName: 'Godeok First Dental',
    type: 'website',
  },
};

// FAQ Schema
const faqSchema = generateFAQSchema(faqData.implant);

// Breadcrumb Schema
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: 'https://gdfirstdent.co.kr/en' },
  { name: 'Implant', url: 'https://gdfirstdent.co.kr/en/implant' }
]);

// Medical Service Schema
const medicalServiceSchema = generateMedicalServiceSchema({
  name: 'Dental Implant',
  description: 'University hospital professor-level implant surgery with digital guide system for precise and safe procedures.',
  url: 'https://gdfirstdent.co.kr/en/implant'
});
// import VideoSection from '@/components/en/implant/VideoSection';
import StatsSection from '@/components/en/implant/StatsSection';
import WhyBestNewSection from '@/components/en/implant/WhyBestNewSection';
import AfterCareSection from '@/components/en/denture/AfterCareSection';
import BeforeAfterSection from '@/components/en/implant/BeforeAfterSection';
import SkillDifferenceSection from '@/components/en/implant/SkillDifferenceSection';
// import SedationSection from '@/components/en/cavity-treatment/SedationSection';
import DoctorSection from '@/components/en/DoctorSection';
import WhyBestSection from '@/components/en/WhyBestSection';
import LocationSection from '@/components/en/LocationSection';
// import YouTubeSection from '@/components/en/YouTubeSection';
import MobileColumnSection from '@/components/en/MobileColumnSection';
import FAQSection from '@/components/en/FAQSection';
import SloganSection from '@/components/en/SloganSection';

export default function ImplantPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalServiceSchema) }} />
      <GNB />
      <FixedCTAButton />

      {/* Add spacing for fixed GNB */}
      <div className="h-[52px]" />

      {/* Hero Section */}
      <ImplantHero />

      {/* Stats Section */}
      <StatsSection />

      {/* Video Section */}
      {/* <VideoSection /> */}
      <MobileColumnSection page="implant" />

      {/* Why Best Section */}
      <WhyBestNewSection />

      {/* Sedation Section */}
      {/* <SedationSection /> */}

      <AfterCareSection />


      {/* Digital Guide Section */}
      {/* <DigitalGuideSection /> */}

      {/* Before/After Section */}
      <BeforeAfterSection />

      {/* Skill Difference Section */}
      <SkillDifferenceSection />

      {/* Warranty Section */}
      {/* <WarrantySection /> */}

      <DoctorSection />
      <SloganSection />
      <WhyBestSection />
      <LocationSection />
      {/* <YouTubeSection /> */}
      <FAQSection page="implant" />

      {/* Footer */}
      <FooterSection />

      {/* Add spacing for fixed bottom button */}
      <div className="h-[88px]" />
    </main>
  );
}
