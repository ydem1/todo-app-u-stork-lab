import AddBoxIcon from "@mui/icons-material/AddBox";
import ListAltIcon from "@mui/icons-material/ListAlt";
import { PATHNAMES } from "src/constants/routes";
import { ILink } from "src/@types/link";

export const NAVIGATION_LINKS: ILink[] = [
  {
    id: 1,
    href: PATHNAMES.POST_LIST,
    label: "Post List",
    icon: ListAltIcon,
  },
  {
    id: 2,
    href: PATHNAMES.ADD_POST,
    label: "Add Post",
    icon: AddBoxIcon,
  },
];
