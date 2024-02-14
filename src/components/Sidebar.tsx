import { SectionType } from "@/lib/Section";
import Section from "./Section";
import { pageStructure } from "@/structure/meta";

export default function Sidebar() {
  return (
    <div className="sm:border-r border-gray-200 h-full ml-2 sm:ml-6 sm:pt-4">
      {pageStructure.map((section: SectionType) => {
        return <Section key={section.name} section={section} />;
      })}
    </div>
  );
}
