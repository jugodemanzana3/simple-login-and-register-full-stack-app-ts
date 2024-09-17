import { validateInputs, confirmPasswordMatch, validatePasswordLength } from "./utils.js"

import config from "./config.js"

//
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

console.log(token)

// Revisar
// Show and hide password for multiple inputs
const passwordInputs = document.querySelectorAll(".input") as NodeListOf<HTMLInputElement>
const eyeIcons = document.querySelectorAll(".eye-icon") as NodeListOf<HTMLElement>
const eyeOffIcons = document.querySelectorAll(".eye-off-icon") as NodeListOf<HTMLElement>

const isVisible = [false, false]

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

//
const form = document.querySelector(".form") as HTMLFormElement

const handleFormSubmit = (e: Event) => {
  e.preventDefault()
  const labels = document.querySelectorAll<HTMLInputElement>(".label")
  const inputs = document.querySelectorAll<HTMLInputElement>(".input")

  const passwordLabel = document.querySelector("#password-label") as HTMLInputElement
  const confirmPasswordLabel = document.querySelector("#confirm-password-label") as HTMLInputElement

  const passwordInput = document.querySelector("#password-input") as HTMLInputElement
  const confirmPasswordInput = document.querySelector("#confirm-password-input") as HTMLInputElement

  const requiredFields = document.querySelectorAll(".field-required")
  const errorMessage = document.querySelector(".error-message") as HTMLElement
  const alertMessage = document.querySelector(".alert-message") as HTMLElement

  if (validateInputs(labels, inputs, requiredFields, errorMessage)) return

  if (
    confirmPasswordMatch(
      passwordInput.value,
      confirmPasswordInput.value,
      errorMessage,
      confirmPasswordLabel,
      confirmPasswordInput
    )
  )
    return

  if (validatePasswordLength(passwordInput.value, errorMessage, passwordLabel, passwordInput)) return

  const dataFetching = async () => {
    const submitButton = document.querySelector(".submit-button") as HTMLButtonElement
    const url = `${config.SERVER_URL}/api/auth/reset-password`

    const bodyData = JSON.stringify({
      newPassword: confirmPasswordInput.value,
    })

    submitButton.classList.add("loading")

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: bodyData,
      })

      const data = await res.json()

      if (res.ok) {
        submitButton.classList.remove("loading")

        alertMessage.textContent = data.message
        alertMessage.classList.add("visible")

        setTimeout(() => {
          alertMessage.classList.remove("visible")
        }, 3000)

        passwordInput.value = ""
        confirmPasswordInput.value = ""

        setTimeout(() => {
          window.location.href = "./login.html"
        }, 3000)
      } else {
        submitButton.classList.remove("loading")

        errorMessage.textContent = data.error
        errorMessage.classList.add("visible")

        passwordLabel.style.color = "#9A0000"
        passwordInput.style.outlineColor = "#9A0000"
        passwordInput.style.borderColor = "#9A0000"

        confirmPasswordLabel.style.color = "#9A0000"
        confirmPasswordInput.style.outlineColor = "#9A0000"
        confirmPasswordInput.style.borderColor = "#9A0000"
      }
    } catch (e) {
      submitButton.classList.remove("loading")

      console.error(e)
    }
  }

  dataFetching()
}

form.addEventListener("submit", handleFormSubmit)
