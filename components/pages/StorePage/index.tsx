import { Header } from '@/components/organisms/Header'
import { StoreCard } from '@/components/organisms/StoreCard'
import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import GoogleMap from '../../../public/google_maps.png'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  margin-top: 250px;
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

export const StorePage = () => {
  return (
    <div>
      <Header />
      <Container>
        <IconWrapper>
          <Tabelog>食べログ</Tabelog>
          <Image width={60} height={60} src={GoogleMap} alt="GoogleMap" />
        </IconWrapper>
        {[...Array(8)].map((_, i) => (
          <StoreCard
            tabelog={3.49}
            google={4.2}
            lunch="¥1,000~1,999"
            dinner="¥3,000~3,999"
            name="ホームズパスタ 渋谷店"
            link="https://tabelog.com/tokyo/A1303/A130301/13010478/"
            key={i}
            width="75%"
          />
        ))}
      </Container>
    </div>
  )
}
