import { InputProps } from "@nextui-org/input";
import { Control } from "react-hook-form";

export type SignUpFormData = {
  email: string;
  password: string;
  confirmPassword: string;
};

export type SignInFormData = {
  email: string;
  password: string;
};

export type FormFieldProps = {
  name: string;
  label: string;
  placeholder: string;
  type: string;
  control: Control<any, any>;
} & InputProps;
