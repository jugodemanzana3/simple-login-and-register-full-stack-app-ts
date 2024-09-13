import config from "./config.js";

//
const verifyToken = async () => {
  const userName = document.querySelector(".user-name") as HTMLElement;
  const url = `${config.SERVER_URL}/api/auth/verify`;

  try {
    const res = await fetch(url, {
      credentials: "include",
    });

    if (res.ok) {
      const data = await res.json();

      userName.textContent = data.name;
    } else {
      window.location.href = "./login.html";
    }
  } catch (error) {
    console.log(error);
  }
};

verifyToken();

//
const logoutButton = document.querySelector(
  ".logout-button",
) as HTMLButtonElement;

const handleLogoutButton = () => {
  const url = `${config.SERVER_URL}/api/auth/logout`;

  const logout = async () => {
    const alertMessage = document.querySelector(
      ".alert-message",
    ) as HTMLElement;

    try {
      const res = await fetch(url, {
        method: "POST",
        credentials: "include",
      });

      const data = await res.json();

      if (res.ok) {
        alertMessage.textContent = data.message;
        alertMessage.classList.add("visible");

        setTimeout(() => {
          alertMessage.classList.remove("visible");
        }, 3000);

        setTimeout(() => {
          window.location.href = "./login.html";
        }, 3000);
      } else {
        console.log("Error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  logout();
};

logoutButton.addEventListener("click", handleLogoutButton);
