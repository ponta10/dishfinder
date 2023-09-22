import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Card } from '.'

const meta: Meta = {
  title: 'Components/Card',
  component: Card,
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    bgColor: '#f5f5f5',
    width: '300px',
    children: (
      <>
        <h2>Title</h2>
        <p>This is a default card.</p>
      </>
    ),
  },
}

export const CustomContent: Story = {
  args: {
    bgColor: '#e0e0e0',
    width: '400px',
    children: (
      <>
        <h3>Custom Card</h3>
        <p>You can customize the content of the card.</p>
      </>
    ),
  },
}
