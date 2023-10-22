import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { TextField, TextFieldProps } from '.'
import { useForm } from 'react-hook-form'

const meta: Meta = {
  title: 'Components/TextField',
  component: TextField,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['text', 'password', 'email', 'number'],
      },
    },
    label: { control: 'text' },
    name: { control: 'text' },
    multiline: { control: 'boolean' },
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] },
    },
    rows: { control: 'number' },
    placeholder: { control: 'text' },
    error: { control: 'boolean' },
    helperText: { control: 'text' },
    readOnly: { control: 'boolean' },
    width: { control: 'text' },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = (args: TextFieldProps) => {
  const { control } = useForm()
  return <TextField {...args} control={control} />
}
Default.args = {
  label: 'Default TextField',
  placeholder: 'Enter text...',
}

export const PasswordField: Story = (args: TextFieldProps) => {
  const { control } = useForm()
  return <TextField {...args} control={control} />
}
PasswordField.args = {
  label: 'Password',
  type: 'password',
  placeholder: 'Enter password...',
}

export const ErrorField: Story = (args: TextFieldProps) => {
  const { control } = useForm()
  return <TextField {...args} control={control} />
}
ErrorField.args = {
  label: 'Error Field',
  error: true,
  helperText: 'This field has an error',
}
