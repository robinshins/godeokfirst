import { MetadataRoute } from 'next'
import fs from 'node:fs'
import path from 'node:path'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://gdfirstdent.co.kr'

  const languages = ['en', 'jp', 'cn', 'vi', 'th', 'ru', 'uz', 'mn']
  const treatments = ['implant', 'denture', 'cavity-treatment', 'wisdom-tooth', 'whitening', 'gum-care', 'tmj']
  const regions = ['godeok', 'godeok-myeon', 'dongsak', 'seojeong', 'ichung', 'jije', 'jangdang', 'segyo']
  const regionTreatments = ['implant', 'cavity-treatment', 'wisdom-tooth']

  // Korean pages
  const koreanPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'daily', priority: 1 },
    { url: `${baseUrl}/consultation`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    ...treatments.map((t) => ({
      url: `${baseUrl}/${t}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: t === 'implant' ? 1 : 0.8,
    })),
  ]

  // Foreign language pages
  const langPages: MetadataRoute.Sitemap = languages.flatMap((lang) => [
    { url: `${baseUrl}/${lang}`, lastModified: new Date(), changeFrequency: 'daily' as const, priority: 1 },
    { url: `${baseUrl}/${lang}/consultation`, lastModified: new Date(), changeFrequency: 'daily' as const, priority: 0.9 },
    ...treatments.map((t) => ({
      url: `${baseUrl}/${lang}/${t}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: t === 'implant' ? 1 : 0.8,
    })),
  ])

  // Region SEO pages
  const regionPages: MetadataRoute.Sitemap = regions.flatMap((region) => [
    { url: `${baseUrl}/${region}`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },
    ...regionTreatments.map((t) => ({
      url: `${baseUrl}/${region}/${t}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),
  ])

  // Insights hub + articles (from data/insights-articles.json)
  const insightPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/insights`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  ]
  try {
    const file = path.join(process.cwd(), 'data', 'insights-articles.json')
    if (fs.existsSync(file)) {
      const parsed = JSON.parse(fs.readFileSync(file, 'utf-8'))
      const articles = Array.isArray(parsed) ? parsed : parsed.articles
      if (Array.isArray(articles)) {
        for (const a of articles) {
          if (!a?.slug) continue
          insightPages.push({
            url: `${baseUrl}/insights/${a.slug}`,
            lastModified: a.updatedAt ? new Date(a.updatedAt) : new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
          })
        }
      }
    }
  } catch {
    // swallow — sitemap should never break the build
  }

  return [...koreanPages, ...langPages, ...regionPages, ...insightPages]
}
