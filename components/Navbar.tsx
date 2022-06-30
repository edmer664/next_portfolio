import React, { useState, useContext, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import ThemeContext from "../context/ThemeContext";
import { AiOutlineMenu } from "react-icons/ai";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { useRouter } from "next/router";
import "animate.css";

const Navlink = ({ name, url }: { name: string; url: string }) => {
  return (
    <Link href={url}>
      <a>
        <li className="w-full px-1 py-3 transition-all border-b-2 border-neutral-600 hover:bg-gray-400 d-block bg-slate-50 dark:bg-neutral-800 dark:hover:bg-gray-700 ">
          {name}
        </li>
      </a>
    </Link>
  );
};

const NavlinkDesktop = ({
  name,
  url,
  isActive,
}: {
  name: string;
  url: string;
  isActive: boolean;
}) => {
  return (
    <li
      className={`py-12 transition-all px-7 ${
        isActive ? "font-bold" : "font-medium"
      }`}
    >
      <Link href={url}>
        <a>{name}</a>
      </Link>
    </li>
  );
};

export default function Navbar() {
  const context = useContext(ThemeContext);

  const [isOpen, setIsOpen] = useState(false);
  // const [isFirst,setIsFirst] = useState(true);
  // toggle menu
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const [currentLink, setCurrentLink] = useState("");
  const router = useRouter();
  useEffect(() => {
    setCurrentLink(router.pathname);
    console.log(router.pathname);
  }, [router.pathname]);

  return (
    <>
      <nav
        className="flex items-center justify-between py-5 lg:justify-between px-7 lg:px-40"
        data-aos="fade-down"
      >
        <div>
          {/* logo part */}
          <Image
            width={57}
            height={57}
            objectFit="cover"
            src={"/assets/images/logo.svg"}
            alt="Edmer Logo"
          />
        </div>
        {/* mobile toggle icon */}
        <div className="lg:hidden">
          <AiOutlineMenu
            size={27}
            color={context.isDark ? "#a1a1a1" : "#101010"}
            onClick={() => toggleMenu()}
          />
        </div>
        {/* desktop nav */}
        <div className="hidden lg:block ">
          <ul className="flex justify-evenly">
            <NavlinkDesktop
              name="Home"
              url="/"
              isActive={currentLink === "/"}
            />
            <NavlinkDesktop
              name="About"
              url="/about"
              isActive={currentLink === "/about"}
            />
            <NavlinkDesktop
              name="Projects"
              url="/projects"
              isActive={currentLink === "/projects"}
            />
            <NavlinkDesktop
              name="Contact"
              url="/contact"
              isActive={currentLink === "/contact"}
            />
            <NavlinkDesktop
              name="Blog"
              url="https://blog.edmer.xyz"
              isActive={currentLink === "/blog"}
            />
          </ul>
        </div>

        {/* dark mode toggle */}
        <div
          className={`hidden lg:block animate__animated ${
            isLoading ? "" : "animate__bounce"
          } `}
        >
          <button onClick={() => context.toggleIsDark()}>
            {context.isDark ? (
              <BsSunFill color="#FFAC33" size={"27"} />
            ) : (
              <BsMoonFill color="#FFAC33" size={"27"} />
            )}
          </button>
        </div>
      </nav>
      {/* menu pane */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } px-7 transition-all duration-700 animate__animated  ${
          isOpen ? "animate__zoomInDown" : "animate__zoomOutUp"
        }`}
      >
        <ul className="flex flex-col justify-between w-full ">
          <Navlink name="Home" url="/" />
          <Navlink name="About" url="/about" />
          <Navlink name="Projects" url="/projects" />
          <Navlink name="Contact" url="/contact" />
          <Navlink name="Blog" url="https://blog.edmer.xyz" />
        </ul>
        {/* dark mode btn */}
        <div className="flex justify-center mt-2">
          <button
            className="w-full px-5 py-3 transition-all hover:bg-gray-400 d-block bg-slate-50 dark:bg-neutral-800 dark:hover:bg-gray-700"
            onClick={() => context.toggleIsDark()}
          >
            {context.isDark ? (
              <BsSunFill color="#FFAC33" size={"27"} />
            ) : (
              <BsMoonFill color="#FFAC33" size={"27"} />
            )}
          </button>
        </div>
      </div>
    </>
  );
}
