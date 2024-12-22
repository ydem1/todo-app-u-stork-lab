import React, { FC } from "react";
import { Button, TextField } from "@mui/material";
import { Form, FormikConfig, FormikProvider, useFormik } from "formik";
import { ADD_POST_VALIDATION_SCHEMA, INITIAL_VALUES } from "./constants";
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
      <Form>
        <TextField
          label="Title"
          name="title"
          variant="outlined"
          fullWidth
          value={formik.values.title}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.title && Boolean(formik.errors.title)}
          helperText={formik.touched.title && formik.errors.title}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          disabled={!formik.isValid || formik.isSubmitting}
        >
          Submit
        </Button>
      </Form>
    </FormikProvider>
  );
};
