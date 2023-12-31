import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Select, SelectProps } from '.'
import { useForm } from 'react-hook-form'

const meta: Meta = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    onChange: { action: 'changed' },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = (args: SelectProps) => {
  const { control } = useForm()
  return <Select {...args} name="defaultSelect" control={control} />
}
Default.args = {
  label: 'Default Select',
  items: [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
  ],
}

export const WithError: Story = (args: SelectProps) => {
  const { control } = useForm()
  return <Select {...args} name="errorSelect" control={control} />
}

WithError.args = {
  label: 'Error Select',
  error: true,
  helperText: 'This field has an error',
  items: [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
  ],
}
