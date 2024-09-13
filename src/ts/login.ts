import { validateEmail, validateInputs, checkAuth } from './utils.js';

import config from './config.js';

//
checkAuth('my-account');

// Show and hide password
const passwordInput = document.querySelector('#password-input') as HTMLInputElement;
const eyeIcon = document.querySelector('.eye-icon') as HTMLElement;
const eyeOffIcon = document.querySelector('.eye-off-icon') as HTMLElement;

let isVisible: boolean = false;

const handlePasswordInput = () => {
  if (passwordInput.value === '') {
    hideIcon(isVisible);
  } else {
    showIcon(isVisible);
  }
};

const showIcon = (p: boolean) => {
  const eyeIcon = document.querySelector('.eye-icon') as HTMLElement;
  const eyeOffIcon = document.querySelector('.eye-off-icon') as HTMLElement;

  if (p) {
    eyeOffIcon.classList.add('visible');
  } else {
    eyeIcon.classList.add('visible');
  }
};

const hideIcon = (p: boolean) => {
  const eyeIcon = document.querySelector('.eye-icon') as HTMLElement;
  const eyeOffIcon = document.querySelector('.eye-off-icon') as HTMLElement;

  if (p) {
    eyeOffIcon.classList.remove('visible');
  } else {
    eyeIcon.classList.remove('visible');
  }
};

const handleEyeIcon = (e: Event) => {
  e.preventDefault();

  passwordInput.type = 'text';
  isVisible = true;
  eyeIcon.classList.remove('visible');
  eyeOffIcon.classList.add('visible');
};

const handleEyeOffIcon = (e: Event) => {
  e.preventDefault();

  passwordInput.type = 'password';
  isVisible = false;
  eyeOffIcon.classList.remove('visible');
  eyeIcon.classList.add('visible');
};

passwordInput.addEventListener('input', handlePasswordInput);
eyeIcon.addEventListener('click', handleEyeIcon);
eyeOffIcon.addEventListener('click', handleEyeOffIcon);

// Form submit
const form = document.querySelector('.form') as HTMLFormElement;

const handleFormSubmit = (e: Event) => {
  e.preventDefault();
  const labels = document.querySelectorAll<HTMLInputElement>('.label');
  const inputs = document.querySelectorAll<HTMLInputElement>('.input');

  const emailLabel = document.querySelector('#email-label') as HTMLElement;
  const passwordLabel = document.querySelector('#password-label') as HTMLElement;

  const emailInput = document.querySelector('#email-input') as HTMLInputElement;
  const passwordInput = document.querySelector('#password-input') as HTMLInputElement;

  const requiredFields = document.querySelectorAll('.field-required');
  const errorMessage = document.querySelector('.error-message') as HTMLElement;

  if (validateInputs(labels, inputs, requiredFields, errorMessage)) return;

  if (validateEmail(emailInput.value, errorMessage, emailLabel, emailInput)) return;

  const dataFetching = async () => {
    const submitButton = document.querySelector('.submit-button') as HTMLButtonElement;
    const alertMessage = document.querySelector('.alert-message') as HTMLElement;
    const url = `${config.SERVER_URL}/api/auth/login`;

    submitButton.classList.add('loading');

    const data = {
      email: emailInput.value,
      password: passwordInput.value,
    };

    const dataJSON = JSON.stringify(data);

    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: dataJSON,
        credentials: 'include',
      });

      if (res.ok) {
        submitButton.classList.remove('loading');

        const data = await res.json();

        // console.log("token:", data)

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

        setTimeout(() => {
          window.location.href = './my-account.html';
        }, 3000);
      } else {
        submitButton.classList.remove('loading');

        const data = await res.json();

        errorMessage.textContent = data.message;
        errorMessage.classList.add('visible');

        passwordLabel.style.color = '#9A0000';
        passwordInput.focus();
        passwordInput.style.outlineColor = '#9A0000';
        passwordInput.style.borderColor = '#9A0000';
      }
    } catch (error) {
      console.error(error);
      submitButton.classList.remove('loading');
    }
  };

  dataFetching();
};

form.addEventListener('submit', handleFormSubmit);
