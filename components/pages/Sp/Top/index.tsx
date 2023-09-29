import React, { useState } from 'react'
import styled from 'styled-components'
import foodImage from '../../../../public/sp_food.jpg'
import { SearchBox } from '@/components/organisms/SearchBox'
import Image from 'next/image'
import logo from '../../../../public/logo.png'
import { BsQuestionSquare } from 'react-icons/bs'
import { Modal } from '@/components/organisms/Modal'
import { HelpModal } from '@/components/organisms/Modal/HelpModal/sp'

interface TopProps {
  setSearch: (value: boolean) => void
  setFocus: (value: string) => void
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
  display: flex;
  justify-content: center;
  width: 100%;
`

const SearchContainer = styled.div`
  position: absolute;
  width: 100%;
  bottom: 30px;
  left: 0;
`

const IconWrapper = styled.div`
  position: absolute;
  bottom: 36px;
  right: 36px;
  cursor: pointer;

  &::after {
    content: 'ガイド';
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
    color: #000;
    width: 100%;
    text-align: center;
    font-size: 12px;
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
  width: 36px;
  height: 36px;
  color: #000;
`

export const SpTop: React.FC<TopProps> = ({ setSearch, setFocus }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <Container>
      <ImageContainer>
        <TitleWrapper>
          <Image width={240} height={240} src={logo} alt="ロゴ" priority />
        </TitleWrapper>
      </ImageContainer>
      <SearchContainer>
        <SearchBox setSearch={setSearch} setFocus={setFocus} />
      </SearchContainer>
      <IconWrapper onClick={() => setIsOpen(true)}>
        <QuestionIcon />
      </IconWrapper>
      <Modal open={isOpen} onClose={() => setIsOpen(false)} width={300}>
        <HelpModal />
      </Modal>
    </Container>
  )
}
