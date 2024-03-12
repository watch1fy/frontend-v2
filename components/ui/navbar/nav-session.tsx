"use client";

import {
  NavbarContent,
  NavbarBrand,
  Navbar,
  NavbarMenuToggle,
} from "@nextui-org/navbar";
import Link from "next/link";
import { ThemeSwitch } from "../theme-switch";
import { toast } from "sonner";
import { signOut } from "@/lib/actions/auth";
import { useRouter } from "next/navigation";
import { routes } from "@/config/route";
import Logo from "./logo";
import {
  Dropdown,
  DropdownTrigger,
  Avatar,
  DropdownMenu,
  DropdownItem,
  Input,
  DropdownSection,
} from "@nextui-org/react";
import { User } from "@supabase/supabase-js";
import { IoSearch } from "react-icons/io5";
import { useState } from "react";
import { NavbarMenuMobile, NavbarMenuFull } from "./nav-menu";

export const NavbarInSession = ({ user }: { user: User }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <Navbar
      maxWidth="xl"
      className="top-0 w-full backdrop-blur-2xl bg-zinc-700 bg-opacity-5"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden"
        />
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <Link href="/">
            <Logo />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarMenuMobile />
      <NavbarMenuFull />

      <NavbarContent as="div" className="min-w-fit" justify="end">
        <ThemeSwitch />
        <Input
          classNames={{
            base: "max-w-full sm:max-w-[12rem] h-9",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper: "h-full font-normal text-default-500 rounded-full",
          }}
          className="sm:flex hidden shadow-none"
          placeholder="Type to search..."
          size="sm"
          startContent={
            <IoSearch className="text-black dark:text-white" size={24} />
          }
          enterKeyHint="go"
          type="search"
          color="default"
        />
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              as="button"
              showFallback
              className="transition-transform"
              color="secondary"
              name={user.user_metadata?.display_name}
              size="sm"
              src={user.user_metadata?.avatar_url}
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownSection title="Profile" showDivider>
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold text-primary">
                  {user.user_metadata?.custom_claims.global_name ||
                    user.user_metadata?.full_name}
                </p>
                <p className="text-sm text-gray-500 font-light">
                  {user.user_metadata?.email}
                </p>
              </DropdownItem>
            </DropdownSection>
            <DropdownItem key="settings">Settings</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger" onClick={handleSignOut}>
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
};
