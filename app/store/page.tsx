'use client'
import { SearchPage } from '@/components/pages/Sp/SearchPage'
import { SpStorePage } from '@/components/pages/Sp/StorePage'
import { StorePage } from '@/components/pages/StorePage'
import { mediaQuery, useMediaQuery } from '@/hooks/useMediaQeury'
import React, { useState } from 'react'

const store = () => {
  const isSp = useMediaQuery(mediaQuery.sp)
  const [search, setSearch] = useState<boolean>(false)

  if (isSp) {
    if (search) {
      return <SearchPage setSearch={setSearch} />
    }
    return <SpStorePage setSearch={setSearch} />
  }
  return <StorePage />
}

export default store
