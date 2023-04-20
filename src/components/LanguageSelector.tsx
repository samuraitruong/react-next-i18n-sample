import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect } from "react";

export default function LanguageSelector() {
  const { setLanguage, language } = useLanguage();
  const allowedLanguages = ["en", "vn", "fr"];
  useEffect(() => {}, [language, setLanguage]);
  // TODO: implement persistent
  return (
    <p>
      {allowedLanguages.map((item) => (
        <button
          key={item}
          className={
            item === language
              ? `bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded`
              : "bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-green-700 rounde"
          }
          onClick={() => setLanguage(item)}
        >
          {item}
        </button>
      ))}
    </p>
  );
}
