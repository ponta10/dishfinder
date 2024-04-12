import { createVar, style } from '@vanilla-extract/css'

export const bgcolorVar = createVar()
export const colorVar = createVar()
export const sizeVar = createVar()
export const fontSizeVar = createVar()

export const buttonStyle = style({
  backgroundColor: bgcolorVar,
  color: colorVar,
  width: sizeVar,
  fontSize: fontSizeVar,
  padding: '4px 16px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  transition: 'all 0.1s',

  ':hover': {
    filter: 'brightness(105%)',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
  },

  ':disabled': {
    cursor: 'not-allowed',
    opacity: 0.6,
  },
})
