import { PATHNAMES } from "src/constants/routes";
import { INavigationItem } from "./types";

export const NAVIGATION_LINKS: INavigationItem[] = [
  {
    id: 1,
    href: PATHNAMES.LIST_TODOS,
    label: "List Todos",
  },
  {
    id: 2,
    href: PATHNAMES.ADD_TODO,
    label: "Add Todo",
  },
];
