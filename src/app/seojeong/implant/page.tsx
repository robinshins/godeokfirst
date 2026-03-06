import RegionArticlePage, { RegionArticleData } from '@/components/region/RegionArticlePage';
import { Metadata } from 'next';

const articleData: RegionArticleData = {
  regionName: '서정동',
  regionSlug: 'seojeong',
  treatmentType: 'implant',
  title: '서정동 임플란트 치과, 고덕퍼스트치과에서 안전하게',
  subtitle: '서정역 인근 서정동 주민을 위한 디지털 가이드 임플란트. 통합치의학과 전문의가 처음부터 끝까지 책임 진료합니다.',
  sections: [
    {
      title: '서정동에서 임플란트 치과를 찾고 계신가요?',
      content: [
        '서정동은 SRT·KTX 서정역을 중심으로 형성된 평택시 중심 주거지역입니다. 교통이 편리한 만큼 서울이나 수도권으로 출퇴근하시는 분들이 많은데, 바쁜 일상 속에서 치과 치료를 미루시는 경우가 적지 않습니다.',
        '임플란트는 시기를 놓치면 주변 잇몸뼈가 흡수되어 추가 시술이 필요해질 수 있습니다. 서정동에서 차량으로 약 5분 거리에 위치한 고덕퍼스트치과에서는 대학병원급 장비와 전문의 직접 진료로 정확하고 안전한 임플란트를 제공합니다.',
        '특히 고덕퍼스트치과 이동현 대표원장은 통합치의학과 전문의이자 조선대학교 치과병원 외래교수로, 단순 식립뿐 아니라 뼈이식, 상악동거상술 등 난이도 높은 케이스까지 폭넓게 대응합니다.',
      ],
    },
    {
      title: '디지털 가이드 수술이란?',
      content: [
        '고덕퍼스트치과의 임플란트는 디지털 가이드 수술 시스템을 기반으로 진행됩니다. 3D CT 촬영 데이터를 바탕으로 컴퓨터 시뮬레이션을 통해 최적의 식립 위치, 각도, 깊이를 미리 계획합니다.',
        '이 계획에 맞춰 제작된 가이드 장치를 사용하여 수술하므로, 절개 범위를 최소화하고 신경·혈관 손상 위험을 줄일 수 있습니다. 수술 시간도 단축되어 서정동에서 오시는 환자분들의 내원 부담이 줄어듭니다.',
        '디지털 가이드 수술은 특히 잇몸뼈 상태가 좋지 않거나 전신질환이 있는 환자분께 더 안전한 선택입니다.',
      ],
    },
    {
      title: '통합치의학 전문의의 원스톱 진료',
      content: [
        '일반적인 치과에서는 진단, 수술, 보철 과정이 각기 다른 의료진에 의해 이루어지는 경우가 있습니다. 고덕퍼스트치과에서는 이동현 대표원장이 처음 상담부터 수술, 최종 보철까지 모든 과정을 직접 담당합니다.',
        '통합치의학과 전문의는 구강 전체를 종합적으로 진단할 수 있어, 임플란트 식립 시 교합, 잇몸 상태, 인접 치아 건강까지 함께 고려한 치료 계획을 세울 수 있습니다.',
        '이러한 원스톱 진료 체계 덕분에 불필요한 재방문을 줄이고, 서정동에서 오시는 환자분들의 시간적·경제적 부담을 최소화합니다.',
      ],
    },
    {
      title: '임플란트 수명을 좌우하는 사후 관리',
      content: [
        '임플란트는 식립 후 관리가 수명을 결정짓습니다. 고덕퍼스트치과에서는 수술 후 정기적인 검진 프로그램을 운영하여 임플란트 주위염, 보철물 느슨해짐 등을 조기에 발견하고 대처합니다.',
        '서정동 주민분들도 주기적인 검진을 통해 임플란트를 오래도록 건강하게 유지하실 수 있습니다. 검진 주기와 관리 방법은 개인별 구강 상태에 맞춰 안내드립니다.',
      ],
    },
    {
      title: '서정동에서 고덕퍼스트치과 오시는 길',
      content: [
        '서정동에서 고덕퍼스트치과까지는 차량으로 약 5분 소요됩니다. 고덕로 방면으로 직진하시면 에듀스카이 건물이 보이며, 건물 4층 401·402호에 위치해 있습니다.',
        '서정역(SRT/KTX) 앞 버스 정류장에서 고덕국제신도시 방면 버스를 이용하실 수도 있습니다. 건물 내 주차장이 있어 차량 방문도 편리합니다.',
      ],
    },
  ],
  tips: [
    '임플란트 상담 전 복용 중인 약물(혈압약, 혈액희석제 등)을 미리 정리해 오세요.',
    '3D CT 촬영을 위해 금속 악세서리는 제거하고 방문하시면 좋습니다.',
    '수술 당일에는 음주와 흡연을 삼가시고, 가벼운 식사를 하고 오세요.',
    '수술 후 2~3일간은 딱딱하거나 뜨거운 음식을 피해 주세요.',
    '임플란트 식립 후 최소 6개월마다 정기 검진을 받으시는 것을 권장합니다.',
  ],
  conclusion: '서정동에서 임플란트를 고려하고 계시다면, 통합치의학과 전문의가 직접 진료하는 고덕퍼스트치과에서 정확한 진단부터 시작하세요. 디지털 가이드 수술과 체계적인 사후 관리로 오래 쓸 수 있는 임플란트를 약속드립니다. 전화 031-611-3222로 상담을 예약하세요.',
  faqs: [
    {
      question: '서정동에서 임플란트 비용은 얼마 정도인가요?',
      answer: '임플란트 비용은 식립 부위, 뼈이식 필요 여부, 보철 재료에 따라 달라집니다. 고덕퍼스트치과에서는 정밀 진단 후 개인별 맞춤 견적을 안내드리며, 무이자 할부 등 다양한 결제 옵션을 제공합니다.',
    },
    {
      question: '임플란트 수술 시간이 얼마나 걸리나요?',
      answer: '디지털 가이드 수술로 진행할 경우, 한 개 기준 약 30분~1시간 내외로 수술이 완료됩니다. 사전 계획이 정밀하게 되어 있어 수술 시간이 단축되므로 서정동에서 오시는 분들도 부담 없이 방문하실 수 있습니다.',
    },
    {
      question: '뼈가 부족해도 임플란트가 가능한가요?',
      answer: '네, 가능합니다. 이동현 원장은 뼈이식, 상악동거상술 등 고난도 시술 경험이 풍부합니다. 정밀 CT 분석을 통해 잇몸뼈 상태를 정확히 파악한 후 가장 적합한 치료 방법을 제안드립니다.',
    },
    {
      question: '임플란트 후 주의사항이 있나요?',
      answer: '수술 후 1주일간은 음주, 흡연, 격렬한 운동을 피해야 합니다. 부드러운 음식 위주로 식사하시고, 처방된 약을 정확히 복용해 주세요. 이후 정기 검진을 통해 임플란트 상태를 관리해 드립니다.',
    },
  ],
};

export const metadata: Metadata = {
  title: '서정동 임플란트 | 디지털 가이드 수술 | 고덕퍼스트치과',
  description: '서정동에서 찾는 임플란트 잘하는 치과. 통합치의학과 전문의 이동현 원장 직접 시술. 디지털 가이드 수술, 뼈이식 가능. 서정역에서 차량 5분. 031-611-3222',
  keywords: '서정동 임플란트, 서정동 임플란트 치과, 평택 임플란트, 고덕퍼스트치과 임플란트, 디지털 가이드 임플란트',
  alternates: {
    canonical: 'https://medisksu.co.kr/seojeong/implant',
  },
  openGraph: {
    title: '서정동 임플란트 | 고덕퍼스트치과',
    description: '서정동 주민을 위한 디지털 가이드 임플란트. 통합치의학과 전문의 직접 진료.',
    url: 'https://medisksu.co.kr/seojeong/implant',
    siteName: '고덕퍼스트치과',
    locale: 'ko_KR',
    type: 'article',
  },
};

export default function SeojeongImplantPage() {
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
        item: 'https://medisksu.co.kr',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: '서정동 치과',
        item: 'https://medisksu.co.kr/seojeong',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: '서정동 임플란트',
        item: 'https://medisksu.co.kr/seojeong/implant',
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
