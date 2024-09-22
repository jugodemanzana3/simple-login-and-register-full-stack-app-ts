import { api, showAlert, redirectToPage, verifyToken } from "../utils/utils"
import {
  validateEmail,
  validateInputs,
  addFieldError,
  removeFieldsError,
  validatePasswordLength,
} from "../utils/form-validation"
import { handleEyeIcon, handleEyeOffIcon } from "../utils/toggle-password-visibility"

const passwordInput = document.querySelector("#password-input") as HTMLInputElement
const eyeIcon = document.querySelector(".eye-icon") as HTMLElement
const eyeOffIcon = document.querySelector(".eye-off-icon") as HTMLElement
const form = document.querySelector(".form") as HTMLFormElement

verifyToken("my-account")

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
  const emailLabel = labels[1] as HTMLElement

  const passwordValue = passwordInput.value.trim()
  const passwordLabel = labels[2] as HTMLElement

  const globalError = errorMessages[3] as HTMLElement

  removeFieldsError(errorMessages, inputs, labels, globalError)

  if (validateInputs(labels, inputs, errorMessages)) return

  if (validateEmail(emailValue, globalError, emailInput, emailLabel)) return

  if (validatePasswordLength(passwordValue, globalError, passwordInput, passwordLabel)) return

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

      redirectToPage("my-account")
    } catch (e) {
      console.error(e.response.data)

      const message: string = e.response.data.message

      submitButton.classList.remove("loading")

      addFieldError(globalError, passwordInput, message, true, passwordLabel, true)
    }
  }

  dataFetching()
}

eyeIcon.addEventListener("click", () => handleEyeIcon(passwordInput, eyeIcon, eyeOffIcon))
eyeOffIcon.addEventListener("click", () => handleEyeOffIcon(passwordInput, eyeIcon, eyeOffIcon))
form.addEventListener("submit", handleFormSubmit)
