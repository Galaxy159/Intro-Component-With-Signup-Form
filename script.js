"use-strict";

const input = document.querySelectorAll(".form__input--text");
const inputEmail = document.querySelector(".input__email");
const errorSign = document.querySelectorAll(".form__input--img");
const errorMsg = document.querySelectorAll(".form__input--error");
const inputBtn = document.querySelector(".form__button");

const validateEmail = function (email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

const showError = (index) => {
  errorSign[index].classList.add("show");
  errorMsg[index].classList.add("show");
};

const hideError = (index) => {
  errorSign[index].classList.remove("show");
  errorMsg[index].classList.remove("show");
};

inputBtn.addEventListener("click", (e) => {
  e.preventDefault();
  input.forEach((input, index) => {
    if (input.value === "") {
      showError(index);
    } else {
      hideError(index);
    }
  });

  if (!validateEmail(inputEmail.value)) {
    showError(2);
  } else {
    hideError(2);
  }
});
