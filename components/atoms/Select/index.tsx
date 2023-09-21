import React from 'react'
import styled from 'styled-components'

interface SelectBoxProps {
  name?: string
  label?: string
  items: { value: string | number; label: string }[]
  disabled?: boolean
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void
  defaultValue?: string | number
  size?: 'small' | 'medium' | 'large'
  error?: boolean
  helperText?: string
}

interface StyledSelectProps {
  size?: 'small' | 'medium' | 'large'
  error?: boolean
  disabled?: boolean
}

const StyledSelect = styled.select<StyledSelectProps>`
  width: 100%;
  padding: ${(props) =>
    props.size === 'small' ? '8px' : props.size === 'large' ? '16px' : '12px'};
  border: ${(props) => (props.error ? '2px solid red' : '2px solid #ccc')};
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 1rem;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
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

export const Select: React.FC<SelectBoxProps> = ({
  name,
  label,
  items,
  disabled = false,
  onChange,
  defaultValue,
  size = 'medium',
  error = false,
  helperText,
}) => {
  return (
    <div>
      {label && <StyledLabel htmlFor={name}>{label}</StyledLabel>}
      <StyledSelect
        name={name}
        id={name}
        disabled={disabled}
        onChange={onChange}
        defaultValue={defaultValue}
        size={size}
        error={error}
      >
        {items.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </StyledSelect>
      {helperText && (
        <StyledHelperText error={error}>{helperText}</StyledHelperText>
      )}
    </div>
  )
}
