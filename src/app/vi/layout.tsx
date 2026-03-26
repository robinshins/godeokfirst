import type { Metadata } from 'next';

export const metadata: Metadata = {
  "title": {
    "default": "Godeok First Dental | Pyeongtaek",
    "template": "%s | Godeok First Dental"
  },
  "description": "Phong kham nha khoa dau tien tai Godeok Edu Town.",
  "alternates": {
    "canonical": "https://gdfirstdent.co.kr/vi"
  },
  "openGraph": {
    "siteName": "Godeok First Dental",
    "title": "Godeok First Dental | Pyeongtaek",
    "description": "Phong kham nha khoa dau tien tai Godeok Edu Town.",
    "url": "https://gdfirstdent.co.kr/vi",
    "locale": "vi_VN",
    "type": "website"
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
