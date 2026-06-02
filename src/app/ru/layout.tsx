import type { Metadata } from 'next';

export const metadata: Metadata = {
  "title": {
    "default": "Стоматология Godeok First | Пхёнтхэк, Корея",
    "template": "%s | Godeok First Dental"
  },
  "description": "Первая стоматологическая клиника в Godeok Edu Town, Пхёнтхэк. Лечение проводит специалист по интегрированной стоматологии: имплантация, протезы, кариес·лечение каналов, удаление зубов мудрости, лечение дёсен. Цифровая навигационная система и анестезия с уменьшением боли. Вечерний приём·суббота. Тел: 031-611-3222",
  "alternates": {
    "canonical": "https://gdfirstdent.co.kr/ru"
  },
  "openGraph": {
    "siteName": "Godeok First Dental",
    "title": "Стоматология Godeok First | Пхёнтхэк, Корея",
    "description": "Первая стоматологическая клиника в Godeok Edu Town, Пхёнтхэк. Специалист по интегрированной стоматологии: имплантация, протезы, кариес, удаление зубов мудрости, лечение дёсен. Вечерний приём·суббота. Тел: 031-611-3222",
    "url": "https://gdfirstdent.co.kr/ru",
    "locale": "ru_RU",
    "type": "website"
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
