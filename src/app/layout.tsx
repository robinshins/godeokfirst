import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from "next/font/google";
import TrackingScripts from "@/components/TrackingScripts";
import LayoutWrapper from "@/components/LayoutWrapper";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#ffffff',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://medisksu.co.kr'),
  title: {
    default: '고덕퍼스트치과 | 평택임플란트 고덕동치과',
    template: '%s | 고덕퍼스트치과',
  },
  description: '평택 고덕동 전문 치과. 전체임플란트, 디지털임플란트, 충치치료, 사랑니발치, 치아미백 전문. 고덕동치과, 평택치과, 고덕국제신도시치과.',
  keywords: [
    '평택임플란트',
    '고덕동임플란트',
    '고덕동치과',
    '평택치과',
    '고덕국제신도시치과',
    '디지털임플란트',
    '고덕퍼스트치과',
    '전체임플란트',
    '충치치료',
    '사랑니발치',
    '치아미백',
    '평택고덕치과',
  ],
  authors: [{ name: '고덕퍼스트치과' }],
  creator: '고덕퍼스트치과',
  publisher: '고덕퍼스트치과',
  applicationName: '고덕퍼스트치과',
  referrer: 'origin-when-cross-origin',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://medisksu.co.kr',
    languages: {
      'ko-KR': 'https://medisksu.co.kr',
      'en-US': 'https://medisksu.co.kr/en',
      'ja-JP': 'https://medisksu.co.kr/jp',
      'zh-CN': 'https://medisksu.co.kr/cn',
      'vi-VN': 'https://medisksu.co.kr/vi',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://medisksu.co.kr',
    siteName: '고덕퍼스트치과',
    title: '고덕퍼스트치과 | 평택임플란트 고덕동치과',
    description: '평택 고덕동 전문 치과. 전체임플란트, 디지털임플란트, 충치치료, 사랑니발치, 치아미백 전문. 고덕동치과, 평택치과, 고덕국제신도시치과.',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: '고덕퍼스트치과 - 평택임플란트 전문',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '고덕퍼스트치과 | 평택임플란트 고덕동치과',
    description: '평택 고덕동 전문 치과. 전체임플란트, 디지털임플란트, 충치치료, 사랑니발치, 치아미백 전문.',
    images: ['/images/og-image.png'],
    site: '고덕퍼스트치과',
  },
  verification: {
    google: 'NxP-SqFlb3-zlFkVnfoHSUM_1StMILJppiVC2e235z8',
    other: {
      'naver-site-verification': ['7a5c6db3d09609e5ff5e536d77d8b8fb929da021', '58c2422319e4261a4b26681a71b48591a4415647'],
    },
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  other: {
    'subject': '고덕퍼스트치과 | 평택임플란트 고덕동치과',
    'copyright': '고덕퍼스트치과',
    'apple-mobile-web-app-title': '고덕퍼스트치과',
    'format-detection': 'telephone=no',
  },
};

// JSON-LD 구조화 데이터
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    // 로컬 비즈니스 정보
    {
      '@type': 'Dentist',
      '@id': 'https://medisksu.co.kr/#dentist',
      name: '고덕퍼스트치과',
      alternateName: '고덕퍼스트치과의원',
      description: '평택 고덕동 전문 치과. 전체임플란트, 디지털임플란트, 충치치료, 사랑니발치, 치아미백 전문.',
      url: 'https://medisksu.co.kr',
      telephone: '+82-31-611-3222',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '경기 평택시 고덕로 250 에듀스카이 4층 401, 402호',
        addressLocality: '평택시',
        addressRegion: '경기도',
        postalCode: '17791',
        addressCountry: 'KR',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 37.0686,
        longitude: 127.0606,
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Thursday'],
          opens: '10:00',
          closes: '21:00',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Tuesday', 'Wednesday', 'Friday'],
          opens: '10:00',
          closes: '19:00',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: 'Saturday',
          opens: '09:30',
          closes: '14:00',
        },
      ],
      image: 'https://medisksu.co.kr/images/og-image.png',
      priceRange: '$$',
      currenciesAccepted: 'KRW',
      paymentAccepted: 'Cash, Credit Card',
      areaServed: {
        '@type': 'City',
        name: '평택',
      },
      sameAs: [
        'https://naver.me/GSD1OqoS',
      ],
      medicalSpecialty: [
        'Dental Implant',
        'Cosmetic Dentistry',
        'General Dentistry',
      ],
    },
    // 웹사이트 정보
    {
      '@type': 'WebSite',
      '@id': 'https://medisksu.co.kr/#website',
      url: 'https://medisksu.co.kr',
      name: '고덕퍼스트치과',
      description: '평택 고덕동 전문 치과',
      publisher: {
        '@id': 'https://medisksu.co.kr/#dentist',
      },
      inLanguage: 'ko-KR',
    },
    // 조직 정보
    {
      '@type': 'Organization',
      '@id': 'https://medisksu.co.kr/#organization',
      name: '고덕퍼스트치과',
      url: 'https://medisksu.co.kr',
      logo: {
        '@type': 'ImageObject',
        url: 'https://medisksu.co.kr/favicon.svg',
      },
      sameAs: [
        'https://www.youtube.com/@medisksu',
        'https://blog.naver.com/medisksu',
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <TrackingScripts />
        {/* JSON-LD 구조화 데이터 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50`}
        suppressHydrationWarning
      >
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NF8HCJ7R"
            height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe>
        </noscript>
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}
