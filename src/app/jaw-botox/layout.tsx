import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '고덕턱보톡스 평택턱보톡스 | 고덕퍼스트치과',
  description: '평택 고덕 턱보톡스(교근 보톡스). 이갈이·이 악물기·턱 근육 통증·사각턱(교근 비대)을 통합치의학과 전문의가 교합·턱관절 진단과 함께 시술합니다. 씹는 힘을 지키는 용량 설계, 이갈이 장치·턱관절 치료 연계. 야간·토요일 진료. 031-611-3222',
  keywords: ['고덕턱보톡스', '평택턱보톡스', '교근보톡스', '이갈이보톡스', '사각턱보톡스', '치과보톡스', '고덕퍼스트치과턱보톡스'],
  alternates: {
    canonical: 'https://gdfirstdent.co.kr/jaw-botox',
  },
  openGraph: {
    title: '고덕턱보톡스 평택턱보톡스 | 고덕퍼스트치과',
    description: '평택 고덕 턱보톡스. 교근은 씹는 근육, 턱을 아는 치과에서 통합치의학과 전문의가 직접 시술합니다.',
    url: 'https://gdfirstdent.co.kr/jaw-botox',
    siteName: '고덕퍼스트치과',
    type: 'website',
    images: [
      {
        url: '/고덕og이미지.png',
        width: 1200,
        height: 630,
        alt: '고덕퍼스트치과 - 턱보톡스',
      },
    ],
  },
};

const jawBotoxJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalProcedure',
      '@id': 'https://gdfirstdent.co.kr/jaw-botox#service',
      name: '턱보톡스 (교근 보톡스)',
      description: '이갈이·이 악물기·턱 근육 통증·교근 비대(사각턱)에 대한 교근 보툴리눔 톡신 주사. 교합·턱관절 진단 후 저작 기능을 유지하는 용량으로 시술',
      url: 'https://gdfirstdent.co.kr/jaw-botox',
      procedureType: 'Percutaneous',
      bodyLocation: 'Masseter muscle',
      provider: {
        '@type': 'Dentist',
        name: '고덕퍼스트치과',
      },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://gdfirstdent.co.kr/jaw-botox#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: '턱보톡스, 피부과가 아니라 치과에서도 맞을 수 있나요?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '네. 턱보톡스가 들어가는 교근(깨물근)은 음식을 씹는 저작근으로 치과 진료 영역입니다. 치과의사의 보톡스 시술은 2016년 대법원 전원합의체 판결로 치과의사 면허 범위에 속한다고 인정되었습니다. 치과에서는 이갈이·교합·턱관절 상태를 함께 진단하고, 씹는 기능을 지키는 범위에서 용량을 정합니다.',
          },
        },
        {
          '@type': 'Question',
          name: '턱보톡스 효과는 얼마나 지속되나요?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '보통 1~2주부터 교근 힘이 줄어드는 것을 느끼고, 턱선 변화는 4~8주 뒤 나타납니다. 효과는 3~6개월 정도 지속되며 개인차가 있습니다. 재시술은 3개월 이상 간격을 권합니다.',
          },
        },
        {
          '@type': 'Question',
          name: '이갈이에 턱보톡스가 도움이 되나요?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '이갈이로 교근에 걸리는 힘을 줄여 치아 마모, 근육 통증, 아침 턱 피로를 줄이는 데 도움이 될 수 있습니다. 다만 이갈이 습관 자체를 없애는 것은 아니어서, 필요하면 이갈이 장치(스플린트)와 병행합니다.',
          },
        },
        {
          '@type': 'Question',
          name: '턱보톡스 후 씹는 것이 불편해지지 않나요?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '시술 후 1~2주간 단단한 음식을 씹을 때 힘이 빠진 느낌이 들 수 있으며 대부분 적응됩니다. 치과에서는 치아·보철·턱관절 상태를 보며 저작 기능을 유지하는 용량으로 설계합니다.',
          },
        },
        {
          '@type': 'Question',
          name: '턱보톡스 비용은 얼마이고 보험이 적용되나요?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '턱보톡스는 건강보험이 적용되지 않는 비급여 항목입니다. 고덕퍼스트치과의 비급여 진료비용은 보톡스 50유닛 100,000원, 100유닛 150,000원(부가세 별도)이며, 필요 용량은 진단 후 결정됩니다.',
          },
        },
        {
          '@type': 'Question',
          name: '턱보톡스 시술은 아픈가요? 바로 일상생활이 가능한가요?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '가는 주사침으로 좌우 교근 몇 지점에 나눠 주입하며 10분 내외로 끝납니다. 필요하면 표면마취나 냉각 후 진행합니다. 시술 후 바로 일상생활이 가능하지만, 당일에는 주사 부위 마사지, 사우나, 음주, 격한 운동을 피해야 합니다.',
          },
        },
      ],
    },
  ],
};

export default function JawBotoxLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jawBotoxJsonLd) }}
      />
      {children}
    </>
  );
}
