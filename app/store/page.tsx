'use client'
import { SearchPage } from '@/components/pages/Sp/SearchPage'
import { SpStorePage } from '@/components/pages/Sp/StorePage'
import { StorePage } from '@/components/pages/StorePage'
import { useWindowWidth } from '@/hooks/useWindowWidth'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { ResponseType, StoreParams } from '@/utils/type'
import axios from 'axios'
import { genreList } from '@/utils/const'
import { Spinner } from '@/components/atoms/Spinner'
import { Error } from '@/components/pages/Error'

const store = () => {
  const width = useWindowWidth();
  const isMobile = width <= 768;
  const [search, setSearch] = useState<boolean>(false)
  const searchParams = useSearchParams()
  const [items, setItems] = useState<ResponseType>({})

  const getRandomGenres = (count: number = 2): string[] => {
    const shuffled = genreList.sort(() => 0.5 - Math.random())
    return shuffled.slice(0, count).map((genre) => genre.code)
  }

  const [hasMounted, setHasMounted] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isError, setIsError] = useState<boolean>(false)

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
        min_price: searchParams.get('min') || '0',
        max_price: searchParams.get('max') || '0',
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

      try {
        setIsLoading(true)
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}`, {
          params,
        })
        setItems(response.data)
      } catch (err) {
        setIsError(true)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [searchParams, hasMounted])

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <Error />
  }

  if (isMobile) {
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
