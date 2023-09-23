import React from 'react'
import { Control, Controller } from 'react-hook-form'
import styled from 'styled-components'

export interface CheckboxProps {
  id?: string
  name: string
  label: string
  checked?: boolean
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
}>`
  margin-right: 8px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};

  /* チェックが付いている場合のスタイルを追加 */
  accent-color: #ffa234;
`

const StyledLabel = styled.label<{ color?: string }>`
  cursor: pointer;
  color: ${(props) => props.color || '#000'};
`

export const Checkbox: React.FC<CheckboxProps> = ({
  id,
  label,
  control,
  name,
  color,
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
          <StyledCheckbox id={checkboxId} {...field} {...props} />
          <StyledLabel htmlFor={checkboxId} color={color}>
            {label}
          </StyledLabel>
        </CheckboxContainer>
      )}
    />
  )
}
