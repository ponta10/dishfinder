import React from 'react'
import { Control, Controller } from 'react-hook-form'
import { BiSolidDownArrow } from 'react-icons/bi'
import styled from 'styled-components'

export interface SelectProps {
  name?: string
  label?: string
  items: { value: string | number; label: string }[]
  disabled?: boolean
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void
  defaultValue?: string | number
  size?: 'small' | 'medium' | 'large'
  error?: boolean
  helperText?: string
  control: Control<any>
  placeholder?: string
  width?: string | number
  height?: string | number
  onFocus?: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

interface StyledSelectProps {
  size?: 'small' | 'medium' | 'large'
  $error?: boolean
  disabled?: boolean
  width?: string | number
  height?: string | number
  value?: string | number
}

const StyledSelect = styled.select<StyledSelectProps>`
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
  font-size: 1rem;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  color: ${(props) => (props.value === '' ? '#aaa' : 'initial')};
  background-color: #fff !important;
  appearance: none !important;
  -webkit-appearance: none !important;
  -moz-appearance: none !important;
  background-image: none;

  &:focus {
    border-color: #ffa234;
    outline: none;
    box-shadow: 0 2px 5px #ffa234;
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

const SelectWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
`

const ArrowIcon = styled(BiSolidDownArrow)`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  color: #aaa;
  width: 12px;
`

export const Select: React.FC<SelectProps> = ({
  name,
  label,
  items,
  disabled = false,
  onChange,
  defaultValue,
  size = 'medium',
  error = false,
  helperText,
  width,
  height,
  placeholder,
  control,
  onFocus,
}) => {
  return (
    <>
      {label && <StyledLabel htmlFor={name}>{label}</StyledLabel>}
      <SelectWrapper>
        <Controller
          name={name!}
          control={control}
          defaultValue={defaultValue}
          render={({ field }) => (
            <StyledSelect
              {...field}
              value={field.value}
              onChange={(e) => {
                field.onChange(e)
                if (onChange) onChange(e)
              }}
              onFocus={onFocus}
              disabled={disabled}
              size={size}
              $error={error}
              width={width}
              height={height}
            >
              <option value="" disabled>
                {placeholder}
              </option>
              {items.map((item, index) => (
                <option key={index} value={item.value}>
                  {item.label}
                </option>
              ))}
            </StyledSelect>
          )}
        />
        <ArrowIcon />
        {helperText && (
          <StyledHelperText $error={error}>{helperText}</StyledHelperText>
        )}
      </SelectWrapper>
    </>
  )
}
