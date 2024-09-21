import { api, showAlert, redirectToPage } from "../utils/utils"

import { validateInputs, confirmPasswordMatch, validatePasswordLength, addFieldError } from "../utils/form-validation"

const passwordInputs = document.querySelectorAll(".input") as NodeListOf<HTMLInputElement>
const eyeIcons = document.querySelectorAll(".eye-icon") as NodeListOf<HTMLElement>
const eyeOffIcons = document.querySelectorAll(".eye-off-icon") as NodeListOf<HTMLElement>
const form = document.querySelector(".form") as HTMLFormElement

const isVisible = [false, false]
let token: string

const getToken = () => {
  const urlParams = new URLSearchParams(window.location.search)
  const urlToken = urlParams.get("token")

  if (urlToken) {
    token = urlToken
  } else {
    window.location.href = "./forgot-password.html"
  }
}

getToken()

const handlePasswordInput = (index: number) => {
  const passwordInput = passwordInputs[index]
  if (passwordInput.value === "") {
    hideIcon(isVisible[index], index)
  } else {
    showIcon(isVisible[index], index)
  }
}

const showIcon = (isVisible: boolean, index: number) => {
  const eyeIcon = eyeIcons[index]
  const eyeOffIcon = eyeOffIcons[index]

  if (isVisible) {
    eyeOffIcon.classList.add("visible")
  } else {
    eyeIcon.classList.add("visible")
  }
}

const hideIcon = (isVisible: boolean, index: number) => {
  const eyeIcon = eyeIcons[index]
  const eyeOffIcon = eyeOffIcons[index]

  if (isVisible) {
    eyeOffIcon.classList.remove("visible")
  } else {
    eyeIcon.classList.remove("visible")
  }
}

const handleEyeIcon = (e: Event, index: number) => {
  e.preventDefault()
  const passwordInput = passwordInputs[index]
  passwordInput.type = "text"
  isVisible[index] = true
  eyeIcons[index].classList.remove("visible")
  eyeOffIcons[index].classList.add("visible")
}

const handleEyeOffIcon = (e: Event, index: number) => {
  e.preventDefault()
  const passwordInput = passwordInputs[index]
  passwordInput.type = "password"
  isVisible[index] = false
  eyeOffIcons[index].classList.remove("visible")
  eyeIcons[index].classList.add("visible")
}

passwordInputs.forEach((input, index) => {
  console.log(input)
  input.addEventListener("input", () => handlePasswordInput(index))
  eyeIcons[index].addEventListener("click", (e) => handleEyeIcon(e, index))
  eyeOffIcons[index].addEventListener("click", (e) => handleEyeOffIcon(e, index))
})

const handleFormSubmit = (e: Event) => {
  e.preventDefault()

  const labels = document.querySelectorAll<HTMLInputElement>(".label")
  const inputs = document.querySelectorAll<HTMLInputElement>(".input")
  const passwordInput = document.querySelector("#password-input") as HTMLInputElement
  const confirmPasswordInput = document.querySelector("#confirm-password-input") as HTMLInputElement
  // const requiredFieldsDiv = document.querySelectorAll(".field-required")
  const errorMessage = document.querySelector(".error-message") as HTMLElement
  const alertMessage = document.querySelector(".alert-message") as HTMLElement
  const errorMessages = document.querySelectorAll(".error-message") as NodeList

  const passwordValue = passwordInput.value.trim()
  const passwordLabel = labels[0] as HTMLElement
  const passwordError = errorMessages[0] as HTMLElement

  const confirmPasswordValue = confirmPasswordInput.value.trim()
  const confirmPasswordLabel = labels[1] as HTMLElement

  if (validateInputs(labels, inputs, errorMessages)) return

  if (
    confirmPasswordMatch(passwordValue, confirmPasswordValue, errorMessage, confirmPasswordInput, confirmPasswordLabel)
  )
    return

  if (validatePasswordLength(passwordValue, errorMessage, passwordInput, passwordLabel)) return

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

      addFieldError(passwordError, passwordInput, message, true, passwordLabel, true)
    }
  }

  dataFetching()
}

form.addEventListener("submit", handleFormSubmit)
