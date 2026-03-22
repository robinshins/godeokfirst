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
