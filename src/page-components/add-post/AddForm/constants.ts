import * as Yup from "yup";
import {
  MAX_LENGTH_VALIDATION,
  TITLE_VALIDATION_SCHEMA,
} from "src/constants/formValidation";
import { IFormField } from "src/@types/form";
import { InitialValues } from "./types";

export const INITIAL_VALUES: InitialValues = {
  title: "",
  body: "",
};

export const ADD_POST_FORM_FIELDS: IFormField[] = [
  { label: "Title", placeholder: "Enter title", name: "title" },
  {
    label: "Description",
    placeholder: "Enter description (option)",
    name: "body",
  },
];

export const ADD_POST_VALIDATION_SCHEMA = Yup.object().shape({
  title: TITLE_VALIDATION_SCHEMA,
  body: MAX_LENGTH_VALIDATION(50),
});
