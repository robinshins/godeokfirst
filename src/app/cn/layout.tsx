import type { Metadata } from 'next';

export const metadata: Metadata = {
  "title": {
    "default": "高德First牙科 | 平泽·高德教育城",
    "template": "%s | 高德First牙科"
  },
  "description": "位于平泽高德教育城的第一家牙科——高德First牙科。综合牙科专科医生从咨询、手术到术后管理一贯负责诊疗。提供种植牙、假牙、龋齿·神经治疗、智齿拔除、牙周治疗等综合牙科服务。配备数字导航手术系统和疼痛缓解麻醉系统。提供夜间和周六诊疗。电话：031-611-3222",
  "alternates": {
    "canonical": "https://gdfirstdent.co.kr/cn"
  },
  "openGraph": {
    "siteName": "高德First牙科",
    "title": "高德First牙科 | 平泽·高德教育城",
    "description": "位于平泽高德教育城的第一家牙科。综合牙科专科医生亲自负责种植牙、假牙、龋齿·神经治疗、智齿拔除、牙周治疗等综合诊疗。数字导航系统和疼痛缓解麻醉。电话：031-611-3222",
    "url": "https://gdfirstdent.co.kr/cn",
    "locale": "zh_CN",
    "type": "website"
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
