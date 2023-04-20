import Image from "next/image";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import LanguageSelector from "@/components/LanguageSelector";
import Link from "next/link";
import Head from "next/head";
import { useStaticContent } from "@/hooks/useStaticContent";
import Content from "@/components/Content";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const content = useStaticContent();
  return (
    <>
      <Head>
        <title>{content.title}</title>
        <meta name="description" content={content.description} />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          <LanguageSelector />
        </div>
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm ">
          <p> sample language set from URL</p>
          <ul className="list-disc w-full">
            <li>
              <Link href="/" locale="en" className="hover:bg-sky-700">
                English /en
              </Link>
            </li>
            <li>
              <Link href="/" locale="fr">
                French /fr
              </Link>
            </li>

            <li>
              <Link href="/" locale="vn">
                Vietnamese /vn
              </Link>
            </li>
          </ul>
        </div>

        <Content />
        <Footer />
      </main>
    </>
  );
}
