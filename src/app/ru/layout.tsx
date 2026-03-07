import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Стоматология Медис Кёнсон | Имплантация зубов Пусан',
    template: '%s | Стоматология Медис Кёнсон',
  },
  description: 'Профессиональная стоматология в Пусане, Корея. Полная имплантация, цифровые импланты, удаление зубов мудрости, отбеливание зубов. 10 лет без повторных операций.',
  keywords: [
    'стоматология Пусан',
    'имплантация зубов Корея',
    'стоматологический туризм Корея',
    'удаление зуба мудрости Корея',
    'отбеливание зубов Корея',
  ],
  alternates: {
    canonical: 'https://medisksu.co.kr/ru',
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://medisksu.co.kr/ru',
    siteName: 'Стоматология Медис Кёнсон',
    title: 'Стоматология Медис Кёнсон | Имплантация зубов Пусан',
    images: [{ url: '/고덕퍼스트치과로고.png', width: 1200, height: 630 }],
  },
};

const jsonLdRu = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  name: 'Стоматология Медис Кёнсон',
  url: 'https://medisksu.co.kr/ru',
  telephone: '+82-51-628-2879',
  address: { '@type': 'PostalAddress', addressLocality: 'Busan', addressCountry: 'KR' },
  availableLanguage: ['Korean', 'Russian', 'English'],
};

export default function RuLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdRu) }} />
      {children}
    </>
  );
}
