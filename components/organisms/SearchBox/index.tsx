import React from 'react'
import styled from 'styled-components'
import { Form } from '../Form'
import { ZodErrorMap, z } from 'zod'
import { TextField } from '@/components/atoms/TextField'
import { Select } from '@/components/atoms/Select'
import { Checkbox } from '@/components/atoms/Checkbox'
import { Button } from '@/components/atoms/Button'
import { customErrorMap } from '@/utils/zodHelper'

interface SearchBoxProps {
  setSearch: (value: boolean) => void
}

z.setErrorMap(customErrorMap)

const formSchema = z.object({
  area: z.string(),
  genre: z.string(),
  min: z.string().optional(),
  max: z.string().optional(),
  situation: z.string().optional(),
  isPrivate: z.boolean(),
  isAllDrinks: z.boolean(),
  isAllEats: z.boolean(),
  isLunch: z.boolean(),
})

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

export const SearchBox: React.FC<SearchBoxProps> = ({ setSearch }) => {
  const onSubmit = (data: any) => {
    console.log(data)
  }

  const checkboxSize: number = 14
  const checkboxFontSize: string = '10px'
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
                  placeholder="エリア(例: 渋谷・新宿)"
                  height={50}
                  width="100%"
                  error={!!formState.errors.area}
                  helperText={formState.errors.area?.message as string}
                  onFocus={() => setSearch(true)}
                />
                <TextField
                  name="genre"
                  control={control}
                  placeholder="ジャンル(例: イタリアン・中華)"
                  height={50}
                  width="100%"
                  error={!!formState.errors.genre}
                  helperText={formState.errors.genre?.message as string}
                  onFocus={() => setSearch(true)}
                />
              </FlexContainer>
              <FlexContainer>
                <Select
                  name="min"
                  control={control}
                  items={[
                    { value: '¥1,000', label: '¥1,000' },
                    { value: '¥2,000', label: '¥2,000' },
                  ]}
                  width="100%"
                  error={!!formState.errors.budget}
                  helperText={formState.errors.budget?.message as string}
                  placeholder="下限予算"
                />
                <Select
                  name="max"
                  control={control}
                  items={[
                    { value: '¥1,000', label: '¥1,000' },
                    { value: '¥2,000', label: '¥2,000' },
                  ]}
                  width="100%"
                  error={!!formState.errors.budget}
                  helperText={formState.errors.budget?.message as string}
                  placeholder="上限予算"
                />
                <Select
                  name="situation"
                  control={control}
                  items={[
                    { value: '1人で', label: '1人で' },
                    { value: 'デート', label: 'デート' },
                  ]}
                  width="100%"
                  error={!!formState.errors.situation}
                  helperText={formState.errors.situation?.message as string}
                  placeholder="場面"
                />
              </FlexContainer>
            </div>
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
            <Button
              type="submit"
              text="検索"
              bgcolor="#FFA234"
              width="40%"
              onClick={() => setSearch(true)}
            />
          </FormContainer>
        )}
      </Form>
    </Container>
  )
}
