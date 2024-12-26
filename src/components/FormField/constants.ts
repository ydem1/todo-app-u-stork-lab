import { FormFieldVariants } from "./types";

export const TEXT_INPUT_STYLE_VARIANTS = {
  [FormFieldVariants.PRIMARY]:
    "rounded-xl border text-blue-base focus:border-blue-base bg-white-base px-3.5 py-2",
  [FormFieldVariants.SECONDARY]:
    "border-b border-blue-base bg-inherit text-blue-base focus:outline-none placeholder:text-blue-base px-3.5 py-2 dark:border-white-base dark:text-white-base dark:placeholder:text-white-base",
};

export const LABEL_STYLE_VARIANTS = {
  [FormFieldVariants.PRIMARY]:
    "text-xl text-blue-base font-semibold dark:text-white-base",
};
