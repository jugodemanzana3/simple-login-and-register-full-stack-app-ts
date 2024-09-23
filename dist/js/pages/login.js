import { api, showAlert, redirectToPage, verifyToken } from "../utils/utils";
import { validateEmail, validateInputs, addFieldError, removeFieldsError } from "../utils/form-validation";
import { handleEyeIcon, handleEyeOffIcon } from "../utils/toggle-password-visibility";
const passwordInput = document.querySelector("#password-input");
const eyeIcon = document.querySelector(".eye-icon");
const eyeOffIcon = document.querySelector(".eye-off-icon");
const form = document.querySelector(".form");
verifyToken("my-account");
const handleFormSubmit = (e) => {
    e.preventDefault();
    const labels = document.querySelectorAll(".label");
    const inputs = document.querySelectorAll(".input");
    const emailInput = document.querySelector("#email-input");
    const passwordInput = document.querySelector("#password-input");
    const errorMessages = document.querySelectorAll(".error-message");
    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();
    const emailLabel = labels[0];
    const passwordLabel = labels[1];
    const globalError = errorMessages[2];
    removeFieldsError(errorMessages, inputs, labels, globalError);
    if (validateInputs(labels, inputs, errorMessages))
        return;
    if (validateEmail(emailValue, globalError, emailInput, emailLabel))
        return;
    const dataFetching = async () => {
        const submitButton = document.querySelector(".submit-button");
        const alertMessage = document.querySelector(".alert-message");
        submitButton.classList.add("loading");
        const formData = JSON.stringify({
            email: emailValue,
            password: passwordValue,
        });
        try {
            const res = await api.post("/api/auth/login", formData);
            submitButton.classList.remove("loading");
            showAlert(alertMessage, res.data.message);
            redirectToPage("my-account");
        }
        catch (e) {
            console.error(e.response.data);
            const message = e.response.data.message;
            submitButton.classList.remove("loading");
            if (message.includes("cuenta")) {
                addFieldError(globalError, emailInput, message, true, emailLabel, true);
            }
            else if (message.includes("Contraseña")) {
                addFieldError(globalError, passwordInput, message, true, passwordLabel, true);
            }
        }
    };
    dataFetching();
};
eyeIcon.addEventListener("click", () => handleEyeIcon(passwordInput, eyeIcon, eyeOffIcon));
eyeOffIcon.addEventListener("click", () => handleEyeOffIcon(passwordInput, eyeIcon, eyeOffIcon));
form.addEventListener("submit", handleFormSubmit);
