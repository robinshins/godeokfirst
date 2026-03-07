import RegionLandingPage, { RegionData } from '@/components/region/RegionLandingPage';
import { Metadata } from 'next';

const regionData: RegionData = {
  name: '서정동',
  fullName: '평택시 서정동',
  slug: 'seojeong',
  heroTitle: '서정동 치과\n고덕퍼스트치과',
  heroSubtitle: '서정역(SRT/KTX) 인근 서정동 주민을 위한 통합치의학 전문 진료. 대학병원급 장비와 전문의 직접 진료로 안심하고 치료받으실 수 있습니다.',
  accessBadges: [
    '서정역에서 차량 5분',
    '고덕로 직진 접근',
    '건물 내 주차 가능',
    '에듀스카이 4층 위치',
  ],
  treatments: [
    {
      type: 'implant',
      title: '임플란트',
      description: '디지털 가이드 수술로 정확하고 안전한 임플란트. 통합치의학과 전문의가 직접 진단부터 수술, 보철까지 원스톱 진료합니다.',
      features: ['3D CT 정밀 진단', '디지털 가이드 수술', '전문의 직접 시술', '체계적 사후 관리'],
    },
    {
      type: 'cavity-treatment',
      title: '충치치료',
      description: '초기 충치부터 신경치료까지, 치아 보존을 최우선으로 하는 맞춤 충치치료를 제공합니다.',
      features: ['미세현미경 활용', '최소 삭제 원칙', '심미 보철 재료', '통증 최소화 치료'],
    },
    {
      type: 'wisdom-tooth',
      title: '사랑니 발치',
      description: '매복 사랑니, 누운 사랑니도 안전하게. 대학병원 출신 전문의의 풍부한 발치 경험으로 빠르고 정확하게 발치합니다.',
      features: ['파노라마·CT 정밀 촬영', '대학병원급 발치 노하우', '최소 절개 시술', '빠른 회복 프로토콜'],
    },
  ],
  directions: [
    {
      type: 'car',
      description: '서정동에서 고덕로 방면으로 직진하여 약 5분 소요. 에듀스카이 건물 지하 주차장 이용 가능합니다.',
    },
    {
      type: 'bus',
      description: '서정역 앞 버스 정류장에서 고덕국제신도시 방면 버스 탑승. 고덕퍼스트치과 인근 정류장 하차 후 도보 3분.',
    },
    {
      type: 'walk',
      description: '에듀스카이 건물 4층 401, 402호. 엘리베이터 이용 가능하며 건물 입구에서 안내 표지판을 따라오시면 됩니다.',
    },
  ],
  articles: [
    {
      type: 'implant',
      title: '서정동에서 찾는 임플란트 잘하는 치과',
      summary: '서정동 주민이 고덕퍼스트치과를 선택하는 이유와 디지털 가이드 임플란트의 장점을 알아봅니다.',
    },
    {
      type: 'cavity-treatment',
      title: '서정동 충치치료, 치아 보존이 핵심입니다',
      summary: '충치 단계별 치료법과 고덕퍼스트치과만의 보존 치료 원칙을 소개합니다.',
    },
    {
      type: 'wisdom-tooth',
      title: '서정동 사랑니 발치, 이런 경우 꼭 빼야 합니다',
      summary: '사랑니 발치가 필요한 경우와 안전한 발치를 위한 체크포인트를 안내합니다.',
    },
  ],
  faqs: [
    {
      question: '서정동에서 고덕퍼스트치과까지 얼마나 걸리나요?',
      answer: '서정동에서 차량으로 약 5분 소요됩니다. 고덕로를 이용하면 빠르게 도착할 수 있으며, 서정역 앞에서 고덕국제신도시 방면 버스를 이용하실 수도 있습니다.',
    },
    {
      question: '고덕퍼스트치과 주차는 가능한가요?',
      answer: '네, 에듀스카이 건물 내 주차장을 이용하실 수 있습니다. 진료 시간 동안 무료 주차가 가능하오니 편하게 차량으로 방문하세요.',
    },
    {
      question: '통합치의학과 전문의가 직접 진료하나요?',
      answer: '네, 이동현 대표원장이 직접 진료합니다. 통합치의학과 전문의이자 조선대학교 치과병원 외래교수로, 임플란트부터 일반 치료까지 폭넓은 전문성을 갖추고 있습니다.',
    },
    {
      question: '서정동에서 임플란트 상담을 받고 싶은데 예약은 어떻게 하나요?',
      answer: '전화(031-611-3222)로 예약하시면 됩니다. 상담 시 3D CT 촬영과 함께 정밀 진단을 받으실 수 있으며, 치료 계획과 비용에 대해 상세히 안내드립니다.',
    },
    {
      question: '서정역에서 대중교통으로 방문할 수 있나요?',
      answer: '서정역(SRT/KTX)에서 고덕국제신도시 방면 버스를 이용하시면 편리합니다. 정확한 버스 노선은 전화 문의 시 안내드리겠습니다.',
    },
  ],
};

export const metadata: Metadata = {
  title: '서정동 치과 | 임플란트·충치·사랑니 | 고덕퍼스트치과',
  description: '서정동에서 가까운 고덕퍼스트치과. 통합치의학과 전문의 이동현 원장 직접 진료. 디지털 가이드 임플란트, 충치치료, 사랑니 발치. 서정역에서 차량 5분. 031-611-3222',
  keywords: '서정동 치과, 서정동 임플란트, 서정동 충치치료, 서정동 사랑니, 평택 치과, 고덕퍼스트치과, 서정역 치과',
  alternates: {
    canonical: 'https://gdfirstdent.com/seojeong',
  },
  openGraph: {
    title: '서정동 치과 | 고덕퍼스트치과',
    description: '서정동 주민을 위한 통합치의학 전문 진료. 임플란트, 충치치료, 사랑니 발치. 전문의 직접 진료.',
    url: 'https://gdfirstdent.com/seojeong',
    siteName: '고덕퍼스트치과',
    locale: 'ko_KR',
    type: 'website',
  },
};

export default function SeojeongPage() {
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
        name: '서정동 치과',
        item: 'https://gdfirstdent.com/seojeong',
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
