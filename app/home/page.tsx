import { MovieCardSkeletonSlide } from "@/components/skeleton";
import { MovieSlides } from "@/components/ui";
import HeroSlide from "@/components/ui/movie-slides/hero-slide";
import React, { Suspense } from "react";

function Home() {
  return (
    <div className="pb-8 px-6 md:px-24 flex-grow flex flex-col gap-8 w-full">
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
          categoryType="top-movies"
          sectionTitle="Top Rated Movies"
        />
      </Suspense>
      <Suspense fallback={<MovieCardSkeletonSlide />}>
        <MovieSlides categoryType="top-tv" sectionTitle="Top Rated TV Shows" />
      </Suspense>
    </div>
  );
}

export default Home;
