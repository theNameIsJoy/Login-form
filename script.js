// Show or Hide password

const changeEyeIcon = function (icon, inputField) {
    const eyeIcon = document.getElementById(icon);
    const input = document.getElementById(inputField);

    eyeIcon.addEventListener("click", () => {
        input.type === "password" ? input.type = "text" : input.type = "password"
        eyeIcon.classList.toggle("ri-eye-off-fill");
        eyeIcon.classList.toggle("ri-eye-fill");
    })
}

changeEyeIcon("eyeIconLogin", "loginInputField");
changeEyeIcon("eyeIconRegister", "RegisterInputField");


// 

const signUpButton = document.getElementById("sign_up-link");
const signInButton = document.getElementById("sign_in-link")
const loginBox = document.getElementById("login");
const registerBox = document.getElementById("register")

signUpButton.addEventListener("click", () => {
    // console.log('click click');
    loginBox.classList.toggle("remove");
    registerBox.classList.toggle("remove");
})

signInButton.addEventListener("click", () => {
    loginBox.classList.toggle("remove");
    registerBox.classList.toggle("remove");
})