"use client";

import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import NextLink from "next/link";
import { ThemeSwitch } from "./theme-switch";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useDisclosure } from "@nextui-org/react";
import { AuthModal } from "./auth";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export type ImageProps = {
  size?: number;
  width: number | undefined;
  height: number | undefined;
};

export const Navbar = () => {
  return (
    <NextUINavbar maxWidth="xl" shouldHideOnScroll={false} className="top-0">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink
            as={"image"}
            className="flex justify-start items-center gap-1"
            href="/"
          >
            <Logo width={180} height={60} />
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="sm:flex basis-1/5 sm:basis-full" justify="end">
        <NavbarItem className="flex gap-4 flex-row justify-center items-center">
          <Link
            target="blank"
            href={"https://github.com/watch1fy"}
            as={"image"}
          >
            <FaGithub size={20} className="sm:flex hidden" />
          </Link>
          <ThemeSwitch />
          <SignInButton />
        </NavbarItem>
      </NavbarContent>
    </NextUINavbar>
  );
};

export const Logo: React.FC<ImageProps> = ({ width, height }) => {
  const { theme } = useTheme();
  return (
    <Image
      priority
      width={width}
      height={height}
      alt="logo"
      src={theme === "light" ? "/llogol.svg" : "/llogod.svg"}
    />
  );
};

export const SignInButton = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button
        size="md"
        color="primary"
        variant="flat"
        onPress={onOpen}
        className="sm:flex hidden"
      >
        Sign In
      </Button>
      <Button
        size="sm"
        color="primary"
        variant="flat"
        onPress={onOpen}
        className="sm:hidden flex"
      >
        Sign In
      </Button>
      <AuthModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  );
};
