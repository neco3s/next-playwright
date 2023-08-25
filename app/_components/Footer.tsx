import Link from "next/link";

export default function Footer() {
  return (
    <ul className="text-sm w-full fixed z-20 bottom-0 left-0 font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg shadow flex dark:divide-gray-700 dark:text-gray-400">
      <li className="w-full">
        <Link
          href="/"
          aria-current="page"
          className="inline-block w-full p-4 text-gray-900 bg-gray-100 rounded-l-lg focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white"
        >
          Home
        </Link>
      </li>
      <li className="w-full">
        <Link
          href="/link"
          aria-current="page"
          className="inline-block w-full p-4 text-gray-900 bg-gray-100 rounded-l-lg focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white"
        >
          Link
        </Link>
      </li>
      <li className="w-full">
        <Link
          href="/profile"
          aria-current="page"
          className="inline-block w-full p-4 text-gray-900 bg-gray-100 rounded-l-lg focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white"
        >
          Profile
        </Link>
      </li>
    </ul>
  );
}
