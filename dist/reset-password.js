var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { validateInputs, confirmPasswordMatch, validatePasswordLength } from './utils.js';
//
let token;
const getToken = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const urlToken = urlParams.get('token');
    if (urlToken) {
        token = urlToken;
    }
    else {
        window.location.href = './forgot-password.html';
    }
};
getToken();
console.log(token);
// Revisar
// Show and hide password for multiple inputs
const passwordInputs = document.querySelectorAll('.input');
const eyeIcons = document.querySelectorAll('.eye-icon');
const eyeOffIcons = document.querySelectorAll('.eye-off-icon');
let isVisible = [false, false];
const handlePasswordInput = (index) => {
    const passwordInput = passwordInputs[index];
    if (passwordInput.value === '') {
        hideIcon(isVisible[index], index);
    }
    else {
        showIcon(isVisible[index], index);
    }
};
const showIcon = (isVisible, index) => {
    const eyeIcon = eyeIcons[index];
    const eyeOffIcon = eyeOffIcons[index];
    if (isVisible) {
        eyeOffIcon.classList.add('visible');
    }
    else {
        eyeIcon.classList.add('visible');
    }
};
const hideIcon = (isVisible, index) => {
    const eyeIcon = eyeIcons[index];
    const eyeOffIcon = eyeOffIcons[index];
    if (isVisible) {
        eyeOffIcon.classList.remove('visible');
    }
    else {
        eyeIcon.classList.remove('visible');
    }
};
const handleEyeIcon = (e, index) => {
    e.preventDefault();
    const passwordInput = passwordInputs[index];
    passwordInput.type = 'text';
    isVisible[index] = true;
    eyeIcons[index].classList.remove('visible');
    eyeOffIcons[index].classList.add('visible');
};
const handleEyeOffIcon = (e, index) => {
    e.preventDefault();
    const passwordInput = passwordInputs[index];
    passwordInput.type = 'password';
    isVisible[index] = false;
    eyeOffIcons[index].classList.remove('visible');
    eyeIcons[index].classList.add('visible');
};
passwordInputs.forEach((input, index) => {
    console.log(input);
    input.addEventListener('input', () => handlePasswordInput(index));
    eyeIcons[index].addEventListener('click', (e) => handleEyeIcon(e, index));
    eyeOffIcons[index].addEventListener('click', (e) => handleEyeOffIcon(e, index));
});
//
const form = document.querySelector('.form');
const handleFormSubmit = (e) => {
    e.preventDefault();
    const labels = document.querySelectorAll('.label');
    const inputs = document.querySelectorAll('.input');
    const passwordLabel = document.querySelector('#password-label');
    const confirmPasswordLabel = document.querySelector('#confirm-password-label');
    const passwordInput = document.querySelector('#password-input');
    const confirmPasswordInput = document.querySelector('#confirm-password-input');
    const requiredFields = document.querySelectorAll('.field-required');
    const errorMessage = document.querySelector('.error-message');
    const alertMessage = document.querySelector('.alert-message');
    if (validateInputs(labels, inputs, requiredFields, errorMessage))
        return;
    if (confirmPasswordMatch(passwordInput.value, confirmPasswordInput.value, errorMessage, confirmPasswordLabel, confirmPasswordInput))
        return;
    if (validatePasswordLength(passwordInput.value, errorMessage, passwordLabel, passwordInput))
        return;
    const dataFetching = () => __awaiter(void 0, void 0, void 0, function* () {
        const submitButton = document.querySelector('.submit-button');
        const url = 'http://localhost:3000/api/auth/reset-password';
        const bodyData = JSON.stringify({ newPassword: confirmPasswordInput.value });
        submitButton.classList.add('loading');
        try {
            const res = yield fetch(url, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                body: bodyData,
            });
            const data = yield res.json();
            if (res.ok) {
                submitButton.classList.remove('loading');
                alertMessage.textContent = data.message;
                alertMessage.classList.add('visible');
                setTimeout(() => {
                    alertMessage.classList.remove('visible');
                }, 3000);
                passwordInput.value = '';
                confirmPasswordInput.value = '';
                setTimeout(() => {
                    window.location.href = '../login.html';
                }, 3000);
            }
            else {
                submitButton.classList.remove('loading');
                errorMessage.textContent = data.error;
                errorMessage.classList.add('visible');
                passwordLabel.style.color = '#9A0000';
                passwordInput.style.outlineColor = '#9A0000';
                passwordInput.style.borderColor = '#9A0000';
                confirmPasswordLabel.style.color = '#9A0000';
                confirmPasswordInput.style.outlineColor = '#9A0000';
                confirmPasswordInput.style.borderColor = '#9A0000';
            }
        }
        catch (error) {
            submitButton.classList.remove('loading');
            console.log('Error');
        }
    });
    dataFetching();
};
form.addEventListener('submit', handleFormSubmit);
