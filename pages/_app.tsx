import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "../components/Providers/ThemeProvider";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      once: true,
      delay:500,

    });
  },[]);

  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
