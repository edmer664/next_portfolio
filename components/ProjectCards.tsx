import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  imageURL: string;
  title: string;
  description: string;
  url?: string;
}

export const ProjectCards = (props: ProjectCardProps) => {
  return (
    <Link href={`${props.url ? props.url : ""}`}>
      <a data-aos="fade-up">
        <article className="hover:bg-gradient-to-l hover:from-neutral-100 flex hover:scale-90 hover:px-3 hover:shadow-xl transition-all duration-1000  ease-in-out dark:hover:from-black rounded-md hover:rotate-1 my-1 md:flex-row flex-col md:justify-evenly min-h-[300px] text-left">
          <div className="w-full md:w-1/2 ">
            <Image
              width={400}
              height={300}
              objectFit="cover"
              src={props.imageURL}
              alt={`${props.title} Image`}
            />
          </div>
          <div className="flex flex-col w-full py-3 px-7 md:w-1/2">
            <h3 className="pb-5 text-lg font-bold">{props.title}</h3>
            <p className="text-justify">{props.description}</p>
          </div>
        </article>
      </a>
    </Link>
  );
};
export default ProjectCards;
