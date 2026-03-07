import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '고덕동잇몸치료 평택잇몸치료 | 고덕퍼스트치과',
  description: '고덕동잇몸치료 평택잇몸치료 전문. NSK varios 970 특수장비, 페리오클린 관리, 4단계 통증완화 시스템. 연 1회 스케일링 보험 적용.',
  keywords: ['고덕동잇몸치료', '평택잇몸치료', '고덕동스케일링', '평택스케일링', '고덕퍼스트치과잇몸치료'],
  alternates: {
    canonical: 'https://gdfirstdent.com/gum-care',
  },
  openGraph: {
    title: '고덕동잇몸치료 평택잇몸치료 | 고덕퍼스트치과',
    description: '고덕동잇몸치료 평택잇몸치료 전문. NSK varios 970 특수장비, 페리오클린 관리, 4단계 통증완화 시스템.',
    url: 'https://gdfirstdent.com/gum-care',
    siteName: '고덕퍼스트치과',
    type: 'website',
    images: [{ url: '/icons/gum.png', width: 200, height: 200 }],
  },
};

// 잇몸치료 페이지 전용 JSON-LD
const gumCareJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalProcedure',
      '@id': 'https://gdfirstdent.com/gum-care#service',
      name: '고덕동잇몸치료 평택잇몸치료',
      description: '고덕동잇몸치료 평택잇몸치료 전문. 성인 80%가 앓는 잇몸질환, 정기적 관리로 평생 건강한 치아.',
      image: 'https://gdfirstdent.com/icons/gum.png',
      url: 'https://gdfirstdent.com/gum-care',
      procedureType: 'Noninvasive',
      bodyLocation: 'Gums',
      provider: {
        '@type': 'Dentist',
        name: '고덕퍼스트치과',
      },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://gdfirstdent.com/gum-care#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: '스케일링만 받으면 충분하지 않나요?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '스케일링은 치석 제거의 첫 단계입니다. 하지만 잇몸질환이 진행된 경우, NSK varios 970 같은 특수장비로 잇몸 깊숙한 세균까지 제거하는 정밀 치료가 필요합니다. 6개월 간격으로 잇몸치료를 받으시면 자연치아를 오래 보존할 수 있습니다.',
          },
        },
        {
          '@type': 'Question',
          name: '잇몸치료가 아프다던데 괜찮을까요?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '걱정하지 마세요. 가글마취, 도포마취, 통증 완화 전동마취기, 신경관마취기까지 4단계 통증완화 시스템을 갖추고 있습니다. 많은 환자분들이 "치과 치료가 이렇게 편할 수도 있구나"라고 놀라워하십니다.',
          },
        },
        {
          '@type': 'Question',
          name: '얼마나 자주 받아야 하나요?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '기본 스케일링은 연 1회(보험 적용), 잇몸치료는 6개월마다 받으시는 것이 이상적입니다. 잇몸 상태가 심한 경우 3개월 간격으로 관리하시면 더욱 효과적입니다.',
          },
        },
        {
          '@type': 'Question',
          name: '보험 적용은 어떻게 되나요?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '스케일링은 연 1회 건강보험이 적용됩니다. 잇몸치료가 필요한 경우에는 보험 적용을 받으실 수 있으며, 나누어서 진행됩니다.',
          },
        },
        {
          '@type': 'Question',
          name: '왜 다른 치과는 잇몸치료를 안 하려고 하나요?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '솔직히 말씀드리면, 잇몸치료보다 임플란트가 수익이 더 좋기 때문입니다. 하지만 저희는 자연치아 보존을 최우선으로 하며, 보존과 전문의 협진으로 높은 성공률을 자랑합니다.',
          },
        },
      ],
    },
  ],
};

export default function GumCareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gumCareJsonLd) }}
      />
      {children}
    </>
  );
}
