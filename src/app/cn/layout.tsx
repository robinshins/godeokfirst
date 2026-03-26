import type { Metadata } from 'next';

export const metadata: Metadata = {
  "title": {
    "default": "高德First牙科 | 平泽·高德教育城",
    "template": "%s | 高德First牙科"
  },
  "description": "高德教育城第一家牙科。综合牙科专家亲自治疗。",
  "alternates": {
    "canonical": "https://gdfirstdent.com/cn"
  },
  "openGraph": {
    "siteName": "高德First牙科",
    "title": "高德First牙科 | 平泽·高德教育城",
    "description": "高德教育城第一家牙科。综合牙科专家亲自治疗。",
    "url": "https://gdfirstdent.com/cn",
    "locale": "zh_CN",
    "type": "website"
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
