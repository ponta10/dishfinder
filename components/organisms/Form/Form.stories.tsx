import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Form } from '.'
import { TextField } from '@/components/atoms/TextField'
import { Button } from '@/components/atoms/Button'
import { z } from 'zod'

const meta: Meta = {
  title: 'Components/Form',
  component: Form,
  parameters: {
    layout: 'centered',
  },
}

export default meta

type Story = StoryObj<typeof meta>

const sampleSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
})

export const Default: Story = {
  args: {
    schema: sampleSchema,
    onSubmit: (data: any) => {
      console.log(data)
    },
  },
  render: (args) => {
    const { schema, onSubmit } = args
    return (
      <Form schema={schema} onSubmit={onSubmit}>
        {({ control }) => (
          <>
            <TextField
              label="First Name"
              name="firstName"
              control={control}
              placeholder="Enter First Name"
            />
            <TextField
              label="Last Name"
              name="lastName"
              control={control}
              placeholder="Enter Last Name"
            />
            <Button type="submit" text="Submit" />
          </>
        )}
      </Form>
    )
  },
}
