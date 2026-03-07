import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: '慶星大メディス歯科 | 釜山インプラント専門',
    template: '%s | 慶星大メディス歯科',
  },
  description: '釜山大延洞の専門歯科。全顎インプラント、デジタルインプラント、虫歯治療、親知らず抜歯、ホワイトニング専門。10年間再手術ゼロの実績。',
  keywords: [
    '釜山歯科',
    '韓国インプラント',
    '釜山インプラント',
    '韓国歯科観光',
    '日本語対応歯科韓国',
    '親知らず抜歯韓国',
    'ホワイトニング韓国',
    '慶星大メディス歯科',
  ],
  alternates: {
    canonical: 'https://medisksu.co.kr/jp',
    languages: {
      'ko-KR': 'https://medisksu.co.kr',
      'en-US': 'https://medisksu.co.kr/en',
      'ja-JP': 'https://medisksu.co.kr/jp',
      'zh-CN': 'https://medisksu.co.kr/cn',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://medisksu.co.kr/jp',
    siteName: '慶星大メディス歯科',
    title: '慶星大メディス歯科 | 釜山インプラント専門',
    description: '釜山大延洞の専門歯科。全顎インプラント、デジタルインプラント、親知らず抜歯専門。',
    images: [
      {
        url: '/고덕퍼스트치과로고.png',
        width: 1200,
        height: 630,
        alt: '慶星大メディス歯科 - 釜山インプラント専門',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '慶星大メディス歯科 | 釜山インプラント専門',
    description: '釜山大延洞の専門歯科。全顎インプラント、デジタルインプラント、親知らず抜歯専門。',
    images: ['/고덕퍼스트치과로고.png'],
  },
};

const jsonLdJp = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Dentist',
      '@id': 'https://medisksu.co.kr/jp/#dentist',
      name: '慶星大メディス歯科',
      alternateName: 'メディス歯科',
      description: '釜山大延洞の専門歯科。全顎インプラント、デジタルインプラント、虫歯治療、親知らず抜歯、ホワイトニング専門。',
      url: 'https://medisksu.co.kr/jp',
      telephone: '+82-51-628-2879',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '釜山広域市南区水営路312、3階',
        addressLocality: '釜山',
        addressRegion: '南区',
        postalCode: '48434',
        addressCountry: 'KR',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 35.1379,
        longitude: 129.0988,
      },
      image: 'https://medisksu.co.kr/고덕퍼스트치과로고.png',
      availableLanguage: ['Korean', 'Japanese', 'English'],
      medicalSpecialty: ['Dental Implant', 'Cosmetic Dentistry', 'General Dentistry'],
    },
    {
      '@type': 'ItemList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          item: {
            '@type': 'Service',
            name: '全顎インプラント',
            description: '3Dデジタルガイドによる精密な全顎インプラント手術',
            url: 'https://medisksu.co.kr/jp#implant',
          },
        },
        {
          '@type': 'ListItem',
          position: 2,
          item: {
            '@type': 'Service',
            name: '親知らず抜歯',
            description: '口腔外科専門医による親知らず抜歯',
            url: 'https://medisksu.co.kr/jp/wisdom-tooth',
          },
        },
        {
          '@type': 'ListItem',
          position: 3,
          item: {
            '@type': 'Service',
            name: 'ホワイトニング',
            description: '専門ホワイトニング施術',
            url: 'https://medisksu.co.kr/jp/whitening',
          },
        },
      ],
    },
  ],
};

export default function JpLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdJp) }}
      />
      {children}
    </>
  );
}
