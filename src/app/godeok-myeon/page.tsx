import RegionLandingPage, { RegionData } from '@/components/region/RegionLandingPage';
import { Metadata } from 'next';

const regionData: RegionData = {
  name: '고덕면',
  fullName: '평택시 고덕면',
  slug: 'godeok-myeon',
  heroTitle: '고덕면 주민의 우리 동네 치과',
  heroSubtitle: '고덕국제신도시 바로 옆, 고덕면에서 가장 가까운 전문 치과. 통합치의학전문의 이동현 원장이 이웃처럼 가까이에서 진료합니다.',
  accessBadges: [
    '고덕면에서 차로 5~10분',
    '일부 지역 도보 가능',
    '고덕 에듀타운 내 위치',
    '넓은 지하주차장 완비'
  ],
  treatments: [
    {
      type: 'implant',
      title: '디지털 임플란트',
      description: '3D CT와 디지털 가이드로 오차 없는 정밀 임플란트. 오스템·포인트·덴티스 연구자문위원 출신 원장이 환자 맞춤형 임플란트를 선택합니다.',
      features: ['3D 디지털 가이드', '즉시 임플란트', '상악동 거상술', '전악 임플란트']
    },
    {
      type: 'cavity-treatment',
      title: '충치 치료',
      description: '고덕면 주민분들의 일상 속 불편함을 빠르게 해결합니다. 당일 치료 가능한 레진부터 정밀한 세라믹 보철까지, 치아 손상을 최소화하는 치료.',
      features: ['당일 레진 치료', '세라믹 인레이', '정밀 신경치료', '예방 진료']
    },
    {
      type: 'wisdom-tooth',
      title: '사랑니 발치',
      description: '대학병원급 CT 진단으로 신경 위치를 정밀 파악하여 안전하게 발치합니다. 매복 사랑니, 수평 사랑니도 전문적으로 처리합니다.',
      features: ['3D CT 정밀 진단', '난이도 높은 매복 발치', '최소 통증 발치', '당일 시술 가능']
    }
  ],
  directions: [
    {
      type: 'walk',
      description: '고덕면 에듀타운 인근 거주 시 도보 10~15분. 고덕로를 따라 에듀스카이 건물로 오시면 됩니다.'
    },
    {
      type: 'car',
      description: '고덕면 각 마을에서 차로 5~10분. 고덕로 250 에듀스카이 건물 지하주차장 이용 가능합니다.'
    },
    {
      type: 'bus',
      description: '고덕면 내 마을버스 및 시내버스 이용 후 고덕 에듀타운 정류장 하차, 도보 1분 거리입니다.'
    },
    {
      type: 'car',
      description: '네비게이션에 "고덕퍼스트치과" 검색. 고덕국제신도시 내 에듀스카이 4층에 위치합니다.'
    }
  ],
  articles: [
    {
      type: 'implant',
      title: '고덕면 주민을 위한 임플란트 치료의 모든 것',
      summary: '가장 가까운 거리에서 받는 대학병원급 임플란트, 디지털 가이드 수술의 장점을 소개합니다.'
    },
    {
      type: 'cavity-treatment',
      title: '고덕면에서 빠르게 해결하는 충치 치료',
      summary: '도보 또는 단시간 이동으로 당일 충치 치료, 예방 진료까지 원스톱 구강 관리.'
    },
    {
      type: 'wisdom-tooth',
      title: '고덕면 사랑니 고민, 가까운 곳에서 해결하세요',
      summary: '고덕면에서 가장 가까운 사랑니 전문 치과, CT 기반 안전 발치 안내.'
    }
  ],
  faqs: [
    {
      question: '고덕면에서 고덕퍼스트치과까지 얼마나 걸리나요?',
      answer: '고덕면 대부분의 지역에서 차로 5~10분이면 도착합니다. 고덕 에듀타운 인근이시면 도보로도 방문 가능하며, 에듀스카이 건물 4층에 위치하고 있습니다.'
    },
    {
      question: '고덕국제신도시 개발과 함께 새로 생긴 치과인가요?',
      answer: '네, 고덕퍼스트치과는 고덕국제신도시의 성장과 함께하는 치과입니다. 대학병원 외래교수 출신의 통합치의학전문의가 신도시 주민분들께 전문적인 치과 진료를 제공하고자 개원하였습니다.'
    },
    {
      question: '고덕면에 거주하는데, 야간이나 주말 진료도 가능한가요?',
      answer: '정확한 진료 시간은 031-611-3222로 문의해 주시면 상세히 안내해 드립니다. 고덕면 주민분들의 편의를 최우선으로 고려하여 진료 일정을 운영하고 있습니다.'
    },
    {
      question: '이동현 원장님의 전문 분야는 무엇인가요?',
      answer: '이동현 대표원장은 통합치의학과 전문의로서, 임플란트, 보철, 구강외과 등 전반적인 치과 치료에 전문성을 갖추고 있습니다. 조선대학교 치과병원 외래교수이며, 오스템·포인트·덴티스 임플란트 연구자문위원을 역임하였습니다.'
    },
    {
      question: '고덕면에서 대학병원 가지 않고도 전문적인 치료가 가능한가요?',
      answer: '고덕퍼스트치과는 3D CT, 디지털 가이드 시스템 등 대학병원급 장비를 갖추고 있으며, 대학병원 외래교수 출신 전문의가 직접 진료합니다. 대부분의 치과 치료를 대학병원에 가지 않고도 고덕면 근처에서 해결하실 수 있습니다.'
    }
  ]
};

export const metadata: Metadata = {
  title: '고덕면 치과 | 가장 가까운 전문 치과 | 고덕퍼스트치과',
  description: '고덕면에서 차로 5분, 도보 가능. 통합치의학전문의 이동현 원장 직접 진료. 디지털 임플란트, 충치, 사랑니 전문. 고덕퍼스트치과의원 031-611-3222.',
  keywords: ['고덕면 치과', '고덕면 임플란트', '고덕면 치과 추천', '고덕국제신도시 치과', '고덕퍼스트치과', '평택 고덕 치과'],
  alternates: {
    canonical: 'https://medisksu.co.kr/godeok-myeon'
  },
  openGraph: {
    title: '고덕면 치과 | 가장 가까운 전문 치과 | 고덕퍼스트치과',
    description: '고덕면에서 차로 5분, 도보 가능. 통합치의학전문의가 직접 진료하는 고덕퍼스트치과.',
    url: 'https://medisksu.co.kr/godeok-myeon',
    siteName: '고덕퍼스트치과',
    type: 'website',
    locale: 'ko_KR'
  }
};

export default function GodeokMyeonPage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: regionData.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: '홈',
        item: 'https://medisksu.co.kr'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: '고덕면',
        item: 'https://medisksu.co.kr/godeok-myeon'
      }
    ]
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
