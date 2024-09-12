var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import config from './config.js';
//
const verifyToken = () => __awaiter(void 0, void 0, void 0, function* () {
    const userName = document.querySelector('.user-name');
    const url = `${config.SERVER_URL}/api/auth/verify`;
    try {
        const res = yield fetch(url, {
            method: 'GET',
            credentials: 'include',
        });
        if (res.ok) {
            const data = yield res.json();
            userName.textContent = data.name;
        }
        else {
            window.location.href = './login.html';
        }
    }
    catch (error) {
        console.log(error);
    }
});
verifyToken();
//
const logoutButton = document.querySelector('.logout-button');
const handleLogoutButton = () => {
    const url = `${config.SERVER_URL}/api/auth/logout`;
    const logout = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const res = yield fetch(url, {
                method: 'POST',
                credentials: 'include',
            });
            if (res.ok) {
                window.location.href = './login.html';
            }
            else {
                console.log('Error');
            }
        }
        catch (error) {
            console.log(error);
        }
    });
    logout();
};
logoutButton.addEventListener('click', handleLogoutButton);
