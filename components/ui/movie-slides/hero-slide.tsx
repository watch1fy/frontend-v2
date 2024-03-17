import { getAllTrending } from "@/lib/functions/";
import HeroSlideChild from "./hero-slide-child";

const HeroSlide = async () => {
  const dataArray: any[] = await getAllTrending();

  return (
    <HeroSlideChild
      dataArray={dataArray?.length > 10 ? dataArray.slice(0, 10) : dataArray}
    />
  );
};

export default HeroSlide;
