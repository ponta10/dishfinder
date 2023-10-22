import type { Meta, StoryObj } from '@storybook/react'
import { Error } from '.'

const meta: Meta = {
  title: 'Example/Error',
  component: Error,
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
