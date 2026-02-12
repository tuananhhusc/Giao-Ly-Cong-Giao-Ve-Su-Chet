import type { Metadata } from "next";
import { Playfair_Display, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "vietnamese"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin", "vietnamese"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Giáo Lý Công Giáo Về Sự Chết",
  description:
    "Báo cáo nghiên cứu thần học chuyên sâu về Sự Chết, Cánh Chung và Ý Nghĩa Hiện Sinh của Đời Người Trong Truyền Thống Công Giáo. Nền tảng Kinh Thánh, Thánh Truyền, Huấn Quyền.",
  openGraph: {
    title: "Giáo Lý Công Giáo Về Sự Chết",
    description:
      "Nghiên cứu chuyên sâu: Sự Chết, Cánh Chung và Ý Nghĩa Hiện Sinh của Đời Người Trong Truyền Thống Công Giáo.",
    type: "article",
    locale: "vi_VN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${playfair.variable} ${sourceSerif.variable}`}>
      <body className="font-body antialiased bg-parchment text-ink">
        {children}
      </body>
    </html>
  );
}
