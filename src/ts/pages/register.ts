import { api, showAlert, redirectToPage, verifyAuth } from "../utils/utils"

import {
  validateEmail,
  validateInputs,
  addFieldError,
  removeFieldsError,
  validatePasswordLength,
} from "../utils/form-validation"

const passwordInput = document.querySelector("#password-input") as HTMLInputElement
const eyeIcon = document.querySelector(".eye-icon") as HTMLElement
const eyeOffIcon = document.querySelector(".eye-off-icon") as HTMLElement
const form = document.querySelector(".form") as HTMLFormElement

let isVisible: boolean = false

verifyAuth("my-account")

const handlePasswordInput = () => {
  if (passwordInput.value === "") {
    hideIcon(isVisible)
  } else {
    showIcon(isVisible)
  }
}

const showIcon = (p: boolean) => {
  const eyeIcon = document.querySelector(".eye-icon") as HTMLElement
  const eyeOffIcon = document.querySelector(".eye-off-icon") as HTMLElement

  if (p) {
    eyeOffIcon.classList.add("visible")
  } else {
    eyeIcon.classList.add("visible")
  }
}

const hideIcon = (p: boolean) => {
  const eyeIcon = document.querySelector(".eye-icon") as HTMLElement
  const eyeOffIcon = document.querySelector(".eye-off-icon") as HTMLElement

  if (p) {
    eyeOffIcon.classList.remove("visible")
  } else {
    eyeIcon.classList.remove("visible")
  }
}

const handleEyeIcon = () => {
  passwordInput.type = "text"
  isVisible = true
  eyeIcon.classList.remove("visible")
  eyeOffIcon.classList.add("visible")
}

const handleEyeOffIcon = () => {
  passwordInput.type = "password"
  isVisible = false
  eyeOffIcon.classList.remove("visible")
  eyeIcon.classList.add("visible")
}

const handleFormSubmit = (e: Event) => {
  e.preventDefault()

  const labels = document.querySelectorAll<HTMLInputElement>(".label")
  const inputs = document.querySelectorAll<HTMLInputElement>(".input")
  const nameInput = document.querySelector("#name-input") as HTMLInputElement
  const emailInput = document.querySelector("#email-input") as HTMLInputElement
  const passwordInput = document.querySelector("#password-input") as HTMLInputElement
  const errorMessages = document.querySelectorAll(".error-message") as NodeList

  const nameValue = nameInput.value.trim()

  const emailValue = emailInput.value.trim()
  const emailError = errorMessages[1] as HTMLElement
  const emailLabel = labels[1] as HTMLElement

  const passwordValue = passwordInput.value.trim()
  const passwordError = errorMessages[2] as HTMLElement
  const passwordLabel = labels[2] as HTMLElement

  const globalError = errorMessages[3] as HTMLElement

  removeFieldsError(errorMessages, inputs, labels, globalError)

  if (validateInputs(labels, inputs, errorMessages)) return

  if (validateEmail(emailValue, emailError, emailInput, emailLabel)) return

  if (validatePasswordLength(passwordValue, passwordError, passwordInput, passwordLabel)) return

  const dataFetching = async () => {
    const submitButton = document.querySelector(".submit-button") as HTMLButtonElement
    const alertMessage = document.querySelector(".alert-message") as HTMLElement

    submitButton.classList.add("loading")

    const formData = JSON.stringify({
      name: nameValue,
      email: emailValue,
      password: passwordValue,
    })

    try {
      const res = await api.post("/api/auth/register", formData)

      submitButton.classList.remove("loading")

      showAlert(alertMessage, res.data.message)

      redirectToPage("./my-account.html")
    } catch (e) {
      console.error(e.response.data)

      const message: string = e.response.data.message

      submitButton.classList.remove("loading")

      addFieldError(passwordError, passwordInput, message, true, passwordLabel, true)
    }
  }

  dataFetching()
}

passwordInput.addEventListener("input", handlePasswordInput)
eyeIcon.addEventListener("click", handleEyeIcon)
eyeOffIcon.addEventListener("click", handleEyeOffIcon)
form.addEventListener("submit", handleFormSubmit)
