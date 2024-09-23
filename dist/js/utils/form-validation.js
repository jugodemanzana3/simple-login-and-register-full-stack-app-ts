const validateEmail = (emailValue, errorMessage, emailInput, label) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(emailValue)) {
        addFieldError(errorMessage, emailInput, "Correo invalido.", true, label, true);
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
const validateInput = (inputValue, errorMessage, input, label) => {
    if (inputValue === "") {
        addFieldError(errorMessage, input, "Este campo es obligatorio.", false, label, false);
        return true;
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
    inputs.forEach((input, i) => {
        const label = labels[i];
        const errorMessage = errorMessages[i];
        const inputElement = input;
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
export { validateEmail, validateInputs, validatePasswordLength, confirmPasswordMatch, validateInput, addFieldError, removeFieldsError, removeFieldError, };
