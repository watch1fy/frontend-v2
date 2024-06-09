import { Button } from '@nextui-org/react'
import {
  NavbarMenu,
  NavbarMenuItem,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/react'
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from '@nextui-org/react'
import { FaAngleDown } from 'react-icons/fa'

export const NavbarMenuMobile = () => {
  return (
    <>
      <NavbarMenu>
        <NavbarMenuItem>Item 1</NavbarMenuItem>
        <NavbarMenuItem>Item 2</NavbarMenuItem>
        <NavbarMenuItem>Item 3</NavbarMenuItem>
      </NavbarMenu>
    </>
  )
}

export const NavbarMenuFull = () => {
  return (
    <>
      <NavbarContent className="hidden md:flex gap-2" justify="center">
        <MenuHome />
        <MenuCategories />
        <MenuWatchlist />
      </NavbarContent>
    </>
  )
}

export const MenuHome = () => {
  return (
    <Dropdown backdrop="blur" className="min-w-0 w-fit">
      <NavbarItem isActive>
        <DropdownTrigger>
          <Button
            disableRipple
            className="bg-transparent data-[hover=true]:bg-transparent data-[hover=true]:text-zinc-400  px-2 py-0 w-fit"
            radius="sm"
            size="lg"
            endContent={<FaAngleDown />}
            variant="light"
          >
            Home
          </Button>
        </DropdownTrigger>
      </NavbarItem>
      <DropdownMenu variant="flat" aria-label="Home">
        <DropdownItem key="all">All</DropdownItem>
        <DropdownItem key="movies">Movies</DropdownItem>
        <DropdownItem key="tv">TV Shows</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}

export const MenuCategories = () => {
  return (
    <Dropdown backdrop="blur" className="min-w-0 w-fit">
      <NavbarItem>
        <DropdownTrigger>
          <Button
            disableRipple
            className="bg-transparent data-[hover=true]:bg-transparent data-[hover=true]:text-zinc-400 px-2 py-0 w-fit"
            radius="sm"
            size="lg"
            endContent={<FaAngleDown />}
            variant="light"
          >
            Categories
          </Button>
        </DropdownTrigger>
      </NavbarItem>
      <DropdownMenu
        variant="flat"
        aria-label="Home"
        itemClasses={{
          base: 'gap-4',
        }}
      >
        <DropdownItem key="all">All</DropdownItem>
        <DropdownItem key="movies">Movies</DropdownItem>
        <DropdownItem key="tv">TV Shows</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}

export const MenuWatchlist = () => {
  return (
    <Button
      disableRipple
      className="bg-transparent data-[hover=true]:bg-transparent data-[hover=true]:text-zinc-400 px-2 py-0 w-fit"
      radius="sm"
      size="lg"
      variant="light"
    >
      Watchlist
    </Button>
  )
}
