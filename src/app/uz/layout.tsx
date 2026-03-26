import type { Metadata } from 'next';

export const metadata: Metadata = {
  "title": {
    "default": "Godeok First Dental | Pyeongtaek",
    "template": "%s | Godeok First Dental"
  },
  "description": "Godeok Edu Town first dental clinic.",
  "alternates": {
    "canonical": "https://gdfirstdent.com/uz"
  },
  "openGraph": {
    "siteName": "Godeok First Dental",
    "title": "Godeok First Dental | Pyeongtaek",
    "description": "Godeok Edu Town first dental clinic.",
    "url": "https://gdfirstdent.com/uz",
    "locale": "uz_UZ",
    "type": "website"
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
