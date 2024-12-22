import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Button, CircularProgress } from "@mui/material";
import { Form, FormikConfig, FormikProvider, useFormik } from "formik";
import { useCreatePostMutation } from "src/store/posts/postsApiSlice";
import FormField from "src/components/FormField";
import { NotificationService } from "src/helpers/notifications";
import { PATHNAMES } from "src/constants/routes";
import {
  ADD_POST_FORM_FIELDS,
  ADD_POST_VALIDATION_SCHEMA,
  INITIAL_VALUES,
} from "./constants";
import { InitialValues } from "./types";

export const AddForm: FC = () => {
  const navigate = useNavigate();

  const [createPost, { isLoading }] = useCreatePostMutation();

  const formikProps: FormikConfig<InitialValues> = {
    initialValues: INITIAL_VALUES,
    validationSchema: ADD_POST_VALIDATION_SCHEMA,
    onSubmit: async (values) => {
      try {
        await createPost({
          userId: +import.meta.env.VITE_USER_ID,
          ...values,
        });

        NotificationService.success();
        navigate(PATHNAMES.POST_LIST);
      } catch {
        NotificationService.error();
      }
    },
  };

  const formik = useFormik<InitialValues>(formikProps);

  return (
    <FormikProvider value={formik}>
      <Form className="mx-auto flex max-w-160 flex-col gap-5">
        {ADD_POST_FORM_FIELDS.map((field) => (
          <FormField key={field.name} {...field} />
        ))}

        <Button
          className="w-max"
          type="submit"
          variant="contained"
          color="primary"
          disabled={isLoading}
        >
          {isLoading ? (
            <CircularProgress size={24} color="inherit" />
          ) : (
            "Submit"
          )}
        </Button>
      </Form>
    </FormikProvider>
  );
};
