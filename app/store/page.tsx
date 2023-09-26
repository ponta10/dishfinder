'use client'
import { SearchPage } from '@/components/pages/Sp/SearchPage'
import { SpStorePage } from '@/components/pages/Sp/StorePage'
import { StorePage } from '@/components/pages/StorePage'
import { mediaQuery, useMediaQuery } from '@/hooks/useMediaQeury'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { ResponseType } from '@/utils/type'

const store = () => {
  const isSp = useMediaQuery(mediaQuery.sp)
  const [search, setSearch] = useState<boolean>(false)
  const searchParams = useSearchParams()
  const [items, setItems] = useState<ResponseType>({})
  useEffect(() => {
    const fetchData = async () => {
      const area = searchParams.get('area')
      const genre = searchParams.get('genre')
      const min = searchParams.get('min')
      const max = searchParams.get('max')

      const response = await fetch(
        `/api/store?prefecture=tokyo&area=${area}&genre=${genre}&min=${min}&max=${max}`
      )
      const data = await response.json()
      setItems(data)
    }

    fetchData()
  }, [])

  if (isSp) {
    if (search) {
      return <SearchPage setSearch={setSearch} />
    }
    return <SpStorePage setSearch={setSearch} />
  }
  return <StorePage items={items} searchParams={searchParams} />
}

export default store
