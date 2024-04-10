import { createGlobalTheme } from '@vanilla-extract/css'

export const theme = createGlobalTheme(':root', {
  color: {
    primary: '#ffa234',
    link: '#66a3e0',
    black: '#000',
    white: '#fff',
    gray: '#aaa',
    lightGray: '#ccc',
  },
  fontSize: {
    xxs: '0.625rem',
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    xxl: '1.5rem',
    xxxl: '1.75rem',
    xxxxl: '2rem',
    xxxxxl: '2.5rem',
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
  },
  shadow: {
    small: '0 2px 4px rgba(0, 0, 0, 0.2)',
    medium: '0 4px 6px rgba(0, 0, 0, 0.1)',
    modal: '1px 1px 5px rgba(0, 0, 0, 0.2)',
    orange: '0 2px 4px rgba(255, 162, 52, .5)',
  },
  zIndex: {
    base: '0',
    primary: '100',
    upper: '200',
    overlay: '300',
    modal: '400',
  },
})
