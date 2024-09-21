/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!*****************************************!*\
  !*** ./src/ts/utils/form-validation.ts ***!
  \*****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addFieldError: () => (/* binding */ addFieldError),
/* harmony export */   confirmPasswordMatch: () => (/* binding */ confirmPasswordMatch),
/* harmony export */   removeFieldError: () => (/* binding */ removeFieldError),
/* harmony export */   removeFieldsError: () => (/* binding */ removeFieldsError),
/* harmony export */   validateEmail: () => (/* binding */ validateEmail),
/* harmony export */   validateInput: () => (/* binding */ validateInput),
/* harmony export */   validateInputs: () => (/* binding */ validateInputs),
/* harmony export */   validatePasswordLength: () => (/* binding */ validatePasswordLength)
/* harmony export */ });
const validateEmail = (emailValue, errorMessage, emailInput, label) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(emailValue)) {
        addFieldError(errorMessage, emailInput, "Email invalido.", true, label, true);
        return true;
    }
    return false;
};
const validateInputs = (labels, inputs, errorMessages) => {
    let emptyInput = false;
    inputs.forEach((input, i) => {
        const inputElement = input;
        if (inputElement.value === "") {
            const label = labels[i];
            const errorMessage = errorMessages[i];
            addFieldError(errorMessage, inputElement, "Este campo es obligatorio.", false, label, false);
            emptyInput = true;
        }
        else {
            const label = labels[i];
            const errorMessage = errorMessages[i];
            removeFieldError(errorMessage, inputElement, label);
        }
    });
    return emptyInput;
};
const validatePasswordLength = (password, errorMessage, input, label) => {
    if (password.length < 8) {
        addFieldError(errorMessage, input, "Logitud de contraseña invalida.", true, label, true);
        return true;
    }
    return false;
};
const confirmPasswordMatch = (password, confirmPassword, errorMessage, confirmPasswordInput, label) => {
    if (password !== confirmPassword) {
        addFieldError(errorMessage, confirmPasswordInput, "Las contraseñas no coinciden.", true, label, true);
        return true;
    }
    return false;
};
const validateInput = (inputValue, requiredField, input) => {
    const labelName = input.id.replace("-input", "");
    const label = document.querySelector(`label[for="${labelName}"]`);
    if (inputValue === "") {
        requiredField.style.display = "block";
        label.style.color = "#9A0000";
        input.style.outlineColor = "#9A0000";
        input.style.borderColor = "#9A0000";
        return true;
    }
    else {
        requiredField.style.display = "";
    }
    return false;
};
const addFieldError = (errorMessage, input, message, isBold, label, isFocused) => {
    if (isBold) {
        errorMessage.style.fontWeight = "600";
    }
    else {
        errorMessage.style.fontWeight = "500";
    }
    errorMessage.textContent = message;
    errorMessage.classList.add("visible");
    if (isFocused)
        input.focus();
    label.style.color = "#9A0000";
    input.style.outlineColor = "#9A0000";
    input.style.borderColor = "#9A0000";
};
const removeFieldsError = (errorMessages, inputs, labels, globalError) => {
    console.log("removeFieldsError");
    inputs.forEach((input, i) => {
        const label = labels[i];
        const errorMessage = errorMessages[i];
        const inputElement = inputs[i];
        errorMessage.textContent = "";
        errorMessage.classList.remove("visible");
        label.style.color = "";
        inputElement.style.outlineColor = "";
        inputElement.style.borderColor = "";
    });
    globalError.textContent = "";
    globalError.classList.remove("visible");
};
const removeFieldError = (errorMessage, input, label) => {
    errorMessage.textContent = "";
    errorMessage.classList.remove("visible");
    label.style.color = "";
    input.style.outlineColor = "";
    input.style.borderColor = "";
};


/******/ })()
;
//# sourceMappingURL=formValidation.bundle.js.map