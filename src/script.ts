const form = document.querySelector('.input form') as HTMLFormElement;

const input = document.querySelector('.input input') as HTMLInputElement;
const validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const error = document.querySelector('.input__error') as HTMLElement;
const errorIcon = document.querySelector('.input__errorImg') as HTMLElement;
const sucessEmail = document.querySelector('.sucessEmail') as HTMLElement;
const textSucessEmail = document.querySelector('.sucessEmail p') as HTMLElement;
const buttonSucess= document.querySelector('.sucessEmail a') as HTMLElement;

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if(input.value.match(validEmail) !== null){

        error.classList.add('input__error--none');
        errorIcon.classList.add('input__errorImg--none')

        input.style.borderColor = '#f1e9e9';
        form.style.display = 'none';

        sucessEmail.classList.remove('sucessEmail--none')
        textSucessEmail.innerHTML = `✅ Email sent successfully, check <span>${input.value}</span>!`;
    } 
    else{
        error.classList.remove('input__error--none');
        errorIcon.classList.remove('input__errorImg--none')
        
        input.style.borderColor = 'red';
        sucessEmail.classList.add('sucessEmail--none')
        
    }
})

buttonSucess.addEventListener('click', () => {
    form.style.display = 'block';
    sucessEmail.classList.add('sucessEmail--none')
    input.value = ''

})