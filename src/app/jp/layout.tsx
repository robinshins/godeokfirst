import type { Metadata } from 'next';

export const metadata: Metadata = {
  "title": {
    "default": "コドクファースト歯科 | 平沢・高徳エデュタウン",
    "template": "%s | コドクファースト歯科"
  },
  "description": "高徳エデュタウン初の歯科。統合歯科専門医が直接治療。",
  "alternates": {
    "canonical": "https://gdfirstdent.com/jp"
  },
  "openGraph": {
    "siteName": "コドクファースト歯科",
    "title": "コドクファースト歯科 | 平沢・高徳エデュタウン",
    "description": "高徳エデュタウン初の歯科。統合歯科専門医が直接治療。",
    "url": "https://gdfirstdent.com/jp",
    "locale": "ja_JP",
    "type": "website"
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
