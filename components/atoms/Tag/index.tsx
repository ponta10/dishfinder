import React from 'react'
import styled from 'styled-components'

interface TagProps {
  text: string
  bgcolor?: string
  onClick?: () => void
  width?: string | number
}

const TagBox = styled.div<{ $bgcolor?: string; width?: string | number }>`
  background-color: ${(props) => props.$bgcolor || 'blue'};
  color: #000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  padding: 8px 20px;
  width: ${(props) =>
    typeof props.width === 'number'
      ? `${props.width}px`
      : props.width || 'auto'};
  display: inline-block;
  cursor: pointer;
  font-size: 12px;
`

export const Tag: React.FC<TagProps> = ({ text, bgcolor, onClick, width }) => {
  return (
    <TagBox $bgcolor={bgcolor} onClick={onClick} width={width}>
      {text}
    </TagBox>
  )
}
