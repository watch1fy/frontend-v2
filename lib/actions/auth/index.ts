"use server";

import { createSupabaseServerClient } from "@/lib/supabase/server";
import { SignInFormData, SignUpFormData } from "@/lib/types";
import { type Provider } from "@supabase/supabase-js";

const supabase = createSupabaseServerClient();

//@TODO: redirect route

export const signUpNewUser = async ({
  email,
  password
}: SignUpFormData) => {
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
    options: {
      emailRedirectTo: "",
    },
  });
  return JSON.stringify({ data, error })
};

export const signInWithEmail = async ({
  email,
  password,
}: SignInFormData) => {
  console.log(email, password)
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });
  return JSON.stringify({ data, error })
};

export const socialSignIn = async ({ provider }: { provider: Provider }) => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider,
  });
  return JSON.stringify({ data, error })
};
