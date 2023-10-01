import "@testing-library/jest-dom";
import 'jest-styled-components';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Button } from '.';

describe('<Button />', () => {
  it('renders the button with the provided text', () => {
    const { getByText } = render(<Button text="Click me!" />);
    expect(getByText('Click me!')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    const { getByText } = render(<Button text="Click me!" onClick={handleClick} />);
    fireEvent.click(getByText('Click me!'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('renders the button with the provided colors', () => {
    const { getByText } = render(<Button text="Colored Button" bgcolor="#FFA234" textcolor="#fff" />);
    const button = getByText('Colored Button');
    expect(button).toHaveStyleRule('background-color', '#FFA234');
    expect(button).toHaveStyleRule('color', '#fff');
  });
});
