import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import RegionArticlePage from '@/components/region/RegionArticlePage';
import {
  BLOG_SLUGS,
  type BlogSlug,
  buildBlogArticleData,
  buildBlogBreadcrumbJsonLd,
  buildBlogFaqJsonLd,
  buildBlogMetadata,
  isBlogSlug,
} from '@/lib/blog-posts';

const REGION_NAME = '평택 화양지구';
const REGION_SLUG = 'hwayang';

export function generateStaticParams() {
  return BLOG_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  if (!isBlogSlug(slug)) return {};
  return buildBlogMetadata(REGION_NAME, REGION_SLUG, slug);
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!isBlogSlug(slug)) notFound();
  const blogSlug: BlogSlug = slug;
  const data = buildBlogArticleData(REGION_NAME, REGION_SLUG, blogSlug);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildBlogFaqJsonLd(data.faqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            buildBlogBreadcrumbJsonLd(REGION_NAME, REGION_SLUG, blogSlug, data.title),
          ),
        }}
      />
      <RegionArticlePage data={data} />
    </>
  );
}
