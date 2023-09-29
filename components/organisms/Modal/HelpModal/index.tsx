import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

const ModalTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
`

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  padding: 16px 0;
`

const ImageWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

const StyledImage = styled(Image)`
  height: 100px;
  width: auto;
  margin-bottom: 10px;
`

const StyledText = styled.p`
  margin: 0; // マージンをリセット
  flex: 1;
`

export const HelpModal = () => {
  return (
    <>
      <ModalTitle>■このサイトの特徴</ModalTitle>
      <Box>
        <ImageWrapper>
          <StyledImage width={200} height={100} alt="比較" src="/compare.png" />
          <StyledText>
            食べログとgoogleマップの評価が両方高いお店を表示してより良いお店を探せます。
          </StyledText>
        </ImageWrapper>
        <ImageWrapper>
          <StyledImage
            width={200}
            height={100}
            alt="ジャンル"
            src="/genre.png"
          />
          <StyledText>
            ジャンル選びに困ったときは「なんでも」を選択するとランダムで2ジャンル選んで検索できます。
          </StyledText>
        </ImageWrapper>
      </Box>
    </>
  )
}
