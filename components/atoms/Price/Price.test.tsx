import React from 'react'
import '@testing-library/jest-dom'
import 'jest-styled-components'
import { render } from '@testing-library/react'
import { Price } from '.'

describe('<Price />', () => {
  it('renders the component with lunch and dinner prices', () => {
    const { getByText } = render(<Price lunch="$10" dinner="$20" />)

    expect(getByText('$10')).toBeInTheDocument()
    expect(getByText('$20')).toBeInTheDocument()
  })

  it('applies provided iconSize to the images', () => {
    const { getAllByRole } = render(
      <Price lunch="$10" dinner="$20" iconSize={24} />
    )
    const images = getAllByRole('img')

    images.forEach((img) => {
      expect(img).toHaveAttribute('width', '24')
      expect(img).toHaveAttribute('height', '24')
    })
  })

  it('applies provided fontSize to the price texts', () => {
    const { getByText } = render(
      <Price lunch="$10" dinner="$20" fontSize="1.5rem" />
    )
    const lunchPrice = getByText('$10')
    const dinnerPrice = getByText('$20')

    expect(lunchPrice).toHaveStyleRule('font-size', '1.5rem')
    expect(dinnerPrice).toHaveStyleRule('font-size', '1.5rem')
  })
})
