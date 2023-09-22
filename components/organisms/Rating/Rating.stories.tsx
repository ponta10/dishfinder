import type { Meta, StoryObj } from '@storybook/react'
import { Rating } from '.'

const meta: Meta = {
  title: 'Example/Rating',
  component: Rating,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 5, step: 0.1 },
      description: 'Rating value between 0 to 5',
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    value: 3.5,
  },
}

export const FullRating: Story = {
  args: {
    value: 5,
    size: 40,
  },
}

export const NoRating: Story = {
  args: {
    value: 0,
  },
}

export const PartialRating: Story = {
  args: {
    value: 2.3,
  },
}
