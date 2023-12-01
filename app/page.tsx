'use client'
import { SearchPage } from '@/components/pages/Sp/SearchPage'
import { SpTop } from '@/components/pages/Sp/Top'
import { Top } from '@/components/pages/Top'
import { useWindowWidth } from '@/hooks/useWindowWidth'
import { useState } from 'react'
import { Map, StoreLocation } from '../components/organisms/Map';

export default function Home() {
  const width = useWindowWidth()
  const isMobile = width <= 768
  const [search, setSearch] = useState<boolean>(false)
  const [focus, setFocus] = useState<string>('')

  if (isMobile) {
    if (search) {
      return <SearchPage setSearch={setSearch} focus={focus} />
    }
    return <SpTop setSearch={setSearch} setFocus={setFocus} />
  }

  const storeLocations: StoreLocation[] = [
    {
      id: 1,
      name: "店舗1",
      location: { lat: -34.397, lng: 150.644 }
    },
    {
      id: 2,
      name: "店舗2",
      location: { lat: -34.399, lng: 150.648 }
    }
    // 他の店舗を追加
  ];

  return (
    <div>
      <h1>飲食店の地図</h1>
      <Map storeLocations={storeLocations} />
    </div>
  );

  return <Top />
}
