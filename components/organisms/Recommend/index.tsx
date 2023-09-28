import { Tag } from '@/components/atoms/Tag'
import { Area } from '@/utils/const'
import React from 'react'
import styled from 'styled-components'

interface RecommendProps {
  setValue: (name: string, value: string) => void
  name: string
  setArea: (name: string) => void
  setGenre: (name: string) => void
  setName: (name: string) => void
  items?: Area[]
  val: string
  setVal: (val: string) => void
  sp?: boolean
}

const Container = styled.div<{ $sp?: boolean }>`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  background-color: #fff;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  position: ${(props) => (props.$sp ? 'relative' : 'absolute')};
  top: ${(props) => (props.$sp ? '0px' : '50px')};
  left: 0;
  width: 100%;
  z-index: 10;
`

export const Recommend: React.FC<RecommendProps> = ({
  setValue,
  name,
  setArea,
  setGenre,
  items,
  setName,
  val,
  setVal,
  sp,
}) => {
  const handleClick = (value: string, code: string) => {
    setValue(name, value)
    if (name === 'area') {
      setArea(code)
    } else if (name === 'genre') {
      setGenre(code)
    }
    setName('')
    setVal('')
  }

  const filterItems = items?.filter(
    (item) =>
      (item.value && item.value.startsWith(val)) ||
      (item.kana && item.kana.startsWith(val))
  )

  return (
    <Container $sp={sp}>
      {filterItems &&
        filterItems.map((item, index) => (
          <Tag
            onClick={() => handleClick(item?.value, item?.code)}
            text={item?.value}
            key={index}
            bgcolor="rgb(250, 248, 245)"
          />
        ))}
    </Container>
  )
}
