export const createButton = ({ size = 'md', disabled, label, onClick, mode = 'primary' }) => {
  const btn = document.createElement('button')
  btn.type = 'button'
  btn.innerText = label
  btn.addEventListener('click', onClick)
  btn.classList.add('brutal-button', `size-${size}`, `mode-${mode}`)
  btn.disabled = disabled

  return btn
}
