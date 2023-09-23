'use client'
import { SearchPage } from '@/components/pages/Sp/SearchPage'
import { mediaQuery, useMediaQuery } from '@/hooks/useMediaQeury'
import React, { useState } from 'react'

const search = () => {
  const isSp = useMediaQuery(mediaQuery.sp)
  const [search, setSearch] = useState<boolean>(false)

  if (isSp) {
    return <SearchPage setSearch={setSearch} />
  }
  return <div>search</div>
}

export default search
