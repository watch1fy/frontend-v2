import React from 'react'
import FeatureAnchor from "@/components/anchor";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="w-full flex flex-col gap-4 items-center justify-center px-6 py-2 dark:bg-[#18181b] bg-[#eeeeee]">
      <div className="w-full flex flex-row items-center justify-between">
        <FeatureAnchor />
        <Link href={'/'}>
          <Image
            src={'/logofinal.svg'}
            alt="logo"
            height={48}
            width={48} />
        </Link>
      </div>
      <div className="w-full flex flex-row justify-center gap-3 items-center">
        <p className="text-center text-[12px] md:text-sm text-gray-500">
          Watchify is a project made with &hearts; by&nbsp;
          <Link
            className="underline"
            href={'https://github.com/anmolsudhir'}
            target="blank">
            Anmol Sudhir
          </Link>
        </p>
        <Link target="blank" href={'www.linkedin.com/in/anmol-sudhir-07595a258'}>
          <FaLinkedin color="gray" />
        </Link>
      </div>
    </footer>
  )
}

export default Footer;
