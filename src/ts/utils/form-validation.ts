const validateEmail = (
  emailValue: string,
  errorMessage: HTMLElement,
  emailInput: HTMLInputElement,
  label: HTMLElement
) => {

  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (!regex.test(emailValue)) {
    addFieldError(errorMessage, emailInput, "Email invalido.", true, label, true)

    return true
  }

  return false
}

const validateInputs = (labels: NodeList, inputs: NodeList, errorMessages: NodeList) => {
  let emptyInput = false

  inputs.forEach((input, i) => {
    const inputElement = input as HTMLInputElement

    if (inputElement.value === "") {
      const label = labels[i] as HTMLElement
      const errorMessage = errorMessages[i] as HTMLElement

      addFieldError(errorMessage, inputElement, "Este campo es obligatorio.", false, label, false)

      emptyInput = true
    } else {
      const label = labels[i] as HTMLElement
      const errorMessage = errorMessages[i] as HTMLElement

      removeFieldError(errorMessage, inputElement, label)
    }
  })

  return emptyInput
}

const validatePasswordLength = (
  password: string,
  errorMessage: HTMLElement,
  input: HTMLInputElement,
  label: HTMLElement
) => {
  if (password.length < 8) {
    addFieldError(errorMessage, input, "Logitud de contraseña invalida.", true, label, true)

    return true
  }

  return false
}

const confirmPasswordMatch = (
  password: string,
  confirmPassword: string,
  errorMessage: HTMLElement,
  confirmPasswordInput: HTMLInputElement,
  label: HTMLElement
) => {

  if (password !== confirmPassword) {
    addFieldError(errorMessage, confirmPasswordInput, "Las contraseñas no coinciden.", true, label, true)

    return true
  }

  return false
}

const validateInput = (inputValue: string, requiredField: HTMLElement, input: HTMLElement) => {
  const labelName = input.id.replace("-input", "")
  const label = document.querySelector(`label[for="${labelName}"]`) as HTMLElement

  if (inputValue === "") {
    requiredField.style.display = "block"

    label.style.color = "#9A0000"
    input.style.outlineColor = "#9A0000"
    input.style.borderColor = "#9A0000"

    return true
  } else {
    requiredField.style.display = ""
  }

  return false
}

const addFieldError = (
  errorMessage: HTMLElement,
  input: HTMLInputElement,
  message: string,
  isBold: boolean,
  label: HTMLElement,
  isFocused: boolean
) => {
  if (isBold) {
    errorMessage.style.fontWeight = "600"
  } else {
    errorMessage.style.fontWeight = "500"
  }

  errorMessage.textContent = message
  errorMessage.classList.add("visible")

  if (isFocused) input.focus()

  label.style.color = "#9A0000"
  input.style.outlineColor = "#9A0000"
  input.style.borderColor = "#9A0000"
}

const removeFieldsError = (errorMessages: NodeList, inputs: NodeList, labels: NodeList, globalError: HTMLElement) => {
  console.log("removeFieldsError")

  inputs.forEach((input, i) => {
    const label = labels[i] as HTMLElement
    const errorMessage = errorMessages[i] as HTMLElement
    const inputElement = inputs[i] as HTMLInputElement

    errorMessage.textContent = ""
    errorMessage.classList.remove("visible")

    label.style.color = ""

    inputElement.style.outlineColor = ""
    inputElement.style.borderColor = ""
  })

  globalError.textContent = ""
  globalError.classList.remove("visible")
}

const removeFieldError = (errorMessage: HTMLElement, input: HTMLInputElement, label: HTMLElement) => {
  errorMessage.textContent = ""
  errorMessage.classList.remove("visible")

  label.style.color = ""
  input.style.outlineColor = ""
  input.style.borderColor = ""
}

export {
  validateEmail,
  validateInputs,
  validatePasswordLength,
  confirmPasswordMatch,
  validateInput,
  addFieldError,
  removeFieldsError,
  removeFieldError,
}
