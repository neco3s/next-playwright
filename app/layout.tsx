import "./globals.css";
import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import Footer from "./_components/Footer";

const noto_sans_jp = Noto_Sans_JP({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next.js + TypeScript + Tailwind CSS + Playwright",
  description: "sandbox for Next.js + TypeScript + Tailwind CSS + Playwright",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={noto_sans_jp.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
