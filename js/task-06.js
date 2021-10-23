const validationInputEl = document.querySelector('#validation-input');

const validation = (event) => {
    if (event.currentTarget.value.length === parseInt(event.currentTarget.getAttribute('data-length'))) {
        event.currentTarget.classList.add('valid');
        event.currentTarget.classList.replace("invalid", "valid");
    } else {
        event.currentTarget.classList.add('invalid');
        event.currentTarget.classList.replace("valid", "invalid");
    }
};

validationInputEl.addEventListener('blur', validation);
