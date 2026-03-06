import RegionArticlePage, { RegionArticleData } from '@/components/region/RegionArticlePage';
import { Metadata } from 'next';

const articleData: RegionArticleData = {
  regionName: '서정동',
  regionSlug: 'seojeong',
  treatmentType: 'cavity-treatment',
  title: '서정동 충치치료, 자연치아 보존이 핵심입니다',
  subtitle: '서정역 인근 서정동 주민을 위한 정밀 충치치료. 통합치의학과 전문의가 치아 보존을 최우선으로 치료합니다.',
  sections: [
    {
      title: '서정동에서 충치치료 치과를 찾고 계신가요?',
      content: [
        '서정동은 SRT·KTX 서정역을 중심으로 형성된 평택시 주요 주거지역입니다. 바쁜 출퇴근 생활 속에서 충치 초기 증상을 놓치기 쉽습니다.',
        '충치는 초기에 발견하면 간단한 레진 치료로 해결할 수 있지만, 방치하면 신경치료나 발치가 필요해질 수 있습니다. 서정동에서 차량 5분 거리의 고덕퍼스트치과에서 정밀 진단과 보존 중심 치료를 받아보세요.',
        '이동현 대표원장은 통합치의학과 전문의로서 충치의 깊이와 범위를 정확히 파악하고, 최소한의 삭제로 최대한 자연치아를 보존하는 치료를 시행합니다.',
      ],
    },
    {
      title: '큐레이를 활용한 정밀 충치 진단',
      content: [
        '고덕퍼스트치과에서는 큐레이(Qray) 충치 탐지 장비를 활용하여 육안으로 확인하기 어려운 초기 충치까지 정확하게 진단합니다.',
        '기존 X-ray만으로는 발견하기 어려운 인접면 충치나 미세 충치도 큐레이의 형광 기술로 조기에 발견할 수 있어, 불필요한 치아 삭제를 줄이고 보존적 치료가 가능합니다.',
        '서정동에서 오시는 환자분들도 첫 내원 시 정밀 검진을 통해 구강 전체 상태를 파악한 후 치료 계획을 수립합니다.',
      ],
    },
    {
      title: '단계별 맞춤 충치치료',
      content: [
        '초기 충치는 레진 충전으로 당일 치료가 가능하며, 중등도 충치는 인레이·온레이 보철로 치아 형태와 기능을 회복합니다.',
        '충치가 신경까지 진행된 경우에는 미세현미경을 활용한 정밀 신경치료를 시행합니다. 통합치의학과 전문의의 정확한 판단으로 발치 대신 자연치아를 살리는 치료를 우선합니다.',
        '모든 치료 과정에서 통증 최소화를 위한 마취 프로토콜을 적용하여 편안한 치료 경험을 제공합니다.',
      ],
    },
    {
      title: '서정동에서 고덕퍼스트치과 오시는 길',
      content: [
        '서정동에서 고덕퍼스트치과까지는 차량으로 약 5분 소요됩니다. 고덕로를 이용하시면 편리하게 도착하실 수 있습니다.',
        '에듀스카이 건물 4층에 위치해 있으며, 건물 내 주차장을 이용하실 수 있습니다.',
      ],
    },
  ],
  tips: [
    '차갑거나 뜨거운 음식에 이가 시린 증상이 있다면 충치 초기 신호일 수 있습니다.',
    '정기 검진(6개월 주기)을 통해 충치를 조기에 발견하는 것이 중요합니다.',
    '충치 치료 후에는 올바른 칫솔질과 치실 사용으로 재발을 예방하세요.',
    '당분이 많은 음식 섭취 후에는 물로 입을 헹구는 습관을 들이세요.',
    '보험 적용이 가능한 치료가 많으니 상담 시 확인하세요.',
  ],
  conclusion: '서정동에서 충치치료를 고려하고 계시다면, 자연치아 보존을 최우선으로 하는 고덕퍼스트치과를 방문해 주세요. 큐레이 정밀 진단과 통합치의학과 전문의의 맞춤 치료로 건강한 치아를 지켜드립니다. 전화 031-611-3222로 예약하세요.',
  faqs: [
    {
      question: '충치치료는 보험이 적용되나요?',
      answer: '레진 치료, 아말감 치료, 신경치료 등 대부분의 기본 충치치료는 건강보험이 적용됩니다. 인레이, 크라운 등 보철 재료에 따라 비급여 항목이 있을 수 있으며, 상담 시 자세히 안내드립니다.',
    },
    {
      question: '충치치료가 아프지는 않나요?',
      answer: '고덕퍼스트치과에서는 통증 최소화를 위한 단계적 마취 프로토콜을 적용합니다. 표면 마취 후 국소 마취를 시행하여 치료 중 통증을 거의 느끼지 않으실 수 있습니다.',
    },
    {
      question: '충치가 심한데 발치 없이 치료가 가능한가요?',
      answer: '통합치의학과 전문의인 이동현 원장은 가능한 한 자연치아를 보존하는 것을 원칙으로 합니다. 정밀 진단을 통해 치아 보존 가능성을 정확히 평가한 후 최적의 치료 방법을 제안드립니다.',
    },
    {
      question: '충치치료 시간은 얼마나 걸리나요?',
      answer: '초기 충치 레진 치료는 30분~1시간 내외로 당일 완료가 가능합니다. 신경치료가 필요한 경우 2~3회 내원이 필요할 수 있으며, 첫 상담 시 치료 기간을 안내드립니다.',
    },
  ],
};

export const metadata: Metadata = {
  title: '서정동 충치치료 | 자연치아 보존 | 고덕퍼스트치과',
  description: '서정동에서 가까운 충치치료 치과. 통합치의학과 전문의 이동현 원장 직접 치료. 큐레이 정밀 진단, 보존 중심 치료. 서정역에서 차량 5분. 031-611-3222',
  keywords: '서정동 충치치료, 서정동 치과, 평택 충치치료, 고덕퍼스트치과, 서정동 신경치료',
  alternates: { canonical: 'https://medisksu.co.kr/seojeong/cavity-treatment' },
  openGraph: {
    title: '서정동 충치치료 | 고덕퍼스트치과',
    description: '서정동 주민을 위한 자연치아 보존 충치치료. 통합치의학과 전문의 직접 진료.',
    url: 'https://medisksu.co.kr/seojeong/cavity-treatment',
    siteName: '고덕퍼스트치과',
    locale: 'ko_KR',
    type: 'article',
  },
};

export default function SeojeongCavityTreatmentPage() {
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
      { '@type': 'ListItem', position: 3, name: '서정동 충치치료', item: 'https://medisksu.co.kr/seojeong/cavity-treatment' },
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
