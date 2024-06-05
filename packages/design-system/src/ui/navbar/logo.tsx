'use client'
import Image from 'next/image'

const Logo = () => {
  return (
    <>
      <Image
        priority
        width={120}
        height={40}
        alt="logo"
        className="lg:block hidden"
        src={'/llogod.svg'}
      />
      <Image
        priority
        width={105}
        height={35}
        alt="logo"
        className="lg:hidden"
        src={'/llogod.svg'}
      />
    </>
  )
}

export default Logo
