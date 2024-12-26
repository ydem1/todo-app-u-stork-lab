import cn from "classnames";
import { ButtonVariants } from "./types";

const DEFAULT_BUTTON_CLASSNAME = "rounded-lg text-lg font-bold";

export const BUTTON_STYLE_VARIANTS = {
  [ButtonVariants.PRIMARY]: cn(
    "bg-blue-base text-white-base dark:bg-blue-light",
    DEFAULT_BUTTON_CLASSNAME
  ),
  [ButtonVariants.SECONDARY]: cn(
    "bg-white-base text-blue-base border-2 border-blue-base dark:bg-white-blue dark:border-white-base",
    DEFAULT_BUTTON_CLASSNAME
  ),
};
