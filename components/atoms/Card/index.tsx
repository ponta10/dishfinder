import React from 'react'
import styled from 'styled-components'

interface CardProps {
  bgcolor?: string
  width?: string | number
  children?: React.ReactNode
}

const StyledCard = styled.div<{ $bgcolor?: string; width?: string | number }>`
  background-color: ${(props) => props.$bgcolor || '#fff'};
  width: ${(props) =>
    typeof props.width === 'number'
      ? `${props.width}px`
      : props.width || '100%'};
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`

export const Card: React.FC<CardProps> = ({ bgcolor, width, children }) => {
  return (
    <StyledCard $bgcolor={bgcolor} width={width}>
      {children}
    </StyledCard>
  )
}
