'use server';

import { createSupabaseServerClient } from "../../supabase/server";

const supabase = createSupabaseServerClient()

export const signUpNewUser = async () => {
  const { data, error } = await supabase.auth.signUp({
    email: 'example@email.com',
    password: 'example-password',
    options: {
      emailRedirectTo: 'https://example.com/welcome',
    },
  })

  return { data, error }
}

export const signInWithEmail = async () => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: 'example@email.com',
    password: 'example-password',
  })

  return { data, error }
}


export const signInWithGoogle = async () => {
  await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: ''
    }
  })
}

export const signInWithFacebook = async () => {
  await supabase.auth.signInWithOAuth({
    provider: 'facebook',
    options: {
      redirectTo: ''
    }
  })
} 