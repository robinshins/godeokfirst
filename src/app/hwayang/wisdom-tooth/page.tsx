import RegionArticlePage, { RegionArticleData } from '@/components/region/RegionArticlePage';
import { Metadata } from 'next';

const articleData: RegionArticleData = {
  regionName: '화양지구',
  regionSlug: 'hwayang',
  treatmentType: 'wisdom-tooth',
  title: '화양 사랑니 발치, 어디서 받아야 할까?',
  subtitle:
    '매복 사랑니도 걱정 없이! 대학병원 외래교수 출신 원장의 풍부한 수술 경험으로 안전하고 빠른 사랑니 발치를 경험하세요.',
  sections: [
    {
      title: '사랑니, 꼭 빼야 하나요?',
      content: [
        '사랑니(제3대구치)는 보통 17~25세 사이에 나오는 마지막 어금니입니다. 모든 사랑니를 반드시 발치해야 하는 것은 아니지만, 문제를 일으키는 사랑니는 적절한 시기에 발치하는 것이 좋습니다.',
        '사랑니가 비스듬하게 나거나, 잇몸 속에 묻혀 있거나(매복), 앞 어금니를 밀어서 통증이나 충치를 유발하는 경우 발치가 필요합니다. 지치주위염도 발치의 주요 적응증입니다.',
        '화양지구에 거주하시면서 사랑니 때문에 불편을 겪고 계시다면, 정확한 진단을 통해 발치 여부를 판단하는 것이 중요합니다.',
      ],
    },
    {
      title: '대학병원 외래교수 출신 원장의 사랑니 발치',
      content: [
        '사랑니 발치, 특히 매복 사랑니 발치는 구강외과적 전문성이 필요한 수술입니다. 하악의 매복 사랑니는 하치조신경과 인접해 있어, 신경 손상 없이 안전하게 발치하려면 풍부한 수술 경험이 필수적입니다.',
        '고덕퍼스트치과 이동현 원장은 조선대학교 치과병원 외래교수로서 수많은 난발치 케이스를 경험했습니다. 일반 치과에서 의뢰하는 난이도 높은 매복 사랑니도 안전하게 발치합니다.',
        '파노라마와 CT 촬영을 통해 사랑니의 위치, 각도, 신경과의 거리를 정밀하게 파악한 후 최적의 발치 계획을 수립합니다.',
      ],
    },
    {
      title: '매복 사랑니의 종류와 발치 난이도',
      content: [
        '매복 사랑니는 잇몸 속에 묻혀 있는 정도와 방향에 따라 난이도가 달라집니다. 수평 매복치, 경사 매복치, 완전 매복치 등 다양한 형태가 있습니다.',
        '하악의 수평 매복 사랑니는 하치조신경관과 가까이 위치하는 경우가 많아, CT를 통한 3차원적 분석이 필수입니다. 이동현 원장은 CT 영상을 통해 신경관과 사랑니 뿌리의 정확한 관계를 파악하여 신경 손상 위험을 최소화합니다.',
      ],
    },
    {
      title: '최소 침습 발치로 빠른 회복',
      content: [
        '고덕퍼스트치과는 최소 침습 발치 테크닉을 적용합니다. 불필요한 잇몸 절개와 뼈 삭제를 최소화하여 수술 후 붓기와 통증을 줄이고, 회복 기간을 단축합니다.',
        '충분한 마취 후 진행하므로 수술 중 통증은 거의 없습니다. 단계적 마취법으로 마취 자체의 불편감도 최소화합니다.',
      ],
    },
    {
      title: '사랑니 발치 후 주의사항과 회복 과정',
      content: [
        '사랑니 발치 후 첫 24시간이 가장 중요합니다. 거즈를 1시간가량 꽉 물고 계시고, 당일에는 뜨거운 음식, 심한 운동, 음주, 흡연을 피해주셔야 합니다.',
        '붓기는 수술 후 2~3일째에 가장 심해지며, 이후 점차 빠집니다. 냉찜질을 해주시면 붓기 조절에 도움이 됩니다. 대부분 일주일 이내에 일상생활 복귀가 가능합니다.',
        '발치 후 5~7일 뒤에 경과 확인과 실밥 제거를 위해 한 번 더 내원이 필요합니다.',
      ],
    },
    {
      title: '사랑니 발치, 적절한 시기는 언제?',
      content: [
        '사랑니 발치는 가급적 20대에 받는 것이 유리합니다. 나이가 들수록 뼈의 경화도가 높아지고 회복력이 떨어져, 발치 난이도와 회복 기간이 늘어날 수 있습니다.',
        '화양지구에 거주하는 20~30대 분들이라면 한 번쯤 사랑니 상태를 확인받아보시기를 권장합니다.',
      ],
    },
  ],
  tips: [
    '사랑니 발치 전날에는 충분히 수면을 취하고, 당일 아침에 가벼운 식사를 하고 오시면 좋습니다.',
    '발치 당일에는 가급적 자가용을 이용해주세요. 화양지구에서 약 25분 거리이므로 보호자 동반을 권장합니다.',
    '발치 후 24시간 동안은 빨대 사용, 강한 가글, 침 뱉기를 피해주세요. 혈병이 떨어져 나가면 건조소켓이 발생할 수 있습니다.',
    '발치 후 2~3일간은 죽, 스프 등 부드러운 음식을 드시고, 발치 부위 반대편으로 씹어주세요.',
    '처방받은 약을 정해진 시간에 복용하시고, 이상 증상이 있으면 즉시 연락주세요(031-611-3222).',
  ],
  conclusion:
    '평택 화양지구에서 사랑니 발치를 고민하고 계시다면, 대학병원 외래교수 출신 이동현 원장이 직접 시술하는 고덕퍼스트치과를 방문해보세요. CT 기반 정밀 진단과 최소 침습 발치 테크닉으로 안전하고 빠른 회복을 약속드립니다.',
  faqs: [
    {
      question: '사랑니 4개를 한 번에 다 뺄 수 있나요?',
      answer:
        '일반적으로 같은 쪽 상하 2개씩 나눠서 발치하는 것을 권장합니다. 한쪽을 먼저 발치하고 회복된 후 반대쪽을 발치하면, 식사에 큰 지장 없이 회복할 수 있습니다.',
    },
    {
      question: '매복 사랑니 발치가 일반 발치보다 많이 아픈가요?',
      answer:
        '수술 중에는 충분한 마취로 통증이 없습니다. 수술 후 매복 정도에 따라 일반 발치보다 붓기와 통증이 더 있을 수 있지만, 처방되는 진통제로 충분히 조절 가능합니다.',
    },
    {
      question: '사랑니 발치 비용은 건강보험이 적용되나요?',
      answer:
        '네, 사랑니 발치는 건강보험이 적용됩니다. 매복 사랑니의 난이도에 따라 본인부담금이 달라지며, 파노라마 및 CT 촬영비도 보험 적용이 가능합니다.',
    },
    {
      question: '발치 후 실밥 제거를 위해 꼭 다시 방문해야 하나요?',
      answer:
        '네, 발치 후 5~7일 뒤에 경과 확인과 실밥 제거를 위해 내원이 필요합니다.',
    },
  ],
};

export const metadata: Metadata = {
  title: '화양 사랑니 발치 | 매복 사랑니 전문 - 고덕퍼스트치과',
  description:
    '화양 사랑니발치는 대학병원 외래교수 출신 원장이 직접 시술하는 고덕퍼스트치과에서. CT 정밀 진단, 최소 침습 발치, 매복 사랑니 전문.',
  keywords: [
    '화양 사랑니',
    '화양 사랑니발치',
    '평택 화양 사랑니',
    '화양지구 사랑니',
    '평택 매복 사랑니',
    '고덕퍼스트치과 사랑니',
  ],
  alternates: {
    canonical: 'https://gdfirstdent.co.kr/hwayang/wisdom-tooth',
  },
  openGraph: {
    title: '화양 사랑니 발치 | 고덕퍼스트치과',
    description: '대학병원 외래교수 출신 원장의 안전한 사랑니 발치. CT 정밀 진단, 최소 침습 테크닉.',
    url: 'https://gdfirstdent.co.kr/hwayang/wisdom-tooth',
    siteName: '고덕퍼스트치과',
    type: 'article',
    images: [
      {
        url: '/고덕og이미지.png',
        width: 1200,
        height: 630,
        alt: '고덕퍼스트치과 - 화양 사랑니 발치',
      },
    ],
  },
};

export default function HwayangWisdomToothPage() {
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
      { '@type': 'ListItem', position: 3, name: '사랑니 발치', item: 'https://gdfirstdent.co.kr/hwayang/wisdom-tooth' },
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
