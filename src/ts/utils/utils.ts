import axios from "axios"

import config from "../config"

const api = axios.create({
  baseURL: `${config.SERVER_URL}`,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
})

const showAlert = (alertMessageDiv: HTMLElement, message: string) => {
  alertMessageDiv.textContent = message
  alertMessageDiv.classList.add("visible")

  setTimeout(() => {
    alertMessageDiv.classList.remove("visible")
  }, 3000)
}

const redirectToPage = (page: string) => {
  setTimeout(() => {
    window.location.href = page
  }, 3000)
}

// auth-validation.ts
const verifyAuth = async (page: string) => {
  try {
    await api.get("/api/auth/verify")

    window.location.href = `./${page}.html`
  } catch (e) {
    console.error(e.response.data)
  }
}

export { api, showAlert, redirectToPage, verifyAuth }
