import React from 'react'
import '@testing-library/jest-dom'
import 'jest-styled-components'
import { render } from '@testing-library/react'
import { Price } from '.'

describe('<Price />', () => {
  it('昼と夜の料金でコンポーネントをレンダリングする', () => {
    const { getByText } = render(<Price lunch="$10" dinner="$20" />)

    expect(getByText('$10')).toBeInTheDocument()
    expect(getByText('$20')).toBeInTheDocument()
  })

  it('提供されたiconSizeを画像に適用する', () => {
    const { getAllByRole } = render(
      <Price lunch="$10" dinner="$20" iconSize={24} />
    )
    const images = getAllByRole('img')

    images.forEach((img) => {
      expect(img).toHaveAttribute('width', '24')
      expect(img).toHaveAttribute('height', '24')
    })
  })

  it('提供されたfontSizeを料金テキストに適用する', () => {
    const { getByText } = render(
      <Price lunch="$10" dinner="$20" fontSize="1.5rem" />
    )
    const lunchPrice = getByText('$10')
    const dinnerPrice = getByText('$20')

    expect(lunchPrice).toHaveStyleRule('font-size', '1.5rem')
    expect(dinnerPrice).toHaveStyleRule('font-size', '1.5rem')
  })
})
