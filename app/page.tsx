import About from "@/components/home/about";
import CTA from "@/components/home/cta";
import Features from "@/components/home/feautures";
import Hero from "@/components/home/hero";
import MovieSlides, {MovieCardSkeletonSlide} from "@/components/home/movie-slide";
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