import type { NextPage } from "next";
import { BlankLayout } from "../components/Layouts/BlankLayout";
const About: NextPage = () => {
  return (
    <BlankLayout>
      {/* LAND */}
      <section>
        <h1>About</h1>
        <article>
          <h2>Background</h2>
          <p>
            Hello, I’m Edmerson Pizarra, a 17-year-old Software Developer, based
            in the Philippines. Currently I’m a Grade 12 Senior High School,
            studying at West Philippines Institute in Limay, Bataan. Since when
            I was young, I’ve always been interested in technology. I started my
            programming journey when I was in my late 15, early of 2020, start of the
            pandemic.
          </p>
        </article>

        <div>
          <h2>Timeline</h2>
          <div>
            {/* TODO */}
          </div>
        </div>

        <div>
          <h2>
            Tech Stack
          </h2>
          <div>
            {/* TODO */}
          </div>
        </div>
      </section>
    </BlankLayout>
  );
};

export default About;
