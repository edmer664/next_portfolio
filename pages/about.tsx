import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { BlankLayout } from "../components/Layouts/BlankLayout";
const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>Edmer - About</title>
      </Head>
      <BlankLayout>
        {/* LAND */}
        <section className="px-7 lg:px-40">
          <h1 className="py-10 font-extrabold text-7xl">About</h1>
          <article className="pb-32">
            <h2 className="pb-10 text-2xl font-extrabold">Background</h2>
            <p className="pb-10 text-xl font-medium leading-loose text-justify">
              Hello, I&apos;m Edmerson Pizarra, a 17-year-old Software
              Developer, based in the Philippines. Currently I&apos;m a Grade 12
              Senior High School, studying at West Philippines Institute in
              Limay, Bataan. Since when I was young, I&apos;ve always been
              interested in technology. I started my programming journey when I
              was in my late 15, early of 2020, start of the pandemic.
            </p>
            <Link href="https://docs.google.com/document/d/1rzbFhHUa_MlKNLRG_MUAo4B6fTKN-Oe8Ysfe9W5nXhI/edit?usp=sharing">
              <a className="px-5 py-3 mr-3 text-white transition-all border-2 sm:px-10 sm:py-4 md:px-12 md:py-4 bg-neutral-800 border-neutral-800 hover:bg-neutral-700 hover:text-neutral-200">
                View Resume
              </a>
            </Link>
          </article>

          <div className="pb-10">
            <h2 className="pb-20 text-2xl font-extrabold">Timeline</h2>
            <div className="w-full text-center">
              {/* row1 */}
              <div className="flex">
                {/* col1 */}
                <div className="w-2/5" data-aos="fade-up">
                  <p>
                    <b>Web Developer Intern - PocketDevs</b>
                  </p>
                  <small>Jan 2022 - Present</small>
                </div>
                {/* col2 */}
                <div className="w-1/5 h-14 ">
                  <div className="w-1/2 border-r-2 h-14"></div>
                  <div className="w-1/2 h-14"></div>
                </div>
                {/* col 3 */}
                <div className="w-2/5"></div>
              </div>
              {/* row2 */}
              <div className="flex">
                {/* col1 */}
                <div className="w-2/5"></div>
                {/* line */}
                <div className="w-1/5 h-14 ">
                  <div className="w-1/2 border-r-2 h-14"></div>
                  <div className="w-1/2 h-14"></div>
                </div>
                {/* col 3 */}
                <div className="w-2/5" data-aos="fade-up">
                  <p>
                    <b>West Philippines Institute - STEM</b>
                  </p>
                  <small>Aug 2020 - Present</small>
                </div>
              </div>
              {/* row3 */}
              <div className="flex">
                {/* col1 */}
                <div className="w-2/5" data-aos="fade-up">
                  <p>
                    <b>Lamao National HighSchool - JHS</b>
                  </p>
                  <small>June 2016 - Mar 2020</small>
                </div>
                {/* col 2 */}
                <div className="w-1/5 h-14 ">
                  <div className="w-1/2 border-r-2 h-14"></div>
                  <div className="w-1/2 h-14"></div>
                </div>
                {/* col 3 */}
                <div className="w-2/5"></div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="pb-10 text-2xl font-extrabold">Tech Stack</h2>
            <div className="">
              
            </div>
          </div>
        </section>
      </BlankLayout>
    </>
  );
};

export default About;
