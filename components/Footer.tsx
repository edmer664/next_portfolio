import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiFillFacebook,
  AiFillInstagram,
  AiFillGithub,
} from "react-icons/ai";
import ThemeContext from "../context/ThemeContext";


const FooterLink = ({ text, link }: { text: string; link: string }) => {
  return (
    <>
      <li>
        <Link href={link}>
          <a>{text}</a>
        </Link>
      </li>
    </>
  );
};

const SocialLink = ({ icon, url }: { icon: React.ReactNode; url: string }) => {
  return (
    <Link href={url}>
      <a className="px-2 pb-2" target='_blank'>{icon}</a>
    </Link>
  );
};

export default function Footer() {
  const theme = useContext(ThemeContext);
  return (
    <footer className="py-5 border-t-2 px-7 lg:px-40 border-neutral-700">
      <div className="flex flex-col lg:items-start md:flex-row md:py-7">
        <div className=" md:w-1/4">
          <Image
            width={57}
            height={57}
            objectFit="cover"
            src={"/assets/images/logo.svg"}
            alt="Edmer Logo"
          />
        </div>
        <div className="flex md:w-2/4">
          <div className="w-1/2">
            <strong>Quick Links</strong>
            <ul>
              <FooterLink text={"Home"} link={"/"} />
              <FooterLink text={"About"} link={"/about"} />
              <FooterLink text={"Projects"} link={"/projects"} />
              <FooterLink text={"Contact"} link={"/contact"} />
            </ul>
          </div>
          <div className="w-1/2">
            <strong>Contact</strong>
            <ul>
              <FooterLink
                text={"(+63)995-752-4651"}
                link={"tel:+639957524651"}
              />
              <FooterLink
                text={"edmerpizarra@gmail.com"}
                link={"mailto:edmerpizarra@gmail.com"}
              />
              <FooterLink
                text={"Hire me at UpWork"}
                link={"https://www.upwork.com/freelancers/~013a125fe30318bf61/"}
              />
            </ul>
          </div>
        </div>
        <div className="pt-10 lg:pt-0 md:w-1/4 ">
          <ul className="flex">
            <SocialLink
              icon={
                <AiFillLinkedin
                  size={35}
                  color={`${!theme.isDark ? "#363636" : "#fafafa"}`}
                />
              }
              url="https://www.linkedin.com/in/edmerpizarra/"
            />
            <SocialLink
              icon={
                <AiFillFacebook
                  size={35}
                  color={`${!theme.isDark ? "#363636" : "#fafafa"}`}
                />
              }
              url="https://www.facebook.com/EdmerKun/"
            />
            <SocialLink
              icon={
                <AiFillInstagram
                  size={35}
                  color={`${!theme.isDark ? "#363636" : "#fafafa"}`}
                />
              }
              url="https://www.linkedin.com/in/edmerpizarra/"
            />
            <SocialLink
              icon={
                <AiFillTwitterSquare
                  size={35}
                  color={`${!theme.isDark ? "#363636" : "#fafafa"}`}
                />
              }
              url="https://twitter.com/EdmerKun/"
            />
            <SocialLink
              icon={
                <AiFillGithub
                  size={35}
                  color={`${!theme.isDark ? "#363636" : "#fafafa"}`}
                />
              }
              url="https://github.com/edmer664"
            />
          </ul>
        </div>
      </div>
      <hr />
      <div>
        <small>
          Copyright © {new Date().getFullYear()} . <b>Edmerson Pizarra</b> . All
          Rights Reserved
        </small>
      </div>
    </footer>
  );
}
