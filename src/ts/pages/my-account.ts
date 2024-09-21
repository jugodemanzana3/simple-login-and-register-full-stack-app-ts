import { api, showAlert, redirectToPage } from "../utils/utils"

const logoutButton = document.querySelector(".logout-button") as HTMLButtonElement

const verifyToken = async () => {
  const userName = document.querySelector(".user-name") as HTMLElement

  try {
    const res = await api.get("/api/auth/verify")

    userName.textContent = res.data.name
  } catch (e) {
    console.log(e.response.data)

    window.location.href = "./login.html"
  }
}

verifyToken()

const handleLogoutButton = () => {
  const logout = async () => {
    const alertMessage = document.querySelector(".alert-message") as HTMLElement

    try {
      const res = await api.post("/api/auth/logout")

      showAlert(alertMessage, res.data.message)

      redirectToPage("./login.html")
    } catch (e) {
      console.error(e.response.data)
    }
  }

  logout()
}

logoutButton.addEventListener("click", handleLogoutButton)
