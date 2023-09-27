import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { Form } from '../Form'
import { z } from 'zod'
import { TextField } from '@/components/atoms/TextField'
import { Select } from '@/components/atoms/Select'
import { Checkbox } from '@/components/atoms/Checkbox'
import { Button } from '@/components/atoms/Button'
import { useRouter } from 'next/navigation'
import { Recommend } from '../Recommend'
import { areaList, genreList, price, situation } from '@/utils/const'
import { customErrorMap, formSchema } from '@/utils/zodHelper'

z.setErrorMap(customErrorMap)

const Container = styled.div`
  position: fixed;
  top: 80px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
`

const FlexContainer = styled.div<{ $gap?: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  gap: ${(props) => (props.$gap ? `${props.$gap}px` : 0)};
  position: relative;
`

const FormContainer = styled.div`
  text-align: center;
`

interface HeaderProps {
  isLabelWhite?: boolean
  searchParams?: URLSearchParams
}

export const Header: React.FC<HeaderProps> = ({
  isLabelWhite = false,
  searchParams,
}) => {
  const router = useRouter()
  const labelColor = isLabelWhite ? '#fff' : '#000'
  const [name, setName] = useState<string>('')
  const [area, seArea] = useState<string>(searchParams?.get('area') ?? '')
  const [genre, setGenre] = useState<string>(searchParams?.get('genre') ?? '')
  const [val, setVal] = useState<string>('')
  const items = name === 'area' ? areaList : name === 'genre' ? genreList : []
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node) &&
        items
      ) {
        setName('')
      }
    }

    if (items) {
      // nameが存在するときのみイベントリスナーを追加
      document.addEventListener('click', handleClickOutside)
    }

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  const onSubmit = (data: any) => {
    data.area = area
    data.genre = genre
    for (const key in data) {
      if (data[key] === false) {
        delete data[key]
      }
    }

    const queryParams = new URLSearchParams(data).toString()

    router.push(`/store?${queryParams}`)
  }
  return (
    <Container>
      <Form
        onSubmit={onSubmit}
        schema={formSchema}
        options={{
          defaultValues: {
            area:
              areaList?.find((item) => item?.code === searchParams?.get('area'))
                ?.value || '',
            genre:
              genreList?.find(
                (item) => item?.code === searchParams?.get('genre')
              )?.value || '',
            min: searchParams?.get('min') || '',
            max: searchParams?.get('max') || '',
            situation: searchParams?.get('situation') || '',
          },
        }}
      >
        {({ control, formState, setValue }) => (
          <FormContainer>
            <FlexContainer ref={containerRef}>
              <TextField
                name="area"
                control={control}
                placeholder="エリア(例: 渋谷・新宿)"
                height={48}
                width={200}
                error={!!formState.errors.area}
                helperText={formState.errors.area?.message as string}
                onFocus={() => setName('area')}
                onChange={(e) => setVal(e.target.value)}
              />
              <TextField
                name="genre"
                control={control}
                placeholder="ジャンル(例: イタリアン・中華)"
                height={48}
                width={200}
                error={!!formState.errors.genre}
                helperText={formState.errors.genre?.message as string}
                onFocus={() => setName('genre')}
                onChange={(e) => setVal(e.target.value)}
              />
              <Select
                name="min"
                control={control}
                items={price}
                width={150}
                error={!!formState.errors.budget}
                helperText={formState.errors.budget?.message as string}
                placeholder="下限予算"
                onFocus={() => setName('')}
              />
              <Select
                name="max"
                control={control}
                items={price}
                width={150}
                error={!!formState.errors.budget}
                helperText={formState.errors.budget?.message as string}
                placeholder="上限予算"
                onFocus={() => setName('')}
              />
              <Select
                name="situation"
                control={control}
                items={situation}
                width={150}
                error={!!formState.errors.situation}
                helperText={formState.errors.situation?.message as string}
                placeholder="場面"
                onFocus={() => setName('')}
              />
              {name && (
                <Recommend
                  setValue={setValue}
                  name={name}
                  setArea={seArea}
                  setGenre={setGenre}
                  setName={setName}
                  items={items}
                  val={val}
                  setVal={setVal}
                />
              )}
            </FlexContainer>
            <FlexContainer $gap={24}>
              {/* <Checkbox
                name="isPrivate"
                control={control}
                label="個室あり"
                color={labelColor}
              /> */}
              <Checkbox
                name="isAllDrinks"
                control={control}
                label="飲み放題"
                color={labelColor}
              />
              <Checkbox
                name="isAllEats"
                control={control}
                label="食べ放題"
                color={labelColor}
              />
              <Checkbox
                name="isLunch"
                control={control}
                label="ランチ"
                color={labelColor}
              />
            </FlexContainer>
            <Button
              type="submit"
              text="検索"
              bgcolor="#FFA234"
              width="20%"
              fontSize="20px"
            />
          </FormContainer>
        )}
      </Form>
    </Container>
  )
}
