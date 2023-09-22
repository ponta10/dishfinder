import type { Meta, StoryObj } from '@storybook/react'
import { Tag } from '.' // Tagコンポーネントの正しいパスを指定してください

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
    bgColor: '#fff',
  },
}

export const ClickableTag: Story = {
  args: {
    text: 'Clickable Tag',
    bgColor: '#FFA234',
    onClick: () => console.log('Tag clicked!'),
  },
}
