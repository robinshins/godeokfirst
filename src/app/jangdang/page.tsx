import RegionLandingPage, { RegionData } from '@/components/region/RegionLandingPage';
import { Metadata } from 'next';

const regionData: RegionData = {
  name: '장당동',
  fullName: '평택시 장당동',
  slug: 'jangdang',
  heroTitle: '장당동에서 찾는 믿을 수 있는 치과',
  heroSubtitle: '평택역 인근 장당동 주민 여러분, 고덕퍼스트치과에서 대학병원급 진료를 경험하세요. 통합치의학전문의 이동현 원장이 직접 진료합니다.',
  accessBadges: [
    '장당동에서 차로 약 15분',
    '평택역(1호선) 인근',
    '넓은 주차공간 완비',
    '고덕 에듀타운 4층'
  ],
  treatments: [
    {
      type: 'implant',
      title: '디지털 임플란트',
      description: '3D CT 기반 디지털 가이드 수술로 정확하고 안전한 임플란트 식립. 오스템, 포인트, 덴티스 연구자문위원 출신 원장의 풍부한 임상 경험.',
      features: ['디지털 가이드 수술', '당일 임시치아 가능', '뼈이식 전문', '무절개 수술']
    },
    {
      type: 'cavity-treatment',
      title: '충치 치료',
      description: '초기 충치부터 심한 충치까지, 치아를 최대한 보존하는 맞춤 치료. 장당동 가족 단위 환자분들께 꼼꼼한 설명과 함께 진료합니다.',
      features: ['레진 치료', '인레이/온레이', '크라운 치료', '신경치료']
    },
    {
      type: 'wisdom-tooth',
      title: '사랑니 발치',
      description: '구강외과 수련 경험을 바탕으로 매복 사랑니도 안전하게 발치. CT 촬영을 통한 정밀 진단으로 신경 손상 위험을 최소화합니다.',
      features: ['매복 사랑니 전문', '당일 발치 가능', 'CT 정밀 진단', '최소 절개']
    }
  ],
  directions: [
    {
      type: 'car',
      description: '장당동에서 고덕대로를 따라 고덕 방면으로 약 15분. 에듀스카이 건물 지하주차장 이용 가능합니다.'
    },
    {
      type: 'bus',
      description: '평택역에서 고덕국제신도시 방면 버스 탑승 후 고덕 에듀타운 정류장 하차. 약 25분 소요됩니다.'
    },
    {
      type: 'subway',
      description: '1호선 평택역 하차 후 고덕 방면 버스 환승. 장당동 주민분들은 평택역 이용이 가장 편리합니다.'
    },
    {
      type: 'car',
      description: '네비게이션에 "고덕퍼스트치과" 또는 "평택시 고덕로 250" 검색. 에듀스카이 4층 401, 402호입니다.'
    }
  ],
  articles: [
    {
      type: 'implant',
      title: '장당동 주민을 위한 임플란트 완벽 가이드',
      summary: '디지털 가이드 수술의 장점과 장당동에서 고덕퍼스트치과까지의 접근성을 안내합니다.'
    },
    {
      type: 'cavity-treatment',
      title: '장당동 가족을 위한 충치 치료 안내',
      summary: '젊은 가족 세대가 많은 장당동, 아이부터 어른까지 맞춤 충치 치료법을 소개합니다.'
    },
    {
      type: 'wisdom-tooth',
      title: '장당동에서 사랑니 발치, 어디서 받을까?',
      summary: '매복 사랑니 진단부터 발치 후 관리까지, 안전한 사랑니 치료 정보를 제공합니다.'
    }
  ],
  faqs: [
    {
      question: '장당동에서 고덕퍼스트치과까지 얼마나 걸리나요?',
      answer: '장당동에서 자가용으로 약 15분 거리입니다. 고덕대로를 이용하시면 빠르게 오실 수 있으며, 에듀스카이 건물 지하주차장을 무료로 이용하실 수 있습니다.'
    },
    {
      question: '장당동에서 대중교통으로도 갈 수 있나요?',
      answer: '네, 평택역(1호선)에서 고덕국제신도시 방면 버스를 이용하시면 됩니다. 고덕 에듀타운 정류장에서 하차하시면 도보 1분 거리입니다.'
    },
    {
      question: '고덕퍼스트치과 원장님은 어떤 분인가요?',
      answer: '이동현 대표원장은 통합치의학과 전문의이며, 조선대학교 치과병원 외래교수입니다. 오스템, 포인트, 덴티스 등 주요 임플란트 회사의 연구자문위원을 역임하였습니다.'
    },
    {
      question: '주차가 가능한가요?',
      answer: '네, 에듀스카이 건물 지하주차장을 이용하실 수 있습니다. 장당동에서 오시는 분들도 편리하게 주차하실 수 있도록 넓은 주차 공간을 확보하고 있습니다.'
    },
    {
      question: '장당동 근처에 치과가 많은데 굳이 고덕까지 가야 하나요?',
      answer: '고덕퍼스트치과는 통합치의학전문의가 직접 진료하며, 디지털 가이드 수술 등 대학병원급 장비를 갖추고 있습니다. 임플란트, 사랑니 발치 등 전문적인 치료가 필요하신 경우 15분 거리의 전문 진료를 추천드립니다.'
    }
  ]
};

export const metadata: Metadata = {
  title: '장당동 치과 추천 | 임플란트·충치·사랑니 | 고덕퍼스트치과',
  description: '장당동에서 차로 15분, 통합치의학전문의 이동현 원장 직접 진료. 디지털 가이드 임플란트, 충치 치료, 사랑니 발치 전문. 평택 고덕퍼스트치과의원.',
  keywords: ['장당동 치과', '장당동 임플란트', '장당동 치과 추천', '평택 치과', '고덕퍼스트치과', '장당동 충치 치료', '장당동 사랑니'],
  alternates: {
    canonical: 'https://gdfirstdent.com/jangdang'
  },
  openGraph: {
    title: '장당동 치과 추천 | 고덕퍼스트치과',
    description: '장당동에서 차로 15분. 통합치의학전문의가 직접 진료하는 고덕퍼스트치과. 디지털 가이드 임플란트, 충치, 사랑니 전문.',
    url: 'https://gdfirstdent.com/jangdang',
    siteName: '고덕퍼스트치과',
    type: 'website',
    locale: 'ko_KR'
  }
};

export default function JangdangPage() {
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
        item: 'https://gdfirstdent.com'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: '장당동',
        item: 'https://gdfirstdent.com/jangdang'
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
