import { MovieCardSkeletonSlide } from "@/components/skeleton";
import { MovieSlides } from "@/components/ui";
import HeroSlide from "@/components/ui/movie-slides/hero-slide";
import React, { Suspense } from "react";

function Home() {
  return (
    <>
      <HeroSlide />
      <Suspense fallback={<MovieCardSkeletonSlide />}>
        <MovieSlides
          categoryType="popular-movie"
          isPopular
          sectionTitle="Popular Movies"
        />
      </Suspense>
      <Suspense fallback={<MovieCardSkeletonSlide />}>
        <MovieSlides
          categoryType="popular-tv"
          isPopular
          sectionTitle="Popular TV Shows"
        />
      </Suspense>
      <Suspense fallback={<MovieCardSkeletonSlide />}>
        <MovieSlides
          categoryType="popular-movie"
          sectionTitle="Popular Movies"
        />
      </Suspense>
      <Suspense fallback={<MovieCardSkeletonSlide />}>
        <MovieSlides
          categoryType="popular-tv"
          sectionTitle="Popular TV Shows"
        />
      </Suspense>
    </>
  );
}

export default Home;
