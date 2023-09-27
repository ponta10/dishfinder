'use client'
import { SearchPage } from '@/components/pages/Sp/SearchPage'
import { SpStorePage } from '@/components/pages/Sp/StorePage'
import { StorePage } from '@/components/pages/StorePage'
import { mediaQuery, useMediaQuery } from '@/hooks/useMediaQeury'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { ResponseType } from '@/utils/type'
import axios from 'axios'

const store = () => {
  const isSp = useMediaQuery(mediaQuery.sp)
  const [search, setSearch] = useState<boolean>(false)
  const searchParams = useSearchParams()
  const [items, setItems] = useState<ResponseType>({})
  
  useEffect(() => {
    const fetchData = async () => {
      const params = {
        prefecture: 'tokyo',
        area: searchParams.get('area'),
        genre: searchParams.get('genre'),
        min_price: searchParams.get('min'),
        max_price: searchParams.get('max'),
        isAllDrinks: searchParams?.get('isAllDrinks') ?? '',
        isAllEats: searchParams?.get('isAllEats') ?? '',
        isLunch: searchParams?.get('isLunch') ?? '',
      }

      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}`, { params }
      )
      setItems(response.data)
    }

    fetchData()
  }, [searchParams])

  if (isSp) {
    if (search) {
      return <SearchPage setSearch={setSearch} searchParams={searchParams} />
    }
    return (
      <SpStorePage
        setSearch={setSearch}
        items={items}
        searchParams={searchParams}
      />
    )
  }
  return <StorePage items={items} searchParams={searchParams} />
}

export default store
