'use client'
import { Header } from '@/components/organisms/Header'
import { StoreCard } from '@/components/organisms/StoreCard'
import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import GoogleMap from '../../../public/google_maps.png'
import { ResponseType, Store } from '@/utils/type'
import logo from '../../../public/blackLogo.png'
import { useRouter } from 'next/navigation'

interface StorePageProps {
  items: ResponseType
  searchParams?: URLSearchParams
}

const LogoContainer = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  margin-top: 240px;
  margin-bottom: 80px;
`

const IconWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 100px;
  width: 75%;
  box-sizing: border-box;
`

const Tabelog = styled.p`
  font-size: 18px;
  font-weight: bold;
`

export const StorePage: React.FC<StorePageProps> = ({
  items,
  searchParams,
}) => {
  const router = useRouter()
  const genre = searchParams?.get('genre')
  return (
    <div>
      <LogoContainer>
        <Image
          width={80}
          height={80}
          src={logo}
          alt="ロゴ"
          onClick={() => router.push('/')}
          style={{ cursor: 'pointer' }}
          priority
        />
      </LogoContainer>
      <Header searchParams={searchParams} />
      <Container>
        <IconWrapper>
          <Tabelog>食べログ</Tabelog>
          <Image width={40} height={40} src={GoogleMap} alt="GoogleMap" />
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
