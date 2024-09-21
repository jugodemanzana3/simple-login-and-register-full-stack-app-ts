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

const verifyToken = async (page: string) => {
  try {
    const res = await api.get("/api/auth/verify")

    window.location.href = `./${page}.html`

    return res.data
  } catch (e) {
    console.error(e.response.data)
  }
}

const getUserData = async (page: string) => {
  try {
    const res = await api.get("/api/auth/verify")

    return res.data
  } catch (e) {
    console.error(e.response.data)

    window.location.href = `./${page}.html`
  }
}

export { api, showAlert, redirectToPage, verifyToken, getUserData }
