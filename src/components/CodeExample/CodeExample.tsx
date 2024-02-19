import ReadCodeExample from "./ReadCodeExample";

export default async function CodeExample(url: any) {
  const codeData = await ReadCodeExample(url);
  return (
    <p className="border-1 p-2 rounded-lg border-gray-500 dark:bg-gray-700 bg-gray-200 mt-2">
      {codeData}
    </p>
  );
}
