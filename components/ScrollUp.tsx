import React, { useRef, useState } from "react";
import { BiChevronUp } from "react-icons/bi";

export const ScrollUp = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleScroll = () => {
    setIsClicked(true);
    console.log("worked");

    setTimeout(() => {
      setIsClicked(false);
      console.log("worked2");
    }, 3000);

    if (typeof window != undefined) {
      window.scrollTo(0, 0);
    }
  };
  return (
    <>
      <button
        className={`fixed transition-all bottom-0 right-0 p-1 rounded-xl m-7 bg-neutral-600 hover:bg-neutral-800 ${
          isClicked ? "animate-bounce" : ""
        }`}
        onClick={() => handleScroll()}
      >
        <BiChevronUp size={35} color={"#fcfcfc"} />
      </button>
    </>
  );
};

export default ScrollUp;
