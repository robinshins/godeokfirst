interface FAQ {
  question: string;
  answer: string;
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface MedicalServiceInput {
  name: string;
  description: string;
  url: string;
}

export function generateFAQSchema(faqs: FAQ[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question.replace(/\n/g, ' '),
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

interface ClinicOffer {
  name: string;
  price: number;
  vatExtra: boolean;
}

interface InsightArticleSchemaInput {
  title: string;
  description: string;
  url: string;
  publishedAt: string;
  updatedAt: string;
  keywords?: string[];
  faqs?: FAQ[];
  breadcrumbs?: BreadcrumbItem[];
  offers?: ClinicOffer[];
}

export function generateInsightArticleSchema({
  title,
  description,
  url,
  publishedAt,
  updatedAt,
  keywords,
  faqs,
  breadcrumbs,
  offers,
}: InsightArticleSchemaInput) {
  const doctor = {
    '@type': 'Person',
    '@id': 'https://gdfirstdent.co.kr/#dr-lee-donghyun',
    name: '이동현',
    jobTitle: '고덕퍼스트치과의원 대표원장 · 통합치의학과 전문의(보건복지부 인증)',
    worksFor: { '@id': 'https://gdfirstdent.co.kr/#clinic' },
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: '서울대학교 치의학대학원',
    },
    affiliation: {
      '@type': 'CollegeOrUniversity',
      name: '조선대학교 치과병원',
      description: '외래교수',
    },
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: '전문의 자격',
        name: '보건복지부 인증 통합치의학과 전문의',
      },
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: '학위',
        name: '치의학 석사',
      },
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: '수료',
        name: '서울대학교 치의학대학원 고급치의학과정 수료',
      },
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: '수료',
        name: '서울대학교 치의학대학원 임플란트 치의학 우수상 수료',
      },
    ],
    knowsAbout: [
      '임플란트',
      '크라운·보철',
      '신경치료',
      '사랑니 발치',
      '잇몸치료',
    ],
  };

  const clinic = {
    '@type': ['Dentist', 'MedicalOrganization'],
    '@id': 'https://gdfirstdent.co.kr/#clinic',
    name: '고덕퍼스트치과의원',
    alternateName: '고덕퍼스트치과',
    url: 'https://gdfirstdent.co.kr',
    logo: {
      '@type': 'ImageObject',
      url: 'https://gdfirstdent.co.kr/favicon.svg',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '고덕로 250 에듀스카이 4층 401·402호',
      addressLocality: '평택시',
      addressRegion: '경기도',
      addressCountry: 'KR',
    },
    telephone: '+82-31-611-3222',
    areaServed: '경기도 평택시',
    sameAs: ['https://naver.me/GSD1OqoS'],
    employee: { '@id': 'https://gdfirstdent.co.kr/#dr-lee-donghyun' },
  };

  const graph: Record<string, unknown>[] = [
    doctor,
    clinic,
    {
      '@type': ['MedicalWebPage', 'Article'],
      '@id': `${url}#article`,
      url,
      headline: title,
      description,
      inLanguage: 'ko-KR',
      datePublished: publishedAt,
      dateModified: updatedAt,
      author: { '@id': 'https://gdfirstdent.co.kr/#dr-lee-donghyun' },
      publisher: { '@id': 'https://gdfirstdent.co.kr/#clinic' },
      reviewedBy: { '@id': 'https://gdfirstdent.co.kr/#dr-lee-donghyun' },
      about: {
        '@type': 'MedicalCondition',
        name: '치과 의학 정보',
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': url,
      },
      keywords: keywords?.join(', '),
      isAccessibleForFree: true,
      audience: {
        '@type': 'MedicalAudience',
        audienceType: 'Patient',
      },
    },
  ];

  if (faqs && faqs.length > 0) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${url}#faq`,
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.question.replace(/\n/g, ' '),
        acceptedAnswer: {
          '@type': 'Answer',
          text: f.answer,
        },
      })),
    });
  }

  if (breadcrumbs && breadcrumbs.length > 0) {
    graph.push({
      '@type': 'BreadcrumbList',
      '@id': `${url}#breadcrumb`,
      itemListElement: breadcrumbs.map((b, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: b.name,
        item: b.url,
      })),
    });
  }

  if (offers && offers.length > 0) {
    graph.push({
      '@type': 'OfferCatalog',
      '@id': `${url}#pricing`,
      name: '고덕퍼스트치과의원 비급여 진료비용',
      provider: { '@id': 'https://gdfirstdent.co.kr/#clinic' },
      itemListElement: offers.map((o) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'MedicalProcedure', name: o.name },
        priceSpecification: {
          '@type': 'PriceSpecification',
          price: o.price,
          priceCurrency: 'KRW',
          valueAddedTaxIncluded: !o.vatExtra,
        },
        seller: { '@id': 'https://gdfirstdent.co.kr/#clinic' },
        areaServed: '경기도 평택시',
      })),
    });
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  };
}

export function generateMedicalServiceSchema({ name, description, url }: MedicalServiceInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name,
    description,
    url,
    performer: {
      '@type': 'Dentist',
      name: '고덕퍼스트치과',
      address: {
        '@type': 'PostalAddress',
        addressLocality: '경기도 평택시',
        addressRegion: '경기',
        addressCountry: 'KR',
      },
    },
  };
}
