import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import 'jest-styled-components'
import { RatingStar } from '.'

describe('<RatingStar />', () => {

  it('renders without crashing', () => {
    const { container } = render(<RatingStar value={0.5} />)
    expect(container.firstChild).toBeInTheDocument()
  })

  it('fills the star based on the value', () => {
    const { container } = render(<RatingStar value={0.5} />)
    const filledStar = container.querySelector('div > div > div') as HTMLElement
    expect(filledStar).toHaveStyleRule('width', '50%')
  })

  it('sets the correct size for the icons', () => {
    const size = 24
    const { container } = render(<RatingStar value={0.5} size={size} />)
    const starIcons = container.querySelectorAll('svg')
    starIcons.forEach(star => {
      expect(star).toHaveAttribute('height', `${size}`)
      expect(star).toHaveAttribute('width', `${size}`)
    })
  })

})
