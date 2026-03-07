import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '고덕턱관절치료 | 고덕퍼스트치과',
  description: '평택 고덕 턱관절 치료 전문 치과. 턱관절 통증, 개구장애, 턱소리 정밀 진단. 통합치의학과 전문의가 직접 진료합니다.',
  keywords: ['고덕턱관절', '평택턱관절치료', '턱관절통증', '개구장애', '고덕퍼스트치과턱관절'],
  alternates: {
    canonical: 'https://medisksu.co.kr/tmj',
  },
  openGraph: {
    title: '고덕턱관절치료 | 고덕퍼스트치과',
    description: '평택 고덕 턱관절 치료 전문 치과. 통합치의학과 전문의가 직접 진료합니다.',
    url: 'https://medisksu.co.kr/tmj',
    siteName: '고덕퍼스트치과',
    type: 'website',
  },
};

const tmjJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalProcedure',
      '@id': 'https://medisksu.co.kr/tmj#service',
      name: '턱관절 치료',
      description: '턱관절 통증, 개구장애, 턱소리 등 턱관절 장애 정밀 진단 및 맞춤 치료',
      url: 'https://medisksu.co.kr/tmj',
      procedureType: 'Noninvasive',
      bodyLocation: 'Temporomandibular Joint',
      provider: {
        '@type': 'Dentist',
        name: '고덕퍼스트치과',
      },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://medisksu.co.kr/tmj#faq',
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
