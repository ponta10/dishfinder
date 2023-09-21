import React from 'react'
import styled from 'styled-components'

export interface ButtonProps {
  bgColor?: string
  textColor?: string
  text?: string
  width?: string | number
  fontSize?: string | number
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  onClick?: () => void
}

const StyledButton = styled.button<ButtonProps>`
  background-color: ${(props) => props.bgColor || 'blue'};
  color: ${(props) => props.textColor || 'white'};
  width: ${(props) =>
    typeof props.width === 'number'
      ? `${props.width}px`
      : props.width || 'auto'};
  font-size: ${(props) => props.fontSize || '16px'};
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`

export const Button: React.FC<ButtonProps> = ({ text, ...props }) => {
  return <StyledButton {...props}>{text}</StyledButton>
}
