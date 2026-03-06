import RegionArticlePage, { RegionArticleData } from '@/components/region/RegionArticlePage';
import { Metadata } from 'next';

const articleData: RegionArticleData = {
  regionName: '이충동',
  regionSlug: 'ichung',
  treatmentType: 'implant',
  title: '이충동 임플란트, 디지털 가이드로 정확하고 안전하게',
  subtitle: '이충동 주민을 위한 디지털 가이드 임플란트. 통합치의학과 전문의가 진단부터 보철까지 책임 진료합니다.',
  sections: [
    {
      title: '이충동에서 임플란트 치과를 찾고 계신가요?',
      content: [
        '이충동은 평택시 중심부에 자리한 오래된 주거지역으로, 다양한 연령대의 주민이 거주하고 있습니다. 특히 중장년층 주민분들 중 치아 상실로 임플란트를 고려하시는 분들이 많습니다.',
        '임플란트는 한 번 식립하면 10년 이상 사용하는 치료이므로, 단순히 가까운 곳보다 전문성을 갖춘 치과를 선택하는 것이 중요합니다. 이충동에서 차량 10분 거리의 고덕퍼스트치과에서는 대학병원급 장비와 전문의 직접 진료로 정확하고 안전한 임플란트를 제공합니다.',
        '이동현 대표원장은 통합치의학과 전문의이자 조선대학교 치과병원 외래교수로, 단순 식립부터 뼈이식, 상악동거상술 등 고난도 수술까지 폭넓게 대응합니다.',
      ],
    },
    {
      title: '디지털 가이드 수술의 장점',
      content: [
        '고덕퍼스트치과에서는 3D CT 촬영 데이터를 기반으로 컴퓨터 시뮬레이션을 통해 임플란트 식립 위치, 각도, 깊이를 사전에 정밀 계획합니다.',
        '이 계획에 맞춘 맞춤형 가이드 장치를 사용하여 수술하므로, 절개를 최소화하고 신경·혈관 손상 위험을 크게 줄일 수 있습니다. 수술 시간이 단축되어 이충동에서 오시는 환자분들의 내원 부담도 줄어듭니다.',
        '디지털 가이드 수술은 특히 잇몸뼈가 얇거나 전신질환이 있는 환자분께 더욱 안전한 선택이 됩니다.',
      ],
    },
    {
      title: '통합치의학 전문의의 원스톱 진료 체계',
      content: [
        '일반 치과에서는 진단, 수술, 보철이 각기 다른 의료진에 의해 진행되는 경우가 있습니다. 고덕퍼스트치과에서는 이동현 대표원장이 첫 상담부터 수술, 최종 보철까지 모든 과정을 직접 담당합니다.',
        '통합치의학과 전문의는 구강 전체를 종합적으로 진단하여, 임플란트 식립 시 교합, 잇몸 상태, 인접 치아 건강까지 함께 고려한 치료 계획을 세울 수 있습니다.',
        '이러한 원스톱 진료로 불필요한 재방문을 줄이고, 이충동에서 오시는 분들의 시간적·경제적 부담을 최소화합니다.',
      ],
    },
    {
      title: '임플란트 사후 관리와 정기 검진',
      content: [
        '임플란트의 수명은 식립 후 관리에 달려 있습니다. 고덕퍼스트치과에서는 수술 후 체계적인 정기 검진 프로그램을 운영하여 임플란트 주위염, 보철물 이상 등을 조기에 발견하고 대처합니다.',
        '이충동 주민분들도 6개월~1년 주기의 정기 검진으로 임플란트를 오래 건강하게 유지하실 수 있습니다. 개인별 구강 상태에 맞춘 관리 방법을 안내드립니다.',
      ],
    },
    {
      title: '이충동에서 고덕퍼스트치과 오시는 길',
      content: [
        '이충동에서 고덕퍼스트치과까지는 차량으로 약 10분 소요됩니다. 고덕로를 이용하시면 에듀스카이 건물에 편리하게 도착할 수 있으며, 건물 4층 401·402호에 위치해 있습니다.',
        '건물 내 주차장을 이용하실 수 있어 차량 방문이 편리합니다. 전화(031-611-3222) 예약 시 상세한 교통편을 안내드립니다.',
      ],
    },
  ],
  tips: [
    '임플란트 상담 전 복용 중인 약물(혈압약, 혈액희석제, 골다공증약 등)을 미리 정리해 오세요.',
    '3D CT 촬영을 위해 금속 악세서리는 제거하고 방문하시면 좋습니다.',
    '수술 당일에는 음주와 흡연을 삼가시고, 가벼운 식사를 하고 내원하세요.',
    '수술 후 2~3일간은 딱딱하거나 뜨거운 음식을 피하고 부드러운 음식을 드세요.',
    '임플란트 식립 후 최소 6개월마다 정기 검진을 받으시는 것을 권장합니다.',
  ],
  conclusion: '이충동에서 임플란트를 고려하고 계시다면, 통합치의학과 전문의가 직접 진료하는 고덕퍼스트치과에서 정밀 진단부터 시작하세요. 디지털 가이드 수술과 체계적 사후 관리로 오래 쓸 수 있는 임플란트를 약속드립니다. 전화 031-611-3222로 상담을 예약하세요.',
  faqs: [
    {
      question: '이충동에서 임플란트 비용은 어느 정도인가요?',
      answer: '임플란트 비용은 식립 부위, 뼈이식 필요 여부, 보철 재료에 따라 달라집니다. 고덕퍼스트치과에서는 정밀 진단 후 개인별 맞춤 견적을 투명하게 안내드리며, 무이자 할부 등 다양한 결제 옵션을 제공합니다.',
    },
    {
      question: '임플란트 수술 시간이 얼마나 걸리나요?',
      answer: '디지털 가이드 수술로 진행할 경우, 한 개 기준 약 30분~1시간 내외로 완료됩니다. 사전 계획이 정밀하게 되어 있어 수술 시간이 단축되므로 이충동에서 오시는 분들도 부담 없이 방문하실 수 있습니다.',
    },
    {
      question: '뼈가 부족해도 임플란트가 가능한가요?',
      answer: '네, 가능합니다. 이동현 원장은 뼈이식, 상악동거상술 등 고난도 시술 경험이 풍부합니다. 정밀 CT 분석으로 잇몸뼈 상태를 정확히 파악한 후 가장 적합한 방법을 제안드립니다.',
    },
    {
      question: '만 65세 이상 건강보험 임플란트가 가능한가요?',
      answer: '네, 만 65세 이상이시면 평생 2개까지 건강보험 적용 임플란트가 가능합니다. 본인 부담금 약 30%만 납부하시면 됩니다. 내원 시 신분증을 지참해 주시면 보험 적용 여부를 바로 확인해 드립니다.',
    },
  ],
};

export const metadata: Metadata = {
  title: '이충동 임플란트 | 디지털 가이드 수술 | 고덕퍼스트치과',
  description: '이충동에서 찾는 임플란트 잘하는 치과. 통합치의학과 전문의 이동현 원장 직접 시술. 디지털 가이드 수술, 뼈이식 가능. 이충동에서 차량 10분. 031-611-3222',
  keywords: '이충동 임플란트, 이충동 임플란트 치과, 평택 임플란트, 고덕퍼스트치과 임플란트, 디지털 가이드 임플란트',
  alternates: {
    canonical: 'https://medisksu.co.kr/ichung/implant',
  },
  openGraph: {
    title: '이충동 임플란트 | 고덕퍼스트치과',
    description: '이충동 주민을 위한 디지털 가이드 임플란트. 통합치의학과 전문의 직접 진료.',
    url: 'https://medisksu.co.kr/ichung/implant',
    siteName: '고덕퍼스트치과',
    locale: 'ko_KR',
    type: 'article',
  },
};

export default function IchungImplantPage() {
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
        name: '이충동 치과',
        item: 'https://medisksu.co.kr/ichung',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: '이충동 임플란트',
        item: 'https://medisksu.co.kr/ichung/implant',
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
