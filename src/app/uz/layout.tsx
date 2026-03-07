import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Kyungsung Medis Stomatologiya | Pusan Implant',
    template: '%s | Kyungsung Medis Stomatologiya',
  },
  description: "Pusandagi professional stomatologiya. To'liq implantatsiya, raqamli implantlar, aql tishlari olish, tishlarni oqartirish. 10 yil qayta operatsiyasiz.",
  keywords: [
    'Pusan stomatologiya',
    'Koreya implant',
    'stomatologik turizm Koreya',
    'aql tishi olish Koreya',
  ],
  alternates: {
    canonical: 'https://medisksu.co.kr/uz',
  },
  openGraph: {
    type: 'website',
    locale: 'uz_UZ',
    url: 'https://medisksu.co.kr/uz',
    siteName: 'Kyungsung Medis Stomatologiya',
    title: 'Kyungsung Medis Stomatologiya | Pusan Implant',
    images: [{ url: '/고덕퍼스트치과로고.png', width: 1200, height: 630 }],
  },
};

const jsonLdUz = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  name: 'Kyungsung Medis Stomatologiya',
  url: 'https://medisksu.co.kr/uz',
  telephone: '+82-51-628-2879',
  address: { '@type': 'PostalAddress', addressLocality: 'Busan', addressCountry: 'KR' },
  availableLanguage: ['Korean', 'Uzbek', 'English'],
};

export default function UzLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdUz) }} />
      {children}
    </>
  );
}
