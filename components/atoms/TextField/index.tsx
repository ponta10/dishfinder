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
  onFocus?: () => void
  autoFocus?: boolean
  onBlur?: () => void
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const StyledInput = styled.input<{
  width?: string | number
  height?: string | number
  size?: string
  $error?: boolean
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
  border: ${(props) => (props.$error ? '1px solid red' : '1px solid #ccc')};
  //   border-radius: 4px;
  box-sizing: border-box;
  height: 2;
  &:focus {
    border-bottom: 2px solid #ffa234;
    border-color: #ffa234;
    outline: none;
    box-shadow: 0 2px 4px rgba(255, 162, 52, 0.5);
  }

  &::placeholder {
    color: #aaa;
  }
`

const StyledLabel = styled.label`
  display: block;
  margin-bottom: 8px;
`

const StyledHelperText = styled.div<{ $error?: boolean }>`
  color: ${(props) => (props.$error ? 'red' : '#666')};
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
  error,
  onChange,
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
            <StyledInput
              {...field}
              {...props}
              onChange={(e) => {
                field.onChange(e)
                if (onChange) onChange(e)
              }}
              $error={error}
              autoFocus={props.autoFocus}
            />
          )
        }
      />
      {helperText && (
        <StyledHelperText $error={error}>{helperText}</StyledHelperText>
      )}
    </div>
  )
}
