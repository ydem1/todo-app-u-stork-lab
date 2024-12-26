import React, { FC, KeyboardEvent, useMemo } from "react";
import cn from "classnames";
import { useField, useFormikContext } from "formik";
import { IFormField } from "src/@types/form";
import { FormField } from ".";
import { TEXT_INPUT_STYLE_VARIANTS } from "./constants";
import { FormFieldVariants } from "./types";

export const TextInput: FC<IFormField> = ({
  className,
  fieldClassName,
  labelClassName,
  label,
  variant = FormFieldVariants.PRIMARY,
  placeholder,
  isTextArea,
  ...props
}) => {
  const fieldId = props.name;

  const { handleSubmit } = useFormikContext();
  const [{ value, onChange, ...field }, { error, touched }] = useField(fieldId);
  const isShownError = Boolean((touched || value) && error);

  const onKeyDownEnter = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  };

  const combinedClassNames = cn(
    "w-full outline-none",
    TEXT_INPUT_STYLE_VARIANTS[variant],
    className,
    { "resize-y": isTextArea },
    { "!border-red-base": error }
  );

  const InputComponent = useMemo(() => {
    if (isTextArea) {
      return "textarea";
    } else {
      return "input";
    }
  }, [isTextArea]);

  return (
    <FormField
      className={fieldClassName}
      labelClassName={labelClassName}
      variant={variant}
      label={label}
      labelFor={fieldId}
      isShownError={isShownError}
      error={error}
    >
      <InputComponent
        id={fieldId}
        className={combinedClassNames}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        {...props}
        {...field}
        onKeyDown={onKeyDownEnter}
      />
    </FormField>
  );
};
