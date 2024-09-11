const validateEmail = (emailValue: string, errorMessage: HTMLElement, emailLabel: HTMLElement, emailInput: HTMLInputElement) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(emailValue)) {
    errorMessage.textContent = 'Email invalido.';
    errorMessage.classList.add('visible');

    emailInput.focus();
    emailLabel.style.color = '#9A0000';
    emailInput.style.outlineColor = '#9A0000';
    emailInput.style.borderColor = '#9A0000';

    return true;
  } else {
    errorMessage.textContent = '.';
    errorMessage.classList.remove('visible');

    emailLabel.style.color = '';
    emailInput.style.outlineColor = '';
    emailInput.style.borderColor = '';

    return false;
  }
};

const validateInputs = (labels: any, inputs: any, requiredFields: any, errorMessage: HTMLElement) => {
  let emptyInput = false;

  inputs.forEach((element, i) => {
    if (element.value === '') {
      const label = labels[i] as HTMLElement;
      const requiredField = requiredFields[i] as HTMLElement;

      label.style.color = '#9A0000';
      requiredField.style.display = 'block';

      element.style.borderColor = '#9A0000';
      element.style.outlineColor = '#9A0000';

      emptyInput = true;

      errorMessage.textContent = '';
      errorMessage.classList.remove('visible');
    } else {
      const label = labels[i] as HTMLElement;
      const requiredField = requiredFields[i] as HTMLElement;

      label.style.color = '';
      requiredField.style.display = '';

      element.style.borderColor = '';
      element.style.outlineColor = '';
    }
  });

  return emptyInput;
};

const validatePasswordLength = (password: string, errorMessage: any, passwordLabel: any, passwordInput: any) => {
  if (password.length < 8) {
    errorMessage.textContent = 'Logitud de contraseña invalida..';
    errorMessage.classList.add('visible');

    passwordInput.focus();
    passwordLabel.style.color = '#9A0000';
    passwordInput.style.outlineColor = '#9A0000';
    passwordInput.style.borderColor = '#9A0000';

    return true;
  } else {
    errorMessage.textContent = '';
    errorMessage.classList.remove('visible');

    passwordLabel.style.color = '';
    passwordInput.style.outlineColor = '';
    passwordInput.style.borderColor = '';

    return false;
  }
};

const checkAuth = async (page: string) => {
  const url = 'http://localhost:3000/api/auth/verify';

  try {
    const res = await fetch(url, {
      method: 'GET',
      credentials: 'include',
    });

    if (res.ok) {
      window.location.href = `./${page}.html`;
    } else {
      console.log('Error');
    }
  } catch (error) {
    console.log(error);
  }
};

const confirmPasswordMatch = (password, confirmPassword, errorMessage, confirmPasswordLabel, confirmPasswordInput) => {
  if (password !== confirmPassword) {
    errorMessage.textContent = 'Las contraseñas no coinciden';
    errorMessage.classList.add('visible');

    confirmPasswordInput.focus();
    confirmPasswordLabel.style.color = '#9A0000';
    confirmPasswordInput.style.outlineColor = '#9A0000';
    confirmPasswordInput.style.borderColor = '#9A0000';
    return true;
  } else {
    errorMessage.textContent = '';
    errorMessage.classList.remove('visible');

    confirmPasswordLabel.style.color = '';
    confirmPasswordInput.style.outlineColor = '';
    confirmPasswordInput.style.borderColor = '';

    return false;
  }
};

const validateInput = (emailValue, requiredField: HTMLElement, emailLabel, emailInput) => {
  if (emailValue === '') {
    requiredField.style.display = 'block';

    emailLabel.style.color = '#9A0000';
    emailInput.style.outlineColor = '#9A0000';
    emailInput.style.borderColor = '#9A0000';

    return true;
  } else {
    requiredField.style.display = '';

    emailLabel.style.color = '';
    emailInput.style.outlineColor = '';
    emailInput.style.borderColor = '';

    return false;
  }
};

export { validateEmail, validateInputs, validatePasswordLength, checkAuth, confirmPasswordMatch, validateInput };
