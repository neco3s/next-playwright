import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile",
};

export default function Page() {
  return (
    <>
      <p>Profile ページです</p>
      <div>こんにちは</div>
    </>
  );
}
