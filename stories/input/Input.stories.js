import { createInput } from './Input'

export default {
  title: 'Brutal/Input',
  tags: ['autodocs'],
  render: ({ label, ...args }) => {
    return createInput({ label, ...args })
  },
  argTypes: {
    placeholder: { control: 'text' },
    onChange: { action: 'onChange' },
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
    placeholder: 'Text'
  }
}

export const Secondary = {
  args: {
    placeholder: 'Text'
  }
}

export const Large = {
  args: {
    size: 'lg',
    placeholder: 'Text'
  }
}

export const ExtraSmall = {
  args: {
    size: 'xs',
    placeholder: 'Text'
  }
}

export const Disabled = {
  args: {
    disabled: 'true',
    placeholder: 'Text'
  }
}
