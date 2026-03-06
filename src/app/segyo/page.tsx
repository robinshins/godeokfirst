import RegionLandingPage, { RegionData } from '@/components/region/RegionLandingPage';
import { Metadata } from 'next';

const regionData: RegionData = {
  name: '세교동',
  fullName: '평택시 세교동',
  slug: 'segyo',
  heroTitle: '세교동에서 찾는 믿을 수 있는 치과',
  heroSubtitle: '세교신도시에서 차로 20분, 통합치의학전문의가 진료하는 고덕퍼스트치과에서 정확한 진단과 체계적인 치료를 경험하세요.',
  accessBadges: [
    '세교동에서 차로 약 20분',
    '통합치의학전문의 상주',
    '디지털 가이드 임플란트',
    '대학병원급 장비 완비',
  ],
  treatments: [
    {
      type: 'implant',
      title: '디지털 가이드 임플란트',
      description:
        'CT 촬영과 3D 시뮬레이션을 통한 정밀 식립으로, 세교동 주민분들도 안심하고 받으실 수 있는 임플란트 수술입니다. 통합치의학전문의가 직접 진단부터 수술, 보철까지 원스톱으로 진행합니다.',
      features: [
        '3D CT 기반 정밀 진단',
        '디지털 가이드 활용 최소 절개',
        '오스템/포인트/덴티스 연구자문위원 출신 원장 직접 시술',
        '수술 후 체계적 관리 프로그램',
      ],
    },
    {
      type: 'cavity-treatment',
      title: '충치 치료 (보존치료)',
      description:
        '세교신도시 젊은 가족 분들의 충치 고민을 해결합니다. 자연치아 보존을 최우선으로, 최소 삭제 원칙에 따른 보존치료를 시행합니다.',
      features: [
        '자연치아 최대 보존 원칙',
        '통증 최소화 치료',
        '심미적 레진/세라믹 보철',
        '소아 충치 전문 치료',
      ],
    },
    {
      type: 'wisdom-tooth',
      title: '사랑니 발치',
      description:
        '대학병원 외래교수 출신 원장이 직접 시행하는 안전한 사랑니 발치. 매복 사랑니도 풍부한 수술 경험으로 빠르고 정확하게 발치합니다.',
      features: [
        '파노라마/CT 정밀 진단',
        '대학병원급 외과 술식',
        '최소 침습 발치 테크닉',
        '발치 후 빠른 회복 관리',
      ],
    },
  ],
  directions: [
    {
      type: 'car',
      description:
        '세교동에서 고덕로를 따라 고덕국제신도시 방면으로 약 20분 소요. 에듀스카이 건물 지하주차장 이용 가능합니다.',
    },
    {
      type: 'bus',
      description:
        '세교동 정류장에서 고덕국제신도시 방면 버스 탑승 후 고덕 에듀타운 정류장 하차, 도보 3분.',
    },
    {
      type: 'car',
      description:
        '네비게이션에 "경기 평택시 고덕로 250 에듀스카이" 검색. 건물 내 주차장 완비.',
    },
    {
      type: 'walk',
      description:
        '고덕 에듀타운 정류장에서 에듀스카이 건물까지 도보 약 3분. 4층 401, 402호로 오시면 됩니다.',
    },
  ],
  articles: [
    {
      type: 'implant',
      title: '세교동 주민이 고덕퍼스트치과 임플란트를 선택하는 이유',
      summary:
        '디지털 가이드 수술과 통합치의학전문의의 체계적 진료로 세교신도시 주민들의 신뢰를 얻고 있는 고덕퍼스트치과 임플란트에 대해 알아봅니다.',
    },
    {
      type: 'cavity-treatment',
      title: '세교동 가족을 위한 충치 치료 가이드',
      summary:
        '세교신도시 젊은 가족들이 알아야 할 충치 치료의 모든 것. 자연치아 보존부터 소아 충치 예방까지 안내합니다.',
    },
    {
      type: 'wisdom-tooth',
      title: '세교동에서 사랑니 발치, 어디서 받아야 할까?',
      summary:
        '매복 사랑니 걱정 없이! 대학병원 외래교수 출신 원장의 안전한 사랑니 발치 노하우를 소개합니다.',
    },
  ],
  faqs: [
    {
      question: '세교동에서 고덕퍼스트치과까지 얼마나 걸리나요?',
      answer:
        '세교동에서 고덕퍼스트치과까지는 자가용으로 약 20분 소요됩니다. 고덕로를 따라 고덕국제신도시 방면으로 오시면 에듀스카이 건물 4층에 위치해 있으며, 건물 내 주차장을 무료로 이용하실 수 있습니다.',
    },
    {
      question: '세교동 주민도 많이 방문하나요?',
      answer:
        '네, 세교신도시에서도 많은 환자분들이 방문해주고 계십니다. 통합치의학전문의가 상주하는 치과가 평택 지역에 많지 않아, 정확한 진단과 체계적 치료를 위해 세교동에서도 찾아와주시는 분들이 꾸준히 늘고 있습니다.',
    },
    {
      question: '고덕퍼스트치과 원장님은 어떤 분이신가요?',
      answer:
        '이동현 대표원장은 통합치의학과 전문의로, 조선대학교 치과병원 외래교수를 역임하고 있습니다. 또한 오스템, 포인트, 덴티스 등 주요 임플란트 회사의 연구자문위원으로 활동하며, 대학병원급의 전문적인 진료를 제공합니다.',
    },
    {
      question: '디지털 가이드 임플란트가 일반 임플란트와 다른 점은 무엇인가요?',
      answer:
        '디지털 가이드 임플란트는 CT 촬영 데이터를 기반으로 3D 시뮬레이션을 통해 최적의 식립 위치, 각도, 깊이를 사전에 계획합니다. 이를 통해 수술 시간이 단축되고, 절개를 최소화하여 회복이 빠르며, 더 정확한 결과를 얻을 수 있습니다.',
    },
    {
      question: '주말이나 야간 진료도 가능한가요?',
      answer:
        '고덕퍼스트치과는 평일뿐 아니라 토요일 진료도 운영하고 있어, 세교동에서 주중에 시간 내기 어려운 분들도 편하게 방문하실 수 있습니다. 자세한 진료 시간은 031-611-3222로 문의해주세요.',
    },
  ],
};

export const metadata: Metadata = {
  title: '세교동 치과 추천 | 임플란트·충치·사랑니 - 고덕퍼스트치과',
  description:
    '세교동에서 차로 20분, 통합치의학전문의가 진료하는 고덕퍼스트치과. 디지털 가이드 임플란트, 충치 치료, 사랑니 발치까지. 대학병원 외래교수 출신 원장 직접 진료.',
  keywords: [
    '세교동 치과',
    '세교동 임플란트',
    '세교동 충치치료',
    '세교동 사랑니',
    '세교신도시 치과',
    '평택 임플란트',
    '고덕퍼스트치과',
    '통합치의학전문의',
    '디지털 가이드 임플란트',
  ],
  alternates: {
    canonical: 'https://medisksu.co.kr/segyo',
  },
  openGraph: {
    title: '세교동 치과 추천 | 고덕퍼스트치과',
    description:
      '세교신도시에서 차로 20분. 통합치의학전문의의 정확한 진단, 디지털 가이드 임플란트, 충치·사랑니 치료.',
    url: 'https://medisksu.co.kr/segyo',
    siteName: '고덕퍼스트치과',
    type: 'website',
  },
};

export default function SegyoPage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: regionData.faqs.map((faq) => ({
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
        name: '세교동',
        item: 'https://medisksu.co.kr/segyo',
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
      <RegionLandingPage data={regionData} />
    </>
  );
}
