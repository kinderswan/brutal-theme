import { createCheckbox } from './Checkbox'

export default {
  title: 'Brutal/Checkbox',
  tags: ['autodocs'],
  render: ({ label, ...args }) => {
    return createCheckbox({ label, ...args })
  },
  argTypes: {
    onChange: { action: 'onChange' },
    mode: {
      control: { type: 'select' },
      options: ['primary', 'secondary']
    },
    disabled: { control: 'boolean' },
    checked: { control: 'boolean' },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg']
    }
  }
}

export const Primary = {
  args: {
    mode: 'primary'
  }
}

export const Secondary = {
  args: {
    mode: 'secondary'
  }
}

export const Large = {
  args: {
    size: 'lg'
  }
}

export const ExtraSmall = {
  args: {
    size: 'xs'
  }
}

export const Disabled = {
  args: {
    disabled: 'true'
  }
}
