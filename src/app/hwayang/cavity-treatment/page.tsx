import RegionArticlePage, { RegionArticleData } from '@/components/region/RegionArticlePage';
import { Metadata } from 'next';

const articleData: RegionArticleData = {
  regionName: '화양지구',
  regionSlug: 'hwayang',
  treatmentType: 'cavity-treatment',
  title: '화양 충치치료 치과, 자연치아 보존이 우선입니다',
  subtitle:
    '평택 화양지구 가족들이 알아야 할 충치 치료의 모든 것. 자연치아 보존을 최우선으로 하는 고덕퍼스트치과의 보존치료를 소개합니다.',
  sections: [
    {
      title: '화양지구 가족들의 충치 고민',
      content: [
        '화양지구는 평택에서 새롭게 조성되고 있는 공공주택지구로, 젊은 가족과 어린 자녀가 있는 세대의 입주가 늘고 있습니다. 바쁜 일상 속에서 정기 검진을 미루다 충치가 진행되는 경우가 흔합니다.',
        '초기 충치는 자각 증상이 거의 없어 정기 검진을 통해서만 발견할 수 있는데, 이를 놓치면 치료 범위와 비용이 크게 증가합니다.',
        '고덕퍼스트치과는 온 가족이 함께 검진받을 수 있는 환경을 갖추고 있으며, 통합치의학전문의가 성인과 소아 모두 체계적으로 진료합니다.',
      ],
    },
    {
      title: '자연치아 보존을 최우선으로 하는 치료 철학',
      content: [
        '이동현 원장은 자연치아 보존을 치료의 최우선 원칙으로 삼고 있습니다. 아무리 좋은 보철물도 자연치아를 완벽하게 대체할 수 없기 때문입니다.',
        '충치 치료 시 최소 삭제 원칙을 적용하여, 손상된 부분만 정밀하게 제거하고 건강한 치아 조직은 최대한 보존합니다. 확대경과 정밀 기구를 활용해 미세한 충치까지 정확하게 확인하고 치료합니다.',
        '통합치의학전문의로서 충치뿐 아니라 치주 상태, 교합 관계까지 종합적으로 판단하여, 구강 건강 전체를 고려한 치료 계획을 수립합니다.',
      ],
    },
    {
      title: '충치 단계별 맞춤 치료법',
      content: [
        '초기 충치(법랑질 충치)는 불소 도포나 최소한의 레진 치료로 해결할 수 있습니다. 이 단계에서 발견하면 치아 삭제를 거의 하지 않아도 됩니다.',
        '중기 충치(상아질 충치)는 레진 또는 인레이 치료가 필요합니다. 심미성과 내구성을 모두 고려한 세라믹 인레이를 추천하며, 자연치아와 거의 구별되지 않는 결과를 제공합니다.',
        '심한 충치는 신경치료 후 크라운 보철이 필요합니다. 신경치료는 자연치아를 살리기 위한 마지막 방법으로, 정밀한 시술이 장기적인 치아 수명을 결정합니다.',
      ],
    },
    {
      title: '소아 충치, 왜 빨리 치료해야 할까?',
      content: [
        '화양지구에는 어린 자녀를 둔 가정이 많습니다. 유치 충치는 영구치의 발육과 배열에 직접적인 영향을 미치므로 방치해서는 안 됩니다.',
        '유치가 충치로 일찍 빠지면 영구치가 나올 공간이 줄어들어 부정교합의 원인이 됩니다. 또한 충치균은 인접한 건강한 치아와 새로 나는 영구치에도 감염될 수 있습니다.',
        '고덕퍼스트치과는 아이들이 치과에 대한 공포심을 갖지 않도록 단계적으로 접근하며, 통증 최소화 치료를 시행합니다.',
      ],
    },
    {
      title: '화양지구에서 고덕퍼스트치과 방문하기',
      content: [
        '화양지구에서 고덕퍼스트치과까지는 자가용으로 약 25분이 소요됩니다. 평택시 고덕로 250 에듀스카이 건물 4층에 위치해 있으며, 건물 내 무료 주차장을 이용하실 수 있습니다.',
        '충치 치료는 대부분 당일 완료가 가능하며, 인레이나 크라운 등 보철이 필요한 경우에도 2~3회 방문으로 마무리됩니다.',
        '예약 전화 031-611-3222로 원하시는 시간에 맞춰 진료를 예약하실 수 있습니다.',
      ],
    },
    {
      title: '정기 검진으로 충치 예방하기',
      content: [
        '충치는 치료보다 예방이 훨씬 경제적이고 효과적입니다. 6개월에 한 번 정기 검진을 받으시면, 초기 충치를 조기에 발견하여 최소한의 치료로 해결할 수 있습니다.',
        '고덕퍼스트치과는 검진 시 스케일링과 함께 구강 전반의 상태를 점검합니다. 불소 도포나 실란트 등 예방 처치를 통해 충치 발생을 사전에 차단합니다.',
      ],
    },
  ],
  tips: [
    '충치 초기에는 통증이 없으므로, 6개월마다 정기 검진을 받는 것이 가장 효과적인 예방법입니다.',
    '어린이의 경우 영구치가 나오는 시기(만 6세 전후)에 실란트 처치를 받으면 충치 예방에 매우 효과적입니다.',
    '식사 후 바로 양치하기 어려운 경우, 물로 입을 헹구는 것만으로도 충치 예방에 도움이 됩니다.',
    '단 음식이나 탄산음료를 자주 섭취하면 충치 위험이 높아집니다.',
    '치실이나 치간칫솔을 사용하면 칫솔이 닿지 않는 치아 사이의 충치를 예방할 수 있습니다.',
  ],
  conclusion:
    '평택 화양지구에서 가족 모두의 충치 치료와 예방을 위해 고덕퍼스트치과를 추천드립니다. 통합치의학전문의 이동현 원장이 자연치아 보존을 최우선으로, 성인부터 소아까지 체계적인 충치 치료를 제공합니다. 상담 예약은 031-611-3222로 문의해주세요.',
  faqs: [
    {
      question: '충치 치료 시 통증이 많이 있나요?',
      answer:
        '충분한 마취 후 치료를 진행하므로 시술 중 통증은 거의 없습니다. 표면 마취를 먼저 적용해 주사 통증도 최소화합니다.',
    },
    {
      question: '아이가 치과를 무서워하는데, 소아 치료가 가능한가요?',
      answer:
        '네, 소아 환자에 대한 단계적 접근법을 적용합니다. 처음에는 치과 환경에 적응하도록 하고, 간단한 검진부터 시작하여 점차 치료를 진행합니다.',
    },
    {
      question: '충치 치료 비용은 어떻게 되나요?',
      answer:
        '치료 방법에 따라 다릅니다. 간단한 레진 치료는 건강보험이 적용되며, 세라믹 인레이나 크라운 등은 비급여입니다. 정확한 비용은 검진 후 치료 계획과 함께 투명하게 안내드립니다.',
    },
    {
      question: '화양지구에서 방문 시 충치 치료가 하루에 끝나나요?',
      answer:
        '간단한 레진 치료는 대부분 당일 완료가 가능합니다. 인레이나 크라운이 필요한 경우 2회, 신경치료가 필요한 경우 2~3회 방문이 필요할 수 있습니다.',
    },
  ],
};

export const metadata: Metadata = {
  title: '화양 충치치료 치과 | 자연치아 보존 - 고덕퍼스트치과',
  description:
    '평택 화양지구 가족을 위한 충치 치료. 통합치의학전문의의 자연치아 보존 원칙, 최소 삭제 치료, 소아 충치 전문 진료.',
  keywords: [
    '화양 충치치료',
    '평택 화양 충치',
    '화양 충치치료 치과',
    '화양지구 충치',
    '화양지구 치과',
    '평택 충치치료',
    '고덕퍼스트치과 충치',
  ],
  alternates: {
    canonical: 'https://gdfirstdent.co.kr/hwayang/cavity-treatment',
  },
  openGraph: {
    title: '화양 충치치료 치과 | 고덕퍼스트치과',
    description: '평택 화양지구에서 차로 25분. 자연치아 보존 중심 충치 치료, 통합치의학전문의 직접 진료.',
    url: 'https://gdfirstdent.co.kr/hwayang/cavity-treatment',
    siteName: '고덕퍼스트치과',
    type: 'article',
    images: [
      {
        url: '/고덕og이미지.png',
        width: 1200,
        height: 630,
        alt: '고덕퍼스트치과 - 화양 충치치료',
      },
    ],
  },
};

export default function HwayangCavityTreatmentPage() {
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
      { '@type': 'ListItem', position: 1, name: '홈', item: 'https://gdfirstdent.co.kr' },
      { '@type': 'ListItem', position: 2, name: '평택 화양지구', item: 'https://gdfirstdent.co.kr/hwayang' },
      { '@type': 'ListItem', position: 3, name: '충치 치료', item: 'https://gdfirstdent.co.kr/hwayang/cavity-treatment' },
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
