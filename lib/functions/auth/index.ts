import { createSupabaseBrowserClient } from "@/lib/supabase/client";
import { toast } from "sonner";

export const signInWithGoogle = async () => {
  const supabase = createSupabaseBrowserClient();
  const { error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `${location.origin}/auth/callback`,
    },
  });
  if (error) {
    toast.error(error.message || "", {
      duration: 5000,
      description: `Could not complete sign up with google`,
    });
    return;
  }
};

export const signInWithDiscord = async () => {
  const supabase = createSupabaseBrowserClient();
  const { error } = await supabase.auth.signInWithOAuth({
    provider: "discord",
    options: {
      redirectTo: `${location.origin}/auth/callback`,
    },
  });
  if (error) {
    toast.error(error.message || "", {
      duration: 5000,
      description: `Could not complete sign up with google`,
    });
    return;
  }
};
