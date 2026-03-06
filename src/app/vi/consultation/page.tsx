import { Metadata } from 'next';
import ConsultationForm from '@/components/vi/ConsultationForm';
import GNB from '@/components/vi/GNB';
import DoctorIntroSection from '@/components/vi/consultation/DoctorIntroSection';

export const metadata: Metadata = {
  title: 'Yeu cau tu van - Nha khoa Kyungsung Medis',
  description: 'Yeu cau tu van nha khoa AI mien phi voi cac chuyen gia giau kinh nghiem. Nhan khuyen nghi dieu tri ca nhan hoa.',
  keywords: 'tu van nha khoa, tu van mien phi, tu van AI, nha khoa Han Quoc, nha si Busan, chuyen gia nha khoa',
  openGraph: {
    title: 'Yeu cau tu van - Nha khoa Kyungsung Medis',
    description: 'Yeu cau tu van nha khoa AI mien phi voi cac chuyen gia giau kinh nghiem.',
    type: 'website',
    locale: 'vi_VN',
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
