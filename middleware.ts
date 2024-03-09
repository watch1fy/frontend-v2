import { updateSession } from "@/lib/supabase/middleware";
import { NextRequest, NextResponse } from "next/server";
import { createSupabaseServerClient } from "./lib/supabase/server";
import { routes } from "./config/route";

export async function middleware(request: NextRequest) {
  const response = await updateSession(request);
  const supabase = createSupabaseServerClient();
  const { data } = await supabase.auth.getUser();
  const url = new URL(request.url);

  if (routes.protected.includes(url.pathname)) {
    if (data?.user) {
      return response;
    } else {
      const redirectUrl = request.nextUrl.clone();
      redirectUrl.pathname = routes.auth[0];
      redirectUrl.searchParams.set("no_user_session", "true");
      redirectUrl.searchParams.set("redirectedFrom", request.nextUrl.pathname);
      return NextResponse.redirect(redirectUrl);
    }
  }

  if (routes.auth.includes(url.pathname)) {
    if (data?.user) {
      const redirectUrl = request.nextUrl.clone();
      redirectUrl.pathname = routes.protected[0];
      return NextResponse.redirect(redirectUrl);
    } else {
      return response;
    }
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
