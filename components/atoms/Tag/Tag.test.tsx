import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import 'jest-styled-components'
import { Tag } from '.'

describe('<Tag />', () => {
  it('クラッシュせずにTagコンポーネントをレンダリングする', () => {
    const { getByText } = render(<Tag text="Sample" />)
    expect(getByText('Sample')).toBeInTheDocument()
  })

  it('正しい背景色でタグを表示する', () => {
    const color = 'red'
    const { getByText } = render(<Tag text="Colored" bgcolor={color} />)
    expect(getByText('Colored')).toHaveStyleRule(`background-color: ${color}`)
  })

  it('タグがクリックされたときにonClick関数を呼び出す', () => {
    const mockOnClick = jest.fn()
    const { getByText } = render(<Tag text="Clickable" onClick={mockOnClick} />)
    fireEvent.click(getByText('Clickable'))
    expect(mockOnClick).toHaveBeenCalledTimes(1)
  })

  it('正しく幅を設定する', () => {
    const width = '150px'
    const { getByText } = render(<Tag text="Width" width={width} />)
    expect(getByText('Width')).toHaveStyleRule(`width: ${width}`)
  })
})
