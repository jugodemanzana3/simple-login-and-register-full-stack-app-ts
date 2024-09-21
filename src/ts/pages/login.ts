import { api, showAlert, redirectToPage, verifyAuth } from "../utils/utils"
import { validateEmail, validateInputs, addFieldError, removeFieldsError } from "../utils/form-validation"
import { handleEyeIcon, handleEyeOffIcon } from "../utils/toggle-password-visibility"

const passwordInput = document.querySelector("#password-input") as HTMLInputElement
const eyeIcon = document.querySelector(".eye-icon") as HTMLElement
const eyeOffIcon = document.querySelector(".eye-off-icon") as HTMLElement
const form = document.querySelector(".form") as HTMLFormElement

verifyAuth("my-account")

const handleFormSubmit = (e: Event) => {
  e.preventDefault()

  const labels = document.querySelectorAll<HTMLInputElement>(".label") as NodeList
  const inputs = document.querySelectorAll<HTMLInputElement>(".input") as NodeList
  const emailInput = document.querySelector("#email-input") as HTMLInputElement
  const passwordInput = document.querySelector("#password-input") as HTMLInputElement
  const errorMessages = document.querySelectorAll(".error-message") as NodeList

  const emailValue = emailInput.value.trim()
  const passwordValue = passwordInput.value.trim()

  const emailLabel = labels[0] as HTMLElement
  const emailError = errorMessages[0] as HTMLElement
  const passwordLabel = labels[1] as HTMLElement
  // const passwordError = errorMessages[1] as HTMLElement

  const globalError = errorMessages[2] as HTMLElement

  removeFieldsError(errorMessages, inputs, labels, globalError)

  if (validateInputs(labels, inputs, errorMessages)) return

  if (validateEmail(emailValue, emailError, emailInput, emailLabel)) return

  const dataFetching = async () => {
    const submitButton = document.querySelector(".submit-button") as HTMLButtonElement
    const alertMessage = document.querySelector(".alert-message") as HTMLElement

    submitButton.classList.add("loading")

    const formData = JSON.stringify({
      email: emailValue,
      password: passwordValue,
    })

    try {
      const res = await api.post("/api/auth/login", formData)

      submitButton.classList.remove("loading")

      showAlert(alertMessage, res.data.message)

      redirectToPage("./my-account.html")
    } catch (e) {
      console.error(e.response.data)

      const message: string = e.response.data.message

      submitButton.classList.remove("loading")

      // if (e.response) console.log("res")

      // if (e.request) console.log("req")

      if (message.includes("cuenta")) {
        addFieldError(globalError, emailInput, message, true, emailLabel, true)
      } else if (message.includes("Contraseña")) {
        addFieldError(globalError, passwordInput, message, true, passwordLabel, true)
      }
    }
  }

  dataFetching()
}

eyeIcon.addEventListener("click", () => handleEyeIcon(passwordInput, eyeIcon, eyeOffIcon))
eyeOffIcon.addEventListener("click", () => handleEyeOffIcon(passwordInput, eyeIcon, eyeOffIcon))
form.addEventListener("submit", handleFormSubmit)
