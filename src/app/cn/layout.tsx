import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: '庆星大Medis牙科 | 釜山种植牙专业',
    template: '%s | 庆星大Medis牙科',
  },
  description: '釜山大延洞专业牙科。全口种植牙、数字化种植牙、龋齿治疗、智齿拔除、牙齿美白专业。10年零返修记录。',
  keywords: [
    '釜山牙科',
    '韩国种植牙',
    '釜山种植牙',
    '韩国牙科旅游',
    '中文牙科韩国',
    '智齿拔除韩国',
    '牙齿美白韩国',
    '庆星大Medis牙科',
  ],
  alternates: {
    canonical: 'https://medisksu.co.kr/cn',
    languages: {
      'ko-KR': 'https://medisksu.co.kr',
      'en-US': 'https://medisksu.co.kr/en',
      'ja-JP': 'https://medisksu.co.kr/jp',
      'zh-CN': 'https://medisksu.co.kr/cn',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: 'https://medisksu.co.kr/cn',
    siteName: '庆星大Medis牙科',
    title: '庆星大Medis牙科 | 釜山种植牙专业',
    description: '釜山大延洞专业牙科。全口种植牙、数字化种植牙、智齿拔除专业。',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '庆星大Medis牙科 | 釜山种植牙专业',
    images: ['/images/og-image.png'],
  },
};

const jsonLdCn = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Dentist',
      name: '庆星大Medis牙科',
      description: '釜山大延洞专业牙科。全口种植牙、数字化种植牙、龋齿治疗、智齿拔除、牙齿美白专业。',
      url: 'https://medisksu.co.kr/cn',
      telephone: '+82-51-628-2879',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '釜山广域市南区水营路312, 3楼',
        addressLocality: '釜山',
        addressCountry: 'KR',
      },
      availableLanguage: ['Korean', 'Chinese', 'English'],
    },
    {
      '@type': 'ItemList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, item: { '@type': 'Service', name: '全口种植牙', url: 'https://medisksu.co.kr/cn#implant' } },
        { '@type': 'ListItem', position: 2, item: { '@type': 'Service', name: '智齿拔除', url: 'https://medisksu.co.kr/cn/wisdom-tooth' } },
        { '@type': 'ListItem', position: 3, item: { '@type': 'Service', name: '牙齿美白', url: 'https://medisksu.co.kr/cn/whitening' } },
      ],
    },
  ],
};

export default function CnLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdCn) }} />
      {children}
    </>
  );
}
