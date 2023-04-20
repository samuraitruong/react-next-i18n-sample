"use client";
import { useRouter } from "next/router";
import { createContext, useContext, useEffect, useState } from "react";
export interface LanguageContextType {
  language: string;
  setLanguage: (language: string) => void;
}
const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {
    // do nothing
  },
});

export const LanguageProvider = ({ children }: any) => {
  const router = useRouter();
  // find default language by url
  const [currentLanguage, setCurrentLangugage] = useState(
    router.locale || "en"
  );
  useEffect(() => {
    setCurrentLangugage(router.locale || "en");
  }, [router.locale, setCurrentLangugage]);

  return (
    <LanguageContext.Provider
      value={{ language: currentLanguage, setLanguage: setCurrentLangugage }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

export const LanguageConsumer = LanguageContext.Consumer;
export default LanguageContext;
