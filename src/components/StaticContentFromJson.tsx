import { useTranslation } from "next-i18next";

export const StaticContentFromJson = () => {
  const { t } = useTranslation("common");
  console.log(t);
  return (
    <div>
      <p>This content using next-i18next, you can change them in locates/* </p>
      <blockquote>{t("sample")}</blockquote>
    </div>
  );
};
