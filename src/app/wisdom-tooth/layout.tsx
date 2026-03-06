import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '고덕동사랑니 평택사랑니발치 | 고덕퍼스트치과',
  description: '고덕동사랑니 평택사랑니발치 전문. 3D CT 정밀 진단, 대학병원급 난이도 발치 가능. 통증 완화 마취 시스템.',
  keywords: ['고덕동사랑니', '평택사랑니발치', '고덕퍼스트치과사랑니', '평택사랑니', '사랑니발치'],
  alternates: {
    canonical: 'https://medisksu.co.kr/wisdom-tooth',
  },
  openGraph: {
    title: '고덕동사랑니 평택사랑니발치 | 고덕퍼스트치과',
    description: '고덕동사랑니 평택사랑니발치 전문. 3D CT 정밀 진단, 대학병원급 난이도 발치 가능.',
    url: 'https://medisksu.co.kr/wisdom-tooth',
    siteName: '고덕퍼스트치과',
    type: 'website',
    images: [{ url: '/icons/extraction.png', width: 200, height: 200 }],
  },
};

// 사랑니 페이지 전용 JSON-LD
const wisdomToothJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalProcedure',
      '@id': 'https://medisksu.co.kr/wisdom-tooth#service',
      name: '고덕동사랑니 평택사랑니발치',
      description: '고덕동사랑니 평택사랑니발치 전문. 3D CT 정밀 진단으로 신경 손상없이 안전하게 발치. 대학병원급 난이도 발치.',
      image: 'https://medisksu.co.kr/icons/extraction.png',
      url: 'https://medisksu.co.kr/wisdom-tooth',
      procedureType: 'Surgical',
      bodyLocation: 'Mouth',
      provider: {
        '@type': 'Dentist',
        name: '고덕퍼스트치과',
      },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://medisksu.co.kr/wisdom-tooth#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: '사랑니 발치, 꼭 해야 하나요?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '통증이 없어도 잇몸 속에서 염증, 충치, 치열 불균형을 일으킬 수 있습니다. 3D CT로 정밀 진단 후 필요 여부를 판단하며, 미리 뽑지 않으면 급성 염증, 인접 치아 손상, 턱관절 장애 등의 문제가 발생할 수 있습니다.',
          },
        },
        {
          '@type': 'Question',
          name: '난이도 높은 사랑니도 뽑을 수 있나요?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '네, 가능합니다. 고덕퍼스트치과는 대학병원급 난이도 발치가 가능한 시스템을 갖추고 있습니다. 수평매복, 완전매복 등 일반 치과에서 큰 병원을 권유하는 어려운 케이스도 안전하게 발치합니다.',
          },
        },
        {
          '@type': 'Question',
          name: '사랑니 발치, 아프지 않나요?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '최신 통증 완화 마취 시스템으로 시술 중 통증을 거의 느끼지 못합니다. 불안하신 분은 의식하진정요법(수면마취)으로 편안하게 시술받으실 수 있습니다.',
          },
        },
        {
          '@type': 'Question',
          name: '사랑니 발치 후 주의사항이 있나요?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '발치 후에는 뜨겁고 자극적인 음식을 피하고, 부드러운 음식을 드세요. 2-3일간 심한 운동과 사우나는 피하시고, 처방받은 항생제와 소염제를 규칙적으로 복용하세요.',
          },
        },
        {
          '@type': 'Question',
          name: '사랑니 발치, 빠른 진료 가능한가요?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '3D CT 촬영과 진단 후 즉시 발치가 가능합니다. 원스톱 진료 시스템으로 진단부터 발치, 사후 관리까지 한 번의 방문으로 완료됩니다.',
          },
        },
      ],
    },
  ],
};

export default function WisdomToothLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(wisdomToothJsonLd) }}
      />
      {children}
    </>
  );
}
