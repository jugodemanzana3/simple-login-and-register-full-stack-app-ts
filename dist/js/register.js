var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
import {
  validateEmail,
  validateInputs,
  validatePasswordLength,
  checkAuth,
} from "./utils.js";
import config from "./config.js";
//
checkAuth("my-account");
// Show and hide password
const passwordInput = document.querySelector("#password-input");
const eyeIcon = document.querySelector(".eye-icon");
const eyeOffIcon = document.querySelector(".eye-off-icon");
let isVisible = false;
const handlePasswordInput = () => {
  if (passwordInput.value === "") {
    hideIcon(isVisible);
  } else {
    showIcon(isVisible);
  }
};
const showIcon = (p) => {
  const eyeIcon = document.querySelector(".eye-icon");
  const eyeOffIcon = document.querySelector(".eye-off-icon");
  if (p) {
    eyeOffIcon.classList.add("visible");
  } else {
    eyeIcon.classList.add("visible");
  }
};
const hideIcon = (p) => {
  const eyeIcon = document.querySelector(".eye-icon");
  const eyeOffIcon = document.querySelector(".eye-off-icon");
  if (p) {
    eyeOffIcon.classList.remove("visible");
  } else {
    eyeIcon.classList.remove("visible");
  }
};
const handleEyeIcon = () => {
  passwordInput.type = "text";
  isVisible = true;
  eyeIcon.classList.remove("visible");
  eyeOffIcon.classList.add("visible");
};
const handleEyeOffIcon = () => {
  passwordInput.type = "password";
  isVisible = false;
  eyeOffIcon.classList.remove("visible");
  eyeIcon.classList.add("visible");
};
passwordInput.addEventListener("input", handlePasswordInput);
eyeIcon.addEventListener("click", handleEyeIcon);
eyeOffIcon.addEventListener("click", handleEyeOffIcon);
// Form submit
const form = document.querySelector(".form");
const handleFormSubmit = (e) => {
  e.preventDefault();
  const labels = document.querySelectorAll(".label");
  const inputs = document.querySelectorAll(".input");
  const emailLabel = document.querySelector("#email-label");
  const registerPasswordLabel = document.querySelector("#password-label");
  const emailInput = document.querySelector("#email-input");
  const passwordInput = document.querySelector("#password-input");
  const requiredFields = document.querySelectorAll(".field-required");
  const errorMessage = document.querySelector(".error-message");
  if (validateInputs(labels, inputs, requiredFields, errorMessage)) return;
  if (validateEmail(emailInput.value, errorMessage, emailLabel, emailInput))
    return;
  if (
    validatePasswordLength(
      passwordInput.value,
      errorMessage,
      registerPasswordLabel,
      passwordInput,
    )
  )
    return;
  const dataFetching = () =>
    __awaiter(void 0, void 0, void 0, function* () {
      const nameInput = document.querySelector("#name-input");
      const submitButton = document.querySelector(".submit-button");
      const alertMessage = document.querySelector(".alert-message");
      const url = `${config.SERVER_URL}/api/auth/register`;
      submitButton.classList.add("loading");
      const data = {
        name: nameInput.value,
        email: emailInput.value,
        password: passwordInput.value,
      };
      const dataJSON = JSON.stringify(data);
      try {
        const res = yield fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: dataJSON,
          credentials: "include",
        });
        if (res.ok) {
          submitButton.classList.remove("loading");
          const data = yield res.json();
          alertMessage.textContent = data.message;
          alertMessage.classList.add("visible");
          setTimeout(() => {
            alertMessage.classList.remove("visible");
          }, 3000);
          errorMessage.textContent = "";
          errorMessage.classList.remove("visible");
          emailLabel.style.color = "";
          emailInput.style.outlineColor = "";
          emailInput.style.borderColor = "";
          setTimeout(() => {
            window.location.href = "./my-account.html";
          }, 3000);
        } else {
          submitButton.classList.remove("loading");
          const data = yield res.json();
          errorMessage.textContent = data.message;
          errorMessage.classList.add("visible");
          emailLabel.style.color = "#9A0000";
          emailInput.focus();
          emailInput.style.outlineColor = "#9A0000";
          emailInput.style.borderColor = "#9A0000";
        }
      } catch (error) {
        console.error(error);
        submitButton.classList.remove("loading");
      }
    });
  dataFetching();
};
form.addEventListener("submit", handleFormSubmit);
