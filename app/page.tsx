import { About, CTA, Features, Hero, MovieSlides } from "@/components/ui/";
import { MovieCardSkeletonSlide } from "@/components/skeleton";
import { Suspense } from "react";

export default function Home() {
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
