import React from 'react';
import styled from 'styled-components';
import { RatingStar } from '../../atoms/Star'; // RatingStarコンポーネントの正しいパスを指定してください

interface RatingProps {
  value: number; // 0 to 5
}

const RatingContainer = styled.div`
  display: inline-block;
`;

const StarsContainer = styled.div`
  display: flex;
`;

const ValueText = styled.span`
  display: block;
  text-align: center;
  margin-top: 4px;
`;

export const Rating: React.FC<RatingProps> = ({ value }) => {
  const fullStars = Math.floor(value);
  const partialStar = value - fullStars;
  const emptyStars = 5 - Math.ceil(value);

  return (
    <RatingContainer>
      <StarsContainer>
        {[...Array(fullStars)].map((_, index) => (
          <RatingStar key={index} value={1} />
        ))}
        {partialStar > 0 && <RatingStar value={partialStar} />}
        {[...Array(emptyStars)].map((_, index) => (
          <RatingStar key={`empty-${index}`} value={0} />
        ))}
      </StarsContainer>
      <ValueText>{value.toFixed(1)}</ValueText>
    </RatingContainer>
  );
};

