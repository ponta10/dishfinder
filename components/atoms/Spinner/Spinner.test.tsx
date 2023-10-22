import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Spinner } from '.'

describe('<Spinner />', () => {
  it('Spinner コンポーネントがクラッシュせずにレンダリングされる', () => {
    const { container } = render(<Spinner />)
    expect(container.firstChild).toBeInTheDocument()
  })

  it('"Loading..."テキストをレンダリングする', () => {
    const { getByText } = render(<Spinner />)
    expect(getByText('Loading...')).toBeInTheDocument()
  })

  it('9個のキューブをレンダリングする', () => {
    const { container } = render(<Spinner />)
    const cubes = container.querySelectorAll('div > div > div > div')
    expect(cubes.length).toBe(9)
  })
})
