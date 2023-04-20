import { useDynamicContent } from "@/hooks/useDynamicContent";

export default function Content() {
  const { data: content, isLoading } = useDynamicContent();
  return (
    <div className="w-full">
      Below content is load from backend with locale support by set x-locale in
      the header. you can change this by url or anything that best for your
      backend
      {isLoading && <p>Loading...</p>}
      {content && (
        <blockquote className="text-xl italic font-semibold text-gray-900 dark:text-white m-4">
          {" "}
          {content.sample}
        </blockquote>
      )}
    </div>
  );
}
