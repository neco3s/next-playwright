"use client";

import { ReactNode } from "react";
import { Noto_Sans_JP } from "next/font/google";
import { useRecoilValue } from "recoil";
import { baseFontSizeState, baseLineHeightState } from "@/app/_states/themes";

const noto_sans_jp = Noto_Sans_JP({ subsets: ["latin"] });

function ThemesProvider({ children }: { children: ReactNode }) {
  const baseFontSize: number = useRecoilValue(baseFontSizeState);
  const baseLineHeight: number = useRecoilValue(baseLineHeightState);

  return (
    <html
      lang="ja"
      style={{
        fontSize: `${baseFontSize}px`,
        lineHeight: `${baseLineHeight}px`,
      }}
    >
      <body className={noto_sans_jp.className}>{children}</body>
    </html>
  );
}

export default ThemesProvider;
