import RegionArticlePage, { RegionArticleData } from '@/components/region/RegionArticlePage';
import { Metadata } from 'next';

const articleData: RegionArticleData = {
  regionName: '이충동',
  regionSlug: 'ichung',
  treatmentType: 'wisdom-tooth',
  title: '이충동 사랑니 발치, 전문의가 안전하게 발치합니다',
  subtitle: '이충동 주민을 위한 안전한 사랑니 발치. 조선대학교 치과병원 외래교수 출신 통합치의학과 전문의가 3D CT 정밀 진단 후 직접 발치합니다.',
  sections: [
    {
      title: '이충동에서 사랑니 때문에 고민이신가요?',
      content: [
        '이충동에 거주하시면서 사랑니가 욱신거리거나 잇몸이 반복적으로 붓는 증상을 경험하고 계신다면, 사랑니 상태를 확인해 볼 필요가 있습니다.',
        '사랑니는 모두 발치가 필요한 것은 아니지만, 매복되어 있거나 옆으로 누워 자라는 경우 인접 어금니에 충치를 유발하거나 잇몸 염증을 반복시킬 수 있습니다. 증상이 없더라도 정기 검진을 통해 사랑니 상태를 파악해 두는 것이 좋습니다.',
        '이충동에서 차량 10분 거리의 고덕퍼스트치과에서는 파노라마와 3D CT를 활용한 정밀 진단으로 사랑니의 위치와 신경 관계를 정확히 파악한 후 발치 여부를 결정합니다.',
      ],
    },
    {
      title: '3D CT로 신경 위치까지 정밀 분석',
      content: [
        '사랑니 발치에서 가장 주의해야 할 것은 하치조신경(아래턱 신경)의 손상입니다. 고덕퍼스트치과에서는 3D CT 촬영으로 사랑니 뿌리와 신경관의 거리를 밀리미터 단위로 측정합니다.',
        '이 정밀 데이터를 바탕으로 발치 접근 방향과 분할 방법을 미리 계획하여, 수술 중 예상치 못한 상황을 예방합니다. 이충동에서 오시는 환자분들께는 CT 영상을 함께 보며 사랑니 상태와 수술 계획을 상세히 설명드립니다.',
        '특히 하악 매복 사랑니처럼 난이도 높은 케이스도 정밀 진단을 통해 안전하게 대응합니다.',
      ],
    },
    {
      title: '대학병원 외래교수 출신 전문의의 발치',
      content: [
        '이동현 대표원장은 조선대학교 치과병원 외래교수로서 매복 사랑니, 과잉치, 난발치 등 다양한 고난도 발치를 수행해 온 풍부한 경험을 갖추고 있습니다.',
        '통합치의학과 전문의의 정확한 진단과 숙련된 술기로 최소 절개, 정밀 분할 발치를 시행하여 수술 시간을 단축하고 조직 손상을 최소화합니다.',
        '다른 치과에서 대학병원 의뢰를 권유받으신 분들도 고덕퍼스트치과에서 상담받아 보시길 권합니다. 대학병원급 전문성으로 편리하게 치료받으실 수 있습니다.',
      ],
    },
    {
      title: '발치 후 빠른 회복을 위한 체계적 관리',
      content: [
        '고덕퍼스트치과에서는 발치 후 맞춤 항염·진통 처방과 함께 회복을 위한 구체적인 가이드를 제공합니다. 냉찜질 방법, 식이 관리, 구강 위생 관리까지 세세하게 안내드립니다.',
        '발치 후 이상 증상 발생 시 즉시 연락하실 수 있는 체계를 갖추고 있어, 이충동에서 오시는 분들도 안심하고 치료받으실 수 있습니다. 대부분 발치 후 3~5일 이내에 일상생활 복귀가 가능합니다.',
      ],
    },
    {
      title: '이충동에서 고덕퍼스트치과 오시는 길',
      content: [
        '이충동에서 고덕퍼스트치과까지는 차량으로 약 10분 거리입니다. 고덕로를 이용하시면 에듀스카이 건물에 편리하게 도착하실 수 있습니다.',
        '건물 4층 401, 402호에 위치해 있으며, 건물 내 주차장 이용이 가능합니다. 사랑니 통증이 있으시다면 031-611-3222로 전화 예약 후 방문해 주세요.',
      ],
    },
  ],
  tips: [
    '사랑니 발치는 뼈의 탄성이 좋은 20~30대에 받는 것이 회복이 빠르고 합병증 위험이 적습니다.',
    '발치 전날 충분히 수면을 취하고, 당일에는 가벼운 식사를 하고 내원하세요.',
    '발치 후 24시간 동안은 세게 뱉거나 빨대 사용을 삼가세요. 지혈에 방해될 수 있습니다.',
    '수술 후 2~3일간 15분씩 냉찜질과 휴식을 반복하면 부기 완화에 효과적입니다.',
    '처방된 항생제는 증상이 호전되어도 반드시 끝까지 복용하여 감염을 예방하세요.',
  ],
  conclusion: '이충동에서 사랑니 발치를 고민하고 계시다면, 대학병원급 장비와 전문의 직접 시술이 가능한 고덕퍼스트치과를 방문해 주세요. 3D CT 정밀 진단과 풍부한 발치 경험으로 안전하고 빠른 회복을 도와드립니다. 전화 031-611-3222로 상담 예약하세요.',
  faqs: [
    {
      question: '사랑니 발치 비용은 얼마인가요?',
      answer: '사랑니 발치는 대부분 건강보험이 적용됩니다. 단순 발치부터 매복 사랑니까지 보험 적용이 가능하며, 본인부담금은 보통 수만 원 수준입니다. 정확한 비용은 CT 촬영 후 난이도에 따라 안내드립니다.',
    },
    {
      question: '매복 사랑니 발치 후 얼마나 쉬어야 하나요?',
      answer: '대부분 발치 다음 날부터 일상적인 활동이 가능합니다. 다만 격렬한 운동이나 음주는 3~5일간 피해 주세요. 부기는 2~3일째 가장 심하다가 이후 점차 빠집니다.',
    },
    {
      question: '사랑니가 아프지 않은데도 빼야 하나요?',
      answer: '통증이 없더라도 매복 사랑니나 방향이 비정상적인 사랑니는 인접 치아에 충치나 잇몸 질환을 유발할 수 있습니다. 정기 검진으로 사랑니 상태를 확인하고, 전문의 진단에 따라 예방적 발치를 고려하시는 것이 좋습니다.',
    },
    {
      question: '이충동에서 사랑니 상담만 받을 수 있나요?',
      answer: '네, 상담과 검진만 받으셔도 됩니다. 파노라마 촬영으로 사랑니 상태를 확인하고, 발치가 필요한 경우와 적절한 시기를 설명드립니다. 당일 발치를 원하시면 바로 진행할 수도 있습니다. 전화 031-611-3222로 예약하세요.',
    },
  ],
};

export const metadata: Metadata = {
  title: '이충동 사랑니 발치 | 대학병원급 안전 발치 | 고덕퍼스트치과',
  description: '이충동 사랑니 발치 전문 치과. 대학병원 외래교수 출신 통합치의학과 전문의 직접 시술. 3D CT 정밀 진단, 매복 사랑니 안전 발치. 이충동에서 차량 10분. 031-611-3222',
  keywords: '이충동 사랑니, 이충동 사랑니 발치, 평택 사랑니 발치, 고덕퍼스트치과, 매복 사랑니, 이충동 치과',
  alternates: {
    canonical: 'https://gdfirstdent.com/ichung/wisdom-tooth',
  },
  openGraph: {
    title: '이충동 사랑니 발치 | 고덕퍼스트치과',
    description: '이충동 주민을 위한 대학병원급 사랑니 발치. 통합치의학과 전문의 직접 시술.',
    url: 'https://gdfirstdent.com/ichung/wisdom-tooth',
    siteName: '고덕퍼스트치과',
    locale: 'ko_KR',
    type: 'article',
  },
};

export default function IchungWisdomToothPage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: articleData.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: '홈',
        item: 'https://gdfirstdent.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: '이충동 치과',
        item: 'https://gdfirstdent.com/ichung',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: '이충동 사랑니 발치',
        item: 'https://gdfirstdent.com/ichung/wisdom-tooth',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <RegionArticlePage data={articleData} />
    </>
  );
}
