const handleEyeIcon = (input: HTMLInputElement, eyeIcon: HTMLElement, eyeOffIcon: HTMLElement): void => {
  input.type = "text"
  eyeIcon.classList.remove("visible")
  eyeOffIcon.classList.add("visible")
}

const handleEyeIcons = () => {}

const handleEyeOffIcon = (input: HTMLInputElement, eyeIcon: HTMLElement, eyeOffIcon: HTMLElement) => {
  input.type = "password"
  eyeIcon.classList.add("visible")
  eyeOffIcon.classList.remove("visible")
}

const handleEyeOffIcons = () => {}

export { handleEyeIcon, handleEyeIcons, handleEyeOffIcon, handleEyeOffIcons }
