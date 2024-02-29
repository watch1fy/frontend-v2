import React from "react";
import { Button, Checkbox, Link } from "@nextui-org/react";
import { FormInput, PasswordInput } from "./form-input";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignInFormData } from "@/lib/types";
import { useForm } from "react-hook-form";
import { SignInSchema } from "@/lib/schema";
import { toast } from "sonner";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";

function SignInForm() {
  const { control, handleSubmit } = useForm<SignInFormData>({
    resolver: zodResolver(SignInSchema),
  });

  const signIn = async (signinData: SignInFormData) => {
    const supabase = createSupabaseBrowserClient();
    const { data, error } = await supabase.auth.signInWithPassword(signinData);
    console.log(data, error);
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
    }
    toast.success("Logged in succesfully", {
      duration: 5000,
      description: `You are now logged in as ${signinData.email}`,
    });
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
