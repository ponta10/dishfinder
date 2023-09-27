'use client'
import React, { useState } from 'react'
import styled from 'styled-components'
import { HiArrowLongLeft } from 'react-icons/hi2'
import { TextField } from '@/components/atoms/TextField'
import { Form } from '@/components/organisms/Form'
import { z } from 'zod'
import { Checkbox } from '@/components/atoms/Checkbox'
import { Button } from '@/components/atoms/Button'
import { Select } from '@/components/atoms/Select'
import { customErrorMap, formSchema } from '@/utils/zodHelper'
import { areaList, genreList, price, situation } from '@/utils/const'
import { useRouter } from 'next/navigation'
import { Recommend } from '@/components/organisms/Recommend'

interface SearchPageProps {
  setSearch: (value: boolean) => void
  searchParams?: URLSearchParams
}

z.setErrorMap(customErrorMap)

const SearchHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 80px;
  width: 100vw;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  display: flex;
  align-items: center;
  padding: 0 12px;
  gap: 8px;
`

const TextFieldContainer = styled.div`
  display: flex;
`

const Container = styled.div`
  width: 95%;
  margin: 100px auto;
`

const RecomendText = styled.h3`
  font-size: 16px;
  margin-bottom: 16px;
`

const FlexContainer = styled.div<{ $gap?: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${(props) => (props.$gap ? `${props.$gap}px` : 0)};
`

const FormContainer = styled.div`
  position: absolute;
  bottom: 30px;
  background-color: #fff;
  padding: 24px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
`

export const SearchPage: React.FC<SearchPageProps> = ({
  setSearch,
  searchParams,
}) => {
  const checkboxSize: number = 14
  const checkboxFontSize: string = '10px'
  const [name, setName] = useState<string>('')
  const [area, seArea] = useState<string>(searchParams?.get('area') ?? '')
  const [genre, setGenre] = useState<string>(searchParams?.get('genre') ?? '')
  const [val, setVal] = useState<string>('')
  const items = name === 'area' ? areaList : name === 'genre' ? genreList : []
  const router = useRouter()

  const onSubmit = (data: any) => {
    data.area = area
    data.genre = genre
    const queryParams = new URLSearchParams(data).toString()

    router.push(`/store?${queryParams}`)
  }
  return (
    <Form
      onSubmit={onSubmit}
      schema={formSchema}
      options={{
        defaultValues: {
          area:
            areaList?.find((item) => item?.code === searchParams?.get('area'))
              ?.value || '',
          genre:
            genreList?.find((item) => item?.code === searchParams?.get('genre'))
              ?.value || '',
          min: searchParams?.get('min') || '',
          max: searchParams?.get('max') || '',
          situation: searchParams?.get('situation') || '',
        },
      }}
    >
      {({ control, formState, setValue }) => (
        <>
          <SearchHeader>
            <HiArrowLongLeft size={24} onClick={() => setSearch(false)} />
            <TextFieldContainer>
              <TextField
                name="area"
                control={control}
                placeholder="エリア(例: 渋谷・新宿)"
                height={50}
                width="100%"
                error={!!formState.errors.area}
                helperText={formState.errors.area?.message as string}
                autoFocus
                onFocus={() => setName('area')}
                onChange={(e) => setVal(e.target.value)}
              />
              <TextField
                name="genre"
                control={control}
                placeholder="ジャンル(例: イタリアン・中華)"
                height={50}
                width="100%"
                error={!!formState.errors.genre}
                helperText={formState.errors.genre?.message as string}
                onFocus={() => setName('genre')}
                onChange={(e) => setVal(e.target.value)}
              />
            </TextFieldContainer>
          </SearchHeader>
          <Container>
            <RecomendText>候補</RecomendText>
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
                sp
              />
            )}
            <FormContainer>
              <FlexContainer>
                <Select
                  name="min"
                  control={control}
                  items={price}
                  width="100%"
                  error={!!formState.errors.budget}
                  helperText={formState.errors.budget?.message as string}
                  placeholder="下限予算"
                />
                <Select
                  name="max"
                  control={control}
                  items={price}
                  width="100%"
                  error={!!formState.errors.budget}
                  helperText={formState.errors.budget?.message as string}
                  placeholder="上限予算"
                />
                <Select
                  name="situation"
                  control={control}
                  items={situation}
                  width="100%"
                  error={!!formState.errors.situation}
                  helperText={formState.errors.situation?.message as string}
                  placeholder="場面"
                />
              </FlexContainer>
              <FlexContainer $gap={24}>
                <Checkbox
                  name="isPrivate"
                  control={control}
                  label="個室あり"
                  size={checkboxSize}
                  fontSize={checkboxFontSize}
                />
                <Checkbox
                  name="isAllDrinks"
                  control={control}
                  label="飲み放題"
                  size={checkboxSize}
                  fontSize={checkboxFontSize}
                />
                <Checkbox
                  name="isAllEats"
                  control={control}
                  label="食べ放題"
                  size={checkboxSize}
                  fontSize={checkboxFontSize}
                />
                <Checkbox
                  name="isLunch"
                  control={control}
                  label="ランチ"
                  size={checkboxSize}
                  fontSize={checkboxFontSize}
                />
              </FlexContainer>
              <Button type="submit" text="検索" bgcolor="#FFA234" width="40%" />
            </FormContainer>
          </Container>
        </>
      )}
    </Form>
  )
}
