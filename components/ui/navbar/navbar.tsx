import { NavbarNotInSession } from "./nav";
import { NavbarInSession } from "./nav-session";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export type ImageProps = {
  size?: number;
  width: number | undefined;
  height: number | undefined;
};

export const Navbar = async () => {
  const supabase = createSupabaseServerClient();
  const { data } = await supabase.auth.getSession();

  if (!data.session?.user || !data.session) return <NavbarNotInSession />;
  return <NavbarInSession user={data.session?.user} />;
};
