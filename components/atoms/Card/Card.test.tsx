import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/'
import { Card } from '.'
import 'jest-styled-components'

describe('<Card />', () => {
  it('問題なくレンダリングされる', () => {
    const { container } = render(<Card />)
    expect(container.firstChild).toBeInTheDocument()
  })

  it('子要素を正しくレンダリングする', () => {
    const { getByText } = render(<Card>Test Content</Card>)
    expect(getByText('Test Content')).toBeInTheDocument()
  })

  it('背景色が指定されていない場合、デフォルトの背景色を適用する', () => {
    const { container } = render(<Card />)
    expect(container.firstChild).toHaveStyleRule('background-color', '#fff')
  })

  it('指定された背景色を適用する', () => {
    const { container } = render(<Card bgcolor="red" />)
    expect(container.firstChild).toHaveStyleRule('background-color: red')
  })

  it('指定された幅を適用する', () => {
    const { container } = render(<Card width="50%" />)
    expect(container.firstChild).toHaveStyleRule('width: 50%')
  })

  it('ピクセル単位で指定された幅を適用する', () => {
    const { container } = render(<Card width={300} />)
    expect(container.firstChild).toHaveStyleRule('width: 300px')
  })
})
