import type { Meta, StoryObj } from '@storybook/react'
import { Tag } from '.'

const meta: Meta = {
  title: 'Example/Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    text: 'Default Tag',
  },
}

export const RedTag: Story = {
  args: {
    text: 'White Tag',
    bgcolor: '#fff',
  },
}

export const ClickableTag: Story = {
  args: {
    text: 'Clickable Tag',
    bgcolor: '#FFA234',
    onClick: () => console.log('Tag clicked!'),
  },
}
