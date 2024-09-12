import config from './config.js';

//
const verifyToken = async () => {
  const userName = document.querySelector('.user-name') as HTMLElement;
  const url = `${config.SERVER_URL}/api/auth/verify`;

  try {
    const res = await fetch(url, {
      method: 'GET',
      credentials: 'include',
    });

    if (res.ok) {
      const data = await res.json();

      userName.textContent = data.name;
    } else {
      window.location.href = './login.html';
    }
  } catch (error) {
    console.log(error);
  }
};

verifyToken();

//
const logoutButton = document.querySelector('.logout-button') as HTMLButtonElement;

const handleLogoutButton = () => {
  const url = `${config.SERVER_URL}/api/auth/logout`;

  const logout = async () => {
    try {
      const res = await fetch(url, {
        method: 'POST',
        credentials: 'include',
      });

      if (res.ok) {
        window.location.href = './login.html';
      } else {
        console.log('Error');
      }
    } catch (error) {
      console.log(error);
    }
  };

  logout();
};

logoutButton.addEventListener('click', handleLogoutButton);
