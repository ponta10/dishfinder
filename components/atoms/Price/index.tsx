import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import sun from '../../../public/sun.png'
import moon from '../../../public/moon.png'

interface PriceProps {
  lunch: string
  dinner: string
}

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

const Amount = styled.p`
  font-size: 16px;
`

export const Price: React.FC<PriceProps> = ({ lunch, dinner }) => {
  return (
    <div>
      <Container>
        <Image width={40} height={40} src={sun} alt="太陽"></Image>
        <Amount>{lunch}</Amount>
      </Container>
      <Container>
        <Image width={40} height={40} src={moon} alt="月"></Image>
        <Amount>{dinner}</Amount>
      </Container>
    </div>
  )
}
