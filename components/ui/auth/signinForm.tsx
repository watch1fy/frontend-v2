import React from "react";
import { Button, Checkbox, Link } from "@nextui-org/react";
import { FormInput, PasswordInput } from "./form-input";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignInFormData } from "@/lib/types";
import { useForm } from "react-hook-form";
import { signInWithEmail } from "@/lib/actions/auth";
import { SignInSchema } from "@/lib/schema";

function SignInForm() {
  const { control, handleSubmit } = useForm<SignInFormData>({
    resolver: zodResolver(SignInSchema),
  });

  const signIn = async (signinData: SignInFormData) => {
    // return console.log(signinData)
    const res = await signInWithEmail(signinData);
    const { data, error } = JSON.parse(res);
    console.log(data, error);
  };

  return (
    <form
      className="flex flex-col w-full gap-3"
      onSubmit={handleSubmit(signIn)}
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
      <div className="flex py-2 px-1 justify-between">
        <Checkbox
          classNames={{
            label: "text-small",
          }}
        >
          Remember me
        </Checkbox>
        <Link color="primary" size="sm">
          Forgot password?
        </Link>
      </div>
      <Button type="submit" className="my-4" color="primary">
        Sign In
      </Button>
    </form>
  );
}

export default SignInForm;
