namespace Register {
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
  const form = document.querySelector('.form') as HTMLFormElement;

  const handleRegisterForm = (e: Event) => {
    e.preventDefault();

    const emailLabel = document.querySelector('#email-label') as HTMLElement;
    const nameInput = document.querySelector('#name-input') as HTMLInputElement;
    const emailInput = document.querySelector('#email-input') as HTMLInputElement;
    const passwordInput = document.querySelector('#password-input') as HTMLInputElement;
    const labels = document.querySelectorAll<HTMLInputElement>('.label');
    const inputs = document.querySelectorAll<HTMLInputElement>('.input');
    const requiredFields = document.querySelectorAll('.field-required');
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
      } else {
        const label = labels[i] as HTMLElement;
        const requiredField = requiredFields[i] as HTMLElement;

        label.style.color = '';
        requiredField.style.display = '';

        element.style.borderColor = '';
        element.style.outlineColor = '';
      }
    });

    const data = {
      name: nameInput.value,
      email: emailInput.value,
      password: passwordInput.value,
    };

    const dataJSON = JSON.stringify(data);

    if (!emptyInput) {
      const fetchRegister = async () => {
        const submitButton = document.querySelector('.submit-button') as HTMLButtonElement;
        const alertMessage = document.querySelector('.alert-message') as HTMLElement;
        const errorMessage = document.querySelector('.error-message') as HTMLElement;
        const url: string = 'http://localhost:3000/api/auth/register';

        try {
          submitButton.classList.add('loading');

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

            window.location.href = "../my-account.html"
          } else {
            submitButton.classList.remove('loading');

            const data = await res.json();

            errorMessage.textContent = data.message;
            errorMessage.classList.add('visible');

            emailLabel.style.color = '#9A0000';
            emailInput.focus();
            emailInput.style.outlineColor = '#9A0000';
            emailInput.style.borderColor = '#9A0000';
          }
        } catch (error) {
          console.error(error);
          submitButton.classList.remove('loading');
        }
      };

      fetchRegister();
    }
  };

  form.addEventListener('submit', handleRegisterForm);
}
