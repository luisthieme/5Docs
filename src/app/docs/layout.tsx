import Footer from "@/components/Footer";
import PageContent from "@/components/PageContent";
import Sidebar from "@/components/Sidebar";
import glob from "fast-glob";
import { Heading } from "@/lib/Heading";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  let pages = await glob("**/*.mdx", { cwd: "src/app" });
  let allSectionsEntries = (await Promise.all(
    pages.map(async (filename) => [
      "/" + filename.replace(/(^|\/)page\.mdx$/, ""),
      (await import(`../${filename}`)).sections,
    ])
  )) as Array<[string, Array<Heading>]>;
  let allSections = Object.fromEntries(allSectionsEntries);

  return (
    <div className="sm:grid sm:grid-cols-6">
      <div className="hidden sm:block">
        <Sidebar />
      </div>
      <div className="border-r border-b p-3 col-span-4 overflow-y-auto h-screen-navbar shadow-lg overflow-hidden dark:border-gray-700 dark:border-b-0">
        {children}
        <Footer />
      </div>
      <PageContent allSections={allSections} />
    </div>
  );
}
