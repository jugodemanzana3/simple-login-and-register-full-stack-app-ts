const handleEyeIcon = (input: HTMLInputElement, eyeIcon: HTMLElement, eyeOffIcon: HTMLElement) => {
  input.type = "text"
  eyeIcon.classList.remove("visible")
  eyeOffIcon.classList.add("visible")
}

const handleEyeOffIcon = (input: HTMLInputElement, eyeIcon: HTMLElement, eyeOffIcon: HTMLElement) => {
  input.type = "password"
  eyeIcon.classList.add("visible")
  eyeOffIcon.classList.remove("visible")
}

export { handleEyeIcon, handleEyeOffIcon }
