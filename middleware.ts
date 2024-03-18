import { updateSession } from "@/lib/supabase/middleware";
import { NextRequest, NextResponse } from "next/server";
import { createSupabaseServerClient } from "./lib/supabase/server";
import { routes } from "./config/route";

export async function middleware(request: NextRequest) {
  const url = new URL(request.url);
  const basePath = url.pathname.split("/")[1]

  console.log(basePath)

  if (routes.unreleased.includes(basePath)) {
    const rewritePath = request.nextUrl.clone();
    rewritePath.pathname = '/not-found';
    return NextResponse.rewrite(rewritePath);
  }


  const response = await updateSession(request);
  const supabase = createSupabaseServerClient();
  const { data } = await supabase.auth.getUser();

  if (routes.protected.includes(basePath)) {
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

  if (routes.auth.includes(basePath)) {
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
