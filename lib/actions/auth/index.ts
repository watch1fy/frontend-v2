"use server";

import { createSupabaseServerClient } from "@/lib/supabase/server";
import { SignInFormData, SignUpFormData } from "@/lib/types";
import { type Provider } from "@supabase/supabase-js";
import { revalidatePath } from "next/cache";

const supabase = createSupabaseServerClient();

export const signUpNewUser = async ({ email, password }: SignUpFormData) => {
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
  });
  revalidatePath("/");
  return JSON.stringify({ data, error });
};

export const signInWithEmail = async ({ email, password }: SignInFormData) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });
  revalidatePath("/");
  return JSON.stringify({ data, error });
};

export const socialSignIn = async ({ provider }: { provider: Provider }) => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: `${process.env.WEBSITE_ORIGIN}/auth/callback`,
    },
  });
  revalidatePath("/");
  return JSON.stringify({ data, error });
};

export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  revalidatePath("/");
  return JSON.stringify({ error });
};
