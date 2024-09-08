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
const verifyToken = () => __awaiter(void 0, void 0, void 0, function* () {
    const userName = document.querySelector('.user-name');
    const url = 'http://localhost:3000/api/auth/verify';
    // console.log('kk');
    try {
        const res = yield fetch(url, {
            method: 'GET',
            credentials: 'include',
        });
        if (res.ok) {
            console.log('auth');
            const data = yield res.json();
            console.log(data.email);
            userName.textContent = data.name;
        }
        else {
            console.log('no auth');
            window.location.href = "../login.html";
        }
        console.log(res.status);
    }
    catch (error) {
        console.log(error);
    }
});
verifyToken();
const logoutButton = document.querySelector('.logout-button');
logoutButton.addEventListener('click', () => {
    console.log('click');
    const url = 'http://localhost:3000/api/auth/logout';
    const logout = () => __awaiter(void 0, void 0, void 0, function* () {
        console.log('logout');
        try {
            const res = yield fetch(url, {
                method: 'POST',
                credentials: 'include',
            });
            if (res.ok) {
                const data = yield res.json();
                console.log(data);
                window.location.href = "../login.html";
            }
            else {
                console.log('error');
            }
        }
        catch (error) {
            console.log(error);
        }
    });
    logout();
});
