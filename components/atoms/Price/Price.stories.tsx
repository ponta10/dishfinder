import type { Meta, StoryObj } from '@storybook/react'
import { Price } from '.'

const meta: Meta = {
  title: 'Example/Price',
  component: Price,
  parameters: {
    layout: 'centered',
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    lunch: '¥1,000~1,999',
    dinner: '¥3,000~3,999',
  },
}

export const ExpensiveMeal: Story = {
  args: {
    lunch: '¥1,000~1,999',
    dinner: '¥5,000~5,999',
  },
}

export const CheapMeal: Story = {
  args: {
    lunch: '-',
    dinner: '10,000~15,000',
    flex: true,
  },
}
