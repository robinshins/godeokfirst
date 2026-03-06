import { Metadata } from 'next';
import ConsultationForm from '@/components/ru/ConsultationForm';
import GNB from '@/components/ru/GNB';
import DoctorIntroSection from '@/components/ru/consultation/DoctorIntroSection';

export const metadata: Metadata = {
  title: 'Запись на консультацию - Стоматология Кёнсон Медис',
  description: 'Бесплатная AI-консультация стоматолога с опытными специалистами. Получите персональные рекомендации по лечению.',
  keywords: 'стоматологическая консультация, бесплатная консультация, AI консультация, корейская стоматология, стоматолог Пусан, эксперт стоматолог',
  openGraph: {
    title: 'Запись на консультацию - Стоматология Кёнсон Медис',
    description: 'Бесплатная AI-консультация стоматолога с опытными специалистами.',
    type: 'website',
    locale: 'ru_RU',
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
