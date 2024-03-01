import { About, CTA, Features, Hero, MovieSlides } from "@/components/ui/";
import { MovieCardSkeletonSlide } from "@/components/skeleton";
import { Suspense } from "react";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";

export default async function Home() {
  const supabase = createSupabaseBrowserClient();

  const { data } = await supabase.auth.getUser();
  if (!data?.user) {
  }
  return (
    <>
      <Hero />
      <Suspense fallback={<MovieCardSkeletonSlide />}>
        <MovieSlides />
      </Suspense>
      <CTA />
      <About />
      <Features />
    </>
  );
}
