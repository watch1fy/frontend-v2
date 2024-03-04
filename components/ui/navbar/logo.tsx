"use client"
import { useTheme } from 'next-themes'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const Logo = () => {
  const [mounted, setMounted] = useState<boolean>();
  const { theme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <Image
      priority
      width={180}
      height={60}
      alt="logo"
      src={theme === "light" ? "/llogol.svg" : "/llogod.svg"}
    />
  )
}

export default Logo
