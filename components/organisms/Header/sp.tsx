import React from 'react'
import styled from 'styled-components'
import { AiOutlineSearch } from 'react-icons/ai'
import { Button } from '@/components/atoms/Button'

const Container = styled.div`
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 60px;
  padding: 16px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  z-index: 2;
`

const Wrapper = styled.div`
  background-color: #f4f4f4;
  width: 100%;
  height: 50%;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 4px;
`

const SearchTextArea = styled.div`
  display: flex;
  gap: 12px;
`

export const Header = () => {
  return (
    <Container>
      <Wrapper>
        <SearchTextArea>
          <AiOutlineSearch size={24} />
          <p>渋谷 イタリアン</p>
        </SearchTextArea>
        <Button bgColor="transparent" textColor="#FFA234" text="変更" />
      </Wrapper>
    </Container>
  )
}
