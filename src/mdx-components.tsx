import { ChevronRightIcon, HashtagIcon } from "@heroicons/react/20/solid";
import type { MDXComponents } from "mdx/types";
// import { Montserrat } from "next/font/google";
// const montserrat = Montserrat({ subsets: ["latin"] });

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Headings
    h1: ({ children }) => (
      <h1 className="text-3xl w-fit mx-auto mb-4 pb-2 font-bold">{children}</h1>
    ),
    h2: ({ id, children }) => (
      <h2
        id={id}
        className="text-2xl flex mt-6 mb-4 group border-b border-gray-200 font-bold">
        {children}{" "}
        <HashtagIcon className="h-6 w-6 text-gray-200 my-auto ml-1 hidden group-hover:block hover:text-gray-400 transition-all" />
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl flex items-center font-medium hover:pl-1 mt-2 mb-3 hover:border-l-2 border-transparent hover:border-gray-300 transition-all duration-200">
        {children}{" "}
        <HashtagIcon className="h-5 w-5 text-gray-200 my-auto ml-1 mr-2 hover:text-gray-400 transition-all" />
        <hr className="text-gray-300 flex-grow" />
      </h3>
    ),

    p: ({ children }) => <p className="text-gray-700 py-1">{children}</p>,

    strong: ({ children }) => (
      <strong className="text-black">{children}</strong>
    ),

    code: ({ children }) => (
      <code className="bg-gray-200 border py-[2px] px-[3px] mx-[1px] border-gray-300 rounded-lg shadow">
        {children}
      </code>
    ),

    li: ({ children }) => (
      <li className="flex">
        {" "}
        <ChevronRightIcon className="w-6 h-6 text-5minds-orange" /> {children}
      </li>
    ),

    // Table
    table: ({ children }) => (
      <table className="min-w-full max-divide-y mb-4 divide-gray-300 overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-lg">
        {children}
      </table>
    ),
    thead: ({ children }) => <thead className="bg-gray-50">{children}</thead>,
    th: ({ children }) => (
      <th className="py-3.5 pl-2 pr-2 sm:pr-3 text-left text-xs sm:text-sm font-semibold text-gray-900 sm:pl-6">
        {children}
      </th>
    ),
    tbody: ({ children }) => (
      <tbody className="divide-y divide-gray-200 bg-white">{children}</tbody>
    ),
    td: ({ children }) => (
      <td className="py-4 pl-2 pr-2 sm:pr-3 text-xs sm:text-sm font-medium text-gray-900 sm:pl-6">
        {children}
      </td>
    ),
    tr: ({ children }) => <tr className="max-w-screen-lg">{children}</tr>,

    ...components,
  };
}
