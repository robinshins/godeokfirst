import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Nha khoa Medis Kyungsung | Cấy ghép răng Busan',
    template: '%s | Nha khoa Medis Kyungsung',
  },
  description: 'Nha khoa chuyên nghiệp tại Busan, Hàn Quốc. Cấy ghép toàn hàm, implant kỹ thuật số, nhổ răng khôn, tẩy trắng răng. 10 năm không tái phẫu thuật.',
  keywords: [
    'nha khoa Busan',
    'cấy ghép răng Hàn Quốc',
    'implant Busan',
    'du lịch nha khoa Hàn Quốc',
    'nhổ răng khôn Hàn Quốc',
    'tẩy trắng răng Hàn Quốc',
  ],
  alternates: {
    canonical: 'https://medisksu.co.kr/vi',
    languages: {
      'ko-KR': 'https://medisksu.co.kr',
      'en-US': 'https://medisksu.co.kr/en',
      'vi-VN': 'https://medisksu.co.kr/vi',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    url: 'https://medisksu.co.kr/vi',
    siteName: 'Nha khoa Medis Kyungsung',
    title: 'Nha khoa Medis Kyungsung | Cấy ghép răng Busan',
    description: 'Nha khoa chuyên nghiệp tại Busan. Cấy ghép toàn hàm, implant kỹ thuật số, nhổ răng khôn.',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630 }],
  },
};

const jsonLdVi = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  name: 'Nha khoa Medis Kyungsung',
  description: 'Nha khoa chuyên nghiệp tại Busan, Hàn Quốc.',
  url: 'https://medisksu.co.kr/vi',
  telephone: '+82-51-628-2879',
  address: { '@type': 'PostalAddress', addressLocality: 'Busan', addressCountry: 'KR' },
  availableLanguage: ['Korean', 'Vietnamese', 'English'],
};

export default function ViLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdVi) }} />
      {children}
    </>
  );
}
