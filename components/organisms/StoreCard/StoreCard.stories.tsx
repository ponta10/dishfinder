import type { Meta, StoryObj } from '@storybook/react'
import { StoreCard } from '.'

const meta: Meta = {
  title: 'Components/StoreCard',
  component: StoreCard,
  argTypes: {
    tabelog: { control: 'number', min: 0, max: 5, step: 0.1 },
    google: { control: 'number', min: 0, max: 5, step: 0.1 },
    lunch: { control: 'text' },
    dinner: { control: 'text' },
    name: { control: 'text' },
    link: { control: 'text' },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    tabelog: 4.2,
    google: 4.0,
    lunch: '¥1,000~1,999',
    dinner: '¥3,000~3,999',
    name: 'Sample Store',
    link: 'https://example.com',
  },
}

export const AnotherStore: Story = {
  args: {
    tabelog: 3.8,
    google: 3.5,
    lunch: '¥1,000~1,999',
    dinner: '¥5,000~5,999',
    name: 'Another Store',
    link: 'https://another-example.com',
  },
}
