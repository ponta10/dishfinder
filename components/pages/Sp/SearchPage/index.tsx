import React from 'react'
import styled from 'styled-components'
import { HiArrowLongLeft } from 'react-icons/hi2'
import { TextField } from '@/components/atoms/TextField'
import { Form } from '@/components/organisms/Form'
import { z } from 'zod'
import { Tag } from '@/components/atoms/Tag'
import { Checkbox } from '@/components/atoms/Checkbox'
import { Button } from '@/components/atoms/Button'
import { Select } from '@/components/atoms/Select'
import { customErrorMap } from '@/utils/zodHelper'

interface SearchPageProps {
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

const RecomendContainer = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: space-between;
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

export const SearchPage: React.FC<SearchPageProps> = ({ setSearch }) => {
  const checkboxSize: number = 14
  const checkboxFontSize: string = '10px'
  const onSubmit = (data: any) => {
    console.log(data)
  }
  return (
    <Form
      onSubmit={onSubmit}
      schema={formSchema}
      options={{ defaultValues: { min: '', max: '', situation: '' } }}
    >
      {({ control, formState }) => (
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
              />
              <TextField
                name="genre"
                control={control}
                placeholder="ジャンル(例: イタリアン・中華)"
                height={50}
                width="100%"
                error={!!formState.errors.genre}
                helperText={formState.errors.genre?.message as string}
              />
            </TextFieldContainer>
          </SearchHeader>
          <Container>
            <RecomendText>候補</RecomendText>
            <RecomendContainer>
              {[...Array(12)].map((_, i) => (
                <Tag text="渋谷" bgcolor="#fff" key={i} />
              ))}
            </RecomendContainer>
            <FormContainer>
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
