"use strict";
const form = document.querySelector('.input form');
const input = document.querySelector('.input input');
const validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const error = document.querySelector('.input__error');
const errorIcon = document.querySelector('.input__errorImg');
const sucessEmail = document.querySelector('.sucessEmail');
const textSucessEmail = document.querySelector('.sucessEmail p');
const buttonSucess = document.querySelector('.sucessEmail a');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (input.value.match(validEmail) !== null) {
        error.classList.add('input__error--none');
        errorIcon.classList.add('input__errorImg--none');
        input.style.borderColor = '#f1e9e9';
        form.style.display = 'none';
        sucessEmail.classList.remove('sucessEmail--none');
        textSucessEmail.innerHTML = `✅ Email sent successfully, check <span>${input.value}</span>!`;
    }
    else {
        error.classList.remove('input__error--none');
        errorIcon.classList.remove('input__errorImg--none');
        input.style.borderColor = 'red';
        sucessEmail.classList.add('sucessEmail--none');
    }
});
buttonSucess.addEventListener('click', () => {
    form.style.display = 'block';
    sucessEmail.classList.add('sucessEmail--none');
    input.value = '';
});
