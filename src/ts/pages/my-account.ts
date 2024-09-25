import { api, showAlert, redirectToPage, getUserData } from "../utils/utils";
import { PAGES, SELECTORS } from "../constants";

import { isAxiosError } from "axios";

const logoutButton = document.querySelector(SELECTORS.logoutButton) as HTMLButtonElement;

const fetchData = async (page: string) => {
  const userName = document.querySelector(SELECTORS.userName) as HTMLElement;

  const data = await getUserData(page);
  if (data) {
    userName.textContent = data.name;
  }
};

fetchData(PAGES.login);

const handleLogoutButton = () => {
  const logout = async () => {
    const alertMessage = document.querySelector(SELECTORS.alerMessage) as HTMLElement;

    try {
      const res = await api.post("/api/auth/logout");

      showAlert(alertMessage, res.data.message);

      redirectToPage(PAGES.login);
    } catch (e: unknown) {
      if (isAxiosError(e)) {
        if (e.response) {
          console.error(e.response.data);
        }
      }
    }
  };

  logout();
};

logoutButton.addEventListener("click", handleLogoutButton);
