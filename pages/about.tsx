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
              Hello, I&apos;m Edmerson Pizarra, a 17-year-old Software Developer,
              based in the Philippines. Currently I&apos;m a Grade 12 Senior High
              School, studying at West Philippines Institute in Limay, Bataan.
              Since when I was young, I&apos;ve always been interested in technology.
              I started my programming journey when I was in my late 15, early
              of 2020, start of the pandemic.
            </p>
            <Link href="https://docs.google.com/document/d/1rzbFhHUa_MlKNLRG_MUAo4B6fTKN-Oe8Ysfe9W5nXhI/edit?usp=sharing">
              <a className="px-5 py-3 mr-3 text-white transition-all border-2 sm:px-10 sm:py-4 md:px-12 md:py-4 bg-neutral-800 border-neutral-800 hover:bg-neutral-700 hover:text-neutral-200">View Resume</a>
            </Link>
          </article>

          <div>
          <h2 className="pb-10 text-2xl font-extrabold">Timeline</h2>
            <div>{/* TODO */}</div>
          </div>

          <div>
          <h2 className="pb-10 text-2xl font-extrabold">Tech Stack</h2>
            <div>{/* TODO */}</div>
          </div>
        </section>
      </BlankLayout>
    </>
  );
};

export default About;
