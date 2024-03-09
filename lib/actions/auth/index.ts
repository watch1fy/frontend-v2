"use server";

import { createSupabaseServerClient } from "@/lib/supabase/server";
import { SignInFormData, SignUpFormData } from "@/lib/types";
import { unstable_noStore } from "next/cache";

export const signUpNewUser = async ({ email, password }: SignUpFormData) => {
  const supabase = createSupabaseServerClient();
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
  });
  return JSON.stringify({ data, error });
};

export const signInWithEmail = async ({ email, password }: SignInFormData) => {
  const supabase = createSupabaseServerClient();
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });
  return JSON.stringify({ data, error });
};

export const signOut = async () => {
  unstable_noStore();
  const supabase = createSupabaseServerClient();
  const { error } = await supabase.auth.signOut();

  return JSON.stringify({ error });
};
