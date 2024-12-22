import { Navigation } from "./Navigation";
import { ThemeToggle } from "./ThemeToggle";

export const Sidebar = () => (
  <aside className="flex h-full min-w-62.5 flex-col justify-between border-r-2 border-blue-base bg-white-blue pb-20 pt-6 dark:border-white-base dark:bg-blue-base">
    <Navigation />
    <ThemeToggle />
  </aside>
);
