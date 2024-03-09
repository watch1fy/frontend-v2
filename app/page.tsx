import { About, CTA, Features, Hero } from "@/components/ui/";
import { MovieCardSkeletonSlide } from "@/components/skeleton";
import { Suspense } from "react";
import { MovieSlidesNotInSession } from "@/components/ui/";

export default async function Home() {
  return (
    <>
      <Hero />
      <Suspense fallback={<MovieCardSkeletonSlide />}>
        <MovieSlidesNotInSession sectionTitle="Popular" />
      </Suspense>
      <CTA />
      <About />
      <Features />
    </>
  );
}
