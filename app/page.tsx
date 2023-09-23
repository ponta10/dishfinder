'use client'
import { SearchPage } from '@/components/pages/Sp/SearchPage'
import { SpTop } from '@/components/pages/Sp/Top'
import { Top } from '@/components/pages/Top'
import { mediaQuery, useMediaQuery } from '@/hooks/useMediaQeury'
import { useState } from 'react'

export default function Home() {
  const isSp = useMediaQuery(mediaQuery.sp)
  const [search, setSearch] = useState<boolean>(false)

  if (isSp) {
    if (search) {
      return <SearchPage setSearch={setSearch} />
    } 
    return <SpTop setSearch={setSearch} />
  }

  return <Top />
}
