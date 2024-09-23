const handleEyeIcon = (input, eyeIcon, eyeOffIcon) => {
    input.type = "text";
    eyeIcon.classList.remove("visible");
    eyeOffIcon.classList.add("visible");
};
const handleEyeOffIcon = (input, eyeIcon, eyeOffIcon) => {
    input.type = "password";
    eyeIcon.classList.add("visible");
    eyeOffIcon.classList.remove("visible");
};
export { handleEyeIcon, handleEyeOffIcon };
