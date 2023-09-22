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
  font-size: 22px;
  font-weight: bold;
`

export const StoreCard: React.FC<StoreCardProps> = ({
  tabelog,
  google,
  lunch,
  dinner,
  name,
  link,
}) => {
  return (
    <Card width="70%">
      <Container>
        <Rating value={tabelog} size={40} />
        <StoreLink href={link}>{name}</StoreLink>
        <Price lunch={lunch} dinner={dinner} />
        <Rating value={google} size={40} />
      </Container>
    </Card>
  )
}
