import React from 'react'
import styled from 'styled-components'
import { FaStar } from 'react-icons/fa'

interface StarProps {
  fillPercentage: number
}

const StarContainer = styled.div`
  position: relative;
  display: inline-block;
  color: #ccc;
`

const FilledStar = styled.div<StarProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: ${(props) => props.fillPercentage * 100}%;
  height: 100%;
  color: #ffa234;
  overflow: hidden;
  white-space: nowrap;
`

interface RatingStarProps {
  value: number // 0 to 1
}

export const RatingStar: React.FC<RatingStarProps> = ({ value }) => {
  return (
    <StarContainer>
      <FaStar size={24} />
      <FilledStar fillPercentage={value}>
        <FaStar size={24} />
      </FilledStar>
    </StarContainer>
  )
}
