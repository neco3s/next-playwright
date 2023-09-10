"use client";

import { ReactNode } from "react";
import { RecoilRoot } from "recoil";

function StatesProvider({ children }: { children: ReactNode }) {
  return <RecoilRoot>{children}</RecoilRoot>;
}

export default StatesProvider;
