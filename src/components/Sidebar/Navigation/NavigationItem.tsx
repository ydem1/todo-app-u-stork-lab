import { FC } from "react";
import { NavLink } from "react-router";
import cn from "classnames";
import { ILink } from "src/@types/link";

export const NavigationItem: FC<Omit<ILink, "id">> = ({
  href,
  label,
  icon: Icon,
}) => (
  <li>
    <NavLink
      className={({ isActive }) =>
        cn(
          "flex justify-center gap-3 py-3 text-blue-light transition-all duration-300 dark:text-blue-light",
          {
            "bg-blue-soft font-medium text-blue-base dark:bg-blue-light dark:!text-white-base":
              isActive,
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
