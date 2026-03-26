import { NextResponse } from 'next/server';

const INDEXNOW_KEY = 'e2f6aa489f8d517ab9f290e254b5952d';
const HOST = 'https://gdfirstdent.co.kr';

function getAllUrls(): string[] {
  const languages = ['en', 'jp', 'cn', 'vi', 'th', 'ru', 'uz', 'mn'];
  const treatments = ['implant', 'denture', 'cavity-treatment', 'wisdom-tooth', 'whitening', 'gum-care', 'tmj'];
  const regions = ['godeok', 'godeok-myeon', 'dongsak', 'seojeong', 'ichung', 'jije', 'jangdang', 'segyo'];
  const regionTreatments = ['implant', 'cavity-treatment', 'wisdom-tooth'];

  const urls: string[] = [
    HOST,
    `${HOST}/consultation`,
    ...treatments.map((t) => `${HOST}/${t}`),
  ];

  // Foreign language pages
  languages.forEach((lang) => {
    urls.push(`${HOST}/${lang}`);
    urls.push(`${HOST}/${lang}/consultation`);
    treatments.forEach((t) => urls.push(`${HOST}/${lang}/${t}`));
  });

  // Region pages
  regions.forEach((region) => {
    urls.push(`${HOST}/${region}`);
    regionTreatments.forEach((t) => urls.push(`${HOST}/${region}/${t}`));
  });

  return urls;
}

export async function GET(request: Request) {
  // Simple auth check via query param
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get('secret');
  if (secret !== INDEXNOW_KEY) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const urls = getAllUrls();

  try {
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({
        host: 'gdfirstdent.co.kr',
        key: INDEXNOW_KEY,
        keyLocation: `${HOST}/${INDEXNOW_KEY}.txt`,
        urlList: urls,
      }),
    });

    return NextResponse.json({
      success: true,
      status: response.status,
      urlCount: urls.length,
      message: `Submitted ${urls.length} URLs to IndexNow`,
    });
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}
