import { MovieCardSkeletonSlide } from "@/components/skeleton";
import { MovieSlides } from "@/components/ui";
import HeroSlide from "@/components/ui/movie-slides/hero-slide";
import React, { Suspense } from "react";

function Home() {
  return (
    <>
      <HeroSlide sectionTitle="Popular movies right now" />
      <Suspense fallback={<MovieCardSkeletonSlide />}>
        <MovieSlides sectionTitle="Popular Movies" />
      </Suspense>
      <Suspense fallback={<MovieCardSkeletonSlide />}>
        <MovieSlides sectionTitle="Popular Movies" />
      </Suspense>
      <Suspense fallback={<MovieCardSkeletonSlide />}>
        <MovieSlides sectionTitle="Popular Movies" />
      </Suspense>
      <Suspense fallback={<MovieCardSkeletonSlide />}>
        <MovieSlides sectionTitle="Popular Movies" />
      </Suspense>
    </>
  );
}

export default Home;
