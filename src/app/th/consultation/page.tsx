import { Metadata } from 'next';
import ConsultationForm from '@/components/th/ConsultationForm';
import GNB from '@/components/th/GNB';
import DoctorIntroSection from '@/components/th/consultation/DoctorIntroSection';

export const metadata: Metadata = {
  title: 'ขอรับคำปรึกษา - คลินิกทันตกรรม Kyungsung Medis',
  description: 'ขอรับคำปรึกษาทันตกรรม AI ฟรีจากผู้เชี่ยวชาญที่มีประสบการณ์ รับคำแนะนำการรักษาที่เหมาะกับคุณ',
  keywords: 'คำปรึกษาทันตกรรม, คำปรึกษาฟรี, คำปรึกษา AI, ทันตกรรมเกาหลี, ทันตแพทย์ปูซาน, ผู้เชี่ยวชาญทันตกรรม',
  openGraph: {
    title: 'ขอรับคำปรึกษา - คลินิกทันตกรรม Kyungsung Medis',
    description: 'ขอรับคำปรึกษาทันตกรรม AI ฟรีจากผู้เชี่ยวชาญที่มีประสบการณ์',
    type: 'website',
    locale: 'th_TH',
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
