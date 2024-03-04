import { MovieCardSkeletonSlide } from "@/components/skeleton";
import { MovieSlides } from "@/components/ui";
import React, { Suspense } from "react";

function Home() {
  return (
    <Suspense fallback={<MovieCardSkeletonSlide />}>
      <MovieSlides />
    </Suspense>
  );
}

export default Home;
