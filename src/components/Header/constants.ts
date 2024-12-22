import { PATHNAMES } from "src/constants/routes";
import { ILink } from "src/@types/link";

export const NAVIGATION_LINKS: ILink[] = [
  {
    id: 1,
    href: PATHNAMES.HOME,
    label: "Home",
  },
  {
    id: 2,
    href: PATHNAMES.POST_LIST,
    label: "Post List",
  },
  {
    id: 3,
    href: PATHNAMES.ADD_POST,
    label: "Add Post",
  },
];
