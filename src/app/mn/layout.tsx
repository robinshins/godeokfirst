import type { Metadata } from 'next';

export const metadata: Metadata = {
  "title": {
    "default": "Godeok First шүдний эмнэлэг | Пёнтэк, Солонгос",
    "template": "%s | Godeok First Dental"
  },
  "description": "Пёнтэк хотын Godeok Edu Town дахь анхны шүдний эмнэлэг. Нэгдсэн шүдний эмчилгээний мэргэжлийн эмч шууд эмчилнэ: имплант, шүдний протез, цоорхой·сувгийн эмчилгээ, мэргэн ухааны шүд авах, буйлны эмчилгээ. Дижитал чиглүүлэгч систем болон өвдөлт намдаах мэдээ алдуулалттай. Оройн·бямба гарагийн үйлчилгээ. Утас: 031-611-3222",
  "alternates": {
    "canonical": "https://gdfirstdent.co.kr/mn"
  },
  "openGraph": {
    "siteName": "Godeok First Dental",
    "title": "Godeok First шүдний эмнэлэг | Пёнтэк, Солонгос",
    "description": "Пёнтэк хотын Godeok Edu Town дахь анхны шүдний эмнэлэг. Нэгдсэн шүдний эмчилгээний мэргэжлийн эмч имплант, протез, цоорхой, мэргэн ухааны шүд авах, буйлны эмчилгээ хийнэ. Оройн·бямба үйлчилгээ. Утас: 031-611-3222",
    "url": "https://gdfirstdent.co.kr/mn",
    "locale": "mn_MN",
    "type": "website"
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
