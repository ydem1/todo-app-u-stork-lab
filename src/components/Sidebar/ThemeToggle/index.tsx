import { useEffect, useState } from "react";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import ContrastIcon from "@mui/icons-material/Contrast";
import { Button } from "src/components/Button";
import { useLocalStorage } from "src/hooks/useLocalStorage";
import { Theme } from "./type";

export const ThemeToggle = () => {
  const [theme, setTheme] = useLocalStorage("theme", Theme.Light);

  const initialIsDark =
    theme === Theme.Dark ||
    (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches);

  const [isDark, setIsDark] = useState(initialIsDark);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      setTheme(Theme.Dark);
    } else {
      document.documentElement.classList.remove("dark");
      setTheme(Theme.Light);
    }
  }, [isDark, setTheme]);

  const toggleTheme = () => {
    setIsDark((prevState) => !prevState);
  };

  return (
    <Button
      className="x gap-3 px-10 py-3 text-blue-light dark:text-white-base"
      onClick={toggleTheme}
    >
      {!isDark ? (
        <>
          <ContrastIcon />
          <span>Dark Mode</span>
        </>
      ) : (
        <>
          <Brightness4Icon />
          <span>Light Mode</span>
        </>
      )}
    </Button>
  );
};
