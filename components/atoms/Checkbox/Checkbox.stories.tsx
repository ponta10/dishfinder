import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox } from '.'

const meta: Meta = {
  title: 'Example/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    id: { control: 'text' },
    label: { control: 'text' },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    id: 'defaultCheckbox',
    label: 'Default Checkbox',
  },
}

export const Checked: Story = {
  args: {
    id: 'checkedCheckbox',
    label: 'Checked Checkbox',
    checked: true,
  },
}

export const DefaultChecked: Story = {
  args: {
    id: 'checkedCheckbox',
    label: 'Checked Checkbox',
    defaultChecked: true,
  },
}

export const Disabled: Story = {
  args: {
    id: 'disabledCheckbox',
    label: 'Disabled Checkbox',
    disabled: true,
  },
}
