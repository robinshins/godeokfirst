import type { Metadata } from 'next';
import GNB from '@/components/en/GNB';
import FixedCTAButton from '@/components/en/FixedCTAButton';
import FooterSection from '@/components/en/FooterSection';

import ImplantHero from '@/components/en/denture/ImplantHero';
import { faqData } from '@/lib/faqData';
import { generateFAQSchema, generateBreadcrumbSchema, generateMedicalServiceSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Dentures & Full-Arch Implants | Godeok First Dental',
  description: 'Full-arch implants and dentures. University hospital professor operates directly at Godeok First Dental.',
  keywords: 'denture Korea, full arch implant, All-on-4, All-on-6, overdenture, Godeok dental',
  alternates: {
    canonical: 'https://gdfirstdent.co.kr/en/denture',
  },
  openGraph: {
    title: 'Dentures & Full-Arch Implants | Godeok First Dental',
    description: 'Full-arch implants and dentures by a university hospital professor. 1,200+ implant cases.',
    url: 'https://gdfirstdent.co.kr/en/denture',
    siteName: 'Godeok First Dental',
    type: 'website',
    images: [
      {
        url: '/고덕og이미지.png',
        width: 1200,
        height: 630,
        alt: 'Godeok First Dental - Full-Arch Implants & Dentures',
      },
    ],
  },
};

// FAQ Schema
const faqSchema = generateFAQSchema(faqData.denture);

// Breadcrumb Schema
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: 'https://gdfirstdent.co.kr/en' },
  { name: 'Dentures & Full-Arch Implants', url: 'https://gdfirstdent.co.kr/en/denture' }
]);

// Medical Service Schema
const medicalServiceSchema = generateMedicalServiceSchema({
  name: 'Dentures & Full-Arch Implants',
  description: 'Full-arch implants and dentures by a university hospital professor.',
  url: 'https://gdfirstdent.co.kr/en/denture'
});
import StatsSection from '@/components/en/denture/StatsSection';
import TreatmentOptionsSection from '@/components/en/denture/TreatmentOptionsSection';
// import VideoSection from '@/components/en/denture/VideoSection';
import WhyBestNewSection from '@/components/en/denture/WhyBestNewSection';
import InHouseLabSection from '@/components/en/denture/InHouseLabSection';
import AfterCareSection from '@/components/en/denture/AfterCareSection';
import SpeedSection from '@/components/en/denture/SpeedSection';
import DigitalGuideSection from '@/components/en/implant/DigitalGuideSection';
import RealPatientResultsSection from '@/components/en/denture/RealPatientResultsSection';
import SkillDifferenceSection from '@/components/en/implant/SkillDifferenceSection';
// import SedationSection from '@/components/en/cavity-treatment/SedationSection';
// import WarrantySection from '@/components/en/implant/WarrantySection';
import DoctorSection from '@/components/en/DoctorSection';
import WhyBestSection from '@/components/en/WhyBestSection';
import LocationSection from '@/components/en/LocationSection';
// import YouTubeSection from '@/components/en/YouTubeSection';
import MobileColumnSection from '@/components/en/MobileColumnSection';
import FAQSection from '@/components/en/FAQSection';
import SloganSection from '@/components/en/SloganSection';

export default function DenturePage() {
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

      {/* Treatment Options Section */}
      <TreatmentOptionsSection />

      {/* Video Section */}
      {/* <VideoSection /> */}
      <MobileColumnSection page="denture" />

      {/* Why Best Section */}
      <WhyBestNewSection />

      {/* Sedation Section */}
      {/* <SedationSection /> */}


      {/* In-House Lab Section */}
            {/* Speed Section */}
      <SpeedSection />
      <InHouseLabSection />

      {/* After Care Section */}
      <AfterCareSection />

      {/* Digital Guide Section */}
      <DigitalGuideSection />


      {/* Real Patient Results Section */}
      <RealPatientResultsSection />

      {/* Skill Difference Section */}
      <SkillDifferenceSection />

      {/* Warranty Section */}
      {/* <WarrantySection /> */}

      <DoctorSection />
      <SloganSection />
      <WhyBestSection />
      <LocationSection />
      {/* <YouTubeSection /> */}
      <FAQSection page="denture" />

      {/* Footer */}
      <FooterSection />

      {/* Add spacing for fixed bottom button */}
      <div className="h-[88px]" />
    </main>
  );
}
