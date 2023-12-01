import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';

import Contact from './Contact';

const meta: Meta<typeof Contact> = {
  component: Contact,
  title: 'App/Components/Contact',
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {}

export const FieldsExist: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const email = canvas.getByLabelText(/email/i)
    const question = canvas.getByLabelText(/question/i)
    const submit = canvas.getByText(/post/i)
    
    await expect(email).toBeInTheDocument()
    await expect(question).toBeInTheDocument()
    await expect(submit).toBeInTheDocument()
  }
}

export const EmptyFields: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const submit = canvas.getByRole('button', {
      name: /post/i
    })

    await userEvent.click(submit)
    await expect(canvas.getByText(/enter your email/i)).toBeInTheDocument()
    await expect(canvas.getByText(/enter a question/i)).toBeInTheDocument()
  }
}

export const InvalidEmail: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const email = canvas.getByLabelText(/email/i)
    const submit = canvas.getByRole('button', {
      name: /post/i
    })

    await userEvent.type(email, 'invalidEmailAddress')
    await userEvent.click(submit)
    await expect(canvas.getByText(/provide a valid email/i)).toBeInTheDocument()
  }
}

export const ValidEmail: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const email = canvas.getByLabelText(/email/i)
    const submit = canvas.getByRole('button', {
      name: /post/i
    })

    await userEvent.type(email, 'elmer.ciccc@gmail.com')
    await userEvent.click(submit)
    await expect(canvas.queryByText(/provide a valid email/i)).not.toBeInTheDocument()
  }
}

export const ValidFields: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const email = canvas.getByLabelText(/email/i)
    const question = canvas.getByLabelText(/question/i)
    const submit = canvas.getByRole('button', {
      name: /post/i
    })

    await userEvent.type(email, 'elmer.ciccc@gmail.com')
    await userEvent.type(question, 'Did you go shopping today?')
    await userEvent.click(submit)

    await expect(canvas.queryByText(/provide a valid email/i)).not.toBeInTheDocument()
    await expect(canvas.queryByText(/enter your email/i)).not.toBeInTheDocument()
    await expect(canvas.queryByText(/enter a question/i)).not.toBeInTheDocument()
  }
}