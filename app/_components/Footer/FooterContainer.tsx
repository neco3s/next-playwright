"use client";
import { usePathname } from "next/navigation";
import Footer from "./Footer";

function FooterContainer() {
  const pathname = usePathname();

  return <Footer pathname={pathname} />;
}

export default FooterContainer;
