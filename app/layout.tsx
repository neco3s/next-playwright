import "./globals.css";
import type { Metadata } from "next";
import FooterContainer from "@/app/_components/Footer/FooterContainer";
import StatesProvider from "@/app/_states/statesProvider";
import ThemesProvider from "@/app/_themes/themesProvider";
import HeaderContainer from "@/app/_components/Header/HeaderContainer";

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
    <StatesProvider>
      <ThemesProvider>
        <HeaderContainer />
        <div className="mt-[66px]">{children}</div>
        <FooterContainer />
      </ThemesProvider>
    </StatesProvider>
  );
}
