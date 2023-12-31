import React from 'react'
import styled from 'styled-components'
import { RatingStar } from '../../atoms/Star'

interface RatingProps {
  value: number
  size?: number
  fontSize?: string
}

const RatingContainer = styled.div`
  display: inline-block;
`

const StarsContainer = styled.div`
  display: flex;
  justify-content: center;
`

const ValueText = styled.span<{ fontSize?: string }>`
  display: block;
  text-align: center;
  margin-top: 4px;
  font-size: ${(props) => props.fontSize || '16px'};
  color: #ffa234;
  font-weight: bold;
`

export const Rating: React.FC<RatingProps> = ({ value, size, fontSize }) => {
  const fullStars = Math.floor(value)
  const partialStar = value - fullStars
  const emptyStars = 5 - Math.ceil(value)

  return (
    <RatingContainer>
      <StarsContainer>
        {[...Array(fullStars)].map((_, index) => (
          <RatingStar key={index} value={1} size={size} />
        ))}
        {partialStar > 0 && <RatingStar value={partialStar} size={size} />}
        {[...Array(emptyStars)].map((_, index) => (
          <RatingStar key={`empty-${index}`} value={0} size={size} />
        ))}
      </StarsContainer>
      <ValueText fontSize={fontSize}>{value}</ValueText>
    </RatingContainer>
  )
}
