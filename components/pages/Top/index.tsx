import { Header } from '@/components/organisms/Header'
import React from 'react'
import styled from 'styled-components'
import foodImage from '../../../public/food.jpg'
import Image from 'next/image'
import logo from '../../../public/logo.png'

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
  transform: translate(-50%, -40%);
  text-align: center;
  z-index: 2;
`

export const Top = () => {
  return (
    <Container>
      <Header isLabelWhite />
      <TitleWrapper>
        <Image src={logo} width={400} height={400} alt="ロゴ" priority />
      </TitleWrapper>
    </Container>
  )
}
