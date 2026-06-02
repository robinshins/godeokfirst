import type { Metadata } from 'next';

export const metadata: Metadata = {
  "title": {
    "default": "Godeok First Dental | Pyeongtaek Korea",
    "template": "%s | Godeok First Dental"
  },
  "description": "The first dental clinic in Godeok Edu Town, Pyeongtaek. An integrated dentistry specialist provides one-stop care: implants, dentures, cavity·root canal, wisdom tooth extraction and gum treatment. Digital guide system and pain-reducing anesthesia. Evening·Saturday hours. Call: 031-611-3222",
  "alternates": {
    "canonical": "https://gdfirstdent.co.kr/en"
  },
  "openGraph": {
    "siteName": "Godeok First Dental",
    "title": "Godeok First Dental | Pyeongtaek Korea",
    "description": "The first dental clinic in Godeok Edu Town, Pyeongtaek. Integrated dentistry specialist for implants, dentures, cavity, wisdom tooth and gum treatment. Evening·Saturday hours. Call: 031-611-3222",
    "url": "https://gdfirstdent.co.kr/en",
    "locale": "en_US",
    "type": "website"
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
