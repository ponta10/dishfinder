import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '.'

const meta: Meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    bgcolor: { control: 'color' },
    textcolor: { control: 'color' },
    text: { control: 'text' },
    width: { control: 'text' },
    fontSize: { control: 'text' },
    type: {
      control: { type: 'select', options: ['button', 'submit', 'reset'] },
    },
    disabled: { control: 'boolean' },
    onClick: { action: 'clicked' },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    text: 'Default Button',
  },
}

export const SearchButton: Story = {
  args: {
    text: '検索',
    bgcolor: '#FFA234',
    textcolor: '#fff',
    fontSize: '32px',
  },
}
