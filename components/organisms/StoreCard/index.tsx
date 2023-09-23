import { Card } from '@/components/atoms/Card'
import React from 'react'
import styled from 'styled-components'
import { Rating } from '../Rating'
import { Price } from '@/components/atoms/Price'

interface StoreCardProps {
  tabelog: number
  google: number
  lunch: string
  dinner: string
  name: string
  link: string
  width?: string | number
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 12px;
`

const StoreLink = styled.a`
  text-decoration: none;
  color: #66a3e0;
  font-size: 20px;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
    color: #ffa234;
  }
`

export const StoreCard: React.FC<StoreCardProps> = ({
  tabelog,
  google,
  lunch,
  dinner,
  name,
  link,
  width,
}) => {
  return (
    <Card width={width}>
      <Container>
        <Rating value={tabelog} size={40} />
        <StoreLink href={link} target="_blank" rel="noopener noreferrer">
          {name}
        </StoreLink>
        <Price lunch={lunch} dinner={dinner} iconSize={32} />
        <Rating value={google} size={40} />
      </Container>
    </Card>
  )
}
