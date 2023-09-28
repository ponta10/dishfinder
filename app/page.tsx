'use client'
import { SearchPage } from '@/components/pages/Sp/SearchPage'
import { SpTop } from '@/components/pages/Sp/Top'
import { Top } from '@/components/pages/Top'
import { useState, useEffect } from 'react'

export default function Home() {
  const [width, setWidth] = useState<number>(0)
  const [search, setSearch] = useState<boolean>(false)
  const [focus, setFocus] = useState<string>('')

  useEffect(() => {
    setWidth(window.innerWidth)

    const handleResize = () => {
      setWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const isMobile = width <= 768

  if (isMobile) {
    if (search) {
      return <SearchPage setSearch={setSearch} focus={focus} />
    }
    return <SpTop setSearch={setSearch} setFocus={setFocus} />
  }

  return <Top />
}
