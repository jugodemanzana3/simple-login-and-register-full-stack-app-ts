import { api, showAlert, redirectToPage } from "../utils/utils";
import { validateInputs, confirmPasswordMatch, validatePasswordLength, addFieldError, removeFieldsError } from "../utils/form-validation";
import { handleEyeIcon, handleEyeOffIcon } from "../utils/toggle-password-visibility";
const passwordInputs = document.querySelectorAll(".input");
const eyeIcons = document.querySelectorAll(".eye-icon");
const eyeOffIcons = document.querySelectorAll(".eye-off-icon");
const form = document.querySelector(".form");
let token;
const getUrlToken = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const urlToken = urlParams.get("token");
    if (urlToken) {
        token = urlToken;
    }
    else {
        window.location.href = "./forgot-password.html";
    }
};
getUrlToken();
passwordInputs.forEach((passwordInput, i) => {
    eyeIcons[i].addEventListener("click", () => handleEyeIcon(passwordInput, eyeIcons[i], eyeOffIcons[i]));
    eyeOffIcons[i].addEventListener("click", () => handleEyeOffIcon(passwordInput, eyeIcons[i], eyeOffIcons[i]));
});
const handleFormSubmit = (e) => {
    e.preventDefault();
    const labels = document.querySelectorAll(".label");
    const inputs = document.querySelectorAll(".input");
    const passwordInput = document.querySelector("#password-input");
    const confirmPasswordInput = document.querySelector("#confirm-password-input");
    const alertMessage = document.querySelector(".alert-message");
    const errorMessages = document.querySelectorAll(".error-message");
    const passwordValue = passwordInput.value.trim();
    const passwordLabel = labels[0];
    const confirmPasswordValue = confirmPasswordInput.value.trim();
    const confirmPasswordLabel = labels[1];
    const globalError = errorMessages[2];
    removeFieldsError(errorMessages, inputs, labels, globalError);
    if (validateInputs(labels, inputs, errorMessages))
        return;
    if (confirmPasswordMatch(passwordValue, confirmPasswordValue, globalError, confirmPasswordInput, confirmPasswordLabel))
        return;
    if (validatePasswordLength(passwordValue, globalError, passwordInput, passwordLabel))
        return;
    const dataFetching = async () => {
        const submitButton = document.querySelector(".submit-button");
        const formData = JSON.stringify({
            newPassword: passwordValue,
            confirmNewPassword: confirmPasswordValue,
        });
        submitButton.classList.add("loading");
        try {
            const res = await api.post("/api/auth/reset-password", formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            submitButton.classList.remove("loading");
            showAlert(alertMessage, res.data.message);
            passwordInput.value = "";
            confirmPasswordInput.value = "";
            redirectToPage("my-account");
        }
        catch (e) {
            console.error(e.response.data);
            const message = e.response.data.message;
            submitButton.classList.remove("loading");
            addFieldError(globalError, passwordInput, message, true, passwordLabel, true);
        }
    };
    dataFetching();
};
form.addEventListener("submit", handleFormSubmit);
