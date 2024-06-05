import { NavbarNotInSession } from './nav'

export type ImageProps = {
  size?: number
  width: number | undefined
  height: number | undefined
}

export const Navbar = async () => {
  return <NavbarNotInSession />
}
