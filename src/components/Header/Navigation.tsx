import { NavLink } from "react-router-dom";
import cn from "classnames";
import { NAVIGATION_LINKS } from "./constants";

export const Navigation = () => (
  <nav>
    <ul className="flex gap-2 lg:gap-5">
      {NAVIGATION_LINKS.map(({ id, label, href }) => (
        <li key={id}>
          <NavLink
            className={({ isActive }) =>
              cn("text-blue-base relative text-base hover:opacity-80", {
                "before:bg-blue-base font-bold before:absolute before:-bottom-2 before:left-0 before:right-0 before:h-0.5":
                  isActive,
              })
            }
            to={href}
          >
            {label}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);
