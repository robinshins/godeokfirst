import type { Metadata } from 'next';

export const metadata: Metadata = {
  "title": {
    "default": "コドクファースト歯科 | 平沢・高徳エデュタウン",
    "template": "%s | コドクファースト歯科"
  },
  "description": "平沢市高徳エデュタウン初のコドクファースト歯科。統合歯科専門医が直接診療。インプラント、入れ歯、虫歯·神経治療、親知らず抜歯、歯周治療まで一貫した責任診療。デジタルガイドシステムと痛み軽減麻酔システムを完備。夜間·土曜日診療可能。電話: 031-611-3222",
  "alternates": {
    "canonical": "https://gdfirstdent.co.kr/jp"
  },
  "openGraph": {
    "siteName": "コドクファースト歯科",
    "title": "コドクファースト歯科 | 平沢・高徳エデュタウン",
    "description": "平沢市高徳エデュタウン初のコドクファースト歯科。統合歯科専門医が直接診療。インプラント、入れ歯、虫歯·神経治療、親知らず抜歯、歯周治療まで一貫した責任診療。デジタルガイドシステム完備。電話: 031-611-3222",
    "url": "https://gdfirstdent.co.kr/jp",
    "locale": "ja_JP",
    "type": "website"
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
