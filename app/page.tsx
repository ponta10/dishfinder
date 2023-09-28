'use client'
import { SearchPage } from '@/components/pages/Sp/SearchPage'
import { SpTop } from '@/components/pages/Sp/Top'
import { Top } from '@/components/pages/Top'
import { useState } from 'react'

export default function Home() {
  const width = window.innerWidth;
  const isMobile = width <= 768;
  const [search, setSearch] = useState<boolean>(false)
  const [focus, setFocus] = useState<string>('')

  if (isMobile) {
    if (search) {
      return <SearchPage setSearch={setSearch} focus={focus} />
    }
    return <SpTop setSearch={setSearch} setFocus={setFocus} />
  }

  return <Top />
}
