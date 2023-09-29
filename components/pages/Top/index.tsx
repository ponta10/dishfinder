import { Header } from '@/components/organisms/Header'
import React, { useState } from 'react'
import styled from 'styled-components'
import foodImage from '../../../public/food.jpg'
import Image from 'next/image'
import logo from '../../../public/logo.png'
import { BsQuestionSquare } from 'react-icons/bs'
import { Modal } from '@/components/organisms/Modal'
import { HelpModal } from '@/components/organisms/Modal/HelpModal'

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

const IconWrapper = styled.div`
  position: absolute;
  bottom: 80px;
  right: 80px;
  cursor: pointer;

  &::after {
    content: 'ガイド';
    position: absolute;
    bottom: -30px;
    left: 50%;
    transform: translateX(-50%);
    color: #fff;
    width: 100%;
    text-align: center;
  }

  &:hover {
    &::after {
      filter: brightness(105%);
      color: #ffa234;
    }

    & svg {
      filter: brightness(105%);
      color: #ffa234;
    }
  }
`

const QuestionIcon = styled(BsQuestionSquare)`
  width: 48px;
  height: 48px;
  color: #fff;
`

export const Top = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <Container>
      <Header isLabelWhite />
      <TitleWrapper>
        <Image src={logo} width={400} height={400} alt="ロゴ" priority />
      </TitleWrapper>
      <IconWrapper onClick={() => setIsOpen(true)}>
        <QuestionIcon />
      </IconWrapper>
      <Modal open={isOpen} onClose={() => setIsOpen(false)} width={600}>
        <HelpModal />
      </Modal>
    </Container>
  )
}
