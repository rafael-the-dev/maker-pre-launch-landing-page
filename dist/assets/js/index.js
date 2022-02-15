let emailInput;
let errorLabel;

const submitHandler = event => {
    event.preventDefault();
    if(!Boolean(emailInput.value)) {
        emailInput.classList.add('border-visible');
        errorLabel.classList.remove('hidden');
    } else {
        emailInput.value = '';
        emailInput.classList.remove('border-visible', 'border', 'border-solid', 'border-red-700')
        errorLabel.classList.add('hidden');
    }
}

const start = () => {
    emailInput = document.querySelector('[data-email]');
    errorLabel = document.querySelector('[data-error-label]');
    document.querySelector('[data-form]').addEventListener('submit', submitHandler);
};

window.addEventListener('load', start)