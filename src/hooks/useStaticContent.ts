import { useLanguage } from "@/contexts/LanguageContext";
import { useState, useEffect } from "react";
export interface IStaticText {
  footer: string;
  title: string;
  description?: string;
}

const staticContent: {
  en: IStaticText;
  vn: IStaticText;
  [x: string]: IStaticText;
} = {
  en: {
    footer: "Hello  I am footer",
    title: "Home page",
    description:
      "The sample nextjs with i18n integration and language selector",
  },
  vn: {
    footer: "Xin chào tôi là footer",
    description: "Ví dụ về nextjs với tích hợp i18n và chọn ngôn ngữ",
    title: "Trang chủ",
  },
  fr: {
    footer: "Bonjour, je suis le pied de page",
    title: "Page d'accueil",
    description:
      "L'exemple nextjs avec l'intégration i18n et le sélecteur de langue",
  },
};
export function useStaticContent() {
  const { language } = useLanguage();
  const [data, setData] = useState<IStaticText>(staticContent[language]);
  useEffect(() => {
    setData(staticContent[language]);
  }, [language, setData]);

  return data;
}
