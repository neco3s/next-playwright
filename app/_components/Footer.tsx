"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Footer() {
  const pathname = usePathname();

  return (
    <ul className="text-sm w-full fixed z-20 bottom-0 left-0 font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg shadow flex dark:divide-gray-700 dark:text-gray-400">
      <li className="w-full border-none">
        <Link
          href="/"
          aria-current="page"
          className={`${
            pathname === "/"
              ? "bg-gray-600 text-gray-100"
              : "bg-gray-100 text-gray-900"
          } inline-block w-full p-4 rounded-lg`}
        >
          Home
        </Link>
      </li>
      <li className="w-full border-none">
        <Link
          href="/link"
          aria-current="page"
          className={`${
            pathname === "/link"
              ? "bg-gray-600 text-gray-100"
              : "bg-gray-100 text-gray-900"
          } inline-block w-full p-4 rounded-lg`}
        >
          Link
        </Link>
      </li>
      <li className="w-full border-none">
        <Link
          href="/profile"
          aria-current="page"
          className={`${
            pathname === "/profile"
              ? "bg-gray-600 text-gray-100"
              : "bg-gray-100 text-gray-900"
          } inline-block w-full p-4 rounded-l-lg`}
        >
          Profile
        </Link>
      </li>
    </ul>
  );
}

export default Footer;
