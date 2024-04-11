'use client'
import React from 'react'
import styled from 'styled-components'
import { AiOutlineSearch } from 'react-icons/ai'
import { Button } from '@/components/atoms/Button/'
import { areaList, genreList } from '@/utils/const'
import Image from 'next/image'
import logo from '../../../public/blackLogo.png'
import { useRouter } from 'next/navigation'
import { theme } from '@/styles/theme.css'

interface HeaderProps {
  setSearch: (value: boolean) => void
  searchParams?: URLSearchParams
}

const Container = styled.div`
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 64px;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  gap: 8px;
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

export const Header: React.FC<HeaderProps> = ({ setSearch, searchParams }) => {
  const router = useRouter()
  return (
    <Container>
      <Image
        width={60}
        height={60}
        src={logo}
        alt="ロゴ"
        onClick={() => router.push('/')}
        style={{ cursor: 'pointer' }}
        priority
      />
      <Wrapper onClick={() => setSearch(true)}>
        <SearchTextArea>
          <AiOutlineSearch size={24} />
          <p>
            {
              areaList?.find((item) => item?.code === searchParams?.get('area'))
                ?.value
            }{' '}
            {
              genreList?.find(
                (item) => item?.code === searchParams?.get('genre')
              )?.value
            }
          </p>
        </SearchTextArea>
        <Button bgcolor="transparent" textcolor={theme.color.primary} text="変更" />
      </Wrapper>
    </Container>
  )
}
