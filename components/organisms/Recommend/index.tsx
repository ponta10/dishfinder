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
}

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  background-color: #fff;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 50px;
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

  const filterItems = items?.filter((item) => item.value.includes(val))

  return (
    <Container>
      <p>候補</p>
      {filterItems &&
        filterItems.map((item, index) => (
          <Tag
            onClick={() => handleClick(item?.value, item?.code)}
            text={item?.value}
            key={index}
            bgcolor="##faf8f5"
          />
        ))}
    </Container>
  )
}
