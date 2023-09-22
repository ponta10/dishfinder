import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { SearchBox } from '.' // 適切なパスを指定してください

const meta: Meta = {
  title: 'Components/SearchBox',
  component: SearchBox,
  parameters: {
    layout: 'centered',
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => <SearchBox />,
}
