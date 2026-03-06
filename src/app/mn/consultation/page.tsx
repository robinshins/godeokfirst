import { Metadata } from 'next';
import ConsultationForm from '@/components/mn/ConsultationForm';
import GNB from '@/components/mn/GNB';
import DoctorIntroSection from '@/components/mn/consultation/DoctorIntroSection';

export const metadata: Metadata = {
  title: 'Зөвлөгөө авах - Кёнсүн Медис Шүдний Эмнэлэг',
  description: 'Туршлагатай мэргэжилтнүүдээс үнэгүй AI шүдний зөвлөгөө авах. Хувийн эмчилгээний зөвлөмж аваарай.',
  keywords: 'шүдний зөвлөгөө, үнэгүй зөвлөгөө, AI зөвлөгөө, Солонгос шүдний эмнэлэг, Пусан шүдний эмч, шүдний мэргэжилтэн',
  openGraph: {
    title: 'Зөвлөгөө авах - Кёнсүн Медис Шүдний Эмнэлэг',
    description: 'Туршлагатай мэргэжилтнүүдээс үнэгүй AI шүдний зөвлөгөө авах.',
    type: 'website',
    locale: 'mn_MN',
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
