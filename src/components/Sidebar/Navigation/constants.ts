import { PATHNAMES } from "src/constants/routes";
import { INavigationItem } from "./types";

export const NAVIGATION_LINKS: INavigationItem[] = [
  {
    id: 1,
    href: PATHNAMES.POST_LIST,
    label: "Post List",
  },
  {
    id: 2,
    href: PATHNAMES.ADD_POST,
    label: "Add Post",
  },
];
