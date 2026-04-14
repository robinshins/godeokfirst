import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '고덕턱관절치료 | Godeok First Dental',
  description: 'Pyeongtaek Godeok 턱관절 치료 dental specialist. 턱관절 통증, 개구장애, 턱소리 정밀 진단. Comprehensive Dentistry Specialist treats directly.',
  keywords: ['고덕턱관절', '평택턱관절치료', '턱관절통증', '개구장애', 'Godeok First Dental턱관절'],
  alternates: {
    canonical: 'https://gdfirstdent.co.kr/tmj',
  },
  openGraph: {
    title: '고덕턱관절치료 | Godeok First Dental',
    description: 'Pyeongtaek Godeok 턱관절 치료 dental specialist. Comprehensive Dentistry Specialist treats directly.',
    url: 'https://gdfirstdent.co.kr/tmj',
    siteName: 'Godeok First Dental',
    type: 'website',
    images: [
      {
        url: '/고덕og이미지.png',
        width: 1200,
        height: 630,
        alt: 'Godeok First Dental - TMJ Treatment',
      },
    ],
  },
};

const tmjJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalProcedure',
      '@id': 'https://gdfirstdent.co.kr/tmj#service',
      name: '턱관절 치료',
      description: '턱관절 통증, 개구장애, 턱소리 등 턱관절 장애 정밀 진단 및 맞춤 치료',
      url: 'https://gdfirstdent.co.kr/tmj',
      procedureType: 'Noninvasive',
      bodyLocation: 'Temporomandibular Joint',
      provider: {
        '@type': 'Dentist',
        name: 'Godeok First Dental',
      },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://gdfirstdent.co.kr/tmj#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: '턱관절 치료는 어떤 증상일 때 받아야 하나요?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '입을 벌릴 때 턱에서 소리가 나거나, 턱이 아프거나, 입이 잘 안 벌어지는 경우, 두통이나 귀 통증이 동반되는 경우 턱관절 치료를 받으시는 것이 좋습니다.',
          },
        },
        {
          '@type': 'Question',
          name: '턱관절 치료 기간은 얼마나 걸리나요?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '증상의 정도에 따라 다르지만, 보통 스플린트 치료 기준 3~6개월 정도 소요됩니다. 초기 증상은 약물치료와 물리치료로 1~2주 내에 호전되는 경우도 많습니다.',
          },
        },
        {
          '@type': 'Question',
          name: '스플린트(교합안정장치)는 무엇인가요?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '스플린트는 턱관절에 가해지는 비정상적인 힘을 분산시키고, 관절의 안정적인 위치를 잡아주는 맞춤형 장치입니다. 주로 수면 중 착용하며, 이갈이나 이 악물기로 인한 턱관절 손상을 예방합니다.',
          },
        },
      ],
    },
  ],
};

export default function TmjLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(tmjJsonLd) }}
      />
      {children}
    </>
  );
}
