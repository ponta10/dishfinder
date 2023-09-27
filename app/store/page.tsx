'use client'
import { SearchPage } from '@/components/pages/Sp/SearchPage'
import { SpStorePage } from '@/components/pages/Sp/StorePage'
import { StorePage } from '@/components/pages/StorePage'
import { mediaQuery, useMediaQuery } from '@/hooks/useMediaQeury'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { ResponseType, StoreParams } from '@/utils/type'
import axios from 'axios'
import { genreList } from '@/utils/const'

const store = () => {
  const isSp = useMediaQuery(mediaQuery.sp)
  const [search, setSearch] = useState<boolean>(false)
  const searchParams = useSearchParams()
  const [items, setItems] = useState<ResponseType>({})

  const getRandomGenres = (count: number = 3): string[] => {
    const shuffled = genreList.sort(() => 0.5 - Math.random())
    return shuffled.slice(0, count).map((genre) => genre.code)
  }

  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  useEffect(() => {
    if (!hasMounted) return
    const genreValue = searchParams.get('genre')
    let genres: string

    if (genreValue === 'random') {
      genres = getRandomGenres().join(',')
    } else {
      genres = genreValue ?? ''
    }

    const fetchData = async () => {
      const params: StoreParams = {
        prefecture: 'tokyo',
        area: searchParams.get('area') ?? '',
        genre: genres,
        min_price: searchParams.get('min') ?? '',
        max_price: searchParams.get('max') ?? '',
      }

      if (searchParams.get('isAllDrinks')) {
        params.isAllDrinks = searchParams.get('isAllDrinks') ?? ''
      }
      if (searchParams.get('isAllEats')) {
        params.isAllEats = searchParams.get('isAllEats') ?? ''
      }
      if (searchParams.get('isLunch')) {
        params.isLunch = searchParams.get('isLunch') ?? ''
      }

      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}`, {
        params,
      })
      setItems(response.data)
    }

    fetchData()
  }, [searchParams, hasMounted])

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
