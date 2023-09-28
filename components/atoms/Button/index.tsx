import React from 'react'
import styled from 'styled-components'
import { lighten, darken } from 'polished';

export interface ButtonProps {
  bgcolor?: string
  textcolor?: string
  text?: string
  width?: string | number
  fontSize?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  onClick?: () => void
}

const StyledButton = styled.button<{
  $bgcolor?: string
  $textcolor?: string
  width?: string | number
  fontSize?: string
}>`
  background-color: ${(props) => props.$bgcolor || 'blue'};
  color: ${(props) => props.$textcolor || 'white'};
  width: ${(props) =>
    typeof props.width === 'number'
      ? `${props.width}px`
      : props.width || 'auto'};
  font-size: ${(props) => props.fontSize || '16px'};
  padding: 4px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.1s;

  &:hover {
    filter: brightness(105%);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`

export const Button: React.FC<ButtonProps> = ({
  text,
  bgcolor,
  textcolor,
  ...props
}) => {
  return (
    <StyledButton $bgcolor={bgcolor} $textcolor={textcolor} {...props}>
      {text}
    </StyledButton>
  )
}
