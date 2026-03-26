import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '고덕동cavity treatment 평택cavity treatment | Godeok First Dental',
  description: '고덕동cavity treatment 평택cavity treatment 전문. Comprehensive Dentistry Specialist, 정밀 진단, 자연치아 보존 치료. 발치 대신 살리는 치료.',
  keywords: ['고덕동cavity treatment', '평택cavity treatment', 'Godeok First Dental충치', '고덕동신경치료', '평택신경치료'],
  alternates: {
    canonical: 'https://gdfirstdent.com/cavity-treatment',
  },
  openGraph: {
    title: '고덕동cavity treatment 평택cavity treatment | Godeok First Dental',
    description: '고덕동cavity treatment 평택cavity treatment 전문. Comprehensive Dentistry Specialist, 정밀 진단, 자연치아 보존 치료.',
    url: 'https://gdfirstdent.com/cavity-treatment',
    siteName: 'Godeok First Dental',
    type: 'website',
    images: [{ url: '/icons/cavity.png', width: 200, height: 200 }],
  },
};

// cavity treatment 페이지 전용 JSON-LD
const cavityJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalProcedure',
      '@id': 'https://gdfirstdent.com/cavity-treatment#service',
      name: '고덕동cavity treatment 평택cavity treatment',
      description: '고덕동cavity treatment 평택cavity treatment 전문. 발치 대신 살리는 치료, Comprehensive Dentistry Specialist의 정밀 치료.',
      image: 'https://gdfirstdent.com/icons/cavity.png',
      url: 'https://gdfirstdent.com/cavity-treatment',
      procedureType: 'Noninvasive',
      bodyLocation: 'Teeth',
      provider: {
        '@type': 'Dentist',
        name: 'Godeok First Dental',
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
            text: '네, 가능성이 높습니다. Godeok First Dental는 Comprehensive Dentistry Specialist가 정밀 진단합니다. 일반 치과에서 보이지 않던 살릴 방법을 찾을 수 있으며, 자연치아를 살리는 것을 최우선으로 합니다.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does root canal treatment hurt?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '최신 통증 완화 마취 시스템으로 minimizes pain. Sedation available for anxious patients.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does cavity treatment take long?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Early cavities quickly completed with resin, larger cavities with inlay system treatment within 24 hours. Root canal requires 2-3 visits, precise treatment minimizes visits.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is cavity treatment covered by insurance?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, most cavity treatments are covered by health insurance. Basic treatments like resin, root canal, and crowns qualify for insurance, Inlays/onlays may require out-of-pocket payment.',
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
