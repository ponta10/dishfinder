import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import sun from '../../../public/sun.png'
import moon from '../../../public/moon.png'

interface PriceProps {
  lunch: string
  dinner: string
  flex?: boolean
  iconSize?: number
  fontSize?: string
}

const Container = styled.div<{ $flex?: boolean }>`
  display: ${(props) => (props.$flex ? 'flex' : 'block')};
  alignitems: center;
  gap: 12px;
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 8px;
`

const Amount = styled.p<{ fontSize?: string }>`
  font-size: ${(props) => props.fontSize || '1rem'};
`

export const Price: React.FC<PriceProps> = ({
  lunch,
  dinner,
  flex,
  iconSize,
  fontSize,
}) => {
  return (
    <Container $flex={flex}>
      <Wrapper>
        <Image width={iconSize} height={iconSize} src={sun} alt="太陽"></Image>
        <Amount fontSize={fontSize}>{lunch}</Amount>
      </Wrapper>
      <Wrapper>
        <Image width={iconSize} height={iconSize} src={moon} alt="月"></Image>
        <Amount fontSize={fontSize}>{dinner}</Amount>
      </Wrapper>
    </Container>
  )
}
