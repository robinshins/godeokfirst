import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '고덕동충치치료 평택충치치료 | 고덕퍼스트치과',
  description: '고덕동충치치료 평택충치치료 전문. 통합치의학과 전문의, 정밀 진단, 자연치아 보존 치료. 발치 대신 살리는 치료.',
  keywords: ['고덕동충치치료', '평택충치치료', '고덕퍼스트치과충치', '고덕동신경치료', '평택신경치료'],
  alternates: {
    canonical: 'https://gdfirstdent.com/cavity-treatment',
  },
  openGraph: {
    title: '고덕동충치치료 평택충치치료 | 고덕퍼스트치과',
    description: '고덕동충치치료 평택충치치료 전문. 통합치의학과 전문의, 정밀 진단, 자연치아 보존 치료.',
    url: 'https://gdfirstdent.com/cavity-treatment',
    siteName: '고덕퍼스트치과',
    type: 'website',
    images: [{ url: '/icons/cavity.png', width: 200, height: 200 }],
  },
};

// 충치치료 페이지 전용 JSON-LD
const cavityJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalProcedure',
      '@id': 'https://gdfirstdent.com/cavity-treatment#service',
      name: '고덕동충치치료 평택충치치료',
      description: '고덕동충치치료 평택충치치료 전문. 발치 대신 살리는 치료, 통합치의학과 전문의의 정밀 치료.',
      image: 'https://gdfirstdent.com/icons/cavity.png',
      url: 'https://gdfirstdent.com/cavity-treatment',
      procedureType: 'Noninvasive',
      bodyLocation: 'Teeth',
      provider: {
        '@type': 'Dentist',
        name: '고덕퍼스트치과',
      },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://gdfirstdent.com/cavity-treatment#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: '다른 곳에서 발치하라는데 살릴 수 있나요?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '네, 가능성이 높습니다. 고덕퍼스트치과는 통합치의학과 전문의가 정밀 진단합니다. 일반 치과에서 보이지 않던 살릴 방법을 찾을 수 있으며, 자연치아를 살리는 것을 최우선으로 합니다.',
          },
        },
        {
          '@type': 'Question',
          name: '신경치료, 아프지 않나요?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '최신 통증 완화 마취 시스템과 미세현미경으로 통증을 최소화합니다. 불안하신 분은 의식하진정요법(수면마취)으로 편안하게 시술받으실 수 있습니다.',
          },
        },
        {
          '@type': 'Question',
          name: '충치 치료, 시간이 오래 걸리나요?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '초기 충치는 레진 치료로 빠르게 완료되며, 넓은 충치는 인레이 시스템으로 24시간 내 치료가 가능합니다. 신경치료가 필요한 경우 2-3회 내원이 필요하지만, 미세현미경 정밀 치료로 치료 횟수를 최소화합니다.',
          },
        },
        {
          '@type': 'Question',
          name: '미세현미경 치료가 일반 치료와 어떻게 다른가요?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '미세현미경은 치아를 25배까지 확대하여 육안으로 보이지 않는 충치, 크랙, 신경관까지 정확히 확인합니다. 이를 통해 정밀한 진단과 치료가 가능하며, 재발과 부작용을 최소화합니다.',
          },
        },
        {
          '@type': 'Question',
          name: '충치 치료, 보험 적용되나요?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '네, 대부분의 충치 치료는 건강보험이 적용됩니다. 레진 치료, 신경치료, 크라운 등 기본 치료는 보험 혜택을 받으실 수 있으며, 인레이/온레이는 본인 부담이 발생할 수 있습니다.',
          },
        },
      ],
    },
  ],
};

export default function CavityTreatmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(cavityJsonLd) }}
      />
      {children}
    </>
  );
}
