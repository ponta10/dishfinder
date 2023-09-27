import { StoreCard } from '@/components/organisms/StoreCard/sp'
import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import GoogleMap from '../../../../public/google_maps.png'
import { Header } from '@/components/organisms/Header/sp'
import { Store } from '@/utils/type'

interface StorePageProps {
  setSearch: (value: boolean) => void
  items: any
  searchParams?: URLSearchParams
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 80px;
  margin-bottom: 40px;
`

const IconWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  width: 90%;
  box-sizing: border-box;
`

const Tabelog = styled.p`
  font-size: 14px;
  font-weight: bold;
`

export const SpStorePage: React.FC<StorePageProps> = ({
  setSearch,
  items,
  searchParams,
}) => {
  const genre = searchParams?.get('genre')
  return (
    <div>
      <Header setSearch={setSearch} searchParams={searchParams} />
      <Container>
        <IconWrapper>
          <Tabelog>食べログ</Tabelog>
          <Image width={30} height={30} src={GoogleMap} alt="GoogleMap" />
        </IconWrapper>
        {items?.[`${genre}`]?.map((value: Store, index: number) => (
          <StoreCard
            tabelog={value?.score}
            google={value?.google_rating}
            lunch={value?.lunch}
            dinner={value?.dinner}
            name={value?.store_name}
            link={value?.link}
            key={index}
            width="90%"
          />
        ))}
      </Container>
    </div>
  )
}
