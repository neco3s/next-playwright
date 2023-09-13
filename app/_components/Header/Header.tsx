"use client";
import Image from "next/image";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

interface Props {
  changeFontSize: () => void;
}

function Header({ changeFontSize }: Props) {
  return (
    <div className="fixed top-0 left-0 z-50 flex justify-between w-full px-4 py-2 bg-gray-600 text-gray-100">
      <Link href="/">
        <Image
          src="/neco3coffee.png"
          width={50}
          height={50}
          alt="Picture of the author"
        />
      </Link>
      <div className="flex items-center">
        <button onClick={changeFontSize} className="active:text-black mr-4">
          <span>ぁあ</span>
        </button>
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
}

export default Header;
