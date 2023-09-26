import { Header } from '@/components/organisms/Header'
import { StoreCard } from '@/components/organisms/StoreCard'
import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import GoogleMap from '../../../public/google_maps.png'
import { ResponseType, Store } from '@/utils/type'

interface StorePageProps {
  items: ResponseType
  searchParams?: URLSearchParams
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  margin-top: 240px;
`

const IconWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 80px;
  width: 75%;
  box-sizing: border-box;
`

const Tabelog = styled.p`
  font-size: 24px;
  font-weight: bold;
`

export const StorePage: React.FC<StorePageProps> = ({
  items,
  searchParams,
}) => {
  const genre = searchParams?.get('genre')
  return (
    <div>
      <Header searchParams={searchParams} />
      <Container>
        <IconWrapper>
          <Tabelog>食べログ</Tabelog>
          <Image width={60} height={60} src={GoogleMap} alt="GoogleMap" />
        </IconWrapper>
        {items?.[`${genre}`]?.map((value: Store, i: number) => (
          <StoreCard
            tabelog={Number(value.score)}
            google={Number(value.google_rating)}
            lunch={value.lunch}
            dinner={value.dinner}
            name={value.store_name}
            link={value.link}
            key={i}
            width="75%"
          />
        ))}
      </Container>
    </div>
  )
}
