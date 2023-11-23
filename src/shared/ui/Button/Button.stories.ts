import type { Meta, StoryObj } from '@storybook/react'

import { Button, ThemeButton } from './Button'
import 'app/styles/index.scss'

const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    theme: { control: 'theme' }
  }
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    children: 'Text'
  }
}

export const Secondary: Story = {
  args: {
    children: 'CLEAR',
    theme: ThemeButton.CLEAR
  }
}

export const Outlined: Story = {
  args: {
    children: 'OUTLINE',
    theme: ThemeButton.OUTLINE
  }
}
