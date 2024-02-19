export default async function ReadCodeExample({ url }: { url: string }) {
  const fs = require("fs").promises;
  const filePromise = await fs.readFile(url, "utf-8");
  const result: string = await Promise.resolve(filePromise);
  return result;
}
