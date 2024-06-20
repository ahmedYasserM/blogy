"use client";

import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => { },
});

function getThemeFromLocalStorage(): string {
  //if (typeof window !== "undefined") {
  const theme = localStorage.getItem("theme");
  return theme ? theme : "light";
  //}
}

export function ThemeContextProvider({
  children,
}: {
  children: any;
}): React.JSX.Element {
  const [theme, setTheme] = useState(() => getThemeFromLocalStorage());

  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }

  useEffect(() => {
    localStorage.setItem("theme", theme!);
    console.log(`update`);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
