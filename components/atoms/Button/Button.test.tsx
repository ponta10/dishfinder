import React from 'react'
import '@testing-library/jest-dom'
import 'jest-styled-components'
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

  it('指定された色でボタンを表示する', () => {
    const { getByText } = render(
      <Button text="Colored Button" bgcolor="#FFA234" textcolor="#fff" />
    )
    const button = getByText('Colored Button')
    expect(button).toHaveStyleRule('background-color', '#FFA234')
    expect(button).toHaveStyleRule('color', '#fff')
  })
})
