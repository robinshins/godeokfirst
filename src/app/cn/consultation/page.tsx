import { Metadata } from 'next';
import ConsultationForm from '@/components/cn/ConsultationForm';
import GNB from '@/components/cn/GNB';
import DoctorIntroSection from '@/components/cn/consultation/DoctorIntroSection';

export const metadata: Metadata = {
  title: '咨询申请 - 庆星美迪斯牙科',
  description: '向经验丰富的专家申请免费AI牙科咨询。获得个性化的治疗建议。',
  keywords: '牙科咨询, 免费咨询, AI咨询, 韩国牙科, 釜山牙医, 牙科专家',
  openGraph: {
    title: '咨询申请 - 庆星美迪斯牙科',
    description: '向经验丰富的专家申请免费AI牙科咨询。',
    type: 'website',
    locale: 'zh_CN',
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
