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

interface InsightArticleSchemaInput {
  title: string;
  description: string;
  url: string;
  publishedAt: string;
  updatedAt: string;
  keywords?: string[];
  faqs?: FAQ[];
  breadcrumbs?: BreadcrumbItem[];
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
}: InsightArticleSchemaInput) {
  const graph: Record<string, unknown>[] = [
    {
      '@type': ['MedicalWebPage', 'Article'],
      '@id': `${url}#article`,
      url,
      headline: title,
      description,
      inLanguage: 'ko-KR',
      datePublished: publishedAt,
      dateModified: updatedAt,
      author: {
        '@type': 'MedicalBusiness',
        name: '고덕퍼스트치과',
        url: 'https://gdfirstdent.co.kr',
      },
      publisher: {
        '@type': 'Organization',
        name: '고덕퍼스트치과',
        url: 'https://gdfirstdent.co.kr',
        logo: {
          '@type': 'ImageObject',
          url: 'https://gdfirstdent.co.kr/favicon.svg',
        },
      },
      reviewedBy: {
        '@type': 'Person',
        name: '통합치의학과 전문의',
        jobTitle: '통합치의학과 전문의',
      },
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
