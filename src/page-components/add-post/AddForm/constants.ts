import * as Yup from "yup";
import { TITLE_VALIDATION_SCHEMA } from "src/constants/formValidation";
import { IFormField } from "src/@types/form";
import { InitialValues } from "./types";

export const INITIAL_VALUES: InitialValues = {
  title: "",
  description: "",
};

export const ADD_POST_FORM_FIELDS: IFormField[] = [
  { label: "Title", placeholder: "Enter title", name: "title" },
  {
    label: "Description",
    placeholder: "Enter description (option)",
    name: "description",
  },
];

export const ADD_POST_VALIDATION_SCHEMA = Yup.object().shape({
  title: TITLE_VALIDATION_SCHEMA,
});
