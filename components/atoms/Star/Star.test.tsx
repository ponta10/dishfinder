import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import 'jest-styled-components'
import { RatingStar } from '.'

describe('<RatingStar />', () => {
  it('クラッシュせずにレンダリングする', () => {
    const { container } = render(<RatingStar value={0.5} />)
    expect(container.firstChild).toBeInTheDocument()
  })

  it('与えられた値に基づいて星を塗りつぶす', () => {
    const { container } = render(<RatingStar value={0.5} />)
    const filledStar = container.querySelector('div > div > div') as HTMLElement
    expect(filledStar).toHaveStyleRule('width', '50%')
  })

  it('アイコンの正しいサイズを設定する', () => {
    const size = 24
    const { container } = render(<RatingStar value={0.5} size={size} />)
    const starIcons = container.querySelectorAll('svg')
    starIcons.forEach((star) => {
      expect(star).toHaveAttribute('height', `${size}`)
      expect(star).toHaveAttribute('width', `${size}`)
    })
  })
})
