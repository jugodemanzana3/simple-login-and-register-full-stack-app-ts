import { api, showAlert, redirectToPage } from "../utils/utils"
import { validateInputs, confirmPasswordMatch, validatePasswordLength, addFieldError, removeFieldsError } from "../utils/form-validation"
import { handleEyeIcon, handleEyeOffIcon } from "../utils/toggle-password-visibility"

const passwordInputs = document.querySelectorAll(".input") as NodeListOf<HTMLInputElement>
const eyeIcons = document.querySelectorAll(".eye-icon") as NodeListOf<HTMLElement>
const eyeOffIcons = document.querySelectorAll(".eye-off-icon") as NodeListOf<HTMLElement>
const form = document.querySelector(".form") as HTMLFormElement

let token: string

const getUrlToken = () => {
  const urlParams = new URLSearchParams(window.location.search)
  const urlToken = urlParams.get("token")

  if (urlToken) {
    token = urlToken
  } else {
    window.location.href = "./forgot-password.html"
  }
}

getUrlToken()

passwordInputs.forEach((passwordInput, i) => {
  eyeIcons[i].addEventListener("click", () => handleEyeIcon(passwordInput, eyeIcons[i], eyeOffIcons[i]))
  eyeOffIcons[i].addEventListener("click", () => handleEyeOffIcon(passwordInput, eyeIcons[i], eyeOffIcons[i]))
})

const handleFormSubmit = (e: Event) => {
  e.preventDefault()

  const labels = document.querySelectorAll<HTMLInputElement>(".label")
  const inputs = document.querySelectorAll<HTMLInputElement>(".input")
  const passwordInput = document.querySelector("#password-input") as HTMLInputElement
  const confirmPasswordInput = document.querySelector("#confirm-password-input") as HTMLInputElement
  const alertMessage = document.querySelector(".alert-message") as HTMLElement
  const errorMessages = document.querySelectorAll(".error-message") as NodeList

  const passwordValue = passwordInput.value.trim()
  const passwordLabel = labels[0] as HTMLElement

  const confirmPasswordValue = confirmPasswordInput.value.trim()
  const confirmPasswordLabel = labels[1] as HTMLElement

  const globalError = errorMessages[2] as HTMLElement

  removeFieldsError(errorMessages, inputs, labels, globalError)

  if (validateInputs(labels, inputs, errorMessages)) return

  if (
    confirmPasswordMatch(passwordValue, confirmPasswordValue, globalError, confirmPasswordInput, confirmPasswordLabel)
  )
    return

  if (validatePasswordLength(passwordValue, globalError, passwordInput, passwordLabel)) return

  const dataFetching = async () => {
    const submitButton = document.querySelector(".submit-button") as HTMLButtonElement

    const formData = JSON.stringify({
      newPassword: passwordValue,
      confirmNewPassword: confirmPasswordValue,
    })

    submitButton.classList.add("loading")

    try {
      const res = await api.post("/api/auth/reset-password", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      submitButton.classList.remove("loading")

      showAlert(alertMessage, res.data.message)

      passwordInput.value = ""
      confirmPasswordInput.value = ""

      redirectToPage("./my-account.html")
    } catch (e) {
      console.error(e.response.data)

      const message: string = e.response.data.message

      submitButton.classList.remove("loading")

      addFieldError(globalError, passwordInput, message, true, passwordLabel, true)
    }
  }

  dataFetching()
}

form.addEventListener("submit", handleFormSubmit)
