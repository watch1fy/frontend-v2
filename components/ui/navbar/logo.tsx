"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

const Logo = () => {
  const [mounted, setMounted] = useState<boolean>();
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted)
    return (
      <Image
        priority
        width={35}
        height={35}
        alt="logo"
        className="lg:block hidden"
        src="/logofinal.svg"
      />
    );

  return (
    <>
      <Image
        priority
        width={120}
        height={40}
        alt="logo"
        className="lg:block hidden"
        src={theme === "light" ? "/llogol.svg" : "/llogod.svg"}
      />
      <Image
        priority
        width={105}
        height={35}
        alt="logo"
        className="lg:hidden"
        src={theme === "light" ? "/llogol.svg" : "/llogod.svg"}
      />
    </>
  );
};

export default Logo;
