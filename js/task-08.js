
const refs = {
    formEl: document.querySelector('.login-form'),
    emailEl: document.querySelector('[type="email"]'),
    passwordEl: document.querySelector('[type="password"]'),
} 

const onSubmitForm = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = {};

    if (refs.emailEl.value === '' || refs.passwordEl.value === '') {
        alert('все поля должны быть заполнены!')
    } else {
        formData.forEach((value, key) => {
            data[key]=value
        });
        console.log(data)
        event.currentTarget.reset()
    }
}

refs.formEl.addEventListener('submit', onSubmitForm);

