import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Кёнсон Медис Шүдний Эмнэлэг | Пусан Имплант',
    template: '%s | Кёнсон Медис Шүдний Эмнэлэг',
  },
  description: 'Пусан дахь мэргэжлийн шүдний эмнэлэг. Бүтэн имплант, дижитал имплант, соёоны шүд авалт, шүд цайруулах. 10 жил дахин мэс засалгүй.',
  keywords: [
    'Пусан шүдний эмнэлэг',
    'Солонгос имплант',
    'шүдний аялал жуулчлал Солонгос',
  ],
  alternates: {
    canonical: 'https://gdfirstdent.com/mn',
  },
  openGraph: {
    type: 'website',
    locale: 'mn_MN',
    url: 'https://gdfirstdent.com/mn',
    siteName: 'Кёнсон Медис Шүдний Эмнэлэг',
    title: 'Кёнсон Медис Шүдний Эмнэлэг | Пусан Имплант',
    images: [{ url: '/고덕og이미지.png', width: 1200, height: 630 }],
  },
};

const jsonLdMn = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  name: 'Кёнсон Медис Шүдний Эмнэлэг',
  url: 'https://gdfirstdent.com/mn',
  telephone: '+82-51-628-2879',
  address: { '@type': 'PostalAddress', addressLocality: 'Busan', addressCountry: 'KR' },
  availableLanguage: ['Korean', 'Mongolian', 'English'],
};

export default function MnLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdMn) }} />
      {children}
    </>
  );
}
