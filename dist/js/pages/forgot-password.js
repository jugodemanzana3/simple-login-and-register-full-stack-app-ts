import { api, showAlert, redirectToPage, verifyToken } from "../utils/utils";
import { validateEmail, validateInput, addFieldError, removeFieldsError } from "../utils/form-validation";
const form = document.querySelector(".form");
verifyToken("my-account");
const handleFormSubmit = (e) => {
    e.preventDefault();
    const labels = document.querySelectorAll(".label");
    const inputs = document.querySelectorAll(".input");
    const alertMessage = document.querySelector(".alert-message");
    const emailInput = document.querySelector("#email-input");
    const emailLabel = document.querySelector("#email-label");
    const errorMessages = document.querySelectorAll(".error-message");
    const emailValue = emailInput.value.trim();
    const emailError = errorMessages[0];
    const globalError = errorMessages[1];
    removeFieldsError(errorMessages, inputs, labels, globalError);
    if (validateInput(emailValue, emailError, emailInput, emailLabel))
        return;
    if (validateEmail(emailValue, globalError, emailInput, emailLabel))
        return;
    const dataFetching = async () => {
        const submitButton = document.querySelector(".submit-button");
        submitButton.classList.add("loading");
        const formData = JSON.stringify({ email: emailValue });
        try {
            const res = await api.post("/api/auth/forgot-password", formData);
            submitButton.classList.remove("loading");
            showAlert(alertMessage, res.data.message);
            emailInput.value = "";
            redirectToPage("login");
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
form.addEventListener("submit", handleFormSubmit);
