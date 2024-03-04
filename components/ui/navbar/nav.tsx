"use client"

import { Button } from "@nextui-org/button";
import { NavbarContent, NavbarBrand, NavbarItem, Navbar } from "@nextui-org/navbar";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { ThemeSwitch } from "../theme-switch";
import { AuthModal } from "../auth";
import { useDisclosure } from "@nextui-org/react";
import Logo from "./logo";

export const NavbarNotInSession = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <Navbar maxWidth="xl" className="top-0 w-full">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <Link href="/">
            <Logo />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="sm:flex" justify="end">
        <NavbarItem className="flex gap-4 flex-row justify-center items-center">
          <Link target="blank" href="https://github.com/watch1fy">
            <FaGithub size={20} className="sm:flex hidden" />
          </Link>
          <ThemeSwitch />
          <Button size="md" color="primary" variant="flat" onClick={onOpen}>
            Sign In
          </Button>
          <AuthModal isOpen={isOpen} onOpenChange={onOpenChange} />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}