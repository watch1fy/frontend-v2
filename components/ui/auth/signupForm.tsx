import React from "react";
import { Button } from "@nextui-org/react";
import { SignUpFormData } from "@/lib/types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignUpSchema } from "@/lib/schema";
import { signUpNewUser } from "@/lib/actions/auth";
import { FormInput, PasswordInput } from "./form-input";

function SignUpForm() {
  const { control, handleSubmit } = useForm<SignUpFormData>({
    resolver: zodResolver(SignUpSchema),
  });

  const signUp = async (signupData: SignUpFormData) => {
    return console.log(signupData);
    const res = await signUpNewUser(signupData);
    const { data, error } = JSON.parse(res);
    console.log(data, error);
  };

  return (
    <form
      className="flex flex-col w-full gap-3"
      onSubmit={handleSubmit(signUp)}
    >
      <FormInput
        type="email"
        label="Email"
        placeholder="Enter your email"
        name="email"
        control={control}
      />
      <PasswordInput
        type="password"
        label="Password"
        placeholder="Enter password"
        name="password"
        control={control}
      />
      <PasswordInput
        type="password"
        label="Confirm Password"
        placeholder="Confirm password"
        name="confirmPassword"
        control={control}
      />
      <Button type="submit" className="my-4" color="primary">
        Sign Up
      </Button>
    </form>
  );
}

export default SignUpForm;
