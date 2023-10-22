import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Top } from '.'

const meta: Meta = {
  title: 'Components/Top',
  component: Top,
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => <Top />,
}
