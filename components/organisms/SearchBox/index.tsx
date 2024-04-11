import React from 'react'
import styled from 'styled-components'
import { Form } from '../Form'
import { z } from 'zod'
import { TextField } from '@/components/atoms/TextField'
import { Select } from '@/components/atoms/Select'
import { Checkbox } from '@/components/atoms/Checkbox'
import { Button } from '@/components/atoms/Button/'
import { customErrorMap, formSchema } from '@/utils/zodHelper'
import { price, situation } from '@/utils/const'
import { theme } from '@/styles/theme.css'

interface SearchBoxProps {
  setSearch: (value: boolean) => void
  setFocus: (value: string) => void
}

z.setErrorMap(customErrorMap)

const Container = styled.div``

const FlexContainer = styled.div<{ $gap?: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${(props) => (props.$gap ? `${props.$gap}px` : 0)};
`

const FormContainer = styled.div`
  background-color: #fff;
  padding: 24px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  width: 95%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
`

const Headline = styled.h3`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  position: relative;
  margin-bottom: 24px;

  &::after {
    content: '';
    display: block;
    width: 50%;
    height: 2px;
    background-color: #ffa234;
    margin: 8px auto 0;
    position: absolute;
    left: 50%;
    bottom: -6px;
    transform: translateX(-50%);
  }
`

export const SearchBox: React.FC<SearchBoxProps> = ({
  setSearch,
  setFocus,
}) => {
  const onSubmit = () => {
    console.log('test')
  }

  const checkboxSize: number = 16
  const checkboxFontSize: string = '12px'
  return (
    <Container>
      <Form
        onSubmit={onSubmit}
        schema={formSchema}
        options={{ defaultValues: { min: '', max: '', situation: '' } }}
      >
        {({ control, formState }) => (
          <FormContainer>
            <Headline>お店を探す</Headline>
            <div>
              <FlexContainer>
                <TextField
                  name="area"
                  control={control}
                  placeholder="エリア"
                  height={50}
                  width="100%"
                  error={!!formState.errors.area}
                  helperText={formState.errors.area?.message as string}
                  onFocus={() => {
                    setSearch(true)
                    setFocus('area')
                  }}
                />
                <TextField
                  name="genre"
                  control={control}
                  placeholder="ジャンル"
                  height={50}
                  width="100%"
                  error={!!formState.errors.genre}
                  helperText={formState.errors.genre?.message as string}
                  onFocus={() => {
                    setSearch(true)
                    setFocus('genre')
                  }}
                />
              </FlexContainer>
              <FlexContainer>
                <Select
                  name="min"
                  control={control}
                  items={price}
                  width="100%"
                  error={!!formState.errors.budget}
                  helperText={formState.errors.budget?.message as string}
                  placeholder="💵下限"
                />
                <Select
                  name="max"
                  control={control}
                  items={price}
                  width="100%"
                  error={!!formState.errors.budget}
                  helperText={formState.errors.budget?.message as string}
                  placeholder="💵上限"
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
            </div>
            <FlexContainer $gap={24}>
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
            <Button
              type="submit"
              text="検索"
              bgcolor={theme.color.primary}
              textcolor={theme.color.white}
              width="40%"
              onClick={() => setSearch(true)}
            />
          </FormContainer>
        )}
      </Form>
    </Container>
  )
}
