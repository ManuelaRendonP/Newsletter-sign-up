const emailInput = document.getElementById('email-input');
const submitButton = document.getElementById('submit-button');
const errorMessage = document.getElementById('error-message');
const dismiss = document.getElementById('dismiss');

emailInput.addEventListener('input', function () {
    if (emailInput.checkValidity()) {
        submitButton.classList.add('valid');
    } else {
        submitButton.classList.remove('valid');
    }
});

emailInput.addEventListener('input', function () {
    if (emailInput.validity.valid) {
        emailInput.classList.remove('error');
        errorMessage.textContent = '';
        submitButton.disabled = false;
    } else {
        emailInput.classList.add('error');
        errorMessage.textContent = 'Valid email required';
        submitButton.disabled = true;
    }
});

submitButton.addEventListener('click', function () {
    if (emailInput.checkValidity()) {
        window.location.href = 'subscribing.html';
    } else {
        submitButton.disabled = true;
    }
});