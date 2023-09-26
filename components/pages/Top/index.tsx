import { Header } from '@/components/organisms/Header'
import React from 'react'
import styled from 'styled-components'
import foodImage from '../../../public/food.jpg'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${foodImage.src});
  background-size: cover;
`

const TitleWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 2;
`

const Title = styled.p`
  font-size: 64px;
  font-weight: bold;
  color: #fff;
`

const SubTitle = styled.p`
  font-size: 28px;
  color: #fff;
`

export const Top = () => {
  return (
    <Container>
      <Header isLabelWhite />
      <TitleWrapper>
        <Title>TabeloGooglemap</Title>
        <SubTitle>〜お店選びをもっと簡単に〜</SubTitle>
      </TitleWrapper>
    </Container>
  )
}
