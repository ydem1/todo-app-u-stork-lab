import { Theme } from "src/constants/theme";

export const setTheme = (theme: string) => {
  localStorage.setItem("theme", theme);

  if (theme === Theme.Dark) {
    document.documentElement.classList.add(Theme.Dark);
  } else {
    document.documentElement.classList.remove(Theme.Dark);
  }
};

export const keepTheme = () => {
  const theme = localStorage.getItem("theme") || Theme.Dark;
  setTheme(theme);
};
