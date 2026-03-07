import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Kyungsung Medis Dental | Korean Dental Clinic Busan',
    template: '%s | Kyungsung Medis Dental',
  },
  description: 'English-speaking dental clinic in Busan, Korea. Full mouth implants, digital implants, wisdom tooth extraction, teeth whitening. 10 years with 0 re-surgeries.',
  keywords: [
    'Korean dental clinic Busan',
    'dentist Korea Busan',
    'English speaking dentist Korea',
    'dental implant Korea',
    'dental tourism Korea',
    'international dental clinic Korea',
    'Busan dentist English',
    'teeth whitening Korea',
    'wisdom tooth extraction Korea',
    'Korean dentist for foreigners',
    'Kyungsung Medis Dental',
  ],
  alternates: {
    canonical: 'https://gdfirstdent.com/en',
    languages: {
      'ko-KR': 'https://gdfirstdent.com',
      'en-US': 'https://gdfirstdent.com/en',
      'ja-JP': 'https://gdfirstdent.com/jp',
      'zh-CN': 'https://gdfirstdent.com/cn',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://gdfirstdent.com/en',
    siteName: 'Kyungsung Medis Dental',
    title: 'Kyungsung Medis Dental | Korean Dental Clinic Busan',
    description: 'English-speaking dental clinic in Busan, Korea. Full mouth implants, digital implants, wisdom tooth extraction, teeth whitening.',
    images: [
      {
        url: '/고덕퍼스트치과로고.png',
        width: 1200,
        height: 630,
        alt: 'Kyungsung Medis Dental - Korean Dental Clinic in Busan',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kyungsung Medis Dental | Korean Dental Clinic Busan',
    description: 'English-speaking dental clinic in Busan, Korea. Full mouth implants, digital implants, wisdom tooth extraction.',
    images: ['/고덕퍼스트치과로고.png'],
  },
};

// English JSON-LD structured data
const jsonLdEn = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Dentist',
      '@id': 'https://gdfirstdent.com/en/#dentist',
      name: 'Kyungsung Medis Dental',
      alternateName: 'Medis Dental Clinic',
      description: 'English-speaking dental clinic in Busan, Korea. Specializing in full mouth implants, digital implants, wisdom tooth extraction, and teeth whitening.',
      url: 'https://gdfirstdent.com/en',
      telephone: '+82-51-628-2879',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '312 Suyeong-ro, 3F, Nam-gu',
        addressLocality: 'Busan',
        addressRegion: 'Nam-gu',
        postalCode: '48434',
        addressCountry: 'KR',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 35.1379,
        longitude: 129.0988,
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '10:00',
          closes: '19:00',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: 'Saturday',
          opens: '10:00',
          closes: '14:00',
        },
      ],
      image: 'https://gdfirstdent.com/고덕퍼스트치과로고.png',
      priceRange: '$$',
      currenciesAccepted: 'KRW',
      paymentAccepted: 'Cash, Credit Card',
      availableLanguage: ['Korean', 'English'],
      areaServed: {
        '@type': 'City',
        name: 'Busan',
      },
      medicalSpecialty: [
        'Dental Implant',
        'Cosmetic Dentistry',
        'General Dentistry',
      ],
    },
    {
      '@type': 'ItemList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          item: {
            '@type': 'Service',
            name: 'Full Mouth Implant',
            description: 'Precision full mouth implant surgery with 3D digital guide',
            image: 'https://gdfirstdent.com/images/full-implant-before-after1.png',
            url: 'https://gdfirstdent.com/en#implant',
          },
        },
        {
          '@type': 'ListItem',
          position: 2,
          item: {
            '@type': 'Service',
            name: 'Digital Implant',
            description: 'Safe and accurate implants with 3D digital guide system',
            image: 'https://gdfirstdent.com/images/digital-implant-no-incision.png',
            url: 'https://gdfirstdent.com/en#digital-implant',
          },
        },
        {
          '@type': 'ListItem',
          position: 3,
          item: {
            '@type': 'Service',
            name: 'Wisdom Tooth Extraction',
            description: 'Oral surgery specialist wisdom tooth extraction',
            image: 'https://gdfirstdent.com/images/wisdom-tooth-xray.png',
            url: 'https://gdfirstdent.com/en/wisdom-tooth',
          },
        },
        {
          '@type': 'ListItem',
          position: 4,
          item: {
            '@type': 'Service',
            name: 'Teeth Whitening',
            description: 'Professional teeth whitening treatment',
            image: 'https://gdfirstdent.com/images/whitening-after.jpg',
            url: 'https://gdfirstdent.com/en/whitening',
          },
        },
      ],
    },
  ],
};

export default function EnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdEn) }}
      />
      {children}
    </>
  );
}
