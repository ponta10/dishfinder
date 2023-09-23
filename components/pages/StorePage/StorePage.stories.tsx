import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { StorePage } from '.'

const meta: Meta = {
  title: 'Components/StorePage',
  component: StorePage,
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => <StorePage />,
}
