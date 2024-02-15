import { SectionType } from "@/lib/Section";
import Section from "./Section";
import { pageStructure } from "@/structure/meta";

export default function Sidebar() {
  return (
    <div className="sm:border-r border-gray-200 dark:border-gray-700 h-full sm:pl-4 sm:pt-4">
      {pageStructure.map((section: SectionType) => {
        return <Section key={section.name} section={section} />;
      })}
    </div>
  );
}
