import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";

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

const SocialLink = () => {

}

export default function Footer() {
  return (
    <footer className="py-5 border-t-2 px-7 lg:px-40 border-neutral-700">
      <div className="flex flex-col lg:justify-between lg:items-start lg:flex-row lg:py-7">
        <div>
          <Image
            width={57}
            height={57}
            objectFit="cover"
            src={"/assets/images/Logo.svg"}
            alt="Edmer"
          />
        </div>
        <div>
          <strong>Quick Links</strong>
          <ul>
            <FooterLink text={"Home"} link={"/"} />
            <FooterLink text={"About"} link={"/about"} />
            <FooterLink text={"Projects"} link={"/projects"} />
            <FooterLink text={"Contact"} link={"/contact"} />
          </ul>
        </div>
        <div>
          <strong>Contact</strong>
          <ul>
            <FooterLink text={"(+63)995-752-4651"} link={"tel:+639957524651"} />
            <FooterLink
              text={"edmerpizarra@gmail.com"}
              link={"mail:edmerpizarra@gmail.com"}
            />
            <FooterLink
              text={"Hire me at UpWork"}
              link={"https://www.upwork.com/freelancers/~013a125fe30318bf61/"}
            />
          </ul>
        </div>
        <div>
          <ul></ul>
        </div>
      </div>
      <hr />
      <div>
        <small>
          Copyright © {new Date().getFullYear()} . <b>Edmerson Pizarra</b>  . All Rights Reserved
        </small>
      </div>
    </footer>
  );
}
