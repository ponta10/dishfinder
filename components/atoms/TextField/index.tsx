import React from 'react'
import styled from 'styled-components'

interface TextFieldProps {
  type?: 'text' | 'password' | 'email' | 'number'
  label?: string
  name?: string
  multiline?: boolean
  size?: 'small' | 'medium' | 'large'
  rows?: number
  placeholder?: string
  error?: boolean
  helperText?: string
  InputProps?: React.HTMLProps<HTMLInputElement>
  readOnly?: boolean
  width?: string | number
}

const StyledInput = styled.input<TextFieldProps>`
  width: ${(props) =>
    typeof props.width === 'number'
      ? `${props.width}px`
      : props.width || '100%'};
  padding: ${(props) =>
    props.size === 'small' ? '8px' : props.size === 'large' ? '16px' : '12px'};
  border: ${(props) => (props.error ? '2px solid red' : '2px solid #ccc')};
  border-radius: 4px;
  box-sizing: border-box;
`

const StyledLabel = styled.label`
  display: block;
  margin-bottom: 8px;
`

const StyledHelperText = styled.div<TextFieldProps>`
  color: ${(props) => (props.error ? 'red' : '#666')};
  font-size: 12px;
  margin-top: 4px;
`

export const TextField: React.FC<TextFieldProps> = ({
  label,
  multiline = false,
  rows = 3,
  helperText,
  ...props
}) => {
  return (
    <div>
      {label && <StyledLabel>{label}</StyledLabel>}
      {multiline ? (
        // <textarea rows={rows} {...(props as any)} />
        <textarea rows={rows} {...props} />
      ) : (
        <StyledInput {...props} />
      )}
      {helperText && (
        <StyledHelperText {...props}>{helperText}</StyledHelperText>
      )}
    </div>
  )
}
