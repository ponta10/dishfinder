import type { Meta, StoryObj } from '@storybook/react'
import { Select } from '.'

const meta: Meta = {
  title: 'Example/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    name: { control: 'text' },
    label: { control: 'text' },
    items: { control: 'object' },
    disabled: { control: 'boolean' },
    defaultValue: { control: 'text' },
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] },
    },
    error: { control: 'boolean' },
    helperText: { control: 'text' },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Default Select',
    items: [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
    ],
  },
}

export const WithError: Story = {
  args: {
    label: 'Select with Error',
    items: [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
    ],
    error: true,
    helperText: 'This field has an error',
  },
}
