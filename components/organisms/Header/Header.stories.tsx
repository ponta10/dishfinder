import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Header } from '.'

const meta: Meta = {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'centered',
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => <Header />,
}
