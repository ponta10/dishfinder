import React from 'react'
import styled from 'styled-components'

interface TagProps {
  text: string
  bgColor?: string
  onClick?: () => void
}

const TagBox = styled.div<{ bgColor?: string }>`
  background-color: ${(props) => props.bgColor || 'blue'};
  color: #000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  padding: 8px 20px;
`

export const Tag: React.FC<TagProps> = ({ text, bgColor, onClick }) => {
  return (
    <TagBox bgColor={bgColor} onClick={onClick}>
      {text}
    </TagBox>
  )
}
