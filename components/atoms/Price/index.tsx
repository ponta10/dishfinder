import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import sun from '../../../public/sun.png'
import moon from '../../../public/moon.png'

interface PriceProps {
  lunch: string
  dinner: string
  iconSize?: number
  fontSize?: string
}

const Container = styled.div`
  display: block;
  margin-top: 8px;
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 8px;
  justify-content: center;
`

const Amount = styled.p<{ fontSize?: string }>`
  font-size: ${(props) => props.fontSize || '1rem'};
  white-space: nowrap;
`

export const Price: React.FC<PriceProps> = ({
  lunch,
  dinner,
  iconSize,
  fontSize,
}) => {
  return (
    <Container>
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
