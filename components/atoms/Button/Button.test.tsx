import React from 'react'
import '@testing-library/jest-dom'
import { render, fireEvent } from '@testing-library/react'
import { Button } from '.'

describe('<Button />', () => {
  it('指定されたテキストでボタンを表示する', () => {
    const { getByText } = render(<Button text="Click me!" />)
    expect(getByText('Click me!')).toBeInTheDocument()
  })

  it('クリック時にonClickを呼び出す', () => {
    const handleClick = jest.fn()
    const { getByText } = render(
      <Button text="Click me!" onClick={handleClick} />
    )
    fireEvent.click(getByText('Click me!'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
