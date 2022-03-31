import Head from "next/head";
import React, { useEffect } from "react";
import { BsCalendar, BsTelephone, BsEnvelope } from "react-icons/bs";
import { BlankLayout } from "../components/Layouts/BlankLayout";

export const Contact = () => {
  useEffect(() => {
    console.log("working calendly");
  }, []);

  return (
    <>
      <Head>
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
        <script
          src="https://assets.calendly.com/assets/external/widget.js"
          type="text/javascript"
          async
        ></script>
        <title>Edmer - Contact</title>
      </Head>
      <BlankLayout>
        <div className="min-h-[150px] bg-black dark:bg-neutral-300"></div>
        <section className="pb-32 pt-10 px-7 lg:px-40">
          <h1 className="pb-5 font-extrabold text-7xl">Contact</h1>
          <div className="flex md:flex-row flex-col">
            <div className="md:w-1/2 py-20">
              <div className="pb-12 flex justify-start flex-col md:flex-row">
                <div className="pr-6 py-4 md:py-0">
                  <h2 className="text-3xl font-bold flex ">
                    <BsTelephone size={27} />
                    <span className="pl-2">Phone</span>
                  </h2>
                  <a href="tel:09957524651" className="text-lg">
                    +63-995-752-4651
                  </a>
                </div>
                <div >
                  <h2 className="text-3xl font-bold flex ">
                    <BsEnvelope size={27} />
                    <span className="pl-2">Email</span>
                  </h2>
                  <a href="mailto:edmerpizarra@gmail.com" className="text-lg">
                    edmerpizarra@gmail.com
                  </a>
                </div>
              </div>

              {/* <!-- Calendly badge widget begin --> */}
              <button
                className="px-4 font-bold cursor-pointer hover:bg-neutral-700 hover:ring-2 ring-neutral-400 py-4 bg-neutral-800 text-neutral-100"
                onClick={() => {
                  Calendly.initPopupWidget({
                    url: "https://calendly.com/edmer-is-dev/15min?background_color=fafafa&text_color=363636&primary_color=363636",
                  });
                  return false;
                }}
              >
                <div className="flex">
                  <BsCalendar size={27} />
                  <span className="px-2">Schedule a meeting</span>
                </div>
              </button>
              {/* <!-- Calendly badge widget end --> */}
            </div>
            <div className="md:w-1/2">
              <div className="p-10 shadow-2xl bg-neutral-100 rounded-lg md:-mt-60 min-h-[500px] text-neutral-900">
                <h2 className="text-2xl font-bold">Send me a message</h2>
                <form action="/api/mail" method="post">
                  <div className="mb-3">
                    <label
                      className="block text-neutral-700 text-sm font-bold mb-2"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      className="block text-neutral-700 text-sm font-bold mb-2"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your email"
                    />
                  </div>
                  {/* subject */}
                  <div className="mb-3">
                    <label
                      className="block text-neutral-700 text-sm font-bold mb-2"
                      htmlFor="subject"
                    >
                      Subject
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="Your subject"
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      className="block text-neutral-700 text-sm font-bold mb-2"
                      htmlFor="message"
                    >
                      Message
                    </label>
                    <textarea
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="message"
                      name="message"
                      rows={3}
                      placeholder="Your message"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <button
                      className="bg-neutral-700 hover:bg-neutral-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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
