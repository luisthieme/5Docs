"use client";

import { Heading } from "@/lib/Heading";
import { PageSection } from "@/lib/PageSection";
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
    <div className="pl-4 py-4 hidden sm:block h-fit border-b">
      <h1 className="text-gray-500 font-semibold">On this page:</h1>
      {currentSection.map((section: PageSection) => {
        return (
          <div key={section.id}>
            <Link
              href={`#${section.id}`}
              className="p-1 hover:text-5minds-orange text-gray-400 text-sm flex transition-all">
              {section.title}
            </Link>
          </div>
        );
      })}
    </div>
  );
}
