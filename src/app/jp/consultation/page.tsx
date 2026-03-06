import { Metadata } from 'next';
import ConsultationForm from '@/components/jp/ConsultationForm';
import GNB from '@/components/jp/GNB';
import DoctorIntroSection from '@/components/jp/consultation/DoctorIntroSection';

export const metadata: Metadata = {
  title: '相談申請 - 慶星メディス歯科',
  description: '経験豊富な専門医による無料AI歯科相談をリクエスト。個別の治療推奨をご提供します。',
  keywords: '歯科相談, 無料相談, AI相談, 韓国歯科, 釜山歯科医, 歯科専門医',
  openGraph: {
    title: '相談申請 - 慶星メディス歯科',
    description: '経験豊富な専門医による無料AI歯科相談をリクエスト。',
    type: 'website',
    locale: 'ja_JP',
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
