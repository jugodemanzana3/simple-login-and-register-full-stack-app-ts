import { api, showAlert, redirectToPage, verifyToken } from "../utils/utils";
import { validateEmail, validateInputs, addFieldError, removeFieldsError, validatePasswordLength, } from "../utils/form-validation";
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
    const nameInput = document.querySelector("#name-input");
    const emailInput = document.querySelector("#email-input");
    const passwordInput = document.querySelector("#password-input");
    const errorMessages = document.querySelectorAll(".error-message");
    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const emailLabel = labels[1];
    const passwordValue = passwordInput.value.trim();
    const passwordLabel = labels[2];
    const globalError = errorMessages[3];
    removeFieldsError(errorMessages, inputs, labels, globalError);
    if (validateInputs(labels, inputs, errorMessages))
        return;
    if (validateEmail(emailValue, globalError, emailInput, emailLabel))
        return;
    if (validatePasswordLength(passwordValue, globalError, passwordInput, passwordLabel))
        return;
    const dataFetching = async () => {
        const submitButton = document.querySelector(".submit-button");
        const alertMessage = document.querySelector(".alert-message");
        submitButton.classList.add("loading");
        const formData = JSON.stringify({
            name: nameValue,
            email: emailValue,
            password: passwordValue,
        });
        try {
            const res = await api.post("/api/auth/register", formData);
            submitButton.classList.remove("loading");
            showAlert(alertMessage, res.data.message);
            redirectToPage("my-account");
        }
        catch (e) {
            console.error(e.response.data);
            const message = e.response.data.message;
            submitButton.classList.remove("loading");
            addFieldError(globalError, emailInput, message, true, emailLabel, true);
        }
    };
    dataFetching();
};
eyeIcon.addEventListener("click", () => handleEyeIcon(passwordInput, eyeIcon, eyeOffIcon));
eyeOffIcon.addEventListener("click", () => handleEyeOffIcon(passwordInput, eyeIcon, eyeOffIcon));
form.addEventListener("submit", handleFormSubmit);
