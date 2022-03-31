import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { BlankLayout } from "../components/Layouts/BlankLayout";
import { IconType } from "react-icons";
import {MdSchool, MdWork} from 'react-icons/md'
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
  SiDart,
} from "react-icons/si";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const TechStack = ({ Icon, name }: { Icon: IconType; name: string }) => {
  return (
    <>
      <div className="flex justify-between px-10 py-3 mx-2 my-1 border-2 rounded-sm md:my-5 md:hover:animate-bounce border-neutral-900 dark:border-white">
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
  const theme = useContext(ThemeContext)
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

          <h2 className="pb-10 text-2xl font-extrabold">Timeline</h2>
          <VerticalTimeline lineColor={theme.isDark ? "#fff" : "#363636"} >
            <VerticalTimelineElement
              className="vertical-timeline-element--work dark:text-neutral-600"
              dateClassName="dark:text-white"
              contentArrowStyle={{
                borderRight: "7px solid  #f6f6f6",
              }}
              iconStyle={{ background: "#363636", color: "#fafafa" }}
              icon={<MdSchool />}
              date="2016 - 2020"
            >
              <h3 className="font-bold vertical-timeline-element-title">
                Junior High School - Lamao National High School
              </h3>
              <h4 className="vertical-timeline-element-subtitle">Limay, Bataan</h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work dark:text-neutral-600"
              dateClassName="dark:text-white"
              date="2020 - Present"
              iconStyle={{ background: "#363636", color: "#fff" }}
              icon={<MdSchool />}
            >
              <h3 className="font-bold vertical-timeline-element-title">Senior High School - West Philippines Institute of Tourism Science and Technology </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Limay, Bataan
              </h4>
              <small>
                Science, Technology, Engineering and Mathematics
              </small>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className=" vertical-timeline-element--work dark:text-neutral-600"
              contentStyle={{background:"#c00000"}}
              date="2022 - Present"
              dateClassName="dark:text-white"
              iconStyle={{ background: "#c00000", color: "#fff" }}
              icon={<MdWork />}
            >
              <h3 className="font-bold text-white vertical-timeline-element-title">Web Developer Intern</h3>
              <h4 className="text-white  vertical-timeline-element-subtitle">
                PocketDevs
              </h4>
              <small className="text-white ">
                Develop and maintain web applications for clients
              </small>
            </VerticalTimelineElement>
          </VerticalTimeline>


          <div className="py-32">
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
              <TechStack Icon={SiDart} name="Dart" />
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
