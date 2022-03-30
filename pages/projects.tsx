import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { BlankLayout } from "../components/Layouts/BlankLayout";
import ProjectCards from "../components/ProjectCards";

export const Projects: NextPage = () => {
  return (
    <>
      <Head>
        <title>Edmer - Project</title>
      </Head>
      <BlankLayout>
        <section className="px-7 lg:px-40">
          <h1 className="py-10 font-extrabold text-7xl">Projects</h1>
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
            <ProjectCards
              imageURL="/assets/images/projects/rpcstud.jpg"
              title="StudyingRPC"
              description="A custom Discord Rich Presence to display when you're studying so you're stupid friends won't disturb you when you're studying. 
            "
              url="https://github.com/edmer664/StudyingRPC"
            />
            <ProjectCards
              imageURL="/assets/images/projects/wpi2.png"
              title="CLI random_picker"
              description="Can't pick about something? Let this random picker do the decision for you. Simply open your command-line/terminal and call this little script to make that hard decision for you. 
            "
              url="https://github.com/edmer664/random_picker"
            />
            <ProjectCards
              imageURL="/assets/images/projects/rlnscrape.png"
              title=" rln_scraper"
              description="A python application to scrape a novel from readlightnovel.org and compiles it into a file for convinient reading 
            "
              url="https://github.com/edmer664/rln_scraper"
            />
          </div>
        </section>
      </BlankLayout>
    </>
  );
};
export default Projects;
