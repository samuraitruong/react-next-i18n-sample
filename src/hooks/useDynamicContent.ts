import { useLanguage } from "@/contexts/LanguageContext";
import { useQuery } from "react-query";

export function useDynamicContent() {
  const { language } = useLanguage();
  return useQuery([language], async () => {
    const res = await fetch("/api/content", {
      headers: {
        "x-locale": language,
      },
    });
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    return res.json();
  });
}
