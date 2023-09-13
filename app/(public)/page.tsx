import type { Metadata } from "next";
import HomeContainer from "@/app/_components/HomeContainer";

export const metadata: Metadata = {
  title: "Home",
};

export default function Page() {
  return <HomeContainer />;
}
