// Checkbox.stories.tsx

import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox, CheckboxProps } from '.' // 適切なパスを指定してください
import { useForm } from 'react-hook-form'

const meta: Meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = (args: CheckboxProps) => {
  const { control } = useForm()
  return <Checkbox {...args} control={control} />
}
Default.args = {
  id: 'defaultCheckbox',
  label: 'Default Checkbox',
  name: 'defaultCheckbox',
}

export const DefaultChecked: Story = (args: CheckboxProps) => {
  const { control } = useForm()
  return <Checkbox {...args} control={control} />
}
DefaultChecked.args = {
  id: 'defaultCheckedCheckbox',
  label: 'DefaultChecked Checkbox',
  name: 'defaultCheckedCheckbox',
  defaultChecked: true,
}

export const Disabled: Story = (args: CheckboxProps) => {
  const { control } = useForm()
  return <Checkbox {...args} control={control} />
}
Disabled.args = {
  id: 'disabledCheckbox',
  label: 'Disabled Checkbox',
  name: 'disabledCheckbox',
  disabled: true,
}
