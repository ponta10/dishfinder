import type { Meta, StoryObj } from '@storybook/react'
import { TextField } from '.'

const meta: Meta = {
  title: 'Example/TextField',
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

export const Default: Story = {
  args: {
    label: 'Default TextField',
    placeholder: 'Enter text...',
  },
}

export const PasswordField: Story = {
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter password...',
  },
}

export const ErrorField: Story = {
  args: {
    label: 'Error Field',
    error: true,
    helperText: 'This field has an error',
  },
}
