import { getAllTrending } from "@watchify/lib";
import { HeroParallax } from "./hero-parallax";

const Hero = async () => {
  const content: any[] = await getAllTrending();
  return <HeroParallax contentList={content} />;
};

export default Hero;
