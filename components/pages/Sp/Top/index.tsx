import React from 'react'
import styled from 'styled-components'
import foodImage from '../../../../public/sp_food.jpg'
import { SearchBox } from '@/components/organisms/SearchBox'

interface TopProps {
    setSearch: (value: boolean) => void
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`

const ImageContainer = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url(${foodImage.src});
  background-size: cover;
  position: relative;
  width: 100%;
  height: 60%;
`

const TitleWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`

const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: #fff;
`

const SubTitle = styled.h2`
  font-size: 14px;
  color: #fff;
`

const SearchContainer = styled.div`
  position: absolute;
  width: 100%;
  bottom: 30px;
  left: 0;
`

export const SpTop: React.FC<TopProps> = ({
    setSearch
}) => {
  return (
    <Container>
      <ImageContainer>
        <TitleWrapper>
          <Title>TabeloGooglemap</Title>
          <SubTitle>〜お店選びをもっと簡単に〜</SubTitle>
        </TitleWrapper>
      </ImageContainer>
      <SearchContainer>
        <SearchBox setSearch={setSearch} />
      </SearchContainer>
    </Container>
  )
}
