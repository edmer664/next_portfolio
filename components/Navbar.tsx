import React, { useState, useContext, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import ThemeContext from "../context/ThemeContext";
import { AiOutlineMenu } from "react-icons/ai";
import { BsMoonFill, BsSunFill } from "react-icons/bs";

const Navlink = ({ name, url }: { name: string; url: string }) => {
  return (
    <li className="w-full px-1 py-3 transition-all border-b-2 border-neutral-600 hover:bg-gray-400 d-block bg-slate-50 dark:bg-neutral-800 dark:hover:bg-gray-700 ">
      <Link href={url}>
        <a>{name}</a>
      </Link>
    </li>
  );
};

const NavlinkDesktop = ({ name, url }: { name: string; url: string }) => {
  return (
    <li className="py-12 transition-all px-7">
      <Link href={url}>
        <a>{name}</a>
      </Link>
    </li>
  );
};

export default function Navbar() {

  const context = useContext(ThemeContext);

  const [isOpen, setIsOpen] = useState(false);
  // toggle menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="flex items-center justify-between py-5 lg:justify-between px-7 lg:px-40">
        <div>
          {/* logo part */}
          <Image
            width={57}
            height={57}
            objectFit="cover"
            src={"/assets/images/logo.svg"}
            alt="Edmer"
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
        <div className='hidden lg:block '>
          <ul className="flex justify-evenly">
            <NavlinkDesktop name="Home" url="/" />
            <NavlinkDesktop name="About" url="/about" />
            <NavlinkDesktop name="Projects" url="/projects" />
            <NavlinkDesktop name="Contact" url="/contact" />
          </ul>
        </div>

        {/* dark mode toggle */}
        <div className="hidden lg:block">
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
      <div className={`${isOpen ? "block" : "hidden"} px-7`}>
        <ul className="flex flex-col justify-between w-full ">
          <Navlink name="Home" url="/" />
          <Navlink name="About" url="/about" />
          <Navlink name="Projects" url="/projects" />
          <Navlink name="Contact" url="/contact" />
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
