import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '고덕동미백 치아미백 | 고덕퍼스트치과',
  description: '고덕동 치아미백 전문 치과. 오스템 뷰티스 시스템, 스케일링과 함께 할인. 1회 시술로 즉시 효과.',
  keywords: ['고덕동미백', '평택치아미백', '고덕퍼스트치과미백', '치아미백'],
  alternates: {
    canonical: 'https://gdfirstdent.com/whitening',
  },
  openGraph: {
    title: '고덕동미백 치아미백 | 고덕퍼스트치과',
    description: '고덕동 치아미백 전문 치과. 오스템 뷰티스 시스템, 스케일링과 함께 할인.',
    url: 'https://gdfirstdent.com/whitening',
    siteName: '고덕퍼스트치과',
    type: 'website',
    images: [{ url: '/icons/whitening.png', width: 200, height: 200 }],
  },
};

// 미백 페이지 전용 JSON-LD
const whiteningJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalProcedure',
      '@id': 'https://gdfirstdent.com/whitening#service',
      name: '치아 미백',
      description: '안전하고 효과적인 치아 미백 시술, 스케일링과 함께 50% 할인',
      image: 'https://gdfirstdent.com/icons/whitening.png',
      url: 'https://gdfirstdent.com/whitening',
      procedureType: 'Noninvasive',
      bodyLocation: 'Teeth',
      provider: {
        '@type': 'Dentist',
        name: '고덕퍼스트치과',
      },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://gdfirstdent.com/whitening#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: '치과 미백이 셀프 미백보다 정말 효과가 좋나요?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '네, 확실히 다릅니다. 치과에서는 15% 고농도 과산화수소 의약품을 사용하여 즉각적인 효과를 볼 수 있습니다. 셀프 미백은 저농도 일반의약품으로 효과가 제한적이며, 치과 미백은 전문가가 잇몸을 완벽히 보호한 후 시술하므로 훨씬 안전합니다.',
          },
        },
        {
          '@type': 'Question',
          name: '미백 후 치아가 시리지 않나요?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '고덕퍼스트치과는 오스템 뷰티스 시스템을 사용하며, 지각과민 방지제가 함유되어 있어 시림 증상이 최소화됩니다. 시술 전 치아 상태를 정밀 진단하고, 시술 후에도 관리 방법을 상세히 안내해 드려 불편함 없이 밝은 치아를 유지하실 수 있습니다.',
          },
        },
        {
          '@type': 'Question',
          name: '미백 효과는 얼마나 지속되나요?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '일반적으로 1-2년 정도 지속되며, 개인의 식습관과 관리 상태에 따라 차이가 있습니다. 커피, 와인, 흡연 등 색소 침착 요인을 줄이고, 정기적인 스케일링과 관리를 받으시면 더 오래 유지하실 수 있습니다.',
          },
        },
        {
          '@type': 'Question',
          name: '스케일링과 미백을 같이 받으면 할인되나요?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '네, 국가 검진 스케일링을 받으실 때 미백을 함께 받으시면 50% 할인 혜택을 드립니다. 기본 미백(1 사이클)과 베스트 미백(2회 내원, 4 사이클) 모두 할인 적용되며, 스케일링으로 치아 표면을 깨끗하게 한 후 미백을 진행하면 효과가 더욱 좋습니다.',
          },
        },
      ],
    },
  ],
};

export default function WhiteningLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(whiteningJsonLd) }}
      />
      {children}
    </>
  );
}
