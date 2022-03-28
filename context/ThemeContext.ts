import React from "react";




export const ThemeContext = React.createContext({
  isDark: false,

  toggleIsDark: () => {}, 
});

export default ThemeContext;