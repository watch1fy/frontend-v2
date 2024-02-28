import Link from "next/link";
import React from "react";

function FeatureAnchor() {
  return (
    <ul className="w-full flex flex-row gap-3 sm:gap-6 items-center">
      <li className="text-sm md:text-lg text-primary font-semibold">
        Site Links
      </li>
      <li className="text-[12px] md:text-lg hover:text-gray-500 dark:hover:text-gray-400 cursor-pointer">
        <Link href={"#join-anchor"}>Join</Link>
      </li>
      <li className="text-[12px] md:text-lg hover:text-gray-500 dark:hover:text-gray-400 cursor-pointer">
        <Link href={"#about-anchor"}>About</Link>
      </li>
      <li className="text-[12px] md:text-lg hover:text-gray-500 dark:hover:text-gray-400 cursor-pointer">
        <Link href={"#feature-anchor"}>Features</Link>
      </li>
    </ul>
  );
}

export default FeatureAnchor;
