import React, { FC } from "react";
import { Button } from "@mui/material";
import { Form, FormikConfig, FormikProvider, useFormik } from "formik";
import FormField from "src/components/FormField";
import {
  ADD_POST_FORM_FIELDS,
  ADD_POST_VALIDATION_SCHEMA,
  INITIAL_VALUES,
} from "./constants";
import { InitialValues } from "./types";

export const AddForm: FC = () => {
  const formikProps: FormikConfig<InitialValues> = {
    initialValues: INITIAL_VALUES,
    validationSchema: ADD_POST_VALIDATION_SCHEMA,
    onSubmit: (values) => {
      console.log(values);
    },
  };

  const formik = useFormik<InitialValues>(formikProps);

  return (
    <FormikProvider value={formik}>
      <Form className="flex flex-col gap-5">
        {ADD_POST_FORM_FIELDS.map((field) => (
          <FormField key={field.name} {...field} />
        ))}

        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </Form>
    </FormikProvider>
  );
};
