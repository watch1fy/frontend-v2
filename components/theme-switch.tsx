"use client";

import { Switch } from "@nextui-org/switch";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { MdDarkMode, MdLightMode } from "react-icons/md";

export const ThemeSwitch = () => {
	const { setTheme } = useTheme();
	const [isSelected, setIsSelected] = useState(true);

	return (
	<Switch
		isSelected={isSelected}
		onValueChange={(isSelected) => {
			setIsSelected(isSelected)
			isSelected ? setTheme("dark") : setTheme("light");
		}}
		size="lg"
		color="default"
			thumbIcon={({ isSelected, className }) =>
				isSelected ? (
					<MdDarkMode className={className} />
				) : (
					<MdLightMode className={className} />
				)
			} />
	)
}
