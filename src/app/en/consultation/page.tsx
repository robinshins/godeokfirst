'use client';

import { useEffect } from 'react';
import ConsultationForm from '@/components/ConsultationForm';
import GNB from '@/components/en/GNB';
import DoctorIntroSection from '@/components/consultation/DoctorIntroSection';

export default function ConsultationPage() {
  useEffect(() => {
    // Meta Pixel: ViewCheckoutPage custom event
    if (typeof window !== 'undefined') {
      const fbq = (window as { fbq?: (...args: unknown[]) => void }).fbq;
      if (fbq) {
        fbq('trackCustom', 'ViewCheckoutPage');
        console.log('✅ Meta Pixel: ViewCheckoutPage custom event sent');
      }
    }
  }, []);

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