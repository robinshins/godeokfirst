import type { Metadata } from 'next';

export const metadata: Metadata = {
  "title": {
    "default": "Godeok First Dental | Pyeongtaek Korea",
    "template": "%s | Godeok First Dental"
  },
  "description": "The first dental clinic in Godeok Edu Town, Pyeongtaek.",
  "alternates": {
    "canonical": "https://gdfirstdent.co.kr/en"
  },
  "openGraph": {
    "siteName": "Godeok First Dental",
    "title": "Godeok First Dental | Pyeongtaek Korea",
    "description": "The first dental clinic in Godeok Edu Town, Pyeongtaek.",
    "url": "https://gdfirstdent.co.kr/en",
    "locale": "en_US",
    "type": "website"
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
