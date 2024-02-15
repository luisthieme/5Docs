"use client";

import React, { useState } from "react";
import { SectionType } from "@/lib/Section";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Section({ section }: { section: SectionType }) {
  const [showSubSections, setShowSubSections] = useState(false);
  const currentPath = usePathname();

  function toggleSections() {
    setShowSubSections(!showSubSections);
  }

  return (
    <div className="w-fit pl-0 ml-3 pb-0 border-l border-gray-300 sm:border-gray-200">
      <div className="flex">
        <Link
          href={section.link}
          onClick={() => setShowSubSections(true)}
          className={`sm:text-lg mr-1 pl-2 py-2 sm:py-1 transition-all duration-[400ms] ${
            currentPath === section.link
              ? "text-5minds-orange hover:text-5minds-orange-light pl-3 "
              : ""
          }`}>
          {section.name}
        </Link>
        {section.sub_sections.length != 0 ? (
          showSubSections ? (
            <ChevronDownIcon
              className="h-5 w-5 my-auto rounded-3xl border border-gray-700 hover:bg-gray-100"
              onClick={() => toggleSections()}
            />
          ) : (
            <ChevronRightIcon
              className="h-5 w-5 my-auto rounded-3xl border hover:bg-gray-200"
              onClick={() => toggleSections()}
            />
          )
        ) : (
          <></>
        )}
      </div>
      {showSubSections &&
        section.sub_sections.map((sub_section: SectionType) => {
          return <Section key={sub_section.name} section={sub_section} />;
        })}
    </div>
  );
}
