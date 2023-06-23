import { createButton } from './Button'

export default {
  title: 'Brutal/Button',
  tags: ['autodocs'],
  render: ({ label, ...args }) => {
    return createButton({ label, ...args })
  },
  argTypes: {
    label: { control: 'text' },
    onClick: { action: 'onClick' },
    mode: {
      control: { type: 'select' },
      options: ['primary', 'secondary']
    },
    disabled: { control: 'boolean' },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg']
    }
  }
}

export const Primary = {
  args: {
    mode: 'primary',
    label: 'Button',
    disabled: false
  }
}

export const Secondary = {
  args: {
    label: 'Button'
  }
}

export const Large = {
  args: {
    size: 'lg',
    label: 'Button'
  }
}

export const ExtraSmall = {
  args: {
    size: 'xs',
    label: 'Button'
  }
}

export const Disabled = {
  args: {
    disabled: 'true',
    label: 'Button'
  }
}
