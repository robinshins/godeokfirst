import type { Metadata } from 'next';

export const metadata: Metadata = {
  "title": {
    "default": "Godeok First Dental | Pyeongtaek",
    "template": "%s | Godeok First Dental"
  },
  "description": "Godeok First Dental, Pyeongtaek Godeok Edu Town. Integrated dentistry specialist for implants, dentures, cavities, wisdom tooth, gum and TMJ. Call: 031-611-3222",
  "alternates": {
    "canonical": "https://gdfirstdent.co.kr/mn"
  },
  "openGraph": {
    "siteName": "Godeok First Dental",
    "title": "Godeok First Dental | Pyeongtaek",
    "description": "Godeok First Dental — the first dental clinic in Pyeongtaek Godeok Edu Town. Integrated dentistry specialist provides one-stop care: implants, dentures, cavities, wisdom tooth, gum and TMJ. Digital guide surgery, evening hours. Call: 031-611-3222",
    "url": "https://gdfirstdent.co.kr/mn",
    "locale": "mn_MN",
    "type": "website"
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
