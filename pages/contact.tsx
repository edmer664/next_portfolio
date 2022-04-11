import Head from "next/head";
import React, { useEffect } from "react";
import { BsCalendar, BsTelephone, BsEnvelope } from "react-icons/bs";
import { BlankLayout } from "../components/Layouts/BlankLayout";
import { PopupButton } from "react-calendly";
import Script from "next/script";
import Link from "next/link";

export const Contact = () => {
  useEffect(() => {
    console.log("working calendly");

    // () => {
    //   const Calendly = window.Calendly;
    //   Calendly.initPopupWidget({
    //     url: "https://calendly.com/edmer-is-dev/15min",
    //   });
    //   return false;
    // }
  }, []);

  return (
    <>
      <Head>
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
        <title>Edmer - Contact</title>
      </Head>
      <BlankLayout>
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="afterInteractive"
        />
        <Script id="calendly" strategy="afterInteractive">
          {`
          const button = document.getElementById('calendly-inline-widget');
          button.addEventListener('click', () => { 
          Calendly.initPopupWidget({url: 'https://calendly.com/edmer-is-dev/15min'});return false;
          });
          `}
        </Script>
        <div className="min-h-[150px] bg-black dark:bg-neutral-300"></div>
        <section className="pt-10 pb-32 px-7 lg:px-40">
          <h1 className="pb-5 font-extrabold text-7xl">Contact</h1>
          <div className="flex flex-col md:flex-row">
            <div className="py-20 md:w-1/2">
              <div className="flex flex-col justify-start pb-12 md:flex-row">
                <div className="py-4 pr-6 md:py-0">
                  <h2 className="flex text-3xl font-bold ">
                    <BsTelephone size={27} />
                    <span className="pl-2">Phone</span>
                  </h2>
                  <a href="tel:09957524651" className="text-lg">
                    +63-995-752-4651
                  </a>
                </div>
                <div>
                  <h2 className="flex text-3xl font-bold ">
                    <BsEnvelope size={27} />
                    <span className="pl-2">Email</span>
                  </h2>
                  <a href="mailto:edmerpizarra@gmail.com" className="text-lg">
                    edmerpizarra@gmail.com
                  </a>
                </div>
              </div>

              {/* <!-- Calendly badge widget begin --> */}
              {/* <div className="px-4 py-4 font-bold cursor-pointer md:w-1/2 hover:bg-neutral-700 hover:ring-2 ring-neutral-400 bg-neutral-800 text-neutral-100">
                <Link href="https://calendly.com/edmer-is-dev/15min">
                  <a>
                    
                  </a>
                </Link>
              </div> */}
              <button
                id="calendly-inline-widget"
                className="px-4 py-4 font-bold cursor-pointer md:w-1/2 hover:bg-neutral-700 hover:ring-2 ring-neutral-400 bg-neutral-800 text-neutral-100"
              >
                <div className="flex justify-center">
                  <BsCalendar size={27} />
                  <span className="pl-2 text-center">Schedule a meeting</span>
                </div>
              </button>
              {/* <div id="calendly"></div>
              {typeof window !== "undefined" && (
                <PopupButton
                  url="https://calendly.com/edmer-is-dev"
                  text="Schedule a meeting"
                  rootElement={document.getElementById("root")}
                />
              )} */}
              {/* <!-- Calendly badge widget end --> */}
            </div>
            <div className="md:w-1/2">
              <div className="p-10 shadow-2xl bg-neutral-100 rounded-lg md:-mt-60 min-h-[500px] text-neutral-900">
                <h2 className="text-2xl font-bold">Send me a message</h2>
                <form action="/api/mail" method="post">
                  <div className="mb-3">
                    <label
                      className="block mb-2 text-sm font-bold text-neutral-700"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <input
                      className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      required
                      />
                  </div>
                  <div className="mb-3">
                    <label
                      className="block mb-2 text-sm font-bold text-neutral-700"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your email"
                      required
                      />
                  </div>
                  {/* subject */}
                  <div className="mb-3">
                    <label
                      className="block mb-2 text-sm font-bold text-neutral-700"
                      htmlFor="subject"
                    >
                      Subject
                    </label>
                    <input
                      className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="Your subject"
                      required
                      />
                  </div>
                  <div className="mb-3">
                    <label
                      className="block mb-2 text-sm font-bold text-neutral-700"
                      htmlFor="message"
                    >
                      Message
                    </label>
                    <textarea
                      className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="message"
                      name="message"
                      rows={3}
                      placeholder="Your message"
                      required
                      />
                  </div>
                  <div className="flex items-center justify-between">
                    <button
                      className="px-4 py-2 font-bold text-white rounded bg-neutral-700 hover:bg-neutral-800 focus:outline-none focus:shadow-outline"
                      type="submit"
                    >
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </BlankLayout>
    </>
  );
};
export default Contact;
