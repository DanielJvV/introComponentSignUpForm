const firstName = document.querySelector("#fName");
const lastName = document.querySelector("#lName");
const email = document.querySelector("#email");
const password = document.querySelector("#pass");
const submit = document.querySelector(".submit");

const fNameError = document.querySelector("#fnError");
const lNameError = document.querySelector("#lnError");
const emailError = document.querySelector("#emError");
const passError = document.querySelector("#pwError");

const error = (selector, err) => {
    if (selector.value === "") {
        err.classList.remove("hidden");
    } else if (selector.value !== "" && err.classList.value === "") {
        err.classList.add("hidden");
    };
};

const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

const emailValidError = (selector, err) => {
    let emailValid = validateEmail(selector.value);
    if (emailValid === false) {
        err.classList.remove("hidden");
    } else if (emailValid === true && err.classList.value === "") {
        err.classList.add("hidden");
    };
};

submit.addEventListener("click", (e) => {
    e.preventDefault();
    error(firstName, fNameError);
    error(lastName, lNameError);
    error(password, passError);
    emailValidError(email, emailError);
})