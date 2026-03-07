import RegionLandingPage, { RegionData } from '@/components/region/RegionLandingPage';
import { Metadata } from 'next';

const regionData: RegionData = {
  name: '지제동',
  fullName: '평택시 지제동',
  slug: 'jije',
  heroTitle: '지제동 치과\n고덕퍼스트치과',
  heroSubtitle: '지제역(SRT/1호선) 인근 주민과 삼성전자 평택캠퍼스 근무자를 위한 통합치의학 전문 진료. 대학병원급 디지털 장비와 전문의 직접 진료로 바쁜 직장인도 효율적으로 치료받을 수 있습니다.',
  accessBadges: [
    '지제동에서 차량 15분',
    '고덕대로 이용 접근',
    '건물 내 주차 가능',
    '에듀스카이 4층 위치',
  ],
  treatments: [
    {
      type: 'implant',
      title: '임플란트',
      description: '디지털 네비게이션 가이드 수술로 수술 시간을 단축한 정밀 임플란트. 바쁜 직장인도 최소한의 내원으로 치료를 완료할 수 있습니다.',
      features: ['3D CT 정밀 분석', '디지털 가이드 수술', '전문의 직접 식립', '맞춤형 보철 설계'],
    },
    {
      type: 'cavity-treatment',
      title: '충치치료',
      description: '직장인의 바쁜 일정을 고려한 효율적인 충치치료. 치아 보존을 최우선으로 최소 삭제 원칙을 적용합니다.',
      features: ['미세현미경 정밀 치료', '당일 레진 치료', '고강도 심미 재료', '최소 내원 치료 계획'],
    },
    {
      type: 'wisdom-tooth',
      title: '사랑니 발치',
      description: '대학병원 외래교수 출신 전문의가 매복 사랑니도 안전하게 발치합니다. 최소 절개로 빠른 회복이 가능합니다.',
      features: ['3D CT 신경 분석', '대학병원급 수술 노하우', '최소 침습 발치', '신속한 회복 지원'],
    },
  ],
  directions: [
    {
      type: 'car',
      description: '지제동에서 고덕대로를 이용하면 차량으로 약 15분 소요됩니다. 에듀스카이 건물 지하 주차장을 무료로 이용할 수 있습니다.',
    },
    {
      type: 'subway',
      description: '지제역(SRT/1호선) 하차 후 고덕국제신도시 방면 버스로 환승하시면 고덕퍼스트치과 인근 정류장까지 약 20분 소요됩니다.',
    },
    {
      type: 'bus',
      description: '지제역 앞 버스 정류장에서 고덕국제신도시 방면 시내버스를 이용하시면 됩니다. 하차 후 도보 3분 거리입니다.',
    },
    {
      type: 'walk',
      description: '경기 평택시 고덕로 250 에듀스카이 4층 401, 402호. 건물 정문 엘리베이터로 4층까지 바로 올라오실 수 있습니다.',
    },
  ],
  articles: [
    {
      type: 'implant',
      title: '지제동 직장인을 위한 효율적 임플란트 치료 가이드',
      summary: '바쁜 직장인이 최소 내원으로 임플란트 치료를 완료할 수 있는 디지털 가이드 수술의 장점을 소개합니다.',
    },
    {
      type: 'cavity-treatment',
      title: '지제동 충치치료, 직장인을 위한 스마트 진료',
      summary: '점심시간과 퇴근 후를 활용한 효율적인 충치치료 솔루션과 보존 치료 원칙을 안내합니다.',
    },
    {
      type: 'wisdom-tooth',
      title: '지제동 사랑니, 발치 타이밍과 안전한 치과 선택법',
      summary: '사랑니 발치 적정 시기 판단 기준과 전문의 발치의 안전성을 상세히 설명합니다.',
    },
  ],
  faqs: [
    {
      question: '지제동에서 고덕퍼스트치과까지 얼마나 걸리나요?',
      answer: '지제동에서 차량으로 약 15분 소요됩니다. 고덕대로를 이용하시면 빠르게 도착할 수 있으며, 지제역에서 고덕국제신도시 방면 버스를 이용하실 수도 있습니다. 건물 내 무료 주차장이 있습니다.',
    },
    {
      question: '삼성전자 평택캠퍼스 퇴근 후 진료가 가능한가요?',
      answer: '고덕퍼스트치과의 진료 시간을 확인하시어 퇴근 후 방문이 가능합니다. 정확한 진료 시간은 전화(031-611-3222)로 문의해 주세요. 사전 예약 시 대기 시간을 최소화할 수 있습니다.',
    },
    {
      question: '지제역에서 대중교통으로 방문할 수 있나요?',
      answer: '지제역(SRT/1호선)에서 고덕국제신도시 방면 시내버스를 타시면 됩니다. 버스로 약 20분 소요되며, 정류장에서 도보 3분이면 에듀스카이 건물에 도착합니다.',
    },
    {
      question: '이동현 원장님의 전문 분야는 무엇인가요?',
      answer: '이동현 대표원장은 통합치의학과 전문의입니다. 조선대학교 치과병원 외래교수이며, 오스템·포인트·덴티스 등 주요 임플란트 제조사의 연구자문위원 경력을 갖추고 있습니다. 임플란트, 보철, 충치치료, 사랑니 발치 등 모든 분야를 통합적으로 진료합니다.',
    },
    {
      question: '바쁜 직장인인데 최소 내원으로 치료할 수 있나요?',
      answer: '고덕퍼스트치과에서는 디지털 장비를 활용하여 진단과 치료의 효율성을 높이고 있습니다. 초진 시 정밀 검사와 치료 계획을 동시에 진행하며, 가능한 한 내원 횟수를 줄이는 맞춤 치료 일정을 설계합니다.',
    },
  ],
};

export const metadata: Metadata = {
  title: '지제동 치과 | 임플란트·충치·사랑니 | 고덕퍼스트치과',
  description: '지제동에서 가까운 고덕퍼스트치과. 통합치의학과 전문의 이동현 원장 직접 진료. 디지털 가이드 임플란트, 충치치료, 사랑니 발치. 지제역에서 차량 15분. 031-611-3222',
  keywords: '지제동 치과, 지제동 임플란트, 지제동 충치치료, 지제동 사랑니, 지제역 치과, 평택 치과, 고덕퍼스트치과, 삼성전자 평택 치과',
  alternates: {
    canonical: 'https://gdfirstdent.com/jije',
  },
  openGraph: {
    title: '지제동 치과 | 고덕퍼스트치과',
    description: '지제동·지제역 인근 주민을 위한 통합치의학 전문 진료. 임플란트, 충치치료, 사랑니 발치. 전문의 직접 진료.',
    url: 'https://gdfirstdent.com/jije',
    siteName: '고덕퍼스트치과',
    locale: 'ko_KR',
    type: 'website',
  },
};

export default function JijePage() {
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
        name: '지제동 치과',
        item: 'https://gdfirstdent.com/jije',
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
