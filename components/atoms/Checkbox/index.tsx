import React from 'react'
import styled from 'styled-components'

interface CheckboxProps {
  id: string
  label: string
  checked?: boolean
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  disabled?: boolean
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

export const Checkbox: React.FC<CheckboxProps> = ({ id, label, ...props }) => {
  return (
    <CheckboxContainer>
      <StyledCheckbox id={id} {...props} />
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
    </CheckboxContainer>
  )
}
