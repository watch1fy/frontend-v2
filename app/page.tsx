import About from "@/components/home/about";
import CTA from "@/components/home/cta";
import Features from "@/components/home/feautures";
import Hero from "@/components/home/hero";
import MovieSlides from "@/components/home/movie-slide";

export default function Home() {
	return (
		<>
			<Hero />
			{/* <MovieSlides /> */}
			<CTA />
			<About />
			<Features />
		</>
	);
}