import React from 'react'
import { Control, Controller } from 'react-hook-form'
import styled from 'styled-components'

export interface TextFieldProps {
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
  height?: string | number
  control: Control<any>
}

const StyledInput = styled.input<{
  width?: string | number
  height?: string | number
  size?: string
  error?: boolean
}>`
  width: ${(props) =>
    typeof props.width === 'number'
      ? `${props.width}px`
      : props.width || '100%'};
  height: ${(props) =>
    typeof props.height === 'number'
      ? `${props.height}px`
      : props.height || 'auto'};
  padding: ${(props) =>
    props.size === 'small' ? '8px' : props.size === 'large' ? '16px' : '12px'};
  border: ${(props) => (props.error ? '2px solid red' : '2px solid #ccc')};
  border-radius: 4px;
  box-sizing: border-box;
  height: 2;
`

const StyledLabel = styled.label`
  display: block;
  margin-bottom: 8px;
`

const StyledHelperText = styled.div<{ error?: boolean }>`
  color: ${(props) => (props.error ? 'red' : '#666')};
  font-size: 12px;
  margin-top: 4px;
`

export const TextField: React.FC<TextFieldProps> = ({
  name,
  label,
  multiline = false,
  rows = 3,
  helperText,
  control,
  ...props
}) => {
  return (
    <div>
      {label && <StyledLabel>{label}</StyledLabel>}
      <Controller
        name={name!}
        control={control}
        render={({ field }) =>
          multiline ? (
            <textarea rows={rows} {...field} {...props} />
          ) : (
            <StyledInput {...field} {...props} />
          )
        }
      />
      {helperText && (
        <StyledHelperText error={props.error}>{helperText}</StyledHelperText>
      )}
    </div>
  )
}
