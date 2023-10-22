import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import 'jest-styled-components'
import { Tag } from '.'

describe('<Tag />', () => {
  it('renders the Tag component without crashing', () => {
    const { getByText } = render(<Tag text="Sample" />)
    expect(getByText('Sample')).toBeInTheDocument()
  })

  it('displays the tag with the correct background color', () => {
    const color = 'red'
    const { getByText } = render(<Tag text="Colored" bgcolor={color} />)
    expect(getByText('Colored')).toHaveStyleRule(`background-color: ${color}`)
  })

  it('calls the onClick function when the tag is clicked', () => {
    const mockOnClick = jest.fn()
    const { getByText } = render(<Tag text="Clickable" onClick={mockOnClick} />)
    fireEvent.click(getByText('Clickable'))
    expect(mockOnClick).toHaveBeenCalledTimes(1)
  })

  it('sets the width correctly', () => {
    const width = '150px'
    const { getByText } = render(<Tag text="Width" width={width} />)
    expect(getByText('Width')).toHaveStyleRule(`width: ${width}`)
  })
})
