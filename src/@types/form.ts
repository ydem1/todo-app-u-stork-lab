import { FormFieldVariants } from "src/components/FormField/types";

export interface IFormField {
  className?: string;
  fieldClassName?: string;
  labelClassName?: string;
  name: string;
  label?: string;
  type?: string;
  isTextArea?: boolean;
  placeholder?: string;
  variant?: FormFieldVariants;
}
