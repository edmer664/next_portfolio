import React, { useContext, useEffect, useState } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import BarLoader from "react-spinners/BarLoader";
import Image from "next/image";
import ThemeContext from "../../context/ThemeContext";
import ScrollUp from "../ScrollUp";
import Script from "next/script";

export const BlankLayout = ({ children }: { children: React.ReactNode }) => {
  const theme = useContext(ThemeContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 700);
  }, []);

  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-JT4HB2V0WS"
        strategy="afterInteractive"
      ></Script>
      <Script id="google-analytics" strategy="afterInteractive">
            {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-JT4HB2V0WS');
            `}
      </Script>
      {isLoading ? (
        <div className="flex flex-col items-center justify-center w-screen h-screen bg-slate-100">
          <div className="py-3">
            <Image
              width={57}
              height={57}
              objectFit="cover"
              src={"/assets/images/logo.svg"}
              alt="edmer logo"
            />
          </div>
          <BarLoader color="#363636" height={4} width={100} />
        </div>
      ) : (
        <div className={`${theme.isDark ? "dark" : ""}`}>
          <div className="dark:bg-neutral-900 dark:text-neutral-200">
            <Navbar />
            {children}
            <ScrollUp />
            <Footer />
          </div>
        </div>
      )}
    </>
  );
};
