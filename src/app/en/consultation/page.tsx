import { Metadata } from 'next';
import ConsultationForm from '@/components/en/ConsultationForm';
import GNB from '@/components/en/GNB';
import DoctorIntroSection from '@/components/en/consultation/DoctorIntroSection';

export const metadata: Metadata = {
  title: 'Consultation Request - Kyungsung Medis Dental Clinic',
  description: 'Request a free AI dental consultation with experienced specialists. Get personalized treatment recommendations.',
  keywords: 'dental consultation, free consultation, AI consultation, Korean dental clinic, Busan dentist, dental specialist',
  openGraph: {
    title: 'Consultation Request - Kyungsung Medis Dental Clinic',
    description: 'Request a free AI dental consultation with experienced specialists.',
    type: 'website',
    locale: 'en_US',
  }
};

export default function ConsultationPage() {
  return (
    <div className="min-h-screen">
      <GNB />

      {/* Add spacing for fixed GNB */}
      <div className="h-[52px]" />

      <DoctorIntroSection />

      <ConsultationForm />
    </div>
  );
}
