import { FC } from "react";
import { NavLink } from "react-router";
import cn from "classnames";
import { INavigationItemProps } from "./types";

export const NavigationItem: FC<INavigationItemProps> = ({ href, label }) => (
  <li>
    <NavLink
      className={({ isActive }) =>
        cn("text-blue-light flex py-3 pl-10 hover:opacity-70", {
          "text-blue-base bg-blue-soft font-medium": isActive,
        })
      }
      to={href}
    >
      {label}
    </NavLink>
  </li>
);
