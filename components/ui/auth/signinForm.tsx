"use client";

import React from "react";
import { Button, Checkbox } from "@nextui-org/react";
import { FormEmailInput, PasswordInput } from "./form-input";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignInFormData } from "@/lib/types";
import { useForm } from "react-hook-form";
import { SignInSchema } from "@/lib/schema";
import { toast } from "sonner";
import { signInWithEmail } from "@/lib/actions/auth";
import { useRouter } from "next/navigation";
import { routes } from "@/config/route";

function SignInForm() {
  const { control, handleSubmit, formState } = useForm<SignInFormData>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const router = useRouter();

  const signIn = async (signinData: SignInFormData) => {
    const res = await signInWithEmail(signinData);
    const { error } = JSON.parse(res);

    if (error?.message === "Invalid login credentials") {
      toast.error(error.message || "", {
        duration: 5000,
        description: `Wrong email/password or the account with email '${signinData.email}' does not exists`,
      });
      return;
    } else if (error?.message.startsWith("Email")) {
      toast.error(error.message || "", {
        duration: 5000,
        description: `Please verify your email via the email sent to '${signinData.email}' and try again`,
      });
      return;
    } else if (error?.message && error?.message.length) {
      toast.error(error.message || "", {
        duration: 5000,
        description: `Could not complete signup. Please try again after some time`,
      });
      return;
    }
    toast.success("Logged in succesfully", {
      duration: 5000,
      description: `You are now logged in as ${signinData.email}`,
    });

    router.push(routes.protected[0]);
  };

  return (
    <form
      className="flex flex-col w-full gap-3"
      onSubmit={handleSubmit(signIn)}
    >
      <FormEmailInput
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
        <span
          className="text-primary-500 cursor-pointer text-sm font-light"
          onClick={() => {
            toast.info("Cant do anythig yet hehe");
          }}
        >
          Forgot password?
        </span>
      </div>
      <Button
        isLoading={formState.isSubmitting}
        type="submit"
        className="my-4"
        color="primary"
      >
        Sign In
      </Button>
    </form>
  );
}

export default SignInForm;
