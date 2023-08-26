import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

export default function Page() {
  return (
    <>
      <p>Home ページです</p>
      <div>こんにちは</div>
    </>
  );
}
