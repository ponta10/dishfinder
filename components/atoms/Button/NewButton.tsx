import React from 'react'
import * as styles from './Button.css'
import { assignInlineVars } from '@vanilla-extract/dynamic'

export interface ButtonProps {
  bgcolor?: string
  textcolor?: string
  text?: string
  width?: string | number
  fontSize?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  onClick?: () => void
}

export const Button: React.FC<ButtonProps> = ({
  text,
  bgcolor,
  textcolor,
  width,
  fontSize,
  ...props
}) => {
  const dynamicStyle = assignInlineVars({
    [styles.bgcolorVar]: bgcolor,
    [styles.colorVar]: textcolor,
    [styles.fontSizeVar]: fontSize,
    [styles.sizeVar]: typeof width === 'number' ? `${width}px` : width,
  })
  return (
    <button className={styles.buttonStyle} style={dynamicStyle} {...props}>
      {text}
    </button>
  )
}
