export const createInput = ({ size = 'md', disabled, placeholder, onChange, mode = 'primary' }) => {
  const input = document.createElement('input')
  input.type = 'text'
  input.placeholder = placeholder
  input.addEventListener('change', onChange)
  input.classList.add('brutal-input', `size-${size}`, `mode-${mode}`)
  input.disabled = disabled

  return input
}
