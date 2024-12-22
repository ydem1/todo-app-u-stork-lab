import { FC } from "react";
import { NavLink } from "react-router";
import cn from "classnames";
import { INavigationItemProps } from "./types";

export const NavigationItem: FC<INavigationItemProps> = ({
  href,
  label,
  icon: Icon,
}) => (
  <li>
    <NavLink
      className={({ isActive }) =>
        cn(
          "text-blue-light flex gap-3 py-3 pl-10 transition-all duration-300",
          {
            "text-blue-base bg-blue-soft font-medium": isActive,
            "hover:opacity-70": !isActive,
          }
        )
      }
      to={href}
    >
      <Icon />
      <span>{label}</span>
    </NavLink>
  </li>
);
