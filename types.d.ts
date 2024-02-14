import { type SearchOptions } from "flexsearch";

declare module "@/search/search.mjs" {
  export type Result = {
    url: string;
    title: string;
    pageTitle?: string;
    content: string;
  };

  export function search(query: string, options?: SearchOptions): Array<Result>;
}
