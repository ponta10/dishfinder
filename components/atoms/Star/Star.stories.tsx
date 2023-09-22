import type { Meta, StoryObj } from '@storybook/react'
import { RatingStar } from '.' // RatingStarコンポーネントの正しいパスを指定してください

const meta: Meta = {
  title: 'Example/RatingStar',
  component: RatingStar,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    value: {
      control: {
        type: 'range',
        min: 0,
        max: 1,
        step: 0.1,
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    value: 0.5,
  },
}

export const EmptyStar: Story = {
  args: {
    value: 0,
    size: 40,
  },
}

export const FullStar: Story = {
  args: {
    value: 1,
  },
}

export const ThreeQuartersStar: Story = {
  args: {
    value: 0.75,
  },
}

export const OneQuarterStar: Story = {
  args: {
    value: 0.25,
  },
}
