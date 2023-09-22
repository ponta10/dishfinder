import React from 'react'
import styled from 'styled-components'
import { Form } from '../Form'
import { z } from 'zod'
import { TextField } from '@/components/atoms/TextField'
import { Select } from '@/components/atoms/Select'
import { Checkbox } from '@/components/atoms/Checkbox'
import { Button } from '@/components/atoms/Button'

const formSchema = z.object({
  area: z.string(),
  genre: z.string(),
  budget: z.string(),
  situation: z.string(),
  isPrivate: z.boolean(),
  isAllDrinks: z.boolean(),
  isAllEats: z.boolean(),
  isLunch: z.boolean(),
})

const Container = styled.div``

const FlexContainer = styled.div<{ gap?: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  gap: ${(props) => (props.gap ? `${props.gap}px` : 0)};
`

const FormContainer = styled.div`
  text-align: center;
`

export const SearchBox = () => {
  const onSubmit = (data: any) => {
    console.log(data)
  }
  return (
    <Container>
      <Form onSubmit={onSubmit} schema={formSchema}>
        {({ control }) => (
          <FormContainer>
            <FlexContainer>
              <TextField
                name="area"
                control={control}
                placeholder="エリア(例: 渋谷・新宿)"
                height={47}
                width={200}
              />
              <TextField
                name="genre"
                control={control}
                placeholder="ジャンル(例: イタリアン・中華)"
                height={47}
                width={200}
              />
            </FlexContainer>
            <FlexContainer>
              <Select
                name="budget"
                control={control}
                items={[
                  { value: '¥1,000~1,999', label: '¥1,000~1,999' },
                  { value: '¥2,000~2,999', label: '¥2,000~2,999' },
                ]}
                width={200}
              />
              <Select
                name="situation"
                control={control}
                items={[
                  { value: '1人で', label: '1人で' },
                  { value: 'デート', label: 'デート' },
                ]}
                width={200}
              />
            </FlexContainer>
            <FlexContainer gap={24}>
              <Checkbox name="isPrivate" control={control} label="個室あり" />
              <Checkbox name="isAllDrinks" control={control} label="飲み放題" />
              <Checkbox name="isAllEats" control={control} label="食べ放題" />
              <Checkbox name="isLunch" control={control} label="ランチ" />
            </FlexContainer>
            <Button type="submit" text="検索" bgColor="#FFA234" width="40%" />
          </FormContainer>
        )}
      </Form>
    </Container>
  )
}
