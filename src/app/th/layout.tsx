import type { Metadata } from 'next';

export const metadata: Metadata = {
  "title": {
    "default": "คลินิกทันตกรรม Godeok First | พยองแท็ก เกาหลี",
    "template": "%s | Godeok First Dental"
  },
  "description": "คลินิกทันตกรรมแห่งแรกใน Godeok Edu Town เมืองพยองแท็ก ทันตแพทย์เฉพาะทางทันตกรรมบูรณาการดูแลโดยตรง: รากฟันเทียม ฟันปลอม ฟันผุ·รักษารากฟัน ถอนฟันคุด รักษาเหงือก พร้อมระบบนำทางดิจิทัลและระบบวางยาชาลดความเจ็บปวด เปิดทำการช่วงเย็น·วันเสาร์ โทร: 031-611-3222",
  "alternates": {
    "canonical": "https://gdfirstdent.co.kr/th"
  },
  "openGraph": {
    "siteName": "Godeok First Dental",
    "title": "คลินิกทันตกรรม Godeok First | พยองแท็ก เกาหลี",
    "description": "คลินิกทันตกรรมแห่งแรกใน Godeok Edu Town เมืองพยองแท็ก ทันตแพทย์เฉพาะทางดูแลโดยตรง: รากฟันเทียม ฟันปลอม ฟันผุ ถอนฟันคุด รักษาเหงือก เปิดช่วงเย็น·วันเสาร์ โทร: 031-611-3222",
    "url": "https://gdfirstdent.co.kr/th",
    "locale": "th_TH",
    "type": "website"
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
