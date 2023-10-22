import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Spinner } from '.'

describe('<Spinner />', () => {
  it('renders the Spinner component without crashing', () => {
    const { container } = render(<Spinner />)
    expect(container.firstChild).toBeInTheDocument()
  })

  it('renders the "Loading..." text', () => {
    const { getByText } = render(<Spinner />)
    expect(getByText('Loading...')).toBeInTheDocument()
  })

  it('renders 9 cubes', () => {
    const { container } = render(<Spinner />)
    const cubes = container.querySelectorAll('div > div > div > div')
    expect(cubes.length).toBe(9)
  })
})
