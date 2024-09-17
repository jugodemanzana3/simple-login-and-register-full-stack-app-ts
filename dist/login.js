import axios from "axios";
import { validateEmail, validateInputs, checkAuth } from "./utils.js";
import config from "./config.js";
// Verify user auth
checkAuth("my-account");
// Show and hide password
const passwordInput = document.querySelector("#password-input");
const eyeIcon = document.querySelector(".eye-icon");
const eyeOffIcon = document.querySelector(".eye-off-icon");
const handleEyeIcon = (e) => {
    e.preventDefault();
    passwordInput.type = "text";
    eyeIcon.classList.remove("visible");
    eyeOffIcon.classList.add("visible");
};
const handleEyeOffIcon = (e) => {
    e.preventDefault();
    passwordInput.type = "password";
    eyeOffIcon.classList.remove("visible");
    eyeIcon.classList.add("visible");
};
eyeIcon.addEventListener("click", handleEyeIcon);
eyeOffIcon.addEventListener("click", handleEyeOffIcon);
// Form submit
const form = document.querySelector(".form");
const handleFormSubmit = (e) => {
    e.preventDefault();
    const labels = document.querySelectorAll(".label");
    const inputs = document.querySelectorAll(".input");
    const emailLabel = document.querySelector("#email-label");
    const passwordLabel = document.querySelector("#password-label");
    const emailInput = document.querySelector("#email-input");
    const passwordInput = document.querySelector("#password-input");
    const requiredFields = document.querySelectorAll(".field-required");
    const errorMessage = document.querySelector(".error-message");
    if (validateInputs(labels, inputs, requiredFields, errorMessage))
        return;
    if (validateEmail(emailInput.value, errorMessage, emailLabel, emailInput))
        return;
    const dataFetching = async () => {
        const submitButton = document.querySelector(".submit-button");
        const alertMessage = document.querySelector(".alert-message");
        // const url = `${config.SERVER_URL}/api/auth/login`
        submitButton.classList.add("loading");
        // const data = {
        //   email: emailInput.value,
        //   password: passwordInput.value,
        // }
        const data = JSON.stringify({
            email: emailInput.value,
            password: passwordInput.value,
        });
        try {
            const server = axios.create({
                baseURL: `${config.SERVER_URL}`,
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: true
            });
            const resData = server.post("/api/auth/login", data);
            console.log(resData);
            // const res = await fetch(url, {
            //   method: "POST",
            //   headers: {
            //     "Content-Type": "application/json",
            //   },
            //   body: dataJSON,
            //   credentials: "include",
            // })
            // if (res.ok) {
            //   submitButton.classList.remove("loading")
            //   const data = await res.json()
            //   alertMessage.textContent = data.message
            //   alertMessage.classList.add("visible")
            //   setTimeout(() => {
            //     alertMessage.classList.remove("visible")
            //   }, 3000)
            //   errorMessage.textContent = ""
            //   errorMessage.classList.remove("visible")
            //   passwordInput.style.color = ""
            //   passwordInput.style.outlineColor = ""
            //   passwordInput.style.borderColor = ""
            //   setTimeout(() => {
            //     window.location.href = "./my-account.html"
            //   }, 3000)
            // } else {
            //   submitButton.classList.remove("loading")
            //   const data = await res.json()
            //   errorMessage.textContent = data.message
            //   errorMessage.classList.add("visible")
            //   passwordLabel.style.color = "#9A0000"
            //   passwordInput.focus()
            //   passwordInput.style.outlineColor = "#9A0000"
            //   passwordInput.style.borderColor = "#9A0000"
            // }
        }
        catch (e) {
            console.error(e);
            submitButton.classList.remove("loading");
        }
    };
    dataFetching();
};
form.addEventListener("submit", handleFormSubmit);
