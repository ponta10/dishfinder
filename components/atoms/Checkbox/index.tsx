import React from 'react'
import { Control, Controller } from 'react-hook-form'
import styled from 'styled-components'

export interface CheckboxProps {
  id?: string
  name: string
  label: string
  checked?: boolean
  fontSize?: string
  size?: number
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  disabled?: boolean
  control: Control<any>
  color?: string
}

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
`

const StyledCheckbox = styled.input.attrs({ type: 'checkbox' })<{
  disabled?: boolean
  checked?: boolean
  size?: number
}>`
  margin-right: 8px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  width: ${(props) => props.size || '16px'};
  height: ${(props) => props.size || '16px'};

  /* チェックが付いている場合のスタイルを追加 */
  accent-color: #ffa234;
`

const StyledLabel = styled.label<{ color?: string; fontSize?: string }>`
  cursor: pointer;
  color: ${(props) => props.color || '#000'};
  font-size: ${(props) => props.fontSize || '1rem'};
`

export const Checkbox: React.FC<CheckboxProps> = ({
  id,
  label,
  control,
  name,
  color,
  fontSize,
  size,
  ...props
}) => {
  const checkboxId = id || name
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={false}
      render={({ field }) => (
        <CheckboxContainer>
          <StyledCheckbox id={checkboxId} {...field} {...props} size={size} />
          <StyledLabel htmlFor={checkboxId} color={color} fontSize={fontSize}>
            {label}
          </StyledLabel>
        </CheckboxContainer>
      )}
    />
  )
}
