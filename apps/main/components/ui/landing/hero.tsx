import { getAllTrending } from "@/lib/functions";
import { HeroParallax } from "./hero-parallax";

const Hero = async () => {
  const content: any[] = await getAllTrending();
  return <HeroParallax contentList={content} />;
};

export default Hero;
