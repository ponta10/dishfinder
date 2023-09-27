import { ZodErrorMap, z } from 'zod'

export const customErrorMap: ZodErrorMap = (issue, ctx) => {
  if (issue.code === z.ZodIssueCode.invalid_type) {
    if (issue.expected === 'string') {
      switch (issue.path[0]) {
        case 'genre':
          return { message: 'ジャンルを入力してください。' }
        case 'area':
          return { message: 'エリアを入力してください。' }
        default:
          return { message: '文字列を入力してください。' }
      }
    }
  }

  if (
    issue.code === z.ZodIssueCode.too_small ||
    issue.code === z.ZodIssueCode.invalid_string
  ) {
    switch (issue.path[0]) {
      case 'genre':
        return { message: 'ジャンルを入力してください。' }
      case 'area':
        return { message: 'エリアを入力してください。' }
      default:
        return { message: 'このフィールドは空にできません。' }
    }
  }

  if (issue.code === z.ZodIssueCode.custom) {
    return { message: `less-than-${(issue.params || {}).minimum}` }
  }

  return { message: ctx.defaultError }
}

export const formSchema = z.object({
  area: z.string().nonempty(),
  genre: z.string().nonempty(),
  min: z.string().optional(),
  max: z.string().optional(),
  situation: z.string().optional(),
  isAllDrinks: z.boolean(),
  isAllEats: z.boolean(),
  isLunch: z.boolean(),
})
