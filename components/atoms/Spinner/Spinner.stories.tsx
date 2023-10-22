import type { Meta, StoryObj } from '@storybook/react'
import { Spinner } from '.'

const meta: Meta = {
  title: 'Example/Spinner',
  component: Spinner,
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
