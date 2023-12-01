import type { Meta, StoryObj } from '@storybook/react';

import Boxes from './Boxes';

const meta: Meta<typeof Boxes> = {
  component: Boxes,
  title: 'App/Components/Boxes',
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    color: { 
      control: { type: 'select' },
      options: ['black', 'white', 'blue']
    }
  }
}

export default meta

type Story = StoryObj<typeof meta>

/** Default look of Boxes */
export const Basic: Story = {}

/** Hovered state of Boxes */
export const Hovered: Story = {
  args: {
    hovered: true
  }
}

/** Boxes with Green background */
export const GreenBox: Story = {
  args: {
    backgroundColor: 'green',
    color: 'blue'
  }
}

/** Boxes with Red background */
export const RedBox: Story = {
  args: {
    backgroundColor: 'red'
  }
}

/** Boxes with Large font */
export const LargeFontBox: Story = {
  args: {
    fontSize: 48
  }
}

/** Wide Boxes */
export const WideBox: Story = {
  args: {
    width: 400
  }
}

/** 3 boxes */
export const ThreeBoxes: Story = {
  render: () => (
    <div>
      <Boxes backgroundColor="red" />
      <Boxes backgroundColor="green" />
      <Boxes backgroundColor="blue" />
    </div>
  )
}