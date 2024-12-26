import React, { useEffect, useState } from "react";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import ContrastIcon from "@mui/icons-material/Contrast";
import { Button } from "src/components/Button";
import { setTheme } from "src/utils/theme";
import { Theme } from "src/constants/theme";

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme") || Theme.Dark;
    setIsDark(currentTheme === Theme.Dark);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    setTheme(isDark ? Theme.Light : Theme.Dark);
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
