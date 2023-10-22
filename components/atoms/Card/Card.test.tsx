import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/'
import { Card } from '.'
import 'jest-styled-components'

describe('<Card />', () => {
  it('renders without crashing', () => {
    const { container } = render(<Card />)
    expect(container.firstChild).toBeInTheDocument()
  })

  it('renders children correctly', () => {
    const { getByText } = render(<Card>Test Content</Card>)
    expect(getByText('Test Content')).toBeInTheDocument()
  })

  it('applies default background color when none is provided', () => {
    const { container } = render(<Card />)
    expect(container.firstChild).toHaveStyleRule('background-color', '#fff')
  })

  it('applies provided background color', () => {
    const { container } = render(<Card bgcolor="red" />)
    expect(container.firstChild).toHaveStyleRule('background-color: red')
  })

  it('applies provided width', () => {
    const { container } = render(<Card width="50%" />)
    expect(container.firstChild).toHaveStyleRule('width: 50%')
  })

  it('applies provided width in pixels', () => {
    const { container } = render(<Card width={300} />)
    expect(container.firstChild).toHaveStyleRule('width: 300px')
  })
})
