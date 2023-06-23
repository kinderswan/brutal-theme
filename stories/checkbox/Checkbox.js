export const createCheckbox = ({ size = 'md', disabled, onChange, mode = 'primary', checked = true }) => {
  const checkbox = document.createElement('input')
  checkbox.type = 'checkbox'
  checkbox.addEventListener('change', onChange)
  checkbox.classList.add('brutal-checkbox', `size-${size}`, `mode-${mode}`)
  checkbox.disabled = disabled
  checkbox.checked = checked

  return checkbox
}
