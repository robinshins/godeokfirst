import RegionArticlePage, { RegionArticleData } from '@/components/region/RegionArticlePage';
import { Metadata } from 'next';

const articleData: RegionArticleData = {
  regionName: '서정동',
  regionSlug: 'seojeong',
  treatmentType: 'wisdom-tooth',
  title: '서정동 사랑니 발치, 대학병원급 안전 발치',
  subtitle: '서정역 인근 서정동 주민을 위한 사랑니 발치. 조선대학교 치과병원 외래교수 출신 전문의가 매복 사랑니도 안전하게 발치합니다.',
  sections: [
    {
      title: '사랑니 발치, 왜 미루면 안 될까요?',
      content: [
        '서정동에서 바쁜 일상을 보내시다 보면 사랑니 통증을 참고 넘기시는 분들이 많습니다. 하지만 사랑니는 방치할수록 인접 어금니까지 충치가 번지거나 잇몸 염증이 반복되어 치료 범위가 커질 수 있습니다.',
        '특히 잇몸 속에 매복된 사랑니나 옆으로 누워 자라는 사랑니는 겉으로 보이지 않아 문제가 심각해진 후에야 발견되는 경우가 많습니다. 주기적인 검진으로 사랑니 상태를 확인하는 것이 중요합니다.',
        '고덕퍼스트치과에서는 파노라마와 3D CT를 통한 정밀 진단으로 사랑니의 위치, 뿌리 형태, 하치조신경과의 관계를 정확히 파악한 후 발치 여부를 결정합니다.',
      ],
    },
    {
      title: '3D CT 기반 정밀 진단',
      content: [
        '사랑니 발치에서 가장 중요한 것은 정확한 사전 진단입니다. 고덕퍼스트치과에서는 3차원 CT 촬영을 통해 사랑니의 매복 깊이, 뿌리 개수와 방향, 하악관(신경관)과의 거리를 밀리미터 단위로 측정합니다.',
        '이 정밀 데이터를 바탕으로 최적의 발치 접근법을 계획하여, 수술 중 예상치 못한 상황을 방지하고 신경 손상 위험을 최소화합니다.',
        '서정동에서 내원하시는 환자분들께는 CT 영상을 함께 보며 사랑니 상태와 발치 과정을 상세히 설명드립니다.',
      ],
    },
    {
      title: '대학병원 출신 전문의의 안전한 발치',
      content: [
        '이동현 대표원장은 조선대학교 치과병원에서 외래교수로 활동하며 매복 사랑니, 과잉치, 난발치 등 다양한 고난도 케이스를 수행해 왔습니다.',
        '통합치의학과 전문의로서 구강 전체를 종합적으로 평가하고, 최소 절개와 정밀한 분할 발치 기법으로 주변 조직 손상을 줄입니다. 풍부한 임상 경험이 빠른 시술과 적은 합병증으로 이어집니다.',
        '일반 치과에서 대학병원 의뢰를 권유받으셨다면, 고덕퍼스트치과에서 대학병원급 발치가 가능한지 먼저 상담받아 보세요.',
      ],
    },
    {
      title: '발치 후 빠른 회복을 위한 관리',
      content: [
        '사랑니 발치 후 회복 속도는 발치 기술뿐 아니라 사후 관리에 따라 크게 달라집니다. 고덕퍼스트치과에서는 발치 후 맞춤 항염·진통 처방과 함께 구체적인 회복 가이드를 제공합니다.',
        '발치 당일 냉찜질 방법, 식사 요령, 구강 위생 관리법까지 세세하게 안내드리며, 이상 증상 발생 시 즉시 연락하실 수 있는 시스템을 갖추고 있습니다.',
        '서정동 거주 환자분들도 대부분 발치 후 3~5일 이내에 일상생활 복귀가 가능합니다.',
      ],
    },
    {
      title: '서정동에서 고덕퍼스트치과 오시는 길',
      content: [
        '서정동에서 고덕퍼스트치과까지는 차량으로 약 5분 거리입니다. 고덕로를 따라 고덕국제신도시 방면으로 오시면 에듀스카이 건물 4층에 위치해 있습니다.',
        '서정역(SRT/KTX) 앞에서 고덕 방면 버스를 이용하실 수도 있으며, 건물 내 주차장도 마련되어 있어 차량 방문이 편리합니다.',
      ],
    },
  ],
  tips: [
    '사랑니 발치는 뼈가 탄성 있는 20~30대에 받는 것이 회복이 빠릅니다.',
    '발치 전날 충분히 주무시고, 당일 가벼운 식사를 하고 내원하세요.',
    '발치 후 24시간 동안은 침을 뱉거나 빨대를 사용하지 마세요.',
    '수술 후 2~3일간 냉찜질을 15분 간격으로 반복하면 부기 완화에 효과적입니다.',
    '처방된 항생제는 증상이 나아져도 끝까지 복용해야 감염을 예방할 수 있습니다.',
  ],
  conclusion: '서정동에서 사랑니 때문에 불편하셨다면, 대학병원급 장비와 전문의 직접 시술이 가능한 고덕퍼스트치과를 방문해 주세요. 3D CT 정밀 진단과 풍부한 발치 경험으로 안전하고 빠른 회복을 도와드립니다. 전화 031-611-3222로 상담 예약하세요.',
  faqs: [
    {
      question: '사랑니 발치 비용은 얼마인가요?',
      answer: '사랑니 발치는 대부분 건강보험이 적용됩니다. 단순 발치부터 매복 사랑니까지 보험 적용이 가능하며, 정확한 비용은 CT 촬영 후 난이도에 따라 안내드립니다. 본인부담금은 보통 수만 원 수준입니다.',
    },
    {
      question: '매복 사랑니도 당일 발치가 가능한가요?',
      answer: '네, 대부분의 매복 사랑니는 당일 발치가 가능합니다. 다만 전신 질환이 있거나 사랑니가 하악 신경에 매우 근접한 경우에는 정밀 검사 후 별도 수술 일정을 잡을 수 있습니다.',
    },
    {
      question: '사랑니 발치가 많이 아프지 않나요?',
      answer: '표면 마취와 국소 마취를 단계적으로 적용하여 시술 중 통증은 거의 없습니다. 발치 후에는 처방된 진통제로 충분히 관리 가능하며, 최소 절개 기법으로 수술 후 통증과 부기도 최소화합니다.',
    },
    {
      question: '사랑니 4개를 한꺼번에 뽑을 수 있나요?',
      answer: '일반적으로 한쪽(좌측 또는 우측) 2개씩 나누어 발치하는 것을 권장합니다. 한쪽을 먼저 발치하고 반대쪽으로 식사하실 수 있어 생활 불편이 줄어듭니다. 개인 상황에 따라 4개 동시 발치도 가능하니 상담 시 결정하실 수 있습니다.',
    },
  ],
};

export const metadata: Metadata = {
  title: '서정동 사랑니 발치 | 대학병원급 안전 발치 | 고덕퍼스트치과',
  description: '서정동 사랑니 발치 전문 치과. 대학병원 외래교수 출신 통합치의학과 전문의 직접 시술. 3D CT 정밀 진단, 매복 사랑니 안전 발치. 서정역에서 차량 5분. 031-611-3222',
  keywords: '서정동 사랑니, 서정동 사랑니 발치, 평택 사랑니 발치, 고덕퍼스트치과, 매복 사랑니, 서정동 치과',
  alternates: { canonical: 'https://medisksu.co.kr/seojeong/wisdom-tooth' },
  openGraph: {
    title: '서정동 사랑니 발치 | 고덕퍼스트치과',
    description: '서정동 주민을 위한 대학병원급 사랑니 발치. 통합치의학과 전문의 직접 시술.',
    url: 'https://medisksu.co.kr/seojeong/wisdom-tooth',
    siteName: '고덕퍼스트치과',
    locale: 'ko_KR',
    type: 'article',
  },
};

export default function SeojeongWisdomToothPage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: articleData.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: '홈', item: 'https://medisksu.co.kr' },
      { '@type': 'ListItem', position: 2, name: '서정동 치과', item: 'https://medisksu.co.kr/seojeong' },
      { '@type': 'ListItem', position: 3, name: '서정동 사랑니 발치', item: 'https://medisksu.co.kr/seojeong/wisdom-tooth' },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <RegionArticlePage data={articleData} />
    </>
  );
}
