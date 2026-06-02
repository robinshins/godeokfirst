import type { Metadata } from 'next';

export const metadata: Metadata = {
  "title": {
    "default": "Nha khoa Godeok First | Pyeongtaek, Hàn Quốc",
    "template": "%s | Nha khoa Godeok First"
  },
  "description": "Phòng khám nha khoa đầu tiên tại Godeok Edu Town, Pyeongtaek. Bác sĩ chuyên khoa nha khoa tổng hợp trực tiếp điều trị: trồng răng implant, răng giả, sâu răng·tủy răng, nhổ răng khôn, điều trị nướu. Trang bị hệ thống định vị kỹ thuật số và gây tê giảm đau. Khám buổi tối·thứ Bảy. Điện thoại: 031-611-3222",
  "alternates": {
    "canonical": "https://gdfirstdent.co.kr/vi"
  },
  "openGraph": {
    "siteName": "Nha khoa Godeok First",
    "title": "Nha khoa Godeok First | Pyeongtaek, Hàn Quốc",
    "description": "Phòng khám nha khoa đầu tiên tại Godeok Edu Town, Pyeongtaek. Bác sĩ chuyên khoa nha khoa tổng hợp điều trị trồng răng implant, răng giả, sâu răng, nhổ răng khôn, điều trị nướu. Khám buổi tối·thứ Bảy. ĐT: 031-611-3222",
    "url": "https://gdfirstdent.co.kr/vi",
    "locale": "vi_VN",
    "type": "website"
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
