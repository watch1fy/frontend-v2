"use client";

import {
  NavbarContent,
  NavbarBrand,
  NavbarItem,
  Navbar,
} from "@nextui-org/react";
import Link from "next/link";
import Logo from "./logo";
import { FaGithub } from "react-icons/fa6";

export const NavbarNotInSession = () => {
  return (
    <Navbar maxWidth="xl">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <Link href="/">
            <Logo />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="sm:flex" justify="end">
        <NavbarItem className="flex gap-4 flex-row justify-center items-center">
          <Link href={"https://github.com/watch1fy"}>
            <FaGithub size={24} />
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};
