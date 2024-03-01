import React from "react";
import { Button } from "@nextui-org/react";
import { SignUpFormData } from "@/lib/types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignUpSchema } from "@/lib/schema";
import { FormEmailInput, PasswordInput } from "./form-input";
import { toast } from "sonner";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";

function SignUpForm() {
  const { control, handleSubmit } = useForm<SignUpFormData>({
    resolver: zodResolver(SignUpSchema),
  });

  const signUp = async (signupData: SignUpFormData) => {
    const supabase = createSupabaseBrowserClient();
    const { error } = await supabase.auth.signUp(signupData);
    if (error) {
      toast.error(error.message || "", {
        duration: 5000,
        description: `Could not complete sign up`,
      });
      return;
    }
    toast.success("Finish your sign Up", {
      duration: 5000,
      description: `Please verify your email that has been sent to '${signupData.email} to finish sign up process'`,
    });
  };

  return (
    <form
      className="flex flex-col w-full gap-3"
      onSubmit={handleSubmit(signUp)}
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
