'use client';

import { usePathname } from "next/navigation";
import ScheduleNotice from "@/components/ScheduleNotice";
import ReferrerTracker from "@/components/ReferrerTracker";
import PageViewTracker from "@/components/PageViewTracker";

export default function LayoutWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isAdminPage = pathname?.startsWith('/admin');
  const isXmlPage = pathname?.endsWith('.xml');
  const isPatientIntakePage = pathname?.startsWith('/patient-intake');
  const isChatPage = pathname?.startsWith('/chat');
  const isConsultationPage = pathname?.startsWith('/consultation');
  const isKoreanPage = !pathname?.startsWith('/en') && !pathname?.startsWith('/jp') && !pathname?.startsWith('/cn') && !pathname?.startsWith('/vi') && !pathname?.startsWith('/th') && !pathname?.startsWith('/ru') && !pathname?.startsWith('/uz') && !pathname?.startsWith('/mn');

  return (
    <>
      <ReferrerTracker />
      <PageViewTracker />
      {!isAdminPage && !isXmlPage && !isPatientIntakePage && !isChatPage && !isConsultationPage && isKoreanPage && <ScheduleNotice />}
      <div className={`w-full ${!isAdminPage ? 'sm:max-w-[375px]' : ''} mx-auto min-h-screen bg-white`}>
        {children}
      </div>
    </>
  );
}
