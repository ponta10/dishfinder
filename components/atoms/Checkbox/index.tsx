import React from 'react'
import { Control, Controller } from 'react-hook-form'
import styled from 'styled-components'

export interface CheckboxProps {
  id: string
  name: string
  label: string
  checked?: boolean
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  disabled?: boolean
  control: Control<any>
}

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
`

const StyledCheckbox = styled.input.attrs({ type: 'checkbox' })<{
  disabled?: boolean
}>`
  margin-right: 8px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`

const StyledLabel = styled.label`
  cursor: pointer;
`

export const Checkbox: React.FC<CheckboxProps> = ({
  id,
  label,
  control,
  name,
  ...props
}) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={false}
      render={({ field }) => (
        <CheckboxContainer>
          <StyledCheckbox id={id} {...field} {...props} />
          <StyledLabel htmlFor={id}>{label}</StyledLabel>
        </CheckboxContainer>
      )}
    />
  )
}
