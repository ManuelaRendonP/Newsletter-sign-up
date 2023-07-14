const emailInput = document.getElementById('email-input');
const submitButton = document.getElementById('submit-button');

emailInput.addEventListener('input', function () {
    if (emailInput.checkValidity()) {
        submitButton.classList.add('valid');
    } else {
        submitButton.classList.remove('valid');
    }
});