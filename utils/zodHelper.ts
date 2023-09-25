import { ZodErrorMap, z } from "zod"

export const customErrorMap: ZodErrorMap = (issue, ctx) => {
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