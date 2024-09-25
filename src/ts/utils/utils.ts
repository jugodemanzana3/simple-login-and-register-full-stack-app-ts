import axios, { isAxiosError } from "axios";

import { API_URL } from "../config";
import { CSS_CLASSES } from "../constants";

const api = axios.create({
  baseURL: `${API_URL}`,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

const showAlert = (alertMessageDiv: HTMLElement, message: string) => {
  alertMessageDiv.textContent = message;
  alertMessageDiv.classList.add(CSS_CLASSES.visible);

  setTimeout(() => {
    alertMessageDiv.classList.remove(CSS_CLASSES.visible);
  }, 3000);
};

const redirectToPage = (page: string) => {
  setTimeout(() => {
    window.location.href = `./${page}.html`;
  }, 3000);
};

const verifyToken = async (page: string) => {
  try {
    const res = await api.get("/api/auth/verify");

    window.location.href = `./${page}.html`;

    return res.data;
  } catch (e: unknown) {
    if (isAxiosError(e)) {
      if (e.response) {
        console.error(e.response.data);
      }
    }
  }
};

const getUserData = async (page: string) => {
  try {
    const res = await api.get("/api/auth/verify");

    return res.data;
  } catch (e) {
    if (isAxiosError(e)) {
      if (e.response) {
        console.error(e.response.data);

        window.location.href = `./${page}.html`;
      }
    }
  }
};

export { api, showAlert, redirectToPage, verifyToken, getUserData };
