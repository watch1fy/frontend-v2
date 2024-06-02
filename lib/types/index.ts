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

export type MovieCardProps = {
  id: number;
  isLast?: boolean;
  isFirst?: boolean;
  isPopular?: boolean;
  subtext?: string;
  rank?: number;
  title: string;
  image: string;
  backdrop: string;
  rating: number;
  votes: number;
  desc: string;
  adult: boolean;
};

export type detailType = {
  currentTime: number;
};
