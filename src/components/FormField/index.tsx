import React, { FC } from "react";
import { TextField } from "@mui/material";
import { useField } from "formik";
import { IFormField } from "src/@types/form";

const FormField: FC<IFormField> = ({ label, isTextArea, ...props }) => {
  const [field, meta] = useField(props.name);

  const isError = meta.touched && Boolean(meta.error);

  return (
    <TextField
      {...field}
      label={label}
      variant="outlined"
      type={props.type || "text"}
      placeholder={props.placeholder}
      error={isError}
      helperText={isError ? meta.error : ""}
      multiline={isTextArea}
      fullWidth
    />
  );
};

export default FormField;
