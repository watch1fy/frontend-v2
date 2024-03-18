"use client";
import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex flex-row gap-0 justify-center items-center">
      <Image
        priority
        width={35}
        height={35}
        alt="logo"
        className="lg:block hidden"
        src="/logofinal.svg"
      />
      <Image
        priority
        width={120}
        height={40}
        alt="logo"
        className="lg:block hidden"
        src={"/llogod.svg"}
      />
      <Image
        priority
        width={105}
        height={35}
        alt="logo"
        className="lg:hidden"
        src={"/llogod.svg"}
      />
    </div>
  );
};

export default Logo;
