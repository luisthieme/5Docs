"use client";

import { Heading } from "@/lib/Heading";
import { PageSection } from "@/lib/PageSection";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { usePathname } from "next/navigation";

type PageSections = {
  [key: string]: Heading[];
};

export default function PageContent({
  allSections,
}: {
  allSections: PageSections;
}) {
  const pathname = usePathname();
  const currentSection = allSections[pathname];
  return (
    <div className="bg-gray-50 pl-2 py-2 h-fit border-b border-gradient-to-r">
      <h1 className="text-gray-500">On this page:</h1>
      {currentSection.map((section: PageSection) => {
        return (
          <div key={section.id}>
            <Link
              href={`#${section.id}`}
              className="p-1 hover:text-5minds-orange text-gray-400 text-sm flex">
              <ChevronRightIcon className="h-5 w-5 text-5minds-orange" />
              {section.title}
            </Link>
          </div>
        );
      })}
    </div>
  );
}
