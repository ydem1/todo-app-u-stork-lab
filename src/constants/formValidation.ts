import * as Yup from "yup";

export const MAX_LENGTH_VALIDATION = (max: number) =>
  Yup.string().max(max, `Maximum length is ${max} characters.`).trim();

export const LENGTH_VALIDATION = (min: number, max: number) =>
  Yup.string()
    .trim()
    .min(min, `Minimum length is ${min} characters.`)
    .max(max, `Maximum length is ${max} characters.`)
    .required("This field is required.");

export const TITLE_VALIDATION_SCHEMA = LENGTH_VALIDATION(3, 50).matches(
  /^[A-Za-z\s]+$/,
  "The title should contain only letters and spaces."
);
