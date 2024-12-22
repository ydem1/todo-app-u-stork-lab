import { FC } from "react";
import { NAVIGATION_LINKS } from "./constants";
import { NavigationItem } from "./NavigationItem";

export const Navigation: FC = () => (
  <nav>
    <ul className="flex flex-col">
      {NAVIGATION_LINKS.map(({ id, ...item }) => (
        <NavigationItem key={id} {...item} />
      ))}
    </ul>
  </nav>
);
