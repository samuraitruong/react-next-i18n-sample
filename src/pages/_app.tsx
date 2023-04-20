import { LanguageProvider } from "@/contexts/LanguageContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <Component {...pageProps} />
      </LanguageProvider>
    </QueryClientProvider>
  );
}
