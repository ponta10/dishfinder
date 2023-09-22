import React from 'react'
import styled from 'styled-components'

interface CardProps {
  bgColor?: string
  width?: string | number
  children?: React.ReactNode
}

const StyledCard = styled.div<CardProps>`
  background-color: ${(props) => props.bgColor || '#fff'};
  width: ${(props) =>
    typeof props.width === 'number'
      ? `${props.width}px`
      : props.width || '100%'};
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`

export const Card: React.FC<CardProps> = ({ bgColor, width, children }) => {
  return (
    <StyledCard bgColor={bgColor} width={width}>
      {children}
    </StyledCard>
  )
}
