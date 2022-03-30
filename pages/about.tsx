import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { BlankLayout } from "../components/Layouts/BlankLayout";
import { IconType } from "react-icons";
import {
  SiLaravel,
  SiKotlin,
  SiAndroidstudio,
  SiDjango,
  SiReact,
  SiNextdotjs,
  SiGit,
  SiGithub,
  SiJavascript,
  SiJava,
  SiPython,
  SiHtml5,
  SiCss3,
  SiPhp,
  SiMysql,
  SiPostgresql,
  SiTailwindcss,
  SiBootstrap,
  SiCplusplus,
  SiFlask,
  SiSqlite,
  SiMaterialui,
  SiFlutter,
  SiTypescript,
  SiDart
} from "react-icons/si";
const TechStack = ({ Icon, name }: { Icon: IconType; name: string }) => {
  return (
    <>
      <div className="flex justify-between px-10 py-3 mx-2 my-5 border-2 rounded-sm hover:animate-bounce border-neutral-900 dark:border-white">
        <Icon className="" size={27} />
        <p className="pl-2 font-bold">{name}</p>
      </div>
    </>
  );
};

const Certificate = ({
  issuer,
  name,
  url,
}: {
  issuer: string;
  name: string;
  url: string;
}) => {
  return (
    <>
      <Link href={url}>
        <a>
          <div className="px-5 py-3 m-3 transition-all duration-300 rounded-sm bg-neutral-100 dark:bg-black hover:ring-1 hover:ring-cyan-200">
            <h4 className="font-semibold">{name}</h4>
            <span className="opacity-70">{issuer}</span>
          </div>
        </a>
      </Link>
    </>
  );
};

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

          <div className="pb-32">
            <h2 className="pb-10 text-2xl font-extrabold">Tech Stack</h2>
            <h3 className="pt-10 pb-5 text-xl">Version Control</h3>
            <div className="flex flex-wrap justify-evenly md:justify-start">
              <TechStack Icon={SiGit} name="Git" />
              <TechStack Icon={SiGithub} name="GitHub" />
            </div>
            <h3 className="pt-10 pb-5 text-xl">Front-End</h3>
            <div className="flex flex-wrap justify-evenly md:justify-start">
              <TechStack Icon={SiNextdotjs} name="Next.js" />
              <TechStack Icon={SiReact} name="React" />
              <TechStack Icon={SiCss3} name="CSS3" />
              <TechStack Icon={SiHtml5} name="HTML5" />
              <TechStack Icon={SiJavascript} name="JavaScript" />
              <TechStack Icon={SiTailwindcss} name="Tailwind CSS" />
              <TechStack Icon={SiBootstrap} name="Bootstrap5" />
              <TechStack Icon={SiMaterialui} name="MaterialUI" />
            </div>
            <h3 className="pt-10 pb-5 text-xl">Back-end</h3>
            <div className="flex flex-wrap justify-evenly md:justify-start">
              <TechStack Icon={SiDjango} name="Django" />
              <TechStack Icon={SiLaravel} name="Laravel" />
              <TechStack Icon={SiFlask} name="Flask" />
            </div>
            <h3 className="pt-10 pb-5 text-xl">Database</h3>
            <div className="flex flex-wrap justify-evenly md:justify-start">
              <TechStack Icon={SiMysql} name="MySQL" />
              <TechStack Icon={SiPostgresql} name="PostgreSQL" />
              <TechStack Icon={SiSqlite} name="SQLite" />
            </div>
            <h3 className="pt-10 pb-5 text-xl">Mobile Development</h3>
            <div className="flex flex-wrap justify-evenly md:justify-start">
              <TechStack Icon={SiAndroidstudio} name="Android Studio" />
              <TechStack Icon={SiFlutter} name="Flutter" />
            </div>
            <h3 className="pt-10 pb-5 text-xl">Programming Languages</h3>
            <div className="flex flex-wrap justify-evenly md:justify-start">
              <TechStack Icon={SiTypescript} name="TypeScript" />
              <TechStack Icon={SiPython} name="Python" />
              <TechStack Icon={SiPhp} name="PHP" />
              <TechStack Icon={SiKotlin} name="Kotlin" />
              <TechStack Icon={SiJava} name="Java" />
              <TechStack Icon={SiCplusplus} name="C/C++" />
              <TechStack Icon={SiDart} name="Dart"/>
            </div>
          </div>
          {/* certificates */}
          <div className="pb-32">
            <h2 className="pb-10 text-2xl font-extrabold"> Certifications</h2>
            <div className="flex flex-wrap justify-evenly md:justify-start">
              <Certificate
                issuer="freeCodeCamp.org"
                name="Responsive Web Design"
                url="https://www.freecodecamp.org/certification/edmerkun/responsive-web-design"
              />
              <Certificate
                issuer="freeCodeCamp.org"
                name="Scientific Computing with Python"
                url="https://www.freecodecamp.org/certification/edmerkun/scientific-computing-with-python-v7"
              />
              <Certificate
                issuer="freeCodeCamp.org"
                name="JavaScript Algorithms and Data Structures"
                url="https://www.freecodecamp.org/certification/edmerkun/javascript-algorithms-and-data-structures"
              />
              <Certificate
                issuer="TESTDOME"
                name="Python Algorithms"
                url="https://app.testdome.com/cert/e5388487f6124cf693b6e401f26aeaa1"
              />
              <Certificate
                issuer="TESTDOME"
                name="Python"
                url="https://app.testdome.com/cert/e2a0b532b27547369ef01cec73149cf0"
              />
              <Certificate
                issuer="TESTDOME"
                name="HTML/CSS, JavaScript, PHP, and SQL"
                url="https://app.testdome.com/cert/13c2427d311f4fbf96f8c09c2674a56c"
              />
              <Certificate
                issuer="TESTDOME"
                name="HTML/CSS and JavaScript"
                url="https://app.testdome.com/cert/d60164d0b4fd40339c20a47445fb1f57"
              />
            </div>
          </div>
        </section>
      </BlankLayout>
    </>
  );
};

export default About;
