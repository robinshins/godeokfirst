import RegionLandingPage, { RegionData } from '@/components/region/RegionLandingPage';
import { Metadata } from 'next';

const regionData: RegionData = {
  name: '고덕동',
  fullName: '평택시 고덕동',
  slug: 'godeok',
  heroTitle: '고덕동 에듀타운 우리 동네 치과',
  heroSubtitle: '고덕국제신도시 에듀타운에 위치한 고덕퍼스트치과. 도보 5분 거리에서 통합치의학전문의의 전문 진료를 받으세요.',
  accessBadges: [
    '고덕동 에듀타운 내 위치',
    '도보 5분 이내 접근',
    '에듀타운 최초 치과',
    '통합치의학전문의 상주',
  ],
  treatments: [
    {
      type: 'implant',
      title: '디지털 가이드 임플란트',
      description:
        '우리 동네에서 대학병원급 임플란트를 받으세요. 3D CT와 디지털 가이드를 활용한 정밀 식립으로, 고덕동 주민분들이 멀리 가지 않고도 최상의 임플란트 치료를 받으실 수 있습니다.',
      features: [
        '3D CT 기반 맞춤형 수술 계획',
        '디지털 가이드 최소 절개 수술',
        '임플란트 제조사 연구자문위원 원장 직접 시술',
        '수술 후 도보 귀가 가능',
      ],
    },
    {
      type: 'cavity-treatment',
      title: '충치 치료 (보존치료)',
      description:
        '걸어서 오실 수 있는 가까운 거리에서 꼼꼼한 충치 치료를 받으세요. 자연치아를 최대한 살리는 보존치료 원칙으로, 고덕동 가족 모두의 치아 건강을 지켜드립니다.',
      features: [
        '최소 삭제 자연치아 보존',
        '당일 치료 가능',
        '소아·성인 맞춤 진료',
        '정기 검진 프로그램 운영',
      ],
    },
    {
      type: 'wisdom-tooth',
      title: '사랑니 발치',
      description:
        '동네 치과에서 대학병원 수준의 사랑니 발치를 경험하세요. 조선대학교 치과병원 외래교수 출신 원장이 매복 사랑니도 안전하게 발치합니다. 도보 거리라 수술 후 바로 귀가 가능합니다.',
      features: [
        'CT 기반 3차원 정밀 분석',
        '대학병원급 외과 술식 적용',
        '최소 침습으로 빠른 회복',
        '도보 귀가 가능한 편리함',
      ],
    },
  ],
  directions: [
    {
      type: 'walk',
      description:
        '고덕동 에듀타운 내 에듀스카이 건물 4층. 에듀타운 중심 상가에서 도보 3~5분이면 도착합니다.',
    },
    {
      type: 'bus',
      description:
        '고덕 에듀타운 정류장 하차 후 도보 3분. 고덕국제신도시 순환 버스 이용 가능합니다.',
    },
    {
      type: 'car',
      description:
        '네비게이션에 "고덕로 250 에듀스카이" 검색. 건물 지하주차장 이용 가능합니다.',
    },
    {
      type: 'walk',
      description:
        '고덕동 주요 아파트 단지에서 도보 5~10분 거리. 산책 겸 걸어오시기 편한 위치입니다.',
    },
  ],
  articles: [
    {
      type: 'implant',
      title: '고덕동에서 만나는 대학병원급 디지털 임플란트',
      summary:
        '에듀타운 최초의 치과, 고덕퍼스트치과에서 제공하는 디지털 가이드 임플란트의 장점과 특징을 소개합니다.',
    },
    {
      type: 'cavity-treatment',
      title: '고덕동 주민을 위한 생활 밀착 충치 관리법',
      summary:
        '걸어서 갈 수 있는 우리 동네 치과에서 온 가족 충치 예방과 치료를 체계적으로 관리하는 방법을 안내합니다.',
    },
    {
      type: 'wisdom-tooth',
      title: '고덕동에서 사랑니 고민 해결하기',
      summary:
        '도보 거리에서 대학병원 수준의 사랑니 발치를 받을 수 있는 고덕퍼스트치과의 전문 진료를 소개합니다.',
    },
  ],
  faqs: [
    {
      question: '고덕퍼스트치과는 고덕동 어디에 위치해 있나요?',
      answer:
        '고덕퍼스트치과는 경기 평택시 고덕로 250 에듀스카이 건물 4층 401, 402호에 위치해 있습니다. 고덕동 에듀타운의 중심 상가 건물로, 고덕동 주요 아파트 단지에서 도보 5~10분 이내에 도착하실 수 있습니다.',
    },
    {
      question: '에듀타운 최초의 치과라고 들었는데, 맞나요?',
      answer:
        '네, 고덕퍼스트치과는 고덕동 에듀타운에서 가장 먼저 문을 연 치과입니다. 고덕국제신도시 개발 초기부터 지역 주민의 구강 건강을 함께해온 만큼, 오랜 기간 축적된 신뢰와 경험을 바탕으로 진료하고 있습니다.',
    },
    {
      question: '고덕퍼스트치과 원장님의 이력이 궁금합니다.',
      answer:
        '이동현 대표원장은 통합치의학과 전문의이며, 조선대학교 치과병원 외래교수입니다. 오스템, 포인트, 덴티스 등 국내 주요 임플란트 제조사의 연구자문위원으로도 활동하고 있어, 대학병원급의 전문 진료를 동네에서 편하게 받으실 수 있습니다.',
    },
    {
      question: '고덕동에서 걸어서 갈 수 있나요?',
      answer:
        '네, 고덕동 에듀타운 내에 위치해 있어 대부분의 고덕동 아파트 단지에서 도보 5~10분 이내에 오실 수 있습니다. 에듀스카이 건물을 찾아오시면 됩니다.',
    },
    {
      question: '주차가 가능한가요?',
      answer:
        '에듀스카이 건물 지하주차장을 이용하실 수 있습니다. 다만 고덕동 거주 주민분들은 도보로 오시는 경우가 많아, 산책 겸 편하게 걸어오시는 것도 좋습니다.',
    },
  ],
};

export const metadata: Metadata = {
  title: '고덕동 치과 | 에듀타운 최초 치과 - 고덕퍼스트치과',
  description:
    '고덕동 에듀타운에 위치한 고덕퍼스트치과. 도보 5분 거리, 통합치의학전문의 상주. 디지털 가이드 임플란트, 충치 치료, 사랑니 발치. 에듀타운 최초 치과로 지역 주민의 신뢰를 받고 있습니다.',
  keywords: [
    '고덕동 치과',
    '고덕동 임플란트',
    '고덕동 충치치료',
    '고덕동 사랑니',
    '고덕국제신도시 치과',
    '에듀타운 치과',
    '고덕퍼스트치과',
    '평택 고덕동 치과',
  ],
  alternates: {
    canonical: 'https://medisksu.co.kr/godeok',
  },
  openGraph: {
    title: '고덕동 치과 | 에듀타운 최초 치과 - 고덕퍼스트치과',
    description:
      '고덕동 에듀타운 도보 5분. 통합치의학전문의의 임플란트, 충치, 사랑니 전문 진료. 우리 동네 치과.',
    url: 'https://medisksu.co.kr/godeok',
    siteName: '고덕퍼스트치과',
    type: 'website',
  },
};

export default function GodeokPage() {
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
        name: '고덕동',
        item: 'https://medisksu.co.kr/godeok',
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
