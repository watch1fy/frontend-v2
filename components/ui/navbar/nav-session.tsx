"use client"

import { Button } from "@nextui-org/button";
import { NavbarContent, NavbarBrand, NavbarItem, Navbar } from "@nextui-org/navbar";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { ThemeSwitch } from "../theme-switch";
import { toast } from "sonner";
import { signOut } from "@/lib/actions/auth";
import { useRouter } from "next/navigation";
import { routes } from "@/config/route";
import Logo from "./logo";

export const NavbarInSession = () => {
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
          <SignOutButton />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

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
      >
        Sign Out
      </Button>
    </>
  );
};
