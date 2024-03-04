"use client";

import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import NextLink from "next/link";
import { ThemeSwitch } from "../theme-switch";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { toast } from "sonner";
import { signOut } from "@/lib/actions/auth";
import { useRouter } from "next/navigation";
import { routes } from "@/config/route";

export type ImageProps = {
  size?: number;
  width: number | undefined;
  height: number | undefined;
};

export const NavbarInSession = () => {
  return (
    <NextUINavbar maxWidth="xl" className="top-0">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo width={180} height={60} />
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="sm:flex" justify="end">
        <NavbarItem className="flex gap-4 flex-row justify-center items-center">
          <Link target="blank" href={"https://github.com/watch1fy"}>
            <FaGithub size={20} className="sm:flex hidden" />
          </Link>
          <ThemeSwitch />
          <SignOutButton />
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

export const SignOutButton = () => {
  const router = useRouter();
  const handleSignOut = async () => {
    const loadingToastId = toast.loading("Signin you out...", {
      duration: 5000,
    });
    const res = await signOut();
    const { error } = JSON.parse(res);
    toast.dismiss(loadingToastId);

    if (error) {
      toast.error(error.message || "", {
        duration: 5000,
        description: `Could not complete sign out request`,
      });
      return;
    }

    toast.success("Signed out succssfully" || "", {
      duration: 5000,
      description: `Sign out request was completed successfully`,
    });

    router.push(routes.auth[0]);
  };

  return (
    <>
      <Button
        size="md"
        color="primary"
        variant="flat"
        onPress={handleSignOut}
        className="sm:flex hidden"
      >
        Sign Out
      </Button>
      <Button
        size="sm"
        color="primary"
        variant="flat"
        onPress={handleSignOut}
        className="sm:hidden flex"
      >
        Sign Out
      </Button>
    </>
  );
};
