import RegionLandingPage, { RegionData } from '@/components/region/RegionLandingPage';
import { Metadata } from 'next';

const regionData: RegionData = {
  name: '동삭동',
  fullName: '평택시 동삭동',
  slug: 'dongsak',
  heroTitle: '동삭동 치과\n고덕퍼스트치과',
  heroSubtitle: '동삭지구 신규 입주민을 위한 통합치의학 전문 진료. 고덕 인접 동삭동에서 차로 10분, 대학병원급 장비와 통합치의학과 전문의 직접 진료로 온 가족이 안심할 수 있습니다.',
  accessBadges: [
    '동삭동에서 차량 10분',
    '고덕로 직진 접근',
    '건물 내 주차 가능',
    '에듀스카이 4층 위치',
  ],
  treatments: [
    {
      type: 'implant',
      title: '임플란트',
      description: '디지털 가이드 수술 시스템으로 절개를 최소화한 정밀 임플란트. 오스템·포인트·덴티스 연구자문위원 출신 원장이 직접 식립합니다.',
      features: ['3D CT 정밀 진단', '네비게이션 가이드 수술', '전문의 원스톱 진료', '임플란트 정기 관리'],
    },
    {
      type: 'cavity-treatment',
      title: '충치치료',
      description: '동삭지구 가족 단위 환자분들을 위한 보존 중심 충치치료. 초기 충치부터 심한 충치까지 치아를 최대한 살리는 치료를 합니다.',
      features: ['미세현미경 정밀 치료', '최소 삭제 보존 원칙', '자연치아색 심미 재료', '소아·성인 맞춤 치료'],
    },
    {
      type: 'wisdom-tooth',
      title: '사랑니 발치',
      description: '매복 사랑니, 눕거나 비틀린 사랑니도 대학병원 외래교수 출신 전문의가 안전하게 발치합니다.',
      features: ['파노라마·3D CT 촬영', '대학병원급 발치 술기', '최소 절개 발치법', '체계적 회복 관리'],
    },
  ],
  directions: [
    {
      type: 'car',
      description: '동삭동에서 고덕로 방면으로 직진하면 약 10분 소요됩니다. 에듀스카이 건물 지하 주차장을 무료로 이용하실 수 있습니다.',
    },
    {
      type: 'bus',
      description: '동삭동 주요 정류장에서 고덕국제신도시 방면 버스 탑승 후 고덕 에듀스카이 인근 정류장 하차, 도보 3분 거리입니다.',
    },
    {
      type: 'walk',
      description: '에듀스카이 건물 4층 401, 402호에 위치합니다. 건물 정문 진입 후 엘리베이터로 4층에서 내리시면 바로 안내 데스크가 보입니다.',
    },
  ],
  articles: [
    {
      type: 'implant',
      title: '동삭동 주민이 고덕퍼스트치과 임플란트를 선택하는 이유',
      summary: '동삭지구 입주민들이 임플란트 치료를 위해 고덕퍼스트치과를 찾는 이유와 디지털 가이드 수술의 차이를 알아봅니다.',
    },
    {
      type: 'cavity-treatment',
      title: '동삭동 충치치료, 가족 모두를 위한 보존 치료 가이드',
      summary: '신규 입주 가정의 소아·성인 충치치료 솔루션과 고덕퍼스트치과의 보존 치료 원칙을 소개합니다.',
    },
    {
      type: 'wisdom-tooth',
      title: '동삭동 사랑니 발치, 전문의에게 맡겨야 하는 이유',
      summary: '사랑니 유형별 발치 기준과 대학병원급 전문의 발치의 안전성을 안내합니다.',
    },
  ],
  faqs: [
    {
      question: '동삭동에서 고덕퍼스트치과까지 어떻게 가나요?',
      answer: '동삭동에서 차량으로 약 10분 거리입니다. 고덕로를 따라 직진하시면 에듀스카이 건물에 도착하며, 건물 내 무료 주차가 가능합니다. 대중교통 이용 시 고덕국제신도시 방면 버스를 타시면 됩니다.',
    },
    {
      question: '동삭지구에서 새로 이사 왔는데 가족 모두 진료 가능한가요?',
      answer: '네, 고덕퍼스트치과는 통합치의학과 전문의가 소아부터 성인, 어르신까지 전 연령대의 치과 치료를 한 곳에서 진료합니다. 임플란트, 충치치료, 사랑니 발치, 잇몸 치료 등 모든 분야를 아우릅니다.',
    },
    {
      question: '고덕퍼스트치과 원장님은 어떤 경력을 갖고 계신가요?',
      answer: '이동현 대표원장은 통합치의학과 전문의이며, 조선대학교 치과병원 외래교수입니다. 또한 오스템, 포인트, 덴티스 등 주요 임플란트 제조사의 연구자문위원을 역임하며 풍부한 임상 경험을 보유하고 있습니다.',
    },
    {
      question: '동삭동에서 임플란트 상담 예약은 어떻게 하나요?',
      answer: '전화(031-611-3222)로 예약하시면 됩니다. 첫 방문 시 3D CT 촬영과 정밀 구강 검진을 진행하며, 개인별 맞춤 치료 계획과 예상 비용을 상세히 안내드립니다.',
    },
    {
      question: '주차 공간이 넉넉한가요?',
      answer: '에듀스카이 건물 내 지하 주차장을 이용하실 수 있으며, 진료 시간 동안 무료 주차가 가능합니다. 동삭동에서 차량 이용 시 편리하게 방문하실 수 있습니다.',
    },
  ],
};

export const metadata: Metadata = {
  title: '동삭동 치과 | 임플란트·충치·사랑니 | 고덕퍼스트치과',
  description: '동삭동에서 가까운 고덕퍼스트치과. 통합치의학과 전문의 이동현 원장 직접 진료. 디지털 가이드 임플란트, 충치치료, 사랑니 발치. 동삭동에서 차량 10분. 031-611-3222',
  keywords: '동삭동 치과, 동삭동 임플란트, 동삭동 충치치료, 동삭동 사랑니, 동삭지구 치과, 평택 치과, 고덕퍼스트치과',
  alternates: {
    canonical: 'https://gdfirstdent.com/dongsak',
  },
  openGraph: {
    title: '동삭동 치과 | 고덕퍼스트치과',
    description: '동삭동·동삭지구 주민을 위한 통합치의학 전문 진료. 임플란트, 충치치료, 사랑니 발치. 전문의 직접 진료.',
    url: 'https://gdfirstdent.com/dongsak',
    siteName: '고덕퍼스트치과',
    locale: 'ko_KR',
    type: 'website',
  },
};

export default function DongsakPage() {
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
        item: 'https://gdfirstdent.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: '동삭동 치과',
        item: 'https://gdfirstdent.com/dongsak',
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
