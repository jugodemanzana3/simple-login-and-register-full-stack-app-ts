import { api, showAlert, redirectToPage, getUserData } from "../utils/utils";
const logoutButton = document.querySelector(".logout-button");
const fetchData = async (page) => {
    const userName = document.querySelector(".user-name");
    const data = await getUserData(page);
    if (data) {
        userName.textContent = data.name;
    }
};
fetchData("login");
const handleLogoutButton = () => {
    const logout = async () => {
        const alertMessage = document.querySelector(".alert-message");
        try {
            const res = await api.post("/api/auth/logout");
            showAlert(alertMessage, res.data.message);
            redirectToPage("login");
        }
        catch (e) {
            console.error(e.response.data);
        }
    };
    logout();
};
logoutButton.addEventListener("click", handleLogoutButton);
