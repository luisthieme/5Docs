import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="mt-20 mb-8">
      <hr className="mb-6" />
      <div className="flex justify-between">
        <Link
          href="/"
          className="relative ml-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0">
          <ChevronLeftIcon className="h-5 w-5 text-gray-600" />
          Previous
        </Link>
        <p className="text-sm mt-2 text-gray-600">
          © Copyright 2024. All rights reserved.
        </p>
        <Link
          href="/"
          className="relative mr-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0">
          Next
          <ChevronRightIcon className="h-5 w-5 text-gray-600" />
        </Link>
      </div>
    </div>
  );
}
