import { createContext, ReactNode, useEffect, useState } from "react";

interface ThemeContextData {
  isDarkTheme: boolean,
  toggleThemeHandler: () => void;
}

export const ThemeContext = createContext({} as ThemeContextData)

interface ThemeContextProps {
  children: ReactNode;
}


export function ThemeContextProvider({ children }: ThemeContextProps) {
  const [isDarkTheme, setIsDarkTheme] = useState(true)

  function isLocalStorageEmpty() { 
    return !localStorage.getItem("isDarkTheme");
  }

  function initialThemeHandler() {
    if (isLocalStorageEmpty()) {
      localStorage.setItem("isDarkTheme", `true`);
      document!.querySelector("body")!.classList.add("dark");
      setIsDarkTheme(true);
    } else {
      const isDarkTheme = JSON.parse(
        localStorage.getItem("isDarkTheme")!
      );
      isDarkTheme && document!.querySelector("body")!.classList.add("dark");
      setIsDarkTheme(() => {
        return isDarkTheme;
      });
    }
  }


  function toggleThemeHandler() {
    const isDarkTheme = JSON.parse(localStorage.getItem("isDarkTheme")!)

    setIsDarkTheme(!isDarkTheme)
    toggleDarkClassToBody()
    setValueToLocalStorage()
  }

  function toggleDarkClassToBody() {
    document!.querySelector("body")!.classList.toggle("dark");
  }

  function setValueToLocalStorage() {
    localStorage.setItem("isDarkTheme", `${!isDarkTheme}`);
  }

  useEffect(() => initialThemeHandler())

  return (
    <ThemeContext.Provider value={{ isDarkTheme: true, toggleThemeHandler }}>
      {children}
    </ThemeContext.Provider>
  )
}   