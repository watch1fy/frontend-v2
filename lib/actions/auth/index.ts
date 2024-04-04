"use server";

import { createSupabaseServerClient } from "@/lib/supabase/server";
import { SignInFormData, SignUpFormData } from "@/lib/types";
import { unstable_noStore as noStore } from "next/cache";
import { cookies } from "next/headers";

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
  noStore();
  const supabase = createSupabaseServerClient();
  const { error } = await supabase.auth.signOut();

  return JSON.stringify({ error });
};

export async function getCookie(cookieName: string): Promise<null | string> {
  const auth_cookie = cookies().get(cookieName);
  if (!auth_cookie) {
    return null;
  }
  return auth_cookie.value;
}
