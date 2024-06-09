'use client'
import Image from 'next/image'
import { useIsTablet } from '@watchify/lib'

const Logo = () => {
  const isTab = useIsTablet();
  return (
    <Image
      priority
      width={isTab ? 105 : 120}
      height={isTab ? 35 : 40}
      alt="logo"
      src={'/llogod.svg'}
    />
  );
}

export default Logo
