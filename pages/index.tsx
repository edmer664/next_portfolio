import type { NextPage } from "next";
import { BlankLayout } from "../components/Layouts/BlankLayout";
import ThemeContext from "../context/ThemeContext";
import React, { useContext, useEffect } from "react";
import Image from "next/image";
import ProjectCards from "../components/ProjectCards";
import Link from "next/link";
import Head  from "next/head";

const Home: NextPage = () => {
  

  return (
    <>
    <Head>
      <title>
        Edmer - Home
      </title>
      
    </Head>
    <BlankLayout>
      {/* HERO SECTION */}
      <section className="flex flex-col-reverse justify-between w-full pb-20 font-bold px-7 md:flex-row lg:px-40">
        <article className="flex flex-col lg:w-2/3" data-aos="fade-right">
          <div className="mb-3">
            <span className="font-normal">Hi, my name is Edmer.</span>
          </div>
          <div className="my-3">
            <h1 className="text-4xl lg:text-6xl ">
              I&apos;m a freelance Software Developer with specialty in
              Full-Stack Web Development
            </h1>
          </div>
          <div className="flex justify-start mt-16 mb-3">
            <Link href="/projects">
              <a className="px-5 py-3 mr-3 transition-all border-2 sm:px-10 sm:py-4 md:px-12 md:py-4 hover:bg-neutral-700 hover:text-neutral-200">
                My Works
              </a>
            </Link>
            <Link href="/contact">
              <a className="px-5 py-3 transition-all border-2 sm:px-10 sm:py-4 md:px-12 md:py-4 hover:bg-neutral-700 bg-neutral-800 text-neutral-200">
                Contact Me
              </a>
            </Link>
          </div>
        </article>
        <div
          className="flex justify-center md:justify-end lg:w-1/3"
          data-aos="fade-left"
        >
          <Image
            width={400}
            height={550}
            objectFit="contain"
            src={"/assets/images/hero-image.png"}
            alt="Hero Img"
          />
        </div>
      </section>
      {/* END HERO SECTION */}

      {/* WHAT I OFFER SECTION */}
      <section className="py-20 px-7 lg:px-40">
        <h2
          className="pb-24 text-4xl font-bold md:pb-32 md:text-5xl"
          data-aos="fade-right"
        >
          What I offer
        </h2>
        <div className="flex flex-col md:flex-row ">
          <article
            className="flex flex-col justify-start px-16 py-10 mx-2 text-center transition-all rounded-lg duration-600 dark:hover:bg-black md:w-1/3 hover:shadow-xl hover:bg-cyan-50"
            data-aos="fade-up"
          >
            <Image
              width={100}
              height={100}
              objectFit="contain"
              src={"/assets/images/responsive.svg"}
              alt="article image"
            />
            <h3 className="py-4 font-bold">Elegant Design</h3>
            <p>Receive your website in a clean and elegant UI.</p>
          </article>
          <article
            className="flex flex-col justify-start px-16 py-10 mx-2 text-center transition-all rounded-lg duration-600 dark:hover:bg-black md:w-1/3 hover:shadow-xl hover:bg-cyan-50"
            data-aos="fade-up"
          >
            <Image
              width={100}
              height={100}
              objectFit="contain"
              src={"/assets/images/service.svg"}
              alt="article image"
            />
            <h3 className="py-4 font-bold">Inexpensive Service</h3>
            <p>
              Get yourself an affordable custom solutions while receiving
              quality services.
            </p>
          </article>
          <article
            className="flex flex-col justify-start px-16 py-10 mx-2 text-center transition-all rounded-lg duration-600 dark:hover:bg-black md:w-1/3 hover:shadow-xl hover:bg-cyan-50"
            data-aos="fade-up"
          >
            <Image
              width={100}
              height={100}
              objectFit="contain"
              src={"/assets/images/tech.svg"}
              alt="article image"
            />
            <h3 className="py-4 font-bold">Modern Technologies</h3>
            <p>
              Using the latest technologies you can be assured with a secured
              and quality softwares.
            </p>
          </article>
        </div>
      </section>
      {/* END WHAT I OFFER SECTION */}
      {/* PROJECTS SECTION */}
      <section className="py-20 px-7 lg:px-40">
        <h2
          className="pb-24 text-4xl font-bold md:pb-32 md:text-5xl"
          data-aos="fade-up"
        >
          Recent Projects
        </h2>
        <div className="flex flex-col w-full pb-32">
          <ProjectCards
            imageURL="/assets/images/projects/confession.png"
            title="Confession Board"
            description="An Open-Source website dedicated to letting people express their secrets anonymously. Using Django and PostgreSQL as the backend and NextJs + Bootstrap for the Front-end.
            "
            url="https://confession.edmer.xyz"
          />
          <ProjectCards
            imageURL="/assets/images/projects/pockethub.png"
            title="Pocket Hub"
            description="A fully-featured social website implemented using PHP laravel and javascript. A fully functional CRUD application, feat includes but is not limited to posts, comments, and messages.
            "
            url="https://hub.pocketdevs.ph"
          />
          <ProjectCards
            imageURL="/assets/images/projects/wpi2.png"
            title="WPI Enrollment System"
            description="An unofficial website for West Philippines Institute implemented using React, JavaScript, Python, and Django. The app uses Django as the backend to perform backend processing for enrollment system and information board.
            "
            url="https://wpi.edmer.xyz"
          />
        </div>
        <div className="mx-auto text-center">
          <Link href="/projects">
            <a className="px-24 py-5 border-2 border-neutral-800 bg-neutral-800 text-neutral-200 hover:border-neutral-700 hover:bg-neutral-700">
              View All
            </a>
          </Link>
        </div>
      </section>
      {/* PROJECTS END */}
    </BlankLayout>
    </>
  );
};

export default Home;
