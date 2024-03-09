import { FormFieldProps } from "@/lib/types";
import { Input } from "@nextui-org/react";
import React, { useState } from "react";
import { Controller } from "react-hook-form";
import { MdEmail } from "react-icons/md";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

export const FormEmailInput: React.FC<FormFieldProps> = ({
  name,
  type,
  label,
  placeholder,
  control,
  ...props
}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: true }}
      render={({ field, formState }) => {
        return (
          <Input
            endContent={type === "email" && <MdEmail />}
            type={"text"}
            label={label}
            placeholder={placeholder}
            isInvalid={!!formState.errors?.[name]}
            errorMessage={formState.errors?.[name]?.message?.toString()}
            value={field.value || ""}
            variant="bordered"
            onChange={field.onChange}
            {...props}
          />
        );
      }}
    />
  );
};

export const PasswordInput: React.FC<FormFieldProps> = ({
  name,
  type,
  label,
  placeholder,
  control,
  ...props
}) => {
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: true }}
      render={({ field, formState }) => {
        return (
          <Input
            endContent={
              type === "password" && (
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={() => setPasswordVisible(!passwordVisible)}
                >
                  {passwordVisible ? <IoMdEyeOff /> : <IoMdEye />}
                </button>
              )
            }
            type={passwordVisible ? "text" : type}
            label={label}
            placeholder={placeholder}
            isInvalid={!!formState.errors?.[name]?.message}
            errorMessage={formState.errors?.[name]?.message?.toString()}
            value={field.value || ""}
            variant="bordered"
            onChange={field.onChange}
            {...props}
          />
        );
      }}
    />
  );
};
