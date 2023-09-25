import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { Form } from '../Form'
import { ZodErrorMap, z } from 'zod'
import { TextField } from '@/components/atoms/TextField'
import { Select } from '@/components/atoms/Select'
import { Checkbox } from '@/components/atoms/Checkbox'
import { Button } from '@/components/atoms/Button'
import { useRouter } from 'next/navigation'
import { Recommend } from '../Recommend'
import { areaList, genreList } from '@/utils/const'

const customErrorMap: ZodErrorMap = (issue, ctx) => {
  if (issue.code === z.ZodIssueCode.invalid_type) {
    if (issue.expected === 'string') {
      switch (
        issue.path[0] // issue.path[0] でフィールド名を取得
      ) {
        case 'genre':
          return { message: 'ジャンルを入力してください。' }
        case 'area':
          return { message: 'エリアを入力してください。' }
        default:
          return { message: '文字列を入力してください。' }
      }
    }
  }
  if (issue.code === z.ZodIssueCode.custom) {
    return { message: `less-than-${(issue.params || {}).minimum}` }
  }
  return { message: ctx.defaultError }
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

const Container = styled.div`
  position: fixed;
  top: 60px;
  left: 50%;
  transform: translateX(-50%);
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
}

export const Header: React.FC<HeaderProps> = ({ isLabelWhite = false }) => {
  const router = useRouter()
  const labelColor = isLabelWhite ? '#fff' : '#000'
  const [name, setName] = useState<string>('')
  const [area, seArea] = useState<string>('')
  const [genre, setGenre] = useState<string>('')
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
    console.log(data, area, genre)
    router.push('/store')
  }
  return (
    <Container>
      <Form
        onSubmit={onSubmit}
        schema={formSchema}
        options={{
          defaultValues: {
            area: '',
            genre: '',
            min: '',
            max: '',
            situation: '',
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
              />
              <Select
                name="min"
                control={control}
                items={[
                  { value: '¥1,000', label: '¥1,000' },
                  { value: '¥2,000', label: '¥2,000' },
                ]}
                width={150}
                error={!!formState.errors.budget}
                helperText={formState.errors.budget?.message as string}
                placeholder="下限予算"
                onFocus={() => setName('')}
              />
              <Select
                name="max"
                control={control}
                items={[
                  { value: '¥1,000', label: '¥1,000' },
                  { value: '¥2,000', label: '¥2,000' },
                ]}
                width={150}
                error={!!formState.errors.budget}
                helperText={formState.errors.budget?.message as string}
                placeholder="上限予算"
                onFocus={() => setName('')}
              />
              <Select
                name="situation"
                control={control}
                items={[
                  { value: '1人で', label: '1人で' },
                  { value: 'デート', label: 'デート' },
                ]}
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
                  area={area}
                />
              )}
            </FlexContainer>
            <FlexContainer $gap={24}>
              <Checkbox
                name="isPrivate"
                control={control}
                label="個室あり"
                color={labelColor}
              />
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
