import { validateInput, validateEmail } from './utils.js';

import config from './config.js';

const form = document.querySelector('.form') as HTMLFormElement;

const handleFormSubmit = (e: Event) => {
  e.preventDefault();

  const emailLabel = document.querySelector('#email-label') as HTMLElement;

  const requiredField = document.querySelector('.field-required') as HTMLElement;
  const errorMessage = document.querySelector('.error-message') as HTMLElement;
  const alertMessage = document.querySelector('.alert-message') as HTMLElement;

  const emailInput = document.querySelector('#email-input') as HTMLInputElement;

  if (validateInput(emailInput.value, requiredField, emailLabel, emailInput)) return;

  if (validateEmail(emailInput.value, errorMessage, emailLabel, emailInput)) return;

  const dataFetching = async () => {
    const submitButton = document.querySelector('.submit-button') as HTMLButtonElement;
    const url = `${config.SERVER_URL}api/auth/forgot-password`;

    const bodyData = JSON.stringify({ email: emailInput.value });

    submitButton.classList.add('loading');

    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: bodyData,
        credentials: 'include',
      });

      const data = await res.json();

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
          window.location.href = '../login.html';
        }, 3000);
      } else {
        submitButton.classList.remove('loading');

        errorMessage.textContent = data.error;
        errorMessage.classList.add('visible');

        emailLabel.style.color = '#9A0000';
        emailInput.focus();
        emailInput.style.outlineColor = '#9A0000';
        emailInput.style.borderColor = '#9A0000';
      }
    } catch (error) {
      submitButton.classList.remove('loading');

      console.log('Error');
    }
  };

  dataFetching();
};

form.addEventListener('submit', handleFormSubmit);
