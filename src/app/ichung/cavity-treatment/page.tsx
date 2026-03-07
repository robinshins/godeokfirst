import RegionArticlePage, { RegionArticleData } from '@/components/region/RegionArticlePage';
import { Metadata } from 'next';

const articleData: RegionArticleData = {
  regionName: '이충동',
  regionSlug: 'ichung',
  treatmentType: 'cavity-treatment',
  title: '이충동 충치치료, 보존 치료로 자연치아를 지킵니다',
  subtitle: '이충동 주민을 위한 정밀 충치치료. 큐레이 진단과 통합치의학과 전문의의 최소 삭제 치료로 치아를 오래 보존합니다.',
  sections: [
    {
      title: '이충동에서 충치치료 치과를 찾고 계신가요?',
      content: [
        '이충동은 평택시 중심부에 위치한 전통 주거지역으로, 오랜 세월 자리잡은 생활 인프라와 함께 다양한 연령대의 주민이 생활하고 있습니다. 일상의 바쁨 속에서 치아 통증이나 시림을 참고 넘기시는 분들이 적지 않습니다.',
        '충치는 초기에 발견하면 간단한 레진 치료로 당일 해결이 가능하지만, 방치하면 신경까지 감염되어 신경치료나 크라운, 심한 경우 발치까지 필요해질 수 있습니다.',
        '이충동에서 차량 10분 거리의 고덕퍼스트치과에서는 큐레이(Qray) 정밀 진단 장비와 통합치의학과 전문의의 보존 중심 치료로 자연치아를 최대한 살려드립니다.',
      ],
    },
    {
      title: '큐레이(Qray)로 숨은 충치까지 발견',
      content: [
        '고덕퍼스트치과에서는 큐레이 형광 충치 탐지 장비를 도입하여 기존 X-ray만으로 발견하기 어려운 치아 사이 충치, 미세 균열, 초기 법랑질 충치까지 정확하게 진단합니다.',
        '이 정밀 진단 덕분에 불필요한 치아 삭제 없이 정말 치료가 필요한 부분만 최소한으로 치료할 수 있습니다. 이충동에서 내원하시는 환자분들께는 첫 방문 시 구강 전체 정밀 검진을 시행하고, 검진 결과를 모니터 화면으로 함께 확인하며 설명드립니다.',
        '조기 발견이 치료 비용과 기간을 줄이는 가장 확실한 방법입니다.',
      ],
    },
    {
      title: '충치 진행 단계에 따른 맞춤 치료',
      content: [
        '법랑질에 한정된 초기 충치는 레진 수복으로 30분~1시간 내 당일 치료가 가능합니다. 상아질까지 진행된 중등도 충치는 세라믹 인레이·온레이로 치아의 형태와 기능을 회복합니다.',
        '충치가 신경(치수)까지 진행된 경우에는 미세현미경을 활용한 정밀 근관치료를 시행합니다. 이동현 대표원장은 통합치의학과 전문의로서 발치보다 자연치아 보존을 최우선으로 판단하며, 정확한 진단을 바탕으로 최적의 치료법을 제안합니다.',
        '모든 충치치료에 단계적 마취 프로토콜(표면 마취 → 국소 마취)을 적용하여 치료 중 통증을 최소화합니다.',
      ],
    },
    {
      title: '이충동에서 고덕퍼스트치과 오시는 길',
      content: [
        '이충동에서 고덕퍼스트치과까지는 차량으로 약 10분입니다. 고덕로를 따라 고덕국제신도시 방면으로 오시면 에듀스카이 건물 4층에 위치해 있습니다.',
        '건물 내 주차장이 있어 차량 방문이 편리하며, 이충동 인근 정류장에서 고덕 방면 버스를 이용하실 수도 있습니다.',
      ],
    },
  ],
  tips: [
    '이가 시리거나 음식물이 잘 끼는 부위가 있다면 충치 초기 증상일 수 있으니 빨리 검진받으세요.',
    '6개월마다 정기 검진을 받으면 충치를 조기에 발견하여 간단하게 치료할 수 있습니다.',
    '치실이나 치간칫솔을 매일 사용하면 치아 사이 충치 예방에 큰 도움이 됩니다.',
    '단 음식이나 탄산음료 섭취 후에는 물로 입안을 헹궈 산성 환경을 줄여주세요.',
    '충치치료 후에도 정기적인 관리로 치료 부위의 재발을 방지하는 것이 중요합니다.',
  ],
  conclusion: '이충동에서 충치치료를 고려하고 계시다면, 자연치아 보존을 최우선으로 하는 고덕퍼스트치과를 방문해 주세요. 큐레이 정밀 진단과 통합치의학과 전문의의 최소 삭제 치료로 건강한 치아를 오래 지켜드립니다. 전화 031-611-3222로 예약하세요.',
  faqs: [
    {
      question: '충치치료 비용은 얼마 정도인가요?',
      answer: '레진 치료, 신경치료 등 기본 충치치료는 건강보험이 적용되어 비용 부담이 적습니다. 인레이, 크라운 등 보철 재료에 따라 비급여 항목이 있을 수 있으며, 상담 시 재료별 비용을 투명하게 안내드립니다.',
    },
    {
      question: '충치치료 중 통증이 심하지 않나요?',
      answer: '고덕퍼스트치과에서는 표면 마취를 먼저 적용한 후 국소 마취를 시행하는 단계적 마취 프로토콜로 치료 중 통증을 최소화합니다. 대부분의 환자분들이 편안하게 치료를 마치십니다.',
    },
    {
      question: '신경치료 없이 충치만 때울 수 있나요?',
      answer: '충치가 신경까지 도달하지 않은 경우에는 레진이나 인레이 수복만으로 치료가 가능합니다. 이동현 원장은 큐레이 진단으로 충치 깊이를 정확히 파악하여, 신경치료 없이 해결할 수 있는 경우를 최대한 살려드립니다.',
    },
    {
      question: '이충동에서 검진만 받으러 가도 되나요?',
      answer: '물론입니다. 정기 검진만 받으러 오셔도 됩니다. 파노라마 촬영과 큐레이 검진을 통해 충치 유무를 확인하고, 필요한 경우에만 치료를 권해드립니다. 전화 031-611-3222로 검진 예약이 가능합니다.',
    },
  ],
};

export const metadata: Metadata = {
  title: '이충동 충치치료 | 자연치아 보존 | 고덕퍼스트치과',
  description: '이충동에서 가까운 충치치료 치과. 통합치의학과 전문의 이동현 원장 직접 치료. 큐레이 정밀 진단, 보존 중심 치료. 이충동에서 차량 10분. 031-611-3222',
  keywords: '이충동 충치치료, 이충동 치과, 평택 충치치료, 고덕퍼스트치과, 이충동 신경치료',
  alternates: {
    canonical: 'https://gdfirstdent.com/ichung/cavity-treatment',
  },
  openGraph: {
    title: '이충동 충치치료 | 고덕퍼스트치과',
    description: '이충동 주민을 위한 자연치아 보존 충치치료. 통합치의학과 전문의 직접 진료.',
    url: 'https://gdfirstdent.com/ichung/cavity-treatment',
    siteName: '고덕퍼스트치과',
    locale: 'ko_KR',
    type: 'article',
  },
};

export default function IchungCavityTreatmentPage() {
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
        name: '이충동 충치치료',
        item: 'https://gdfirstdent.com/ichung/cavity-treatment',
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
