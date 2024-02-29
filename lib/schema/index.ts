import { ZodType, z } from "zod";
import { SignInFormData, SignUpFormData } from "../types";

export const SignUpSchema: ZodType<SignUpFormData> = z
  .object({
    email: z
      .string()
      .email({ message: "Must be a valid email" })
      .min(4, { message: "Email is too short" }),
    password: z.string().min(8, { message: "Password is too short" }),
    confirmPassword: z.string().min(8, { message: "Confirm password is too short" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const SignInSchema: ZodType<SignInFormData> = z.object({
  email: z
    .string()
    .email({ message: "Must be a valid email" })
    .min(4, { message: "Email is too short" }),
  password: z.string().min(8, { message: "Password is too short" }),
});
