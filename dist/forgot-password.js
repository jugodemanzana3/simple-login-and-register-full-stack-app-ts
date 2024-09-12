var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { validateInput, validateEmail } from './utils.js';
import config from './config.js';
const form = document.querySelector('.form');
const handleFormSubmit = (e) => {
    e.preventDefault();
    const emailLabel = document.querySelector('#email-label');
    const requiredField = document.querySelector('.field-required');
    const errorMessage = document.querySelector('.error-message');
    const alertMessage = document.querySelector('.alert-message');
    const emailInput = document.querySelector('#email-input');
    if (validateInput(emailInput.value, requiredField, emailLabel, emailInput))
        return;
    if (validateEmail(emailInput.value, errorMessage, emailLabel, emailInput))
        return;
    const dataFetching = () => __awaiter(void 0, void 0, void 0, function* () {
        const submitButton = document.querySelector('.submit-button');
        const url = `${config.SERVER_URL}/api/auth/forgot-password`;
        const bodyData = JSON.stringify({ email: emailInput.value });
        submitButton.classList.add('loading');
        try {
            const res = yield fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: bodyData,
                credentials: 'include',
            });
            const data = yield res.json();
            if (res.ok) {
                submitButton.classList.remove('loading');
                alertMessage.textContent = data.message;
                alertMessage.classList.add('visible');
                setTimeout(() => {
                    alertMessage.classList.remove('visible');
                }, 3000);
                errorMessage.textContent = '';
                errorMessage.classList.remove('visible');
                emailLabel.style.color = '';
                emailInput.style.outlineColor = '';
                emailInput.style.borderColor = '';
                emailInput.value = '';
                setTimeout(() => {
                    window.location.href = './login.html';
                }, 3000);
            }
            else {
                submitButton.classList.remove('loading');
                errorMessage.textContent = data.error;
                errorMessage.classList.add('visible');
                emailLabel.style.color = '#9A0000';
                emailInput.focus();
                emailInput.style.outlineColor = '#9A0000';
                emailInput.style.borderColor = '#9A0000';
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
