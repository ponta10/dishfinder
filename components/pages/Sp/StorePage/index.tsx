import { StoreCard } from '@/components/organisms/StoreCard/sp'
import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import GoogleMap from '../../../../public/google_maps.png'
import { Header } from '@/components/organisms/Header/sp'

interface StorePageProps {
    setSearch: (value: boolean) => void
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 80px;
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
    setSearch
}) => {
  return (
    <div>
      <Header setSearch={setSearch} />
      <Container>
        <IconWrapper>
          <Tabelog>食べログ</Tabelog>
          <Image width={30} height={30} src={GoogleMap} alt="GoogleMap" />
        </IconWrapper>
        {[...Array(12)].map((_, i) => (
          <StoreCard
            tabelog={3.49}
            google={4.2}
            lunch="¥1,000~1,999"
            dinner="¥3,000~3,999"
            name="ホームズパスタ 渋谷店"
            link="https://tabelog.com/tokyo/A1303/A130301/13010478/"
            key={i}
            width="90%"
          />
        ))}
      </Container>
    </div>
  )
}
