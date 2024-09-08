"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var Login;
(function (Login) {
    // Show and hide password
    const passwordInput = document.querySelector('#password-input');
    const eyeIcon = document.querySelector('.eye-icon');
    const eyeOffIcon = document.querySelector('.eye-off-icon');
    let isVisible = false;
    const handlePasswordInput = () => {
        if (passwordInput.value === '') {
            hideIcon(isVisible);
        }
        else {
            showIcon(isVisible);
        }
    };
    const showIcon = (p) => {
        const eyeIcon = document.querySelector('.eye-icon');
        const eyeOffIcon = document.querySelector('.eye-off-icon');
        if (p) {
            eyeOffIcon.classList.add('visible');
        }
        else {
            eyeIcon.classList.add('visible');
        }
    };
    const hideIcon = (p) => {
        const eyeIcon = document.querySelector('.eye-icon');
        const eyeOffIcon = document.querySelector('.eye-off-icon');
        if (p) {
            eyeOffIcon.classList.remove('visible');
        }
        else {
            eyeIcon.classList.remove('visible');
        }
    };
    const handleEyeIcon = () => {
        passwordInput.type = 'text';
        isVisible = true;
        eyeIcon.classList.remove('visible');
        eyeOffIcon.classList.add('visible');
    };
    const handleEyeOffIcon = () => {
        passwordInput.type = 'password';
        isVisible = false;
        eyeOffIcon.classList.remove('visible');
        eyeIcon.classList.add('visible');
    };
    passwordInput.addEventListener('input', handlePasswordInput);
    eyeIcon.addEventListener('click', handleEyeIcon);
    eyeOffIcon.addEventListener('click', handleEyeOffIcon);
    // Form submit
    const form = document.querySelector('.form');
    const handleLoginForm = (e) => {
        e.preventDefault();
        const passwordLabel = document.querySelector('#pasword-label');
        const emailInput = document.querySelector('#email-input');
        const passwordInput = document.querySelector('#password-input');
        const labels = document.querySelectorAll('.label');
        const inputs = document.querySelectorAll('.input');
        const requiredFields = document.querySelectorAll('.field-required');
        let emptyInput = false;
        inputs.forEach((element, i) => {
            if (element.value === '') {
                const label = labels[i];
                const requiredField = requiredFields[i];
                label.style.color = '#9A0000';
                requiredField.style.display = 'block';
                element.style.borderColor = '#9A0000';
                element.style.outlineColor = '#9A0000';
                emptyInput = true;
            }
            else {
                const label = labels[i];
                const requiredField = requiredFields[i];
                label.style.color = '';
                requiredField.style.display = '';
                element.style.borderColor = '';
                element.style.outlineColor = '';
            }
        });
        const data = {
            email: emailInput.value,
            password: passwordInput.value,
        };
        const dataJSON = JSON.stringify(data);
        if (!emptyInput) {
            const fetchLogin = () => __awaiter(this, void 0, void 0, function* () {
                const submitButton = document.querySelector('.submit-button');
                const alertMessage = document.querySelector('.alert-message');
                const errorMessage = document.querySelector('.error-message');
                const url = 'http://localhost:3000/api/auth/login';
                try {
                    submitButton.classList.add('loading');
                    const res = yield fetch(url, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: dataJSON,
                        credentials: 'include',
                    });
                    if (res.ok) {
                        submitButton.classList.remove('loading');
                        const data = yield res.json();
                        alertMessage.textContent = data.message;
                        alertMessage.classList.add('visible');
                        setTimeout(() => {
                            alertMessage.classList.remove('visible');
                        }, 3000);
                        errorMessage.textContent = '';
                        errorMessage.classList.remove('visible');
                        passwordInput.style.color = '';
                        passwordInput.style.outlineColor = '';
                        passwordInput.style.borderColor = '';
                        window.location.href = "../my-account.html";
                    }
                    else {
                        submitButton.classList.remove('loading');
                        const data = yield res.json();
                        errorMessage.textContent = data.message;
                        errorMessage.classList.add('visible');
                        passwordLabel.style.color = '#9A0000';
                        passwordInput.focus();
                        passwordInput.style.outlineColor = '#9A0000';
                        passwordInput.style.borderColor = '#9A0000';
                    }
                }
                catch (error) {
                    console.error(error);
                    submitButton.classList.remove('loading');
                }
            });
            fetchLogin();
        }
    };
    form.addEventListener('submit', handleLoginForm);
})(Login || (Login = {}));
