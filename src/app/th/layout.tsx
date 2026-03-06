import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'คลินิกทันตกรรมเมดิสคยองซอง | รากฟันเทียมปูซาน',
    template: '%s | คลินิกทันตกรรมเมดิสคยองซอง',
  },
  description: 'คลินิกทันตกรรมมืออาชีพในปูซาน เกาหลี รากฟันเทียมทั้งปาก รากฟันเทียมดิจิทัล ถอนฟันคุด ฟอกสีฟัน 10 ปีไม่ต้องผ่าตัดซ้ำ',
  keywords: [
    'ทันตกรรมปูซาน',
    'รากฟันเทียมเกาหลี',
    'ท่องเที่ยวทันตกรรมเกาหลี',
    'ถอนฟันคุดเกาหลี',
    'ฟอกสีฟันเกาหลี',
  ],
  alternates: {
    canonical: 'https://medisksu.co.kr/th',
  },
  openGraph: {
    type: 'website',
    locale: 'th_TH',
    url: 'https://medisksu.co.kr/th',
    siteName: 'คลินิกทันตกรรมเมดิสคยองซอง',
    title: 'คลินิกทันตกรรมเมดิสคยองซอง | รากฟันเทียมปูซาน',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630 }],
  },
};

const jsonLdTh = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  name: 'คลินิกทันตกรรมเมดิสคยองซอง',
  url: 'https://medisksu.co.kr/th',
  telephone: '+82-51-628-2879',
  address: { '@type': 'PostalAddress', addressLocality: 'Busan', addressCountry: 'KR' },
  availableLanguage: ['Korean', 'Thai', 'English'],
};

export default function ThLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdTh) }} />
      {children}
    </>
  );
}
