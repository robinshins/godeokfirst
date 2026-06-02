import type { Metadata } from 'next';

export const metadata: Metadata = {
  "title": {
    "default": "Godeok First Stomatologiya | Pyeongtaek, Koreya",
    "template": "%s | Godeok First Dental"
  },
  "description": "Pyeongtaek shahridagi Godeok Edu Town hududidagi birinchi stomatologiya klinikasi. Integratsiyalashgan stomatologiya mutaxassisi bevosita davolaydi: implantatsiya, tish protezi, karies·kanal davolash, aql tishini olib tashlash, milk davolash. Raqamli yo'naltirgich tizimi va og'riqni kamaytiruvchi behushlik. Kechki·shanba qabul. Tel: 031-611-3222",
  "alternates": {
    "canonical": "https://gdfirstdent.co.kr/uz"
  },
  "openGraph": {
    "siteName": "Godeok First Dental",
    "title": "Godeok First Stomatologiya | Pyeongtaek, Koreya",
    "description": "Pyeongtaek shahridagi Godeok Edu Town hududidagi birinchi stomatologiya klinikasi. Mutaxassis implantatsiya, tish protezi, karies, aql tishini olib tashlash, milk davolash xizmatlarini ko'rsatadi. Kechki·shanba qabul. Tel: 031-611-3222",
    "url": "https://gdfirstdent.co.kr/uz",
    "locale": "uz_UZ",
    "type": "website"
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
