const verifyToken = async () => {
  const userName = document.querySelector('.user-name') as HTMLElement;
  const url = 'http://localhost:3000/api/auth/verify';

  // console.log('kk');

  try {
    const res = await fetch(url, {
      method: 'GET',
      credentials: 'include',
    });

    if (res.ok) {
      console.log('auth');

      const data = await res.json();
      console.log(data.email);

      userName.textContent = data.name;
    } else {
      console.log('no auth');
      window.location.href = "../login.html"
    }

    console.log(res.status);
  } catch (error) {
    console.log(error);
  }
};

verifyToken();

const logoutButton = document.querySelector('.logout-button') as HTMLButtonElement;

logoutButton.addEventListener('click', () => {
  console.log('click');
  const url = 'http://localhost:3000/api/auth/logout';

  const logout = async () => {
    console.log('logout');
    try {
      const res = await fetch(url, {
        method: 'POST',
        credentials: 'include',
      });

      if (res.ok) {
        const data = await res.json();
        console.log(data);
        window.location.href = "../login.html"
      } else {
        console.log('error');
      }
    } catch (error) {
      console.log(error);
    }
  };

  logout();
});
