import { Metadata } from 'next';
import ConsultationForm from '@/components/uz/ConsultationForm';
import GNB from '@/components/uz/GNB';
import DoctorIntroSection from '@/components/uz/consultation/DoctorIntroSection';

export const metadata: Metadata = {
  title: 'Maslahat so\'rovi - Kyungsung Medis Stomatologiya',
  description: 'Tajribali mutaxassislar bilan bepul AI stomatologik maslahat so\'rang. Shaxsiy davolash tavsiyalarini oling.',
  keywords: 'stomatologik maslahat, bepul maslahat, AI maslahat, Koreya stomatologiyasi, Busan stomatologi, stomatologiya mutaxassisi',
  openGraph: {
    title: 'Maslahat so\'rovi - Kyungsung Medis Stomatologiya',
    description: 'Tajribali mutaxassislar bilan bepul AI stomatologik maslahat so\'rang.',
    type: 'website',
    locale: 'uz_UZ',
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
