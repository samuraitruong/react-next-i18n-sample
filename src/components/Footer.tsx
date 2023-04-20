import { useStaticContent } from "@/hooks/useStaticContent";

export default function Footer() {
  const staticText = useStaticContent();
  return <div className="w-full">{staticText.footer}</div>;
}
