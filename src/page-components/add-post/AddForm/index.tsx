import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Form, FormikConfig, FormikProvider, useFormik } from "formik";
import { Button } from "src/components/Button";
import { ButtonVariants } from "src/components/Button/types";
import { TextInput } from "src/components/FormField/TextInput";
import { useCreatePostMutation } from "src/store/posts/postsApiSlice";
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
        const data = await createPost({
          userId: +import.meta.env.VITE_USER_ID,
          ...values,
        });

        if (data.error) {
          throw Error();
        }

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
          <TextInput key={field.name} {...field} />
        ))}

        <div className="mt-5 flex gap-3">
          <Button
            className="w-25 px-5 py-2"
            variant={ButtonVariants.PRIMARY}
            type="submit"
            isLoading={isLoading}
            isDisabled={isLoading}
          >
            Submit
          </Button>

          <Button
            className="px-5 py-2"
            variant={ButtonVariants.SECONDARY}
            type="reset"
          >
            Cancel
          </Button>
        </div>
      </Form>
    </FormikProvider>
  );
};
