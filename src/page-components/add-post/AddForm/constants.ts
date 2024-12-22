import * as Yup from "yup";
import { IInitialValues } from "./types";

export const INITIAL_VALUES: IInitialValues = {
  title: "",
};

export const ADD_POST_FORM_FIELDS = [];

export const ADD_POST_VALIDATION_SCHEMA = Yup.object().shape({
  title: Yup.string().required(),
  // newPassword: PASSWORD_VALIDATION_SCHEMA,
  // repeatNewPassword: REPEAT_NEW_PASSWORD_VALIDATION_SCHEMA,
});
