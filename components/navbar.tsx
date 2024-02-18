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
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { ImageProps } from "@/types";
import Image from "next/image";
import { useDisclosure } from "@nextui-org/react";
import AuthModal from "./signin";


export const Navbar = () => {
	const [scroll, setScroll] = useState<boolean>();

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 20) {
				setScroll(true)
				console.log(window.scrollY)
			}
		}
		window.addEventListener('scroll', handleScroll)

		return window.removeEventListener('scroll', handleScroll)
	}, [scroll])

	return (
		<NextUINavbar
			maxWidth="xl"
			position="sticky"
			className="py-2">
			<NavbarContent className="basis-1/5 sm:basis-full" justify="start">
				<NavbarBrand as="li" className="gap-3 max-w-fit">
					<NextLink className="flex justify-start items-center gap-1" href="/">
						<Logo width={180} height={60}/>
					</NextLink>
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent
				className="sm:flex basis-1/5 sm:basis-full"
				justify="end"
			>
				<NavbarItem className="flex gap-2">
					<ThemeSwitch />
					<SignInButton />
				</NavbarItem>
			</NavbarContent>
		</NextUINavbar>
	);
};

export const Logo: React.FC<ImageProps> = ({
	width,
	height
}) => {
	const { theme } = useTheme()
	return (
		<Image
			priority
			width={width}
			height={height}
			alt="logo"
			src={theme === "light" ? "/llogol.svg" : "/llogod.svg"} />
	)
}

export const SignInButton = () => {
	const { isOpen, onOpen, onOpenChange } = useDisclosure();

	return (
		<Button
			size="md"
			color="primary"
			variant="flat"
			onPress={onOpen}>
			Sign In
			<AuthModal
				isOpen={isOpen}
				onOpenChange={onOpenChange}/>
		</Button>
	)
}
