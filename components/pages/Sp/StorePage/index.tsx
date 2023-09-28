import { StoreCard } from '@/components/organisms/StoreCard/sp'
import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import GoogleMap from '../../../../public/google_maps.png'
import { Header } from '@/components/organisms/Header/sp'
import { ResponseType, Store } from '@/utils/type'
import { genreList } from '@/utils/const'

interface StorePageProps {
  setSearch: (value: boolean) => void
  items: ResponseType
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

const GenreContainer = styled.div`
  width: 92%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`

const NotFound = styled.p`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
`

export const SpStorePage: React.FC<StorePageProps> = ({
  setSearch,
  items,
  searchParams,
}) => {
  return (
    <div>
      <Header setSearch={setSearch} searchParams={searchParams} />
      <Container>
        <IconWrapper>
          <Tabelog>食べログ</Tabelog>
          <Image width={30} height={30} src={GoogleMap} alt="GoogleMap" />
        </IconWrapper>
        {Object.keys(items).map((genre) => (
          <GenreContainer key={genre}>
            {Object.keys(items).length > 1 && (
              <h2>{genreList?.find((item) => item.code === genre)?.value}</h2>
            )}
            {items[genre].length === 0 ? (
              <div>
                <NotFound>データがありません。</NotFound>
                <NotFound>検索条件を変えてもう一度検索してください。</NotFound>
              </div>
            ) : (
              items[genre].map((value: Store, i: number) => (
                <StoreCard
                  tabelog={Number(value.score)}
                  google={Number(value.google_rating)}
                  lunch={value.lunch}
                  dinner={value.dinner}
                  name={value.store_name}
                  link={value.link}
                  key={i}
                  width="100%"
                />
              ))
            )}
          </GenreContainer>
        ))}
      </Container>
    </div>
  )
}
