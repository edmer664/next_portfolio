import React, { useEffect, useRef, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  let localTheme: string | null = "false";
  if (typeof window !== "undefined") {
    localTheme = localStorage.getItem("isDark");
  }

  const [isDark, setIsDark] = useState(localTheme === "false" ? false : true);
  const toggleIsDark = () => {
    setIsDark(!isDark);
    if (typeof window !== "undefined") {
      if (localTheme === "false") {
        localStorage.setItem("isDark","true");
      }else{
        localStorage.setItem("isDark","false");
      }
    }
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleIsDark }}>
      {children}
    </ThemeContext.Provider>
  );
};
